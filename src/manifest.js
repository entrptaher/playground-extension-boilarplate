export default {
	"manifest_version": 3,
	"name": "Playground Extension",
	"version": "1.0.0",
	"short_name": "playground_extension",
	"description": "Playground extension with modern techs",
	"icons": {
		"128": "img/logo.png"
	},
	"permissions": [
		"tabs",
		"notifications",
		"cookies",
		"activeTab",
		"storage",
		"scripting"
	],
	"host_permissions": [
		"<all_urls>",
		"http://fonts.googleapis.com/",
		"https://fonts.googleapis.com/"
	],
	"background": {
		"service_worker": "js/background.js",
		"type": "module"
	},
	"web_accessible_resources": [
		{
			"resources": [
				"*.png",
				"*.ttf",
				"*.eot",
				"*.woff",
				"*.woff2",
				"*.svg"
			],
			"matches": [
				"*://*/*"
			]
		}
	],
	"action": {
		"default_icon": "img/logo.png"
	},
	"offline_enabled": true
}