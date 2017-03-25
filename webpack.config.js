const { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My new html template',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html',
      // template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ]
}
