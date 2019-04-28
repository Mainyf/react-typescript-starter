'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const loaders = require('./loaders');
const rules = require('./rules');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

const webpackDevConfig = {
    mode: 'development',
    // devtool: 'cheap-module-source-map',
    devtool: 'source-map',
    watch: true,
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: require.resolve('source-map-loader'),
                enforce: 'pre',
                include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 1,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        // include: [
                        //     paths.appSrc,
                        //     paths.appNodeModules
                        // ],
                        loader: require.resolve('babel-loader'),
                        options: {

                            compact: true,
                        },
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        // include: [
                        //     paths.appSrc,
                        //     paths.appNodeModules
                        // ],
                        enforce: 'pre',
                        use: [
                            require.resolve('babel-loader'),
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    transpileOnly: true,
                                },
                            }
                        ],
                    },
                    {
                        test: /\.scss$/,
                        exclude: /\.module\.scss$/,
                        use: [
                            require.resolve('style-loader'),
                            loaders.cssLoader(),
                            loaders.postCssLoader,
                            require.resolve('sass-loader')
                        ]
                    },
                    {
                        test: /\.module\.scss/,
                        use: [
                            require.resolve('style-loader'),
                            loaders.cssModuleLoader,
                            loaders.postCssLoader,
                            require.resolve('sass-loader')
                        ]
                    },
                    {
                        test: /\.module\.css/,
                        use: [
                            require.resolve('style-loader'),
                            loaders.cssModuleLoader,
                            loaders.postCssLoader
                        ]
                    },
                    rules.lessRules,
                    {
                        test: /\.css$/,
                        exclude: /\.module\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            loaders.cssLoader({
                                importLoaders: 1,
                            }),
                            require.resolve('sass-loader'),
                            loaders.postCssLoader
                        ],
                    },
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        // ,
        // new ForkTsCheckerWebpackPlugin({
        //     async: false,
        //     watch: paths.appSrc,
        //     tsconfig: paths.appTsConfig,
        //     tslint: paths.appTsLint,
        // }),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    performance: {
        hints: false,
    },
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
