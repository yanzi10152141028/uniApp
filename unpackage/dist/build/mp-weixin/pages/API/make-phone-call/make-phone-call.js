(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/make-phone-call/make-phone-call"],{"03a2":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},l=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return l})),e.d(t,"a",(function(){return u}))},"3ea9":function(n,t,e){"use strict";(function(n){e("c7b4");u(e("66fd"));var t=u(e("f28f"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"4d7a":function(n,t,e){"use strict";e.r(t);var u=e("5118"),a=e.n(u);for(var l in u)"default"!==l&&function(n){e.d(t,n,(function(){return u[n]}))}(l);t["default"]=a.a},5118:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(n){this.inputValue=n.detail.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){n.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}}};t.default=e}).call(this,e("543d")["default"])},e576:function(n,t,e){},f28f:function(n,t,e){"use strict";e.r(t);var u=e("03a2"),a=e("4d7a");for(var l in a)"default"!==l&&function(n){e.d(t,n,(function(){return a[n]}))}(l);e("f3f6");var i,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=o.exports},f3f6:function(n,t,e){"use strict";var u=e("e576"),a=e.n(u);a.a}},[["3ea9","common/runtime","common/vendor"]]]);