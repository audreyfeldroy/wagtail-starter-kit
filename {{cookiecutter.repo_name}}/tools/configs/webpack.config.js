const path            = require('path');
const extend          = require('extend');
const webpack         = require('webpack');

/*
======================================================================
    DIRECTORY PATHS
======================================================================
*/

const PATHS = {
  index: path.join(__dirname, '../../src/server/static/javascripts/index.js'),
  build: path.join(__dirname, '../../build/js'),
  javascripts: path.join(__dirname, '../../src/server/static/javascripts/'),
  styles: path.join(__dirname, '../../src/server/static/stylesheets/'),
  eslint: path.resolve(__dirname, './.eslintrc'),
  testIndex: path.resolve(__dirname, '../../tests/javascripts/index.js'),
  tests: path.resolve(__dirname, '../../tests/javascripts/'),
};

/*
======================================================================
    COMMON WEBPACK SETTINGS
======================================================================
*/

const common = {
    devtool: "eval",

    eslint: {
        configFile: PATHS.eslint,
    },

    output: {
        filename: 'bundle.js',
        path: PATHS.build,
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                include: PATHS.javascripts,
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: [
                    PATHS.javascripts,
                    PATHS.styles,
                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: [
                        "es2015",
                        "stage-0",
                        "react"
                    ]
                }
            },
        ],
    },

    // webpack throws fs error without this
    node: {
      fs: "empty"
    }
};

/*
======================================================================
    WEBPACK DEV SETTINGS

    see common for the other settings.
======================================================================
*/

const webpackDev = extend(true, {}, common, {
    // extends common.entry
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        PATHS.index,
    ],

    // extends common.output
    output: {
        publicPath: 'http://localhost:3000/build/js',
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});

/*
======================================================================
    WEBPACK PROD SETTINGS

    see common for the other settings
======================================================================
*/

const webpackProd = extend(true, {}, common, {
    entry: [
        PATHS.index,
    ],

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
});

/*
======================================================================
    WEBPACK TEST SETTINGS

    see common for the other settings.
======================================================================
*/

const webpackTest = extend(true, {}, common, {
    // extends common.entry
    entry: [
        'webpack-hot-middleware/client?reload=true',
        PATHS.testIndex,
    ],

    // extends common.output
    output: {
        publicPath: 'http://localhost:3000/build/js',
    },

    module: {
        preLoaders: [
            {
                include: PATHS.tests,
            }
        ],
        loaders: [
            {
                include: [
                    PATHS.javascripts,
                    PATHS.tests,
                ],
            },
        ],
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});

/*
======================================================================
    RETURN DEV AND PRODUCTION SETTINGS
======================================================================
*/
module.exports = {
    dev: webpackDev,
    prod: webpackProd,
    test: webpackTest
}
