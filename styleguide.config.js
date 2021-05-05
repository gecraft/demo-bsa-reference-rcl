const path = require("path");
const { name, version, url } = require("./package.json");

let sections = [
  {
    name: "README",
    content: "README.md",
  },
  {
    name: "BookList collection",

    sections: [
      {
        name: "Book",
        content: "src/components/Book/Book.md",
      },
      {
        name: "BookList",
        content: "src/components/BookList/BookList.md",
      },
      {
        name: "BibleBookList",
        content: "src/components/BibleBookList/BibleBookList.md",
      },
    ],
  },
  {
    name: "ChapterList collection",

    sections: [
      {
        name: "Chapter",
        content: "src/components/Chapter/Chapter.md",
      },
      {
        name: "ChapterList",
        content: "src/components/ChapterList/ChapterList.md",
      },
      {
        name: "BibleChapterList",
        content: "src/components/BibleChapterList/BibleChapterList.md",
      },
    ],
  },
];

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ribbon: {
    url,
    text: "Open on GitHub",
  },
  title: `${name} v${version}`,
  moduleAliases: { "demo-bsa-reference-rcl": path.resolve(__dirname, "src") },
  skipComponentsWithoutExample: true,
  sections,
  exampleMode: "expand",
  usageMode: "expand",
  pagePerSection: true,
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
