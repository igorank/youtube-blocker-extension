// content.js

console.log("Content script loaded");

chrome.storage.local.get(['access_code', 'access_expires'], function(result) {
  const accessCode = result.access_code;
  const accessExpires = result.access_expires;
  const currentTime = Date.now();

  console.log("Stored access code:", accessCode);
  console.log("Stored access expires:", accessExpires);
  console.log("Current time:", currentTime);

  if (window.location.hostname === 'www.youtube.com') {
    if (accessCode === 'YOUR_SECRET_CODE' && currentTime < accessExpires) {
      console.log("Access allowed. You should be on YouTube.");
    } else {
      console.log("Access denied. Redirecting to block page.");
      window.location.replace(chrome.runtime.getURL("block.html"));
    }
  }
});
