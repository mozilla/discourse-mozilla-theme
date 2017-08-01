function _dntEnabled(n,i){"use strict"
var e=n||navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack,t=i||navigator.userAgent,o=["Windows NT 6.1","Windows NT 6.2","Windows NT 6.3"],d=t.match(/Firefox\/(\d+)/),a=/MSIE|Trident/i,r=a.test(t),s=t.match(/Windows.+?(?=;)/g)
return r&&"function"!=typeof Array.prototype.indexOf?!1:(e=d&&parseInt(d[1],10)<32?"Unspecified":r&&s&&-1!==o.indexOf(""+s)?"Unspecified":{0:"Disabled",1:"Enabled"}[e]||"Unspecified","Enabled"===e?!0:!1)}
