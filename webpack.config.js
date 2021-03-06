const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/')
  .cleanupOutputBeforeBuild()
  .enableSingleRuntimeChunk()
  .addEntry('main', './src/index.ts')
  .enableVueLoader()
  .enableSassLoader(options => {
    options.implementation = require('sass');
  })
  .enableTypeScriptLoader(options => {
    options.appendTsSuffixTo = [/\.vue$/];
  })
  .addPlugin(new HtmlWebpackPlugin({
    template: './src/index.html',
  }))
;

module.exports = Encore.getWebpackConfig();
