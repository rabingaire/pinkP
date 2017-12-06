chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let message = {
        toggle: true
    }
    chrome.tabs.sendMessage(tab.id, message);
}