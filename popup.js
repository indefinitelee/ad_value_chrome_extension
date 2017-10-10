// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// control the popup.html file

var scriptFromFile = { file: "content.js" };
var blocked;
var cost;
var count = 0;
var storage;
var url;
var history;
var totalCost;

// DOM of popup.html
document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.executeScript(scriptFromFile, getExecutionResult);
  // why do we need to set storage here?
  storage = chrome.storage.local;
  // can't get storage on load because there's nothing there.
  // chrome.storage.local.get("count", receiveStorageValue);
  blocked = document.getElementById("frames-blocked");
  cost = document.getElementById("cost");
});

var formatURL = function(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");

  return url;
};

// when someone clicks the addOn icon, we should get their total ads blockd and cost
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
  // console.log(resultArray, "result array");
  if (resultArray[0] && typeof resultArray[0] === "number") {
    blocked.innerHTML = resultArray[0];
    cost.innerHTML = revPerPage;
    // can this just be storage.set since we assign storage on above?
    chrome.storage.local.set({
      count: resultArray[0] + count,
      url: url
    });
    console.log(chrome.storage.local, "saved to chrome storage I hope");
  } else {
    console.log("error");
  }
};

// get tab url
url = chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  console.log("the url is", tabs[0].url);
});

// there's no need for this to be a separate file
const revPerPage = 0.045; // guesstimation of google revenue per page

const perAdValue = function(revPerPage, frames) {
  return revPerPage / frames;
};
