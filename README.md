Gulp-WP-to-MD
==============

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-wp-to-md`

## Information

<table>
<tr>
<td>Package</td><td>gulp-wp-to-md</td>
</tr>
<tr>
<td>Description</td>
<td>Converts WordPress Readme to Markdown for Repos</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>
</td>
</tr>
</table>

## Usage

```js
var wp-to-md = require('gulp-wp-to-md');

gulp.task('readme', function() {
 return gulp.src('./readme.txt')
    .pipe(wp-to-md())
    .pipe(gulp.dest('./README.md'));
});

```

## LICENSE

(MIT License)

Copyright (c) 2015 Chris Sjoblom <chris@sjoblom.consulting>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
