const webpack  = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname +"/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: "[name]__[local]--[hash:base64:5]"
                        }

                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('awhy的webpack study'),
        new htmlWebpackPlugin({
            template: __dirname+'/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}