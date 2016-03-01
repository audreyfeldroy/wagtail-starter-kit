const gulp          = require('gulp');
const stylus        = require('gulp-stylus');
const autoprefixer  = require('gulp-autoprefixer');
const csslint       = require('gulp-csslint');
const toolConfigs   = require('../configs/tools.config.js');

// -------------------------------------
//   task: css
// -------------------------------------
module.exports = function () {
    gulp.task('css-dev', function() {
        return gulp.src(toolConfigs.paths.sources.indexCSS)
            .pipe(stylus({
                 'include css': true
            }))
            .pipe(autoprefixer())
            .pipe(csslint())
            .pipe(gulp.dest(toolConfigs.paths.dest.css))
    });
}
