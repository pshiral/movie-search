(this["webpackJsonpplaces-react-demo"]=this["webpackJsonpplaces-react-demo"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),l=(n(10),n(3)),r=(n(4),n(0));var o=function(e){var t=e.selected;return Object(r.jsxs)("section",{className:"card",children:[Object(r.jsx)("img",{alt:t.Title,src:t.Poster}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsxs)("span",{children:["Title: ",t.Title]}),Object(r.jsxs)("span",{children:["Year: ",t.Year]})]})]})};var d=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),d=i[0],u=i[1],j=Object(c.useCallback)(function(e){var t=null;return function(){for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(null,c)}),300)}}((function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value;n.length>2?fetch("https://www.omdbapi.com/?s=".concat(n,"&apiKey=74de3445")).then((function(e){return e.json()})).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Search)||void 0===t?void 0:t.slice(0,5);a(n?e.Search.slice(0,5):[])})):a([])})),[]);return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{className:"heading",children:"Web Developer Assignment"}),Object(r.jsx)("span",{className:"by",children:"Sr Software Engineer"})]}),Object(r.jsx)("main",{children:Object(r.jsxs)("form",{autoComplete:"off",children:[Object(r.jsxs)("section",{className:"autocomplete",children:[Object(r.jsx)("input",{type:"text",name:"places",placeholder:"Search a place","data-test-id":"input",onChange:j}),Object(r.jsx)("div",{className:"options",children:null===n||void 0===n?void 0:n.map((function(e){return Object(r.jsx)("div",{onClick:function(){a([]),u(e)},children:e.Title})}))})]}),d&&Object(r.jsx)(o,{selected:d})]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),u()},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.007eb9ab.chunk.js.map