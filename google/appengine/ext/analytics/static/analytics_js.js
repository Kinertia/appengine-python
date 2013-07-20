/* Copyright 2008-9 Google Inc. All Rights Reserved. */ (function(){var n,p=this,r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},s=function(a){return"string"==typeof a},t="closure_uid_"+(1E9*Math.random()>>>0),u=0,w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}},x=function(a,b){var c=a.split("."),e=p;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e=e[d]?e[d]:e[d]={}:e[d]=
b},y=function(a,b){function c(){}c.prototype=b.prototype;a.m=b.prototype;a.prototype=new c};var z=function(a){Error.captureStackTrace?Error.captureStackTrace(this,z):this.stack=Error().stack||"";a&&(this.message=String(a))};y(z,Error);var aa=function(a,b){for(var c=a.split("%s"),e="",d=Array.prototype.slice.call(arguments,1);d.length&&1<c.length;)e+=c.shift()+d.shift();return e+c.join("%s")};var A=function(a,b){b.unshift(a);z.call(this,aa.apply(null,b));b.shift()};y(A,z);var B=function(a,b,c){if(!a){var e=Array.prototype.slice.call(arguments,2),d="Assertion failed";if(b)var d=d+(": "+b),f=e;throw new A(""+d,f||[]);}};var C=Array.prototype,D=C.indexOf?function(a,b,c){B(null!=a.length);return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ba=C.forEach?function(a,b,c){B(null!=a.length);C.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=s(a)?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)},ca=C.filter?function(a,b,c){B(null!=a.length);return C.filter.call(a,b,
c)}:function(a,b,c){for(var e=a.length,d=[],f=0,g=s(a)?a.split(""):a,h=0;h<e;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(d[f++]=l)}return d},da=function(a,b){var c=D(a,b),e;if(e=0<=c)B(null!=a.length),C.splice.call(a,c,1);return e},ea=function(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]},fa=function(a,b,c){B(null!=a.length);return 2>=arguments.length?C.slice.call(a,b):C.slice.call(a,b,c)};var E,F,G,H,ga=function(){return p.navigator?p.navigator.userAgent:null};H=G=F=E=!1;var I;if(I=ga()){var ha=p.navigator;E=0==I.indexOf("Opera");F=!E&&-1!=I.indexOf("MSIE");G=!E&&-1!=I.indexOf("WebKit");H=!E&&!G&&"Gecko"==ha.product}var ia=E,J=F,K=H,L=G,ja=function(){var a=p.document;return a?a.documentMode:void 0},M;
n:{var N="",O;if(ia&&p.opera)var P=p.opera.version,N="function"==typeof P?P():P;else if(K?O=/rv\:([^\);]+)(\)|;)/:J?O=/MSIE\s+([^\);]+)(\)|;)/:L&&(O=/WebKit\/(\S+)/),O)var ka=O.exec(ga()),N=ka?ka[1]:"";if(J){var la=ja();if(la>parseFloat(N)){M=String(la);break n}}M=N}
var ma=M,na={},Q=function(a){var b;if(!(b=na[a])){b=0;for(var c=String(ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",h=e[f]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var k=l.exec(g)||["","",""],q=m.exec(h)||["","",""];if(0==k[0].length&&0==q[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==q[1].length?0:parseInt(q[1],10))?-1:(0==k[1].length?
0:parseInt(k[1],10))>(0==q[1].length?0:parseInt(q[1],10))?1:0)||((0==k[2].length)<(0==q[2].length)?-1:(0==k[2].length)>(0==q[2].length)?1:0)||(k[2]<q[2]?-1:k[2]>q[2]?1:0)}while(0==b)}b=na[a]=0<=b}return b},oa=p.document,pa=oa&&J?ja()||("CSS1Compat"==oa.compatMode?parseInt(ma,10):5):void 0;!K&&!J||J&&J&&9<=pa||K&&Q("1.9.1");J&&Q("9");var qa=function(a){a=a.className;return s(a)&&a.match(/\S+/g)||[]},ra=function(a,b){for(var c=qa(a),e=fa(arguments,1),d=c,f=0;f<e.length;f++)0<=D(d,e[f])||d.push(e[f]);c=c.join(" ");a.className=c},ta=function(a,b){var c=qa(a),e=fa(arguments,1),c=sa(c,e).join(" ");a.className=c},sa=function(a,b){return ca(a,function(a){return!(0<=D(b,a))})};var R=function(a,b,c){var e=document;c=c||e;a=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var e={},d=0,f=0,g;g=c[f];f++)a==g.nodeName&&(e[d++]=g);e.length=d;return e}return c}c=c.getElementsByTagName(a||"*");if(b){e={};for(f=d=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&0<=D(a.split(/\s+/),b)&&(e[d++]=g);e.length=d;return e}return c};var S=function(a){S[" "](a);return a};S[" "]=function(){};var ua=!J||J&&9<=pa,va=J&&!Q("9");!L||Q("528");K&&Q("1.9b")||J&&Q("8")||ia&&Q("9.5")||L&&Q("528");K&&!Q("8")||J&&Q("9");var T=function(a,b){this.type=a;this.currentTarget=this.target=b};T.prototype.i=!1;T.prototype.defaultPrevented=!1;T.prototype.preventDefault=function(){this.defaultPrevented=!0};var U=function(a,b){a&&wa(this,a,b)};y(U,T);n=U.prototype;n.target=null;n.relatedTarget=null;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=!1;n.altKey=!1;n.shiftKey=!1;n.metaKey=!1;n.l=null;
var wa=function(a,b,c){var e=a.type=b.type;T.call(a,e);a.target=b.target||b.srcElement;a.currentTarget=c;if(c=b.relatedTarget){if(K){var d;n:{try{S(c.nodeName);d=!0;break n}catch(f){}d=!1}d||(c=null)}}else"mouseover"==e?c=b.fromElement:"mouseout"==e&&(c=b.toElement);a.relatedTarget=c;a.offsetX=L||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=L||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||
0;a.screenY=b.screenY||0;a.button=b.button;a.keyCode=b.keyCode||0;a.charCode=b.charCode||("keypress"==e?b.keyCode:0);a.ctrlKey=b.ctrlKey;a.altKey=b.altKey;a.shiftKey=b.shiftKey;a.metaKey=b.metaKey;a.state=b.state;a.l=b;b.defaultPrevented&&a.preventDefault();delete a.i};U.prototype.preventDefault=function(){U.m.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,va)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var xa="closure_listenable_"+(1E6*Math.random()|0),ya=0;var za=function(a,b,c,e,d,f){this.d=a;this.k=b;this.src=c;this.type=e;this.capture=!!d;this.e=f;this.key=++ya;this.c=this.h=!1};var V={},W={},X={},Y={},Ba=function(){var a=Aa,b=ua?function(c){return a.call(b.src,b.d,c)}:function(c){c=a.call(b.src,b.d,c);if(!c)return c};return b},Ca=function(a,b,c,e,d){if("array"==r(b))for(var f=0;f<b.length;f++)Ca(a,b[f],c,e,d);else if(c=Da(c),a&&a[xa]){f=c;B(a.f,"Event target is not initialized. Did you call superclass (goog.events.EventTarget) constructor?");c=a.f[b]||(a.f[b]=[]);var g;t:{for(g=0;g<c.length;++g){var h=c[g];if(h.d==f&&h.capture==!!e&&h.e==d)break t}g=-1}-1<g||(a=new za(f,
null,a,b,!!e,d),a.h=!0,c.push(a))}else n:{if(!b)throw Error("Invalid event type");e=!!e;h=W;b in h||(h[b]={a:0,b:0});h=h[b];e in h||(h[e]={a:0,b:0},h.a++);h=h[e];f=a[t]||(a[t]=++u);h.b++;if(h[f]){g=h[f];for(var l=0;l<g.length;l++)if(h=g[l],h.d==c&&h.e==d){if(h.c)break;break n}}else g=h[f]=[],h.a++;l=Ba();h=new za(c,l,a,b,e,d);h.h=!0;l.src=a;l.d=h;g.push(h);X[f]||(X[f]=[]);X[f].push(h);a.addEventListener?a.addEventListener(b,l,e):a.attachEvent(b in Y?Y[b]:Y[b]="on"+b,l);V[h.key]=h}},Ea=function(a,
b,c,e){if(!e.g&&e.j){for(var d=0,f=0;d<e.length;d++)e[d].c||(d!=f&&(e[f]=e[d]),f++);e.length=f;e.j=!1;0==f&&(delete W[a][b][c],W[a][b].a--,0==W[a][b].a&&(delete W[a][b],W[a].a--),0==W[a].a&&delete W[a])}},Fa=function(a,b,c,e,d){var f=1;b=b[t]||(b[t]=++u);if(a[b]){var g=--a.b,h=a[b];h.g?h.g++:h.g=1;try{for(var l=h.length,m=0;m<l;m++){var k=h[m];k&&!k.c&&(f&=!1!==Z(k,d))}}finally{a.b=Math.max(g,a.b),h.g--,Ea(c,e,b,h)}}return Boolean(f)},Z=function(a,b){var c=a.d,e=a.e||a.src;if(a.h&&"number"!=typeof a&&
a&&!a.c){var d=a.src;if(d&&d[xa]){var f=a.type;f in d.f&&da(d.f[f],a)&&(delete V[a.key],a.c=!0)}else{var f=a.type,g=a.k,h=a.capture;d.removeEventListener?d.removeEventListener(f,g,h):d.detachEvent&&d.detachEvent(f in Y?Y[f]:Y[f]="on"+f,g);d=d[t]||(d[t]=++u);X[d]&&(g=X[d],da(g,a),0==g.length&&delete X[d]);a.c=!0;a.d=null;a.k=null;a.src=null;a.e=null;if(g=W[f][h][d])g.j=!0,Ea(f,h,d,g);delete V[a.key]}}return c.call(e,b)},Aa=function(a,b){if(a.c)return!0;var c=a.type,e=W;if(!(c in e))return!0;var e=
e[c],d,f;if(!ua){var g;if(!(g=b))n:{g=["window","event"];for(var h=p;d=g.shift();)if(null!=h[d])h=h[d];else{g=null;break n}g=h}d=g;g=!0 in e;h=!1 in e;if(g){if(0>d.keyCode||void 0!=d.returnValue)return!0;n:{var l=!1;if(0==d.keyCode)try{d.keyCode=-1;break n}catch(m){l=!0}if(l||void 0==d.returnValue)d.returnValue=!0}}l=new U;wa(l,d,this);d=!0;try{if(g){for(var k=[],q=l.currentTarget;q;q=q.parentNode)k.push(q);f=e[!0];f.b=f.a;for(var v=k.length-1;!l.i&&0<=v&&f.b;v--)l.currentTarget=k[v],d&=Fa(f,k[v],
c,!0,l);if(h)for(f=e[!1],f.b=f.a,v=0;!l.i&&v<k.length&&f.b;v++)l.currentTarget=k[v],d&=Fa(f,k[v],c,!1,l)}else d=Z(a,l)}finally{k&&(k.length=0)}return d}c=new U(b,this);return d=Z(a,c)},Ga="__closure_events_fn_"+(1E9*Math.random()>>>0),Da=function(a){B(a,"Listener can not be null.");if("function"==r(a))return a;B(a.handleEvent,"An object listener must have handleEvent method.");return a[Ga]||(a[Ga]=function(b){return a.handleEvent(b)})};var $=function(){};$.n=function(){$.o||($.o=new $)};$.n();J||L&&Q("525");x("ae.init",function(){Ha();Ia();Ca(window,"load",function(){});Ja()});
var Ha=function(){var a;if(a=s("ae-content")?document.getElementById("ae-content"):"ae-content"){a=R("table","ae-table-striped",a);for(var b=0,c;c=a[b];b++){c=R("tbody",null,c);for(var e=0,d;d=c[e];e++){d=R("tr",null,d);for(var f=0,g;g=d[f];f++)f%2&&ra(g,"ae-even")}}}},Ia=function(){var a=R(null,"ae-noscript",void 0);ba(ea(a),function(a){ta(a,"ae-noscript")})},Ja=function(){p._gaq=p._gaq||[];p._gaq.push(function(){p._gaq._createAsyncTracker("UA-3739047-3","ae")._trackPageview()});(function(){var a=
document.createElement("script");a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";a.setAttribute("async","true");document.documentElement.firstChild.appendChild(a)})()};x("ae.trackPageView",function(){p._gaq&&p._gaq._getAsyncTracker("ae")._trackPageview()});var La=function(a){if(void 0==a||null==a||0==a.length)return 0;a=Math.max.apply(Math,a);return Ka(a)},Ka=function(a){var b=5;2>b&&(b=2);b-=1;return Math.ceil(a/b)*b},Ma=function(a,b,c){a=a.getSelection();1==a.length&&(a=a[0],null!=a.row&&(null!=b.starttime&&(c+="&starttime="+b.starttime),null!=b.endtime&&(c+="&endtime="+b.endtime),null!=b.latency_lower&&(c+="&latency_lower="+b.latency_lower),null!=b.latency_upper&&(c+="&latency_upper="+b.latency_upper),b=c+"&detail="+a.row,window.location.href=b))},
Na=function(a,b,c,e,d){var f=new google.visualization.DataTable;f.addColumn("string","");f.addColumn("number","");f.addColumn({type:"string",role:"tooltip"});for(var g=0;g<b.length;g++)f.addRow(["",b[g],c[g]]);c=Math.max(10*b.length,200);b=La(b);a=new google.visualization.ColumnChart(document.getElementById("rpctime-"+a));a.draw(f,{height:100,width:c,legend:"none",chartArea:{left:40},fontSize:11,vAxis:{minValue:0,maxValue:b,gridlines:{count:5}}});google.visualization.events.addListener(a,"select",
w(Ma,a,e,d))};x("ae.Charts.latencyHistogram",function(a,b,c){var e=new google.visualization.DataTable;e.addColumn("string","");e.addColumn("number","");for(var d=0;d<b.length;d++)e.addRow([""+a[d],b[d]]);for(d=b.length;d<a.length;d++)e.addRow([""+a[d],0]);b=La(b);(new google.visualization.ColumnChart(document.getElementById("latency-"+c))).draw(e,{legend:"none",width:20*a.length,height:200,vAxis:{maxValue:b,gridlines:{count:5}}})});
x("ae.Charts.latencyTimestampScatter",function(a,b,c,e,d){var f=new google.visualization.DataTable;f.addColumn("number","Time (seconds from start)");f.addColumn("number","Latency");for(var g=0;g<a.length;g++){var h=Math.round(a[g]-c);f.addRow([h,b[g]])}a=e.starttime?e.starttime:0;b=new google.visualization.ScatterChart(document.getElementById("LatencyVsTimestamp"));b.draw(f,{hAxis:{title:"Time (seconds from start of recording)",minValue:a},vAxis:{title:"Request Latency (milliseconds)",minValue:0},
tooltip:{trigger:"none"},legend:"none"});google.visualization.events.addListener(b,"select",w(Ma,b,e,d))});
x("ae.Charts.entityCountBarChart",function(a,b,c,e){var d=new google.visualization.DataTable;d.addColumn("string","");d.addColumn("number","Reads");d.addColumn({type:"string",role:"tooltip"});d.addColumn("number","Misses");d.addColumn({type:"string",role:"tooltip"});d.addColumn("number","Writes");d.addColumn({type:"string",role:"tooltip"});var f=50;f>b.length&&(f=b.length);for(var g=0;g<f;g++)d.addRow(["",b[g][1]-b[g][3],b[g][0],b[g][3],b[g][0],b[g][2],b[g][0]]);b=20*f;f=b+130;a=new google.visualization.ColumnChart(document.getElementById(e+
"-"+a));c=Ka(c);a.draw(d,{height:100,width:f,chartArea:{width:b},fontSize:10,isStacked:!0,vAxis:{minValue:0,maxValue:c,gridlines:{count:5}}})});
x("ae.Charts.rpcVariationCandlestick",function(a){var b=new google.visualization.DataTable;b.addColumn("string","");b.addColumn("number","");b.addColumn("number","");b.addColumn("number","");b.addColumn("number","");b.addRows(a);(new google.visualization.CandlestickChart(document.getElementById("rpcvariation"))).draw(b,{vAxis:{title:"RPC Latency variation (milliseconds)"},hAxis:{textPosition:"out",slantedText:!0,slantedTextAngle:45,textStyle:{fontSize:13}},height:250,chartArea:{top:10,height:100},
legend:"none",tooltip:{trigger:"none"}})});x("ae.Charts.totalTimeBarChart",function(a,b,c,e){for(var d=[],f=0;f<b.length;f++)d[f]=b[f]+" milliseconds";Na(a,b,d,c,e)});x("ae.Charts.rpcTimeBarChart",function(a,b,c,e,d){var f=[],g=[],h=c.indices,l=c.times;c=c.stats;for(var m=0;m<b;m++)f[m]=0,g[m]=null;for(m=0;m<h.length;m++){f[h[m]]=l[m];b=c[m];var k="Calls: "+b[0];if(0<b[1]||0<b[2]||0<b[3])k+=" Entities";0<b[1]&&(k+=" R:"+b[1]);0<b[2]&&(k+=" W:"+b[2]);0<b[3]&&(k+=" M:"+b[3]);g[h[m]]=k}Na(a,f,g,e,d)});})();