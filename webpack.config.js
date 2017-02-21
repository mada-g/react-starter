var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


/*************************
**************************
**  LOADERS DEFINITION  **
**************************
*************************/

var jsxLoader = { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader'] };

var styleLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({fallback: "style-loader", publicPath: "/public", use:[
    {loader: "css-loader"},
    {loader: "postcss-loader", options: {plugins: function(){ return [require("autoprefixer")]; } }},
    {loader: "sass-loader"}
  ]})
};


/**************************************************
***************************************************
 MAIN CONFIG **************************************
***************************************************
**************************************************/


module.exports = {
  entry: {
    app: './src/client/client.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },

  module: {
    rules: [jsxLoader, styleLoader]
  },

  plugins: [
    new ExtractTextPlugin({filename: "style.css", disable:false, allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({ name: "common" })
  ],

  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
