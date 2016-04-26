var path = require("path");
var webpack = require("webpack");
var minimize = process.argv.indexOf("--minimize") !== -1;
var plugins = [];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: "./src",
  output: {
    path: "build",
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        include: path.resolve("src"),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
    loaders: [
        "style?sourceMap",
        "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
        "sass?sourceMap"
    ],
        include: path.resolve("src")
      }
    ],
  }
};
