(function(e){function n(n){for(var r,p,c=n[0],l=n[1],s=n[2],u=0,f=[];u<c.length;u++)p=c[u],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&f.push(o[p][0]),o[p]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);i&&i(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=p(p.s=t[0]))}return e}var r={},o={index:0},a=[];function p(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=r,p.d=function(e,n,t){p.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,n){if(1&n&&(e=p(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)p.d(t,r,function(n){return e[n]}.bind(null,r));return t},p.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(n,"a",n),n},p.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},p.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("8d7d")},"8d7d":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:t("d7ca")}}),r("h1",[e._v("Using Vue with Java")]),r("People")],1)},a=[],p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("The people I know")]),t("div",{staticClass:"people-list"},e._l(e.people,(function(e){return t("person",{key:e.firstname+e.lastname,attrs:{person:e}})})),1)])},c=[],l=t("bc3a"),s=t.n(l),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v(e._s(e.person.firstname)+" "+e._s(e.person.lastname))]),t("div",{staticClass:"person-bio"},[t("p",[t("strong",[e._v("Age:")]),e._v(" "+e._s(e.person.age))]),t("p",[t("strong",[e._v("Where:")]),e._v(" "+e._s(e.person.location))]),t("p",[t("strong",[e._v("Who they are to me:")]),e._v(" "+e._s(e.person.relationship))]),t("p",[t("strong",[e._v("What they do:")]),e._v(" "+e._s(e.person.occupation))])]),t("hr")])},u=[],f={props:["person"]},d=f,v=t("2877"),h=Object(v["a"])(d,i,u,!1,null,null,null),_=h.exports,b={components:{person:_},mounted:function(){var e=this;s.a.get("/people").then((function(n){e.people=n.data})).catch((function(e){alert("Failed to fetch data from /people",e)}))},data:function(){return{people:[]}}},g=b,m=Object(v["a"])(g,p,c,!1,null,null,null),y=m.exports,O={name:"App",components:{People:y}},w=O,j=(t("cb73"),Object(v["a"])(w,o,a,!1,null,null,null)),x=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},c69b:function(e,n,t){},cb73:function(e,n,t){"use strict";t("c69b")},d7ca:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.a9c74a6a.js.map