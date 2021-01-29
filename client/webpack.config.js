require('dotenv').config();
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

console.log('Webpack da Sheyla - Dev');
console.log('The value of PORT is:', process.env.PORT);
console.log('The value of NODE_ENV is:', process.env.NODE_ENV);

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: { index: path.resolve(__dirname, 'src', 'index.js') },
    output: {
        // filename: 'server.bundle.js',
        // path: path.resolve(__dirname, 'dist')
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist',
        filename: 'bundle.js'
    },
    /* module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: "14.15.4"
                            }
                        }
                    ]
                ]
            }
        }]
    }, */
    resolveLoader: {
        modules: [
            __dirname + '/node_modules'
        ]
    },
    /* module : {
        rules : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    }, */
    target: 'node',
    node: {
        fs: 'empty'
    },
    externals: {
        express: 'express',
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate'
    },
    plugins: [
        /* new webpack.ContextReplacementPlugin(
            /express\/lib/,
            path.resolve(__dirname, 'node_modules'),
            {
                'ejs': 'ejs',
                'js': 'js'
            }
        ), */
        new NodemonPlugin()
    ]
    /* stats: {
        warningsFilter: /require\.extensions/
    } */
};
