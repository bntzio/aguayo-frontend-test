module.exports = {
  mode: 'none',
  entry: [
    './src/javascripts/main.js'
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
