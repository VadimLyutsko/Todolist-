(this["webpackJsonpMy-ToDo"]=this["webpackJsonpMy-ToDo"]||[]).push([[0],{63:function(e,t,a){e.exports=a(73)},68:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),o=(a(68),a(43)),l=a(11),s=a(17),u=a(16),d=(a(69),a(122)),m=a(110),f=a(111),b=function(e){var t=e.addItem,a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(!1),s=Object(u.a)(l,2),b=s[0],j=s[1],O=function(){var e=r.trim();""!==e?t(e):j(!0),o("")};return i.a.createElement("div",null,i.a.createElement(d.a,{style:{marginBottom:"20px"},label:"New here",value:r,onChange:function(e){b&&j(!1),o(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key&&O()},className:b?"error":"",placeholder:"Touch me :)",error:b,helperText:b&&"Title is required!"}),i.a.createElement(m.a,{onClick:O},i.a.createElement(f.a,{fontSize:"small"})))},j=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e.title),l=Object(u.a)(o,2),s=l[0],m=l[1];return c?i.a.createElement(d.a,{value:s,autoFocus:!0,onBlur:function(){r(!1),e.changeTitle(s)},onChange:function(e){m(e.currentTarget.value)}}):i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.title)},O=a(112),p=a(123),E=a(109),h=a(114),v=a(76),T=a(115),g=a(113),k=function(e){var t=e.tasks.length?i.a.createElement(E.a,null,e.tasks.map((function(t){return i.a.createElement(O.a,{key:t.id,className:t.isDone?"isDone":"notIsDone"},i.a.createElement(p.a,{color:"default",onChange:function(a){return e.changeTaskStatus(t.id,a.currentTarget.checked,e.todoListId)},checked:t.isDone}),i.a.createElement(j,{title:t.title,changeTitle:function(a){e.changeTaskTitle(t.id,a,e.todoListId)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTask(t.id,e.todoListId)}},i.a.createElement(g.a,null)))}))):i.a.createElement("span",null,"\u0422\u044b \u0432\u0441\u0451 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b, \u0442\u0443\u043f\u0438\u0446\u0430!!!"),a=function(t){return function(){return e.changeTodoListFilter(t,e.todoListId)}};return i.a.createElement("div",null,i.a.createElement(h.a,{variant:"h5",align:"center"},i.a.createElement(j,{title:e.title,changeTitle:function(t){e.changeTodoListTitle(t,e.todoListId)}}),i.a.createElement(v.a,{variant:"text",onClick:function(){return e.removeTodoList(e.todoListId)}},"\ud83d\udca9")),i.a.createElement("div",null,i.a.createElement(b,{addItem:function(t){e.addTask(t,e.todoListId)}})),t,i.a.createElement("div",null,i.a.createElement(T.a,{style:{display:"flex",justifyContent:"space-around"},disableElevation:!0,variant:"contained",size:"small"},i.a.createElement(v.a,{style:{marginRight:"3px",borderRadius:"10px"},color:"all"===e.filter?"primary":"secondary",onClick:a("all")},"All"),i.a.createElement(v.a,{style:{marginRight:"3px",borderRadius:"10px"},color:"active"===e.filter?"primary":"secondary",onClick:a("active")},"Active"),i.a.createElement(v.a,{style:{marginRight:"3px",borderRadius:"10px"},color:"completed"===e.filter?"primary":"secondary",onClick:a("completed")},"Completed"))))},y=a(124),L=a(116),D=a(75),C=a(117),S=a(118),x=a(120),I=a(119);var w=function(){var e,t=Object(y.a)(),a=Object(y.a)(),c=Object(n.useState)([{id:t,todoListTitle:"What to do",filter:"all"},{id:a,todoListTitle:"What to buy",filter:"completed"}]),r=Object(u.a)(c,2),d=r[0],f=r[1],j=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(y.a)(),title:"Milk",isDone:!0},{id:Object(y.a)(),title:"HTML&CSS",isDone:!0},{id:Object(y.a)(),title:"HTML&CSS",isDone:!0}]),Object(s.a)(e,a,[{id:Object(y.a)(),title:"2222&CSS",isDone:!0},{id:Object(y.a)(),title:"Trees",isDone:!0},{id:Object(y.a)(),title:"Grass",isDone:!0}]),e)),O=Object(u.a)(j,2),p=O[0],E=O[1],T=function(e,t){var a=Object(l.a)({},p);a[t]=a[t].filter((function(t){return t.id!==e})),E(a)},g=function(e,t){var a={id:Object(y.a)(),title:e,isDone:!1};E(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},t,[a].concat(Object(o.a)(p[t])))))},w=function(e,t,a){E(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},a,p[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{isDone:t}):a})))))},R=function(e,t,a){E(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},a,p[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{title:t}):a})))))},M=function(e){f(d.filter((function(t){return t.id!==e}))),delete p[e]},B=function(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{filter:e}):a})))},N=function(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{todoListTitle:e}):a})))},W=function(e,t){var a=e;return"active"===t&&(a=e.filter((function(e){return!e.isDone}))),"completed"===t&&(a=e.filter((function(e){return e.isDone}))),a},A=d.map((function(e){return i.a.createElement(L.a,{item:!0,key:e.id},i.a.createElement(D.a,{variant:"outlined",style:{width:"270px",padding:"20px"}},i.a.createElement(k,{todoListId:e.id,filter:e.filter,tasks:W(p[e.id],e.filter),title:e.todoListTitle,removeTodoList:M,removeTask:T,changeTodoListFilter:B,addTask:g,changeTaskStatus:w,changeTaskTitle:R,changeTodoListTitle:N})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(C.a,{position:"static"},i.a.createElement(S.a,{style:{justifyContent:"space-between"}},i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(I.a,null)),i.a.createElement(h.a,{variant:"h6"},"Todolists"),i.a.createElement(v.a,{color:"inherit",variant:"outlined"},"Login"))),i.a.createElement(x.a,{fixed:!0},i.a.createElement(L.a,{container:!0},i.a.createElement(b,{addItem:function(e){var t=Object(y.a)(),a={id:t,todoListTitle:e,filter:"all"};f([].concat(Object(o.a)(d),[a])),E(Object(l.a)(Object(l.a)({},p),{},Object(s.a)({},t,[])))}})),i.a.createElement(L.a,{container:!0,spacing:5},A)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(121),M=a(57),B=Object(M.a)({palette:{primary:{main:"#1b5e20"},secondary:{main:"#455a64"}}});r.a.render(i.a.createElement(R.a,{theme:B},i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.50469c7c.chunk.js.map