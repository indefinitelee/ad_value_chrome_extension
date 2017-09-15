// save the url of the page.
console.log("content.js");

let urls = [] // eh maybe an object with url: iframes?

// also make sure DOM is loaded. Apparently this is a thing.
document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    urls.push(url);
  });
}


// call indside the event listener?
function getAds () {
  let iFrames = document.querySelectorAll("iframe");
  // or get elementsByTagName ? probably not because it is a live and changing list
  let numberOfIframes = iFrames.length;
  console.log(iFrames);
}

// again from tutorial but seems right
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

// don't save data if user in incognito mode --> from tutorial

function saveTabData(tab, data) {
  if (tab.incognito) {
    chrome.runtime.getBackgroundPage(function(bgPage) {
      bgPage[tab.url] = data;      // Persist data ONLY in memory
    });
  } else {
    localStorage[tab.url] = data;  // OK to store data
  }
}
