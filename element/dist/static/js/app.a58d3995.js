(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-1d81119f":"2c03f423","chunk-55b37206":"443239c8","chunk-a9a8fc18":"16c33516","chunk-ba1b1732":"7b4ea143","chunk-613778a2":"56290020","chunk-7c2cc80f":"74784977","chunk-2d22cea4":"283d06f3","chunk-51ecfcfb":"afbc169a","chunk-531883c0":"39092276","chunk-54a7180c":"fdafbc1d","chunk-65478882":"55c4b162","chunk-abef50ec":"7bd7d0a6"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-a9a8fc18":1,"chunk-613778a2":1,"chunk-7c2cc80f":1,"chunk-51ecfcfb":1,"chunk-531883c0":1,"chunk-54a7180c":1,"chunk-65478882":1,"chunk-abef50ec":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-1d81119f":"31d6cfe0","chunk-55b37206":"31d6cfe0","chunk-a9a8fc18":"00057aeb","chunk-ba1b1732":"31d6cfe0","chunk-613778a2":"4f34c11f","chunk-7c2cc80f":"eef861ab","chunk-2d22cea4":"31d6cfe0","chunk-51ecfcfb":"85eb1a6e","chunk-531883c0":"01a04c35","chunk-54a7180c":"6204df73","chunk-65478882":"01a04c35","chunk-abef50ec":"2ad411b2"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"10dbd":function(e,t,n){"use strict";n("b526")},"51ff":function(e,t,n){var r={"./dashboard.svg":"f782"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="51ff"},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9a1a":function(e,t,n){"use strict";n("a66d")},"9c0c":function(e,t,n){},a66d:function(e,t,n){},b526:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"randomDataF",(function(){return le})),n.d(r,"TestChart",(function(){return fe})),n.d(r,"form",(function(){return he}));var a=n("5530"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=n("d4ec"),s=n("bee2"),l=n("262e"),f=n("2caf"),h=n("9ab4"),d=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(h["a"])([Object(d["b"])()],m.prototype,"msg",void 0),m=Object(h["a"])([d["a"]],m);var v=m,g=v,k=(n("9a1a"),n("2877")),y=Object(k["a"])(g,p,b,!1,null,"0030956f",null),_=y.exports,j=n("e925"),w=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){console.log(j["a"]())}}]),n}(d["c"]);w=Object(h["a"])([Object(d["a"])({components:{HelloWorld:_}})],w);var O=w,x=O,C=(n("5c0b"),Object(k["a"])(x,c,u,!1,null,null,null)),E=C.exports,P=n("5c96"),A=n.n(P),M=(n("0fae"),n("d3b7"),function(){return n.e("chunk-51ecfcfb").then(n.bind(null,"c6f7"))}),S=function(){return n.e("chunk-abef50ec").then(n.bind(null,"f12b"))},D=function(){return n.e("chunk-531883c0").then(n.bind(null,"4cdf"))},N=function(){return n.e("chunk-65478882").then(n.bind(null,"465e"))},T=function(){return Promise.all([n.e("chunk-1d81119f"),n.e("chunk-55b37206"),n.e("chunk-a9a8fc18")]).then(n.bind(null,"02cd"))},$=function(){return Promise.all([n.e("chunk-1d81119f"),n.e("chunk-ba1b1732"),n.e("chunk-613778a2")]).then(n.bind(null,"6f82"))},z=function(){return n.e("chunk-54a7180c").then(n.bind(null,"2c63"))},L=function(){return Promise.all([n.e("chunk-1d81119f"),n.e("chunk-ba1b1732"),n.e("chunk-7c2cc80f")]).then(n.bind(null,"b76b"))},B=[{path:"/music",component:L},{path:"/video",component:S,children:[{path:"/video/vdetail",component:$,name:"videoDetail",children:[]},{path:"/video/list",component:z,name:"vlist",children:[]},{path:"/music/play",component:L,name:"mplay",children:[]}]},{path:"/login",component:M},{path:"/",component:S,name:"dashboard",children:[{path:"/dashboard",component:D,name:"dashboard-1"}]},{path:"/component",component:S,name:"component",children:[{path:"/component/chart",component:N,name:"chart"},{path:"/component/table",component:T,name:"testTable"}]}],F=B,I=n("8c4f"),q=n("2f62"),H={state:function(){return{count:1}},mutations:{},actions:{},getters:{}},U=H,J={login:U},Y=J,G=(n("fda2"),n("a925")),K={message:"hello",dashboard:"DashBoard",component:"Component",administrator:"administrator"},V={message:"你好",dashboard:"主页",component:"组件",administrator:"用户管理"},W={en:K,zh:V},Q=(n("d81d"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal?n("div",e._g({staticClass:"svg-external-icon svg-icon",style:e.styleExternalIcon},e.$listeners)):n("svg",e._g({class:e.svgClass,attrs:{"aria-hidden":"true"}},e.$listeners),[n("use",{attrs:{"xlink:href":e.iconName}})])}),R=[],X={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{isExternal:function(){return Object(j["b"])(this.iconClass)},iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"},styleExternalIcon:function(){return{mask:"url(".concat(this.iconClass,") no-repeat 50% 50%"),"-webkit-mask":"url(".concat(this.iconClass,") no-repeat 50% 50%")}}}},Z=X,ee=(n("10dbd"),Object(k["a"])(Z,Q,R,!1,null,"42a0b2a4",null)),te=ee.exports;o["default"].component("svg-icon",te);var ne=n("51ff"),re=function(e){return e.keys().map(e)};re(ne);var ae=n("313e"),oe=(n("cb29"),n("a15b"),n("b0c0"),n("25f0"),n("2909")),ce=+new Date(1997,9,3),ue=864e5,ie=1e3*Math.random();function se(){return ce=new Date(+ce+ue),ie=ie+21*Math.random()-10,{name:ce.toString(),value:[[ce.getFullYear(),ce.getMonth()+1,ce.getDate()].join("/"),Math.round(ie)]}}var le=function(){return se()},fe={test1:{tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]},test2:{tooltip:{},series:{type:"pie",data:[{name:"A",value:1212},{name:"B",value:2323},{name:"C",value:1919}]}},test3:{tooltip:{trigger:"axis",formatter:function(e){e=e[0];var t=new Date(e.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+e.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"模拟数据",type:"line",showSymbol:!1,hoverAnimation:!1,data:Object(oe["a"])(Array(1e3)).fill(!0).map((function(){return Object(a["a"])({},se())}))}]}},he=[{type:"input",name:"",label:"input1",propery:"input"},{type:"date",name:"",label:"date",propery:"date"},{type:"select",name:"",label:"select",propery:"select",options:[{label:"aa",value:"1"},{label:"bb",value:"2"}]},{type:"textarea",name:"",label:"textarea",propery:"textarea"},{type:"time",name:"",label:"time",propery:"time",options:[{label:"aa",value:"1"},{label:"bb",value:"2"}]}];n("ac1f"),n("466d");function de(){navigator.userAgent,navigator.appVersion;var e=!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);return{mobile:e}}o["default"].use(G["a"]);var pe=new G["a"]({locale:"zh",messages:W});o["default"].prototype.$chart=ae,o["default"].config.productionTip=!1,window.test=Object(a["a"])({},r),o["default"].use(I["a"]),o["default"].use(q["a"]),o["default"].use(A.a,{i18n:function(e,t){return pe.t(e,t)}});var be=new I["a"]({routes:F});be.beforeEach((function(e,t,n){"/"===e.path&&de().mobile?n({path:"/music"}):n()}));var me=new q["a"].Store({modules:Y});new o["default"]({router:be,store:me,i18n:pe,render:function(e){return e(E)}}).$mount("#app")},e925:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o}));n("c975"),n("a15b"),n("d3b7"),n("25f0"),n("498a");function r(e){return/^(https?:|mailto:|tel:)/.test(e)}function a(){return"ontouchstart"in document}function o(){for(var e=[],t="0123456789abcdef",n=0;n<36;n++)e[n]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var r=e.join("");return r}},f782:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),u=new a.a({id:"icon-dashboard",use:"icon-dashboard-usage",viewBox:"0 0 128 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'});c.a.add(u);t["default"]=u}});