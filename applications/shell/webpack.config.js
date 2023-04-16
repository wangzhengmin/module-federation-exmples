const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8083,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      { test: /\.vue$/i, loader: "vue-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "shell",
      filename: "shellEntry.js",
      shared: {
        vuex: { singleton: true, requiredVersion: deps.vuex },
        vue: { singleton: true, requiredVersion: deps.vue },
      },
      exposes: {
        "./store": "./src/store",
        "./Footer": "./src/Footer.vue",
      },
    }),
  ],
};
