const path= require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;
const copyPlugin = require('copy-webpack-plugin');

const package = require('../package');
const isProduction = process.env.NODE_ENV === 'production';
const isStylesExternal = args.env && args.env.styles;

const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

const plugins = [
    new HTMLPlugin({
        title: package.name,
        template: '../src/index.html',
        version: package.version
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({  // этот плагин подключает нужные модули (или любые переменные) глобально
        React: 'react',
        Component: ['react', 'Component']
    }),

    new copyPlugin(
        images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' }))
    )
];

if (isStylesExternal) {
    plugins.push(new CssPlugin({ filename: 'main.css' }));
}

module.exports = {
    entry: ['babel-polyfill', '../src/app.js'],
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    mode: isProduction ? 'production' : 'development',

    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components') // (https://webpack.js.org/configuration/resolve/)
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre', // запускается самый первый
                test: /\.js$/,
                exclude: /node_modules/,
                //loader: 'eslint-loader', // линтер срабатывает автоматически после каждого обновления кода
                // options: {
                //     emitWarning: true, // с этой надстройкой проект делает ребилд, даже если есть ошибки eslint
                // }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            'syntax-dynamic-import', 
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-regenerator'
                        ],

                    }
                }
            },
            {
              test: /\.json/,
              use: [
                {
                  loader: 'json-loader'
                },
                {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'db/'
                  }
                }
              ]
            },
            {
                test: /\.s?css$/,
                use: [
                    isStylesExternal ? CssPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                  }
              }]
            },
        ]
    },

    plugins,

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },

    devtool: isProduction ? undefined : 'source-map',

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        port: 9000,
        hot: true,
        historyApiFallback: true, //говорим девсерверу, что будем работать с браузерной маршрутеризацией
    }
};
