(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-node-info/get-node-info"],{"08e1":function(t,e,n){"use strict";var o=n("8455"),f=n.n(o);f.a},"5afb":function(t,e,n){"use strict";n.r(e);var o=n("f743"),f=n("f4e4");for(var u in f)"default"!==u&&function(t){n.d(e,t,(function(){return f[t]}))}(u);n("08e1");var r,i=n("f0c5"),a=Object(i["a"])(f["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=a.exports},"5e93":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*t.upx2px(320)+"px",this.top=Math.random()*t.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var e=this;t.createSelectorQuery().select(".target").boundingClientRect().exec((function(t){var n=t[0];if(n){var o=["left","right","top","bottom","width","height"],f=[];for(var u in o){var r=o[u];f.push({key:r,val:n[r]})}e.info=f}}))}}};e.default=n}).call(this,n("543d")["default"])},8455:function(t,e,n){},c9ff:function(t,e,n){"use strict";(function(t){n("c7b4");o(n("66fd"));var e=o(n("5afb"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f4e4:function(t,e,n){"use strict";n.r(e);var o=n("5e93"),f=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=f.a},f743:function(t,e,n){"use strict";var o,f=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}))}},[["c9ff","common/runtime","common/vendor"]]]);