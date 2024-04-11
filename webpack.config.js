import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin";

const pages = ['index', 'test'];

const config = {
    mode: "development",
    entry: {
        index: './src/index.ts',
        test: './src/test.ts',
    },
    plugins: [].concat(
        pages.map(
            (page) => new HtmlWebpackPlugin(
                {
                    inject: true,
                    template: `./src/html/${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                }
            )
        ),
        new MiniCssExtractPlugin({
                filename: "main.css",
            }
        )
    ),
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {
            ".js": ['.js', '.ts']
        },
    },
    devServer: {
        hot: false,
        static: {
            directory: path.resolve("dist"),
        },
        open: true,
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve("dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    //"style-loader",
                    MiniCssExtractPlugin.loader,
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

export default config;