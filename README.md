# javascript-injector
Chrome extension for injecting javascript to the webpage you are visiting. It can be used as a handy tool to make your surfing a bit of more fun. I personally use it mainly during the test automation.

## Install
You can install the extension from [chrome web store](https://chrome.google.com/webstore/detail/javascript-injector/ejnccfcackblkelbafbolcpjfpcmbplg).

## How to use
Let's say you want to run a small piece of javascript in your favorite web site https://duckduckgo.com/ every time you visit it.

* Open the website on your chrome:
![alt text](https://raw.githubusercontent.com/hex0cter/js-injector/master/publisher/screenshots/SS1.png "open the website")

* Click on the javascript-injector extension right to the address bar, and fill in the javascript below
```javascript
document.body.style.backgroundColor = "lightblue";
```

![alt text](https://raw.githubusercontent.com/hex0cter/js-injector/master/publisher/screenshots/SS2.png "fill in the javascript")

* Click on update

From now on, whenever you visit the website, on any of your devices (as long as you log into chrome using the same account), the snippet will be executed automatically.
![alt text](https://raw.githubusercontent.com/hex0cter/js-injector/master/publisher/screenshots/SS3.png "the snippet will be executed")

## License

This code is free to use under the terms of the MIT license.

## Contribution

You are more than welcome to raise any issues [here](https://github.com/hex0cter/js-injector/issues), or create a Pull Request.
