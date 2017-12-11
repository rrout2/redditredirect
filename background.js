chrome.browserAction.onClicked.addListener(function(tab) {
	var go = "https://www.reddit.com/";
	chrome.tabs.update({url: go});
});