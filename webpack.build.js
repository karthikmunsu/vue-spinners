var config = require('./webpack.config.js')

config.entry = {
  'v-spinners': './src/index.js',
}

config.output = {

  filename: './dist/[name].js',
  library: 'VSpinners',
  libraryTarget: 'umd'
}


module.exports = config
