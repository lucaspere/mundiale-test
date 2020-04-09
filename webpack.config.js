const path = require('path');

module.exports = {
   entry: './src/App.jsx',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   mode: 'development',
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.jsx?$/,
         exclude: /node_modules/
      }, {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
         ]
      }]
   },

   devtool: 'cheap-module-aval-source-map',
   devServer: {
      open: true,
      contentBase: path.join(__dirname, 'public'),
   }
}