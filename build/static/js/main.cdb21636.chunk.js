(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),s=n(9),c=n.n(s),i=n(8),o=n(1),u=n.n(o),l=n(3),j=n(4),p=(n(15),{getLatest:function(){var t=Object(l.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts".concat(e?"?scroll_id=".concat(e):""));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getOwner:function(){var t=Object(l.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://whisper-latest.herokuapp.com/api/posts/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),b=n(0);var x=function(t){var e=t.name,n=t.value;return Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h2",{className:"text-purple-200 text-sm uppercase tracking-widest font-bold",children:e}),Object(b.jsx)("p",{className:"text-white text-sm",children:n})]})},d=function(t){var e=new Date(t),n=e.getHours(),a=e.getMonth()+1,r=e.getDate(),s=function(t){return 0===t?12:t>12?t-12:t}(n),c=function(t){return 1===t.toString().length?"0".concat(t):t}(e.getMinutes()),i=n>=12?"PM":"AM";return"".concat(a,"/").concat(r," ").concat(s,":").concat(c," ").concat(i)},f=function(t){return 15===t?"15-17":18===t?"18-20":21===t?"21-25":26===t?"26-29":30===t?"30-35":36===t?"36-44":45===t?"45+":t},O=function(t){return"".concat(t.substring(0,1).toUpperCase()).concat(t.slice(1))};var h=function(t){var e=t.owner,n=t.post,a=t.toggleDropdown;return Object(b.jsxs)("div",{className:"bg-purple-500 p-5 pt-0 absolute top-0 left-0 w-full max-w-100 flex justify-between items-end",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{name:"Age",value:f(e.age)}),Object(b.jsx)(x,{name:"Gender",value:O(e.gender)}),Object(b.jsx)(x,{name:"Location",value:n.location}),Object(b.jsx)(x,{name:"Rating",value:"".concat(e.rating.average.toFixed(2)," - ").concat(e.rating.total," Chats")}),Object(b.jsx)(x,{name:"Replies",value:n.replies}),Object(b.jsx)(x,{name:"Views",value:n.viewCount}),Object(b.jsx)(x,{name:"Timestamp",value:d(new Date(n.ts))})]}),Object(b.jsx)("button",{onClick:a,children:Object(b.jsx)("i",{className:"text-white text-lg fas fa-arrow-up hover:text-gray-200 duration-200 transition"})})]})};var m=function(t){var e=t.classes;return Object(b.jsx)("div",{className:"loader ".concat(e&&e)})};var v=function(t){var e=t.post,n=Object(a.useState)(null),r=Object(j.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),x=o[0],d=o[1],f=Object(a.useState)(!1),O=Object(j.a)(f,2),v=O[0],g=O[1],w=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,p.getOwner(e.wid);case 3:n=t.sent,g(!1),c(n.data.owner);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){d(!x)},y=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s){t.next=3;break}return t.next=3,w();case 3:N();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"shadow relative fadeIn",children:[Object(b.jsxs)("div",{className:"bg-purple-500 p-5 rounded-t flex justify-between items-end",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"text-white font-bold mb-2",children:[Object(b.jsx)("i",{className:"fas fa-user mr-2"}),e.nickname]})}),!x&&Object(b.jsx)("button",{onClick:y,children:Object(b.jsx)("i",{className:"text-white text-lg fas fa-arrow-down hover:text-gray-200 duration-200 transition"})})]}),Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("img",{src:e.url,alt:e.text,className:"rounded-b mx-auto"}),x&&Object(b.jsx)(h,{post:e,owner:s,toggleDropdown:N})]}),v&&Object(b.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(b.jsx)(m,{classes:"text-white"})})]})};var g=function(t){var e=t.posts;return Object(b.jsx)("div",{className:"post-grid mb-12",children:e&&e.map((function(t){return Object(b.jsx)(v,{post:t},t.wid)}))})};var w=function(t){var e=t.getPosts,n=t.isLoading;return Object(b.jsxs)("div",{className:"flex justify-between items-baseline py-12",children:[Object(b.jsx)("h1",{className:"text-purple-500 text-2xl",children:"Whisper's Latest"}),Object(b.jsx)("button",{disabled:n,onClick:e,className:" rounded p-2 transition duration-200 ".concat(n?"bg-gray-200 cursor-default":"bg-purple-500 hover:bg-purple-700"),children:Object(b.jsx)("i",{className:"fas fa-sync-alt text-white text-xl"})})]})};var N=function(t){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),r=n[0],s=n[1],c=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.getNextPosts();case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("button",{disabled:r,onClick:c,className:"".concat(r?"bg-gray-200 text-white":"bg-purple-100 hover:bg-purple-200 text-purple-900"," w-full rounded flex justify-center items-center transition duration-200 font-bold text-2xl p-5 mb-12"),children:r?"Getting posts...":"Get More Posts"})};var y=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(""),c=Object(j.a)(s,2),o=c[0],x=c[1],f=Object(a.useState)(""),O=Object(j.a)(f,2),h=O[0],v=O[1],y=Object(a.useState)(!1),k=Object(j.a)(y,2),S=k[0],L=k[1],P=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(!0),t.next=3,p.getLatest();case 3:e=t.sent,x(e.data.latestPosts),r(e.data.scrollId),v("Last updated at ".concat(d(new Date))),L(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getLatest(n);case 2:e=t.sent,x([].concat(Object(i.a)(o),Object(i.a)(e.data.latestPosts))),r(e.data.scrollId);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){P()}),[]),Object(b.jsx)("div",{className:"bg-white min-h-screen",children:Object(b.jsxs)("div",{className:"w-11/12 max-w-screen-lg mx-auto",children:[Object(b.jsx)(w,{getPosts:P,isLoading:S}),S?Object(b.jsx)(m,{classes:"text-purple-500"}):Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("p",{className:"text-lg mb-6 text-gray-400 text-center",children:h&&h}),Object(b.jsx)(g,{posts:o}),Object(b.jsx)(N,{getNextPosts:C})]})]})})};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cdb21636.chunk.js.map