(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(170),s=n(223),c=(n(407),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.location;return o.a.createElement(l.a,{location:t},o.a.createElement(s.a,{data:e}))},t}(i.Component)),u="340842599"},158:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},161:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(157),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(25);n.d(t,"waitForRouteChange",function(){return c.c});var u=n(158),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(35);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},165:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},166:function(e,t,n){},168:function(e,t,n){e.exports={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return n(169)},titleLogoShow:!0}},169:function(e,t,n){e.exports=n.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},170:function(e,t,n){"use strict";var a=n(165),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(183),c=n.n(s),u=n(161),d=n(163),m=n(173),p=(n(166),n(7)),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© 2018 Junho Baik"),i.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"<junhobaik@gmail.com>")),i.a.createElement("div",{className:"submenu"}))},t}(r.Component),g=n(168),E=n.n(g),y=(n(186),n(187),n(26),n(50),n(181),n(182),n(188)),v=new(n.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),w=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.name.replace(/ /gi,"+")+":"+e.bold.toString()}).join("|").toString(),b=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var a;a=n?n.href:E.a.siteUrl;var r=E.a.titleLogoShow?{display:"inline-block"}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:E.a.description},{name:"og:type",content:"website"},{name:"og:title",content:E.a.title},{name:"og:description",content:E.a.description},{name:"og:image",content:E.a.titleLogo()},{name:"og:url",content:a}]},i.a.createElement("link",{rel:"canonical",content:a}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"})),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement(u.Link,{to:"/"},i.a.createElement("div",{className:"logo-img",style:r},i.a.createElement("img",{src:E.a.titleLogo(),alt:"logo"})),i.a.createElement("h1",null,E.a.title))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(u.Link,{to:"/"},i.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"tags"},i.a.createElement(u.Link,{to:"/taglist"},i.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Tags"))),i.a.createElement("div",{className:"search"},i.a.createElement(u.Link,{to:"/search"},i.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Search"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(h,null))},data:a})});b.propTypes={children:l.a.node.isRequired};t.a=b},207:function(e,t,n){},209:function(e,t,n){},223:function(e,t,n){"use strict";n(80),n(50);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(157),s=n.n(l),c=n(189),u=n.n(c),d=n(251),m=n.n(d),p=(n(207),n(163)),f=n(224),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,n=u()(e,"frontmatter.title")||t,a=e.excerpt,r=e.frontmatter.date,i=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?o.a.createElement(s.a,{to:"/tags/"+m.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",o.a.createElement("span",{className:"tag-name"},e)):null});return o.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},o.a.createElement(s.a,{to:t},o.a.createElement("h2",{className:"title"},n)),o.a.createElement("span",{className:"excerpt"},a),o.a.createElement("div",{className:"sub"},o.a.createElement("div",{className:"date"},o.a.createElement(p.a,{icon:f.a}),o.a.createElement("span",null,r)),o.a.createElement("div",{className:"tags-list"},i)))},t}(i.Component),g=(n(209),n(173)),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){n.state.currentPostCnt<n.props.data.length&&window.scrollY+window.innerHeight>=n.state.loadElPoint&&!n.state.isLoading&&(n.setState({isLoading:!0}),setTimeout(function(){n.setState({currentPostCnt:n.state.currentPostCnt+n.state.loadPostCnt,isLoading:!1}),n.setLoadElPoint()},1500))},n.setLoadElPoint=function(){n.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},n.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},n.render=function(){var e=this,t=this.props.data,n=this.props.title||null,a=t.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,n){return o.a.createElement(h,{key:t.node.fields.slug,post:t.node,index:n,showCnt:e.state.currentPostCnt})});return o.a.createElement("div",{id:"PostList"},n?o.a.createElement("h1",{className:"list-title"},n):null,o.a.createElement("div",{className:"list"},a),o.a.createElement("div",{className:"load"},o.a.createElement("div",{className:"loading"},o.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},o.a.createElement(p.a,{className:"blink",icon:g.e,size:"2x"}))),o.a.createElement("div",{className:"load-point"})))},t}(i.Component);t.a=E},407:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-29d67002e73fa30f6f15.js.map