var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: "build",
    filename: "bundle.js"
  },
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
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      allChunks: true
    })
  ]
};
