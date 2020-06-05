(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{"2ccf":function(t,e,n){"use strict";var c,u=function(){var t=this,e=t.$createElement;t._self._c},f=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return c}))},"2cfc":function(t,e,n){},"80bf":function(t,e,n){"use strict";var c=n("2cfc"),u=n.n(c);u.a},c4ed:function(t,e,n){"use strict";n.r(e);var c=n("2ccf"),u=n("f181");for(var f in u)"default"!==f&&function(t){n.d(e,t,(function(){return u[t]}))}(f);n("80bf");var r,i=n("f0c5"),o=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);e["default"]=o.exports},eb44:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=u(n("2476"));function u(t){return t&&t.__esModule?t:{default:t}}var f={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive),c.default.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive),c.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=f}).call(this,n("543d")["default"])},f181:function(t,e,n){"use strict";n.r(e);var c=n("eb44"),u=n.n(c);for(var f in c)"default"!==f&&function(t){n.d(e,t,(function(){return c[t]}))}(f);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c4ed"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
