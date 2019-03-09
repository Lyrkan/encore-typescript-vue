const Encore = require('@symfony/webpack-encore');

// Initialize Encore before requiring the .config file
Encore.configureRuntimeEnvironment('dev');

// Retrieve webpack config
const webpackConfig = require('./webpack.config');

// Remove entry property (handled by Karma)
delete webpackConfig.entry;

// Make sure code splitting is disabled
delete webpackConfig.optimization.runtimeChunk;
delete webpackConfig.optimization.splitChunks;

// Replace the mini-css-extract-plugin's loader by the style-loader
const styleExtensions = ['/\\.css$/', '/\\.s[ac]ss$/', '/\\.less$/', '/\\.styl$/'];
for (const rule of webpackConfig.module.rules) {
  if (rule.test && rule.oneOf && styleExtensions.includes(rule.test.toString())) {
    rule.oneOf.forEach((oneOf) => {
      oneOf.use[0] = 'style-loader';
    })
  }
}

// Karma options
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'test/index.ts'
    ],
    preprocessors: {
      'test/index.ts': ['webpack']
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },
    browsers: ['Chrome'],
    webpack: webpackConfig,
    reporters: ['spec']
  });
};
