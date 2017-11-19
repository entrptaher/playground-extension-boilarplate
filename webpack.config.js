var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "build");
var APP_DIR = path.resolve(__dirname, "app");

var config = {
	entry: {
		"js/background": APP_DIR + "/background/index.jsx",
		"js/content-script": APP_DIR + "/content-script/index.jsx"
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react"]
				}
			}
		]
	}
};

module.exports = config;
