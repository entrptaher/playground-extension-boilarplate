chrome.browserAction.onClicked.addListener(({ id }) =>
  chrome.tabs.executeScript(id, {
    allFrames: true,
    file: 'js/content-script.js',
  })
);
