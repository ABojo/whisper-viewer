(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(6),r=s.n(a),i=s(2),o=s.n(i),u=s(3),l=s(4),j=(s(12),s(0));var b=function(t){var e=t.post;return Object(j.jsxs)("div",{className:"shadow",children:[Object(j.jsxs)("div",{className:"bg-purple-500 p-5 rounded-t",children:[Object(j.jsxs)("p",{className:"text-white font-bold mb-2",children:[Object(j.jsx)("i",{className:"fas fa-user mr-2"}),e.nickname]}),Object(j.jsx)("p",{className:"text-white text-sm",children:e.location})]}),Object(j.jsx)("img",{src:e.url,alt:e.text,className:"rounded-b mx-auto"})]})};var d=function(t){var e=t.posts;return Object(j.jsx)("div",{className:"post-grid",children:e&&e.map((function(t){return Object(j.jsx)(b,{post:t},t.wid)}))})};var p=function(t){var e=t.getPosts,s=t.isLoading;return Object(j.jsxs)("div",{className:"flex justify-between items-baseline py-12",children:[Object(j.jsx)("h1",{className:"text-purple-500 text-2xl",children:"Whisper's Latest"}),Object(j.jsx)("button",{disabled:s,onClick:e,className:" rounded p-2 transition duration-200 ".concat(s?"bg-gray-200 cursor-default":"bg-purple-500 hover:bg-purple-700"),children:Object(j.jsx)("i",{className:"fas fa-sync-alt text-white text-xl"})})]})};var x=function(){return Object(j.jsx)("div",{className:"loader text-purple-500"})},h=function(t){var e=t.getHours(),s=t.getMonth()+1,n=t.getDate(),c=function(t){return 0===t?12:t>12?t-12:t}(e),a=function(t){return 1===t.toString().length?"0".concat(t):t}(t.getMinutes()),r=e>=12?"PM":"AM";return"".concat(s,"/").concat(n," ").concat(c,":").concat(a," ").concat(r)},f={getLatest:function(){var t=Object(u.a)(o.a.mark((function t(){var e,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()};var m=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),s=e[0],c=e[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],b=r[1],m=Object(n.useState)(!1),O=Object(l.a)(m,2),g=O[0],v=O[1],w=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,f.getLatest();case 3:e=t.sent,c(e.data.latestPosts),b("Last updated at ".concat(h(new Date))),v(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[]),Object(j.jsx)("div",{className:"bg-white min-h-screen",children:Object(j.jsxs)("div",{className:"w-11/12 max-w-screen-lg mx-auto",children:[Object(j.jsx)(p,{getPosts:w,isLoading:g}),g?Object(j.jsx)(x,{}):Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("p",{className:"text-lg mb-6 text-gray-400 text-center",children:i&&i}),Object(j.jsx)(d,{posts:s})]})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8ff3fe0e.chunk.js.map