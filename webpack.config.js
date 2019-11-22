
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const copyPluginConfig = fs.readdirSync(path.join(__dirname, 'packages/')).map((packageName) => ({
  from: path.join(__dirname, 'node_modules', packageName, 'dist'),
  to: './',
  ignore: 'bundle.js',
}));

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    symlinks: true,
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.[hash].js"
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Meetup demo Website',
      template: 'index.html',
    }),
    new CopyPlugin(copyPluginConfig),
  ]
};