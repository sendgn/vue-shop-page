process.env.NODE_ENV = 'production';

const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');
const prodWebpackConfig = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [],
});

module.exports = new Promise((resolve, reject) => {
    resolve(prodWebpackConfig);
});
