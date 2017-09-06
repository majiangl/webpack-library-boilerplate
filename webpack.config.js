var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // TODO: fill in filename
    filename: '',
    // TODO: fill in global name to expose
    library: '',
    libraryTarget: 'umd'
  },
  // TODO: exclude dependencies
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // }
};