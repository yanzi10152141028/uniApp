(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/fab/fab"],{"04e2":function(t,n,e){"use strict";(function(t){e("c7b4");o(e("66fd"));var n=o(e("b35f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"20eb":function(t,n,e){},"286d":function(t,n,e){"use strict";e.r(n);var o=e("845f"),c=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=c.a},3451:function(t,n,e){},"38c8":function(t,n,e){"use strict";var o={uniFab:function(){return e.e("components/uni-fab/uni-fab").then(e.bind(null,"9e33"))}},c=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}))},4678:function(t,n,e){"use strict";var o=e("20eb"),c=e.n(o);c.a},"845f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(n){console.log(n),this.content[n.index].active=!n.item.active,t.showModal({title:"提示",content:"您".concat(this.content[n.index].active?"选中了":"取消了").concat(n.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},fabClick:function(){t.showToast({title:"点击了悬浮按钮",icon:"none"})},switchBtn:function(t,n){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=n),this.$forceUpdate()}}};n.default=e}).call(this,e("543d")["default"])},b35f:function(t,n,e){"use strict";e.r(n);var o=e("38c8"),c=e("286d");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("cad1"),e("4678");var a,r=e("f0c5"),u=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},cad1:function(t,n,e){"use strict";var o=e("3451"),c=e.n(o);c.a}},[["04e2","common/runtime","common/vendor"]]]);