(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uLink"],{"0032":function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}))},9776:function(t,e,n){"use strict";n.r(e);var u=n("0032"),a=n("fbd3");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o,r=n("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);e["default"]=f.exports},b682:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){this.inWhiteList?t.navigateTo({url:"/pages/component/web-view/web-view?url="+this.href}):(t.setClipboardData({data:this.href}),t.showModal({content:"本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",showCancel:!1}))}}};e.default=n}).call(this,n("543d")["default"])},fbd3:function(t,e,n){"use strict";n.r(e);var u=n("b682"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uLink-create-component',
    {
        'components/uLink-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9776"))
        })
    },
    [['components/uLink-create-component']]
]);
