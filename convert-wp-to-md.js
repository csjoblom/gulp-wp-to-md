/*jshint esnext: true /*

/*
 * convert-wp-to-md
 * https://github.com/csjoblom/gulp-wp-to-md
 *
 * Copyright (c) 2015 Chris Sjoblom
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(fileName) {
    function init() {
         console.log(fileName);
    }

    function add(rel, contents) {
         console.log(rel);
         console.log(contents);
    }
}
