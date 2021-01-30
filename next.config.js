module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mp3$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: 'file-loader',
				},
				{
					loader: 'url-loader',
				},
			],
		});

		return config;
	},
};
