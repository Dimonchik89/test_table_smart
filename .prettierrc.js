module.exports = {
	trailingComma: "es5",
	tabWidth: 4,
	semi: false,
	singleQuote: false,
	jsxSingleQuote: false,
	useTabs: true,
	printWidth: 140,
	plugins: ["@trivago/prettier-plugin-sort-imports"],
	importOrder: ["^react$", "^[./]", "", "^@/"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
