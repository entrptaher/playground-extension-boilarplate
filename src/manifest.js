export default {
	"manifest_version": 2,
	"name": "Playground Extension",
	"version": "1.0.0",
	"short_name": "playground_extension",
	"description": "Playground extension with modern techs",
	"icons": {
		"128": "img/logo.png"
	},
	"permissions": [
		"<all_urls>",
		"tabs",
		"notifications",
		"cookies",
		"activeTab",
		"storage",
		"http://fonts.googleapis.com/",
    "https://fonts.googleapis.com/"
	],
	"background": {
		"scripts": [
			"js/background.js"
		],
		"persistent": false
	},
	"web_accessible_resources": [
		"*.png",
		"*.ttf",
		"*.eot",
		"*.woff",
		"*.woff2",
		"*.svg"
	],
	"browser_action": {
		"default_icon": "img/logo.png"
	},
	"offline_enabled": true
}