const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
		],
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css'],
	},
	plugins: [
		new webpack.DefinePlugin({
			//<--key to reduce React's size
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
	],
};
