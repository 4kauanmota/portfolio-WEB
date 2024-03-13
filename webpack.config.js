const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  mode: "development",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  target: "web",

  devServer: {
    port: "4000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", "json", ".css", ".scss", ".png"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.js$/i,
        use: "source-map-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
