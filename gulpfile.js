const gulp = require('gulp');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');

gulp.task('default', ['minify-css', 'minify-js', 'image-min', 'html-min'])

gulp.task('html-min', function() {
  gulp.src('./html/*.html')
  .pipe(htmlmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./src/html'))
})

gulp.task('minify-js', function() {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest('./src/js'))
});

gulp.task('minify-css', function() {
  gulp.src('./css/*.css')
  .pipe(minifycss())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest('./src/css'))
});

gulp.task('image-min', function() {
  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./src/img'))
})
