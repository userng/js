function go_get_url(url){var l=document.createElement("a");l.href=url;return l};function go_get_host_name(url){var domain;if(typeof url==='undefined'||url===null||url===''||url.match(/^\#/)){return""}
url=go_get_url(url);if(url.href.search(/^http[s]?:\/\//)!==-1){domain=url.href.split('/')[2]}else{return""}
domain=domain.split(':')[0];return domain.toLowerCase()}
document.addEventListener("DOMContentLoaded",function(event){if(typeof go_url==='undefined'){return}
if(typeof api==='undefined'){return}
var advert_type=2;var anchors=document.getElementsByTagName("a");if(typeof go_domains!=='undefined'){for(var i=0;i<anchors.length;i++){var hostname=go_get_host_name(anchors[i].getAttribute("href"));if(hostname.length>0&&go_domains.indexOf(hostname)>-1){anchors[i].href=go_url+"/?api="+ encodeURIComponent(api)+"&url="+ encodeURIComponent(anchors[i].href)+"&type="+ encodeURIComponent(advert_type)}else{if(anchors[i].protocol==="magnet:"){anchors[i].href=go_url+"/?api="+ encodeURIComponent(api)+"&url="+ encodeURIComponent(anchors[i].href)+"&type="+ encodeURIComponent(advert_type)}}}
return}
if(typeof domain_back!=='undefined'){for(var i=0;i<anchors.length;i++){var hostname=go_get_host_name(anchors[i].getAttribute("href"));if(hostname.length>0&&domain_back.indexOf(hostname)===-1){anchors[i].href=go_url+"/?api="+ encodeURIComponent(api)+"&url="+ encodeURIComponent(anchors[i].href)+"&type="+ encodeURIComponent(advert_type)}else{if(anchors[i].protocol==="magnet:"){anchors[i].href=go_url+"/?api="+ encodeURIComponent(api)+"&url="+ encodeURIComponent(anchors[i].href)+"&type="+ encodeURIComponent(advert_type)}}}
return}})
