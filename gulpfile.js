var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var pump = require('pump')
var babel = require('gulp-babel')
var inline = require('gulp-inline')

gulp.task('concat', cb => {
  pump([
      gulp.src('src/common/head_tag/*.js'),
      concat('head_tag.js'),
      gulp.dest('src/common/')
    ],
    cb
  )
})

gulp.task('inline', ['concat'], cb => {
  pump([
      gulp.src('src/common/head_tag.html'),
      inline({
        js: [
          () => { return babel({ presets: ['es2015'] }) },
          uglify
        ]
      }),
      gulp.dest('common/')
    ],
    cb
  )
})

gulp.task('default', ['inline'])
