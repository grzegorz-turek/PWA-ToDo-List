(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(t,e,n){},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(21),o=n.n(s),c=(n(58),n(59),n(6)),i=n(1),u=n.n(i),l=n(3),p=n(4),m=n(18),d=n.n(m),f="https://pwa-todolist.herokuapp.com",h=function(t){return t.list.data},v=function(t){return t.list.request},b=function(t){return"app/".concat("list","/").concat(t)},g=b("LOAD_LIST"),I=b("START_REQUEST"),w=function(){return{type:I}},E=b("END_REQUEST"),O=function(){return{type:E}},j=b("ERROR_REQUEST"),k=function(t){return{error:t,type:j}},_={data:[],request:{pending:!1,success:null,error:null}};var y=function(){return function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w()),t.prev=1,t.next=4,d.a.get("".concat(f).concat("/api","/list"));case 4:n=t.sent,e({payload:n.data,type:g}),e(O()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(k(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},x=n(12),L=n(13),C=n(15),N=n(14),S=n(16),q=(n(80),n(9)),A=(n(81),function(){return r.a.createElement("div",{className:"checkmark"},r.a.createElement(q.a,null))}),T=function(t){function e(){var t,n;Object(x.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(C.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(r)))).state={updatedItm:{id:n.props.listitem.id,content:n.props.listitem.content,status:n.props.listitem.status}},n.handleRemoveItemFromList=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.props.removeItemFromListInComponent(n.props.listitem.id);case 2:n.props.loadListInComponent();case 3:case"end":return t.stop()}}),t)}))),n.handleChangeItemFromList=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setState({updatedItm:Object(p.a)({},n.state.updatedItm,{content:e.target.value})});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.handleSubmitChangedItemIntoList=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.props.changeItemFromList(n.state.updatedItm);case 2:n.props.loadListInComponent();case 3:case"end":return t.stop()}}),t)}))),n.handleToggleItemStatusInList=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setState({updatedItm:Object(p.a)({},n.state.updatedItm,{status:"doing"===n.state.updatedItm.status?"done":"doing"})});case 2:return t.next=4,n.props.changeItemFromList(n.state.updatedItm);case 4:n.props.loadListInComponent();case 5:case"end":return t.stop()}}),t)}))),n}return Object(S.a)(e,t),Object(L.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{className:"list-item"},r.a.createElement("div",{className:"list-item__checkbox"},r.a.createElement("div",{className:"list-item__checkbox__blank"})),"done"===this.state.updatedItm.status?r.a.createElement(A,null):null,r.a.createElement("div",{className:"list-item__checkbox__cover",onClick:this.handleToggleItemStatusInList}),r.a.createElement("input",{type:"text",className:"".concat(this.props.listitem.status," list-item__input"),value:this.state.updatedItm.content||this.props.listitem.content,onChange:this.handleChangeItemFromList,onBlur:this.state.updatedItm.content!==this.props.listitem.content?this.handleSubmitChangedItemIntoList:null}),r.a.createElement("button",{className:"list-item__button","aria-label":"Approve",onClick:this.state.updatedItm.content!==this.props.listitem.content?this.handleSubmitChangedItemIntoList:null},r.a.createElement(q.a,null)),r.a.createElement("button",{className:"list-item__button","aria-label":"Remove",onClick:this.handleRemoveItemFromList},r.a.createElement(q.b,null)))}}]),e}(r.a.Component),R=Object(c.b)((function(t){return{list:h(t)}}),(function(t){return{removeItemFromListInComponent:function(e){return t(function(t){return function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,d.a.delete("".concat(f).concat("/api","/list"),{data:{removeId:t}});case 4:e.sent,n(O()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(k(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))},loadListInComponent:function(){return t(y())},changeItemFromList:function(e){return t(function(t){return function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,d.a.put("".concat(f).concat("/api","/list"),{data:{updatedItem:t}});case 4:e.sent,n(O()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(k(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(T),F=(n(82),function(t){return r.a.createElement("div",{className:"list-box"},t.list.map((function(t){return r.a.createElement(R,{key:t.id,listitem:t})})))}),D=n(51),U=(n(134),function(){return r.a.createElement(D.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),W=(n(135),function(t){function e(){return Object(x.a)(this,e),Object(C.a)(this,Object(N.a)(e).apply(this,arguments))}return Object(S.a)(e,t),Object(L.a)(e,[{key:"componentDidMount",value:function(){this.props.loadListInComponent()}},{key:"render",value:function(){var t;return(this.props.request.pending||null===this.props.request.success)&&(t=r.a.createElement(U,null)),(!this.props.request.pending||this.props.request.success)&&this.props.list.length>0&&(t=r.a.createElement(F,{list:this.props.list})),this.props.request.pending&&!this.props.request.success||0!==this.props.list.length||(t="No items in the list"),!this.props.request.pending&&this.props.request.error&&(t=this.props.request.error),r.a.createElement("div",{className:"list"},t)}}]),e}(r.a.Component)),X=Object(c.b)((function(t){return{list:h(t),request:v(t)}}),(function(t){return{loadListInComponent:function(){return t(y())}}}))(W),B=n(23),Q=(n(136),function(t){function e(){var t,n;Object(x.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(C.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(r)))).state={newItm:{content:"",status:"doing"}},n.handleChange=function(t){n.setState({newItm:Object(p.a)({},n.state.newItm,Object(B.a)({},t.target.name,t.target.value))})},n.handleAddItem=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,n.props.addItemToList(n.state.newItm);case 3:n.props.loadListInComponent(),n.resetAddItem();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.resetAddItem=function(){n.setState({newItm:{content:"",status:"doing"}})},n}return Object(S.a)(e,t),Object(L.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{className:"navbar",onSubmit:this.state.newItm.content?this.handleAddItem:null},r.a.createElement("input",{type:"text",placeholder:"add task here ...",className:"navbar__input",name:"content",value:this.state.newItm.content,onChange:this.handleChange}),r.a.createElement("button",{className:"navbar__button","aria-label":"Approve"},r.a.createElement(q.a,null)))}}]),e}(r.a.Component)),J=Object(c.b)((function(t){return{list:h(t),request:v(t)}}),(function(t){return{addItemToList:function(e){return t((n=e,function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w()),t.prev=1,t.next=4,d.a.post("".concat(f).concat("/api","/list"),{data:{content:n.content,status:n.status}});case 4:t.sent,e(O()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(k(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()));var n},loadListInComponent:function(){return t(y())}}}))(Q),P=(n(137),function(){return r.a.createElement("div",{className:"main-layout"},r.a.createElement(J,null),r.a.createElement(X,null))}),V=function(){return r.a.createElement("div",null,r.a.createElement(P,null))},M=n(10),$=n(52),z=Object(M.c)({list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case g:return Object(p.a)({},t,{data:e.payload});case I:return Object(p.a)({},t,{request:{pending:!0,success:null,error:null}});case E:return Object(p.a)({},t,{request:{pending:!1,success:!0,error:null}});case j:return Object(p.a)({},t,{request:{pending:!1,success:!1,error:e.error}});default:return t}}}),G=Object(M.e)(z,Object(M.d)(Object(M.a)($.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}o.a.render(r.a.createElement((function(){return r.a.createElement(c.a,{store:G},r.a.createElement(V,null))}),null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");H?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):K(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(e,t)}))}}()},53:function(t,e,n){t.exports=n(138)},58:function(t,e,n){},59:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.6a83d3f8.chunk.js.map