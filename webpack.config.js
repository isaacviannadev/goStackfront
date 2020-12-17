const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
<<<<<<< HEAD
                    { loader: 'css-loader' },
=======
                    { loader: 'css-loader' }
>>>>>>> 2588fd0820b4ae58d590a75dc6a3863de2a99f59
                ]
            },
            {
                test: /.*\.(gif|png|svg|jpe?g)$/i,
<<<<<<< HEAD
                use: {
                    loader: 'file-loader',
                }
=======
                use: [
                    { loader: 'file-loader' },

                ]
>>>>>>> 2588fd0820b4ae58d590a75dc6a3863de2a99f59
            }
        ]
    },
};