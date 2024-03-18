const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  // npm i --save-dev webpack-dev-server
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // npm i -D style-loader css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  // npm i -D html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-Do List',
      filename: 'index.html',
      template: 'src/template.html',
      minify: {
        collapseWhitespace: false,
      },
    }),
  ]
};