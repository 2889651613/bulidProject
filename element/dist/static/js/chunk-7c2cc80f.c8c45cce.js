(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c2cc80f","chunk-2d22cea4"],{2549:function(t,n,e){"use strict";e("db7a")},6604:function(t,n,e){},ab37:function(t,n,e){"use strict";e("6604")},b76b:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tabs",{attrs:{tabs:t.menuTab,activeName:t.tabActiveName,changeTab:t.changeTab}},[e("div",{on:{contextmenu:function(n){return t.rightClick(n)}}},[e("div",[e("div",[t._v(t._s(t.music.title))]),e("div",[e("video",{ref:"aduio",staticClass:"el-icon-video-play",attrs:{"webkit-playsinline":"",playsinline:"","x5-video-player-type":"h5-page",controls:"",autoplay:""},on:{click:t.play}})])]),e("div",{staticClass:"list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"list_item",on:{click:function(e){return t.next(n,i)}}},[e("div",{class:t.active==i&&n.title==t.music.title?"active":"no_active"},[e("div",{staticStyle:{padding:"5px"}},[t._v(t._s(i))]),e("p",[t._v(t._s(n.title))])])])})),0)])])},a=[],c=(e("d81d"),e("b0c0"),e("f0e2")),o=(e("f4ee"),e("bc3a")),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-tabs",{on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.tabs,(function(n,i){return e("el-tab-pane",{key:i,attrs:{name:n.name,label:n.label}},[t._t("default")],2)})),1)],1)},u=[],l={components:{},data:function(){return{active:this.activeName}},name:"Tabs",props:{tabs:{type:Array},activeName:{type:String},changeTab:{type:Function}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},r=l,d=(e("2549"),e("2877")),f=Object(d["a"])(r,s,u,!1,null,"a99020ee",null),h=f.exports,p=e("2b0e"),b={name:"music",data:function(){return{menuTab:[],tabActiveName:"en",list:[],audio:null,active:null,music:{title:"",url:""},index:0,name:null,cache:null}},components:{Tabs:h},methods:{changeTab:function(t){var n=this;this.cache[t.name]&&this.cache[t.name]instanceof Array&&(this.list=this.cache[t.name].map((function(t){return t.url=n.cache.websitePath+t.url,t})))},rightClick:function(t){var n=this;t.returnValue=!1,t.cancelBubble=!0;t.target.getBoundingClientRect();var e={position:"fixed",width:"100px",height:"100px",background:"red",top:t.clientY+"px","z-index":9};return p["default"].component("test",{render:function(t){return t("div",{style:e,on:{click:function(){n.name=null}}})}}),this.name="test",!1},http:function(){var t=this;o("http://116.62.42.204/music/list.json").then((function(n){n.data&&(t.cache=n.data,t.list=n.data.en.map((function(t){return t.url=n.data.websitePath+t.url,t})),t.menuTab=n.data.type.map((function(t){return{label:t.title,name:t.flag}})))}))},replay:function(){this.audio||this.init(),this.aduio.src([{src:this.music.url}])},next:function(t,n){console.log(t,n),this.music=t,this.active=n,n!==this.list.length?this.index=n+1:this.index=0,this.replay()},click:function(){},play:function(){this.aduio.play()},init:function(){var t=this,n=new c["a"](this.$refs.aduio,{bigPlayButton:!1,textTrackDisplay:!1,posterImage:!0,errorDisplay:!0,controlBar:!1,stopStatus:!1,temporary:!1,controls:!1,liveui:!0,responsive:!0,sources:[{src:t.music.url}]},(function(){this.on("loadedmetadata",(function(){t.orginalData=!0,t.initPlay=!0})),this.on("firstplay",(function(){})),this.on("ended",(function(){t.index===t.list.length?(t.active=0,t.next(t.list[0],0)):t.next(t.list[t.index],t.index)})),this.on("loadstart",(function(){console.log("loadstart")})),this.on("seeking",(function(){console.log("seeking")})),this.on("seeked",(function(){console.log("seeked")})),this.on("waiting",(function(){console.log("waiting")})),this.on("pause",(function(){})),this.on("play",(function(){}))}));this.aduio=n}},mounted:function(){this.http()}},m=b,v=(e("ab37"),Object(d["a"])(m,i,a,!1,null,null,null));n["default"]=v.exports},db7a:function(t,n,e){},f4ee:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},a=[],c={},o=c,s=e("2877"),u=Object(s["a"])(o,i,a,!1,null,null,null);n["default"]=u.exports}}]);