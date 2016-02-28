const path  = require('path');

module.exports = {
    server: {
        host: 'localhost',
        port: '8111',
    },

    paths: {
        watch: {
            javascripts: path.resolve(__dirname, '../../src/server/static/**/*.js'),
            styles: path.resolve(__dirname, '../../src/server/static/**/*.styl'),
            html: [
                path.resolve(__dirname, '../../src/server/templates/**/*.html'),
            ],
            buildCSS: path.resolve(__dirname, '../../build/css/*.css'),
        },

        sources: {
            indexJS:  path.resolve(__dirname, '../../src/server/static/js/index.js'),
            indexCSS: path.resolve(__dirname, '../../src/server/static/stylus/index.styl'),
        },

        dest: {
            js: path.resolve(__dirname, '../../build/js'),
            css: path.resolve(__dirname, '../../build/css'),
        },

        tasksDir: path.resolve(__dirname, '../tasks/'),
    },
}
