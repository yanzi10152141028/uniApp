(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{"18ff":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){n.screen=(100*e.value).toFixed()},fail:function(e){console.log(e)}})},methods:{sliderChange:function(n){var t=n.detail.value;this.screen!==t&&(console.log("当前数值："+n.detail.value),e.setScreenBrightness({value:t/100,success:function(){},fail:function(e){console.log(e)}}),this.screen=t)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=t}).call(this,t("543d")["default"])},"48ab":function(e,n,t){"use strict";t.r(n);var c=t("18ff"),u=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,(function(){return c[e]}))}(r);n["default"]=u.a},"4e7d":function(e,n,t){"use strict";var c=t("8bf5"),u=t.n(c);u.a},"89f2":function(e,n,t){"use strict";t.r(n);var c=t("9818"),u=t("48ab");for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);t("4e7d");var i,s=t("f0c5"),o=Object(s["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],i);n["default"]=o.exports},"8bf5":function(e,n,t){},9818:function(e,n,t){"use strict";var c,u=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return c}))},e04b:function(e,n,t){"use strict";(function(e){t("c7b4");c(t("66fd"));var n=c(t("89f2"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["e04b","common/runtime","common/vendor"]]]);