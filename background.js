var getCurrentTabUrl = function(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };


  chrome.tabs.query(queryInfo, function(tabs) {
    callback(tabs);
  });
}

var partners = ["nike", "macy", "lowe", "itunes", "domino", "sephora", "amazon", "cvs", "bloomingdales", "groupon"]
//list of partners, will eventually be async call

var partnerCheck = function (urls){
  var url = urls[0].url
  var match = false;
  console.log(url)

  partners.forEach(function(partner){
    if(url.includes(partner)) match = true
  })
  return match;
}
//does current url match any of the partners. this is very simple, prime candidate for refactoring

var onTabChange = function(){
  if(getCurrentTabUrl(partnerCheck)){
    console.log('done')
    //popup.show()
    //show popup
  }
  //popup.show()
  console.log(getCurrentTabUrl(partnerCheck))
}

onTabChange()

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({ url:
//     chrome.extension.getURL('nike.com')
//   })
// })

chrome.tabs.onUpdated.addListener(onTabChange);