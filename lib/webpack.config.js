//const path = require('path');
import path, { dirname } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';
import sass from 'sass';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Creates `style` nodes from JS strings
                    // Translates CSS into CommonJS
                    // // Compiles Sass to CSS
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            import: false,
                            url: false
                        },
                    },
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: sass,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
};