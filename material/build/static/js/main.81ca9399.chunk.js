(this["webpackJsonpmaterial-app-pro"]=this["webpackJsonpmaterial-app-pro"]||[]).push([[0],{366:function(e,t,n){},367:function(e,t,n){},713:function(e,t){},714:function(e,t){},715:function(e,t){},716:function(e,t){},717:function(e,t){},720:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"login",(function(){return M}));var c={};n.r(c),n.d(c,"changeLocation",(function(){return F}));var o={};n.r(o),n.d(o,"changeLayout",(function(){return wt}));var r=n(3),i=n(0),s=n.n(i),l=n(18),d=n.n(l),u=(n(366),n(14)),j=(n(367),n(81)),b=n(84),h=n(345),p=n(10),O={userName:null,password:null},f={userName:"",time:""},m={login:{userName:"\u7528\u6237\u540d",password:"\u5bc6\u7801",btn:"\u63d0\u4ea4"},main:{dashboard:"\u4e3b\u9875",component:"\u57fa\u7840\u7ec4\u4ef6",administration:"\u7528\u6237\u7ba1\u7406",test:"\u6d4b\u8bd5\u7ec4\u4ef6",test1:"\u6d4b\u8bd52",out:"\u9000\u51fa",account:"\u4e2a\u4eba\u8d44\u6599",test3:"\u6d4b\u8bd53",userMananger:"\u7528\u6237\u7ba1\u7406",user:"\u7528\u6237\u5217\u8868",paymentMananger:"\u652f\u4ed8\u7ba1\u7406",paymentList:"\u652f\u4ed8\u5217\u8868"}},x={login:{userName:"userName",password:"passoword",btn:"Submit"},main:{dashboard:"dashboard",component:"Components",administration:"administration",test:"testComponent",out:"Logout",test1:"test2",account:"account",test3:"test3",userMananger:"Administration",user:"user",paymentMananger:"payment",paymentList:"list"}},g="".concat("LOCATE","_CHANGE"),v=Object(p.a)({locale:"en"},{ch:m,en:x}),w="".concat("CONFIG","_PC_LAYOUT"),y={pc:{menuLayout:"aside",menuLayoutList:["aisde","header"]}},S=Object(h.a)(),C=(("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):b.d)(Object(b.a)(S)),Object(b.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,Object(p.a)({},e)},main:function(){var e=arguments.length>1?arguments[1]:void 0;return e.type,Object(p.a)({},f)},locate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return e.locale=t.params.locale,Object(p.a)({},e);default:return Object(p.a)({},e)}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e.pc.menuLayout=t.params,Object(p.a)({},e);default:return Object(p.a)({},e)}}})),k=Object(b.e)(C),L=n(111),D=n(30),E="LOGIN",I="".concat(E,"_LOGIN");"".concat(E,"_RESULT_LOGIN");function M(){return{type:I}}var N=n(797),R=n(771),T=n(800),_=n(770),P=n(726),A={loginStyle:Object(P.a)((function(){return{box:{position:"absolute",width:500,height:500,top:"6%",right:"3%",borderRadius:5,boxShadow:"5px 5px 10px #1f1f1f",background:"white"},Container:{height:window.innerHeight},boxOne:{background:"url(https://wallpaperm.cmcm.com/d387296146b59d12d6545e64d062d2e6.jpg )",height:window.innerHeight},mobile_box:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},mobile_content:{height:300,width:400,boxShadow:"1px 5px 10px #1f1f1f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"white",position:"relative",bottom:25,borderRadius:5},index:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},content:{height:300,width:400,boxShadow:"1px 5px 10px #1f1f1f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}))},H=n(41),B=n(136),F=function(e){return{type:g,params:e}},G=n(331),U=n(83),z=n(769);var V=function(e){var t=e.onClick,n=Object(U.a)(e,["onClick"]);return s.a.useEffect((function(){document.addEventListener("keydown",(function(n){13===n.keyCode&&"submit"===e.type&&t()}))})),Object(r.jsx)(z.a,Object(p.a)({style:{textTransform:"none"},onClick:function(){t&&t()}},n))},W=n(172),X=W.a().shape({user:W.b().required(),password:W.b().required()});var Y=Object(j.b)((function(e){return Object(p.a)({},e)}),Object(p.a)(Object(p.a)({},a),c))(Object(D.g)((function(e){var t=Object(_.a)(Object(H.a)().breakpoints.up("sm")),n=A.loginStyle(),a=Object(B.useForm)({defaultValues:{user:"user",password:"password"},resolver:Object(G.yupResolver)(X),mode:"onBlur"}),c=a.register,o=a.getValues,i=a.errors;return a.trigger,Object(r.jsx)(N.a,{className:n.boxOne,children:Object(r.jsx)(R.a,{className:n.Container,children:t?Object(r.jsx)(N.a,{className:n.box,children:Object(r.jsxs)("div",{className:n.index,children:[Object(r.jsx)("div",{style:{height:50,width:400,textAlign:"center",fontSize:30},children:"Test System"}),Object(r.jsx)("div",{style:{height:30,width:400}}),Object(r.jsxs)("div",{className:n.content,children:[Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.userName,inputRef:c,name:"user",helperText:i.user?i.user.message:null,error:i.user,style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.password,inputRef:c,error:i.password,name:"password",helperText:i.password?i.password.message:null,type:"password",style:{width:"90%"},variant:"outlined"})})]}),Object(r.jsx)("div",{style:{height:30,width:400}}),Object(r.jsx)("div",{style:{height:50,width:400,textAlign:"center"},children:Object(r.jsx)(V,{type:"submit",color:"primary",variant:"contained",onClick:function(){var t=o();"user"===t.user&&"password"===t.password&&e.history.push("/main")},children:e.locate[e.locate.locale].login.btn})})]})}):Object(r.jsx)(N.a,{className:n.mobile_box,children:Object(r.jsxs)("div",{className:n.mobile_content,children:[Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.userName,inputRef:c,name:"user",helperText:i.user?i.user.message:null,error:i.user,style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.password,inputRef:c,helperText:i.password?i.password.message:null,error:i.password,name:"password",type:"password",style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(V,{color:"primary",variant:"contained",onClick:function(){var t=o();"user"===t.user&&"password"===t.password&&e.history.push("/main/dashboard")},children:e.locate[e.locate.locale].login.btn})})]})})})})}))),q=n(782),J=n(332);var $=function(e){var t=s.a.useState(Math.random()),n=Object(u.a)(t,1)[0],a=s.a.useState(null),c=Object(u.a)(a,2),o=c[0],i=c[1];return s.a.useEffect((function(){var t=J.init(document.getElementById(n));i(t),e.options&&t.setOption(e.options),t.on("click",(function(t){e.click&&e.click(t)}))}),[]),s.a.useEffect((function(){o&&(console.log(e.options),o.clear(),o.setOption(e.options))}),[e.options]),Object(r.jsx)("div",{id:n,style:{height:300,width:300}})},K=n(775),Q=n(347),Z=n(774),ee=n(724),te=n(776);var ne=function(e){var t=e.options,n=s.a.createRef(),a=s.a.useState(!1),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(r.jsxs)("div",{ref:n,onMouseEnter:function(){e.hover&&e.open&&i(n.current)},onMouseLeave:function(){i(null)},children:[Object(r.jsx)("div",{children:e.children}),Object(r.jsx)(K.a,{placement:e.placement,style:{zIndex:9999999},onClose:function(){i(!1)},anchorEl:o,open:o instanceof Object,children:Object(r.jsx)(Q.a,{style:{position:"relative",bottom:1,width:200},children:t?Object(r.jsx)(Z.a,{component:"nav",children:!Array.isArray(t)||t.map((function(t,n){return Object(r.jsx)("div",{children:Object(r.jsx)(ee.a,{onClick:function(){return function(t){e.selectItem&&e.selectItem(t)}(t)},button:!0,children:Object(r.jsx)(te.a,{primary:t instanceof Object?t.label:t})})},"".concat(n))}))}):Object(r.jsx)("div",{children:e.child})})})]})},ae=n(24),ce=(n(672),n(777)),oe=n(778),re=n(779),ie=n(780),se=n(334),le=n.n(se);function de(e){var t=e.drag,n=e.id,a=Object(U.a)(e,["drag","id"]);return console.log(n),t?Object(r.jsx)(le.a,{handle:"#".concat(n),onStart:function(e){console.log(document.getElementById(e))},cancel:'[class*="MuiDialogContent-root"]',children:Object(r.jsx)(Q.a,Object(p.a)({},a))}):Object(r.jsx)(Q.a,Object(p.a)({},a))}var ue=function(e){var t="move",n=e.title,a=e.actions,c=e.drag,o=e.open,i=e.onClose,l=s.a.useState(!1),d=Object(u.a)(l,2),j=d[0],b=d[1];s.a.useEffect((function(){b(o)}),[o]);var h=function(){b(!1),i&&i(!1)};return Object(r.jsx)("div",{children:Object(r.jsxs)(ce.a,{PaperComponent:function(e){return Object(r.jsx)(de,Object(p.a)({id:t,drag:c},e))},open:j,fullScreen:e.fullScreen,onClose:function(){h()},children:[n?Object(r.jsx)(oe.a,{style:{cursor:c?"move":null},id:t,children:n}):null,e.children?Object(r.jsx)(re.a,{children:e.children}):null,a?Object(r.jsx)(ie.a,{children:a}):null]})})},je=n(335),be=n.n(je),he=n(781),pe=n(693);"undefined"!==typeof window&&"Worker"in window&&(pe.GlobalWorkerOptions.workerSrc="//cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/build/pdf.worker.min.js");var Oe=function(e){var t=e.page,n=e.renderer,a=e.close,c=e.open,o=s.a.useRef(null);return s.a.useEffect((function(){null!=n&&0!==t&&c&&function(e,t){t.getPage(e).then((function(e){var t=e.getViewport({scale:1});o.current.width=t.width,o.current.height=t.height;var n=o.current.getContext("2d");return e.render({canvasContext:n,viewport:t}).promise}))}(t,n)}),[t]),Object(r.jsxs)("div",{style:{background:"rgba(0,0,0,0.5)",textAlign:"center",paddingTop:15},children:[Object(r.jsx)(he.a,{onClick:function(){a()},color:"primary",style:{position:"absolute",top:50,right:100},children:Object(r.jsx)(be.a,{})}),Object(r.jsx)("div",{style:{color:"white",fontSize:"18px"},children:t}),Object(r.jsx)("canvas",{ref:o})]})};var fe=function(e){s.a.useEffect((function(){e.url&&b()}),[e.url]);var t=s.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState([]),i=Object(u.a)(o,2),l=i[0],d=i[1],j=s.a.useRef(null),b=function(){if(e.url){e.url;var t=new XMLHttpRequest;t.open("GET",e.url,!0),t.responseType="blob",t.onreadystatechange=function(){var e;4==t.readyState&&200==t.status&&(e=t.response,pe.getDocument(window.URL.createObjectURL(e)).promise.then((function(e){j.current=e,d(Object(ae.a)(Array(e._pdfInfo.numPages)).fill(!0))})),c(!0))},t.send()}};return Object(r.jsx)(ue,{open:a,fullScreen:!0,children:0!==l.length?l.map((function(e,t){return Object(r.jsx)(Oe,{open:a,page:t+1,close:function(){c(!1)},renderer:j.current},"".concat(t))})):null})};var me=function(){var e=s.a.useState(window.MockData.chart.test1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)(q.a,{container:!0,children:[Object(r.jsx)(q.a,{item:!0,xs:!0,children:Object(r.jsx)($,{options:n})}),Object(r.jsx)(q.a,{item:!0,xs:!0,children:Object(r.jsx)($,{options:window.MockData.chart.test2})})]}),Object(r.jsx)(z.a,{onClick:function(){window.MockData.chart.test1.series[0].data[2]=100;var e=Object.assign({},window.MockData.chart.test1);a(e)},children:"change"}),Object(r.jsx)(ne,{options:["\u4e2a\u4eba\u8d44\u6599","\u9000\u51fa"],children:Object(r.jsx)(z.a,{children:"111"})})]})},xe=n(31),ge=n(783),ve=n.p+"static/media/background.e6145588.jpg",we=240,ye={mainStyle:Object(ge.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:we,width:"calc(100% - ".concat(we,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:we,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:we,background:"url( ".concat(ve," )"),color:"white",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(xe.a)({background:"url( ".concat(ve," )"),transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),overflow:"auto"},icon:{color:"white"},outlined:{"&:before":{borderColor:"white!important",borderWidth:"0px!important"},"&:after":{borderColor:"white!important",borderWidth:0}}}}))},Se=n(786),Ce=n(119),ke=n(798),Le=n(789),De=n(787),Ee=n(788),Ie=n(341),Me=n.n(Ie),Ne=n(342),Re=n.n(Ne),Te=n(343),_e=n.n(Te);function Pe(e){return e.left?Object(r.jsx)(q.a,{item:!0,children:e.left}):e.right?Object(r.jsx)(q.a,{item:!0,children:e.right}):null}var Ae=function(e){return Object(r.jsxs)(q.a,{container:!0,direction:"row",justify:e.left&&e.right?"space-between":e.right?"flex-end":"flex-start",children:[Object(r.jsx)(Pe,Object(p.a)({},e)),e.children?e.children:null]})},He=n(772),Be=n(339),Fe=n.n(Be),Ge=n(340),Ue=n.n(Ge),ze=n(785),Ve=n(803),We=n(336),Xe=n.n(We),Ye=n(218),qe=n.n(Ye),Je=n(337),$e=n.n(Je),Ke=n(784),Qe=n(338),Ze=n.n(Qe);var et={dashboard:Object(r.jsx)($e.a,{style:{color:"FFF"}}),Components:Object(r.jsx)(Ze.a,{style:{color:"FFF"}})},tt=function(e){var t=s.a.useState(e.menuList),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(null),i=Object(u.a)(o,2),l=i[0],d=i[1],j=function e(t,n){return t.children&&0!=t.children.length?(t.accordion=n,t.children.map((function(t){return e(t,n)}))):t},b=function(t){return 3===t.id.length&&!e.open||!!e.open},h=function e(t,n){n instanceof Array?n.forEach((function(n){return e(t,n)})):n.children&&0!=n.children.length?(t.includes(n.id)?n.accordion=!0:n.accordion=!1,n.children.forEach((function(n){return e(t,n)}))):n.id===t&&d(n.name)};return s.a.useEffect((function(){e.id&&h(e.id,a)}),[e.id]),Object(r.jsx)(Z.a,{spacing:4,style:{display:e.layout?null:"flex"},children:function t(n){var o;return n instanceof Array?n.map((function(e){return t(e)})):n.children&&0!=n.children.length?Object(r.jsxs)("div",{children:[Object(r.jsx)(ne,{open:!e.open,placement:(o=e.placement,o?"bottom":"right-start"),hover:!0,child:Object(r.jsx)(s.a.Fragment,{children:n.children.map((function(e){return t(e)}))}),children:Object(r.jsxs)(ee.a,{button:!0,selected:n.id===l,onClick:function(t){n.accordion=!n.accordion,n.active=!n.active,n.accordion&&(n=j(n,!0)),d(n.id),c(Array.from(a)),e.getPath&&e.getPath(n),t.preventDefault()},children:[b(n)?Object(r.jsx)(Ke.a,{children:et[n.preIcon]}):null,Object(r.jsx)(te.a,{style:{whiteSpace:"nowrap"},primary:e.local[e.local.locale].main[n.name]}),e.open&&n.accordion?Object(r.jsx)(Xe.a,{}):Object(r.jsx)(qe.a,{})]})}),n.accordion&&e.open?Object(r.jsx)(Z.a,{spacing:4,children:n.children.map((function(e){return t(e)}))}):null]},"".concat(n.id)):([].push(n),Object(r.jsxs)(ee.a,{button:!0,selected:n.id===l,onClick:function(t){n.active=!n.active,d(n.id),e.getPath&&e.getPath(n),t.preventDefault()},children:[b(n)?Object(r.jsx)(Ke.a,{children:et[n.preIcon]}):null,Object(r.jsx)(te.a,{style:{whiteSpace:"nowrap"},primary:e.local[e.local.locale].main[n.name]})]},"".concat(n.id)))}(a)})};var nt=function(e){var t,n,a=ye.mainStyle();return"aside"===e.layout?Object(r.jsxs)(Ve.a,{variant:"permanent",className:Object(Ce.a)(a.drawer,(t={},Object(xe.a)(t,a.drawerOpen,e.open),Object(xe.a)(t,a.drawerClose,!e.open),t)),classes:{paper:Object(Ce.a)((n={},Object(xe.a)(n,a.drawerOpen,e.open),Object(xe.a)(n,a.drawerClose,!e.open),n))},children:[Object(r.jsx)("div",{className:a.toolbar,children:Object(r.jsx)(he.a,{onClick:function(){return e.handleDrawerClose()},children:e.open?Object(r.jsx)(Fe.a,{style:{color:"white"}}):Object(r.jsx)(Ue.a,{style:{color:"white"}})})}),Object(r.jsx)(ze.a,{style:{background:"white"}}),Object(r.jsx)(tt,{menuList:window.MockData.MenuList,id:e.id,layout:"aside",open:e.open,local:e.locate,getPath:function(t){t.path&&e.history.push(t.path)}})]}):"header"===e.layout?Object(r.jsx)(tt,{menuList:window.MockData.MenuList,id:e.id,open:!1,placement:"header",local:e.locate,getPath:function(t){t.path&&e.history.push(t.path)}}):null};var at=Object(j.b)((function(e){return Object(p.a)({},e)}),Object(p.a)({},c))(Object(D.g)((function(e){console.log(e,e.config.pc.menuLayout);var t=ye.mainStyle(),n=s.a.useState(!0),a=Object(u.a)(n,2),c=a[0],o=a[1],i=s.a.useState(null),l=Object(u.a)(i,2),d=l[0],j=(l[1],[{label:e.locate[e.locate.locale].main.account,value:0},{label:e.locate[e.locate.locale].main.out,value:1}]);return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(Se.a,{}),Object(r.jsx)(De.a,{position:"fixed",className:"aside"===e.config.pc.menuLayout?Object(Ce.a)(t.appBar,Object(xe.a)({},t.appBarShift,c)):null,children:Object(r.jsxs)(Ee.a,{children:[Object(r.jsx)(he.a,{color:"inherit",onClick:function(){o(!0)},style:{marginLeft:67},edge:"start",className:Object(Ce.a)(t.menuButton,Object(xe.a)({},t.hide,c)),children:Object(r.jsx)(Me.a,{})}),Object(r.jsxs)(Ae,{right:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(He.a,{disableUnderline:!0,startAdornment:Object(r.jsx)(Re.a,{}),style:{background:"white",borderRadius:15,marginRight:15,textIndent:15,position:"relative",top:8}})}),children:["aside"!==e.config.pc.menuLayout?Object(r.jsx)(nt,Object(p.a)(Object(p.a)({},e),{},{id:d,layout:e.config.pc.menuLayout,open:c})):null,Object(r.jsxs)(ke.a,{style:{color:"white"},className:t.outlined,variant:"standard",defaultValue:"en",classes:{icon:t.icon},onChange:function(t){e.changeLocation({locale:t.target.value})},children:[Object(r.jsx)(Le.a,{value:"ch",children:"\u4e2d\u6587"}),Object(r.jsx)(Le.a,{value:"en",children:"English"})]}),Object(r.jsx)(he.a,{color:"inherit",children:Object(r.jsx)(ne,{hover:!0,options:j,open:!0,selectItem:function(t){1===t.value&&e.history.push("/user/login")},children:Object(r.jsx)(_e.a,{fontSize:"large"})})})]})]})}),"aside"===e.config.pc.menuLayout?Object(r.jsx)(nt,Object(p.a)(Object(p.a)({},e),{},{id:d,open:c,layout:e.config.pc.menuLayout,handleDrawerClose:function(){o(!c)}})):null,Object(r.jsxs)("main",{className:t.content,children:[Object(r.jsx)("div",{className:t.toolbar}),Object(r.jsx)(D.d,{children:St.pc.main.map((function(e,t){return Object(r.jsx)(D.b,{exact:!0,path:e.path,component:e.component},"".concat(t))}))})]})]})}))),ct=n(790),ot=n(794),rt=n(793),it=n(791),st=n(792),lt=n(801),dt=n(171),ut=n(344),jt=n.n(ut);var bt=s.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(U.a)(e,["indeterminate"]),c=s.a.useRef(),o=t||c;return s.a.useEffect((function(){o.current.indeterminate=n}),[o,n]),Object(r.jsx)(lt.a,Object(p.a)({color:"primary",ref:o},a))})),ht=function(e){var t=e.checked,n=e.onChange;return Object(r.jsx)(rt.a,{component:"div",children:Object(r.jsx)(lt.a,{color:"primary",checked:t,onChange:function(e){return n(e)}})})},pt=function(e){var t=e.columns,n=e.data,a=e.rowDrap,c=e.selectRow,o=e.selectType,i=s.a.useMemo((function(){return t?Object(ae.a)(t):[]}),[]),l=s.a.useState(n),d=Object(u.a)(l,2),j=d[0],b=d[1],h=s.a.useState(null),O=Object(u.a)(h,2),f=O[0],m=O[1],x=s.a.useState(null),g=Object(u.a)(x,2),v=g[0],w=g[1],y=s.a.useState({top:0,width:0,height:0}),S=Object(u.a)(y,2),C=S[0],k=S[1],L=s.a.useMemo((function(){return j}),[j]),D=Object(dt.useTable)({columns:i,data:L},dt.useSortBy,dt.useRowSelect,(function(e){"checkbox"===o&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(r.jsx)("div",{children:Object(r.jsx)(bt,Object(p.a)({},t()))})},Cell:function(e){var t=e.row;return Object(r.jsx)(bt,Object(p.a)({},t.getToggleRowSelectedProps()))},component:"div"}].concat(Object(ae.a)(e))}))})),E=D.getTableProps,I=D.headerGroups,M=D.rows,N=D.prepareRow,R=D.state.selectedRowIds;return s.a.useEffect((function(){b(n)}),[n]),s.a.useEffect((function(){window.addEventListener("mousemove",(function(e){console.log("aa"),console.log(e.clientY),k({width:C.width,height:C.height,top:e.clientY})}))}),[]),s.a.useEffect((function(){"radio"===o&&c&&c({radio:v})}),[R,v]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:Object(p.a)(Object(p.a)({position:"absoulte","pointer-events":"none"},C),{},{background:"red"})}),Object(r.jsxs)(ct.a,Object(p.a)(Object(p.a)({component:"div"},E()),{},{children:[Object(r.jsx)(it.a,{component:"div",children:I.map((function(e){return Object(r.jsxs)(st.a,Object(p.a)(Object(p.a)({component:"div"},e.getHeaderGroupProps()),{},{children:["radio"===o?Object(r.jsx)(rt.a,{component:"div"}):null,e.headers.map((function(e){return Object(r.jsxs)(rt.a,Object(p.a)(Object(p.a)({component:"div"},e.getHeaderProps()),{},{children:[e.render("Header"),e.isSort?Object(r.jsx)("div",Object(p.a)(Object(p.a)({},e.getSortByToggleProps()),{},{children:"\u5f85\u5904\u7406"})):null]}))}))]}))}))}),Object(r.jsx)(ot.a,{component:"div",children:M.map((function(e,t){return N(e)||Object(r.jsxs)(st.a,Object(p.a)(Object(p.a)({component:"div"},e.getRowProps()),{},{onDragStart:function(n){k({width:n.target.clientWidth*e.cells.length,height:n.target.clientHeight,top:n.clientY}),a||n.preventDefault(),m(t)},children:["radio"===o?Object(r.jsx)(ht,{checked:v===t,onChange:function(e){e.currentTarget.checked?w(t):w(null)}}):null,e.cells.map((function(e){return Object(r.jsx)(rt.a,Object(p.a)(Object(p.a)({component:"div",onDragOver:function(e){e.preventDefault()},onDrop:function(){t!==f&&function(e,t){var n=j[e];b(jt()(j,{$splice:[[e,1],[t,0,n]]}))}(f,t)}},e.getCellProps()),{},{children:e.render("Cell")}))}))]}))}))})]}))]})};var Ot=n(796),ft=n(795);var mt=function(e){return"circle"===e.type?Object(r.jsx)(ft.a,{}):Object(r.jsx)("div",{children:Object(r.jsx)(Ot.a,{})})};var xt=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(Ve.a,{open:e.open,onClose:function(){e.onClose&&e.onClose(!1)},children:e.children})})},gt=n(799);var vt=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(gt.a,{count:10,onChange:function(e,t){!function(e){console.log(e)}(t)}})})};function wt(e){return{type:w,params:e}}var yt=Object(j.b)((function(e){return Object(p.a)({},e)}),Object(p.a)(Object(p.a)({},c),o))(Object(D.g)((function(e){console.log(window.MockData);var t=s.a.useState(null),n=Object(u.a)(t,2);n[0],n[1],console.log("production");var a=s.a.useState(100),c=Object(u.a)(a,2),o=(c[0],c[1],s.a.useState(!1)),i=Object(u.a)(o,2),l=i[0],d=(i[1],s.a.useState(!1)),j=Object(u.a)(d,2),b=j[0],h=j[1],p=s.a.useState(!1),O=Object(u.a)(p,2),f=O[0],m=O[1],x=s.a.useState(null),g=Object(u.a)(x,2),v=g[0],w=g[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(z.a,{onClick:function(){e.changeLayout("header"===e.config.pc.menuLayout?"aside":"header")},children:"test"}),Object(r.jsx)(z.a,{onClick:function(){w(v?"":"http://116.62.42.204/music/Lecture1.pdf")},children:"pdf"}),Object(r.jsx)(fe,{url:v}),Object(r.jsx)(vt,{}),Object(r.jsx)(mt,{type:"circle"}),Object(r.jsx)(xt,{open:f,onClose:function(){m(!1)}}),Object(r.jsx)(ue,{title:"aaaa",open:l,onClose:function(t){e.changeLayout("header")},children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z.a,{onClick:function(){h(!0)},children:"two"}),Object(r.jsx)(ue,{title:"two",open:b,onClose:function(e){h(e)},children:Object(r.jsx)("div",{children:"two"})})]})})]})})));var St={pc:{top:[{path:"/user/login",component:Y},{path:"/main",component:at}],main:[{path:"/main/dashboard",component:me},{path:"/main/table",component:pt},{path:"/main/test",component:yt},{path:"/main/user/list",component:function(){return Object(r.jsx)(N.a,{children:Object(r.jsxs)(q.a,{children:[Object(r.jsx)(q.a,{}),Object(r.jsx)(q.a,{children:Object(r.jsx)(pt,{rowDrap:!0,columns:window.MockData.table.columns,data:window.MockData.table.data(10)})})]})})}}]},moblie:{top:[{path:"/login",component:Y}],main:[]}};var Ct=function(){var e=Object(i.createContext)(),t=s.a.useState({en:"aaa"}),n=Object(u.a)(t,2),a=n[0];return n[1],s.a.useEffect((function(){document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}),[]),Object(r.jsx)(j.a,{store:k,children:Object(r.jsxs)(e.Provider,{value:a,children:[Object(r.jsx)(xt,{open:!1}),Object(r.jsxs)(L.a,{basename:"/reactWeb/",children:[Object(r.jsx)(D.b,{exact:!0,path:"/",children:Object(r.jsx)(D.a,{to:"/main/dashboard"})}),St.pc.top.map((function(e,t){return Object(r.jsx)(D.b,{path:e.path,component:e.component},"".concat(t))}))]})]})})},kt={columns:[{Header:"TestData",accessor:"test1",isSort:!0},{Header:"TestData1",accessor:"test2"},{Header:"TestData2",accessor:"test3"},{Header:"TestData3",accessor:"test4"},{Header:"TestData4",accessor:"test5"}],data:function(e){return Object(ae.a)(new Array(e||100)).fill(!0).map((function(e,t){return{test:"a"+t,test1:t,test2:"c"+t,test3:"0"+t,test4:"0"+t}}))}};window.MockData={MenuList:[{name:"dashboard",id:"M01",preIcon:"dashboard",path:"/main/dashboard",suffexIcon:"",active:!1,accordion:!1,children:[]},{id:"M07",preIcon:"dashboard",name:"paymentMananger",path:"",accordion:!1,active:!1,children:[{id:"M071",name:"paymentList",path:"",accordion:!1,active:!1}]},{id:"M08",preIcon:"dashboard",path:"",name:"userMananger",accordion:!1,active:!1,children:[{id:"M081",name:"user",path:"/main/user/list",accordion:!1,active:!1}]},{name:"component",preIcon:"Components",path:"",id:"M02",suffexIcon:"",active:!1,accordion:!1,children:[{name:"test",preIcon:"",path:"/main/test",id:"M021",suffexIcon:"",active:!1,accordion:!0},{name:"test1",preIcon:"",path:"/main/test1",id:"M022",suffexIcon:"",active:!1,accordion:!0,children:[{name:"test3",preIcon:"",path:"/main/test",id:"M0221",suffexIcon:"",active:!1,accordion:!1}]}]}],table:kt,chart:{test1:{title:{text:"chart"},tooltip:{},xAxis:{data:["apple","banana","aa"]},yAxis:{},series:[{name:"\u9500\u91cf",type:"bar",data:[100,200,300]}]},test2:{tooltip:{},series:{type:"pie",data:[{name:"A",value:100},{name:"b",value:200},{name:"c",value:300}]}}},searchData:[{type:"text",name:"name1",label:"aa",variant:"outlined"},{type:"integer",name:"name2",label:"aaa",variant:"outlined"},{type:"select",name:"name2",label:"aaaa",options:[{label:"aa",value:"1"}]},{type:"textera",name:"name3",label:"aaaaa",variant:"outlined"}]},d.a.render(Object(r.jsx)(Ct,{}),document.getElementById("root"))}},[[720,1,2]]]);
//# sourceMappingURL=main.81ca9399.chunk.js.map