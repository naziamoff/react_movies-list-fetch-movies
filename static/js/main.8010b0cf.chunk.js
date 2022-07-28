(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),n=(c(15),c(2)),a=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:null===t||void 0===t?void 0:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:null===t||void 0===t?void 0:t.Title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"content",children:[null===t||void 0===t?void 0:t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbID)}))})},d=c(10),j=c(6),u=c(3),m=c.n(u),b=c(9),v=c.n(b),O=(c(21),function(){var e=Object(j.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=d76b35cd&t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=function(e){var t=e.moviesList,c=e.onMovieAdd,s=Object(a.useState)(""),i=Object(n.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(null),h=Object(n.a)(b,2),x=h[0],f=h[1],p=Object(a.useState)(!1),N=Object(n.a)(p,2),g=N[0],y=N[1],w=Object(a.useState)(null),k=Object(n.a)(w,2),S=k[0],A=k[1];Object(a.useEffect)((function(){f(null)}),[o]);var C=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(o);case 2:"True"===(t=e.sent).Response?(f(!0),A(t)):(f(!1),A(null));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=t.map((function(e){return e.imdbID}));if(!S||e.includes(S.imdbID))return y(!0),void setTimeout((function(){u(""),f(null),y(!1),A(null)}),1500);c([].concat(Object(d.a)(t),[S])),u("")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":!1===x,"is-success":x}),value:o,onChange:function(e){var t=e.target;return u(t.value)}})}),!1===x&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),g&&Object(r.jsx)("p",{className:"is-danger",children:"Already in your watchlist"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button","data-cy":"find",className:"button is-light",onClick:function(){return C()},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button","data-cy":"add",disabled:!x,className:"button is-primary",onClick:function(){return F()},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),x&&Object(r.jsx)(l,{movie:S})]})]})},x=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{moviesList:c,onMovieAdd:s})})]})};i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8010b0cf.chunk.js.map