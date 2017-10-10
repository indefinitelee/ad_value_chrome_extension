//we want this to run on the active tab

(function() {
  return window.frames.length;
})();

// seems like can't get both to run. Also don't want to use jquery

// don't save data if user in incognito mode --> from tutorial

// function saveTabData(tab, data) {
//   if (tab.incognito) {
//     chrome.runtime.getBackgroundPage(function(bgPage) {
//       bgPage[tab.url] = data; // Persist data ONLY in memory
//     });
//   } else {
//     localStorage[tab.url] = data; // OK to store data
//   }
// }
