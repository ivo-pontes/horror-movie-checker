(this.webpackJsonphorror=this.webpackJsonphorror||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/not-found.96c7c39a.png"},37:function(e,t,a){e.exports=a(56)},42:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=a(61);a(42);var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center "},"Horror Movie Checker"),r.a.createElement(o.a,{className:"justify-content-center",activeKey:"/"},r.a.createElement(o.a.Item,null,r.a.createElement(o.a.Link,{href:"/"},"Home")),r.a.createElement(o.a.Item,null,r.a.createElement(o.a.Link,{href:"/about"},"About")),r.a.createElement(o.a.Item,null,r.a.createElement(o.a.Link,{href:"link-2"},"Movies"))))},s=a(19),i=a.n(s),u=a(30),E=a(16),f=a(58),p=a(59),h=a(60),g=(a(46),a(62)),v=a(57),b=a(31);a(47);var y=function(e){var t=e.title,a=e.synopsis,n=e.year,c=e.image,l=e.trailer,o=e.opacity;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{width:"20rem",height:"38.125rem",margin:"1em 0em",opacity:"".concat(o)}},r.a.createElement(g.a.Img,{variant:"top",src:c}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,{style:{minHeight:"2em"}},t)),r.a.createElement(v.a,{className:"list-group-flush"},r.a.createElement(b.a,null),r.a.createElement(b.a,null,r.a.createElement("b",null,"Year: ")," ",n),r.a.createElement(b.a,{className:"text-justify",style:{height:"13.563rem"}},a)),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Link,{href:l,target:"_blank"},"Trailer"))))},d=a(32),k=a.n(d);var j=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(E.a)(l,2),m=o[0],s=o[1],g=Object(n.useState)([]),v=Object(E.a)(g,2),b=v[0],d=v[1];return Object(n.useEffect)((function(){console.log("Effect has ben run"),function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=11;break}return e.next=3,fetch("https://tv-v2.api-fetch.website/movies/1?sort=rating&order=-1&genre=all&keywords="+m);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),d(a),e.next=12;break;case 11:console.log("Nothing yet");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),s(a)}},r.a.createElement("input",{className:"search-bar",type:"text",value:a,onChange:function(e){c(e.target.value),console.log(a)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search")),r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"justify-content-md-center movie-list"},b.map((function(e,t){var a=1;a=e.genres.includes("horror")?1:.5;var n="";return n=e.images.fanart?e.images.fanart:k.a,r.a.createElement(h.a,{md:"auto",key:e.imdb_id+t},r.a.createElement(y,{title:e.title,synopsis:e.synopsis,year:e.year,image:n,trailer:e.trailer,opacity:a}))})))))};a(49);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-main",style:{backgroundColor:"#20232a"}},r.a.createElement("div",{className:"App"},r.a.createElement(m,null)),r.a.createElement(j,null)))};var N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))},O=(a(50),a(33)),w=a(9);l.a.render(r.a.createElement(O.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0,component:x}),r.a.createElement(w.a,{path:"/about",component:N}))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8edf670b.chunk.js.map