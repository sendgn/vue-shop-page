process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const { merge } = require('webpack-merge');
// const path = require('path');
const commonWebpackConfig = require('./webpack.common');
const devWebpackConfig = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 8081,
        client: {
            overlay: {
                warnings: true,
                errors: true
            },
        },
        static: {
            directory: commonWebpackConfig.externals.paths.dist,
        },
        hot: true,
        watchFiles: ["src/*.html"],
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
