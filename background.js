var check = function(tab_id, data, tab) {
  if(tab.url.indexOf('g') > -1){
    chrome.pageAction.show(tab_id);
  }
}

chrome.tabs.onUpdated.addListener(check)