module.exports = {
	entry: './src/index.js',
	output : {
		path: './dist',
		filename: 'index.js'
	},

	module:{
		loaders:[

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query:{
					presets: ['es2015']
				}
			},

			{exclude: /node_modules/, loader: 'babel-loader'}

		]
	},

	devServer:{
		host: 'localhost',
		port: 8000,
		contentBase: __dirname 
	}

};