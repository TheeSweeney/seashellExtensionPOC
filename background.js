var partners = ["nike", "macy", "lowe", "itunes", "domino", "sephora", "amazon", "cvs", "bloomingdales", "groupon"]
//list of partners, will eventually be async call

var partnerCheck = function (url){
  var match = false;
  console.log(url)

  partners.forEach(function(partner){
    if(url.includes(partner)) match = true
  })
  return match;
}

var check = function(tab_id, data, tab) {
  if(partnerCheck(tab.url)){
    chrome.pageAction.show(tab_id);
  }
}

chrome.tabs.onUpdated.addListener(check)