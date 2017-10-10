// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// control the popup.html file

var scriptFromFile = { file: "content.js" };
var blocked;
var cost;
var count = 0;
var storage;

var getExecutionResult = function(resultArray) {
  // console.log(resultArray, "result array");
  // console.log(chrome.storage, "chrome storage");
  if (resultArray[0] && typeof resultArray[0] === "number") {
    blocked.innerHTML = resultArray[0];
    cost.innerHTML = revPerPage;
    chrome.storage.local.set({
      count: resultArray[0] + count
    });
  } else {
    console.log("error");
  }
};
// DOM of popup.html or current tab?
document.addEventListener("DOMContentLoaded", () => {
  storage = chrome.storage.local;
  // console.log(chrome.storage);
  // console.log("loaded popupDOM");

  blocked = document.getElementById("frames-blocked");
  cost = document.getElementById("cost");
  url = chrome.tabs.executeScript(scriptFromFile, getExecutionResult);
});

// there's no need for this to be a separate file
const revPerPage = 0.045; // guesstimation of google revenue per page

const perAdValue = function(revPerPage, frames) {
  return revPerPage / frames;
};

// get tab url
chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  console.log(tabs[0].url);
});
