'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../demo');
const dfltPort = 3000;

const getDefaultModules = () => ({
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["react", "es2015", "stage-0", "react-hmre"]
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.styl/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader'
        },
        {
            test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        },
        {
            test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file"
        },
        {
            test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }
    ]
});

module.exports = {
  srcPath: srcPath,
  publicPath: '/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  serveraddress: process.env.serveraddress
};
