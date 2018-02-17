'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('prod:assets', function () {
    return gulp.src("assets/**/*.*")
        .pipe(gulp.dest("public/assets"))
});

gulp.task('prod:styles', function () {
    return gulp.src("styles.scss")
        .pipe(sass())
        .pipe(gulp.dest("public"))
});

gulp.task('dev:sass', function () {
    gulp.watch('**/*.scss', ['prod:styles']);
});
