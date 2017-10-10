// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// control the popup.html file

var framesScript = { file: "content.js" };
var clickIcon = { file: "content2.js" };
var blocked;
var cost;
var adCount = 0;
var visitCount = 1;
var storage;
var url;
var history;
var totalCost;

// DOM of popup.html
document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.executeScript(framesScript, getExecutionResult);
  chrome.storage.local.set({ count: adCount });
  console.log(chrome.storage.local, "result array?");
  blocked = document.getElementById("frames-blocked");
  cost = document.getElementById("cost");
  totalCost = document.getElementById("totalCost");
});

// when someone clicks the addOn icon, we should get their total ads blocked and cost
// var receiveStorageValue = function(value) {
//   console.log("value from storage:", value);
//   if (!value || Object.keys(value).length === 0) {
//     count = 0;
//   } else {
//     count = value["count"];
//   }
//   counter.innerHTML = "count from storage: " + count;
// };

var getExecutionResult = function(resultArray) {
  console.log(resultArray, "result array");
  if (resultArray[0] && typeof resultArray[0] === "number") {
    blocked.innerHTML = resultArray[0];
    cost.innerHTML = revPerPage;
    // how to get visitCount to increment
    totalCost.innerHTML = revPerPage * visitCount;

    // make this an array of objects? it will make an object for each site, and create duplicates prolly until we stop that.
    chrome.storage.local.set({
      // not sure if this url variable will be holding anything I suck at scoping
      url: url,
      adCount: resultArray[0] + count,
      visitCount: (visitCount += 1)
    });
    console.log(chrome.storage.local.count, "saved to chrome storage I hope");
  } else {
    console.log("error");
  }
};

// get tab url
url = chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  let site = tabs[0].url;
  formatURL(site);
  console.log("the url is", tabs[0].url);
});

// just the hostname please
var formatURL = function(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");

  return url;
};

// there's no need for this to be a separate file
const revPerPage = 0.045; // guesstimation of google revenue per page

const perAdValue = function(revPerPage, frames) {
  return revPerPage / frames;
};
