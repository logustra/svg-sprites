const merge = require('webpack-merge');
const common = require('./webpack.common');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new SVGSpritemapPlugin('./sprites/*.svg', {
            output: {
                filename: 'sprites.svg',
                svg4everybody: true,
                svgo: true,
            },
            sprite: {
                prefix: 'si-',
            },
        }),
    ]
});