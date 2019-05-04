function createExecCallback(...args) {
  return () => {
    chrome.tabs.executeScript(...args);
  };
}

function executeScripts(tabId, injectDetailsArray) {
  let callback = null;
  for (let i = injectDetailsArray.length - 1; i >= 0; --i) {
    callback = createExecCallback(tabId, injectDetailsArray[i], callback);
  }
  if (callback !== null) callback(); // execute outermost function
}

const contentScriptList = [{
  file: "js/content-script.js"
}];

function executeScriptList(tab) {
  const { id } = tab;
  setTimeout(() => {
    executeScripts(id, contentScriptList);
  }, 0);
}

chrome.browserAction.onClicked.addListener(executeScriptList);
