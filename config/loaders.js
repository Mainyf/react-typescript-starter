const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

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
                    localIdentName: '[local]__[hash:base64:5]'
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
                    sourceMap: true
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
                pxtorem({
                    rootValue: 18.75,
                    propList: ['margin','margin-top','margin-bottom','margin-left','margin-right','top','bottom','left','right', 'height', 'width', 'padding','padding-top','padding-bottom','padding-left','padding-right', 'font', 'font-size', 'line-height', 'letter-spacing','background-size','background-position']
                })
            ],
        }
    }
};