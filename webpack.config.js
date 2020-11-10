const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        
    },
    // devServer: {
    //     // contentBase: path.join(__dirname, 'dist'),
    //     // compress: true,
    //     port: 4200
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}