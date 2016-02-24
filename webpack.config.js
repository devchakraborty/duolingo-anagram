var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		javascript: './index.js',
		html: './index.html'
	},
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(html)$/, loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel'
			},
			{
				test: /\.(css|scss)$/, loader: 'style!css!postcss!sass'
			}
		]
	},
	postcss: function() {
		return [autoprefixer];
	},
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		port: 7000
	}
	// plugins: [new webpack.optimize.UglifyJsPlugin({minimize:true, comments:false})]
};
