import {merge} from 'webpack-merge';
import common from './webpack.common.js';
import path from "path";

const config = merge(common, {
    mode: "development",
    devServer: {
        hot: false,
        static: {
            directory: path.resolve("dist"),
        },
        open: true,
    },
    devtool: "inline-source-map",
});

export default config;
