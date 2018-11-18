import gulp from 'gulp'
import "@babel/polyfill"
import config from './gulp.config'
import gulpLoadPlugins from 'gulp-load-plugins'
import notifier from 'node-notifier'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const $ = gulpLoadPlugins({lazy: true})

gulp.task('help')

gulp.task('contact-js', () => {
  
})

gulp.task('min-js')

gulp.task('min-image')
gulp.task('min-css')
gulp.task('min-html')

gulp.task('compile-stylus')
gulp.task('compile-es6')

gulp.task('image-sprite', async () => {
  const filenames = await readdir(config.img)
  const dirs = []

  filenames.forEach(filename => {
    let stat = fs.statSync(path.join(config.img, filename))
    if (stat.isDirectory() === true){
      dirs.push(filename)
    }
  })

})


gulp.task('concat-css')
gulp.task('concat-js')

gulp.task('serve')
gulp.task('build')

function concat(all, theOne){
  return gulp.src(all)
    .pipe(concat(theOne))
    .pipe(gulp.dest(config.output))
}