const path = require('path');

module.exports = {
    entry: './react/src/App.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-proposal-nullish-coalescing-operator'
                        ]
                    }
                }
            },
            {
                test: /\.(css|woff|woff2|ttf|eot|png)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development'
}
