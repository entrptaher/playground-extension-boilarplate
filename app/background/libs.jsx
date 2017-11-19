function createCallback(tabId, injectDetails, innerCallback) {
	return () => {
		chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
	};
}

export function executeScripts(tabId, injectDetailsArray) {
	let callback = null;
	for (let i = injectDetailsArray.length - 1; i >= 0; --i) {
		callback = createCallback(tabId, injectDetailsArray[i], callback);
	}
	if (callback !== null) callback(); // execute outermost function
}
