const gulp                 = require('gulp');
const browsersync          = require('browser-sync').create();
const wpconfig             = require('../configs/webpack.config.js');
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bundler              = webpack(wpconfig.test);
const toolConfigs          = require('../configs/tools.config.js');

// -------------------------------------
//   Task: Browsersync
// -------------------------------------
module.exports = function () {
    gulp.task('wp-test', function() {
        browsersync.init({
            proxy: {
                target: toolConfigs.server.host + ':' + toolConfigs.server.port,
                middleware: [
                    // webpack-dev-middleware
                    webpackDevMiddleware(bundler, {
                        publicPath: wpconfig.test.output.publicPath,
                        stats: {
                            colors: true
                        },
                        headers: {
                            "X-Custom-Header": "yes"
                        },
                    }),

                    // compiler should be the same as above
                    webpackHotMiddleware(bundler),
                ],
            },
        });

        // compile css
        gulp.watch(toolConfigs.paths.watch.styles, ['css-dev']);
        // inject css into browsersync
        gulp.watch(toolConfigs.paths.watch.buildCSS, function() {
            gulp.src(toolConfigs.paths.watch.buildCSS)
                .pipe(browsersync.stream());
        });
    });
};
