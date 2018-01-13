var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            // Any .js file will be ran through babel looader
          { test: /\.(js)$/, use: 'babel-loader' },
        //   Any css file will be ran through style loader and css-loader
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [ new HtmlwebpackPlugin({
        template: 'app/index.html'
    })]
}