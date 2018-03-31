const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff2|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/fonts/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    }
}