gulp.task('minify-js', function() {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./src'))
});
