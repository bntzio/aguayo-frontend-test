const gulp = require('gulp')
const postcss = require('gulp-postcss')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const cssnested = require('postcss-nested')
const rucksack = require('rucksack-css')
const cssnext = require('postcss-cssnext')
const browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('html', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', () => {
  const processors = [
    atImport(),
    mixins(),
    cssnested(),
    rucksack(),
    cssnext({ browsers: ['> 5%', 'ie 8'] })
  ]

  return gulp.src('./src/styles/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream())
})

gulp.task('watch', () => {
  gulp.watch('./src/styles/*.css', ['css'])
  gulp.watch('./src/*.html', ['html'])
  gulp.watch('./src/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['html', 'css', 'watch', 'serve'])
