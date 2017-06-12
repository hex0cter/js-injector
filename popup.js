// Storage Documentation: https://developer.chrome.com/extensions/storage

document.addEventListener('DOMContentLoaded', function() {
  var textarea = document.getElementById('jscode');
  var injectButton = document.getElementById('inject');

  chrome.tabs.query({active: true},function(tab) {
    var url = tab[0].url;
    console.log("Here am i: " + url);

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
        console.log('No value specified');
        return;
      }
      // Save it using the Chrome extension storage API.
      var keypair = {};
      keypair[url] = theValue;
      chrome.storage.sync.set(keypair, function() {
        // Notify that we saved.
        console.log('SAVING ' + JSON.stringify({url: theValue}));
      });
    }, false);
  });


}, false);
