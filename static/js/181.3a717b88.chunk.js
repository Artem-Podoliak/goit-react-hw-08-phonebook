"use strict";(self.webpackChunkgoit_react_hw_06_phonebook=self.webpackChunkgoit_react_hw_06_phonebook||[]).push([[181,900],{7900:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a="SectionName_subTitle__AayaM",r=n(3329);function o(e){var t=e.title;return(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)("h2",{className:a,children:t})})}var s=n(5861),c=n(9439),i=n(7757),l=n.n(i),u=n(2791),m=n(194),d=n(5273),h=n(3173),p="ContactForm_formWrapper__ixY4D",_="ContactForm_contactSubmitForm__9hLLP",f="ContactForm_formInputLabel__S+b67",x="ContactForm_formInput__GszVU",b="ContactForm_formSubmitBtn__M5oeo";function v(){var e=(0,u.useState)(""),t=(0,c.Z)(e,2),n=t[0],a=t[1],o=(0,u.useState)(""),i=(0,c.Z)(o,2),v=i[0],C=i[1],j=(0,m.bC)().data,N=(0,m.Tn)(),g=(0,c.Z)(N,2),y=g[0],k=g[1].isLoading,w=(0,d.x0)(),L=(0,d.x0)(),F=function(){var e=(0,s.Z)(l().mark((function e(t){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!j.find((function(e){return e.name.toLowerCase()===n.toLowerCase()&&e.phone===v}))){e.next=4;break}return(0,h.vl)("This contact is already in your phonebook"),e.abrupt("return");case 4:if(!j.find((function(e){return e.phone===v}))){e.next=7;break}return(0,h.vl)("This phone number is already in your phonebook"),e.abrupt("return");case 7:return r={name:n,phone:v},e.prev=8,e.next=11,y(r);case 11:(0,h.rO)("New contact has been added in your phonebook"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(8),console.log(e.t0.message),(0,h.UW)("Something goes wrong, new contact was not created");case 18:a(""),C("");case 19:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{className:p,children:(0,r.jsxs)("form",{className:_,onSubmit:F,children:[(0,r.jsxs)("label",{className:f,htmlFor:w,children:["Name",(0,r.jsx)("input",{className:x,type:"text",name:"name",placeholder:"Type name here",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(e){a(e.currentTarget.value)},id:w,required:!0})]}),(0,r.jsxs)("label",{className:f,htmlFor:L,children:["Number",(0,r.jsx)("input",{className:x,type:"tel",name:"phone",placeholder:"Type number here",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:v,onChange:function(e){C(e.currentTarget.value)},id:L,required:!0})]}),(0,r.jsx)("button",{className:b,type:"submit",disabled:k,children:k?"Adding...":"Add contact"})]})})}var C=n(5048),j=n(544),N=function(e){return e.filter.value},g="Filter_filterWrapper__ohvAm",y="Filter_filterInputLabel__3mALI",k="Filter_filterInput__1Cysk";function w(){var e=(0,C.v9)(N),t=(0,C.I0)(),n=(0,d.x0)();return(0,r.jsx)("div",{className:g,children:(0,r.jsxs)("label",{className:y,htmlFor:n,children:["Find contacts by name",(0,r.jsx)("input",{className:k,type:"text",placeholder:"Search field",id:n,value:e,onChange:function(e){t((0,j.M)(e.currentTarget.value))}})]})})}function L(e,t){return e.name.localeCompare(t.name)}var F=n(6355),I=n(9983),T="ContactItem_contactItemWrapper__xydqZ",A="ContactItem_contactItemName__Uc1tf",S="ContactItem_contactItemNum__hm7JA",Z="ContactItem_deleteBtn__fTo+a";function M(e){var t=e.id,n=e.name,a=e.phone,o=(0,m.Nt)(),i=(0,c.Z)(o,1)[0],u=function(){var e=(0,s.Z)(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t);case 3:(0,h.rO)('"'.concat(n,'" has been deleted from your phonebook')),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),(0,h.UW)('Something goes wrong, "'.concat(n,'" was not deleted'));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)("p",{className:A,children:n}),(0,r.jsx)("a",{className:S,href:"tel:".concat(a),children:a}),(0,r.jsx)("button",{className:Z,type:"button",onClick:function(){return u(t,n)},"aria-label":"Delete contact",children:(0,r.jsx)(I.Pd.Provider,{value:{size:"2em"},children:(0,r.jsx)(F.AMf,{})})})]})}var z="ContactList_totalContactsText__UXkny",U="ContactList_totalContactsNum__jLz0W",W="ContactList_phonebookList__9M9rI",P="ContactList_listElement__2YsUl",q="ContactList_noMatchesText__aMi1H",B="ContactList_noContactsText__oNRub";function D(){var e=(0,m.bC)().data,t=(0,C.v9)(N),n=function(){return e?e.length:0},a=(0,u.useMemo)((function(){return function(){if(e){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.phone.includes(n)})).sort(L)}}}),[e,t])();return n()>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:z,children:["Contacts amount:"," ",(0,r.jsx)("span",{className:U,children:n()})]}),(0,r.jsx)("ul",{className:W,children:a.length?a.map((function(e){var t=e.id,n=e.name,a=e.phone;return(0,r.jsx)("li",{className:P,children:(0,r.jsx)(M,{id:t,name:n,phone:a})},t)})):(0,r.jsx)("p",{className:q,children:"No contact matches"})})]}):(0,r.jsx)("p",{className:B,children:"There are no contacts in your phonebook"})}function J(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{title:"Add contact"}),(0,r.jsx)(v,{}),(0,r.jsx)(o,{title:"Contacts"}),(0,r.jsx)(w,{}),(0,r.jsx)(D,{})]})}},4181:function(e,t,n){n.r(t),n.d(t,{default:function(){return a.default}});var a=n(7900)}}]);
//# sourceMappingURL=181.3a717b88.chunk.js.map