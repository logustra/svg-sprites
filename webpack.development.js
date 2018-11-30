const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        port: "3000",
        open: true,
    }
});