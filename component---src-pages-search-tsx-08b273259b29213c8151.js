(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{pcw8:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return i}));t("Z2Ku"),t("L9s1");var n=t("q1tI"),r=t.n(n),c=t("IP2g"),l=t("wHSu"),o=t("VXBa"),s=t("H8eV"),u=t("uP4m"),i=(t("Tl1Y"),"3493492937");a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=Object(n.useState)(""),i=t[0],m=t[1],p=Object(n.useState)(!0),d=p[0],w=p[1],f=a.filter((function(e){var a=e.node,t=a.frontmatter,n=a.rawMarkdownBody,r=t.title,c=i.toLocaleLowerCase();return!(d||!n.toLocaleLowerCase().includes(c))||r.toLocaleLowerCase().includes(c)}));return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Search"}),r.a.createElement("div",{id:"Search"},r.a.createElement("div",{className:"search-inner-wrap"},r.a.createElement("div",{className:"input-wrap"},r.a.createElement(c.a,{icon:l.j}),r.a.createElement("input",{type:"text",name:"search",id:"searchInput",value:i,placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(e){m(e.currentTarget.value)}}),r.a.createElement("div",{className:"search-toggle"},r.a.createElement("span",{style:{opacity:d?.8:.15},onClick:function(){w(!0)}},"in Title"),r.a.createElement("span",{style:{opacity:d?.15:.8},onClick:function(){w(!1)}},"in Title+Content"))),""===i||f.length?null:r.a.createElement("span",{className:"no-result"},"No search results"),r.a.createElement(u.a,{posts:""===i?a:f}))))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-08b273259b29213c8151.js.map