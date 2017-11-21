var JavaScriptObfuscator = require("webpack-obfuscator");
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
	plugins: [
		new webpack.ProvidePlugin({
			regeneratorRuntime: "regenerator-runtime/runtime"
		}),
		new JavaScriptObfuscator({
			mangle: true,
			renameGlobals: true,
			rotateStringArray: true,
			stringArray: true,
			stringArrayEncoding: "rc4",
			unicodeEscapeSequence: true
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015", "stage-0", "react"]
					}
				}
			}
		]
	}
};

module.exports = config;
