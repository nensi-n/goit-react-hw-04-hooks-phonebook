(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(10),o=n.n(r),i=(n(16),n(3)),s=n(8),u=n(1),b=n(7),l=(n(17),n(18),n(0));var j=function(t){var e=t.onSubmite,n=Object(c.useState)({name:"",number:""}),a=Object(b.a)(n,2),r=a[0],o=a[1],s=function(t){var e=t.target,n=e.name,c=e.value;o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},n,c))}))};return Object(l.jsxs)("form",{id:"contact",onSubmit:function(t){t.preventDefault(),e(r),o({name:"",number:""})},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("p",{children:"Name:"}),Object(l.jsx)("input",{className:"input-field",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r.name,onChange:s})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("p",{children:"Number:"}),Object(l.jsx)("input",{className:"input-field",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r.number,onChange:s})]}),Object(l.jsx)("button",{type:"submit",className:"submit-button",children:"Add contact"})]})};n(20);var m=function(t){var e=t.contacts,n=t.onDelete;return Object(l.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("p",{children:["Name: ",t.name]}),Object(l.jsxs)("p",{children:["Number: ",t.number]}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},d=(n(21),function(t){var e=t.children;return Object(l.jsx)("div",{className:"container",children:e})}),O=n(11),f=n.n(O);n(30);var h=function(t){var e=t.value,n=t.onChange;return Object(l.jsx)("input",{type:"text",name:"filter",onChange:n,value:e})};var p=function(){var t,e,n=Object(c.useState)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""}),a=Object(b.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&o((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:e})}))}),[]),Object(l.jsxs)(d,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(j,{onSubmite:function(t){r.contacts.some((function(e){return e.name===t.name}))?alert("Contact alredy exists"):function(t){var e=JSON.parse(localStorage.getItem("contacts")),n=Object(u.a)({id:f.a.generate()},t);e?localStorage.setItem("contacts",JSON.stringify([].concat(Object(s.a)(e),[n]))):localStorage.setItem("contacts",JSON.stringify([].concat(Object(s.a)(r.contacts),[n]))),o((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:[].concat(Object(s.a)(t.contacts),[n])})}))}(t)}}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(h,{value:r.filter,onChange:function(t){var e=t.target,n=e.name,c=e.value;o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},n,c))}))}}),Object(l.jsx)(m,{onDelete:function(t){var e=r.contacts.filter((function(e){return e.id!==t}));o((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:e})})),localStorage.setItem("contacts",JSON.stringify(e))},contacts:(t=r.contacts,e=r.filter,t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())})))})]})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.25871342.chunk.js.map