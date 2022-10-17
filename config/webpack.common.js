const path = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    config: path.join(__dirname, '../config'),
    assets: 'assets/',
};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src,
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                    },
                    hotReload: true,
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            additionalData: `
                                @import 'src/scss/utils/vars.scss';
                            `
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`,
                    to: `${PATHS.assets}img`,
                    noErrorOnMissing: true,
                },
                {
                    from: `${PATHS.src}/fonts`,
                    to: `${PATHS.assets}fonts`,
                    noErrorOnMissing: true,
                },
                {
                    from: `${PATHS.src}/static`,
                    to: '',
                    noErrorOnMissing: true,
                },
            ], 
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
    ].concat(devMode ? [] : [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),
    ]),
};
