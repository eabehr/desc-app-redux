import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            materialize: path.resolve(
                __dirname,
                'node_modules/materialize-css/dist/js/materialize.min.js'
            )
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        port: 4200,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                // TODO: use the ExtractTextPlugin to extract the css to own file
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'manifest'
        })
    ]
};
