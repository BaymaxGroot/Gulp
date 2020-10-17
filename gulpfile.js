const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src(['src/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.src('dist/js/*.js'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js2'))
});