const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "/out"),
        publicPath: "/out/",
        filename: "[name]_bundle.js",
        chunkFilename: '[name]_bundle.js',
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'assets'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {path: 'postcss.config.js'}
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ]
    }
};