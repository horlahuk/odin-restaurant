const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watch } = require("fs");

module.exports = {
  mode: "development", // Set the mode to development for better debugging
  entry: "./src/index.js", // Entry point of the application
  output: {
    filename: "main.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before each build
  },
  devtool: "eval-source-map", // Enable source maps for better debugging
  devServer: {
    watchFiles: ["./src/**/*"], // Watch files in the src directory for changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html", // Template HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Rule for CSS files
        use: ["style-loader", "css-loader"], // Loaders to handle CSS files
      },
      {
        test: /\.html$/i, // Rule for HTML files
        loader: "html-loader", // Loader to handle HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Rule for image files
        type: "asset/resource", // Use asset module to handle images
      },
    ],
  },
};
