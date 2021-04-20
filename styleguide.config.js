const path = require('path');
const { name, version } = require('./package.json');

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
//  ribbon: {
//    url: 'http://example.com/',
//    text: 'Fork me on GitHub'
//  },
  title: `${name} v${version}`,
  moduleAliases: { 'demo-button-component-rcl': path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
    getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js')
    return `import { ${componentName} } from '${name}';`
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
