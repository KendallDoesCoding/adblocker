chrome.webRequest.onBeforceRequest.addListener(
    function(details) { return { cancel:true }},
    { urls: ["*://*.zedo.com/*"]},
    ["blocking"]
)