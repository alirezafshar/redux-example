const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|tiff)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images",
                            name: "[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new CompressionWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public/*.*",
                    to: "[name].[ext]"
                },
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        port: 9000
    }
}