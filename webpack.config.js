require("babel-polyfill");

var webpack = require("webpack");
var path = require("path");
var JavaScriptObfuscator = require("webpack-obfuscator");

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
	// plugins: [
	// 	new JavaScriptObfuscator({
	// 		compact: true,
	// 		controlFlowFlattening: true,
	// 		controlFlowFlatteningThreshold: 1,
	// 		deadCodeInjection: true,
	// 		deadCodeInjectionThreshold: 1,
	// 		debugProtection: true,
	// 		debugProtectionInterval: true,
	// 		disableConsoleOutput: true,
	// 		log: false,
	// 		mangle: false,
	// 		renameGlobals: false,
	// 		rotateStringArray: true,
	// 		selfDefending: true,
	// 		stringArray: true,
	// 		stringArrayEncoding: "rc4",
	// 		stringArrayThreshold: 1,
	// 		unicodeEscapeSequence: false
	// 	})
	// ],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015"]
				}
			}
		]
	}
};

module.exports = config;
