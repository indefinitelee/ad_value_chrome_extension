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

var getExecutionResult = function(resultArray) {
  // console.log(resultArray, "result array");
  if (resultArray[0] && typeof resultArray[0] === "number") {
    blocked.innerHTML = resultArray[0];
    cost.innerHTML = revPerPage;
    chrome.storage.local.set(
      {
        count: resultArray[0] + count,
        url: url
      },
      () => {}
    );
    console.log(chrome.storage.local, "saved to chrome storage");
  } else {
    console.log("error");
  }
};
// DOM of popup.html or current tab?
document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.executeScript(scriptFromFile, getExecutionResult);
  // why do we need to set storage here?
  storage = chrome.storage.local;
  // console.log(chrome.storage);
  // console.log("loaded popupDOM");
  blocked = document.getElementById("frames-blocked");
  cost = document.getElementById("cost");
});

// there's no need for this to be a separate file
const revPerPage = 0.045; // guesstimation of google revenue per page

const perAdValue = function(revPerPage, frames) {
  return revPerPage / frames;
};

// get tab url
url = chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  console.log("the url is", tabs[0].url);
});
