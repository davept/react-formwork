'use strict';

const path = require('path');
const defaultSettings = require('./defaults');

module.exports = {
    devtool: 'eval',
    context: __dirname, // `__dirname` is root of project and `src` is source
    output: {
        path: "/",//path.join(__dirname, '/dist/'), //todo why?
        filename: '[name].js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        hot: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        quiet: false,
        noInfo: false,
        stats: {colors: true}
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            components: `${defaultSettings.srcPath}/components/`,
            reducers: `${defaultSettings.srcPath}/reducers/`,
            styles: `${defaultSettings.srcPath}/styles/`,
            config: `${defaultSettings.srcPath}/cfg/` + process.env.REACT_WEBPACK_ENV
        }
    },
    module: {}
};
