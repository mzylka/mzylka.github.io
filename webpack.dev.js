const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/"
      }
});