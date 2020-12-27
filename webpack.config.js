const path = require("path");

module.exports = {
	entry: "./src/app/index.js",
	output: {
		path: path.join(__dirname, "docs", "res"),
		filename: "app.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.svg$/,
				use: [
				   {
						loader: 'svg-url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					}
				]
			}
		],
	}
};