const path = require("path");
const {loader} = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "TCS"
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    //"style-loader",
                    loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html?$/i,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset"
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset"
            },
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
        ]
    },
}