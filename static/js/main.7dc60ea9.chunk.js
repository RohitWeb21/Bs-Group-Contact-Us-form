(this["webpackJsonpbs-contact-form"]=this["webpackJsonpbs-contact-form"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(6),l=a.n(n),r=(a(11),a.p+"static/media/bs_group_logo2.c99b91ce.png"),i=a(3),m=(a(12),a(2)),o=a(4),j=function(){var e=Object(c.useState)({firstName:"",lastName:"",contactNumber:"",email:""}),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({}),l=Object(o.a)(n,2),r=l[0],j=(l[1],Object(c.useState)([])),b=Object(o.a)(j,2),d=b[0],u=b[1];return{handleInput:function(e){var t=e.target,c=t.name,n=t.value;s(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},c,n)))},userValues:a,errors:r,handleSubmit:function(e){e.preventDefault();var t=Object(m.a)(Object(m.a)({},a),{},{id:(new Date).getTime().toString()});u(Object(m.a)(Object(m.a)({},d),{},{newRecord:t})),console.log(d),a.firstName.trim()?a.firstName.length<3?r.firstName="Enter a valid first name ":r.firstName="":r.firstName="First name is required",a.lastName.trim()?a.lastName.length<=5?r.lastName="Enter a valid last name ":r.lastName="":r.lastName="First name is required ",""==a.contactNumber?r.contactNumber="Contact Number Is Required ":a.contactNumber.length<10?r.contactNumber="Contact number must have 10 digits":a.contactNumber.length>12?r.contactNumber="Enter valid contact number":r.contactNumber="",""==a.email?r.email="Email is required":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.email)?r.email="":r.email="Email Address Is Invalid",console.log(r.email)}}},b=a(0),d=function(){var e=j(),t=e.handleInput,a=e.userValues,c=e.errors,s=e.handleSubmit;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("form",{action:"",onSubmit:s,className:"contact_form_inner_bg  ",autoComplete:"off",children:Object(b.jsxs)("div",{className:" container col-12 d-flex flex-wrap align-content-center justify-content-center  ",children:[Object(b.jsxs)("div",{className:"First_last_name col-12 d-flex flex-wrap",children:[Object(b.jsxs)("div",{className:"col-md-6 col-12 text-center ",children:[Object(b.jsx)("input",Object(i.a)({className:"form_input_fill_name",type:"text",name:"firstName",autoComplete:"off",value:a.firstName,placeholder:" First Name",onChange:t},"autoComplete","false")),c.firstName&&Object(b.jsxs)("label",{name:"firstName",className:"error-massage",children:[c.firstName&&Object(b.jsx)("span",{className:"color-red",children:" * "}),c.firstName]})]}),Object(b.jsxs)("div",{className:"col-md-6 col-12 text-center ",children:[Object(b.jsx)("input",{className:"form_input_fill_name",type:"text",value:a.lastName,name:"lastName",placeholder:" Last Name",onChange:t,autoComplete:"false"}),c.lastName&&Object(b.jsxs)("label",{name:"lastName",className:"error-massage",children:[c.lastName&&Object(b.jsx)("span",{className:"color-red",children:" * "}),c.lastName]})]})]}),Object(b.jsxs)("div",{className:"Contact_Email_section",children:[Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("input",{className:"form_input_fill",type:"Number",value:a.contactNumber,name:"contactNumber",placeholder:" Contact No",onChange:t,autoComplete:"false"}),Object(b.jsx)("div",{className:"error-massage",children:c.contactNumber&&Object(b.jsxs)("label",{name:"contactNumber",className:"error-massage-2",children:[c.contactNumber&&Object(b.jsx)("span",{className:"color-red",children:" * "}),c.contactNumber]})})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("input",{className:"form_input_fill",type:"text",value:a.email,name:"email",placeholder:" Email",onChange:t,autoComplete:"false"}),Object(b.jsx)("div",{className:"error-massage",children:c.email&&Object(b.jsxs)("label",{name:"email",className:"error-massage-2",children:[c.email&&Object(b.jsx)("span",{className:"color-red",children:" * "}),c.email]})})]})]}),Object(b.jsx)("div",{className:"button_div col-12 d-flex flex-wrap align-item-center justify-content-center",children:Object(b.jsx)("button",{type:"submit",className:"button effect",children:"Submit"})})]})})})},u=(a(14),function(){return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)("section",{className:"contact_form_main_section d-flex flex-wrap",children:[Object(b.jsxs)("div",{className:"contact_heading_div col-12",children:[Object(b.jsxs)("h2",{className:"contact_heading text-center",children:[Object(b.jsx)("span",{className:"contact_us_Font_size",children:" Contact Us"})," "]}),Object(b.jsxs)("div",{className:"col-12 ",children:[Object(b.jsx)("img",{src:r,alt:"",className:"bs_logo_bg"}),Object(b.jsxs)("span",{className:"bs_logo_text",children:[Object(b.jsx)("span",{className:"text-white",children:" Bs "}),Object(b.jsx)("span",{className:"text-blue",children:"Group"})]})]})]}),Object(b.jsx)("div",{className:"contact_form_main_div",children:Object(b.jsx)(d,{})})]})})}),N=function(){return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.7dc60ea9.chunk.js.map