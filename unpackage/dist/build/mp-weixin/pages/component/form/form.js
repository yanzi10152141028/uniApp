(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form/form"],{"17fc":function(e,n,t){"use strict";t.r(n);var c=t("3a4d"),o=t("a21f");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("577a");var a,u=t("f0c5"),f=Object(u["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);n["default"]=f.exports},"3a4d":function(e,n,t){"use strict";var c,o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return c}))},"577a":function(e,n,t){"use strict";var c=t("f28a"),o=t.n(c);o.a},"8abc":function(e,n,t){"use strict";(function(e){t("c7b4");c(t("66fd"));var n=c(t("17fc"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"9bd5":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=t("ae4a"),o={data:function(){return{}},methods:{formSubmit:function(n){console.log("form发生了submit事件，携带数据为："+JSON.stringify(n.detail.value));var t=[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}],o=n.detail.value,r=c.check(o,t);r?e.showToast({title:"验证通过!",icon:"none"}):e.showToast({title:c.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};n.default=o}).call(this,t("543d")["default"])},a21f:function(e,n,t){"use strict";t.r(n);var c=t("9bd5"),o=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,(function(){return c[e]}))}(r);n["default"]=o.a},f28a:function(e,n,t){}},[["8abc","common/runtime","common/vendor"]]]);