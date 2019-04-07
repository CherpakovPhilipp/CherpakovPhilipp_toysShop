const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

const package  = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'prod')  //Здесь пишем абсолютный путь (на ПК)
  },                                       //path задают редко, обычно по ум.
  
  mode: 'development', // development/production

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        } 
      },
      { test: /\.s?css$/,
        use: [
          //{loader: 'style-loader',options: {singleton: true}}, // здесь важен порядок, снизу вверх идут подключения
          CssPlugin.loader,
          "css-loader",
          'sass-loader'
        ] 
      }
    ]
  },

  plugins: [
    new HTMLPlugin({
      title: package.name,
      template: './index.html',
      version: package.version
    }),
    //new CssPlugin({filename: 'main-[hash].css'}),
    new CssPlugin({filename: `main-${Date.now()}.css`}),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devtool: isProduction ? undefined : 'source-map', // для того, чтоб можно было продебажить код в бандле
                                                    // без этой надстройки, по ум. все засовуется в eval
};