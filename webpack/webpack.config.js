const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const entry = require('webpack-glob-entry')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const baseConfig = {
    module : {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './lib'),
    },
}
module.exports = [
    {
        ...baseConfig,
        entry: entry('./src/*.scss'),
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new ExtractTextPlugin({
                filename: `/css/[name].css`,
            }),
        ],
    },
    {
        ...baseConfig,
        entry: entry('./src/component/*.scss'),
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new ExtractTextPlugin({
                filename: `/css/component/[name].css`,
            }),
        ],
    },
];
