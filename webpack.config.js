// webpack.config.js
const webpack = require('webpack')
const path = require('path')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './client.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },]
    }
}

module.exports = config