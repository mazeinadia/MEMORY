'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('prod:styles', function () {
    return gulp.src('./src/**/*.*css')
        .pipe(concat('bundle.scss'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public'))
});

gulp.task('dev:css', function () {
    gulp.watch('./src/**/*.scss', ['prod:styles']);
});
