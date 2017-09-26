// import { adValue, revPerPage } from './calculate.js';

// we want this to run on the active tab
(function() {
  return window.frames.length;
})();

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

//   chrome.tabs.query(queryInfo, function(tabs) {
//     // chrome.tabs.query invokes the callback with a list of tabs that match the
//     // query. When the popup is opened, there is certainly a window and at least
//     // one tab, so we can safely assume that |tabs| is a non-empty array.
//     // A window can only have one active tab at a time, so the array consists of
//     // exactly one tab.
//     var tab = tabs[0];

//     // A tab is a plain object that provides information about the tab.
//     // See https://developer.chrome.com/extensions/tabs#type-Tab
//     var url = tab.url;

//     // tab.url is only available if the "activeTab" permission is declared.
//     // If you want to see the URL of other tabs (e.g. after removing active:true
//     // from |queryInfo|), then the "tabs" permission is required to see their
//     // "url" properties.
//     console.assert(typeof url == 'string', 'tab.url should be a string');

//     callback(url);

//     return url; //?

// // want to append to popup.html DOM `this page ${url} had ${numberOfIframes} ads.
//   });
// }

// // don't save data if user in incognito mode --> from tutorial

// function saveTabData(tab, data) {
//   if (tab.incognito) {
//     chrome.runtime.getBackgroundPage(function(bgPage) {
//       bgPage[tab.url] = data;      // Persist data ONLY in memory
//     });
//   } else {
//     localStorage[tab.url] = data;  // OK to store data
//   }
// }
