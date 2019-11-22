
const path = require("path");

module.exports = {
  entry: "./index.js",
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
    filename: "bundle.js",
    library: 'cosmetics',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
    },
    common: {
      commonjs: 'common',
      commonjs2: 'common',
    },
  }
};