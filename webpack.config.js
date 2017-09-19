const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    externals: {
        'react': 'commonjs react',
        'lodash/capitalize': 'commonjs lodash/capitalize',
        'lodash/isArray': 'commonjs lodash/isArray',
        'lodash/isFunction': 'commonjs lodash/isFunction',
        'lodash/isObject': 'commonjs lodash/isObject',
        'lodash/isString': 'commonjs lodash/isString',
        'lodash/isNil': 'commonjs lodash/isNil',
        'lodash/map': 'commonjs lodash/map',
        'lodash/each': 'commonjs lodash/each',
        'lodash/keys': 'commonjs lodash/keys'
    }
};