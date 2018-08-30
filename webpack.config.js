module.exports = {
  mode: 'none',
  entry: [
    './src/javascripts/gestures.js'
  ],
  output: {
    path: __dirname,
    filename: './dist/javascripts/bundle.min.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
