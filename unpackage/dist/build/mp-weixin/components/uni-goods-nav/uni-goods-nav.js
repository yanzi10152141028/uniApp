(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-goods-nav/uni-goods-nav"],{3069:function(n,t,o){},"3e4b":function(n,t,o){"use strict";o.r(t);var e=o("496c"),c=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},"3f69":function(n,t,o){"use strict";var e=o("3069"),c=o.n(e);c.a},4385:function(n,t,o){"use strict";var e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(o.bind(null,"9326"))}},c=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}))},"496c":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(function(){return resolve(o("9326"))}.bind(null,o)).catch(o.oe)},c={name:"UniGoodsNav",components:{uniIcons:e},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,o){n.report&&n.report(o.text,o.text),this.$emit("buttonClick",{index:t,content:o})}}};t.default=c}).call(this,o("543d")["default"])},"7c16":function(n,t,o){"use strict";o.r(t);var e=o("4385"),c=o("3e4b");for(var u in c)"default"!==u&&function(n){o.d(t,n,(function(){return c[n]}))}(u);o("3f69");var i,r=o("f0c5"),f=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"34577705",null,!1,e["a"],i);t["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7c16"))
        })
    },
    [['components/uni-goods-nav/uni-goods-nav-create-component']]
]);