(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(9),c=n.n(s),u=n(8),o=n(1),i=n.n(o),l=n(3),p=n(4),j=(n(15),{getLatest:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts".concat(t?"?scroll_id=".concat(t):""));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getOwner:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchPosts:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts/search/".concat(t).concat(n?"?scroll_id=".concat(n):""));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),b=n(0);var d=function(e){var t=e.name,n=e.value;return Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h2",{className:"text-purple-200 text-sm uppercase tracking-widest font-bold",children:t}),Object(b.jsx)("p",{className:"text-white text-sm",children:n})]})},x=function(e){var t=new Date(e),n=t.getHours(),r=t.getMonth()+1,a=t.getDate(),s=function(e){return 0===e?12:e>12?e-12:e}(n),c=function(e){return 1===e.toString().length?"0".concat(e):e}(t.getMinutes()),u=n>=12?"PM":"AM";return"".concat(r,"/").concat(a," ").concat(s,":").concat(c," ").concat(u)},f=function(e){return 15===e?"15-17":18===e?"18-20":21===e?"21-25":26===e?"26-29":30===e?"30-35":36===e?"36-44":45===e?"45+":e},h=function(e){return"".concat(e.substring(0,1).toUpperCase()).concat(e.slice(1))};var O=function(e){var t=e.owner,n=e.post,r=e.toggleDropdown;return Object(b.jsxs)("div",{className:"bg-purple-500 p-5 pt-0 absolute top-0 left-0 w-full max-w-100 flex justify-between items-end",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{name:"Age",value:f(t.age)}),Object(b.jsx)(d,{name:"Gender",value:h(t.gender)}),Object(b.jsx)(d,{name:"Location",value:n.location}),Object(b.jsx)(d,{name:"Rating",value:"".concat(t.rating.average.toFixed(2)," - ").concat(t.rating.total," Chats")}),Object(b.jsx)(d,{name:"Replies",value:n.replies}),Object(b.jsx)(d,{name:"Views",value:n.viewCount}),Object(b.jsx)(d,{name:"Timestamp",value:x(new Date(n.ts))})]}),Object(b.jsx)("button",{onClick:r,children:Object(b.jsx)("i",{className:"text-white text-lg fas fa-arrow-up hover:text-gray-200 duration-200 transition"})})]})};var m=function(e){var t=e.classes;return Object(b.jsx)("div",{className:"loader ".concat(t&&t)})};var v=function(e){var t=e.post,n=Object(r.useState)(null),a=Object(p.a)(n,2),s=a[0],c=a[1],u=Object(r.useState)(!1),o=Object(p.a)(u,2),d=o[0],x=o[1],f=Object(r.useState)(!1),h=Object(p.a)(f,2),v=h[0],w=h[1],g=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,j.getOwner(t.wid);case 3:n=e.sent,w(!1),c(n.data.owner);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){x(!d)},k=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=3;break}return e.next=3,g();case 3:y();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"shadow relative fadeIn",children:[Object(b.jsxs)("div",{className:"bg-purple-500 p-5 rounded-t flex justify-between items-end",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"text-white font-bold mb-2",children:[Object(b.jsx)("i",{className:"fas fa-user mr-2"}),t.nickname]})}),!d&&Object(b.jsx)("button",{onClick:k,children:Object(b.jsx)("i",{className:"text-white text-lg fas fa-arrow-down hover:text-gray-200 duration-200 transition"})})]}),Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("img",{src:t.url,alt:t.text,className:"rounded-b mx-auto"}),d&&Object(b.jsx)(O,{post:t,owner:s,toggleDropdown:y})]}),v&&Object(b.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(b.jsx)(m,{classes:"text-white"})})]})};var w=function(e){var t=e.posts;return Object(b.jsx)("div",{className:"post-grid mb-12",children:t&&t.map((function(e){return Object(b.jsx)(v,{post:e},e.wid)}))})};var g=function(e){var t=e.getPosts,n=e.isLoading;return Object(b.jsxs)("div",{className:"flex justify-between items-baseline py-12",children:[Object(b.jsx)("h1",{className:"text-purple-500 text-2xl",children:"Whisper Client"}),Object(b.jsx)("button",{disabled:n,onClick:t,className:" rounded p-2 transition duration-200 ".concat(n?"bg-gray-200 cursor-default":"bg-purple-500 hover:bg-purple-700"),children:Object(b.jsx)("i",{className:"fas fa-sync-alt text-white text-xl"})})]})};var y=function(e){var t=e.setSearchField,n=e.onSearch,r=e.searchField;return Object(b.jsxs)("div",{className:"w-full max-w-sm mx-auto mb-12",children:[Object(b.jsx)("h3",{className:"tracking-widest uppercase text-sm text-gray-400 mb-2 transition duration-200 ".concat(!r&&"invisible"),children:"Search by keyword"}),Object(b.jsxs)("div",{className:"w-full  relative border border-gray-100 rounded",children:[Object(b.jsx)("input",{onKeyPress:function(e){"Enter"===e.key&&n()},onChange:function(e){return t(e.currentTarget.value)},placeholder:"Search by keyword",className:"p-3 pr-24 bg-purple-100 rounded  block w-full "}),Object(b.jsx)("button",{onClick:n,className:"bg-white p-3 text-purple-500 absolute rounded-r top-0 right-0 font-bold hover:bg-gray-200 transition duration-200",children:"Search"})]})]})};var k=function(e){var t=Object(r.useState)(!1),n=Object(p.a)(t,2),a=n[0],s=n[1],c=function(){var t=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,e.getNextPosts();case 3:s(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)("button",{disabled:a,onClick:c,className:"".concat(a?"bg-gray-200 text-white":"bg-purple-100 hover:bg-purple-200 text-purple-900"," w-full rounded flex justify-center items-center transition duration-200 font-bold text-2xl p-5 mb-12"),children:a?"Getting posts...":"Get More Posts"})};var N=function(e){var t=e.searchTerm;return Object(b.jsx)("p",{className:"text-lg mb-6 text-gray-400 text-center",children:"Last updated ".concat(t?'"'.concat(t,'" posts'):"latest posts"," at ").concat(x(new Date))})};var S=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(p.a)(s,2),o=c[0],d=c[1],x=Object(r.useState)(""),f=Object(p.a)(x,2),h=f[0],O=f[1],v=Object(r.useState)(""),S=Object(p.a)(v,2),P=S[0],C=S[1],L=Object(r.useState)(!1),D=Object(p.a)(L,2),F=D[0],M=D[1],I=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=4;break}return e.next=3,j.searchPosts(o);case 3:return e.abrupt("return",e.sent);case 4:return e.next=6,j.getLatest();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=4;break}return e.next=3,j.searchPosts(o,h);case 3:return e.abrupt("return",e.sent);case 4:return e.next=6,j.getLatest(h);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,I();case 3:t=e.sent,C(t.data.latestPosts),O(t.data.scrollId),M(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,C([].concat(Object(u.a)(P),Object(u.a)(t.data.latestPosts))),O(t.data.scrollId);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){E()}),[o]),Object(b.jsx)("div",{className:"bg-white min-h-screen",children:Object(b.jsxs)("div",{className:"w-11/12 max-w-screen-lg mx-auto",children:[Object(b.jsx)(g,{getPosts:E,isLoading:F}),Object(b.jsx)(y,{searchField:n,setSearchField:a,onSearch:function(){return d(n)}}),F?Object(b.jsx)(m,{classes:"text-purple-500"}):Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(N,{searchTerm:o}),Object(b.jsx)(w,{posts:P}),Object(b.jsx)(k,{getNextPosts:G})]})]})})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4e502037.chunk.js.map