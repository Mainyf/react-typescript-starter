const loaders = require('./loaders');

module.exports = {
    lessRules: {
        test: /\.less/,
        include: /node_modules/,
        use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            loaders.postCssLoader
        ]
    }
};