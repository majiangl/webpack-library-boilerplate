# webpack-library-boilerplate

The UMD pattern is compatible in different environments, i.e. CommonJS, AMD, Node.js and as a global variable.

Write you code using CMD or ES6 module, and webpack will build a file that works everywhere.

### Usage

1. Write your code in `src` folder.

2. Fill missing message in `webpack.config.js`.

```javascript
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
```
3. run `npm run build`.

### Reference

[Webpack Guides Authoring Libraries](https://webpack.js.org/guides/author-libraries/)
