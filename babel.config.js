module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['@babel/preset-react'],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
                'import',
                {
                    'libraryName': 'antd-mobile',
                    'style': true
                }
            ]
        ]
    }
}