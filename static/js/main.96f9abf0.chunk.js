(this.webpackJsonprobonet=this.webpackJsonprobonet||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),s=n.n(a),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),d=(n(13),n(0)),b=function(e){var t=e.name,n=e.email,c=e.id;e.image;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c)}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email,image:t[n].image},n)}));return Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)("div",{children:n})})},u=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Droids",onChange:t})})},f=(n(15),function(e){return Object(d.jsx)("div",{className:"parent",children:Object(d.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"},children:e.children})})}),g=(n(16),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"Droid Network"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{robots:c})})]})}):Object(d.jsx)("h1",{className:"tc f1",children:"Loading"})}}]),n}(c.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(17);s.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.96f9abf0.chunk.js.map