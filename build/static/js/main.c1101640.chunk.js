(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{346:function(e,t){},402:function(e,t,n){},403:function(e,t,n){},733:function(e,t){},734:function(e,t){},751:function(e,t){},752:function(e,t){},753:function(e,t){},754:function(e,t){},755:function(e,t){},756:function(e,t){},779:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"login",(function(){return E}));var c={};n.r(c),n.d(c,"changeLocation",(function(){return H}));var o={};n.r(o),n.d(o,"changeLayout",(function(){return yt}));var r=n(3),i=n(0),s=n.n(i),l=n(23),d=n.n(l),u=(n(402),n(13)),j=n(18),b=(n(403),n(90)),h=n(92),p=n(381),O={userName:null,password:null},f={userName:"",time:""},m={login:{userName:"\u7528\u6237\u540d",password:"\u5bc6\u7801",btn:"\u63d0\u4ea4"},main:{dashboard:"\u4e3b\u9875",component:"\u57fa\u7840\u7ec4\u4ef6",administration:"\u7528\u6237\u7ba1\u7406",test:"\u6d4b\u8bd5\u7ec4\u4ef6",test1:"\u6d4b\u8bd52",out:"\u9000\u51fa",account:"\u4e2a\u4eba\u8d44\u6599",test3:"\u6d4b\u8bd53",userMananger:"\u7528\u6237\u7ba1\u7406",user:"\u7528\u6237\u5217\u8868",paymentMananger:"\u652f\u4ed8\u7ba1\u7406",paymentList:"\u652f\u4ed8\u5217\u8868"}},x={login:{userName:"userName",password:"passoword",btn:"Submit"},main:{dashboard:"dashboard",component:"Components",administration:"administration",test:"testComponent",out:"Logout",test1:"test2",account:"account",test3:"test3",userMananger:"Administration",user:"user",paymentMananger:"payment",paymentList:"list"}},g="".concat("LOCATE","_CHANGE"),v=Object(u.a)({locale:"en"},{ch:m,en:x}),w="".concat("CONFIG","_PC_LAYOUT"),y={pc:{menuLayout:"aside",menuLayoutList:["aisde","header"]}},S=Object(p.a)(),C=(("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):h.d)(Object(h.a)(S)),Object(h.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,Object(u.a)({},e)},main:function(){var e=arguments.length>1?arguments[1]:void 0;return e.type,Object(u.a)({},f)},locate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return e.locale=t.params.locale,Object(u.a)({},e);default:return Object(u.a)({},e)}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e.pc.menuLayout=t.params,Object(u.a)({},e);default:return Object(u.a)({},e)}}})),k=Object(h.e)(C),L=n(121),D=n(36),I="LOGIN",M="".concat(I,"_LOGIN");"".concat(I,"_RESULT_LOGIN");function E(){return{type:M}}var N=n(859),_=n(832),T=n(862),R=n(831),A=n(785),P={loginStyle:Object(A.a)((function(){return{box:{position:"absolute",width:500,height:500,top:"6%",right:"3%",borderRadius:5,boxShadow:"5px 5px 10px #1f1f1f",background:"white"},Container:{height:window.innerHeight},boxOne:{background:"url(https://wallpaperm.cmcm.com/d387296146b59d12d6545e64d062d2e6.jpg )",height:window.innerHeight},mobile_box:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},mobile_content:{height:300,width:400,boxShadow:"1px 5px 10px #1f1f1f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"white",position:"relative",bottom:25,borderRadius:5},index:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},content:{height:300,width:400,boxShadow:"1px 5px 10px #1f1f1f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}))},B=n(47),F=n(148),H=function(e){return{type:g,params:e}},G=n(360),U=n(91),z=n(830);var V=function(e){var t=e.onClick,n=Object(U.a)(e,["onClick"]);return s.a.useEffect((function(){document.addEventListener("keydown",(function(n){13===n.keyCode&&"submit"===e.type&&t()}))})),Object(r.jsx)(z.a,Object(u.a)({style:{textTransform:"none"},onClick:function(){t&&t()}},n))},W=n(192),X=W.a().shape({user:W.b().required(),password:W.b().required()});var q=Object(b.b)((function(e){return Object(u.a)({},e)}),Object(u.a)(Object(u.a)({},a),c))(Object(D.g)((function(e){var t=Object(R.a)(Object(B.a)().breakpoints.up("sm")),n=P.loginStyle(),a=Object(F.useForm)({defaultValues:{user:"user",password:"password"},resolver:Object(G.yupResolver)(X),mode:"onBlur"}),c=a.register,o=a.getValues,i=a.errors;return a.trigger,Object(r.jsx)(N.a,{className:n.boxOne,children:Object(r.jsx)(_.a,{className:n.Container,children:t?Object(r.jsx)(N.a,{className:n.box,children:Object(r.jsxs)("div",{className:n.index,children:[Object(r.jsx)("div",{style:{height:50,width:400,textAlign:"center",fontSize:30},children:"Test System"}),Object(r.jsx)("div",{style:{height:30,width:400}}),Object(r.jsxs)("div",{className:n.content,children:[Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.userName,inputRef:c,name:"user",helperText:i.user?i.user.message:null,error:i.user,style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.password,inputRef:c,error:i.password,name:"password",helperText:i.password?i.password.message:null,type:"password",style:{width:"90%"},variant:"outlined"})})]}),Object(r.jsx)("div",{style:{height:30,width:400}}),Object(r.jsx)("div",{style:{height:50,width:400,textAlign:"center"},children:Object(r.jsx)(V,{type:"submit",color:"primary",variant:"contained",onClick:function(){var t=o();"user"===t.user&&"password"===t.password&&e.history.push("/main")},children:e.locate[e.locate.locale].login.btn})})]})}):Object(r.jsx)(N.a,{className:n.mobile_box,children:Object(r.jsxs)("div",{className:n.mobile_content,children:[Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.userName,inputRef:c,name:"user",helperText:i.user?i.user.message:null,error:i.user,style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{label:e.locate[e.locate.locale].login.password,inputRef:c,helperText:i.password?i.password.message:null,error:i.password,name:"password",type:"password",style:{width:"90%"},variant:"outlined"})}),Object(r.jsx)("div",{style:{height:30}}),Object(r.jsx)("div",{children:Object(r.jsx)(V,{color:"primary",variant:"contained",onClick:function(){var t=o();"user"===t.user&&"password"===t.password&&e.history.push("/main/dashboard")},children:e.locate[e.locate.locale].login.btn})})]})})})})}))),J=n(843),Y=n(361);var $=function(e){var t=s.a.useState(Math.random()),n=Object(j.a)(t,1)[0],a=s.a.useState(null),c=Object(j.a)(a,2),o=c[0],i=c[1];return s.a.useEffect((function(){var t=Y.init(document.getElementById(n));i(t),e.options&&t.setOption(e.options),t.on("click",(function(t){e.click&&e.click(t)}))}),[]),s.a.useEffect((function(){o&&(console.log(e.options),o.clear(),o.setOption(e.options))}),[e.options]),Object(r.jsx)("div",{id:n,style:{height:300,width:300}})},K=n(836),Q=n(384),Z=n(835),ee=n(783),te=n(837);var ne=function(e){var t=e.options,n=s.a.createRef(),a=s.a.useState(!1),c=Object(j.a)(a,2),o=c[0],i=c[1];return Object(r.jsxs)("div",{ref:n,onMouseEnter:function(){e.hover&&e.open&&i(n.current)},onMouseLeave:function(){i(null)},children:[Object(r.jsx)("div",{children:e.children}),Object(r.jsx)(K.a,{placement:e.placement,style:{zIndex:9999999},onClose:function(){i(!1)},anchorEl:o,open:o instanceof Object,children:Object(r.jsx)(Q.a,{style:{position:"relative",bottom:1,width:200},children:t?Object(r.jsx)(Z.a,{component:"nav",children:!Array.isArray(t)||t.map((function(t,n){return Object(r.jsx)("div",{children:Object(r.jsx)(ee.a,{onClick:function(){return function(t){e.selectItem&&e.selectItem(t)}(t)},button:!0,children:Object(r.jsx)(te.a,{primary:t instanceof Object?t.label:t})})},"".concat(n))}))}):Object(r.jsx)("div",{children:e.child})})})]})},ae=n(29),ce=(n(708),n(838)),oe=n(839),re=n(840),ie=n(841),se=n(363),le=n.n(se),de=n(109);function ue(e){var t=e.drag,n=e.id,a=Object(U.a)(e,["drag","id"]);return console.log(n),t?Object(r.jsx)(le.a,{handle:"#".concat(n),onStart:function(e){console.log(document.getElementById(e))},cancel:'[class*="MuiDialogContent-root"]',children:Object(r.jsx)(Q.a,Object(u.a)({},a))}):Object(r.jsx)(Q.a,Object(u.a)({},a))}var je=function(e){var t="move",n=e.title,a=e.actions,c=e.drag,o=e.open,i=e.onClose,l=s.a.useState(!1),d=Object(j.a)(l,2),b=d[0],h=d[1];s.a.useEffect((function(){h(o)}),[o]);var p=function(){h(!1),i&&i(!1)};return Object(r.jsx)("div",{children:Object(r.jsxs)(ce.a,{PaperComponent:function(e){return Object(r.jsx)(ue,Object(u.a)({id:t,drag:c},e))},open:b,fullScreen:e.fullScreen,onClose:function(){p()},children:[n?Object(r.jsx)(oe.a,{style:{cursor:c?"move":null},id:t,children:n}):null,e.children?Object(r.jsx)(re.a,{children:e.children}):null,a?Object(r.jsx)(ie.a,{children:a}):null]})})},be=n(364),he=n.n(be),pe=n(842),Oe=n(735);"undefined"!==typeof window&&"Worker"in window&&(Oe.GlobalWorkerOptions.workerSrc="//cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/build/pdf.worker.min.js");var fe=function(e){var t=e.page,n=e.renderer,a=e.close,c=e.open,o=s.a.useRef(null);return s.a.useEffect((function(){null!=n&&0!==t&&c&&function(e,t){t.getPage(e).then((function(e){var t=e.getViewport({scale:1});o.current.width=t.width,o.current.height=t.height;var n=o.current.getContext("2d");return e.render({canvasContext:n,viewport:t}).promise}))}(t,n)}),[t]),Object(r.jsxs)("div",{style:{background:"rgba(0,0,0,0.5)",textAlign:"center",paddingTop:15},children:[Object(r.jsx)(pe.a,{onClick:function(){a()},color:"primary",style:{position:"absolute",top:50,right:100},children:Object(r.jsx)(he.a,{})}),Object(r.jsx)("div",{style:{color:"white",fontSize:"18px"},children:t}),Object(r.jsx)("canvas",{ref:o})]})};var me=function(e){s.a.useEffect((function(){e.url&&b()}),[e.url]);var t=s.a.useState(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],o=s.a.useState([]),i=Object(j.a)(o,2),l=i[0],d=i[1],u=s.a.useRef(null),b=function(){if(e.url){e.url;var t=new XMLHttpRequest;t.open("GET",e.url,!0),t.responseType="blob",t.onreadystatechange=function(){var e;4==t.readyState&&200==t.status&&(e=t.response,Oe.getDocument(window.URL.createObjectURL(e)).promise.then((function(e){u.current=e,d(Object(ae.a)(Array(e._pdfInfo.numPages)).fill(!0))})),c(!0))},t.send()}};return Object(r.jsx)(je,{open:a,fullScreen:!0,children:0!==l.length?l.map((function(e,t){return Object(r.jsx)(fe,{open:a,page:t+1,close:function(){c(!1)},renderer:u.current},"".concat(t))})):null})};n(382),n(777);var xe=function(){var e=s.a.useState(window.MockData.chart.test1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)(J.a,{container:!0,children:[Object(r.jsx)(J.a,{item:!0,xs:!0,children:Object(r.jsx)($,{options:n})}),Object(r.jsx)(J.a,{item:!0,xs:!0,children:Object(r.jsx)($,{options:window.MockData.chart.test2})})]}),Object(r.jsx)(z.a,{onClick:function(){window.MockData.chart.test1.series[0].data[2]=100;var e=Object.assign({},window.MockData.chart.test1);a(e)},children:"change"}),Object(r.jsx)(ne,{options:["\u4e2a\u4eba\u8d44\u6599","\u9000\u51fa"],children:Object(r.jsx)(z.a,{onClick:function(){},children:"111"})})]})},ge=n(37),ve=n(844),we=n.p+"static/media/background.e6145588.jpg",ye=240,Se={mainStyle:Object(ve.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:ye,width:"calc(100% - ".concat(ye,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:ye,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:ye,background:"url( ".concat(we," )"),color:"white",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ge.a)({background:"url( ".concat(we," )"),transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),overflow:"auto"},icon:{color:"white"},outlined:{"&:before":{borderColor:"white!important",borderWidth:"0px!important"},"&:after":{borderColor:"white!important",borderWidth:0}}}}))},Ce=n(847),ke=n(130),Le=n(860),De=n(850),Ie=n(848),Me=n(849),Ee=n(376),Ne=n.n(Ee),_e=n(377),Te=n.n(_e),Re=n(378),Ae=n.n(Re);function Pe(e){return e.left?Object(r.jsx)(J.a,{item:!0,children:e.left}):e.right?Object(r.jsx)(J.a,{style:{margin:6},item:!0,children:e.right}):null}var Be=function(e){return Object(r.jsxs)(J.a,{container:!0,direction:"row",justify:e.left&&e.right?"space-between":e.right?"flex-end":"flex-start",children:[Object(r.jsx)(Pe,Object(u.a)({},e)),e.children?e.children:null]})},Fe=n(833),He=n(374),Ge=n.n(He),Ue=n(375),ze=n.n(Ue),Ve=n(846),We=n(865),Xe=n(371),qe=n.n(Xe),Je=n(241),Ye=n.n(Je),$e=n(372),Ke=n.n($e),Qe=n(845),Ze=n(373),et=n.n(Ze);var tt={dashboard:Object(r.jsx)(Ke.a,{style:{color:"FFF"}}),Components:Object(r.jsx)(et.a,{style:{color:"FFF"}})},nt=function(e){var t=s.a.useState(e.menuList),n=Object(j.a)(t,2),a=n[0],c=n[1],o=s.a.useState(null),i=Object(j.a)(o,2),l=i[0],d=i[1],u=function e(t,n){return t.children&&0!=t.children.length?(t.accordion=n,t.children.map((function(t){return e(t,n)}))):t},b=function(t){return 3===t.id.length&&!e.open||!!e.open},h=function e(t,n){n instanceof Array?n.forEach((function(n){return e(t,n)})):n.children&&0!=n.children.length?(t.includes(n.id)?n.accordion=!0:n.accordion=!1,n.children.forEach((function(n){return e(t,n)}))):n.id===t&&d(n.name)};return s.a.useEffect((function(){e.id&&h(e.id,a)}),[e.id]),Object(r.jsx)(Z.a,{spacing:4,style:{display:e.layout?null:"flex"},children:function t(n){var o;return n instanceof Array?n.map((function(e){return t(e)})):n.children&&0!=n.children.length?Object(r.jsxs)("div",{children:[Object(r.jsx)(ne,{open:!e.open,placement:(o=e.placement,o?"bottom":"right-start"),hover:!0,child:Object(r.jsx)(s.a.Fragment,{children:n.children.map((function(e){return t(e)}))}),children:Object(r.jsxs)(ee.a,{button:!0,selected:n.id===l,onClick:function(t){n.accordion=!n.accordion,n.active=!n.active,n.accordion&&(n=u(n,!0)),d(n.id),c(Array.from(a)),e.getPath&&e.getPath(n),t.preventDefault()},children:[b(n)?Object(r.jsx)(Qe.a,{children:tt[n.preIcon]}):null,Object(r.jsx)(te.a,{style:{whiteSpace:"nowrap"},primary:e.local[e.local.locale].main[n.name]}),e.open&&n.accordion?Object(r.jsx)(qe.a,{}):Object(r.jsx)(Ye.a,{})]})}),n.accordion&&e.open?Object(r.jsx)(Z.a,{spacing:4,children:n.children.map((function(e){return t(e)}))}):null]},"".concat(n.id)):([].push(n),Object(r.jsxs)(ee.a,{button:!0,selected:n.id===l,onClick:function(t){n.active=!n.active,d(n.id),e.getPath&&e.getPath(n),t.preventDefault()},children:[b(n)?Object(r.jsx)(Qe.a,{children:tt[n.preIcon]}):null,Object(r.jsx)(te.a,{style:{whiteSpace:"nowrap"},primary:e.local[e.local.locale].main[n.name]})]},"".concat(n.id)))}(a)})};var at=function(e){var t,n,a=Se.mainStyle();return"aside"===e.layout?Object(r.jsxs)(We.a,{variant:"permanent",className:Object(ke.a)(a.drawer,(t={},Object(ge.a)(t,a.drawerOpen,e.open),Object(ge.a)(t,a.drawerClose,!e.open),t)),classes:{paper:Object(ke.a)((n={},Object(ge.a)(n,a.drawerOpen,e.open),Object(ge.a)(n,a.drawerClose,!e.open),n))},children:[Object(r.jsx)("div",{className:a.toolbar,children:Object(r.jsx)(pe.a,{onClick:function(){return e.handleDrawerClose()},children:e.open?Object(r.jsx)(Ge.a,{style:{color:"white"}}):Object(r.jsx)(ze.a,{style:{color:"white"}})})}),Object(r.jsx)(Ve.a,{style:{background:"white"}}),Object(r.jsx)(nt,{menuList:window.MockData.MenuList,id:e.id,layout:"aside",open:e.open,local:e.locate,getPath:function(t){t.path&&e.history.push(t.path)}})]}):"header"===e.layout?Object(r.jsx)(nt,{menuList:window.MockData.MenuList,id:e.id,open:!1,placement:"header",local:e.locate,getPath:function(t){t.path&&e.history.push(t.path)}}):null};var ct=Object(b.b)((function(e){return Object(u.a)({},e)}),Object(u.a)({},c))(Object(D.g)((function(e){console.log(e,e.config.pc.menuLayout);var t=Se.mainStyle(),n=s.a.useState(!0),a=Object(j.a)(n,2),c=a[0],o=a[1],i=s.a.useState(null),l=Object(j.a)(i,2),d=l[0],b=(l[1],[{label:e.locate[e.locate.locale].main.account,value:0},{label:e.locate[e.locate.locale].main.out,value:1}]);return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(Ce.a,{}),Object(r.jsx)(Ie.a,{position:"fixed",className:"aside"===e.config.pc.menuLayout?Object(ke.a)(t.appBar,Object(ge.a)({},t.appBarShift,c)):null,children:Object(r.jsxs)(Me.a,{children:[Object(r.jsx)(pe.a,{color:"inherit",onClick:function(){o(!0)},style:{marginLeft:67},edge:"start",className:Object(ke.a)(t.menuButton,Object(ge.a)({},t.hide,c)),children:Object(r.jsx)(Ne.a,{})}),Object(r.jsxs)(Be,{right:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Fe.a,{disableUnderline:!0,startAdornment:Object(r.jsx)(Te.a,{}),style:{background:"white",borderRadius:15,marginRight:15,textIndent:15,position:"relative",top:8}})}),children:["aside"!==e.config.pc.menuLayout?Object(r.jsx)(at,Object(u.a)(Object(u.a)({},e),{},{id:d,layout:e.config.pc.menuLayout,open:c})):null,Object(r.jsxs)(Le.a,{style:{color:"white"},className:t.outlined,variant:"standard",defaultValue:"en",classes:{icon:t.icon},onChange:function(t){e.changeLocation({locale:t.target.value})},children:[Object(r.jsx)(De.a,{value:"ch",children:"\u4e2d\u6587"}),Object(r.jsx)(De.a,{value:"en",children:"English"})]}),Object(r.jsx)(pe.a,{color:"inherit",children:Object(r.jsx)(ne,{hover:!0,options:b,open:!0,selectItem:function(t){1===t.value&&e.history.push("/user/login")},children:Object(r.jsx)(Ae.a,{fontSize:"large"})})})]})]})}),"aside"===e.config.pc.menuLayout?Object(r.jsx)(at,Object(u.a)(Object(u.a)({},e),{},{id:d,open:c,layout:e.config.pc.menuLayout,handleDrawerClose:function(){o(!c)}})):null,Object(r.jsxs)("main",{className:t.content,children:[Object(r.jsx)("div",{className:t.toolbar}),Object(r.jsx)(D.d,{children:Ct.pc.main.map((function(e,t){return Object(r.jsx)(D.b,{exact:!0,path:e.path,component:e.component},"".concat(t))}))})]})]})}))),ot=n(851),rt=n(855),it=n(854),st=n(852),lt=n(853),dt=n(863),ut=n(191),jt=n(379),bt=n.n(jt);var ht=s.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(U.a)(e,["indeterminate"]),c=s.a.useRef(),o=t||c;return s.a.useEffect((function(){o.current.indeterminate=n}),[o,n]),Object(r.jsx)(dt.a,Object(u.a)({color:"primary",ref:o},a))})),pt=function(e){var t=e.checked,n=e.onChange;return Object(r.jsx)(it.a,{component:"div",children:Object(r.jsx)(dt.a,{color:"primary",checked:t,onChange:function(e){return n(e)}})})},Ot=function(e){var t=e.columns,n=e.data,a=e.rowDrap,c=e.selectRow,o=e.selectType,i=s.a.useMemo((function(){return t?Object(ae.a)(t):[]}),[]),l=s.a.useState(n),d=Object(j.a)(l,2),b=d[0],h=d[1],p=s.a.useState(null),O=Object(j.a)(p,2),f=O[0],m=O[1],x=s.a.useState(null),g=Object(j.a)(x,2),v=g[0],w=g[1],y=s.a.useState({top:0,width:0,height:0}),S=Object(j.a)(y,2),C=S[0],k=S[1],L=s.a.useMemo((function(){return b}),[b]),D=Object(ut.useTable)({columns:i,data:L},ut.useSortBy,ut.useRowSelect,(function(e){"checkbox"===o&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(r.jsx)("div",{children:Object(r.jsx)(ht,Object(u.a)({},t()))})},Cell:function(e){var t=e.row;return Object(r.jsx)(ht,Object(u.a)({},t.getToggleRowSelectedProps()))},component:"div"}].concat(Object(ae.a)(e))}))})),I=D.getTableProps,M=D.headerGroups,E=D.rows,N=D.prepareRow,_=D.state.selectedRowIds;return s.a.useEffect((function(){h(n)}),[n]),s.a.useEffect((function(){}),[]),s.a.useEffect((function(){"radio"===o&&c&&c({radio:v})}),[_,v]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:Object(u.a)(Object(u.a)({position:"absoulte","pointer-events":"none"},C),{},{background:"red"})}),Object(r.jsxs)(ot.a,Object(u.a)(Object(u.a)({component:"div"},I()),{},{children:[Object(r.jsx)(st.a,{component:"div",children:M.map((function(e){return Object(r.jsxs)(lt.a,Object(u.a)(Object(u.a)({component:"div"},e.getHeaderGroupProps()),{},{children:["radio"===o?Object(r.jsx)(it.a,{component:"div"}):null,e.headers.map((function(e){return Object(r.jsxs)(it.a,Object(u.a)(Object(u.a)({component:"div"},e.getHeaderProps()),{},{children:[e.render("Header"),e.isSort?Object(r.jsx)("div",Object(u.a)(Object(u.a)({},e.getSortByToggleProps()),{},{children:"\u5f85\u5904\u7406"})):null]}))}))]}))}))}),Object(r.jsx)(rt.a,{component:"div",children:E.map((function(e,t){return N(e)||Object(r.jsxs)(lt.a,Object(u.a)(Object(u.a)({component:"div"},e.getRowProps()),{},{onDragStart:function(n){k({width:n.target.clientWidth*e.cells.length,height:n.target.clientHeight,top:n.clientY}),a||n.preventDefault(),m(t)},children:["radio"===o?Object(r.jsx)(pt,{checked:v===t,onChange:function(e){e.currentTarget.checked?w(t):w(null)}}):null,e.cells.map((function(e){return Object(r.jsx)(it.a,Object(u.a)(Object(u.a)({component:"div",onDragOver:function(e){e.preventDefault()},onDrop:function(){t!==f&&function(e,t){var n=b[e];h(bt()(b,{$splice:[[e,1],[t,0,n]]}))}(f,t)}},e.getCellProps()),{},{children:e.render("Cell")}))}))]}))}))})]}))]})};var ft=n(857),mt=n(856);var xt=function(e){return"circle"===e.type?Object(r.jsx)(mt.a,{}):Object(r.jsx)("div",{children:Object(r.jsx)(ft.a,{})})};var gt=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(We.a,{open:e.open,onClose:function(){e.onClose&&e.onClose(!1)},children:e.children})})},vt=n(861);var wt=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(vt.a,{count:10,onChange:function(e,t){!function(e){console.log(e)}(t)}})})};function yt(e){return{type:w,params:e}}var St=Object(b.b)((function(e){return Object(u.a)({},e)}),Object(u.a)(Object(u.a)({},c),o))(Object(D.g)((function(e){console.log(window.MockData);var t=s.a.useState(null),n=Object(j.a)(t,2);n[0],n[1],console.log("production");var a=s.a.useState(100),c=Object(j.a)(a,2),o=(c[0],c[1],s.a.useState(!1)),i=Object(j.a)(o,2),l=i[0],d=(i[1],s.a.useState(!1)),u=Object(j.a)(d,2),b=u[0],h=u[1],p=s.a.useState(!1),O=Object(j.a)(p,2),f=O[0],m=O[1],x=s.a.useState(null),g=Object(j.a)(x,2),v=g[0],w=g[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"file",onChange:function(e){(function(e){var t=null,n=new FileReader,a=!!n.readAsBinaryString;if(n.readAsArrayBuffer(e),e)return n.onload=function(e){var n=e.target.result;t=de.read(n,{type:a?"array":"binary"})},new Promise((function(e,n){setTimeout((function(){var a=de.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1});e(a||[]),n([])}),1e3)}))})(e.currentTarget.files[0]).then((function(e){console.log(e)}))}}),Object(r.jsx)(z.a,{onClick:function(){!function(e){if(e&&Array.isArray(e)){var t=de.utils.json_to_sheet(e,{header:Object.keys(e[0])}),n=de.utils.book_new();de.utils.book_append_sheet(n,t,"page0"),de.writeFile(n,"SheetJS.xlsx")}}([{age:"aaa",name:"xiaoming"}])},children:"test"}),Object(r.jsx)(z.a,{onClick:function(){w(v?"":"http://116.62.42.204/music/Lecture1.pdf")},children:"pdf"}),Object(r.jsx)(me,{url:v}),Object(r.jsx)(wt,{}),Object(r.jsx)(xt,{type:"circle"}),Object(r.jsx)(gt,{open:f,onClose:function(){m(!1)}}),Object(r.jsx)(je,{title:"aaaa",open:l,onClose:function(t){e.changeLayout("header")},children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z.a,{onClick:function(){h(!0)},children:"two"}),Object(r.jsx)(je,{title:"two",open:b,onClose:function(e){h(e)},children:Object(r.jsx)("div",{children:"two"})})]})})]})})));var Ct={pc:{top:[{path:"/user/login",component:q},{path:"/main",component:ct}],main:[{path:"/main/dashboard",component:xe},{path:"/main/table",component:Ot},{path:"/main/test",component:St},{path:"/main/user/list",component:function(){return Object(r.jsx)(N.a,{children:Object(r.jsxs)(J.a,{children:[Object(r.jsx)(J.a,{}),Object(r.jsx)(J.a,{children:Object(r.jsx)(Ot,{rowDrap:!0,columns:window.MockData.table.columns,data:window.MockData.table.data(10)})})]})})}}]},moblie:{top:[{path:"/login",component:q}],main:[]}},kt=n(380),Lt=Object(kt.a)({palette:{primary:{main:"#636518"}}}),Dt=n(858);var It=function(){var e=Object(i.createContext)(),t=s.a.useState({en:"aaa"}),n=Object(j.a)(t,2),a=n[0];return n[1],s.a.useEffect((function(){document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}),[]),Object(r.jsx)(Dt.a,{theme:Lt,children:Object(r.jsx)(b.a,{store:k,children:Object(r.jsxs)(e.Provider,{value:a,children:[Object(r.jsx)(gt,{open:!1}),Object(r.jsxs)(L.a,{basename:"/reactWeb/",children:[Object(r.jsx)(D.b,{exact:!0,path:"/",children:Object(r.jsx)(D.a,{to:"/main/dashboard"})}),Ct.pc.top.map((function(e,t){return Object(r.jsx)(D.b,{path:e.path,component:e.component},"".concat(t))}))]})]})})})},Mt={columns:[{Header:"TestData",accessor:"test1",isSort:!0},{Header:"TestData1",accessor:"test2"},{Header:"TestData2",accessor:"test3"},{Header:"TestData3",accessor:"test4"},{Header:"TestData4",accessor:"test5"}],data:function(e){return Object(ae.a)(new Array(e||100)).fill(!0).map((function(e,t){return{test:"a"+t,test1:t,test2:"c"+t,test3:"0"+t,test4:"0"+t}}))}};window.MockData={MenuList:[{name:"dashboard",id:"M01",preIcon:"dashboard",path:"/main/dashboard",suffexIcon:"",active:!1,accordion:!1,children:[]},{id:"M07",preIcon:"dashboard",name:"paymentMananger",path:"",accordion:!1,active:!1,children:[{id:"M071",name:"paymentList",path:"",accordion:!1,active:!1}]},{id:"M08",preIcon:"dashboard",path:"",name:"userMananger",accordion:!1,active:!1,children:[{id:"M081",name:"user",path:"/main/user/list",accordion:!1,active:!1}]},{name:"component",preIcon:"Components",path:"",id:"M02",suffexIcon:"",active:!1,accordion:!1,children:[{name:"test",preIcon:"",path:"/main/test",id:"M021",suffexIcon:"",active:!1,accordion:!0},{name:"test1",preIcon:"",path:"/main/test1",id:"M022",suffexIcon:"",active:!1,accordion:!0,children:[{name:"test3",preIcon:"",path:"/main/test",id:"M0221",suffexIcon:"",active:!1,accordion:!1}]}]}],table:Mt,chart:{test1:{title:{text:"chart"},tooltip:{},xAxis:{data:["apple","banana","aa"]},yAxis:{},series:[{name:"\u9500\u91cf",type:"bar",data:[100,200,300]}]},test2:{tooltip:{},series:{type:"pie",data:[{name:"A",value:100},{name:"b",value:200},{name:"c",value:300}]}}},searchData:[{type:"text",name:"name1",label:"aa",variant:"outlined"},{type:"integer",name:"name2",label:"aaa",variant:"outlined"},{type:"select",name:"name2",label:"aaaa",options:[{label:"aa",value:"1"}]},{type:"textera",name:"name3",label:"aaaaa",variant:"outlined"}]},d.a.render(Object(r.jsx)(It,{}),document.getElementById("root"))}},[[779,1,2]]]);
//# sourceMappingURL=main.c1101640.chunk.js.map