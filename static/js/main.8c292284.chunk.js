(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{11:function(e,t,s){},12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(5),r=s.n(a),l=(s(11),s(3)),i=s(1),o=(s(12),s(6)),j=s(0),d=function(e){var t=Object.assign({},e);return Object(j.jsxs)("svg",Object(i.a)(Object(i.a)({width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:[Object(j.jsx)("path",{d:"M0.294983 1.70498L4.87498 6.29498L0.294983 10.885L1.70498 12.295L7.70498 6.29498L1.70498 0.294983L0.294983 1.70498Z",fill:"url(#paint0_linear_3:12)"}),Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"paint0_linear_3:12",x1:"0.294983",y1:"12.295",x2:"11.024",y2:"5.66984",gradientUnits:"userSpaceOnUse",children:[Object(j.jsx)("stop",{stopColor:"#237FFA"}),Object(j.jsx)("stop",{offset:"1",stopColor:"#E32283"})]})})]}))},b=function(e){var t=Object.assign({},e);return Object(j.jsx)("svg",Object(i.a)(Object(i.a)({width:"12",height:"8",viewBox:"0 0 12 8",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Object(j.jsx)("path",{d:"M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z"})}))},h=function(e){var t=Object.assign({},e);return Object(j.jsx)("svg",Object(i.a)(Object(i.a)({width:"18",height:"25",viewBox:"0 0 18 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Object(j.jsx)("path",{d:"M9 3.375V0L4.5 4.5L9 9V5.625C12.7238 5.625 15.75 8.65125 15.75 12.375C15.75 13.5112 15.4687 14.5913 14.9625 15.525L16.605 17.1675C17.4825 15.7838 18 14.1412 18 12.375C18 7.4025 13.9725 3.375 9 3.375ZM9 19.125C5.27625 19.125 2.25 16.0987 2.25 12.375C2.25 11.2388 2.53125 10.1587 3.0375 9.225L1.395 7.5825C0.5175 8.96625 0 10.6088 0 12.375C0 17.3475 4.0275 21.375 9 21.375V24.75L13.5 20.25L9 15.75V19.125Z",fill:"black"})}))},O=function(e){var t=Object.assign({},e);return Object(j.jsx)("svg",Object(i.a)(Object(i.a)({width:"19",height:"22",viewBox:"0 0 19 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Object(j.jsx)("path",{d:"M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z",fill:"black"})}))};function u(e,t,s){var c="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";t&&(n+="0123456789"),s&&(n+="#$%&!*-_?<>");for(var a=n.length,r=0;r<e;r++)c+=n.charAt(Math.floor(Math.random()*a));return c}var x=function(e,t,s){return console.log(""===e?0:parseInt(e),e,t,s),u(""===e?0:parseInt(e),t,s)};var v=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(!1),r=Object(l.a)(a,2),v=r[0],f=r[1],g=Object(c.useState)("16"),m=Object(l.a)(g,2),p=m[0],w=m[1],C=Object(c.useState)(!0),N=Object(l.a)(C,2),k=N[0],L=N[1],M=Object(c.useState)(!0),V=Object(l.a)(M,2),S=V[0],y=V[1],H=Object(c.useState)(u(p,k,S)),Z=Object(l.a)(H,2),B=Z[0],I=Z[1],P=function(e){var t=Object(o.passwordStrength)(e);switch(t.value){default:return Object(i.a)(Object(i.a)({},t),{},{amount:5,color:"#991900",leftoverColor:"#540e00"});case"Weak":return Object(i.a)(Object(i.a)({},t),{},{amount:40,color:"#ed4039",leftoverColor:"#a62924"});case"Medium":return Object(i.a)(Object(i.a)({},t),{},{amount:60,color:"#e89d10",leftoverColor:"#996b00"});case"Strong":return Object(i.a)(Object(i.a)({},t),{},{amount:100,color:"#108f07",leftoverColor:"#0a5e04"})}}(B);return console.log(v,P.value),Object(j.jsxs)("div",{className:"root",children:[Object(j.jsx)("div",{className:"main-blue",children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("img",{src:"/img/logo.png",alt:"",className:"logo-img"}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h1",{children:"Generate a secure password"}),Object(j.jsx)("p",{children:"Online password generator"})]}),Object(j.jsxs)("div",{className:"password",children:[Object(j.jsxs)("div",{className:"password-input flex space-between align-center",children:[Object(j.jsx)("input",{placeholder:"Password...",value:B,onChange:function(e){return I(e.target.value)}}),Object(j.jsxs)("div",{className:"password-input-icons flex",children:[Object(j.jsx)(h,{onClick:function(e){return x(p,k,S)}}),Object(j.jsx)(O,{onClick:function(e){!function(e){navigator.clipboard.writeText(e)}(B),f(!0),setTimeout((function(){f(!1)}),3e3)}})]}),v&&Object(j.jsx)("div",{className:"tooltip",children:Object(j.jsx)("div",{className:"copy",children:"Copied!"})})]}),Object(j.jsxs)("div",{className:"password-input-border",children:[Object(j.jsx)("div",{className:"strength-border-amount",style:{width:"".concat(P.amount,"%"),backgroundColor:P.color}}),Object(j.jsx)("div",{className:"strength-border-leftover",style:{width:"".concat(100-P.amount,"%"),backgroundColor:P.leftoverColor}})]})]}),Object(j.jsx)("div",{className:"filter-btn-border-wrap",onClick:function(e){n(!s)},children:Object(j.jsxs)("div",{className:"filter-btn flex space-between align-center ".concat(s?"filters-btn-selected":"filters-btn-unselected"),children:[Object(j.jsx)("div",{children:"Filters"}),s?Object(j.jsx)(b,{}):Object(j.jsx)(d,{})]})}),s&&Object(j.jsxs)("div",{className:"filters flex align-center",children:[Object(j.jsxs)("div",{className:"length-filter",children:[Object(j.jsx)("div",{className:"length-filter-label",children:"Password length"}),Object(j.jsx)("div",{className:"length-filter-input-border-wrap",children:Object(j.jsx)("input",{className:"length-filter-input",value:p,onChange:function(e){e.target.value.length>3?alert("Cannot exceed more than 3 digits"):(I(x(e.target.value,k,S)),w(e.target.value))}})})]}),Object(j.jsxs)("div",{className:"checkbox-container align-center",onClick:function(e){I(x(p,!k,S)),L(!k)},children:[Object(j.jsx)("div",{className:"".concat(k?"checkbox":"checkbox-unselected")}),Object(j.jsx)("span",{children:"Include numbers"})]}),Object(j.jsxs)("div",{className:"checkbox-container align-center",onClick:function(e){I(x(p,k,!S)),y(!S)},children:[Object(j.jsx)("div",{className:"".concat(S?"checkbox":"checkbox-unselected")}),Object(j.jsx)("span",{children:"Include symbols"})]})]})]})]})}),Object(j.jsx)("div",{className:"main-white",children:Object(j.jsxs)("div",{className:"main strong-passwords",children:[Object(j.jsx)("h2",{children:"Make strong passwords"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Do not use the same password for multiple websites."}),Object(j.jsx)("li",{children:"Passwords should be at least 8 characters."}),Object(j.jsx)("li",{children:"Passwords should contain at least: 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number."}),Object(j.jsx)("li",{children:"Avoid passwords that contain identifiable information such as names and birthdays."})]})]})})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c292284.chunk.js.map