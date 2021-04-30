const path = require("path");
const { name, version, url } = require("./package.json");


let sections = [
	{
		// name: 'README',
		// content: 'README.md',
	},
	// {
	// 	name: 'GL Book Package Checker Demo',
	// 	components: () => {
	// 		const componentNames = [
	// 			'gl-book-package-check',
	// 		];
	// 		return componentNames.map(componentName => {
	// 			const filename = upperFirst(camelCase(componentName));
	// 			return path.resolve(__dirname, `src/demos/${componentName}`, `${filename}.js`)
	// 		});
	// 	}
	// },
	
	{
		// The difficulty with displaying the various functions this way
		//	is that they all appear and run on a SINGLE web-page.
		name: 'Book collection',
		// content: 'src/core/README.md',
		sections: [
			{
				name: 'Book',
				content: 'src/components/Book/Book.md',
				// description: ''
			},
			{
				name: 'BookList',
				content: 'src/components/BookList/BookList.md',
				// description: ''
			},			
		]
	},
	{
		// The difficulty with displaying core functions this way
		//	is that they all appear and run on a SINGLE web-page.
		name: 'Chapter collection',
		// content: 'src/core/README.md',
		sections: [
			{
				name: 'Chapter',
				content: 'src/components/Chapter/Chapter.md',
				// description: ''
			},
			{
				name: 'ChapterList',
				content: 'src/components/ChapterList/ChapterList.md',
				// description: ''
			}
			
		]
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
