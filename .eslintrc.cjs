module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	extends: [
		'eslint-config-airbnb/base',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', '.vite.config.js'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		"import/no-extraneous-dependencies": [
        "error", {
           "devDependencies": true
        }],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
};
