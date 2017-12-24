const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-class-properties']
				}
			},
			{
				test: /\.sass$/,	
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [new ExtractTextPlugin('style.css')]
}

module.exports = config;
