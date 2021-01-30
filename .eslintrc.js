module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'eslint-config-prettier',
		'prettier/react',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'eslint-plugin-prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.js', '.jsx'] },
		],
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',

		'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
	},
};
