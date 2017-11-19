import { executeScripts } from "./libs.jsx";

chrome.tabs.onUpdated.addListener((tabId, { status }, tab) => {
	if (status !== "complete") return;
	executeScripts(tab.id, [{ file: "js/content-script.js" }]);
});
