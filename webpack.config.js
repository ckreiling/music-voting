var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  // the base directory (absolute path) for resolving the entry option
  context: __dirname,

  // The entry point we created earlier. Note that './' means
  // your current directory. No need to specify the extension now,
  // because it will be specified later in the 'resolve" section
  entry: './assets/js/index',

  output: {
    // Where the compiled bundle will be stored
    path: path.resolve('./assets/bundles/'),
    // naming convention webpack should use for the files
    filename: '[name]-[hash].js'
  },

  plugins: [
    // tells webpack where to store data about your bundles.
    new BundleTracker({filename: './webpack-stats.json'}),
    // makes jQuery available in every module
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [
      // a regexp that tells webpack to use the following loaders on all
      // .js and .jsx files
      {
        test: /\.jsx?$/,
        // Definitely don't want babel to transpile all the files in node_modules
        exclude: /node_modules/,
        // use the Babel loader
        loader: 'babel-loader',
        query: {
          // specify that we will be dealing with React code, es2015, and es6
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },

  resolve: {
    // tells webpack where to look for modules
    modules: ['node_modules'],
    // extensions that should be used to resolve modules
    extensions: ['.js', '.jsx']
  }
};