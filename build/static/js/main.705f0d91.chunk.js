(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(6),c=n.n(r),i=n(2),u=n.n(i),o=n(3),l=n(4),j=(n(12),{getLatest:function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOwner:function(){var e=Object(o.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),b=n(0);var p=function(e){var t=e.name,n=e.value;return Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h2",{className:"text-purple-200 text-sm uppercase tracking-widest font-bold",children:t}),Object(b.jsx)("p",{className:"text-white text-sm",children:n})]})},x=function(e){var t=new Date(e),n=t.getHours(),a=t.getMonth()+1,s=t.getDate(),r=function(e){return 0===e?12:e>12?e-12:e}(n),c=function(e){return 1===e.toString().length?"0".concat(e):e}(t.getMinutes()),i=n>=12?"PM":"AM";return"".concat(a,"/").concat(s," ").concat(r,":").concat(c," ").concat(i)},d=function(e){return 15===e?"15-17":18===e?"18-20":21===e?"21-25":26===e?"26-29":30===e?"30-35":36===e?"36-44":45===e?"45+":e};var f=function(e){var t=e.owner,n=e.post,a=e.toggleDropdown;return Object(b.jsxs)("div",{className:"bg-purple-500 p-5 pt-0 absolute top-0 left-0 w-full max-w-100 flex justify-between items-end",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{name:"Age",value:d(t.age)}),Object(b.jsx)(p,{name:"Gender",value:t.gender}),Object(b.jsx)(p,{name:"Location",value:n.location}),Object(b.jsx)(p,{name:"Rating",value:"".concat(t.rating.average.toFixed(2)," - ").concat(t.rating.total," Chats")}),Object(b.jsx)(p,{name:"Replies",value:n.replies}),Object(b.jsx)(p,{name:"Views",value:n.viewCount}),Object(b.jsx)(p,{name:"Timestamp",value:x(new Date(n.ts))})]}),Object(b.jsx)("button",{onClick:a,children:Object(b.jsx)("i",{className:"text-white text-lg fas fa-arrow-up"})})]})};var O=function(e){var t=e.classes;return Object(b.jsx)("div",{className:"loader ".concat(t&&t)})};var h=function(e){var t=e.post,n=Object(a.useState)(null),s=Object(l.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(!1),p=Object(l.a)(i,2),x=p[0],d=p[1],h=Object(a.useState)(!1),m=Object(l.a)(h,2),v=m[0],w=m[1],g=function(){var e=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,j.getOwner(t.wid);case 3:n=e.sent,w(!1),c(n.data.owner);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){d(!x)},k=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=3;break}return e.next=3,g();case 3:N();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"shadow relative",children:[Object(b.jsxs)("div",{className:"bg-purple-500 p-5 rounded-t flex justify-between items-end",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"text-white font-bold mb-2",children:[Object(b.jsx)("i",{className:"fas fa-user mr-2"}),t.nickname]})}),!x&&Object(b.jsx)("button",{onClick:k,children:Object(b.jsx)("i",{class:"text-white text-lg fas fa-arrow-down"})})]}),Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("img",{src:t.url,alt:t.text,className:"rounded-b mx-auto"}),x&&Object(b.jsx)(f,{post:t,owner:r,toggleDropdown:N})]}),v&&Object(b.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(b.jsx)(O,{classes:"text-white"})})]})};var m=function(e){var t=e.posts;return Object(b.jsx)("div",{className:"post-grid",children:t&&t.map((function(e){return Object(b.jsx)(h,{post:e},e.wid)}))})};var v=function(e){var t=e.getPosts,n=e.isLoading;return Object(b.jsxs)("div",{className:"flex justify-between items-baseline py-12",children:[Object(b.jsx)("h1",{className:"text-purple-500 text-2xl",children:"Whisper's Latest"}),Object(b.jsx)("button",{disabled:n,onClick:t,className:" rounded p-2 transition duration-200 ".concat(n?"bg-gray-200 cursor-default":"bg-purple-500 hover:bg-purple-700"),children:Object(b.jsx)("i",{className:"fas fa-sync-alt text-white text-xl"})})]})};var w=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(l.a)(r,2),i=c[0],p=c[1],d=Object(a.useState)(!1),f=Object(l.a)(d,2),h=f[0],w=f[1],g=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,j.getLatest();case 3:t=e.sent,s(t.data.latestPosts),p("Last updated at ".concat(x(new Date))),w(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g()}),[]),Object(b.jsx)("div",{className:"bg-white min-h-screen",children:Object(b.jsxs)("div",{className:"w-11/12 max-w-screen-lg mx-auto",children:[Object(b.jsx)(v,{getPosts:g,isLoading:h}),h?Object(b.jsx)(O,{classes:"text-purple-500"}):Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("p",{className:"text-lg mb-6 text-gray-400 text-center",children:i&&i}),Object(b.jsx)(m,{posts:n})]})]})})};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.705f0d91.chunk.js.map