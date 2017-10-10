//we want this to run on the active tab

(function() {
  return window.frames.length;
})();

// seems like i need to run separate functions in different files?
// that can't be right and would be whack.

// don't save data if user in incognito mode --> from tutorial
// but bgPage doesn't exist, so I'd be surprised if this does anything
function saveTabData(tab, data) {
  if (tab.incognito) {
    chrome.runtime.getBackgroundPage(function(bgPage) {
      bgPage[tab.url] = data; // Persist data ONLY in memory
    });
  } else {
    localStorage[tab.url] = data; // OK to store data
  }
}
