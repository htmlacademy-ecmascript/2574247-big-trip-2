(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var $="$isDayjsObject",g=function(e){return e instanceof M||!(!e||!e[$])},w=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},E=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},k=_;k.l=w,k.i=g,k.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function h(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return k},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return E(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<E(e)},m.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!k.u(t)||t,p=k.p(e),f=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,$=(h<b?h+7:h)-b;return f(c?_-$:_+(6-$),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=k.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[k.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var f=k.p(c),v=function(e){var t=E(p);return k.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[f]||1,m=this.$d.getTime()+n*h;return k.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},f=function(e){return k.s(r%12||12,e,"0")},h=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(v,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return o+1;case"MM":return k.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return k.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(r,a,!0);case"A":return h(r,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,v=this,h=k.p(d),m=E(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,b=function(){return k.m(v,m)};switch(h){case u:f=b()/12;break;case l:f=b();break;case c:f=b()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case r:f=y/t;break;case s:f=y/e;break;case i:f=y/1e3;break;default:f=y}return p?f:k.a(f)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=w(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return k.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),C=M.prototype;return E.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,M,E),e.$i=!0),E},E.locale=w,E.isDayjs=g,E.unix=function(e){return E(1e3*e)},E.en=b[y],E.Ls=b,E.p={},E}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=s(f,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),i=n(795),s=n.n(i),r=n(569),a=n.n(r),o=n(565),l=n.n(o),c=n(216),u=n.n(c),d=n(589),p=n.n(d),f=n(10),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h="shake";class m{#e=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(h),setTimeout((()=>{this.element.classList.remove(h),e?.()}),600)}}function _(e,t,n="beforeend"){if(!(e instanceof m))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function y(e,t){if(!(e instanceof m&&t instanceof m))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}class b extends m{get template(){return'\n <form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n  </form>\n  '}}class $ extends m{get template(){return'\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>\n'}}class g extends m{get template(){return'<ul class="trip-events__list"></ul>'}}var w=n(484),E=n.n(w);function k(e){return e?E()(e).format("HH:mm"):""}class M extends m{#t;#n;#i;constructor(e,t,n){super(),this.#t=e,this.#n=t,this.#i=n}getEvent(){return this.#t[0]}get template(){return function(e,t,n){const i=e[0],s=i.id,r=t.find((e=>e.id===i.destination)),a=n.find((e=>e.type===i.type)).offers,o=a.filter((e=>i.offers.includes(e.id))),{basePrice:l,dateFrom:c,dateTo:u,type:d}=i,{name:p,description:f,pictures:v}=r;return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n           <label class="event__type  event__type-btn" for="event-type-toggle-${s}">\n             <span class="visually-hidden">Choose event type</span>\n             <img class="event__type-icon" width="17" height="17" src="img/icons/${d}.png" alt="Event type icon">\n           </label>\n           <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${s}" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n           ${function(e,t,n){e.map((i=>{return`<div class="event__type-item">\n      <input id="event-type-${e}-${t}" class="event__type-input  visually-hidden" type="radio"\n      name="event-type" value="${i}" ${i===n?"checked":""}>\n      <label class="event__type-label  event__type-label--${i}" for="event-type-${i}-${t}">${s=i,s[0].toUpperCase()+s.slice(1)}</label>\n    </div>`;var s})).join("")}(e.map((e=>e.type)),s,d)}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-${s}">\n            ${d}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-${s}" type="text"\n          name="event-destination" value="${p||""}" list="destination-list-${s}">\n          <datalist id="destination-list-${s}">\n            ${function(e){e.map((e=>`<option value="${e.name}"></option>`)).join("")}(t)}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-${s}">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-${s}" type="text" name="event-start-time" value="${k(c)}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-${s}">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-${s}" type="text" name="event-end-time" value="${k(u)}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-${s}">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-${s}" type="text" name="event-price" value="${l}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">${i.id?"Delete":"Cancel"}</button>\n        ${i.id?'<button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n            </button>':""}\n      </header>\n\n      <section class="event__details">\n        ${a.length>0?`<section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n          <div class="event__available-offers">\n            ${function(e,t,n){return n.map((n=>`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n.title}-${t}" type="checkbox"\n        name="event-offer-${n.title}" ${e.some((e=>e.id===n.id))?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${n.title}-${t}">\n         <span class="event__offer-title">${n.title}</span>\n          &plus;&euro;&nbsp;\n        <span class="event__offer-price">${n.price}</span>\n      </label>\n    </div>`)).join("")}(o,s,a)}\n          </div>\n        </section>`:""}\n ${r?`<section class="event__section event__section--destination">\n  <h3 class="event__section-title event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${f}</p>\n    ${function(e){return 0===e.length?"":`\n    <div class="event__photos-container">\n    <div class="event__photos-tape">\n      ${e.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`))}\n    </div>\n    </div>\n    `}(v)}\n    </section>`:""}\n    </section>\n   </form>\n  </li>`}(this.#t,this.#n,this.#i)}}class C extends m{#s=null;#r;#n;#i;constructor(e,t,n,i){super(),this.#s=i,this.#r=e,this.#n=t,this.#i=n}get template(){return function(e,t,n){const{basePrice:i,isFavorite:s,dateFrom:r,dateTo:a,type:o}=e,l=n.find((t=>t.type===e.type)).offers.filter((t=>e.offers.includes(t.id))),c=t.find((t=>t.id===e.destination)),u=function(e,t){const n=E()(e),i=E()(t).diff(n),s=Math.floor(i/36e5),r=Math.floor(i%36e5/6e4),a=Math.ceil(s/24);let o=`${a}D ${s}H ${r}M`;return 0===a&&(o=`${s}H ${r}M`),0===a&&0===s&&(o=`${r}M`),o}(r,a);return`\n    <li class="trip-events__item">\n      <div class="event">\n      <time class="event__date" datetime="2024-10-18">${d=r,d?E()(d).format("MMM DD"):""}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${o} ${c.name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="2019-03-18T10:30">${k(r)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="2019-03-18T11:00">${k(a)}</time>\n        </p>\n        <p class="event__duration"> ${u}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${function(e){return e.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>`)).join("")}(l)}\n      </ul>\n     <button class="event__favorite-btn ${s?"event__favorite-btn--active":""} " type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>\n`;var d}(this.#r,this.#n,this.#i)}setEventButtonClickHandler(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a.bind(this)),console.log("Event button click handler set")}#a(e){e.preventDefault(),console.log("Event button clicked"),this.#s&&this.#s()}}const A=[{id:"1",basePrice:200,dateFrom:"2024-11-10T22:55:56",dateTo:"2024-11-11T11:22:13",destination:"3",isFavorite:!1,offers:["1","4"],type:"taxi"},{id:"2",basePrice:90,dateFrom:"2024-11-12T22:55:56",dateTo:"2024-11-13T11:22:13",destination:"1",isFavorite:!1,offers:["2","4"],type:"bus"},{id:"3",basePrice:900,dateFrom:"2024-11-14T02:42:56",dateTo:"2024-11-14T11:22:13",destination:"2",isFavorite:!0,offers:["1","2"],type:"flight"},{id:"4",basePrice:300,dateFrom:"2024-11-16T22:55:56",dateTo:"2024-11-17T11:22:13",destination:"4",isFavorite:!1,offers:[],type:"train"}],x=[{id:"1",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"}]},{id:"2",description:"Bangkok is a vibrant metropolis known for its ornate temples, bustling street life.",name:"Bangkok",pictures:[{src:"https://en.wikipedia.org/wiki/King_Power_Mahanakhon#/media/File:Tha%C3%AFlande_Bangkok_MahaNakhon.jpg",description:"King Power Mahanakhon"}]},{id:"3",description:"Istanbul is a vibrant city bridging Europe and Asia.",name:"Istanbul",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Istanbul Grand Bazaar"}]},{id:"4",description:"Amsterdam is a picturesque city known for its canals.",name:"Amsterdam",pictures:[]}],S=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:120},{id:"2",title:"Upgrade to a limousine",price:300},{id:"3",title:"Upgrade to a minivan",price:30},{id:"4",title:"oversized luggage",price:60},{id:"5",title:"chair for child",price:30}]},{type:"bus",offers:[]},{type:"flight",offers:[{id:"1",title:"Upgrade to a business class",price:500},{id:"2",title:"Upgrade to a first class",price:1e3},{id:"3",title:"Platinum last minute upgrade.",price:20},{id:"4",title:"luggage +10kg",price:40}]},{type:"train",offers:[{id:"1",title:"Upgrade to a business class",price:120},{id:"2",title:"Upgrade to a luxury class",price:120},{id:"3",title:"shower",price:10},{id:"4",title:"Dinner",price:20},{id:"5",title:"",price:120},{id:"6",title:"Upgrade to a business class",price:120}]}],D=document.querySelector(".trip-controls__filters"),T=document.querySelector(".trip-events"),O=new class{#t=A;#n=x;#i=S;get events(){return this.#t}get destinations(){return this.#n}get offers(){return this.#i}},F=new class{filtersView=new b;sortsViev=new $;eventListView=new g;#o=null;#l=null;#c=null;constructor({filtersContainer:e,eventsContainer:t,model:n}){this.model=n,this.#o=e,this.#l=t}init(){const e=this.model.destinations,t=this.model.offers,n=this.model.events;_(new b,this.#o),_(new $,this.#l),_(this.eventListView,this.#l,"afterend");for(const i of n)this.#u(i,e,t)}#u(e,t,n){const i=new C(e,t,n,(()=>this.#d(e,t,n)));i.setEventButtonClickHandler(),_(i,this.eventListView.element)}#d(e,t,n){this.#c&&this.#p(),this.#c=new M([e],t,n),this.#c.element.querySelector(".event__rollup-btn").addEventListener("click",(()=>this.#p())),this.#c.element.querySelector(".event__save-btn").addEventListener("click",(t=>this.#f(t,e))),y(this.#c,new C(e,t,n,(()=>this.#d(e,t,n))))}#p(){this.#c&&(y(new C(this.#c.getEvent(),this.model.destinations,this.model.offers,(()=>this.#d(this.#c.getEvent(),this.model.destinations,this.model.offers))),this.#c),this.#c=null)}#f(e,t){e.preventDefault(),console.log("Форма сохранена для события:",t),this.#p()}}({filtersContainer:D,eventsContainer:T,model:O});F.init()})()})();
//# sourceMappingURL=bundle.a6633d1c58a78c38f241.js.map