(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),r=n.n(c),a=n(7),o=n.n(a),u=n(6),d=n(4);var s=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),s=o[0],l=o[1],b=Object(c.useState)([]),h=Object(d.a)(b,2),p=h[0],m=h[1],O=function(t,e,n,i){var c=e.findIndex((function(e){return e.id===t})),r=e.filter((function(e){return e.id!==t})),a=Object(u.a)(n);a.push({id:e[c].id,name:e[c].name,category:e[c].category,quantity:e[c].quantity,price:e[c].price}),r.sort(j),a.sort(j),"toCompleted"===i?(l(r),m(a)):(l(a),m(r))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Shopping List Application"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=Object(u.a)(s);e.push({id:1+Math.random(),name:n,category:"",quantity:"",price:""}),e.sort(j),l(e),r("")},children:[Object(i.jsx)("input",{value:n,onChange:function(t){return r(t.target.value)},placeholder:"Add a new item"}),Object(i.jsx)("button",{type:"submit",disabled:!n,children:"Add"})]}),Object(i.jsx)("h2",{children:"Pending Items"}),Object(i.jsx)("ul",{children:s.map((function(t){return Object(i.jsx)("li",{onClick:function(){return O(t.id,s,p,"toCompleted")},children:t.name},t.id)}))}),Object(i.jsx)("h2",{children:"Completed Items"}),Object(i.jsx)("ul",{children:p.map((function(t){return Object(i.jsx)("li",{onClick:function(){return O(t.id,p,s,"toPending")},children:t.name},t.id)}))})]})};function j(t,e){return t.name>e.name?1:-1}var l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(s,{})}),document.getElementById("root")),l()}},[[13,1,2]]]);
//# sourceMappingURL=main.faa23095.chunk.js.map