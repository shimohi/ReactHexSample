(this["webpackJsonpreact-hex-svg-example"]=this["webpackJsonpreact-hex-svg-example"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),o=(n(14),n(6)),s=n.n(o),l=n(3),u=(n(16),n(4)),h=n(5),v=n(1),f=n(2),g=Math.cos(30*Math.PI/180),d=Math.pow(10,5),x=function(){function e(){Object(v.a)(this,e)}return Object(f.a)(e,null,[{key:"createPath",value:function(e,t){var n=Object(l.a)(e,2),a=n[0],i=n[1],r=Math.round(t*g*d)/d;a=Math.round(a*d)/d,i=Math.round(i*d)/d;var c=(t=Math.round(t*d)/d)/2;return"M".concat(a,",").concat(i-t," l").concat(r,",").concat(c," v").concat(t," l").concat(-r,",").concat(c," l").concat(-r,",").concat(-c," v").concat(-t," l").concat(r,",").concat(-c,"z")}}]),e}(),b=10,m=b*Math.cos(30*Math.PI/180),j=function(e,t){return Array.from({length:8},(function(n,a){return[e+2*a*m,t]}))},y=[].concat(Object(h.a)(j(2*m,b)),Object(h.a)(j(m,25)),Object(h.a)(j(2*m,40)),Object(h.a)(j(m,55)),Object(h.a)(j(2*m,70)),Object(h.a)(j(m,85))).map((function(e){return{center:e,sideLength:b}})),O=y.map((function(e,t){return{id:t,selected:!1}})),p=function(){function e(){Object(v.a)(this,e)}return Object(f.a)(e,null,[{key:"calcRange",value:function(e){var t=e.reduce((function(e,t){var n=Object(l.a)(e,4),a=n[0],i=n[1],r=n[2],c=n[3],o=Object(l.a)(t.center,2),s=o[0],u=o[1],h=2*t.sideLength,v=h*Math.cos(30*Math.PI/180)*2;return[a>s-v?s-v:a,i<s+v?s+v:i,r>u-h?u-h:r,c<u+h?u+h:c]}),[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]),n=Object(l.a)(t,4),a=n[0],i=n[1],r=n[2];return{x:a,y:r,width:i-a,height:n[3]-r}}}]),e}(),w=function(){function e(t){var n=this;Object(v.a)(this,e),this.listeners=new Set,this.tilesListener=null,this.tilesDispatcher=null,this.hexagonTiles=void 0,this.tilesCallback=void 0,this.hexagons=void 0,this.hexagons=t||Object(h.a)(y),this.hexagonTiles={range:p.calcRange(this.hexagons),hexagons:[],hover:-1},this.tilesCallback=function(e){n.hexagonTiles.hexagons.length>0?n.hexagonTiles=Object(u.a)({},n.hexagonTiles,{hexagons:n.hexagonTiles.hexagons.map((function(t,n){return Object(u.a)({},t,{tile:e[n]})}))}):n.hexagonTiles=Object(u.a)({},n.hexagonTiles,{hexagons:n.hexagons.map((function(t,n){return Object(u.a)({},t,{tile:e[n],hover:!1,path:x.createPath(t.center,t.sideLength)})}))})}}return Object(f.a)(e,[{key:"bind",value:function(e,t){this.unBind(),this.tilesCallback(e.latest),e.on(this.tilesCallback),this.tilesListener=e,this.tilesDispatcher=t}},{key:"unBind",value:function(){var e;null===(e=this.tilesListener)||void 0===e||e.remove(this.tilesCallback),this.tilesListener=null,this.tilesDispatcher=null}},{key:"on",value:function(e){this.listeners.add(e)}},{key:"remove",value:function(e){this.listeners.delete(e)}},{key:"updateProps",value:function(e){this.hexagonTiles=Object(u.a)({},this.hexagonTiles,{},e),this.notice()}},{key:"updateTile",value:function(e){var t;if(this.hexagonTiles.hexagons[e.tile.id]!==e){var n=Object(h.a)(this.hexagonTiles.hexagons);n[e.tile.id]=e,this.hexagonTiles={range:this.hexagonTiles.range,hexagons:n,hover:-1},null===(t=this.tilesDispatcher)||void 0===t||t.update(e.tile),this.notice()}}},{key:"notice",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,i=this.listeners.values()[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){(0,a.value)(this.hexagonTiles)}}catch(r){t=!0,n=r}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"latest",get:function(){return this.hexagonTiles}}]),e}(),E=function(){function e(t){Object(v.a)(this,e),this.accessor=t}return Object(f.a)(e,[{key:"select",value:function(e){var t=!0,n=!1,a=void 0;try{for(var i,r=this.accessor.latest.hexagons[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var c=i.value;c.tile.id!==e.tile.id?c.tile.selected&&this.accessor.updateTile(Object(u.a)({},c,{tile:Object(u.a)({},c.tile,{selected:!1})})):this.accessor.updateTile(Object(u.a)({},c,{tile:Object(u.a)({},c.tile,{selected:!0})}))}}catch(o){n=!0,a=o}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}}},{key:"hover",value:function(e){this.accessor.updateProps({hover:e?e.tile.id:-1})}}]),e}(),T=i.a.createContext(new E(new w([]))),k=i.a.createContext({range:{x:0,y:0,width:0,height:0},hexagons:[],hover:-1}),M=i.a.createContext({x:0,y:0,width:0,height:0}),A=function(e){var t=e.viewPort,n=e.viewBox,a=t||n,r=n.x,c=n.y,o=n.width,s=n.height;return i.a.createElement("svg",{x:a.x,y:a.y,width:a.width,height:a.height,viewBox:"".concat(r," ").concat(c," ").concat(o," ").concat(s)},e.children)},P=function(e){var t=e.hexagonTile,n=e.svgProps;return a.createElement("path",Object(u.a)({},Object(u.a)({fill:"transparent"},n,{d:t.path})),e.children)},C=function(e){var t=e.hexagonTile,n=Object(a.useContext)(k);return i.a.createElement(P,{svgProps:{strokeWidth:t.tile.id===n.hover?.5:0,stroke:"gold"},hexagonTile:e.hexagonTile})},B=function(){var e=Object(a.useContext)(k),t=e.hexagons,n=e.range,r=t.map((function(e){return i.a.createElement(C,{key:e.tile.id,hexagonTile:e})}));return i.a.createElement(A,{viewBox:n},r)},S=function(e){var t=e.hexagonTile,n=t.center,a=t.sideLength,r=t.tile,c=Object(l.a)(n,2),o=c[0],s=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{svgProps:{fill:r.selected?"green":"none"},hexagonTile:e.hexagonTile}),i.a.createElement("text",{x:o,y:s,fill:r.selected?"white":"slategray",fontSize:a,textAnchor:"middle",dominantBaseline:"middle",alignmentBaseline:"middle"},r.id+1))},N=function(){var e=Object(a.useContext)(k),t=e.hexagons,n=e.range,r=t.map((function(e){return i.a.createElement(S,{key:e.tile.id,hexagonTile:e})}));return i.a.createElement(A,{viewBox:n},r)},I=function(e){var t=e.hexagonTile,n=Object(a.useContext)(T);return i.a.createElement("g",{onClick:function(){n.select(t)},onMouseMove:function(){n.hover(t)}},i.a.createElement(P,{hexagonTile:e.hexagonTile}))},L=function(){var e=Object(a.useContext)(k),t=e.hexagons,n=e.range,r=t.map((function(e){return i.a.createElement(I,{key:e.tile.id,hexagonTile:e})}));return i.a.createElement(A,{viewBox:n},r)},R=function(){var e=Object(a.useContext)(k).range,t=Object(a.useState)({x:0,y:0,width:0,height:0}),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=!0,t=!1,n=function(){if(e&&o.current){var t=o.current.getBoundingClientRect();c({x:0,y:0,width:t.width,height:t.height})}},a=function(){t||(t=!0,setTimeout((function(){n(),t=!1}),100))};return window.addEventListener("resize",a),n(),function(){e=!1,window.removeEventListener("resize",a)}}),[]),i.a.createElement(M.Provider,{value:r},i.a.createElement("div",{ref:o,style:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"}},i.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},i.a.createElement(A,{viewPort:r,viewBox:e},i.a.createElement(N,null),i.a.createElement(B,null),i.a.createElement(L,null)))))},_=function(e){var t=e.accessor,n=Object(a.useState)(t.latest),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var e=function(e){o(e)};return t.on(e),o(t.latest),function(){t.remove(e)}}),[t]),i.a.createElement(k.Provider,{value:c},i.a.createElement(R,null))},F=function(e){var t=Object(a.useState)(new w),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=e.tilesPort,n=e.hexagonAccessorFactory,a=function(){};return function(){var e,i,r,o,u;return s.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,s.a.awrap(t.getTilesAccessor());case 2:return e=h.sent,i=Object(l.a)(e,2),r=i[0],o=i[1],h.next=8,s.a.awrap(n.getHexagonAccessor());case 8:(u=h.sent).bind(o,r),a=function(){u.unBind()},c(u);case 12:case"end":return h.stop()}}))}().catch((function(e){console.warn(e)})),function(){a()}})),i.a.createElement("div",{className:"App"},i.a.createElement(T.Provider,{value:new E(r)},i.a.createElement(_,{accessor:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=new(function(){function e(){Object(v.a)(this,e),this.hexagonAccessor=new w}return Object(f.a)(e,[{key:"getHexagonAccessor",value:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.hexagonAccessor);case 1:case"end":return e.stop()}}),null,this)}}]),e}()),D=function(){function e(t){Object(v.a)(this,e),this.tiles=t,this.listeners=new Set}return Object(f.a)(e,[{key:"on",value:function(e){this.listeners.add(e)}},{key:"remove",value:function(e){this.listeners.delete(e)}},{key:"update",value:function(e){if(this.tiles[e.id]!==e){var t=Object(h.a)(this.tiles);t[e.id]=e,this.tiles=t;var n=!0,a=!1,i=void 0;try{for(var r,c=this.listeners.values()[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){(0,r.value)(this.tiles)}}catch(o){a=!0,i=o}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}}}},{key:"latest",get:function(){return this.tiles}}]),e}(),G=new(function(){function e(){Object(v.a)(this,e),this.accessor=new D(O)}return Object(f.a)(e,[{key:"getTilesAccessor",value:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[this.accessor,this.accessor]);case 1:case"end":return e.stop()}}),null,this)}}]),e}());c.a.render(i.a.createElement(F,{hexagonAccessorFactory:z,tilesPort:G}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9f2533a4.chunk.js.map