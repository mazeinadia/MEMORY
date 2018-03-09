const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/redux-index.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["env", "react"]
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};