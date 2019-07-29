var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var pump = require('pump')
var babel = require('gulp-babel')
var inline = require('gulp-inline')
var remoteSrc = require('gulp-remote-src')
var replace = require('gulp-replace')

gulp.task('concat', cb => {
  pump([
      gulp.src('src/common/head_tag/*.js'),
      concat('head_tag.js'),
      gulp.dest('src/common/')
    ],
    cb
  )
})

gulp.task('inline', gulp.series('concat', cb => {
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
}))

gulp.task('feather', cb => {
  pump([
      remoteSrc(['feather-sprite.svg'], {
        base: 'https://unpkg.com/feather-icons/dist/'
      }),
      replace('id="', 'class="feather-sprite" id="feather-'),
      gulp.dest('assets/')
    ],
    cb
  )
})

gulp.task('default', gulp.series('inline'))
