(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(6),r=n.n(a),i=n(2),u=n.n(i),o=n(3),j=n(4),l=(n(12),n(0));var p=function(t){var e=t.post;return Object(l.jsxs)("div",{className:"shadow",children:[Object(l.jsxs)("div",{className:"bg-purple-500 p-5 rounded-t",children:[Object(l.jsxs)("p",{className:"text-white font-bold mb-2",children:[Object(l.jsx)("i",{class:"fas fa-user mr-2"}),e.nickname]}),Object(l.jsx)("p",{className:"text-white text-sm",children:e.location})]}),Object(l.jsx)("img",{src:e.url,alt:e.text,className:"rounded-b mx-auto"})]})};var b=function(t){var e=t.posts;return Object(l.jsx)("div",{className:"post-grid",children:e&&e.map((function(t){return Object(l.jsx)(p,{post:t})}))})};var x=function(t){var e=t.getPosts;return Object(l.jsxs)("div",{className:"flex justify-between items-baseline py-12",children:[Object(l.jsx)("h1",{className:"text-purple-500 text-2xl",children:"Whisper's Latest"}),Object(l.jsx)("button",{onClick:e,className:"bg-purple-500 rounded p-2 hover:bg-purple-700 transition duration-200",children:Object(l.jsx)("i",{class:"fas fa-sync-alt text-white text-xl"})})]})};var d=function(){return Object(l.jsx)("div",{className:"loader text-purple-500"})},h=function(t){var e=t.getHours(),n=t.getMonth()+1,s=t.getDate(),c=function(t){return 0===t?12:t>12?t-12:t}(e),a=function(t){return 1===t.toString().length?"0".concat(t):t}(t.getMinutes()),r=e>12?"PM":"AM";return"".concat(n,"/").concat(s," ").concat(c,":").concat(a," ").concat(r)},f={getLatest:function(){var t=Object(o.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()};var m=function(){var t=Object(s.useState)(""),e=Object(j.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],p=r[1],m=Object(s.useState)(!1),O=Object(j.a)(m,2),v=O[0],g=O[1],w=function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,f.getLatest();case 3:e=t.sent,c(e.data.latestPosts),p("Last updated at ".concat(h(new Date))),g(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){w()}),[]),Object(l.jsx)("div",{className:"bg-white min-h-screen",children:Object(l.jsxs)("div",{className:"w-11/12 max-w-screen-lg mx-auto",children:[Object(l.jsx)(x,{getPosts:w}),v?Object(l.jsx)(d,{}):Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("p",{className:"text-lg mb-6 text-gray-400 text-center",children:i&&i}),Object(l.jsx)(b,{posts:n})]})]})})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6bb8dc5e.chunk.js.map