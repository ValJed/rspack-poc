const path = require('path')

module.exports = {
    entry: {
        bundle1: './bun1.js',
        bundle2: './bun2.js',
    },
    target: 'web',
    mode: process.env.NODE_ENV || 'development',
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            '@': './src',
        },
    },
    builtins: {
        html: [{ template: './index.html' }],
    },
    stats: 'verbose',
}
