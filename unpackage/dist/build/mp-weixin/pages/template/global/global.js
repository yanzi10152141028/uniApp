(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/global/global"],{"0a19":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{gd:{}}},computed:c({},(0,r.mapState)(["testvuex"])),methods:c({},(0,r.mapMutations)(["setTestTrue"]),{},(0,r.mapMutations)(["setTestFalse"]),{setGD:function(){getApp().globalData.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=a},"15db":function(t,e,n){"use strict";n.r(e);var r=n("d54d"),o=n("7cac");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("8fdbb");var u,a=n("f0c5"),i=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=i.exports},"326f":function(t,e,n){"use strict";(function(t){n("c7b4");r(n("66fd"));var e=r(n("15db"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"7cac":function(t,e,n){"use strict";n.r(e);var r=n("0a19"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=o.a},"8fdbb":function(t,e,n){"use strict";var r=n("ce22"),o=n.n(r);o.a},ce22:function(t,e,n){},d54d:function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}))}},[["326f","common/runtime","common/vendor"]]]);