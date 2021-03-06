const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'music.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }/*,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }*/
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
