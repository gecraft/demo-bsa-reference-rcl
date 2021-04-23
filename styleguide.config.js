const path = require("path");
const { name, version, url } = require("./package.json");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ribbon: {
    url,
    text: "Open on GitHub",
  },
  title: `${name} v${version}`,
  moduleAliases: { "demo-bsa-reference-rcl": path.resolve(__dirname, "src") },
  skipComponentsWithoutExample: true,
  exampleMode: "expand",
  usageMode: "expand",
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, ".js");
    return `import { ${componentName} } from '${name}';`;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
};
