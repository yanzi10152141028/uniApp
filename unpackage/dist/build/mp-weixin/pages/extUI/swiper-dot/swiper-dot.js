(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swiper-dot/swiper-dot"],{"149f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(n){this.current=n.detail.current},selectStyle:function(n){this.dotsStyles=this.dotStyle[n],this.styleIndex=n},selectMode:function(n,t){this.mode=n,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};t.default=o},"16de":function(n,t,e){"use strict";e.r(t);var o=e("6d0b"),r=e("765c");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("51a4"),e("881c");var c,i=e("f0c5"),d=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=d.exports},1827:function(n,t,e){},"51a4":function(n,t,e){"use strict";var o=e("1827"),r=e.n(o);r.a},5310:function(n,t,e){},"6d0b":function(n,t,e){"use strict";var o={uniSwiperDot:function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"d172"))},uniSection:function(){return e.e("components/uni-section/uni-section").then(e.bind(null,"0372"))}},r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}))},"765c":function(n,t,e){"use strict";e.r(t);var o=e("149f"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},"881c":function(n,t,e){"use strict";var o=e("5310"),r=e.n(o);r.a},d727:function(n,t,e){"use strict";(function(n){e("c7b4");o(e("66fd"));var t=o(e("16de"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["d727","common/runtime","common/vendor"]]]);