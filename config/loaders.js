const autoprefixer = require('autoprefixer');
const getClientEnvironment = require('./env');
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

const IS_DEVELOPMENT = env.raw.NODE_ENV === 'development';

module.exports = {
    cssModuleLoader(options) {
        return {
            loader: 'css-loader',
            options: {
                ...{
                    modules: true,
                    sourceMap: true,
                    localIdentName: '[local]__[hash:base64:5]',
                    minimize: !IS_DEVELOPMENT
                },
                ...options
            }
        }
    },
    cssLoader(options) {
        return {
            loader: 'css-loader',
            options: {
                ...{
                    modules: false,
                    sourceMap: true,
                    minimize: !IS_DEVELOPMENT
                },
                ...options
            }
        }
    },
    postCssLoader: {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                }),
            ],
        }
    }
};