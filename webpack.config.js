const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: "ts-loader"}
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello react',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 8080,
    contentBase: "dist",
    open: true,
    hot: true,
  }
};
