// const { resolve } = require('path') // Me genero problemas con Ubuntu y lo cambie por la linea de abajo
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    // path: resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        // test: /\.css$/, Sirve si usas css
        test: /\.scss$/, // Si usas Sass
        // loaders: 'style-loader!css-loader' esto es en Webpack1
        // use: [ 'style-loader', 'css-loader' ] Se usa use en webpack2
        // use: [ 'style-loader', 'css-loader', 'sass-loader' ] // cambiamos app.css por app.scss
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}) // para generar el archivo scss dentro de dist
      }
    ]
  },
  devServer: { //Configuracion para el webpack-dev-server
    contentBase: path.join(__dirname,'dist'),
    compress: true, // comprimis cada archivo servido con gzip
    port: 9000, // configuras el puerto
    stats: 'errors-only', // solo visualiza errores en la consola
    open: true //abre una nueva pestaña
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
    }), // Plugin utilizado para generar el index.html de dist en forma automatica
    new ExtractTextPlugin("app.css") // Plugin necesario si estas utilizando ExtractTextPlugin
  ]
}
