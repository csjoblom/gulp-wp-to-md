/*jshint esnext: true /*
/*
 * gulp-wp-to-md
 * https://github.com/csjoblom/gulp-wp-to-md
 *
 * Copyright (c) 2015 Chris Sjoblom
 * Licensed under the MIT license.
 */
'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var PluginError = gutil.PluginError;
var File = gutil.File;
var Convert = require('convert-wp-to-md');

//consts
const PLUGIN_NAME = 'gulp-wp-to-md';

// file can be a vinyl file object or a string
// when a string it will construct a new one
module.exports = function(file, opt) {
    if (!file) {
        throw new PluginError(PLUGIN_NAME, 'Missing file option for gulp-wp-to-md');
    }
    opt = opt || {};

    //to preserve existing |undefined| behavior and to introduce |newLine: ""| for binaries
    if (typeof opt.newLine !== 'string') {
        opt.newLine = gutil.linefeed;
    }

    var convert;
    var fileName;
    var latestFile;
    var latestMod;

    if (typeof file === 'string') {
        filename = file;
    } else if (typeof file.path === 'string') {
        fileName = path.basename(file.path);
    } else {
        throw new PluginError(PLUGIN_NAME, 'Missing path in file options for gulp-wp-to-md');
    }

    function bufferContents(file, encode, callback) {
        //ignore empty
        if (file.isNull()) {
            callback();
            return;
        }

        // we dont do streams yet
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Steaming not supported'));
            callback();
            return;
        }

        // set latest file if not set already
        // or if current file was mod more recently
        if (!latestMod || file.state && file.stat.mtime > latestMod) {
            latestFile = file;
            latestMod = file.stat && file.stat.mtime;
        }

        // construct a conversion instance
        if (!convert) {
            convert = new Convert(fileName);
        }

        // add file to conversion instance
        convert.add(file.relative, file.contents);
        callback();
    }

    function endStream(callback) {
        //no file passed in, no file goes out
        if (!latestFile || !convert) {
            callback();
            return;
        }

        var convertedFile;

        // if file opt was a file path
        // clone everything from the latest file
        if (typeof file === 'string') {
            convertedFile = latestFile.clone({
                contents: false
            });
            convertedFile.path = path.join(latestFile.base, file);
        } else {
            convertedFile = new File(file);
        }

        convertedFile.contents = convert.content;

        this.push(convertedFile);
        callback();
    }

    return through.obj(bufferContents, endStream);
}
