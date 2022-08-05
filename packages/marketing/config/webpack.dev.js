const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082, // development URL
    historyApiFallback: {
      index: 'index.html', 
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
       filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,// Shared dependencies between all apps( host and remote) 
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
