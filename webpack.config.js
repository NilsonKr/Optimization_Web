const webpack = require('webpack')
const path = require('path')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
//const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development'

const isAnalyzer = process.argv.includes('--analyze')

const plugins = [
  /* new MomentLocalesPlugin({
  localesToKeep: ['es']
}) */
]

if (isAnalyzer) {
  plugins.push(new webpackBundleAnalyzer())
}

const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '.',
    watchContentBase: true,
  },
  plugins,
}

module.exports = config
