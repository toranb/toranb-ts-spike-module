var gulp = require('gulp');
var tsc = require('gulp-tsc');
var react = require('gulp-react');
var shell = require('gulp-shell');

var options = {
    "sourceMap": true,
    "declaration": true,
    "emitError": false,
    "module": "commonjs",
    "target": "ES5",
    "outDir": "build/src"
};

gulp.task('jsx', function() {
    return gulp.src('src/**/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('build'));
});

gulp.task('tsc', ['jsx'], function() {
    return gulp.src('src/**/*.ts')
      .pipe(tsc(options))
      .pipe(gulp.dest('build'));
});

gulp.task('default', ['tsc'], shell.task([
  'jspm bundle build/main'
]));
