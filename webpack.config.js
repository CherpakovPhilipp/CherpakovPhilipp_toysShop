const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const args = require('yargs').argv; // выводит аргументы запущенных команд в терминале в виде объекта 

console.log(args);

const package  = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';
const isStylesExternal = args.env && args.env.styles;

const plugins = [
  new HTMLPlugin({
    title: package.name,
    template: './index.html',
    version: package.version
  }),

  //new CssPlugin({filename: 'main-[hash].css'}),
  new webpack.HotModuleReplacementPlugin()
];

if (isStylesExternal) {
  plugins.push(new CssPlugin({filename: `main-${Date.now()}.css`}),)
}

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
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { 
            presets: ['@babel/preset-env'], // здесь указываем в какую версию ES преобразовуем (ES5)
            plugins: ['syntax-dynamic-import'] // для синтаксиса динамических модулей ES6
          }
        } 
      },
      { 
        test: /\.s?css$/,
        use: [
          isStylesExternal ? CssPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ] 
      }
    ]
  },

  plugins, // короткая запись plugins: [...plugins...]

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devtool: isProduction ? undefined : 'source-map', // для того, чтоб можно было продебажить код в бандле
                                                    // без этой надстройки, по ум. все засовуется в eval
  devServer: {  // сервер от вебпака
      contentBase: path.resolve(__dirname, 'prod'),
      publicPath: '/',
      port: 9000
    }                                                  
};