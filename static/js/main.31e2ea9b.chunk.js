(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{122:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b}));var i=n(21),c=n(223),s=n(205);Object(c.a)({routes:function(){this.get("api/auth/me",(function(){return{resultCode:0,users:[{id:2,username:"blabla@bla.bla"}]}}));var e=3;this.post("api/auth/login",(function(t,n){var i=JSON.parse(n.requestBody);return i.id=e++,{resultCode:0,user:i}})),this.post("api/profile/photo",(function(e,t){return{resultCode:0,data:JSON.parse(t.requestBody)}})),this.delete("api/auth/login",(function(){return{resultCode:0}}))}});var a=s.create({baseURL:"api/",withCredentials:!0}),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},l=function(){return a.delete("auth/login")},o="SET_USER_DATA",d={userId:null,login:null,isAuth:!1},u=function(e,t,n){return{type:o,data:{userId:e,login:t,isAuth:n}}},j=function(e,t,n){return function(i){r(e,t,n).then((function(e){0===e.data.resultCode&&i(u(e.data.user.id,e.data.user.email,!0))}))}},b=function(){return function(e){l().then((function(t){0===t.data.resultCode&&e(u(null,null,!1))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),t.data);default:return e}}},143:function(e,t,n){e.exports={wrapper:"App_wrapper__N5VUW",content:"App_content__1NY4c",navbar:"App_navbar__1F5pd"}},145:function(e,t,n){e.exports={wrapper:"Profile_wrapper__E7Rou",text:"Profile_text__11pPm",login:"Profile_login__16oyE"}},153:function(e,t,n){e.exports={image:"StartPage_image__1AqfD",textBlock:"StartPage_textBlock__1nS19",text:"StartPage_text__2AIWR"}},164:function(e,t,n){e.exports={"editable-cell":"Table_editable-cell__3tv_p",editableCellValueWrap:"Table_editableCellValueWrap__3YNXE",editableRow:"Table_editableRow__3xnt3"}},166:function(e,t,n){e.exports={wrapper:"DeniedAccess_wrapper__53Sov",span:"DeniedAccess_span__2vHxg"}},167:function(e,t,n){e.exports={emptyListImage:"CreateList_emptyListImage__39YDt",alert:"CreateList_alert__1rHYz"}},203:function(e,t,n){e.exports={DeleteBtn:"ListContainer_DeleteBtn__3y5gv"}},204:function(e,t,n){e.exports={saveBtn:"ModalWindow_saveBtn__1NtPF"}},215:function(e,t,n){e.exports={drawer:"DrawerComponent_drawer__1Sw8m"}},233:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var i=n(6),c=n(0),s=n.n(c),a=n(22),r=n.n(a),l=(n(233),n(143)),o=n.n(l),d=(n(234),n(16)),u=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"About Us"}),Object(i.jsx)("div",{children:"EMPTY PAGE"})]})},j=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Settings"}),Object(i.jsx)("div",{children:"EMPTY PAGE"})]})},b=n(61),p=n(79),h=n.n(p),O=function(){return Object(i.jsx)("nav",{className:h.a.nav,children:Object(i.jsxs)("ul",{className:h.a.list,children:[Object(i.jsx)("li",{children:Object(i.jsx)(b.b,{to:"/create-list",className:h.a.item,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043b\u0438\u0441\u0442"})}),Object(i.jsx)("li",{children:Object(i.jsx)(b.b,{to:"/profile",className:h.a.item,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(i.jsx)("li",{children:Object(i.jsx)(b.b,{to:"/lists",className:h.a.item,children:"\u041c\u043e\u0438 \u0441\u043f\u0438\u0441\u043a\u0438"})}),Object(i.jsx)("li",{children:Object(i.jsx)(b.b,{to:"/about",className:h.a.item,children:"\u041e \u043d\u0430\u0441"})}),Object(i.jsx)("li",{children:Object(i.jsx)(b.b,{to:"/settings",className:h.a.item,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})})},x=n(29),f=n(50),m=n(32),g=n(51),v=n(163),_=n.n(v),L=n(195),C=n(82),y=n(21),S=n(171),w=n(332),N=n(334),I=n(222),A=n(331),E=n(339),T=n(164),k=n.n(T),P=s.a.createContext(),D=function(e){e.index;var t=Object(S.a)(e,["index"]),n=w.a.useForm(),c=Object(x.a)(n,1)[0];return Object(i.jsx)(w.a,{form:c,component:!1,children:Object(i.jsx)(P.Provider,{value:c,children:Object(i.jsx)("tr",Object(y.a)({},t))})})},F=function(e){var t=e.title,n=e.editable,s=e.children,a=e.dataIndex,r=e.record,l=e.handleSave,o=Object(S.a)(e,["title","editable","children","dataIndex","record","handleSave"]),d=Object(c.useState)(!1),u=Object(x.a)(d,2),j=u[0],b=u[1],p=Object(c.useRef)(),h=Object(c.useContext)(P);Object(c.useEffect)((function(){j&&p.current.focus()}),[j]);var O=function(){b(!j),h.setFieldsValue(Object(C.a)({},a,r[a]))},f=function(){var e=Object(L.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.validateFields();case 3:t=e.sent,O(),l(Object(y.a)(Object(y.a)({},r),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=s;return n&&(m=j?Object(i.jsx)(w.a.Item,{style:{margin:0},name:a,rules:[{required:!0,message:"".concat(t," \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c.")}],children:Object(i.jsx)(N.a,{ref:p,onPressEnter:f,onBlur:f})}):Object(i.jsxs)("div",{className:k.a.editableCellValueWrap,style:{paddingRight:24},onClick:O,children:[s," "]})),Object(i.jsx)("td",Object(y.a)(Object(y.a)({},o),{},{children:m}))},R=function(e){var t=Object(c.useState)(1),n=Object(x.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(1),l=Object(x.a)(r,2),o=l[0],d=l[1];Object(c.useEffect)((function(){var t=Math.ceil(e.shoppingList.length/8);s!==t&&a(t)}),[e.shoppingList]);var u={body:{row:D,cell:F}},j=function(t){return e.editContent(e.item,t)},b=[{title:"\u2116",key:"index",width:"5%",render:function(e,t,n){return 8*(o-1)+n+1}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",key:"name",width:"80%",editable:!0},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",key:"delete",width:"10%",render:function(t){return Object(i.jsx)(m.a,{onClick:function(){var n=Math.ceil(e.shoppingList.length/9);s!==n&&o===s&&(e.shoppingList.length>9&&e.shoppingList.length%9===0?d(o):d(n)),e.deleteProduct(e.item,t.id),I.b.success("".concat(t.name," \u0443\u0434\u0430\u043b\u0451\u043d"))},children:Object(i.jsx)(E.a,{})})}}].map((function(e){return e.editable?Object(y.a)(Object(y.a)({},e),{},{onCell:function(t){return{record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,handleSave:j}}}):e}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(A.a,{components:u,dataSource:e.shoppingList,columns:b,rowSelection:Object(y.a)({type:"checkbox"},{onChange:function(e,t){"selectedRowKeys: ".concat(e),'selectedRows: " '.concat(t)}}),rowClassName:function(){return k.a.editableRow},pagination:{hideOnSinglePage:!0,pageSize:8,current:o,onChange:function(e){d(e),a(e)}}})})},B=n(4),M=n.n(B),V=n(88),z=n.n(V),U=function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),l=Object(x.a)(r,2),o=l[0],d=l[1],u=function(){o.length>0&&(e.addProduct(e.item,o),d(""))};return Object(i.jsxs)("div",{className:z.a.wrapper,children:[Object(i.jsxs)(w.a,{className:M()(z.a.input,Object(C.a)({},z.a.active,s)),onSubmit:u,children:[Object(i.jsx)(N.a,{size:"middle",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",onChange:function(e){return d(e.target.value)},value:o,autoFocus:!0,onPressEnter:u}),Object(i.jsx)(m.a,{type:"primary",onClick:u,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(i.jsxs)(m.a,{onClick:function(){return a(!0)},className:M()(z.a.addBtn,Object(C.a)({},z.a.hidden,s)),children:["+",Object(i.jsx)("span",{className:z.a.addText,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})]})},H=n(203),X=n.n(H),Y=n(338),W=function(e){return Object(i.jsx)(Y.a,{title:"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a?",onConfirm:function(){I.b.success("\u0421\u043f\u0438\u0441\u043e\u043a \u0443\u0434\u0430\u043b\u0451\u043d"),e.setVisible(!1),e.deleteListAction()},onCancel:function(){I.b.error("\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u0435 \u0443\u0434\u0430\u043b\u0451\u043d"),e.setVisible(!1)},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",visible:e.visible})},q=Object(f.b)((function(e){return{savedLists:e.mainPageReducer.savedLists}}),{deleteItemFromSavedList:g.d,editItemInSavedList:g.h,deleteList:g.e,addItemToSavedList:g.a})((function(e){var t=Object(d.h)().id,n=Object(d.g)(),c=e.savedLists.findIndex((function(e){return e.id===+t})),a=e.savedLists[c],r=a.items,l=s.a.useState(!1),o=Object(x.a)(l,2),u=o[0],j=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:a.title}),Object(i.jsx)("p",{children:a.description}),Object(i.jsx)(U,{addProduct:e.addItemToSavedList,item:a}),Object(i.jsx)(R,{shoppingList:r,item:a,editContent:e.editItemInSavedList,deleteProduct:e.deleteItemFromSavedList}),Object(i.jsx)(m.a,{onClick:function(){return j(!0)},type:"primary",className:X.a.DeleteBtn,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"}),Object(i.jsx)(W,{visible:u,setVisible:j,deleteListAction:function(){e.deleteList(a),n.push("/lists")}})]})})),J=n(145),G=n.n(J),K=n(340),Q=n(336),Z=function(e){var t=e.login;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(i.jsxs)("div",{className:G.a.wrapper,children:[Object(i.jsx)(Q.a,{size:100,icon:Object(i.jsx)(K.a,{})}),Object(i.jsx)("span",{className:G.a.text,children:"\u041c\u043e\u0439 \u041b\u043e\u0433\u0438\u043d:"}),Object(i.jsx)("span",{className:G.a.login,children:t})]})]})},$=n(341),ee=n(166),te=n.n(ee),ne=function(){var e=Object(d.g)();return Object(i.jsxs)("div",{className:te.a.wrapper,children:[Object(i.jsx)($.a,{style:{fontSize:"50px",color:"#08c"}}),Object(i.jsx)("span",{className:te.a.span,children:"\u0412\u044b \u0435\u0449\u0451 \u043d\u0435 \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(i.jsx)(m.a,{type:"primary",onClick:function(){return e.push("/login")},children:"\u0412\u043e\u0439\u0442\u0438"})]})},ie=Object(f.b)((function(e){var t=e.loginReducer;return{isAuth:t.isAuth,login:t.login}}))((function(e){return!1===e.isAuth?Object(i.jsx)(ne,{}):Object(i.jsx)(Z,{login:e.login})})),ce=n(70),se=n(167),ae=n.n(se),re=n(335),le=n(204),oe=n.n(le),de=n(135),ue=function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),l=Object(x.a)(r,2),o=l[0],u=l[1],j=Object(c.useState)(),b=Object(x.a)(j,2),p=b[0],h=b[1],O=Object(d.g)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m.a,{type:"primary",onClick:function(){!1!==e.isAuth?a(!0):O.push("/login")},className:oe.a.saveBtn,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(i.jsxs)(re.a,{title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a?",visible:s,onOk:function(){a(!1),function(){var t=e.shoppingList;e.saveList(o,p,t)}(),e.setAlertVisible(!0)},onCancel:function(){return a(!1)},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",children:[Object(i.jsx)("span",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"}),Object(i.jsx)(N.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",value:o,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("span",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(i.jsx)(de.a,{value:p,onChange:function(e){return h(e.target.value)}})]})]})},je=n(337),be=function(e){var t=e.handleAlertClose;return Object(i.jsx)(je.a,{message:"\u0421\u043f\u0438\u0441\u043e\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d",type:"success",showIcon:!0,closable:!0,afterClose:t})},pe=Object(f.b)((function(e){return{shoppingList:e.mainPageReducer.shoppingList,isAuth:e.loginReducer.isAuth}}),{addProduct:g.b,deleteProduct:g.f,editContent:g.g,saveList:g.i})((function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043b\u0438\u0441\u0442"}),Object(i.jsx)("div",{className:ae.a.alert,children:s&&Object(i.jsx)(be,{handleAlertClose:function(){return a(!1)}})}),Object(i.jsx)(U,{addProduct:e.addProduct}),Object(i.jsxs)("div",{className:ae.a.emptyListImage,children:[0===e.shoppingList.length&&Object(i.jsx)(ce.a,{description:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"}),0!==e.shoppingList.length&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(R,{shoppingList:e.shoppingList,deleteProduct:e.deleteProduct,editContent:e.editContent}),Object(i.jsx)(ue,{saveList:e.saveList,shoppingList:e.shoppingList,setAlertVisible:a,isAuth:e.isAuth})]})]})]})})),he=n(89),Oe=n.n(he),xe=n.p+"static/media/logo.03be4c66.png",fe=n(122),me=Object(f.b)((function(e){var t=e.loginReducer;return{isAuth:t.isAuth,login:t.login}}),{logOut:fe.c})((function(e){var t=Object(d.g)();return Object(i.jsxs)("header",{className:Oe.a.header,children:[Object(i.jsx)("img",{className:Oe.a.logo,alt:"logo",src:xe}),Object(i.jsx)("h1",{className:Oe.a.title,children:"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a"}),Object(i.jsxs)("div",{className:Oe.a.login,children:[Object(i.jsx)(m.a,{type:"link",shape:"circle",size:"large",onClick:function(){return t.push("/profile")},children:Object(i.jsx)(Q.a,{size:"large",icon:Object(i.jsx)(K.a,{})})}),e.isAuth?Object(i.jsxs)("div",{children:[Object(i.jsx)(b.b,{to:"/profile",className:Oe.a.text,children:e.login}),Object(i.jsx)(m.a,{className:Oe.a.btn,size:"small",onClick:e.logOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(i.jsx)(m.a,{onClick:function(){return t.push("/login")},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})),ge=n(333),ve=n(342),_e=n(215),Le=n.n(_e),Ce=function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1];return Object(i.jsxs)("div",{className:Le.a.drawer,children:[Object(i.jsx)(m.a,{type:"default",style:{width:"50px"},onClick:function(){a(!0)},children:Object(i.jsx)(ve.a,{})}),Object(i.jsx)(ge.a,{title:"\u041c\u0435\u043d\u044e",placement:"left",closable:!1,onClose:function(){a(!1)},visible:s,drawerStyle:{backgroundColor:"#F5F5F7"},children:Object(i.jsx)(O,{})})]})},ye=n(153),Se=n.n(ye),we=n.p+"static/media/startImage.76a15e19.jpg",Ne=function(){var e=Object(d.g)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:we,alt:"shopping",className:Se.a.image}),Object(i.jsxs)("div",{className:Se.a.textBlock,children:[Object(i.jsx)("h1",{className:Se.a.text,children:"\u0412\u0441\u0451 \u043a\u0443\u043f\u0438\u0442\u044c \u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c!"}),Object(i.jsx)(m.a,{type:"primary",size:"large",onClick:function(){return e.push("/create-list")},children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})]})},Ie=s.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,349))})),Ae=s.a.lazy((function(){return n.e(4).then(n.bind(null,346))}));var Ee=Object(f.b)((function(e){return{savedLists:e.mainPageReducer.savedLists}}))((function(e){return Object(i.jsxs)("div",{className:o.a.wrapper,children:[Object(i.jsx)(me,{}),Object(i.jsx)("div",{className:o.a.navbar,children:Object(i.jsx)(O,{})}),Object(i.jsx)(Ce,{}),Object(i.jsxs)("div",{className:o.a.content,children:[Object(i.jsx)(d.b,{exact:!0,path:"/shopping-list-deploy/",component:Ne}),Object(i.jsx)(d.b,{path:"/create-list",component:pe}),Object(i.jsx)(d.b,{path:"/profile",component:ie}),Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{exact:!0,path:"/lists",render:function(){return Object(i.jsx)(s.a.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(Ie,{})})}}),Object(i.jsx)(d.b,{path:"/lists/:id?",children:0!==e.savedLists.length?Object(i.jsx)(q,{}):Object(i.jsx)(d.a,{to:"/lists"})})]}),Object(i.jsx)(d.b,{path:"/about",component:u}),Object(i.jsx)(d.b,{path:"/settings",component:j}),Object(i.jsx)(d.b,{path:"/login",render:function(){return Object(i.jsx)(s.a.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(Ae,{})})}})]})]})})),Te=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,347)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))},ke=n(86),Pe=n(216),De=Object(ke.c)({loginReducer:fe.a,mainPageReducer:g.c}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.d,Re=Object(ke.e)(De,Fe(Object(ke.a)(Pe.a)));window.store=Re;var Be=Re;r.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(f.a,{store:Be,children:Object(i.jsx)(Ee,{})})}),document.getElementById("root")),Te()},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"i",(function(){return _})),n.d(t,"a",(function(){return L})),n.d(t,"d",(function(){return C})),n.d(t,"h",(function(){return y})),n.d(t,"e",(function(){return S}));var i=n(41),c=n(21),s="ADD_PRODUCT",a="DELETE_PRODUCT",r="EDIT_CONTENT",l="SAVE_LIST",o="ADD_ITEM_TO_SAVED_LIST",d="DELETE_ITEM_FROM_SAVED_LIST",u="EDIT_ITEM_IN_SAVED_LIST",j="DELETE_LIST",b={shoppingList:[],savedLists:[]},p=function(){return Math.floor(Math.random()*Math.floor(Math.random()*Date.now()))},h=function(e){return{key:p(),id:p(),name:e.name}},O=function(e){return{id:p(),title:e.title,description:e.description,items:e.list}},x=function(e,t){return e.savedLists.findIndex((function(e){return e.id===t.item.id}))},f=function(e,t,n){return{id:t.item.id,title:t.item.title,description:t.item.description,items:n}},m=function(e,t){return{type:s,item:e,name:t}},g=function(e,t){return{type:r,item:e,row:t}},v=function(e,t){return{type:a,item:e,itemId:t}},_=function(e,t,n){return{type:l,title:e,description:t,list:n}},L=function(e,t){return{type:o,item:e,name:t}},C=function(e,t){return{type:d,item:e,id:t}},y=function(e,t){return{type:u,item:e,row:t}},S=function(e){return{type:j,list:e}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),{},{shoppingList:[].concat(Object(i.a)(e.shoppingList),[h(t)]),inputElement:""});case r:var n=e.shoppingList.findIndex((function(e){return t.row.key===e.key}));return Object(c.a)(Object(c.a)({},e),{},{shoppingList:[].concat(Object(i.a)(e.shoppingList.slice(0,n)),[t.row],Object(i.a)(e.shoppingList.slice(n+1,e.shoppingList.length)))});case a:return Object(c.a)(Object(c.a)({},e),{},{shoppingList:e.shoppingList.filter((function(e){return e.id!==t.itemId}))});case l:return Object(c.a)(Object(c.a)({},e),{},{savedLists:[].concat(Object(i.a)(e.savedLists),[O(t)]),shoppingList:[],inputElement:""});case o:return Object(c.a)(Object(c.a)({},e),{},{savedLists:[].concat(Object(i.a)(e.savedLists.slice(0,x(e,t))),[f(0,t,[].concat(Object(i.a)(t.item.items),[h(t)]))],Object(i.a)(e.savedLists.slice(x(e,t)+1,e.savedLists.length)))});case d:return Object(c.a)(Object(c.a)({},e),{},{savedLists:[].concat(Object(i.a)(e.savedLists.slice(0,x(e,t))),[f(0,t,t.item.items.filter((function(e){return e.id!==t.id})))],Object(i.a)(e.savedLists.slice(x(e,t)+1,e.savedLists.length)))});case u:var p=e.savedLists[x(e,t)].items.findIndex((function(e){return t.row.key===e.key}));return Object(c.a)(Object(c.a)({},e),{},{savedLists:[].concat(Object(i.a)(e.savedLists.slice(0,x(e,t))),[f(0,t,[].concat(Object(i.a)(t.item.items.slice(0,p)),[t.row],Object(i.a)(t.item.items.slice(p+1,t.item.items.length))))],Object(i.a)(e.savedLists.slice(x(e,t)+1,e.savedLists.length)))});case j:return Object(c.a)(Object(c.a)({},e),{},{savedLists:e.savedLists.filter((function(e){return e.id!==t.list.id}))});default:return e}}},79:function(e,t,n){e.exports={nav:"NavBar_nav__11LDb",list:"NavBar_list__342ko",item:"NavBar_item__1AzXu"}},88:function(e,t,n){e.exports={wrapper:"AddItem_wrapper__1I7R3",input:"AddItem_input__2AzG5",active:"AddItem_active__tTnb-",addBtn:"AddItem_addBtn__2pUbQ",hidden:"AddItem_hidden__1nMYH",addText:"AddItem_addText__2vXTY"}},89:function(e,t,n){e.exports={header:"Header_header__1rD6D",logo:"Header_logo__1E13N",title:"Header_title__zX9UU",login:"Header_login__2TUXg",text:"Header_text__1lagX",btn:"Header_btn__2DVHr"}}},[[329,1,2]]]);
//# sourceMappingURL=main.31e2ea9b.chunk.js.map