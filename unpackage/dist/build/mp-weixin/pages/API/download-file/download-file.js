(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/download-file/download-file"],{"0836":function(n,e,t){},2391:function(n,e,t){"use strict";(function(n){t("c7b4");o(t("66fd"));var e=o(t("7d2b"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"4e95":function(n,e,t){"use strict";t.r(e);var o=t("85e1"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},"7d2b":function(n,e,t){"use strict";t.r(e);var o=t("e49a"),i=t("4e95");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("dc08");var a,c=t("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"85e1":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){n.showLoading({title:"下载中"});var e=this;n.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,n.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};e.default=t}).call(this,t("543d")["default"])},dc08:function(n,e,t){"use strict";var o=t("0836"),i=t.n(o);i.a},e49a:function(n,e,t){"use strict";var o,i=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}))}},[["2391","common/runtime","common/vendor"]]]);