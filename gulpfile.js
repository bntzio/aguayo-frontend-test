const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const rucksack = require('rucksack-css')
const surge = require('gulp-surge')
const browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: true
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
    cssnext({ browsers: ['> 5%', 'ie 8'] }),
    cssnano()
  ]

  return gulp.src('./src/styles/main.css')
    .pipe(postcss(processors))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream())
})

gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.css', ['css'])
  gulp.watch('./src/*.html', ['html'])
  gulp.watch('./src/*.html').on('change', browserSync.reload)
})

gulp.task('deploy', () => {
  return surge({
    project: './dist',
    domain: 'aguayo.surge.sh'
  })
})

if (process.argv[2] === '--production') {
  gulp.task('default', ['html', 'assets', 'css', 'deploy'])
} else {
  gulp.task('default', ['html', 'assets', 'css', 'watch', 'serve'])
}
