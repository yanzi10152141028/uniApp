(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/image/image"],{"02ac":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("4795")),a=u(n("bdc6"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,i,a,u,c){try{var r=e[u](c),s=r.value}catch(o){return void n(o)}r.done?t(s):Promise.resolve(s).then(i,a)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var u=e.apply(t,n);function r(e){c(u,i,a,r,s,"next",e)}function s(e){c(u,i,a,r,s,"throw",e)}r(void 0)}))}}var s=[["camera"],["album"],["camera","album"]],o=[["compressed"],["original"],["compressed","original"]],f={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},sizeTypeChange:function(e){this.sizeTypeIndex=parseInt(e.detail.value)},countChange:function(e){this.countIndex=e.detail.value},chooseImage:function(){var t=r(i.default.mark((function t(){var n,a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(n=t.sent,console.log("是否继续?",n),n){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:s[this.sourceTypeIndex],sizeType:o[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){a.imageList=a.imageList.concat(e.tempFilePaths)},fail:function(t){e.getSetting({success:function(t){var n=!1;switch(a.sourceTypeIndex){case 0:n=t.authSetting["scope.camera"];break;case 1:n=t.authSetting["scope.album"];break;case 2:n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];break;default:break}n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}});case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),isFullImg:function(){var t=this;return new Promise((function(n){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})}))},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})},checkPermission:function(t){var n=this;return r(i.default.mark((function u(){var c,r;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(c=t?t-1:n.sourceTypeIndex,!a.default.isIOS){i.next=7;break}return i.next=4,a.default.requestIOS(s[c][0]);case 4:i.t0=i.sent,i.next=10;break;case 7:return i.next=9,a.default.requestAndroid(0===c?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:i.t0=i.sent;case 10:return r=i.t0,null===r||1===r?r=1:e.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&a.default.gotoAppSetting()}}),i.abrupt("return",r);case 13:case"end":return i.stop()}}),u)})))()}}};t.default=f}).call(this,n("543d")["default"])},"068d":function(e,t,n){"use strict";var i=n("4dfa"),a=n.n(i);a.a},"0c11":function(e,t,n){"use strict";n.r(t);var i=n("c197"),a=n("83b7");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("068d");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=s.exports},"4dfa":function(e,t,n){},"64a5":function(e,t,n){"use strict";(function(e){n("c7b4");i(n("66fd"));var t=i(n("0c11"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"83b7":function(e,t,n){"use strict";n.r(t);var i=n("02ac"),a=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},c197:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))}},[["64a5","common/runtime","common/vendor"]]]);