// Storage Documentation: https://developer.chrome.com/extensions/storage

document.addEventListener('DOMContentLoaded', function() {
  var textarea = document.getElementById('jscode');
  var injectButton = document.getElementById('inject');

  chrome.tabs.query({active: true},function(tab) {
    var url = tab[0].url;

    chrome.storage.sync.get(url, function(theValue) {
      if (theValue[url] != undefined) {
        textarea.value = theValue[url];
      } else {
        textarea.value = '';
      }
    });

    injectButton.addEventListener('click', function() {
      var theValue = textarea.value;
      if (!theValue) {
        chrome.storage.sync.remove(url, function() {
          // Notify that we saved.
          console.log('REMOVED script for ' + url);
        });
        window.close();
        return;
      }

      chrome.tabs.executeScript({
        code: theValue
      });

      // Save it using the Chrome extension storage API.
      var keypair = {};
      keypair[url] = theValue;
      chrome.storage.sync.set(keypair, function() {
        // Notify that we saved.
        console.log('SAVED ' + JSON.stringify(keypair));
      });
      window.close();
    });
  });
});
