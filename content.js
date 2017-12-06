chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.toggle === true) {
        let paragraphs = document.getElementsByTagName('p');
        for (element of paragraphs) {
            element.style['background-color'] = '#FF00FF';
            element.style['color'] = '#FFFFFF';
        }
    }
}