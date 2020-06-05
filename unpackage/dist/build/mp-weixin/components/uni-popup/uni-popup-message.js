(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup-message"],{"004e":function(t,e,n){},"4ab6":function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}))},5856:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u},"5c37":function(t,e,n){"use strict";n.r(e);var u=n("5856"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},6058:function(t,e,n){"use strict";var u=n("004e"),i=n.n(u);i.a},c2fa:function(t,e,n){"use strict";n.r(e);var u=n("4ab6"),i=n("5c37");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("6058");var r,a=n("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"46838827",null,!1,u["a"],r);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-message-create-component',
    {
        'components/uni-popup/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c2fa"))
        })
    },
    [['components/uni-popup/uni-popup-message-create-component']]
]);
