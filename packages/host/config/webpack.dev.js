const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080, // development URL
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        cart: "cart@http://localhost:8081/remoteEntry.js",
        marketing: "marketing@http://localhost:8082/remoteEntry.js",
      },
      shared: packageJson.dependencies, // Shared dependencies between all apps( host and remote)
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
