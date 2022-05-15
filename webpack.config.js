const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = {
	'main': './js/src/main.jsx'
}

const optimization = {
	splitChunks: {
		chunks: 'all',
		cacheGroups: {
			vendors: {
				enforce: true,
				test: /[\\/]node_modules[\\/].*\.(ts|tsx|js|jsx)$/,
				name: 'vendor.bundle.js',
				filename: 'vendor.bundle.js'
			},
		}
	}
}

const plugins = [
	new MiniCssExtractPlugin({
		filename: "style.css",
	})
]

const output = {
	path: path.join(__dirname, 'js/dist'),
	filename: '[name].bundle.js',
	publicPath: '/',
	library: ['App', '[name]'],
	libraryTarget: 'umd'
}

const externals = {
}

module.exports = {
	output,
	entry,
	plugins,
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
	},
	optimization,
	externals
}
