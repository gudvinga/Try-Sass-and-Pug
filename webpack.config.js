const path = require('path');
const merge = require('webpack-merge');
const sass_loader  = require('./webpack_scripts/sass_loader');
const image_loader = require('./webpack_scripts/image_loader');
const pug_loader = require('./webpack_scripts/pug_loader');
const fonts_loader = require('./webpack_scripts/fonts_loader'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = merge(
    {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src') + '/index.pug'
            }),
            //new HtmlBeautifyPlugin()
        ]
    },
    sass_loader,
    image_loader,
    pug_loader,
    fonts_loader
)