we want this to run on the active tab
(function() {
  return window.frames.length;
})();

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.message === "clicked_browser_action") {
//     var firstHref = $("a[href^='http']")
//       .eq(0)
//       .attr("href");

//     console.log(firstHref);
//     return firstHref;
//   }
// });

// // also make sure DOM of the TAB! is loaded.
// document.addEventListener('DOMContentLoaded', () => {
//   // get it's url and save it
//   getCurrentTabUrl(function(url) {
//     urls.push(url);
//     // find out how many ads there are
//     getAds();
//   });
// });

// // call indside the event listener so it runs on load not on click
// function getAds () {
//   // LEE: try window.frames.length
//   // but somestimes ads will be iframes inside iframes, so the best is to do something like this:
//   // window.frames.reduce((accumulator, frame) => return accumulator += frame.frames.length);
//   // have you used array.prototype.reduce? if not check it out on MDN, just lets you add up values in a list

//   let iFrames = window.frames.reduce((accumulator, frame) => return accumulator += frame.frames.length);
//   // or get elementsByTagName ? probably not because it is a live and changing list
//   let numberOfIframes = iFrames.length;
//   console.log(iFrames, "list of iframes i hope");

//   return numberOfIframes;
// }

// // again from tutorial but seems right
// // cause we want to list where ads came from
// function getCurrentTabUrl(callback) {
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

// // don't save data if user in incognito mode --> from tutorial

// function saveTabData(tab, data) {
//   if (tab.incognito) {
//     chrome.runtime.getBackgroundPage(function(bgPage) {
//       bgPage[tab.url] = data; // Persist data ONLY in memory
//     });
//   } else {
//     localStorage[tab.url] = data; // OK to store data
//   }
// }
