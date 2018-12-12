'use strict';

const path = require('path');
const paths = require('./paths');
const publicPath = '/';

const webpackBaseConfig = {
    entry: [
        require.resolve('./polyfills'),
        paths.appIndexJs
    ],
    output: {
        publicPath: publicPath,
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: [
            '.mjs',
            '.web.ts',
            '.ts',
            '.web.tsx',
            '.tsx',
            '.web.js',
            '.js',
            '.json',
            '.web.jsx',
            '.jsx'
        ],
        alias: {
            'react-native': 'react-native-web',
            '@src': paths.appSrc,
            '@styles': paths.appStyles
        },
    }
}

module.exports = webpackBaseConfig;
