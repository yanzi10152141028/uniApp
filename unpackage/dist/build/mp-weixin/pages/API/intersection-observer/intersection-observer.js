(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/intersection-observer/intersection-observer"],{"4d9e":function(e,n,t){"use strict";var r=t("e417"),a=t.n(r);a.a},"625e":function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return r}))},8727:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=null,r={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var n=this;t=e.createIntersectionObserver(this),t.relativeTo(".scroll-view").observe(".ball",(function(e){e.intersectionRatio>0&&!n.appear?n.appear=!0:!e.intersectionRatio>0&&n.appear&&(n.appear=!1)}))},onUnload:function(){t&&t.disconnect()}};n.default=r}).call(this,t("543d")["default"])},a347:function(e,n,t){"use strict";t.r(n);var r=t("625e"),a=t("af88");for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("4d9e");var i,o=t("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=u.exports},af88:function(e,n,t){"use strict";t.r(n);var r=t("8727"),a=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=a.a},d7cb:function(e,n,t){"use strict";(function(e){t("c7b4");r(t("66fd"));var n=r(t("a347"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},e417:function(e,n,t){}},[["d7cb","common/runtime","common/vendor"]]]);