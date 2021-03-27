const { resolve } = require("path");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ["./src/script.js", "./src/style.scss"],
    mode: "development",
    output: {
        path: resolve(__dirname, "./dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(sa?)?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: 'imgs/[name].[ext]'
                }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HTMLWebpackPlugin ({
            template: "./src/index.html"
        })
    ],
};