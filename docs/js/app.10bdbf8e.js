(function(e){function n(n){for(var t,a,u=n[0],i=n[1],s=n[2],p=0,h=[];p<u.length;p++)a=u[p],o[a]&&h.push(o[a][0]),o[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);l&&l(n);while(h.length)h.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,n=0;n<c.length;n++){for(var r=c[n],t=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(t=!1)}t&&(c.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={app:0},c=[];function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"034f":function(e,n,r){"use strict";var t=r("c21b"),o=r.n(t);o.a},"148d":function(e,n,r){"use strict";r.r(n),function(e){r("cadf"),r("551c"),r("097d");e.exports={message:{pangram:"快狐跨懒狗。",mile:"里程"}}}.call(this,r("dd40")(e))},1889:function(e,n,r){"use strict";r.r(n),function(e){r("cadf"),r("551c"),r("097d");e.exports={message:{pangram:"敏捷的棕色狐狸跳躍過懶惰狗。",mile:"哩程"}}}.call(this,r("dd40")(e))},"56d7":function(e,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("097d");var t=r("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("Index")],1)},c=[],a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"hello"},[r("h1",[e._v("Vue-i18n 例子")]),r("p",[r("span",[e._v("切换语言：")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){var n="_value"in e?e._value:e.value;return n});e.$set(e.$i18n,"locale",n.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"zh-hans"}},[e._v("简体中文")]),r("option",{attrs:{value:"zh-hant"}},[e._v("繁体中文")]),r("option",{attrs:{value:"en"}},[e._v("英文")])])]),r("h3",[e._v("普通文本")]),r("p",[e._v(" "+e._s(e.$t("message.pangram"))+" ")]),r("h3",[e._v("单复数")]),r("p",[e._v(" 1 "+e._s(e.$tc("message.mile",1))+" ")]),r("p",[e._v(" 100 "+e._s(e.$tc("message.mile",100))+" ")]),r("h3",[e._v("时间格式")]),r("p",[e._v("en-SG: "+e._s(e.$d(new Date,"long","en-SG")))]),r("p",[e._v("zh-CN: "+e._s(e.$d(new Date,"long","zh-CN")))]),r("p",[e._v("zh-HK: "+e._s(e.$d(new Date,"long","zh-HK")))]),r("h3",[e._v("货币格式")]),r("p",[e._v("en-SG: "+e._s(e.$n(100,"currency","en-SG")))]),r("p",[e._v("zh-CN: "+e._s(e.$n(100,"currency","zh-CN")))]),r("p",[e._v("zh-HK: "+e._s(e.$n(100,"currency","zh-HK")))])])},u=[],i={name:"Index"},s=i,l=(r("79d3"),r("2877")),p=Object(l["a"])(s,a,u,!1,null,"7370f6d1",null);p.options.__file="Index.vue";var h=p.exports,m={name:"app",components:{Index:h}},d=m,f=(r("034f"),Object(l["a"])(d,o,c,!1,null,null,null));f.options.__file="App.vue";var v=f.exports,y=r("a925");t["a"].use(y["a"]);var _={en:r("d500"),"zh-hans":r("148d"),"zh-hant":r("1889")},g={"en-SG":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},"zh-CN":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}},"zh-HK":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}}},b={"en-SG":{currency:{style:"currency",currency:"SGD",currencyDisplay:"symbol"}},"zh-CN":{currency:{style:"currency",currency:"CNY",currencyDisplay:"symbol"}},"zh-HK":{currency:{style:"currency",currency:"HKD",currencyDisplay:"symbol"}}},w=new y["a"]({locale:"en",messages:_,dateTimeFormats:g,numberFormats:b});t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(v)},i18n:w}).$mount("#app")},"79d3":function(e,n,r){"use strict";var t=r("c5dc"),o=r.n(t);o.a},c21b:function(e,n,r){},c5dc:function(e,n,r){},d500:function(e,n){e.exports={message:{pangram:"The quick brown fox jumps over the lazy dog.",mile:"mile | miles"}}}});
//# sourceMappingURL=app.10bdbf8e.js.map