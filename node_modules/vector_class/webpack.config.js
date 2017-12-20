
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    // export itself to a global var
    libraryTarget: 'umd',
    // name of the global var: "Foo"
    library: 'Vector'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
