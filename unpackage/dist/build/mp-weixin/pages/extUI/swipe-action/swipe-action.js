(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swipe-action/swipe-action"],{2033:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{isOpened:!1,options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],swipeList:[{options:[{text:"添加",style:{backgroundColor:"rgb(255,58,49)"}}],id:0,content:"item1"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}},onReady:function(){var t=this;this.$nextTick((function(){t.isOpened=!0}))},methods:{bindClick:function(n){t.showToast({title:"点击了".concat(n.content.text,"按钮"),icon:"none"})},setOpened:function(){this.isOpened=!this.isOpened},change:function(t){this.isOpened=t,console.log("返回：",t)},swipeChange:function(t){console.log("返回：",t)},swipeClick:function(n,e){var o=this,i=n.content;"删除"===i.text?t.showModal({title:"提示",content:"是否删除",success:function(t){t.confirm?o.swipeList.splice(e,1):t.cancel&&console.log("用户点击取消")}}):"添加"===i.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"}),t.showToast({title:"添加了一条数据",icon:"none"})):t.showToast({title:"最多添加十条数据",icon:"none"}):t.showToast({title:"点击了".concat(n.content.text,"按钮"),icon:"none"})}}};n.default=e}).call(this,e("543d")["default"])},2539:function(t,n,e){"use strict";var o=e("ae42"),i=e.n(o);i.a},"3d25":function(t,n,e){"use strict";(function(t){e("c7b4");o(e("66fd"));var n=o(e("de2e"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a1a6:function(t,n,e){"use strict";e.r(n);var o=e("2033"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},ae42:function(t,n,e){},c211:function(t,n,e){"use strict";var o={uniSection:function(){return e.e("components/uni-section/uni-section").then(e.bind(null,"0372"))},uniSwipeAction:function(){return e.e("components/uni-swipe-action/uni-swipe-action").then(e.bind(null,"b690"))},uniSwipeActionItem:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-swipe-action-item/uni-swipe-action-item")]).then(e.bind(null,"cd8f"))}},i=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},cb26:function(t,n,e){},de2e:function(t,n,e){"use strict";e.r(n);var o=e("c211"),i=e("a1a6");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("2539"),e("e58d");var s,u=e("f0c5"),a=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);n["default"]=a.exports},e58d:function(t,n,e){"use strict";var o=e("cb26"),i=e.n(o);i.a}},[["3d25","common/runtime","common/vendor"]]]);