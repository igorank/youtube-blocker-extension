// block.js

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit').addEventListener('click', function() {
    const codeInput = document.getElementById('code').value;
    // const expires = Date.now() + 3600000; // 1 hour
    const expires = Date.now() + 60000; // 1 minute

    if (codeInput === 'YOUR_SECRET_CODE') {
      chrome.storage.local.set({ access_code: codeInput, access_expires: expires }, function() {
        console.log("Access granted. Redirecting to YouTube.");
        window.location.href = 'https://www.youtube.com';
      });
    } else {
      console.log("Invalid code entered.");
      const message = document.createElement('p');
      message.textContent = 'Invalid code!';
      document.body.appendChild(message);
    }
  });
});
