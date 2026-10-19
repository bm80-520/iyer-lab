/* Original presentation scripts from the archived main branch. */
var avia_framework_globals = {};
const com_options = {colomatduration:"fast",colomatslideEffect:"slideFade",colomatpauseInit:"",colomattouchstart:""};

;/* jquery-core-js */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
jQuery.noConflict();
;

;/* jquery-migrate-js */
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});

;

;/* avia-js-js */
/**
 * Contains plain js basic and helpers classes
 *
 * @since 5.6
 */

/**
 * Global namespace
 *
 * @since 5.6
 */
var aviaJS = aviaJS || {};

(function()
{
	"use strict";

	if( ! aviaJS.aviaJSHelpers )
	{
		class aviaJSHelpers
		{
			constructor()
			{
				this.wpHooks();
			}

			//	based on _.js debounce()
			debounce( callback, wait, immediate )
			{
				var timeout;

				return function()
				{
					var context = this,
						args = arguments;

					var later = function()
					{
						timeout = null;
						if( ! immediate )
						{
							callback.apply(context, args);
						}
					};

					var callNow = immediate && ! timeout;

					clearTimeout( timeout );
					timeout = setTimeout( later, wait );
					if( callNow )
					{
						callback.apply( context, args );
					}
				};
			}

			wpHooks()
			{
				//	to avoid checking for wp.hooks calling filters or actions we create dummy functions here
				if( window['wp'] && wp.hooks )
				{
					return;
				}

				if( ! window['wp'] )
				{
					window['wp'] = { hooks: {} };
				}
				else
				{
					window['wp'].hooks = {};
				}

				let obj = window['wp'].hooks;

				obj.applyFilters = this.wpHooks_applyFilters;
				obj.doAction = this.wpHooks_applyFilters;
				obj.hasFilter = this.wpHooks_hasFilters;
				obj.hasAction = this.wpHooks_hasFilters;
			}

			wpHooks_applyFilters( handle, value )
			{
				return value;
			}

			wpHooks_hasFilters( handle, namespace )
			{
				return false;
			}
		}

		aviaJS.aviaJSHelpers = new aviaJSHelpers();
	}

	if( ! aviaJS.aviaPlugins )
	{
		class aviaPlugins
		{
			plugins = [];
			defaultPlugin = {
				classFactory:	null,
				selector:		''
			};

			constructor()
			{
				this.plugins = [];
			}

			register( classFactory, selector )
			{
				if( 'function' != typeof classFactory )
				{
					return false;
				}

				let newPlugin = Object.assign( {}, this.defaultPlugin );

				if( 'string' != typeof selector )
				{
					selector = 'body';
				}

				newPlugin.classFactory = classFactory;
				newPlugin.selector = selector;

				this.plugins.push( newPlugin );

				this.check_bind();
			}

			check_bind()
			{
				if( document.readyState === 'complete' )
				{
					// The page is already fully loaded
					this.bind_plugins();
				}
				else
				{
					document.addEventListener( 'readystatechange', this.bind_plugins.bind( this ) );
				}
			}

			bind_plugins( e )
			{
				if( document.readyState !== 'complete' )
				{
					return;
				}

				let plugins = this.plugins;
				this.plugins = [];

				for( let plugin of plugins )
				{
					let elements = document.querySelectorAll( plugin.selector );

					for( let element of elements )
					{
						plugin.classFactory( element );
					}
				}
			}
		}

		aviaJS.aviaPlugins = new aviaPlugins();
	}

})();


;

;/* avia-compat-js */
/*
	this prevents dom flickering for elements hidden with js, needs to be outside of dom.ready event.also adds several extra classes for better browser support
	this is a separate file that needs to be loaded at the top of the page. other js functions are loaded before the closing body tag to make the site render faster
*/
"use strict";

var avia_is_mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
{
	avia_is_mobile = true;
	document.documentElement.className += ' avia_mobile ';
}
else
{
	document.documentElement.className += ' avia_desktop ';
}

document.documentElement.className += ' js_active ';

(function()
{
	//set transform property
	var prefix = [ '-webkit-', '-moz-', '-ms-', '' ],
		transform = '',
		transform2d = false,
		transform3d = false;

	for( var i in prefix )
	{
		// http://artsy.github.io/blog/2012/10/18/so-you-want-to-do-a-css3-3d-transform/
		if( prefix[i] + 'transform' in document.documentElement.style )
		{
			transform2d = true;
			transform = prefix[i] + 'transform';
		}

		if( prefix[i] + 'perspective' in document.documentElement.style )
		{
			transform3d = true;
		}
	}

	if( transform2d )
	{
		document.documentElement.className += ' avia_transform ';
	}

	if( transform3d )
	{
		document.documentElement.className += ' avia_transform3d ';
	}

	//set parallax position to prevent jump at pageload
	if( typeof document.getElementsByClassName == 'function' && typeof document.documentElement.getBoundingClientRect == "function" && avia_is_mobile == false )
	{
		if( transform && window.innerHeight > 0 )
		{
			setTimeout( function()
			{
				var y = 0,
					offsets = {},
					transY = 0,
					parallax = document.getElementsByClassName( "av-parallax" ),
					winTop = window.pageYOffset || document.documentElement.scrollTop;

				for( y = 0; y < parallax.length; y++ )
				{
					parallax[y].style.top = "0px";
					offsets	= parallax[y].getBoundingClientRect();
					transY	= Math.ceil( (window.innerHeight + winTop - offsets.top) * 0.3 );
					parallax[y].style[transform] = "translate(0px, " + transY + "px)";
					parallax[y].style.top = "auto";
					parallax[y].className += ' enabled-parallax ';
				}
			}, 50);
		}
	}
})();

;

;/* avia-waypoints-js */
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=0,e={};function i(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=i.Adapter.extend({},i.defaults,o),this.element=this.options.element,this.adapter=new i.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=i.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=i.Context.findOrCreateByElement(this.options.context),i.offsetAliases[this.options.offset]&&(this.options.offset=i.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}i.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},i.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},i.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},i.prototype.disable=function(){return this.enabled=!1,this},i.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},i.prototype.next=function(){return this.group.next(this)},i.prototype.previous=function(){return this.group.previous(this)},i.invokeAll=function(t){var i=[];for(var o in e)i.push(e[o]);for(var n=0,r=i.length;n<r;n++)i[n][t]()},i.destroyAll=function(){i.invokeAll("destroy")},i.disableAll=function(){i.invokeAll("disable")},i.enableAll=function(){for(var t in i.Context.refreshAll(),e)e[t].enabled=!0;return this},i.refreshAll=function(){i.Context.refreshAll()},i.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},i.viewportWidth=function(){return document.documentElement.clientWidth},i.adapters=[],i.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},i.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=i}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,i={},o=window.Waypoint,n=window.onload;function r(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,e+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},r.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),o=this.element==this.element.window;t&&e&&!o&&(this.adapter.off(".waypoints"),delete i[this.key])},r.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",(function(){t.didResize||(t.didResize=!0,o.requestAnimationFrame(e))}))},r.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",(function(){t.didScroll&&!o.isTouch||(t.didScroll=!0,o.requestAnimationFrame(e))}))},r.prototype.handleResize=function(){o.Context.refreshAll()},r.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r];if(null!==s.triggerPoint){var a=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(n),t[s.group.id]=s.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;o<n;o++)t[o].destroy()},r.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,c,u=this.waypoints[r][a],d=u.options.offset,f=u.triggerPoint,w=0,y=null==f;u.element!==u.element.window&&(w=u.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(u):"string"==typeof d&&(d=parseFloat(d),u.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,u.triggerPoint=Math.floor(w+l-d),h=f<s.oldScroll,p=u.triggerPoint>=s.oldScroll,c=!h&&!p,!y&&(h&&p)?(u.queueTrigger(s.backward),n[u.group.id]=u.group):(!y&&c||y&&s.oldScroll>=u.triggerPoint)&&(u.queueTrigger(s.forward),n[u.group.id]=u.group)}}return o.requestAnimationFrame((function(){for(var t in n)n[t].flushTriggers()})),this},r.findOrCreateByElement=function(t){return r.findByElement(t)||new r(t)},r.refreshAll=function(){for(var t in i)i[t].refresh()},r.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){n&&n(),r.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=r}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var i={vertical:{},horizontal:{}},o=window.Waypoint;function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;r<s;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return i[t.axis][t.name]||new n(t)},o.Group=n}(),function(){"use strict";var t=window.jQuery,e=window.Waypoint;function i(e){this.$element=t(e)}t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(t,e){i.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}})),t.each(["extend","inArray","isEmptyObject"],(function(e,o){i[o]=t[o]})),e.adapters.push({name:"jquery",Adapter:i}),e.Adapter=i}(),function(){"use strict";var t=window.Waypoint;function e(e){return function(){var i=[],o=arguments[0];return"function"==typeof arguments[0]&&((o=e.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var n=e.extend({},o,{element:this});"string"==typeof n.context&&(n.context=e(this).closest(n.context)[0]),i.push(new t(n))})),i}}window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}();
;

;/* avia-default-js */
/**
 * Polyfill for older browsers https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * @since 4.8
 * @return boolean
 */
if ( ! Array.isArray )
{
	Array.isArray = function( arg )
	{
		return Object.prototype.toString.call( arg ) === '[object Array]';
	};
}

/**
 * hack to catch and reroute jQuery custom events (default browser events seem to work even when triggered with jQuery)
 * As events with '-' cannot be monotored with on.... we rename them to avoid possible conflicts
 *
 * https://stackoverflow.com/questions/11132553/how-to-catch-the-jquery-event-trigger
 * https://stackoverflow.com/questions/36914912/how-to-get-jquery-to-trigger-a-native-custom-event-handler
 * https://stackoverflow.com/questions/40915156/listen-for-jquery-event-with-vanilla-js
 *
 * @since 5.6
 */
(function($)
{
	"use strict";

	const opt = {
				'bubbles':		true,
				'cancelable':	true
			};

	//	event is always bound to window
	$( window ).on( 'av-height-change', function( e )
	{
		const event = new CustomEvent( 'avia_height_change', opt );
		window.dispatchEvent( event );
	});

	//	event is always bound to window
	$( 'body' ).on( 'av_resize_finished', function( e )
	{
		const event = new CustomEvent( 'avia_resize_finished', opt );
		document.body.dispatchEvent( event );
	});

})( jQuery );


(function($)
{
	"use strict";

	$( function()
	{
		$.avia_utilities = $.avia_utilities || {};

		AviaBrowserDetection( 'html' );
		AviaDeviceDetection( 'html' );

		//show scroll top but1ton
		avia_scroll_top_fade();

		//calculate width of content
		aviaCalcContentWidth();

		//creates search tooltip
		new $.AviaTooltip({
					"class": 'avia-search-tooltip',
					data: 'avia-search-tooltip',
					event: 'click',
					position: 'bottom',
					scope: "body",
					attach: 'element',
					within_screen: true,
					close_keys: 27
				});

        //creates relate posts tooltip
        new $.AviaTooltip({
					"class": 'avia-related-tooltip',
					data: 'avia-related-tooltip',
					scope: ".related_posts, .av-share-box",
					attach: 'element',
					delay: 0
				});

        //creates ajax search
        new $.AviaAjaxSearch({scope:'#header, .avia_search_element'});

		// actiavte portfolio sorting
		if( $.fn.avia_iso_sort )
		{
			$('.grid-sort-container').avia_iso_sort();
		}

		// Checks height of content and sidebar and applies shadow class to the higher one
        AviaSidebarShadowHelper();

        $.avia_utilities.avia_ajax_call();

		// Add single post/portfolio swipe support (in BETA since 5.5)
		$.avia_utilities.postSwipeSupport();
    });

	$.avia_utilities = $.avia_utilities || {};


	$.avia_utilities.postSwipeSupport = function()
	{
		if( ! $.fn.avia_swipe_trigger )
		{
			return;
		}

		const	body = document.getElementsByTagName( 'body' ),
				methods = {};

		methods.beforeTrigger = function( slider, direction )
		{
			const loader = $.avia_utilities.loading();
			loader.show();
		};

		methods.afterTrigger = function( slider, direction )
		{
			let body = document.getElementsByTagName( 'body' );
			if( ! body.length )
			{
				return;
			}

			let dir = direction == 'prev' ? 'swiped-ltr' : 'swiped-rtl';
			body[0].classList.add( 'av-post-swiped-overlay', dir );
		};

		if( ! body.length || ! body[0].classList.contains( 'avia-post-nav-swipe-enabled' ) )
		{
			return;
		}

		/**
		 * Add swipe to posts and portfolio
		 *
		 * @since 5.5
		 */
		let single = document.querySelector( '.single #main' );
		if( single == null )
		{
			return;
		}

		let prev = document.querySelector( '#wrap_all .avia-post-nav.avia-post-prev' ),
			next = document.querySelector( '#wrap_all .avia-post-nav.avia-post-next' ),
			param = {
					prev: prev,
					next: next,
					delay_trigger: true,
					event: {
							prev: 'native_click',
							next: 'native_click'
						},
					beforeTrigger: methods.beforeTrigger,
					afterTrigger: methods.afterTrigger
				};

		$( single ).avia_swipe_trigger( param );
	};

	$.avia_utilities.avia_ajax_call = function(container)
	{
		if( typeof container == 'undefined' )
		{
			container = 'body';
		};

		$('a.avianolink').on('click', function(e){ e.preventDefault(); });
        $('a.aviablank').attr('target', '_blank');

        //activates the prettyphoto lightbox
        if($.fn.avia_activate_lightbox)
		{
        	$(container).avia_activate_lightbox();
        }

        //scrollspy for main menu. must be located before smoothscrolling
		if( $.fn.avia_scrollspy )
		{
			if(container == 'body')
			{
				$('body').avia_scrollspy({target:'.main_menu .menu li > a'});
			}
			else
			{
				$('body').avia_scrollspy('refresh');
			}
		}



		//smooth scrooling
		if( $.fn.avia_smoothscroll )
		{
			$('a[href*="#"]', container).avia_smoothscroll(container);
		}

		avia_small_fixes(container);

		avia_hover_effect(container);

		avia_iframe_fix(container);

		//activate html5 video player
		if( $.fn.avia_html5_activation && $.fn.mediaelementplayer )
		{
			$(".avia_video, .avia_audio", container).avia_html5_activation({ratio:'16:9'});
		}

	};

	// -------------------------------------------------------------------------------------------
	// Error log helper
	// -------------------------------------------------------------------------------------------
	$.avia_utilities.log = function( text, type, extra )
	{
		if( typeof console == 'undefined' )
		{
			return;
		}

		if( typeof type == 'undefined' )
		{
			type = "log";
		}

		type = "AVIA-" + type.toUpperCase();

		console.log( "["+type+"] "+text );

		if( typeof extra != 'undefined' )
		{
			console.log( extra );
		}
	};



	// -------------------------------------------------------------------------------------------
	// keep track of the browser and content width
	// -------------------------------------------------------------------------------------------



	function aviaCalcContentWidth()
	{

	var win			= $(window),
		width_select= $('html').is('.html_header_sidebar') ? "#main" : "#header",
		outer		= $(width_select),
		outerParent = outer.parents('div').eq( 0 ),
		the_main	= $(width_select + ' .container').first(),
		css_block	= "",
		calc_dimensions = function()
		{
			var css			= "",
				w_12 		= Math.round( the_main.width() ),
				w_outer		= Math.round( outer.width() ),
				w_inner		= Math.round( outerParent.width() );

			//css rules for mega menu
			css += " #header .three.units{width:"	+ ( w_12 * 0.25)+	"px;}";
			css += " #header .six.units{width:"		+ ( w_12 * 0.50)+	"px;}";
			css += " #header .nine.units{width:"	+ ( w_12 * 0.75)+	"px;}";
			css += " #header .twelve.units{width:"	+( w_12 )		+	"px;}";

			//css rules for tab sections
			css += " .av-framed-box .av-layout-tab-inner .container{width:"	+( w_inner )+	"px;}";
			css += " .html_header_sidebar .av-layout-tab-inner .container{width:"	+( w_outer )+	"px;}";
			css += " .boxed .av-layout-tab-inner .container{width:"	+( w_outer )+	"px;}";

			//css rules for submenu container
			css += " .av-framed-box#top .av-submenu-container{width:"	+( w_inner )+	"px;}";

			//ie8 needs different insert method
			try{
				css_block.text(css);
			}
			catch(err){
				css_block.remove();
				var headFirst = $( 'head' ).first();
				css_block = $("<style type='text/css' id='av-browser-width-calc'>"+css+"</style>").appendTo( headFirst );
			}

		};



		if($('.avia_mega_div').length > 0 || $('.av-layout-tab-inner').length > 0 || $('.av-submenu-container').length > 0)
		{
			var headFirst = $( 'head' ).first();
			css_block = $("<style type='text/css' id='av-browser-width-calc'></style>").appendTo( headFirst );
			win.on( 'debouncedresize', calc_dimensions);
			calc_dimensions();
		}
	}


    // -------------------------------------------------------------------------------------------
    // Tiny helper for sidebar shadow
    // -------------------------------------------------------------------------------------------

	function AviaSidebarShadowHelper()
	{
		var $sidebar_container = $('.sidebar_shadow#top #main .sidebar');
		var $content_container = $('.sidebar_shadow .content');

		if( $sidebar_container.height() >= $content_container.height() )
		{
			$sidebar_container.addClass('av-enable-shadow');
		}
		else
		{
			$content_container.addClass('av-enable-shadow');
		}
	}


	// -------------------------------------------------------------------------------------------
	// modified SCROLLSPY by bootstrap
	// -------------------------------------------------------------------------------------------


	  function AviaScrollSpy(element, options)
	  {
		var self = this;

		var process = self.process.bind( self ),
			refresh = self.refresh.bind( self ),
			$element = $(element).is('body') ? $(window) : $(element),
			href;

		    self.$body = $('body');
		    self.$win = $(window);
		    self.options = $.extend({}, $.fn.avia_scrollspy.defaults, options);
		    self.selector = (self.options.target
		      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
		      || '');

		   	self.activation_true = false;

		    if(self.$body.find(self.selector + "[href*='#']").length)
		    {
		    	self.$scrollElement = $element.on('scroll.scroll-spy.data-api', process);
		    	self.$win.on('av-height-change', refresh);
		    	self.$body.on('av_resize_finished', refresh);
		    	self.activation_true = true;
		    	self.checkFirst();

		    	setTimeout(function()
	  			{
		    		self.refresh();
		    		self.process();

		    	},100);
		    }

	  }

	  AviaScrollSpy.prototype = {

	      constructor: AviaScrollSpy
		, checkFirst: function () {

			var current = window.location.href.split('#')[0],
				matching_link = this.$body.find(this.selector + "[href='"+current+"']").attr('href',current+'#top');
		}
	    , refresh: function () {

	    if(!this.activation_true) return;

	        var self = this
	          , $targets;

	        this.offsets = $([]);
	        this.targets = $([]);

	        $targets = this.$body
	          .find(this.selector)
	          .map(function () {
	            var $el = $(this)
	              , href = $el.data('target') || $el.attr('href')
	              , hash = this.hash
	              , hash = hash.replace(/\//g, "")
	              , $href = /^#\w/.test(hash) && $(hash);

				//	$.isWindow deprecated 3.3 https://api.jquery.com/jquery.iswindow/
				var obj = self.$scrollElement.get(0);
				var isWindow = obj != null && obj === obj.window;

	            return ( $href
	              && $href.length
	              && [[ $href.position().top + ( ! isWindow && self.$scrollElement.scrollTop() ), href ]] ) || null;
	          })
	          .sort(function (a, b) { return a[0] - b[0]; })
	          .each(function () {
	            self.offsets.push(this[0]);
	            self.targets.push(this[1]);
	          });

	      }

	    , process: function () {

	    	if(!this.offsets) return;
	    	if(isNaN(this.options.offset)) this.options.offset = 0;

	        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
	          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
	          , maxScroll = scrollHeight - this.$scrollElement.height()
	          , offsets = this.offsets
	          , targets = this.targets
	          , activeTarget = this.activeTarget
	          , i;

	        if (scrollTop >= maxScroll) {
	          return activeTarget != (i = targets.last()[0])
	            && this.activate ( i );
	        }

	        for (i = offsets.length; i--;) {
	          activeTarget != targets[i]
	            && scrollTop >= offsets[i]
	            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
	            && this.activate( targets[i] );
	        }
	      }

	    , activate: function (target) {
	        var active
	          , selector;

	        this.activeTarget = target;

	        $(this.selector)
	          .parent('.' + this.options.applyClass)
	          .removeClass(this.options.applyClass);

	        selector = this.selector
	          + '[data-target="' + target + '"],'
	          + this.selector + '[href="' + target + '"]';



	        active = $(selector)
	          .parent('li')
	          .addClass(this.options.applyClass);

	        if (active.parent('.sub-menu').length)  {
	          active = active.closest('li.dropdown_ul_available').addClass(this.options.applyClass);
	        }

	        active.trigger('activate');
	      }

	  };


	 /* AviaScrollSpy PLUGIN DEFINITION
	  * =========================== */

	  $.fn.avia_scrollspy = function (option) {
	    return this.each(function () {
	      var $this = $(this)
	        , data = $this.data('scrollspy')
	        , options = typeof option == 'object' && option;
	      if (!data) $this.data('scrollspy', (data = new AviaScrollSpy(this, options)));
	      if (typeof option == 'string') data[option]();
	    });
	  };

	  $.fn.avia_scrollspy.Constructor = AviaScrollSpy;

	  $.fn.avia_scrollspy.calc_offset = function()
	  {
		  var 	offset_1 = (parseInt($('.html_header_sticky #main').data('scroll-offset'), 10)) || 0,
		  		offset_2 = ($(".html_header_sticky:not(.html_top_nav_header) #header_main_alternate").outerHeight()) || 0,
		  		offset_3 = ($(".html_header_sticky.html_header_unstick_top_disabled #header_meta").outerHeight()) || 0,
		  		offset_4 =  1,
		  		offset_5 = parseInt($('html').css('margin-top'),10) || 0,
		  		offset_6 = parseInt($('.av-frame-top ').outerHeight(),10) || 0;

		  return offset_1 + offset_2 + offset_3 + offset_4 + offset_5 + offset_6;
	  };

	  $.fn.avia_scrollspy.defaults =
	  {
	    offset: $.fn.avia_scrollspy.calc_offset(),
	    applyClass: 'current-menu-item'
	  };


    // -------------------------------------------------------------------------------------------
    // detect browser and add class to body
    // -------------------------------------------------------------------------------------------
    function AviaBrowserDetection(outputClassElement)
    {
	    //code from the old jquery migrate plugin
	    var current_browser = {},

	    	uaMatch = function( ua )
			{
				ua = ua.toLowerCase();

				var match = /(edge)\/([\w.]+)/.exec( ua ) ||
				/(opr)[\/]([\w.]+)/.exec( ua ) ||
				/(chrome)[ \/]([\w.]+)/.exec( ua ) ||
				/(iemobile)[\/]([\w.]+)/.exec( ua ) ||
				/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
				/(msie) ([\w.]+)/.exec( ua ) ||
				ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
				[];

				return {
					  browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
					  version: match[ 2 ] || match[ 4 ] || "0",
					  versionNumber: match[ 4 ] || match[ 2 ] || "0"
					};
			};

		var matched = uaMatch( navigator.userAgent );

		if( matched.browser )
		{
			current_browser.browser = matched.browser;
			current_browser[ matched.browser ] = true;
			current_browser.version = matched.version;
		}

		// Chrome is Webkit, but Webkit is also Safari.
		if ( current_browser.chrome ) {
			current_browser.webkit = true;
		} else if ( current_browser.webkit ) {
			current_browser.safari = true;
		}

        if(typeof(current_browser) !== 'undefined')
        {
            var bodyclass = '',
				version = current_browser.version ? parseInt(current_browser.version) : "";

            if(current_browser.msie || current_browser.rv || current_browser.iemobile){
                bodyclass += 'avia-msie';
            }else if(current_browser.webkit){
                bodyclass += 'avia-webkit';
            }else if(current_browser.mozilla){
                bodyclass += 'avia-mozilla';
            }

            if(current_browser.version) bodyclass += ' ' + bodyclass + '-' + version + ' ';
            if(current_browser.browser) bodyclass += ' avia-' + current_browser.browser + ' avia-' +current_browser.browser +'-' + version + ' ';
        }

        if( outputClassElement )
		{
			$(outputClassElement).addClass( bodyclass );
		}

        return bodyclass;
    }

	/**
	 * Detect device features and add a class to body
	 */
	function AviaDeviceDetection( outputClassElement )
	{
		var classes = [];

		//	https://stackoverflow.com/questions/14439903/how-can-i-detect-device-touch-support-in-javascript
		$.avia_utilities.isTouchDevice = 'ontouchstart' in window ||
				window.DocumentTouch && document instanceof window.DocumentTouch ||
				navigator.maxTouchPoints > 0 ||
				window.navigator.msMaxTouchPoints > 0;

		classes.push( $.avia_utilities.isTouchDevice ? 'touch-device' : 'no-touch-device' );

		$.avia_utilities.pointerDevices = [];

		//	https://stackdiary.com/detect-mobile-browser-javascript/
		if( typeof window.matchMedia != 'function' )
		{
			$.avia_utilities.pointerDevices.push( 'undefined' );
			classes.push( 'pointer-device-undefined' );
		}
		else
		{
			var pointer_fine = false;

			if( window.matchMedia( '(any-pointer: fine)' ) )
			{
				classes.push( 'pointer-device-fine' );
				$.avia_utilities.pointerDevices.push( 'fine' );
				pointer_fine = true;
			}

			if( window.matchMedia( '(any-pointer: coarse)' ) )
			{
				classes.push( 'pointer-device-coarse' );
				$.avia_utilities.pointerDevices.push( 'coarse' );

				if( ! pointer_fine )
				{
					classes.push( 'pointer-device-coarse-only' );
				}
			}

			if( ! $.avia_utilities.pointerDevices.length )
			{
				classes.push( 'pointer-device-none' );
				$.avia_utilities.pointerDevices.push( 'none' );
			}
		}

		if( 'undefined' == typeof $.avia_utilities.isMobile )
		{
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
			{
				$.avia_utilities.isMobile = true;
			}
			else
			{
				$.avia_utilities.isMobile = false;
			}
		}

		$( outputClassElement ).addClass( classes.join( ' ') );
	}

    // -------------------------------------------------------------------------------------------
	// html 5 videos
	// -------------------------------------------------------------------------------------------
    $.fn.avia_html5_activation = function( options )
	{
		var defaults =
		{
			ratio: '16:9'
		};

		var options = $.extend( defaults, options );

//			isMobile = $.avia_utilities.isMobile;
//			if(isMobile) return;

		this.each( function()
		{
			var fv = $(this),
				id_to_apply = '#' + fv.attr('id'),
				posterImg = fv.attr('poster'),
				features = [ 'playpause', 'progress', 'current', 'duration', 'tracks', 'volume' ],
				container = fv.closest( '.avia-video' );

			if( container.length > 0 && container.hasClass( 'av-html5-fullscreen-btn' ) )
			{
				features.push( 'fullscreen' );
			}

			/*
			 * Hide controls
			 * https://kriesi.at/support/topic/video-not-appearing-properly-as-color-section-background/#post-1429866
			 *
			 * @since 5.6.10
			 */
			if( ! $(this).prop('controls') )
			{
				features = [];
			}

			fv.mediaelementplayer(
			{
				// if the <video width> is not specified, this is the default
				defaultVideoWidth: 480,
				// if the <video height> is not specified, this is the default
				defaultVideoHeight: 270,
				// if set, overrides <video width>
				videoWidth: -1,
				// if set, overrides <video height>
				videoHeight: -1,
				// width of audio player
				audioWidth: 400,
				// height of audio player
				audioHeight: 30,
				// initial volume when the player starts
				startVolume: 0.8,
				// useful for <audio> player loops
				loop: false,
				// enables Flash and Silverlight to resize to content size
				enableAutosize: false,
				// the order of controls you want on the control bar (and other plugins below)
				features: features,
				// Hide controls when playing and mouse is not over the video
				alwaysShowControls: false,
				// force iPad's native controls
				iPadUseNativeControls: false,
				// force iPhone's native controls
				iPhoneUseNativeControls: false,
				// force Android's native controls
				AndroidUseNativeControls: false,
				// forces the hour marker (##:00:00)
				alwaysShowHours: false,
				// show framecount in timecode (##:00:00:00)
				showTimecodeFrameCount: false,
				// used when showTimecodeFrameCount is set to true
				framesPerSecond: 25,
				// turns keyboard support on and off for this instance
				enableKeyboard: true,
				// when this player starts, it will pause other players
				pauseOtherPlayers: false,
				poster: posterImg,
				success: function( mediaElement, domObject, instance )
				{
					//make the medialement instance accesible by storing it. usually not necessary but safari has problems since wp version 4.9
					$.AviaVideoAPI.players[ fv.attr('id').replace( /_html5/,'' ) ] = instance;

					setTimeout(function()
					{
						if( mediaElement.pluginType == 'flash' )
						{
							mediaElement.addEventListener('canplay', function() { fv.trigger('av-mediajs-loaded'); }, false);
						}
						else
						{
							fv.trigger('av-mediajs-loaded').addClass('av-mediajs-loaded');
						}

						mediaElement.addEventListener('ended', function() {  fv.trigger('av-mediajs-ended'); }, false);

						var html5MediaElement = document.getElementById( $(mediaElement).attr('id') + '_html5' );
						if( html5MediaElement && html5MediaElement !== mediaElement )
						{
							mediaElement.addEventListener( "ended", function()
							{
								$( html5MediaElement ).trigger( 'av-mediajs-ended' );
							});
						}
					}, 10 );

				},
				// fires when a problem is detected
				error: function()
				{

				},
				// array of keyboard commands
				keyActions: []
			});
		});
	};

	// -------------------------------------------------------------------------------------------
	// hover effect for images
	// -------------------------------------------------------------------------------------------
	function avia_hover_effect( container )
	{
		//hover overlay for mobile device doesnt really make sense. in addition it often slows down the click event
		if( $.avia_utilities.isMobile )
		{
			return;
		}

		if( $('body').hasClass( 'av-disable-avia-hover-effect' ) )
		{
			return;
		}

		var overlay = "",
			cssTrans = $.avia_utilities.supports('transition'),
			elements = [];

		if(container == 'body')
		{
			elements = $('#main a img').parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .ls-wp-container a, .noHover, .noHover a, .av-logo-container .logo a').add('#main .avia-hover-fx');
		}
		else
		{
			elements = $('a img', container).parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .ls-wp-container a, .noHover, .noHover a, .av-logo-container .logo a').add('.avia-hover-fx', container);
		}

		elements.each( function(e)
		{
			var link = $(this),
				current = link.find('img').first();

			if( current.hasClass('alignleft') )
			{
				link.addClass('alignleft').css({float:'left', margin:0, padding:0});
			}

			if( current.hasClass('alignright') )
			{
				link.addClass('alignright').css({float:'right', margin:0, padding:0});
			}

			if( current.hasClass('aligncenter') )
			{
				link.addClass('aligncenter').css({float:'none','text-align':'center', margin:0, padding:0});
			}

			if( current.hasClass('alignnone') )
			{
			   link.addClass('alignnone').css({margin:0, padding:0});

			   if( ! link.css('display') || link.css('display') == 'inline' )
			   {
				   link.css({display:'inline-block'});
			   }
			}

			if( ! link.css('position') || link.css('position') == 'static' )
			{
				link.css({position:'relative', overflow:'hidden'});
			}

			var url		 	= link.attr('href'),
				span_class	= "overlay-type-video",
				opa			= link.data('opacity') || 0.7,
				overlay_offset = 5,
				overlay 	= link.find('.image-overlay');

			if(url)
			{
				if( url.match(/(jpg|gif|jpeg|png|tif)/) )
				{
					span_class = "overlay-type-image";
				}

				if( ! url.match(/(jpg|gif|jpeg|png|\.tif|\.mov|\.swf|vimeo\.com|youtube\.com)/) )
				{
					span_class = "overlay-type-extern";
				}
			}

			if( ! overlay.length )
			{
				overlay = $("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);
			}

			link.on('mouseenter', function(e)
			{
				var current = link.find('img').first(),
					_self	= current.get(0),
					outerH 	= current.outerHeight(),
					outerW 	= current.outerWidth(),
					pos		= current.position(),
					linkCss = link.css('display'),
					overlay = link.find('.image-overlay');

				if(outerH > 100)
				{
					if(!overlay.length)
					{
						overlay = $("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);

					}

					//can be wrapped into if !overlay.length statement if chrome fixes fade in problem
					if(link.height() == 0)
					{
						link.addClass(_self.className); _self.className = "";
					}

					if( ! linkCss || linkCss == 'inline')
					{
						link.css({display:'block'});
					}
					//end wrap

					overlay.css({left:(pos.left - overlay_offset) + parseInt(current.css("margin-left"),10), top:pos.top + parseInt(current.css("margin-top"),10)})
						   .css({overflow:'hidden',display:'block','height':outerH,'width':(outerW + (2*overlay_offset))});

					if( cssTrans === false )
					{
						overlay.stop().animate({opacity:opa}, 400);
					}
				}
				else
				{
					overlay.css({display:"none"});
				}

			}).on('mouseleave', elements, function()
			{
				if(overlay.length)
				{
					if(cssTrans === false )
					{
						overlay.stop().animate({opacity:0}, 400);
					}
				}
			});
		});
	}


// -------------------------------------------------------------------------------------------
// Smooth scrooling when clicking on anchor links
// todo: maybe use https://github.com/ryanburnette/scrollToBySpeed/blob/master/src/scrolltobyspeed.jquery.js in the future
// -------------------------------------------------------------------------------------------

	(function($)
	{
		$.fn.avia_smoothscroll = function( apply_to_container )
		{
			if( ! this.length )
			{
				return;
			}

			var the_win = $(window),
				$header = $('#header'),
				$main 	= $('.html_header_top.html_header_sticky #main').not('.page-template-template-blank-php #main'),
				$meta 	= $('.html_header_top.html_header_unstick_top_disabled #header_meta'),
				$alt  	= $('.html_header_top:not(.html_top_nav_header) #header_main_alternate'),
				menu_above_logo = $('.html_header_top.html_top_nav_header'),
				shrink	= $('.html_header_top.html_header_shrinking').length,
				frame	= $('.av-frame-top'),
				fixedMainPadding = 0,
				isMobile = $.avia_utilities.isMobile,
				sticky_sub = $('.sticky_placeholder').first(),
				calc_main_padding = function()
				{
					if( $header.css('position') == "fixed" )
					{
						var tempPadding = parseInt($main.data('scroll-offset'),10) || 0,
							non_shrinking = parseInt($meta.outerHeight(),10) || 0,
							non_shrinking2 = parseInt($alt.outerHeight(),10) || 0;

						if( tempPadding > 0 && shrink )
						{
							tempPadding = (tempPadding / 2 ) + non_shrinking + non_shrinking2;
						}
						else
						{
							tempPadding = tempPadding + non_shrinking + non_shrinking2;
						}

						tempPadding += parseInt($('html').css('margin-top'),10);
						fixedMainPadding = tempPadding;
					}
					else
					{
						fixedMainPadding = parseInt($('html').css('margin-top'),10);
					}

					if( frame.length )
					{
						fixedMainPadding += frame.height();
					}

					if( menu_above_logo.length )
					{
						//if menu is above logo and we got a sticky height header
						fixedMainPadding = $('.html_header_sticky #header_main_alternate').height() + parseInt($('html').css('margin-top'),10);
					}

					if( isMobile )
					{
						fixedMainPadding = 0;
					}

				};

			if( isMobile )
			{
				shrink = false;
			}

			calc_main_padding();
			the_win.on( "debouncedresize av-height-change", calc_main_padding );

			var hash = window.location.hash.replace(/\//g, "");

			//if a scroll event occurs at pageload and an anchor is set and a coresponding element exists apply the offset to the event
			if( fixedMainPadding > 0 && hash && apply_to_container == 'body' && hash.charAt(1) != "!" && hash.indexOf("=") === -1 )
			{
				var scroll_to_el = $(hash), modifier = 0;

				if( scroll_to_el.length )
				{
					the_win.on('scroll.avia_first_scroll', function()
					{
						setTimeout( function()		//small delay so other scripts can perform necessary resizing
						{
							if( sticky_sub.length && scroll_to_el.offset().top > sticky_sub.offset().top )
							{
								modifier = sticky_sub.outerHeight() - 3;
							}

							the_win.off( 'scroll.avia_first_scroll' ).scrollTop( scroll_to_el.offset().top - fixedMainPadding - modifier );
						},10);
				    });
			    }
			}

			return this.each(function()
			{
				$(this).on('click', function(e)
				{
					var newHash = this.hash.replace(/\//g, ""),
						clicked = $(this),
						data = clicked.data(),
						ignoreScroll = false,
						noScrolInViewport = 'undefined' != typeof data.no_scroll_in_viewport && data.no_scroll_in_viewport == 1,
						ignoreHash = 'undefined' != typeof data.ignore_hash && data.ignore_hash == 1;

					if( newHash != '' && newHash != '#' && newHash != '#prev' && newHash != '#next' && !clicked.is('.comment-reply-link, #cancel-comment-reply-link, .no-scroll'))
					{
						var container = "",
							originHash = "";

						if( '#next-section' == newHash )
						{
							originHash = newHash;

							//	@since 4.8.3 check to scroll to visible sections only (e.g. sections could be hidden on different devices
							var next_containers = clicked.parents('.container_wrap').eq( 0 ).nextAll('.container_wrap');
							next_containers.each( function()
							{
							   var cont = $( this );

							   if( cont.css( 'display' ) == 'none' || cont.css( 'visibility' ) == 'hidden' )
							   {
								   return;
							   }

							   container = cont;
							   return false;
							});

							if( 'object' == typeof container && container.length > 0 )
							{
								newHash = '#' + container.attr('id') ;
							}
						}
						else
						{
							 container = $( this.hash.replace(/\//g, "") );
						}

						//	check if element is already in viewport
						if( container.length && noScrolInViewport )
						{
							const rect = container[0].getBoundingClientRect();

							if( rect.top > fixedMainPadding && ( rect.top < (window.innerHeight || document.documentElement.clientHeight) ) )
							{
								ignoreScroll = true;
							}
						}

						if( container.length && ! ignoreScroll )
						{
							var cur_offset = the_win.scrollTop(),
								container_offset = container.offset().top,
								target =  container_offset - fixedMainPadding,
								hash = window.location.hash,
								hash = hash.replace(/\//g, ""),
								oldLocation = window.location.href.replace(hash, ''),
								newLocation = this,
								duration = data.duration || 1200,
								easing = data.easing || 'easeInOutQuint';

							if( sticky_sub.length && container_offset > sticky_sub.offset().top )
							{
								target -= sticky_sub.outerHeight() - 3;
							}
							if( 'undefined' != typeof data.scroll_top_offset && Number.isInteger( data.scroll_top_offset ) )
							{
								target -= data.scroll_top_offset;
							}

							// make sure it's the same location
							if( oldLocation + newHash == newLocation || originHash )
							{
								if( cur_offset != target ) // if current pos and target are the same dont scroll
								{
									if( ! ( cur_offset == 0 && target <= 0 ) ) // if we are at the top dont try to scroll to top or above
									{
										the_win.trigger('avia_smooth_scroll_start');

										// animate to target and set the hash to the window.location after the animation
										$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target }, duration, easing, function()
										{
											the_win.trigger('avia_smooth_scroll_end');

											if( ! ignoreHash )
											{
												// add new hash to the browser location
												//window.location.href=newLocation;
												if( window.history.replaceState )
												{
													window.history.replaceState( "", "", newHash );
												}
											}
										});
									}
								}

								// cancel default click action
								e.preventDefault();
							}
						}
					}
				});
			});
		};
	})(jQuery);


	// -------------------------------------------------------------------------------------------
	// iframe fix for firefox and ie so they get proper z index
	// -------------------------------------------------------------------------------------------
	function avia_iframe_fix(container)
	{
		var iframe 	= jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame)', container),
			youtubeEmbed = jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame) object, iframe[src*="youtube.com"]:not(.av_youtube_frame) embed', container).attr('wmode','opaque');

			iframe.each(function()
			{
				var current = jQuery(this),
					src 	= current.attr('src');

				if(src)
				{
					if(src.indexOf('?') !== -1)
					{
						src += "&wmode=opaque&rel=0";
					}
					else
					{
						src += "?wmode=opaque&rel=0";
					}

					current.attr('src', src);
				}
			});
	}

	// -------------------------------------------------------------------------------------------
	// small js fixes for pixel perfection :)
	// -------------------------------------------------------------------------------------------
	function avia_small_fixes(container)
	{
		if(!container) container = document;

		//make sure that iframes do resize correctly. uses css padding bottom iframe trick
		var win		= jQuery(window),
			iframes = jQuery('.avia-iframe-wrap iframe:not(.avia-slideshow iframe):not(iframe.no_resize):not(.avia-video iframe):not(.wp-embedded-content)', container),
			adjust_iframes = function()
			{
				iframes.each(function(){

					var iframe = jQuery(this), parent = iframe.parent(), proportions = 56.25;

					if(this.width && this.height)
					{
						proportions = (100/ this.width) * this.height;
						parent.css({"padding-bottom":proportions+"%"});
					}
				});
			};

			adjust_iframes();

	}

   function avia_scroll_top_fade()
   {
   		 var win = $(window),
   		 	 timeo = false,
   		 	 scroll_top = $('#scroll-top-link'),
   		 	 set_status = function()
             {
             	var st = win.scrollTop();

             	if(st < 500)
             	{
             		scroll_top.removeClass('avia_pop_class');
             	}
             	else if(!scroll_top.is('.avia_pop_class'))
             	{
             		scroll_top.addClass('avia_pop_class');
             	}
             };

   		 win.on( 'scroll',  function(){ window.requestAnimationFrame( set_status ); } );
         set_status();
	}

	$.AviaAjaxSearch = function( options )
	{
		var defaults = {
			delay: 300,                //delay in ms until the user stops typing.
			minChars: 3,               //dont start searching before we got at least that much characters
			scope: 'body'
		};

		this.options = $.extend({}, defaults, options);
		this.scope   = $(this.options.scope);
		this.timer   = false;
		this.lastVal = "";

		this.bind_events();
	};

	$.AviaAjaxSearch.prototype =
    {
        bind_events: function()
        {
            this.scope.on( 'keyup', '#s:not(".av_disable_ajax_search #s")', this.try_search.bind( this ) );
            this.scope.on( 'click', '#s.av-results-parked', this.reset.bind( this ) );
        },

        try_search: function(e)
        {
            var form = $(e.currentTarget).parents('form').eq( 0 ),
                resultscontainer = form.find('.ajax_search_response');

            clearTimeout(this.timer);

			// clear on ESC
            if( e.keyCode === 27 )
			{
                this.reset(e);
				return;
			}

            //only execute search if chars are at least "minChars" and search differs from last one
            if(e.currentTarget.value.length >= this.options.minChars && this.lastVal != e.currentTarget.value.trim() )
            {
                //wait at least "delay" milliseconds to execute ajax. if user types again during that time dont execute
                this.timer = setTimeout( this.do_search.bind( this, e ), this.options.delay );
            }
            //remove the results container if the input field has been emptied
            else if ( e.currentTarget.value.length == 0 )
			{
                this.timer = setTimeout( this.reset.bind( this, e ), this.options.delay );
			}
        },

		reset: function(e)
		{
            var form = $(e.currentTarget).parents('form').eq( 0 ),
				resultscontainer = form.find('.ajax_search_response'),
				alternative_resultscontainer = $(form.attr('data-ajaxcontainer')).find('.ajax_search_response'),
				searchInput = $(e.currentTarget);

            // bring back results that were hidden when user clicked outside the form element
            if ($(e.currentTarget).hasClass('av-results-parked')) {
                resultscontainer.show();
                alternative_resultscontainer.show();

                // in case results container is attached to body
                $('body > .ajax_search_response').show();
			}
			else {
                // remove results and delete the input value
                resultscontainer.remove();
                alternative_resultscontainer.remove();
                searchInput.val('');

                // in case results container is attached to body
                $('body > .ajax_search_response').remove();
			}


		},

        do_search: function(e)
        {
            var obj = this,
                currentField = $(e.currentTarget).attr( "autocomplete", "off" ),
				currentFieldWrapper = $(e.currentTarget).parents('.av_searchform_wrapper').eq( 0 ),
                currentField_position = currentFieldWrapper.offset(),
                currentField_width = currentFieldWrapper.outerWidth(),
                currentField_height = currentFieldWrapper.outerHeight(),
				form = currentField.parents('form').eq( 0 ),
				submitbtn = form.find('#searchsubmit'),
                resultscontainer = form,
                results = resultscontainer.find('.ajax_search_response'),
                loading = $('<div class="ajax_load"><span class="ajax_load_inner"></span></div>'),
                action = form.attr('action'),
                values = form.serialize(),
				elementID = form.data('element_id'),
				custom_color = form.data('custom_color');

			values += '&action=avia_ajax_search';


            // define results div if not found
            if( ! results.length )
			{
                results = $('<div class="ajax_search_response" style="display:none;"></div>');
            }

			if( 'undefined' != typeof elementID )
			{
				results.addClass( elementID );
			}

			if( 'undefined' != typeof custom_color && custom_color != '' )
			{
				results.addClass( 'av_has_custom_color' );
			}

            // add class to differentiate betweeen search element and header search
			if( form.attr('id') == 'searchform_element')
			{
				results.addClass('av_searchform_element_results');
			}

            //check if the form got get parameters applied and also apply them
           	if(action.indexOf('?') != -1)
           	{
           		action  = action.split('?');
           		values += "&" + action[1];
           	}

           	//check if there is a results container defined
			if( form.attr('data-ajaxcontainer') )
			{
                var rescon = form.attr('data-ajaxcontainer');

                // check if defined container exists
                if ($(rescon).length)
				{
                	// remove previous search results
					$(rescon).find('.ajax_search_response').remove();

                    resultscontainer = $(rescon);
				}
			}

			/*
			 * For the placement option: "Under the search form - overlay other content",
			 * we have to attach the results to the body in order to overlay the other content,
			 * and we calculate it's position using the search field
			 */

            results_css = {};

			if( form.hasClass('av_results_container_fixed') )
			{
				// remove previous search results
				$('body').find('.ajax_search_response').remove();

				resultscontainer = $('body');

				// add class and position to results if defined above
				var results_css = {
								top: currentField_position.top + currentField_height,
								left: currentField_position.left,
								width: currentField_width
							};

				// make sure default stylesheet is applied
				results.addClass('main_color');

				// remove results and reset if window is resized
				$( window ).resize( function()
				{
					results.remove();
					this.reset.bind( this );
					currentField.val('');
				});
			}

            // add additional styles - for backwards comp. only. Attribute has been removed in 4.8.7 with header styles
            if ( form.attr('data-results_style') )
			{
                var results_style = JSON.parse(form.attr('data-results_style'));
                results_css = Object.assign(results_css, results_style);

                // add class if font color is applied, so we can use color: inherit
                if( "color" in results_css )
				{
                    results.addClass('av_has_custom_color');
                }
            }

            // apply inline styles
            results.css(results_css);

            // add .container class if resultscontainer in a color section
			if( resultscontainer.hasClass('avia-section') )
			{
				results.addClass('container');
			}

            // append results to defined container
            results.appendTo(resultscontainer);


			//return if we already hit a no result and user is still typing
			if(results.find('.ajax_not_found').length && e.currentTarget.value.indexOf(this.lastVal) != -1)
			{
				return;
			}

			this.lastVal = e.currentTarget.value;

			$.ajax({
				url: avia_framework_globals.ajaxurl,
				type: "POST",
				data:values,
				beforeSend: function()
				{
					// add loader after submit button
					loading.insertAfter(submitbtn);
					form.addClass('ajax_loading_now');
				},
				success: function(response)
				{
					if(response == 0)
					{
						response = "";
					}

					results.html(response).show();
				},
				complete: function()
				{
					loading.remove();
					form.removeClass('ajax_loading_now');
				}
			});

            // Hide search resuls if user clicks anywhere outside the form element
			$(document).on('click',function(e)
			{
				if(!$(e.target).closest(form).length)
				{
					if($(results).is(":visible"))
					{
						$(results).hide();
						currentField.addClass('av-results-parked');
					}
				}
			});
		}
	};


	$.AviaTooltip = function( options )
	{
	   var defaults = {
            delay: 1500,                //delay in ms until the tooltip appears
            delayOut: 300,             	//delay in ms when instant showing should stop
            delayHide: 0,             	//delay hiding of tooltip in ms
            "class": "avia-tooltip",   	//tooltip classname for css styling and alignment
            scope: "body",             	//area the tooltip should be applied to
            data:  "avia-tooltip",     	//data attribute that contains the tooltip text
            attach: "body",          	//either attach the tooltip to the "mouse" or to the "element" // todo: implement mouse, make sure that it doesnt overlap with screen borders
            event: 'mouseenter',       	//mousenter and leave or click and leave
            position: 'top',             //top or bottom
            extraClass: 'avia-tooltip-class', //extra class that is defined by a tooltip element data attribute
            permanent: false, 			// always display the tooltip?
            within_screen: false,		// if the tooltip is displayed outside the screen adjust its position
            close_keys: null			// string|[] of keyCodes to close the tooltip (there is no check for empty value !! )
        };

        this.options = $.extend({}, defaults, options);

		var close_keys = '';
		if( this.options.close_keys != null )
		{
			if( ! Array.isArray( this.options.close_keys ) )
			{
				this.options.close_keys = [ this.options.close_keys ];
			}
			close_keys = ' data-close-keys="' + this.options.close_keys.join( ',' ) + '" ';
		}

        this.body    = $('body');
        this.scope   = $(this.options.scope);
		this.tooltip = $( '<div class="' + this.options['class'] + ' avia-tt"' + close_keys + '><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></div>' );
        this.inner   = $( '<div class="inner_tooltip"></div>').prependTo(this.tooltip);
        this.open    = false;
        this.timer   = false;
        this.active  = false;

        this.bind_events();
	};

	$.AviaTooltip.openTTs = [];
	$.AviaTooltip.openTT_Elements = [];

    $.AviaTooltip.prototype =
    {
        bind_events: function()
        {
	        var perma_tooltips		= '.av-permanent-tooltip [data-'+this.options.data+']',
	        	default_tooltips	= '[data-'+this.options.data+']:not( .av-permanent-tooltip [data-'+this.options.data+'])';

	        this.scope.on( 'av_permanent_show', perma_tooltips, this.display_tooltip.bind( this ) );
	        $(perma_tooltips).addClass('av-perma-tooltip').trigger('av_permanent_show');


			this.scope.on( this.options.event + ' mouseleave', default_tooltips, this.start_countdown.bind( this ) );

            if(this.options.event != 'click')
            {
                this.scope.on( 'mouseleave', default_tooltips, this.hide_tooltip.bind( this ) );
				this.scope.on( 'click', default_tooltips, this.hide_on_click_tooltip.bind( this ) );
            }
            else
            {
                this.body.on( 'mousedown', this.hide_tooltip.bind( this ) );
            }

			if( this.options.close_keys != null )
			{
				this.body.on( 'keyup', this.close_on_keyup.bind( this ) );
			}
        },

        start_countdown: function(e)
        {
            clearTimeout(this.timer);

			var target 		= this.options.event == "click" ? e.target : e.currentTarget,
            	element 	= $(target);

            if( e.type == this.options.event )
            {
                var delay = this.options.event == 'click' ? 0 : this.open ? 0 : this.options.delay;

                this.timer = setTimeout( this.display_tooltip.bind( this, e ), delay );
            }
            else if( e.type == 'mouseleave' )
            {
				if( ! element.hasClass( 'av-close-on-click-tooltip' ) )
				{
					this.timer = setTimeout( this.stop_instant_open.bind( this, e ), this.options.delayOut);
				}
            }
            e.preventDefault();
        },

        reset_countdown: function(e)
        {
            clearTimeout( this.timer );
            this.timer = false;
        },

        display_tooltip: function(e)
        {
            let _self = this,
            	target = this.options.event == "click" ? e.target : e.currentTarget,
				text = $(target).data( this.options.data );

			text = 'string' == typeof text ? text.trim() : '';

			if( $('header').hasClass('av_header_transparency') )
			{
				/**
				 * svg icon in ajax search returns <svg> and not <a> (this is a hack as no solution with CSS)
				 *
				 * @since 7.0
				 */
				if( text == '' )
				{
					target = e.currentTarget;
					text = $(target).data( this.options.data );
					text = 'string' == typeof text ? text.trim() : '';
				}
			}

            let	element = $(target),
                tip_index = element.data('avia-created-tooltip'),
            	extraClass = element.data('avia-tooltip-class'),
                attach = this.options.attach == 'element' ? element : this.body,
                offset = this.options.attach == 'element' ? element.position() : element.offset(),
                position = element.data('avia-tooltip-position'),
                align = element.data('avia-tooltip-alignment'),
                force_append = false,
				newTip = false,
				is_new_tip = false;

            if( element.is('.av-perma-tooltip') )
            {
	            offset = { top:0, left:0 };
	        	attach = element;
				force_append = true;
            }

			if( text == '' )
			{
				return;
			}

			if( position == "" || typeof position == 'undefined' )
			{
				position = this.options.position;
			}

			if( align == "" || typeof align == 'undefined' )
			{
				align = 'center';
			}

			if( typeof tip_index != 'undefined' )
			{
				newTip = $.AviaTooltip.openTTs[tip_index];
			}
			else
			{
				this.inner.html(text);
				newTip = this.tooltip.clone();
				is_new_tip = true;

				if( this.options.attach == 'element' && force_append !== true )
				{
					newTip.insertAfter(attach);
				}
				else
				{
					newTip.appendTo(attach);
				}

                if(extraClass != "")
				{
					newTip.addClass(extraClass);
				}
			}

			if( this.open && this.active == newTip )
			{
				return;
			}

			if( element.hasClass( 'av-close-on-click-tooltip' ) )
			{
				this.hide_all_tooltips();
			}

            this.open = true;
            this.active = newTip;

            if( ( newTip.is(':animated:visible') && e.type == 'click' ) || element.is( '.' + this.options['class'] ) || element.parents( '.' + this.options['class'] ).length != 0 )
			{
				return;
			}

            var animate1 = {},
				animate2 = {},
				pos1 = "",
				pos2 = "";

			if( position == "top" || position == "bottom" )
			{
				switch(align)
				{
					case "left":
						pos2 = offset.left;
						break;
					case "right":
						pos2 = offset.left + element.outerWidth() - newTip.outerWidth();
						break;
					default:
						pos2 = ( offset.left + ( element.outerWidth() / 2 ) ) - ( newTip.outerWidth() / 2 );
						break;
				}

				if(_self.options.within_screen) //used to keep search field inside screen
				{
					var boundary = element.offset().left + (element.outerWidth() / 2) - (newTip.outerWidth() / 2) + parseInt(newTip.css('margin-left'),10);
					if(boundary < 0)
					{
						pos2 = pos2 - boundary;
					}
				}
			}
			else
			{
				switch(align)
				{
					case "top":
						pos1 = offset.top;
						break;
					case "bottom":
						pos1 = offset.top + element.outerHeight() - newTip.outerHeight();
						break;
					default:
						pos1 = ( offset.top + (element.outerHeight() / 2 ) ) - ( newTip.outerHeight() / 2 );
						break;
				}
			}

			switch(position)
			{
				case "top":
					pos1 = offset.top - newTip.outerHeight();
					animate1 = {top: pos1 - 10, left: pos2};
					animate2 = {top: pos1};
					break;
				case "bottom":
					pos1 = offset.top + element.outerHeight();
					animate1 = {top: pos1 + 10, left: pos2};
					animate2 = {top: pos1};
					break;
				case "left":
					pos2 = offset.left  - newTip.outerWidth();
					animate1 = {top: pos1, left: pos2 -10};
					animate2 = {left: pos2};
					break;
				case "right":
					pos2 = offset.left + element.outerWidth();
					animate1 = {top: pos1, left: pos2 + 10};
					animate2 = {left: pos2};
					break;
			}

			animate1['display'] = "block";
			animate1['opacity'] = 0;
			animate2['opacity'] = 1;

            newTip.css(animate1).stop().animate(animate2,200);

            newTip.find('input, textarea').trigger('focus');
			if( is_new_tip )
			{
				$.AviaTooltip.openTTs.push(newTip);
				$.AviaTooltip.openTT_Elements.push(element);
				element.data('avia-created-tooltip', $.AviaTooltip.openTTs.length - 1);
			}
        },

		hide_on_click_tooltip: function(e)
		{
			if( this.options.event == "click" )
			{
				return;
			}

			var element = $( e.currentTarget );

			if( ! element.hasClass('av-close-on-click-tooltip') )
			{
				return;
			}

			if( ! element.find( 'a' ) )
			{
				e.preventDefault();
			}

			//	Default behaviour when using mouse - click on active tooltip closes it (moving mouse to another tooltip close others automatically
			//	On mobile devices or when using touchscreen we show element on click (= old behaviour) and hide when same element
			var ttip_index = element.data('avia-created-tooltip');

			if( 'undefined' != typeof ttip_index )
			{
				var current = $.AviaTooltip.openTTs[ttip_index];
				if( 'undefined' != typeof current && current == this.active )
				{
					this.hide_all_tooltips();
				}
			}

		},

		close_on_keyup: function( e )
		{
			if( this.options.close_keys == null )
			{
				return;
			}

			if( $.inArray( e.keyCode, this.options.close_keys ) < 0 )
			{
				return;
			}

			this.hide_all_tooltips( e.keyCode );
		},

		hide_all_tooltips: function( keyCode )
		{
			var ttip,
				position,
				element,
				keyCodeCheck = 'undefined' != typeof keyCode ? keyCode + '' : null;

			for( var index = 0; index < $.AviaTooltip.openTTs.length; ++index )
			{
				ttip = $.AviaTooltip.openTTs[index];
				element = $.AviaTooltip.openTT_Elements[index];
				position = element.data('avia-tooltip-position');

				//	check if tooltip can be closed on keyup
				if( keyCodeCheck != null )
				{
					var keys = ttip.data( 'close-keys' );
					if( 'undefined' == typeof keys )
					{
						continue;
					}

					keys = keys + '';
					keys = keys.split( ',' );
					if( $.inArray( keyCodeCheck, keys ) < 0 )
					{
						continue;
					}
				}

				this.animate_hide_tooltip( ttip, position );
			}

			this.open = false;
			this.active  = false;
		},

        hide_tooltip: function(e)
        {
            var element 	= $(e.currentTarget) , newTip, animateTo,
            	position	= element.data('avia-tooltip-position'),
                align		= element.data('avia-tooltip-alignment'),
				newTip		= false;

            if( position == "" || typeof position == 'undefined' )
			{
				position = this.options.position;
			}

			if( align == "" || typeof align == 'undefined' )
			{
				align = 'center';
			}

            if( this.options.event == 'click' )
            {
                element = $(e.target);

                if( ! element.is( '.' + this.options['class'] ) && element.parents( '.' + this.options['class'] ).length == 0 )
                {
                    if( this.active.length )
					{
						newTip = this.active;
						this.active = false;
					}
                }
            }
            else
            {
				if( ! element.hasClass( 'av-close-on-click-tooltip' ) )
				{
					newTip = element.data('avia-created-tooltip');
					newTip = typeof newTip != 'undefined' ? $.AviaTooltip.openTTs[newTip] : false;
				}
            }

            this.animate_hide_tooltip( newTip, position );
        },

		animate_hide_tooltip: function( ttip, position )
		{
			if(ttip)
            {
            	var animate = {opacity:0};

            	switch(position)
            	{
            		case "top":
						animate['top'] = parseInt(ttip.css('top'),10) - 10;
						break;
					case "bottom":
						animate['top'] = parseInt(ttip.css('top'),10) + 10;
						break;
					case "left":
						animate['left'] = parseInt(ttip.css('left'), 10) - 10;
						break;
					case "right":
						animate['left'] = parseInt(ttip.css('left'), 10) + 10;
						break;
            	}

                ttip.animate( animate, 200, function()
                {
                    ttip.css({display:'none'});
                });
			}
		},

        stop_instant_open: function(e)
        {
            this.open = false;
        }
    };

})( jQuery );


(function($)
{
	"use strict";

	$( function()
	{
		/**
		 * Performance fix to pass pagespeed test
		 *
		 * https://stackoverflow.com/questions/60357083/does-not-use-passive-listeners-to-improve-scrolling-performance-lighthouse-repo#62177358
		 * @since 5.4
		 */
		$.event.special.touchstart = {
							setup: function( _, ns, handle )
							{
								this.addEventListener( "touchstart", handle, { passive: !ns.includes("noPreventDefault") } );
							}
						};

		$.event.special.touchmove = {
							setup: function( _, ns, handle )
							{
								this.addEventListener( "touchmove", handle, { passive: !ns.includes("noPreventDefault") } );
							}
						};

		$.event.special.wheel = {
							setup: function( _, ns, handle )
							{
								this.addEventListener( "wheel", handle, { passive: true } );
							}
						};

		$.event.special.mousewheel = {
							setup: function( _, ns, handle )
							{
								this.addEventListener( "mousewheel", handle, { passive: true } );
							}
						};

	});

})( jQuery );


/**
 * Waypoints - 4.0.2
 * Copyright © 2011-2016 Caleb Troughton (up to 4.0.1)
 * Licensed under the MIT license.
 * https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
 *
 * @since 5.2   moved to own folder /waypoints
 */


// http://paulirish.com/2011/requestanimationframe-for-smart-animating/ + http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel. can be removed if IE9 is no longer supported or all parallax scripts are gone
// MIT license
(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}());

jQuery.expr.pseudos.regex = function(elem, index, match)
{
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);

    return regex.test(jQuery(elem)[attr.method](attr.property));
};


;

;/* avia-shortcodes-js */
(function($)
{
	"use strict";

	$( function()
	{
		//global variables that are used on several ocassions
		$.avia_utilities = $.avia_utilities || {};

		if( 'undefined' == typeof $.avia_utilities.isMobile )
		{
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
			{
				$.avia_utilities.isMobile = true;
			}
			else
			{
				$.avia_utilities.isMobile = false;
			}
		}

		//activate fixed bg fallback for mobile
		if( $.fn.avia_mobile_fixed )
		{
			$( '.avia-bg-style-fixed' ).avia_mobile_fixed();
		}

		//calculate the browser height and append a css rule to the head
		if( $.fn.avia_browser_height )
		{
			$( '.av-minimum-height, .avia-fullscreen-slider, .av-cell-min-height' ).avia_browser_height();
		}

		//calculate the element height in a layout container
		if( $.fn.avia_container_height )
		{
			$( '.av-column-min-height-pc' ).avia_container_height();
		}

		//calculate the height of each video section
		if( $.fn.avia_video_section )
		{
			$( '.av-section-with-video-bg' ).avia_video_section();
		}

		//creates team social icon tooltip
		new $.AviaTooltip({'class': "avia-tooltip", data: "avia-tooltip", delay:0, scope: "body"});

		//creates icon element tooltip
		new $.AviaTooltip({'class': "avia-tooltip avia-icon-tooltip", data: "avia-icon-tooltip", delay:0, scope: "body"});

		$.avia_utilities.activate_shortcode_scripts();

		//layer slider height helper
		if( $.fn.layer_slider_height_helper )
		{
			$( '.avia-layerslider' ).layer_slider_height_helper();
		}

		//"ajax" portfolio
		if( $.fn.avia_portfolio_preview )
		{
			$( '.grid-links-ajax' ).avia_portfolio_preview();
		}

		// activate the masonry script: sorting/loading/etc
		if( $.fn.avia_masonry )
		{
			$( '.av-masonry' ).avia_masonry();
		}

		//activate the accordion
		if( $.fn.aviaccordion )
		{
			$( '.aviaccordion' ).aviaccordion();
		}


		//activate the accordion
		if( $.fn.avia_textrotator )
		{
			$( '.av-rotator-container' ).avia_textrotator();
		}

		//activates the tab section and slideshow section shortcode
		if( $.fn.avia_sc_tab_section )
		{
			$( '.av-tab-section-container' ).avia_sc_tab_section();
		}

		//activates the hor gallery  shortcode
		if( $.fn.avia_hor_gallery )
		{
			$( '.av-horizontal-gallery' ).avia_hor_gallery();
		}

		//	activate columns and cells with a link
		if( $.fn.avia_link_column )
		{
			$( '.avia-link-column' ).avia_link_column();
		}

		if( $.fn.avia_delayed_animation_in_container )
		{
			$( '.av-animation-delay-container' ).avia_delayed_animation_in_container();
		}
	});


// -------------------------------------------------------------------------------------------
// ACTIVATE ALL SHORTCODES
// -------------------------------------------------------------------------------------------

	$.avia_utilities = $.avia_utilities || {};
	$.avia_utilities.activate_shortcode_scripts = function( container )
	{
		if( typeof container == 'undefined' )
		{
			container = 'body';
		}

		//activates the form shortcode
		if( $.fn.avia_ajax_form )
		{
			$( '.avia_ajax_form:not( .avia-disable-default-ajax )', container ).avia_ajax_form();
		}

		activate_waypoints( container );

		//activate the video api
		if( $.fn.aviaVideoApi )
		{
			$( '.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .av_vimeo_frame, .avia-slideshow video' ).aviaVideoApi({}, 'li');
		}

	    //activates the toggle shortcode
		if( $.fn.avia_sc_toggle )
		{
			$( '.togglecontainer', container ).avia_sc_toggle();
		}

		//activates the tabs shortcode
		if( $.fn.avia_sc_tabs )
		{
			$( '.top_tab', container ).avia_sc_tabs();
			$( '.sidebar_tab', container ).avia_sc_tabs({sidebar:true});
		}

		//activates behavior and animation for gallery
		if( $.fn.avia_sc_gallery )
		{
			$( '.avia-gallery', container ).avia_sc_gallery();
		}

		//activates animated number shortcode
		if( $.fn.avia_sc_animated_number )
		{
			$( '.avia-animated-number', container ).avia_sc_animated_number();
		}

		//animation for elements that are not connected like icon shortcode
		if( $.fn.avia_sc_animation_delayed )
		{
			$( '.av_font_icon', container ).avia_sc_animation_delayed({delay:100});
			$( '.avia-image-container', container ).avia_sc_animation_delayed({delay:100});
			$( '.av-hotspot-image-container', container ).avia_sc_animation_delayed({delay:100});
			$( '.av-animated-generic', container ).avia_sc_animation_delayed({delay:100});

			//	@since 5.0 - avoid conflict with already existing classes
			$( '.av-animated-when-visible', container ).avia_sc_animation_delayed({delay:100});
			$( '.av-animated-when-almost-visible', container ).avia_sc_animation_delayed({delay:100});
			$( '.av-animated-when-visible-95', container ).avia_sc_animation_delayed({delay:100});
		}

		//activates animation for iconlist
		if( $.fn.avia_sc_iconlist )
		{
			$( '.avia-icon-list.av-iconlist-big.avia-iconlist-animate', container ).avia_sc_iconlist();
		}

		//activates animation for progress bar
		if( $.fn.avia_sc_progressbar )
		{
			$( '.avia-progress-bar-container', container ).avia_sc_progressbar();
		}

		//activates animation for testimonial
		if( $.fn.avia_sc_testimonial )
		{
			$( '.avia-testimonial-wrapper', container ).avia_sc_testimonial();
		}

		//activate the fullscreen slider
		if( $.fn.aviaFullscreenSlider )
		{
			$( '.avia-slideshow.av_fullscreen', container ).aviaFullscreenSlider();
		}

		//activate the aviaslider
		if( $.fn.aviaSlider )
		{
			$( '.avia-slideshow:not(.av_fullscreen)', container ).aviaSlider();

			//content slider
        	$( '.avia-content-slider-active', container ).aviaSlider({wrapElement: '.avia-content-slider-inner', slideElement: '.slide-entry-wrap', fullfade: true});

			//testimonial slider
			$( '.avia-slider-testimonials', container ).aviaSlider({wrapElement: '.avia-testimonial-row', slideElement: '.avia-testimonial', fullfade: true});
        }

		//load magazine sorting
		if( $.fn.aviaMagazine )
		{
			$( '.av-magazine-tabs-active', container ).aviaMagazine();
		}

		//load image hotspot
		if( $.fn.aviaHotspots )
		{
			$( '.av-hotspot-image-container', container ).aviaHotspots();
		}

		//load countdown
		if( $.fn.aviaCountdown )
		{
			$( '.av-countdown-timer', container ).aviaCountdown();
		}

		//load audio player
		if( $.fn.aviaPlayer )
		{
			$( '.av-player', container ).aviaPlayer();
		}

		//	load icon circles
		if( $.fn.aviaIconCircles )
		{
			$('.av-icon-circles-container').aviaIconCircles();
		}

		//	load icon grid
		if( $.fn.avia_sc_icongrid )
		{
			$('.avia-icon-grid-container').avia_sc_icongrid();
		}

    };


	function activate_waypoints( container )
	{
		//activates simple css animations of the content once the user scrolls to an elements
		if( $.fn.avia_waypoints )
		{
			if( typeof container == 'undefined' )
			{
				container = 'body';
			}

			$( '.avia_animate_when_visible', container ).avia_waypoints();			//  'bottom-in-view'
			$( '.avia_animate_when_almost_visible', container ).avia_waypoints( { offset: '80%'} );

			//	@since 5.0 - avoid conflict with already existing classes
			$( '.av-animated-when-visible', container ).avia_waypoints();
			$( '.av-animated-when-almost-visible', container ).avia_waypoints( { offset: '80%'} );
			$( '.av-animated-when-visible-95', container ).avia_waypoints( { offset: '95%'} );

			//	@since 5.3 - new offsets added to support filter 'avf_alb_element_animation'
			//	@since 5.3.1 - changed to dynamic % values und changed class because av-animated-when-visible-95 does not work with filter
			var custom_animated = $( '*[class*="av-custom-animated-top-"]', container );

			custom_animated.each( function()
			{
				var element = $( this ),
					classArray = element[ 0 ].className.split(/\s+/);

				for( var i = 0; i < classArray.length; i++ )
				{
					if( classArray[i].indexOf( 'av-custom-animated-top-' ) == 0 )
					{
						var pct = parseInt( classArray[i].replace( 'av-custom-animated-top-', '' ) );

						if( ! isNaN( pct ) && pct < 100 )
						{
							element.avia_waypoints( { offset: pct + '%'} );
						}
					}
				}
			});

			var disable_mobile = $( 'body' ).hasClass( 'avia-mobile-no-animations' );

			if( container == 'body' && disable_mobile )
			{
				container = '.avia_desktop body';
			}

			$( '.av-animated-generic', container ).avia_waypoints( { offset: '95%'} );
		}
	};


// -------------------------------------------------------------------------------------------



	// -------------------------------------------------------------------------------------------
	// Helper to allow fixed bgs on mobile
	// -------------------------------------------------------------------------------------------
	$.fn.avia_mobile_fixed = function(options)
	{
		var isMobile = $.avia_utilities.isMobile;

		if( ! isMobile )
		{
			return;
		}

		return this.each( function()
		{
			var current				= $(this).addClass('av-parallax-section'),
				$background 		= current.attr('style'),
				$attachment_class 	= current.data('section-bg-repeat'),
				template			= "";

				if($attachment_class == 'stretch' || $attachment_class == 'no-repeat' )
				{
					$attachment_class = " avia-full-stretch";
				}
				else
				{
					$attachment_class = "";
				}

				template = "<div class='av-parallax " + $attachment_class + "' data-avia-parallax-ratio='0.0' style = '" + $background + "' ></div>";

				current.prepend(template);
				current.attr('style','');
		});
	};



	// -------------------------------------------------------------------------------------------
	//  shortcode javascript for delayed animation even when non connected elements are used
	// -------------------------------------------------------------------------------------------
	$.fn.avia_sc_animation_delayed = function(options)
	{
		var global_timer = 0,
			delay = options.delay || 50,
			max_timer = 10,
			new_max = setTimeout( function(){ max_timer = 20; }, 500);

		return this.each(function()
		{
			var elements = $(this);

			//trigger displaying of thumbnails
			elements.on( 'avia_start_animation', function()
			{
				var element = $(this);

				if( global_timer < max_timer )
				{
					global_timer ++;
				}

				setTimeout( function()
				{
					element.addClass('avia_start_delayed_animation');
					if( global_timer > 0 )
					{
						global_timer --;
					}

				}, ( global_timer * delay ) );

			});
		});
	};

	/*delayd animations when used within tab sections or similar elements. this way they get animated each new time a tab is shown*/
	$.fn.avia_delayed_animation_in_container = function( options )
	{
		return this.each( function()
		{
			var elements = $(this);

			elements.on( 'avia_start_animation_if_current_slide_is_active', function()
			{
				var current = $(this),
					animate = current.find( '.avia_start_animation_when_active' );

				animate.addClass( 'avia_start_animation' ).trigger( 'avia_start_animation' );
			});

			elements.on( 'avia_remove_animation', function()
			{
				var current = $(this),
					animate = current.find( '.avia_start_animation_when_active, .avia_start_animation' );

				animate.removeClass( 'avia_start_animation avia_start_delayed_animation' );
			});
		});
	};


	// -------------------------------------------------------------------------------------------
	// Section Height Helper
	// -------------------------------------------------------------------------------------------
	$.fn.avia_browser_height = function()
	{
		if( ! this.length )
		{
			return this;
		}

		//	5.6.3 modified to use vh and vw and support minimum container width - also improves animation when resize of window

		var win			= $(window),
			html_el		= $('html'),
			headFirst	= $( 'head' ).first(),
			subtract	= $('#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container'),
			css_block	= $("<style type='text/css' id='av-browser-height'></style>").appendTo( headFirst ),
			sidebar_menu= $('.html_header_sidebar #top #header_main'),
			full_slider	= $('.html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling').addClass('av-solo-full'),
			pc_heights	= [ 25, 50, 75 ],
			calc_height = function()
			{
				let css			= '',
					wh100 		= win.height(),
					ww100 		= win.width(),
					wh100_mod 	= wh100,
					whCover		= (wh100 / 9) * 16,
					wwCover		= (ww100 / 16) * 9,
					solo		= 0;

				if( sidebar_menu.length )
				{
					solo = sidebar_menu.height();
				}

				subtract.each( function()
				{
					wh100_mod -= this.offsetHeight - 1;
				});

				let whCoverMod = ( wh100_mod / 9 ) * 16;

				// since 5.6.3  added minimum height depending on browser width (we ignore this for slidehows to avoid breaking of layout)
//				let new_wh100 = height_opt == 'height' ? wh100 : ww100;
//				let unit = height_opt == 'height' ? 'vh' : 'vw';


				//fade in of section content with minimum height once the height has been calculated
				css += ".avia-section.av-minimum-height .container{opacity: 1; }\n";

				//various section heights (100-25% as well as 100% - header/adminbar in case its the first builder element)
//				css += ".av-minimum-height-100:not(.av-slideshow-section) .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height:" + new_wh100 + "px;}\n";
				css += ".av-minimum-height-100:not(.av-slideshow-section) .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height: 100vh;}\n";
				css += ".av-minimum-height-100vw:not(.av-slideshow-section) .container, #top.avia-blank .av-minimum-height-100vw .container, .av-cell-min-height-100vw > .flex_cell{height: 100vw;}\n";

				css += ".av-minimum-height-100.av-slideshow-section .container { height:unset; }\n";
				css += ".av-minimum-height-100vw.av-slideshow-section .container { height:unset; }\n";

//				css += ".av-minimum-height-100.av-slideshow-section {min-height:" + new_wh100 + "px;}\n";
				css += ".av-minimum-height-100.av-slideshow-section {min-height: 100vh;}\n";
				css += ".av-minimum-height-100vw.av-slideshow-section {min-height: 100vw;}\n";


				$.each( pc_heights, function( index, value )
				{
//					var wh = Math.round( new_wh100 * ( value / 100.0 ) );
//					css += ".av-minimum-height-" + value + ":not(.av-slideshow-section) .container, .av-cell-min-height-" + value + " > .flex_cell	{height:" + wh + "px;}\n";
//					css += ".av-minimum-height-" + value + ".av-slideshow-section {min-height:" + wh + "px;}\n";

					css += ".av-minimum-height-" + value + ":not(.av-slideshow-section) .container, .av-cell-min-height-" + value + " > .flex_cell	{height:" + value + "vh;}\n";
					css += ".av-minimum-height-" + value + ".av-slideshow-section {min-height:" + value + "vh;}\n";

					css += ".av-minimum-height-" + value + "vw:not(.av-slideshow-section) .container, .av-cell-min-height-" + value + "vw > .flex_cell	{height:" + value + "vw;}\n";
					css += ".av-minimum-height-" + value + "vw.av-slideshow-section {min-height:" + value + "vw;}\n";
				});



				css += ".avia-builder-el-0.av-minimum-height-100:not(.av-slideshow-section) .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow, .avia-builder-el-0.av-cell-min-height-100 > .flex_cell{height:" + wh100_mod + "px;}\n";

				css += "#top .av-solo-full .avia-slideshow {min-height:" + solo + "px;}\n";

				//fullscreen video calculations
				if( ww100 / wh100 < 16 / 9 )
				{
					css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:" + whCover + "px; left: -" + ( whCover - ww100 ) / 2 + "px;}\n";
				}
				else
				{
					css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:" + wwCover + "px; top: -"+( wwCover - wh100 ) / 2 + "px;}\n";
				}

				if( ww100 / wh100_mod < 16 / 9 )
				{
					css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:" + whCoverMod + "px; left: -" + ( whCoverMod - ww100 ) / 2 + "px;}\n";
				}
				else
				{
					css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:" + wwCover + "px; top: -" + ( wwCover - wh100_mod ) / 2 + "px;}\n";
				}

				//ie8 needs different insert method
				try
				{
					css_block.text( css );
				}
				catch(err)
				{
					css_block.remove();
					css_block = $( "<style type='text/css' id='av-browser-height'>" + css + "</style>" ).appendTo( headFirst );
				}

				setTimeout(function()
				{
					win.trigger( 'av-height-change' ); /*broadcast the height change*/
				}, 100 );
			};

		this.each( function( index )
		{
			let container = $( this ),
				height = container.data( 'av_minimum_height_pc' );

			if( 'number' != typeof height )
			{
				return this;
			}

			height = parseInt( height );

			if( ( -1 == $.inArray( height, pc_heights ) ) && ( height != 100 ) )
			{
				pc_heights.push( height );
			}

			return this;
		});

		win.on( 'debouncedresize', calc_height );
		calc_height();
	};

	// -------------------------------------------------------------------------------------------
	// Layout container height helper
	// -------------------------------------------------------------------------------------------
	$.fn.avia_container_height = function()
	{
		if( ! this.length )
		{
			return this;
		}

		var win = $( window ),
			calc_height = function()
			{
				var column = $( this ),
					jsonHeight = column.data( 'av-column-min-height' ),
					minHeight = parseInt( jsonHeight['column-min-pc'], 10 ),
					container = null,
					containerHeight = 0,
					columMinHeight = 0;

				if( isNaN( minHeight ) || minHeight == 0 )
				{
					return;
				}

				//	try to find a layout container, else take browser height
				container = column.closest( '.avia-section' );
				if( ! container.length )
				{
					container = column.closest( '.av-gridrow-cell' );
				}
				if( ! container.length )
				{
					//	tab section and slideshow section
					container = column.closest( '.av-layout-tab' );
				}

				containerHeight = container.length ? container.outerHeight() : win.height();

				columMinHeight = containerHeight * ( minHeight / 100.0 );

				if( ! jsonHeight['column-equal-height'] )
				{
					column.css( 'min-height', columMinHeight + 'px');
					column.css( 'height', 'auto');
				}
				else
				{
					column.css( 'height', columMinHeight + 'px');
				}

				setTimeout( function()
				{
					win.trigger( 'av-height-change' ); /*broadcast the height change*/
				}, 100 );
			};

		this.each( function( index )
		{
			var column = $( this ),
				jsonHeight = column.data( 'av-column-min-height' );

			if( 'object' != typeof jsonHeight )
			{
				return this;
			}

			win.on( 'debouncedresize', calc_height.bind( column ) );
			calc_height.call( column );

			return this;
		});

	};

	// -------------------------------------------------------------------------------------------
	// Video Section helper
	// -------------------------------------------------------------------------------------------
	$.fn.avia_video_section = function()
	{
		if(!this.length) return;

		var elements	= this.length, content = "",
			win			= $(window),
			headFirst	= $( 'head' ).first(),
			css_block	= $("<style type='text/css' id='av-section-height'></style>").appendTo( headFirst ),
			calc_height = function(section, counter)
			{
				if(counter === 0) { content = "";}

				var css			= "",
					the_id		= '#' +section.attr('id'),
					wh100 		= section.height(),
					ww100 		= section.width(),
					aspect		= section.data('sectionVideoRatio').split(':'),
					video_w		= aspect[0],
					video_h		= aspect[1],
					whCover		= (wh100 / video_h ) * video_w,
					wwCover		= (ww100 / video_w ) * video_h;

				//fullscreen video calculations
				if(ww100/wh100 < video_w/video_h)
				{
					css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
				}
				else
				{
					css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
				}

				content = content + css;

				if(elements == counter + 1)
				{
					//ie8 needs different insert method
					try{
						css_block.text(content);
					}
					catch(err){
						css_block.remove();
						css_block = $("<style type='text/css' id='av-section-height'>"+content+"</style>").appendTo( headFirst );
					}
				}
			};


		return this.each(function(i)
		{
			var self = $(this);

			win.on( 'debouncedresize', function(){ calc_height(self, i); });
			calc_height(self, i);
		});

	};


	/**
	 * Column or cell with a link
	 *
	 * @returns {jQuery}
	 */
	$.fn.avia_link_column = function()
	{
		return this.each( function()
		{
			$(this).on( 'click', function(e)
			{
				//	if event is bubbled from an <a> link, do not activate link of column/cell
				if( 'undefined' !== typeof e.target && 'undefined' !== typeof e.target.href )
				{
					return;
				}

				var	column = $(this),
					url = column.data('link-column-url'),
					target = column.data('link-column-target'),
					link = window.location.hostname+window.location.pathname;

				if( 'undefined' === typeof url || 'string' !== typeof url )
				{
					return;
				}

				if( 'undefined' !== typeof target || '_blank' == target )
				{
//					in FF and other browsers this opens a new window and not only a new tab
//					window.open( url, '_blank', 'noopener noreferrer' );
					var a = document.createElement('a');
					a.href = url;
					a.target = '_blank';
					a.rel = 'noopener noreferrer';
					a.click();
					return false;
				}
				else
				{
					//	allow smoothscroll feature when on same page and hash exists - trigger only works for current page
					if( column.hasClass('av-cell-link') || column.hasClass('av-column-link') )
					{
						var reader = column.hasClass('av-cell-link') ? column.prev('a.av-screen-reader-only').first() : column.find('a.av-screen-reader-only').first();

						url = url.trim();
						if( ( 0 == url.indexOf("#") ) || ( ( url.indexOf( link ) >= 0 ) && ( url.indexOf("#") > 0 ) ) )
						{
							reader.trigger('click');

							//	fix a bug with tabsection not changeing tab
							if( 'undefined' == typeof target || '_blank' != target )
							{
								window.location.href = url;
							}

							return;
						}
					}

					window.location.href = url;
				}

				e.preventDefault();
				return;
			});
		});
	};


	// -------------------------------------------------------------------------------------------
	// HELPER FUNCTIONS
	// -------------------------------------------------------------------------------------------


	//waipoint script when something comes into viewport
	$.fn.avia_waypoints = function( options_passed )
	{
		if( ! $('html').is('.avia_transform') )
		{
			return;
		}

		var defaults = {
					offset: 'bottom-in-view',
					triggerOnce: true
				},
			options  = $.extend( {}, defaults, options_passed ),
			isMobile = $.avia_utilities.isMobile;

		return this.each( function()
		{
			var element = $(this),
				force_animate = element.hasClass( 'animate-all-devices' ),
				mobile_no_animations = $( 'body' ).hasClass( 'avia-mobile-no-animations' );

			setTimeout( function()
			{
				if( isMobile && mobile_no_animations && ! force_animate )
				{
					element.addClass( 'avia_start_animation' ).trigger('avia_start_animation');
				}
				else
				{
					element.waypoint( function( direction )
					{
						var current = $(this.element),
							parent = current.parents('.av-animation-delay-container').eq( 0 );

						if( parent.length )
						{
							current.addClass( 'avia_start_animation_when_active' ).trigger( 'avia_start_animation_when_active' );
						}

						if( ! parent.length || ( parent.length && parent.is( '.__av_init_open' ) ) || ( parent.length && parent.is( '.av-active-tab-content' ) ) )
						{
							current.addClass( 'avia_start_animation' ).trigger( 'avia_start_animation' );
						}
					}, options );
				}
			}, 100 );

		});
	};


	// window resize script
	var $event = $.event, $special, resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

})( jQuery );



/*utility functions*/


(function($)
{
	"use strict";

	$.avia_utilities = $.avia_utilities || {};

	/************************************************************************
	gloabl loading function
	*************************************************************************/
	$.avia_utilities.loading = function(attach_to, delay){

		var loader = {

			active: false,

			show: function()
			{
				if(loader.active === false)
				{
					loader.active = true;
					loader.loading_item.css({display:'block', opacity:0});
				}

				loader.loading_item.stop().animate({opacity:1});
			},

			hide: function()
			{
				if(typeof delay === 'undefined'){ delay = 600; }

				loader.loading_item.stop().delay( delay ).animate({opacity:0}, function()
				{
					loader.loading_item.css({display:'none'});
					loader.active = false;
				});
			},

			attach: function()
			{
				if(typeof attach_to === 'undefined'){ attach_to = 'body';}

				loader.loading_item = $('<div class="avia_loading_icon"><div class="av-siteloader"></div></div>').css({display:"none"}).appendTo(attach_to);
			}
		};

		loader.attach();
		return loader;
	};

	/************************************************************************
	gloabl play/pause visualizer function
	*************************************************************************/
	$.avia_utilities.playpause = function(attach_to, delay){

		var pp = {

			active: false,
			to1: "",
			to2: "",
			set: function(status)
			{
				pp.loading_item.removeClass('av-play av-pause');
				pp.to1 = setTimeout(function(){ pp.loading_item.addClass('av-' + status); },10);
				pp.to2 = setTimeout(function(){ pp.loading_item.removeClass('av-' + status); },1500);
			},

			attach: function()
			{
				if(typeof attach_to === 'undefined'){ attach_to = 'body';}

				pp.loading_item = $('<div class="avia_playpause_icon"></div>').css({display:"none"}).appendTo(attach_to);
			}
		};

		pp.attach();
		return pp;
	};



	/************************************************************************
	preload images, as soon as all are loaded trigger a special load ready event
	*************************************************************************/
	$.avia_utilities.preload = function(options_passed)
	{
		new $.AviaPreloader(options_passed);
	};

	$.AviaPreloader  =  function(options)
	{
	    this.win 		= $(window);
	    this.defaults	=
		{
			container:			'body',
			maxLoops:			10,
			trigger_single:		true,
			single_callback:	function(){},
			global_callback:	function(){}

		};
		this.options 	= $.extend({}, this.defaults, options);
		this.preload_images = 0;

		this.load_images();
	};

	$.AviaPreloader.prototype  =
	{
		load_images: function()
		{
			var _self = this;

			if(typeof _self.options.container === 'string'){ _self.options.container = $(_self.options.container); }

			_self.options.container.each(function()
			{
				var container		= $(this);

				container.images	= container.find('img');
				container.allImages	= container.images;

				_self.preload_images += container.images.length;
				setTimeout(function(){ _self.checkImage(container); }, 10);
			});
		},

		checkImage: function(container)
		{
			var _self = this;

			container.images.each(function()
			{
				if(this.complete === true)
				{
					container.images = container.images.not(this);
					_self.preload_images -= 1;
				}
			});

			if(container.images.length && _self.options.maxLoops >= 0)
			{
				_self.options.maxLoops-=1;
				setTimeout( function(){ _self.checkImage( container ); }, 500 );
			}
			else
			{
				_self.preload_images = _self.preload_images - container.images.length;
				_self.trigger_loaded(container);
			}
		},

		trigger_loaded: function(container)
		{
			var _self = this;

			if(_self.options.trigger_single !== false)
			{
				_self.win.trigger('avia_images_loaded_single', [container]);
				_self.options.single_callback.call(container);
			}

			if(_self.preload_images === 0)
			{
				_self.win.trigger('avia_images_loaded');
				_self.options.global_callback.call();
			}

		}
	};

	/************************************************************************
	CSS Easing transformation table
	*************************************************************************/
	/*
	Easing transform table from jquery.animate-enhanced plugin
	http://github.com/benbarnett/jQuery-Animate-Enhanced
	*/
	$.avia_utilities.css_easings = {
			linear:			'linear',
			swing:			'ease-in-out',
			bounce:			'cubic-bezier(0.0, 0.35, .5, 1.3)',
			easeInQuad:     'cubic-bezier(0.550, 0.085, 0.680, 0.530)' ,
			easeInCubic:    'cubic-bezier(0.550, 0.055, 0.675, 0.190)' ,
			easeInQuart:    'cubic-bezier(0.895, 0.030, 0.685, 0.220)' ,
			easeInQuint:    'cubic-bezier(0.755, 0.050, 0.855, 0.060)' ,
			easeInSine:     'cubic-bezier(0.470, 0.000, 0.745, 0.715)' ,
			easeInExpo:     'cubic-bezier(0.950, 0.050, 0.795, 0.035)' ,
			easeInCirc:     'cubic-bezier(0.600, 0.040, 0.980, 0.335)' ,
			easeInBack:     'cubic-bezier(0.600, -0.280, 0.735, 0.04)' ,
			easeOutQuad:    'cubic-bezier(0.250, 0.460, 0.450, 0.940)' ,
			easeOutCubic:   'cubic-bezier(0.215, 0.610, 0.355, 1.000)' ,
			easeOutQuart:   'cubic-bezier(0.165, 0.840, 0.440, 1.000)' ,
			easeOutQuint:   'cubic-bezier(0.230, 1.000, 0.320, 1.000)' ,
			easeOutSine:    'cubic-bezier(0.390, 0.575, 0.565, 1.000)' ,
			easeOutExpo:    'cubic-bezier(0.190, 1.000, 0.220, 1.000)' ,
			easeOutCirc:    'cubic-bezier(0.075, 0.820, 0.165, 1.000)' ,
			easeOutBack:    'cubic-bezier(0.175, 0.885, 0.320, 1.275)' ,
			easeInOutQuad:  'cubic-bezier(0.455, 0.030, 0.515, 0.955)' ,
			easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)' ,
			easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)' ,
			easeInOutQuint: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)' ,
			easeInOutSine:  'cubic-bezier(0.445, 0.050, 0.550, 0.950)' ,
			easeInOutExpo:  'cubic-bezier(1.000, 0.000, 0.000, 1.000)' ,
			easeInOutCirc:  'cubic-bezier(0.785, 0.135, 0.150, 0.860)' ,
			easeInOutBack:  'cubic-bezier(0.680, -0.550, 0.265, 1.55)' ,
			easeInOutBounce:'cubic-bezier(0.580, -0.365, 0.490, 1.365)',
			easeOutBounce:	'cubic-bezier(0.760, 0.085, 0.490, 1.365)'
		};

	/************************************************************************
	check if a css feature is supported and save it to the supported array
	*************************************************************************/
	$.avia_utilities.supported	= {};
	$.avia_utilities.supports	= (function()
	{
		var div		= document.createElement('div'),
			vendors	= ['Khtml', 'Ms','Moz','Webkit'];  // vendors	= ['Khtml', 'Ms','Moz','Webkit','O'];

		return function(prop, vendor_overwrite)
		{
			if ( div.style[prop] !== undefined  ) { return ""; }
			if (vendor_overwrite !== undefined) { vendors = vendor_overwrite; }

			prop = prop.replace(/^[a-z]/, function(val)
			{
				return val.toUpperCase();
			});

			var len	= vendors.length;
			while(len--)
			{
				if ( div.style[vendors[len] + prop] !== undefined )
				{
					return "-" + vendors[len].toLowerCase() + "-";
				}
			}

			return false;
		};

	}());

	/************************************************************************
	animation function
	*************************************************************************/
	$.fn.avia_animate = function(prop, speed, easing, callback)
	{
		if(typeof speed === 'function') {callback = speed; speed = false; }
		if(typeof easing === 'function'){callback = easing; easing = false;}
		if(typeof speed === 'string'){easing = speed; speed = false;}

		if(callback === undefined || callback === false){ callback = function(){}; }
		if(easing === undefined || easing === false)	{ easing = 'easeInQuad'; }
		if(speed === undefined || speed === false)		{ speed = 400; }

		if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}



		if($.avia_utilities.supported.transition !== false )
		{
			var prefix		= $.avia_utilities.supported.transition + 'transition',
				cssRule		= {},
				cssProp		= {},
				thisStyle	= document.body.style,
				end			= (thisStyle.WebkitTransition !== undefined) ? 'webkitTransitionEnd' : (thisStyle.OTransition !== undefined) ? 'oTransitionEnd' : 'transitionend';

			//translate easing into css easing
			easing = $.avia_utilities.css_easings[easing];

			//create css transformation rule
			cssRule[prefix]	=  'all '+(speed/1000)+'s '+easing;
			//add namespace to the transition end trigger
			end = end + ".avia_animate";

			//since jquery 1.10 the items passed need to be {} and not [] so make sure they are converted properly
			for (var rule in prop)
			{
				if (prop.hasOwnProperty(rule)) { cssProp[rule] = prop[rule]; }
			}
			prop = cssProp;



			this.each(function()
			{
				var element	= $(this), css_difference = false, rule, current_css;

				for (rule in prop)
				{
					if (prop.hasOwnProperty(rule))
					{
						current_css = element.css(rule);

						if(prop[rule] != current_css && prop[rule] != current_css.replace(/px|%/g,""))
						{
							css_difference = true;
							break;
						}
					}
				}

				if(css_difference)
				{
					//if no transform property is set set a 3d translate to enable hardware acceleration
					if(!($.avia_utilities.supported.transition+"transform" in prop))
					{
						prop[$.avia_utilities.supported.transition+"transform"] = "translateZ(0)";
					}

					var endTriggered = false;

					element.on(end,  function(event)
					{
						if(event.target != event.currentTarget) return false;

						if(endTriggered == true) return false;
						endTriggered = true;

						cssRule[prefix] = "none";

						element.off(end);
						element.css(cssRule);
						setTimeout(function(){ callback.call(element); });
					});


					//desktop safari fallback if we are in another tab to trigger the end event
					setTimeout(function(){
						if(!endTriggered && !avia_is_mobile && $('html').is('.avia-safari') ) {
							element.trigger(end);
							$.avia_utilities.log('Safari Fallback '+end+' trigger');
						}
					}, speed + 100);

					setTimeout(function(){ element.css(cssRule);},10);
					setTimeout(function(){ element.css(prop);	},20);
				}
				else
				{
					setTimeout(function(){ callback.call(element); });
				}

			});
		}
		else // if css animation is not available use default JS animation
		{
			this.animate(prop, speed, easing, callback);
		}

		return this;
	};

})( jQuery );



// -------------------------------------------------------------------------------------------
// keyboard controls
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	/************************************************************************
	keyboard arrow nav
	*************************************************************************/
	$.fn.avia_keyboard_controls = function(options_passed)
	{
		var defaults	=
		{
			37: '.prev-slide',	// prev
			39: '.next-slide'	// next
		},

		methods		= {

			mousebind: function(slider)
			{
				slider.on('mouseenter', function(){
					slider.mouseover	= true;  })
				.on('mouseleave', function(){
					slider.mouseover	= false; }
				);
			},

			keybind: function(slider)
			{
				$(document).on('keydown', function(e)
				{
					if(slider.mouseover && typeof slider.options[e.keyCode] !== 'undefined')
					{
						var item;

						if(typeof slider.options[e.keyCode] === 'string')
						{
							item = slider.find(slider.options[e.keyCode]);
						}
						else
						{
							item = slider.options[e.keyCode];
						}

						if(item.length)
						{
							item.trigger('click', ['keypress']);
							return false;
						}
					}
				});
			}
		};


		return this.each(function()
		{
			var slider			= $(this);
			slider.options		= $.extend({}, defaults, options_passed);
			slider.mouseover	= false;

			methods.mousebind(slider);
			methods.keybind(slider);

		});
	};


	/************************************************************************
	swipe nav
	*************************************************************************/
	$.fn.avia_swipe_trigger = function( passed_options )
	{
		var win = $(window),
			isMobile = $.avia_utilities.isMobile,
			isTouchDevice = $.avia_utilities.isTouchDevice,
			body = $( 'body' ),
			defaults =
			{
				prev: '.prev-slide',				//	selector | jQuery object | DOM element
				next: '.next-slide',
				delay_trigger: false,				//	currently only implemented for native function call
				event: {
						prev: 'click',					//	use e.g. native_click to use native function call element.click()
						next: 'click'
					},
				beforeTrigger: null,
				afterTrigger: null,				//	callback when swipe trigger done (when delayed only timeout started)
				afterDelayedTrigger: null
			},

			methods =
			{
				activate_touch_control: function(slider)
				{
					var i,
						differenceX,
						differenceY;

					slider.touchPos = {};
					slider.hasMoved = false;

					slider.on( 'touchstart', function(event)
					{
						slider.touchPos.X = event.originalEvent.touches[0].clientX;
						slider.touchPos.Y = event.originalEvent.touches[0].clientY;
					});

					slider.on( 'touchend', function(event)
					{
						slider.touchPos = {};

						if( slider.hasMoved )
						{
							event.preventDefault();
						}

						slider.hasMoved = false;
					});

					slider.on( 'touchmove', function(event)
					{
						//	skip if a slider has been moved
						if( body.hasClass( 'avia-swipe-executed' ) )
						{
							return;
						}

						if( ! slider.touchPos.X )
						{
							slider.touchPos.X = event.originalEvent.touches[0].clientX;
							slider.touchPos.Y = event.originalEvent.touches[0].clientY;
						}
						else
						{
							differenceX = event.originalEvent.touches[0].clientX - slider.touchPos.X;
							differenceY = event.originalEvent.touches[0].clientY - slider.touchPos.Y;

							//check if user is scrolling the window or moving the slider
							if( Math.abs( differenceX ) > Math.abs( differenceY ) )
							{
								if( slider.touchPos !== event.originalEvent.touches[0].clientX )
								{
									if( Math.abs(differenceX) > 50 )
									{
										i = differenceX > 0 ? 'prev' : 'next';

										let element = slider.options[i];
										if( element == null )
										{
											return;
										}

										if( typeof slider.options.beforeTrigger == 'function' )
										{
											slider.options.beforeTrigger( slider, i );
										}

										if( typeof slider.options[i] === 'string' )
										{
											slider.find( slider.options[i] ).trigger( slider.options.event[i], ['swipe'] );
										}
										else
										{
											if( typeof element.jquery == 'string' )
											{
												element.trigger( slider.options.event[i], ['swipe'] );
											}
											else
											{
												let action = slider.options.event[i];

												if( action.indexOf( 'native_' ) < 0 )
												{
													element.dispatchEvent( new Event( action ) );
												}
												else
												{
													let func_action = action.replace( 'native_', '' );

													if( typeof element[ func_action ] == 'function' )
													{
														if( slider.options.delay_trigger )
														{
															setTimeout( function()
															{
																element[ func_action ]();

																if( typeof slider.options.afterDelayedTrigger == 'function' )
																{
																	slider.options.afterDelayedTrigger( slider, i );
																}
															}, 50 );
														}
														else
														{
															element[ func_action ]();
														}
													}
													else
													{
														element.dispatchEvent( new Event( action ) );
													}
												}
											}
										}

										if( typeof slider.options.afterTrigger == 'function' )
										{
											slider.options.afterTrigger( slider, i );
										}

										event.preventDefault();
										event.stopImmediatePropagation();

										//	set a class to block swipe when a slider has been moved (avoid post nav slides)
										body.addClass( 'avia-swipe-executed' );
										setTimeout( function()
										{
											body.removeClass( 'avia-swipe-executed' );
										}, 300 );

										slider.hasMoved = true;
										slider.touchPos = {};
										return false;
									}
								}
							}
						}
					});

				}
			};

		return this.each( function()
		{
			if( isMobile || isTouchDevice )
			{
				var slider = $(this);
				slider.options = $.extend( {}, defaults, passed_options );
				methods.activate_touch_control( slider );
			}
		});
	};

}(jQuery));

/**
 * jQuery 3.x:  JQMIGRATE: easing function “jQuery.easing.swing” should use only first argument
 * https://stackoverflow.com/questions/39355019/jqmigrate-easing-function-jquery-easing-swing-should-use-only-first-argument
 * https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
 *
 * @since 4.8.4
 * @param {jQuery} $
 */
(function($)
{
	// Preserve the original jQuery "swing" easing as "jswing"
	if( typeof $.easing !== 'undefined' )
	{
		$.easing['jswing'] = $.easing['swing'];
	}

	var pow = Math.pow,
		sqrt = Math.sqrt,
		sin = Math.sin,
		cos = Math.cos,
		PI = Math.PI,
		c1 = 1.70158,
		c2 = c1 * 1.525,
		c3 = c1 + 1,
		c4 = ( 2 * PI ) / 3,
		c5 = ( 2 * PI ) / 4.5;

	// x is the fraction of animation progress, in the range 0..1
	function bounceOut(x)
	{
		var n1 = 7.5625,
			d1 = 2.75;
		if ( x < 1/d1 ) {
			return n1*x*x;
		} else if ( x < 2/d1 ) {
			return n1*(x-=(1.5/d1))*x + .75;
		} else if ( x < 2.5/d1 ) {
			return n1*(x-=(2.25/d1))*x + .9375;
		} else {
			return n1*(x-=(2.625/d1))*x + .984375;
		}
	}

	$.extend( $.easing,
	{
		def: 'easeOutQuad',
		swing: function (x) {
			return $.easing[$.easing.def](x);
		},
		easeInQuad: function (x) {
			return x * x;
		},
		easeOutQuad: function (x) {
			return 1 - ( 1 - x ) * ( 1 - x );
		},
		easeInOutQuad: function (x) {
			return x < 0.5 ?
				2 * x * x :
				1 - pow( -2 * x + 2, 2 ) / 2;
		},
		easeInCubic: function (x) {
			return x * x * x;
		},
		easeOutCubic: function (x) {
			return 1 - pow( 1 - x, 3 );
		},
		easeInOutCubic: function (x) {
			return x < 0.5 ?
				4 * x * x * x :
				1 - pow( -2 * x + 2, 3 ) / 2;
		},
		easeInQuart: function (x) {
			return x * x * x * x;
		},
		easeOutQuart: function (x) {
			return 1 - pow( 1 - x, 4 );
		},
		easeInOutQuart: function (x) {
			return x < 0.5 ?
				8 * x * x * x * x :
				1 - pow( -2 * x + 2, 4 ) / 2;
		},
		easeInQuint: function (x) {
			return x * x * x * x * x;
		},
		easeOutQuint: function (x) {
			return 1 - pow( 1 - x, 5 );
		},
		easeInOutQuint: function (x) {
			return x < 0.5 ?
				16 * x * x * x * x * x :
				1 - pow( -2 * x + 2, 5 ) / 2;
		},
		easeInSine: function (x) {
			return 1 - cos( x * PI/2 );
		},
		easeOutSine: function (x) {
			return sin( x * PI/2 );
		},
		easeInOutSine: function (x) {
			return -( cos( PI * x ) - 1 ) / 2;
		},
		easeInExpo: function (x) {
			return x === 0 ? 0 : pow( 2, 10 * x - 10 );
		},
		easeOutExpo: function (x) {
			return x === 1 ? 1 : 1 - pow( 2, -10 * x );
		},
		easeInOutExpo: function (x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
				pow( 2, 20 * x - 10 ) / 2 :
				( 2 - pow( 2, -20 * x + 10 ) ) / 2;
		},
		easeInCirc: function (x) {
			return 1 - sqrt( 1 - pow( x, 2 ) );
		},
		easeOutCirc: function (x) {
			return sqrt( 1 - pow( x - 1, 2 ) );
		},
		easeInOutCirc: function (x) {
			return x < 0.5 ?
				( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
				( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
		},
		easeInElastic: function (x) {
			return x === 0 ? 0 : x === 1 ? 1 :
				-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
		},
		easeOutElastic: function (x) {
			return x === 0 ? 0 : x === 1 ? 1 :
				pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
		},
		easeInOutElastic: function (x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
				-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
				pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
		},
		easeInBack: function (x) {
			return c3 * x * x * x - c1 * x * x;
		},
		easeOutBack: function (x) {
			return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
		},
		easeInOutBack: function (x) {
			return x < 0.5 ?
				( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
				( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
		},
		easeInBounce: function (x) {
			return 1 - bounceOut( 1 - x );
		},
		easeOutBounce: bounceOut,
		easeInOutBounce: function (x) {
			return x < 0.5 ?
				( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
				( 1 + bounceOut( 2 * x - 1 ) ) / 2;
		}
	});

}(jQuery));

;

;/* avia-module-slideshow-js */
/* ======================================================================================================================================================
Avia Slideshow
======================================================================================================================================================
*/

(function($)
{
    "use strict";

	$.AviaSlider = function( options, slider )
	{
		var self = this;

		this.$win = $( window );
		this.$slider = $( slider );

		this.isMobile = $.avia_utilities.isMobile;
		this.isTouchDevice = $.avia_utilities.isTouchDevice,

		this._prepareSlides(options);

		//default preload images then init slideshow
	    $.avia_utilities.preload({
			container: this.$slider,
			single_callback: function(){ self._init( options ); }
		});
	};

	$.AviaSlider.defaults =
	{
		//interval between autorotation switches
		interval: 5,

		//start autorotation active or not
		autoplay: false,

		//stop on last slide - shortcut for stopinfiniteloop - kept for backwards comp. With 5.0 added extended support also for manual rotation
		autoplay_stopper: false,

		// @since 5.0		'endless' | 'once'
		loop_autoplay: 'once',

		// @since 5.0		'manual-endless' | 'manual-once'
		loop_manual: 'manual-endless',

		//set if the loop will stop at the last/first slide or if the slides will loop infinite
		//set to false for infinite loop, "last" to stop at the last slide or "first" to stop at the first slide
		stopinfiniteloop: false,

		//	true to ignore all user navigation
		noNavigation: false,

		//fade or slide animation
		animation: 'slide',

		//transition speed when switching slide
		transitionSpeed: 900,

		//easing method for the transition
		easing: 'easeInOutQuart',

		//slide wrapper
		wrapElement: '>ul',

		//slide element
		slideElement: '>li',

		//pause if mouse cursor is above item
		hoverpause: false,

		//attach images as background
		bg_slider: false,

		//delay of milliseconds to wait before showing the next slide
		show_slide_delay: 0,

		//if slider animation is set to "fade" the fullfade property sets the crossfade behaviour
		fullfade: false,

		//set to true to keep padding (e.g. for featured image slideshow, carousel slideshow
		keep_padding: false,

        //enable carousel mode with multiple visible slides
		carousel: 'no',

		// how many slides are displayed at once in the carousel
        carouselSlidesToShow: 3,

		// TODO: how many slides are scrolled in the carousel
		carouselSlidesToScroll: 1,

		// responsive carousel
		carouselResponsive: new Array()

	};

  	$.AviaSlider.prototype =
    {
    	_init: function( options )
    	{
            // set slider options
			this.options = this._setOptions( options );

			//slidewrap
			this.$sliderUl = this.$slider.find(this.options.wrapElement);

			// slide elements
			this.$slides = this.$sliderUl.find(this.options.slideElement);

			//	slide navigaton arrows wrap
			this.slide_arrows = this.$slider.find( '.avia-slideshow-arrows' );

			// goto dots
			this.gotoButtons = this.$slider.find( '.avia-slideshow-dots a' );

			//perma caption
			this.permaCaption = this.$slider.find( '>.av-slideshow-caption' );

			// slide count
			this.itemsCount = this.$slides.length;

			// current image index
			this.current = 0;

			// current carousel index
			this.currentCarousel = 0;

			// carousel slide width
			this.slideWidthCarousel = '240';

			//loop count
			this.loopCount = 0;

			// control if the slicebox is animating
			this.isAnimating = false;

			// css browser prefix like -webkit-, -moz-
			this.browserPrefix = $.avia_utilities.supports('transition');

			// css3 animation?
			this.cssActive = this.browserPrefix !== false ? true : false;

			// css3D animation?
			this.css3DActive = document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;

			//if we have a bg slider no images were preloaded yet. in that case start preloading and attaching images
			if( this.options.bg_slider == true )
			{
				//create array that holds all image urls to preload
				this.imageUrls = [];

				//create a preloader icon to indicate loading
				this.loader = $.avia_utilities.loading( this.$slider );

				//preload the images ony by one
				this._bgPreloadImages();
			}
			else //if it was a default slider all images are already loaded and we can start showing the slider
			{
				//kickoff the slider: bind functions, show first slide, if active start the autorotation timer
				this._kickOff();
			}

			if( this.options.carousel === 'yes' )
			{
				this.options.animation = 'carouselslide';
			}
    	},

    	//set the slider options by first merging the default options and the passed options, then checking the slider element if any data attributes overwrite the option set
    	_setOptions: function( options )
		{
			var jsonOptions = this.$slider.data( 'slideshow-options' );

			//	since 5.0 - render options via json to clean up html - $.data returns parsed object
			if( 'object' == typeof jsonOptions )
			{
				var newOptions = $.extend( {}, $.AviaSlider.defaults, options, jsonOptions );

				if( 'undefined' != typeof newOptions.transition_speed )
				{
					newOptions.transitionSpeed = newOptions.transition_speed;
				}

				return newOptions;
			}

			var newOptions = $.extend( true, {}, $.AviaSlider.defaults, options ),
				htmlData = this.$slider.data();

			//overwrite passed option set with any data properties on the html element
			for( var i in htmlData )
			{
				//	data attribute is transformed to lower case, but js is case sensitive - transform key
				var key = ( 'transition_speed' != i ) ? i :'transitionSpeed';

				if( typeof htmlData[ i ] === "string" || typeof htmlData[ i ] === "number" || typeof htmlData[ i ] === "boolean" )
				{
					newOptions[ key ] = htmlData[ i ];
				}

				if( 'undefined' != typeof newOptions.autoplay_stopper && newOptions.autoplay_stopper == 1 )
				{
					newOptions.autoplay_stopper = true;
				}
			}

			return newOptions;
		},

		_prepareSlides: function(options)
		{
			var multiButtons = this.$slider.find( '.avia-multi-slideshow-button' );

			if( multiButtons.length )
			{
				//	prevent bubbling of click event to disable opening lightbox with video and show UI response
				multiButtons.on( 'click', function(e)
				{
					e.stopPropagation();

					var loader = $.avia_utilities.loading( $( this ) );
					loader.show();
				});
			}

			//if its a mobile device find all video slides that need to be altered
			if( this.isMobile )
			{
				var alter = this.$slider.find('.av-mobile-fallback-image');
				alter.each(function()
				{
					var current = $(this).removeClass('av-video-slide').data( {'avia_video_events': true, 'video-ratio':0} ),
						fallback = current.data('mobile-img'),
						fallback_link = current.data('fallback-link'),
						appendTo = current.find('.avia-slide-wrap');

					current.find('.av-click-overlay, .mejs-mediaelement, .mejs-container').remove();

					if( ! fallback )
					{
						$('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(appendTo);
					}

					if( options && options.bg_slider )
					{
						current.data( 'img-url', fallback );

						//if we got a fallback link we need to either replace the default link on mobile devices, or if there is no default link change the wrapping <div> to an <a>
						if( fallback_link != '' )
						{
							if( appendTo.is('a') )
							{
								appendTo.attr( 'href', fallback_link );
							}
							else
							{
//								appendTo.find('a').remove();

								appendTo.replaceWith( function()
								{
									var cur_slide = $(this);
								    return $("<a>").attr( {'data-rel': cur_slide.data('rel'), 'class': cur_slide.attr('class'), 'href': fallback_link} ).append( $(this).contents() );
								});

								appendTo = current.find('.avia-slide-wrap');
							}

							if( $.fn.avia_activate_lightbox )
							{
								current.parents('#main').avia_activate_lightbox();
							}
						}
					}
					else
					{
						var image = '<img src="'+fallback+'" alt="" title="" />';
						var lightbox = false;

						if( 'string' == typeof fallback_link && fallback_link.trim() != '' )
						{
							if( appendTo.is('a') )
							{
								appendTo.attr('href', fallback_link);
							}
							else
							{
								var rel = fallback_link.match(/\.(jpg|jpeg|gif|png)$/i) != null ? ' rel="lightbox" ' : '';
								image = '<a href="' + fallback_link.trim() + '"' + rel + '>' + image + '</a>';
							}
							lightbox = true;
						}

						current.find('.avia-slide-wrap').append(image);

						if( lightbox && $.fn.avia_activate_lightbox)
						{
							current.parents('#main').avia_activate_lightbox();
						}
					}

				});
			}

			if( $('html').is('.pointer-device-fine') )
			{
				//	added when extension plugin is active
				if( $('body').is('.avia-slider-video-controls-fix-support') )
				{
					avia_slider_video_controls_fix( this );
				}
			}
		},

		//start preloading the background images
		_bgPreloadImages: function( callback )
    	{
    		this._getImageURLS();

    		this._preloadSingle(0, function()
    		{
    			this._kickOff();
				this._preloadNext(1);
    		});
    	},

    	//if we are using a background image slider, fetch the images from a data attribute and preload them one by one
    	_getImageURLS: function()
    	{
    		var _self = this;

    		//collect url strings of the images to preload
			this.$slides.each( function(i)
			{
				_self.imageUrls[i] = [];
				_self.imageUrls[i]['url'] = $(this).data("img-url");

				//if no image is passed we can set the slide to loaded
				if(typeof _self.imageUrls[i]['url'] == 'string')
				{
					_self.imageUrls[i]['status'] = false;
				}
				else
				{
					_self.imageUrls[i]['status'] = true;
				}
			});
    	},

    	_preloadSingle: function(key, callback)
		{
			var _self = this,
				objImage = new Image();

			if( typeof _self.imageUrls[key]['url'] == 'string' )
			{
				$(objImage).on('load error', function()
				{
					_self.imageUrls[key]['status'] = true;
					_self.$slides.eq(key).css('background-image','url(' + _self.imageUrls[key]['url'] + ')');

					if( typeof callback == 'function' )
					{
						callback.apply( _self, [objImage, key] );
					}
				});

				if(_self.imageUrls[key]['url'] != "")
				{
					objImage.src = _self.imageUrls[key]['url'];
				}
				else
				{
					$(objImage).trigger('error');
				}
			}
			else
			{
				if( typeof callback == 'function' )
				{
					callback.apply( _self, [objImage, key] );
				}
			}
		},

		_preloadNext: function(key)
		{
			if(typeof this.imageUrls[key] != "undefined")
    		{
				this._preloadSingle(key, function()
	    		{
					this._preloadNext(key + 1);
	    		});
    		}
		},


    	//bind click events of slide controlls to the public functions
    	_bindEvents: function()
    	{
    		var self = this,
    			win  = $( window );

    		this.$slider.on( 'click', '.next-slide', this.next.bind( this ) );
    		this.$slider.on( 'click', '.prev-slide', this.previous.bind( this ) );
    		this.$slider.on( 'click', '.goto-slide', this.go2.bind( this ) );

    		if( this.options.hoverpause )
    		{
    			this.$slider.on( 'mouseenter', this.pause.bind( this ) );
    			this.$slider.on( 'mouseleave', this.resume.bind( this ) );
    		}

			//	activate permanent caption link of image
			if( this.permaCaption.length )
			{
				this.permaCaption.on( 'click', this._routePermaCaptionClick );
				this.$slider.on( 'avia_slider_first_slide avia_slider_last_slide avia_slider_navigate_slide', this._setPermaCaptionPointer.bind( this ) );
			}

			if( this.options.stopinfiniteloop && this.options.autoplay )
			{
				if( this.options.stopinfiniteloop == 'last' )
				{
					this.$slider.on( 'avia_slider_last_slide', this._stopSlideshow.bind( this ) );
				}
				else if( this.options.stopinfiniteloop == 'first' )
				{
					this.$slider.on( 'avia_slider_first_slide', this._stopSlideshow.bind( this ) );
				}
			}

			if( this.options.carousel === 'yes' )
			{
				// recalculate carousel dimensions on viewport size change
				// use on desktop only, debouncedresize fires on scroll on mobile
				if( ! this.isMobile )
				{
					win.on( 'debouncedresize', this._buildCarousel.bind( this ) );
				}
			}
			else
			{
                win.on( 'debouncedresize.aviaSlider', this._setSize.bind( this ) );
			}

			if( ! this.options.noNavigation )
			{
				//if its a desktop browser add arrow navigation, otherwise add touch nav (also for touch devices)
				if( ! this.isMobile )
				{
					this.$slider.avia_keyboard_controls();
				}

				if( this.isMobile || this.isTouchDevice )
				{
					this.$slider.avia_swipe_trigger();
				}
			}

			self._attach_video_events();
    	},

    	//kickoff the slider by binding all functions to slides and buttons, show the first slide and start autoplay
    	_kickOff: function()
    	{
    		var self = this,
    			first_slide = self.$slides.eq(0),
    			video = first_slide.data('video-ratio');

    		// bind events to to the controll buttons
			self._bindEvents();
			self._set_slide_arrows_visibility();

    		this.$slider.removeClass('av-default-height-applied');

    		//show the first slide. if its a video set the correct size, otherwise make sure to remove the % padding
    		if( video )
    		{
    			self._setSize( true );
    		}
    		else
    		{
	    		if( this.options.keep_padding != true )
	    		{
    				self.$sliderUl.css('padding',0);
					self.$win.trigger('av-height-change');
				}
    		}

    		self._setCenter();

    		if( this.options.carousel === 'no' )
			{
				first_slide.addClass( 'next-active-slide' );
                first_slide.css( {visibility:'visible', opacity:0} ).avia_animate( {opacity:1}, function()
                {
                    var current = $(this).addClass( 'active-slide' );

                    if( self.permaCaption.length )
                    {
                        self.permaCaption.addClass( 'active-slide' );
                    }
                });
			}

			self.$slider.trigger( 'avia_slider_first_slide' );


    		// start autoplay if active
			if( self.options.autoplay )
			{
				self._startSlideshow();
			}

			// prepare carousel if active
			if( self.options.carousel === 'yes' )
			{
				self._buildCarousel();
			}

			self.$slider.trigger( '_kickOff' );
    	},

		_set_slide_arrows_visibility: function()
		{
			//	special use case - hardcoded as only used in timeline
			if( this.options.carousel == 'yes' )
			{
				if( 0 == this.currentCarousel )
				{
					this.slide_arrows.removeClass( 'av-visible-prev' );
					this.slide_arrows.addClass( 'av-visible-next' );
				}
				else if( this.currentCarousel + this.options.carouselSlidesToShow >= this.itemsCount )
				{
					this.slide_arrows.addClass( 'av-visible-prev' );
					this.slide_arrows.removeClass( 'av-visible-next' );
				}
				else
				{
					this.slide_arrows.addClass( 'av-visible-prev' );
					this.slide_arrows.addClass( 'av-visible-next' );
				}

				return;
			}

			if( 'endless' == this.options.loop_autoplay || 'manual-endless' == this.options.loop_manual )
			{
				this.slide_arrows.addClass( 'av-visible-prev' );
				this.slide_arrows.addClass( 'av-visible-next' );
			}
			else if( 0 == this.current )
			{
				this.slide_arrows.removeClass( 'av-visible-prev' );
				this.slide_arrows.addClass( 'av-visible-next' );
			}
			else if( this.current + 1 >= this.itemsCount )
			{
				this.slide_arrows.addClass( 'av-visible-prev' );
				this.slide_arrows.removeClass( 'av-visible-next' );
			}
			else
			{
				this.slide_arrows.addClass( 'av-visible-prev' );
				this.slide_arrows.addClass( 'av-visible-next' );
			}
		},

		_buildCarousel: function()
		{
            var self = this,
    		stageWidth = this.$slider.outerWidth(),
    		slidesWidth = parseInt(stageWidth / this.options.carouselSlidesToShow),
            windowWidth = window.innerWidth || $(window).width();

			// responsive carousel
			if( this.options.carouselResponsive &&
                this.options.carouselResponsive.length &&
                this.options.carouselResponsive !== null )
			{

				for( var breakpoint in this.options.carouselResponsive )
				{
					var breakpointValue = this.options.carouselResponsive[breakpoint]['breakpoint'];
					var newSlidesToShow = this.options.carouselResponsive[breakpoint]['settings']['carouselSlidesToShow'];

					if( breakpointValue >= windowWidth )
					{
                        slidesWidth = parseInt(stageWidth / newSlidesToShow);
                        this.options.carouselSlidesToShow = newSlidesToShow;
					}
				}
			}

            // set width and height for each slide
            this.slideWidthCarousel = slidesWidth;

            this.$slides.each(function(i)
			{
                $(this).width(slidesWidth);
            });

            // set width for the UL
			var slideTrackWidth = slidesWidth * this.itemsCount;
			this.$sliderUl.width(slideTrackWidth).css( 'transform', 'translateX(0px)' );

			// hide nav if not needed
			if( this.options.carouselSlidesToShow >= this.itemsCount )
			{
				this.$slider.find('.av-timeline-nav').hide();
			}
		},

    	//calculate which slide should be displayed next and call the executing transition function
    	_navigate: function( dir, pos )
		{
			if( this.isAnimating || this.itemsCount < 2 || ! this.$slider.is( ':visible' ) )
			{
				return false;
			}

			this.isAnimating = true;

			// current item's index
			this.prev = this.current;

			// if position is passed
			if( pos !== undefined )
			{
				this.current = pos;
				dir = this.current > this.prev ? 'next' : 'prev';
			}

            // if not check the boundaries
			else if( dir === 'next' )
			{
				this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;

				if( this.current === 0 && this.options.autoplay_stopper && this.options.autoplay )
				{
					this.isAnimating = false;
					this.current = this.prev;
					this._stopSlideshow();
					return false;
				}

				//	check if we can rotate
				if( 0 === this.current )
				{
					if( 'endless' != this.options.loop_autoplay && 'manual-endless' != this.options.loop_manual )
					{
						this.isAnimating = false;
						this.current = this.prev;
						return false;
					}
				}
			}
			else if( dir === 'prev' )
			{
				this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;

				//	check if we can rotate
				if( this.itemsCount - 1 === this.current )
				{
					if( 'endless' != this.options.loop_autoplay && 'manual-endless' != this.options.loop_manual )
					{
						this.isAnimating = false;
						this.current = this.prev;
						return false;
					}
				}
			}

			//set goto button
			this.gotoButtons.removeClass( 'active' ).eq( this.current ).addClass( 'active' );
			this._set_slide_arrows_visibility();

			//set slideshow size if carousel not in use
            if( this.options.carousel === 'no' )
			{
                this._setSize();
			}

            //if we are using a background slider make sure that the image is loaded. if not preload it, then show the slide
			if( this.options.bg_slider == true )
			{
				if( this.imageUrls[this.current]['status'] == true )
				{
					this['_' + this.options.animation].call(this, dir);
				}
				else
				{
					this.loader.show();
					this._preloadSingle(this.current, function()
    				{
    					this['_' + this.options.animation].call( this, dir );
    					this.loader.hide();
    				});
				}
			}
			else //no background loader -> images are already loaded
			{
				//call the executing function. for example _slide, or _fade. since the function call is absed on a var we can easily extend the slider with new animations
				this['_' + this.options.animation].call( this, dir );
			}

			if( this.current == 0 )
			{
				this.loopCount++;
				this.$slider.trigger( 'avia_slider_first_slide' );
			}
			else if( this.current == this.itemsCount - 1 )
			{
				this.$slider.trigger( 'avia_slider_last_slide' );
			}
			else
			{
				this.$slider.trigger( 'avia_slider_navigate_slide' );
			}
		},

		//if the next slide has a different height than the current change the slideshow height
		_setSize: function(instant)
		{
			//if images are attached as bg images the slider has a fixed height
			if( this.options.bg_slider == true )
			{
				return;
			}

			var self    		= this,
				slide 			= this.$slides.eq(this.current),
				img 			= slide.find('img'),
				current			= Math.floor(this.$sliderUl.height()),
				ratio			= slide.data('video-ratio'),
				setTo   		= ratio ? this.$sliderUl.width() / ratio : Math.floor(slide.height()),
				video_height 	= slide.data('video-height'), //forced video height %. needs to be set only once
				video_toppos 	= slide.data('video-toppos'); //forced video top position

			this.$sliderUl.height(current).css('padding',0); //make sure to set the slideheight to an actual value

			if(setTo != current)
			{
				if(instant == true)
				{
					this.$sliderUl.css({height:setTo});
					this.$win.trigger('av-height-change');
				}
				else
				{
					this.$sliderUl.avia_animate({height:setTo}, function()
					{
						self.$win.trigger('av-height-change');
					});
				}
			}

			this._setCenter();

			if(video_height && video_height!= "set")
			{
				slide.find('iframe, embed, video, object, .av_youtube_frame').css({height: video_height + '%', top: video_toppos + '%'});
				slide.data('video-height','set');
			}
		},

		_setCenter: function()
		{
			//if the image has a min width and is larger than the slider center it
			//positon img based on caption. right caption->left pos, left caption -> right pos
			var slide 		= this.$slides.eq(this.current),
				img 		= slide.find('img'),
				min_width 	= parseInt(img.css('min-width'),10),
				slide_width	= slide.width(),
				caption		= slide.find('.av-slideshow-caption'),
				css_left 	= ((slide_width - min_width) / 2);

			if(caption.length)
			{
				if(caption.is('.caption_left'))
				{
					css_left = ((slide_width - min_width) / 1.5);
				}
				else if(caption.is('.caption_right'))
				{
					css_left = ((slide_width - min_width) / 2.5);
				}
			}

			if(slide_width >= min_width)
			{
				css_left = 0;
			}

			img.css({left:css_left});
		},

		_carouselmove : function(){

        //    var offset = (this.options.carouselSlidesToScroll*this.slideWidthCarousel)*this.currentCarousel;
			var offset = this.slideWidthCarousel * this.currentCarousel;
            this.$sliderUl.css('transform', 'translateX(-' + offset + 'px)');
		},

		_carouselslide: function(dir)
		{
			console.log( '_carouselslide:', dir, this.currentCarousel );

    		if( dir === 'next' )
			{
				if (this.options.carouselSlidesToShow + this.currentCarousel < this.itemsCount)
				{
                    this.currentCarousel++;
                    this._carouselmove();
				}
			}
			else if( dir === 'prev' )
			{
    			if( this.currentCarousel > 0 )
				{
                    this.currentCarousel--;
                    this._carouselmove();
				}
			}

			this._set_slide_arrows_visibility();

            this.isAnimating = false;
		},

		_slide: function(dir)
		{
			var dynamic			= false, //todo: pass by option if a slider is dynamic
				modifier		= dynamic == true ? 2 : 1,
				sliderWidth		= this.$slider.width(),
				direction		= dir === 'next' ? -1 : 1,
				property  		= this.browserPrefix + 'transform',
				reset			= {},
				transition = {},
				transition2 = {},
				trans_val 		= ( sliderWidth * direction * -1 ),
				trans_val2 		= ( sliderWidth * direction ) / modifier;

			//do a css3 animation
			if(this.cssActive)
			{
				property = this.browserPrefix + 'transform';

				//do a translate 3d transformation if available, since it uses hardware acceleration
				if(this.css3DActive)
				{
					reset[property]  = "translate3d(" + trans_val + "px, 0, 0)";
					transition[property]  = "translate3d(" + trans_val2 + "px, 0, 0)";
					transition2[property] = "translate3d(0,0,0)";
				}
				else //do a 2d transform. still faster than a position "left" change
				{
					reset[property]  = "translate(" + trans_val + "px,0)";
					transition[property]  = "translate(" + trans_val2 + "px,0)";
					transition2[property] = "translate(0,0)";
				}
			}
			else
			{
				reset.left = trans_val;
				transition.left = trans_val2;
				transition2.left = 0;
			}

			if(dynamic)
			{
				transition['z-index']  = "1";
				transition2['z-index']  = "2";
			}

			this._slide_animate(reset, transition, transition2);
		},

		_slide_up: function(dir)
		{
			var dynamic			= true, //todo: pass by option if a slider is dynamic
				modifier		= dynamic == true ? 2 : 1,
				sliderHeight	= this.$slider.height(),
				direction		= dir === 'next' ? -1 : 1,
				property  		= this.browserPrefix + 'transform',
				reset			= {},
				transition = {},
				transition2 = {},
				trans_val 		= ( sliderHeight * direction * -1),
				trans_val2 		= ( sliderHeight * direction) / modifier;

			//do a css3 animation
			if(this.cssActive)
			{
				property  = this.browserPrefix + 'transform';

				//do a translate 3d transformation if available, since it uses hardware acceleration
				if(this.css3DActive)
				{
					reset[property]  = "translate3d( 0," + trans_val + "px, 0)";
					transition[property]  = "translate3d( 0," + trans_val2 + "px, 0)";
					transition2[property] = "translate3d(0,0,0)";
				}
				else //do a 2d transform. still faster than a position "left" change
				{
					reset[property]  = "translate( 0," + trans_val + "px)";
					transition[property]  = "translate( 0," + trans_val2 + "px)";
					transition2[property] = "translate(0,0)";					}
			}
			else
			{
				reset.top = trans_val;
				transition.top = trans_val2;
				transition2.top = 0;
			}

			if(dynamic)
			{
				transition['z-index']  = "1";
				transition2['z-index']  = "2";
			}
			this._slide_animate(reset, transition, transition2);
		},


		//slide animation: do a slide transition by css3 transform if possible. if not simply do a position left transition
		_slide_animate: function( reset , transition , transition2 )
		{
			var self			= this,
				displaySlide 	= this.$slides.eq(this.current),
				hideSlide		= this.$slides.eq(this.prev);

			hideSlide.trigger('pause');
			if( ! displaySlide.data('disableAutoplay') )
			{
				if(displaySlide.hasClass('av-video-lazyload') && !displaySlide.hasClass('av-video-lazyload-complete'))
				{
					displaySlide.find('.av-click-to-play-overlay').trigger('click');
				}
				else
				{
					displaySlide.trigger('play');
				}
			}

			displaySlide.css({visibility:'visible', zIndex:4, opacity:1, left:0, top:0});
			displaySlide.css(reset);

			hideSlide.avia_animate(transition, this.options.transitionSpeed, this.options.easing);

			var after_slide = function()
			{
				self.isAnimating = false;
				displaySlide.addClass( 'active-slide' );
				hideSlide.css( {visibility:'hidden'} ).removeClass( 'active-slide next-active-slide' );
				self.$slider.trigger( 'avia-transition-done' );
			};

			if( self.options.show_slide_delay > 0 )
			{
				setTimeout( function()
				{
					displaySlide.addClass( 'next-active-slide' );
					displaySlide.avia_animate( transition2, self.options.transitionSpeed, self.options.easing, after_slide );
				}, self.options.show_slide_delay );
			}
			else
			{
				displaySlide.addClass( 'next-active-slide' );
				displaySlide.avia_animate( transition2, self.options.transitionSpeed, self.options.easing, after_slide );
			}
		},

		//simple fade transition of the slideshow
		_fade: function()
		{
			var self			= this,
				displaySlide 	= this.$slides.eq(this.current),
				hideSlide		= this.$slides.eq(this.prev),
				properties		= {visibility:'visible', zIndex:3, opacity:0},
				fadeCallback 	= function()
				{
					self.isAnimating = false;
					displaySlide.addClass( 'active-slide' );
					hideSlide.css({visibility:'hidden', zIndex:2}).removeClass( 'active-slide next-active-slide' );
					self.$slider.trigger( 'avia-transition-done' );
				};

			hideSlide.trigger('pause');

			if( ! displaySlide.data('disableAutoplay') )
			{
				if(displaySlide.hasClass('av-video-lazyload') && ! displaySlide.hasClass('av-video-lazyload-complete'))
				{
					displaySlide.find('.av-click-to-play-overlay').trigger('click');
				}
				else
				{
					displaySlide.trigger('play');
				}
			}

			displaySlide.addClass( 'next-active-slide' );

			if( self.options.fullfade == true )
			{
				hideSlide.avia_animate( {opacity:0}, 200, 'linear', function()
				{
					displaySlide.css( properties ).avia_animate( {opacity:1}, self.options.transitionSpeed, 'linear', fadeCallback );
				});
			}
			else
			{
				if( self.current === 0 )
				{
					hideSlide.avia_animate( {opacity:0}, self.options.transitionSpeed/2, 'linear' );
					displaySlide.css(properties).avia_animate( {opacity:1}, self.options.transitionSpeed/2, 'linear', fadeCallback );
				}
				else
				{
					displaySlide.css(properties).avia_animate( {opacity:1}, self.options.transitionSpeed/2, 'linear', function()
					{
						hideSlide.avia_animate({opacity:0}, 200, 'linear', fadeCallback );
					});
				}
			}
		},

		/************************************************************************
		Video functions
		*************************************************************************/

		//bind events to the video that tell the slider to autorotate once a video has been played
		_attach_video_events: function()
		{
			var self = this,
				$html = $('html');

			self.$slides.each( function(i)
			{
				var currentSlide 	= $(this),
					caption			= currentSlide.find('.caption_fullwidth, .av-click-overlay'),
					mejs			= currentSlide.find('.mejs-mediaelement'),
					lazyload		= currentSlide.hasClass('av-video-lazyload') ? true : false;


				if( currentSlide.data('avia_video_events') != true )
				{
					currentSlide.data('avia_video_events', true);

					currentSlide.on('av-video-events-bound', { slide: currentSlide, wrap: mejs , iteration: i , self: self, lazyload: lazyload }, onReady);

					currentSlide.on('av-video-ended', { slide: currentSlide , self: self}, onFinish);

					currentSlide.on('av-video-play-executed', function(){ setTimeout( function(){  self.pause(); }, 100 ); } );

					caption.on('click', { slide: currentSlide }, toggle);

					// also if the player was loaded before the _bindEvents function was bound trigger it manually
					if( currentSlide.is('.av-video-events-bound') )
					{
						currentSlide.trigger('av-video-events-bound');
					}

					//if we are on the first slide and autoplay is enabled and lazy loading is enabled we need to simulate a click event to the lazy load container
					if( lazyload && i === 0 && ! currentSlide.data('disableAutoplay') )
					{
						currentSlide.find('.av-click-to-play-overlay').trigger('click');
					}
				}
			});


			//function that takes care of events once the video is loaded for the first time.
			//needs to take into account 2 different scenarios: normally embedded videos or lazyloaded videos that start on user interaction/autoplay
			function onReady( event )
			{
				//autostart for first slide
				if(event.data.iteration === 0)
				{
					event.data.wrap.css('opacity',0);

					if( ! event.data.self.isMobile && ! event.data.slide.data('disableAutoplay') )
					{
						event.data.slide.trigger('play');
					} 

					setTimeout( function(){ event.data.wrap.avia_animate({opacity:1}, 400); }, 50 );
				}
				else if( $html.is('.avia-msie') && ! event.data.slide.is('.av-video-service-html5') )
				{
					/*
					* Internet Explorer fires the ready event for external videos once they become visible
					* as oposed to other browsers which always fire immediately.
					*/
					if( ! event.data.slide.data('disableAutoplay') )
					{
						event.data.slide.trigger('play');
					}
				}


				//make sure that the html5 element does not play if autoply is enabled but its not the first slide.
				//the autoplay attribute on the video element might cause this
				if( event.data.slide.is('.av-video-service-html5') && event.data.iteration !== 0 )
				{
					event.data.slide.trigger('pause');
				}

				//make sure that lazyloaded videos always get started once a user clicks them
				if( event.data.lazyload)
				{
					event.data.slide.addClass('av-video-lazyload-complete');
					event.data.slide.trigger('play');
				}
			}

			function onFinish( event )
			{
				//if the video is not looped resume the slideshow
				if( ! event.data.slide.is('.av-single-slide') && ! event.data.slide.is('.av-loop-video') )
				{
					event.data.slide.trigger('reset');
					self._navigate( 'next' );
					self.resume();
				}

				//safari 8 workaround for self hosted videos which wont loop by default
				if( event.data.slide.is('.av-loop-video') && event.data.slide.is('.av-video-service-html5') )
				{
					if( $html.is('.avia-safari-8') )
					{
						setTimeout( function()
						{
							event.data.slide.trigger('play');
						}, 1 );
					}
				}
			}

			function toggle( event )
			{
				if( event.target.tagName != "A" )
				{
					event.data.slide.trigger('toggle');
				}
			}
		},


		/************************************************************************
		Slideshow control functions
		*************************************************************************/

		_timer: function(callback, delay, first)
		{
		    var self = this,
				start,
				remaining = delay;

			self.timerId = 0;

		    this.pause = function()
			{
		        window.clearTimeout(self.timerId);
		        remaining -= new Date() - start;
		    };

		    this.resume = function()
			{
		        start = new Date();
		        self.timerId = window.setTimeout(callback, remaining);
		    };

		    this.destroy = function()
		    {
		    	window.clearTimeout(self.timerId);
		    };

		    this.resume(true);
		},

		//start autorotation
		_startSlideshow: function()
		{
			var self = this;

			this.isPlaying = true;

			this.slideshow = new this._timer( function()
			{
				self._navigate( 'next' );

				if( self.options.autoplay )
				{
					self._startSlideshow();
				}
			}, ( this.options.interval * 1000 ) );
		},

		//stop autorotation
		_stopSlideshow: function()
		{
			if( this.options.autoplay )
			{
				this.slideshow.destroy();
				this.isPlaying = false;
				this.options.autoplay = false;
			}

			this.options.autoplay = false;
			this.options.loop_autoplay = 'once';
			this.$slider.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
			this.$slider.removeClass( 'av-loop-endless' ).addClass( 'av-loop-once' );
		},

		//	check if we have a link for the image and set cursor
		_setPermaCaptionPointer: function( e )
		{
			if( ! this.permaCaption.length )
			{
				return;
			}

			var withLink = $( this.$slides[this.current] ).find( 'a' ).length;
			this.permaCaption.css( 'cursor', withLink ? 'pointer' : 'default' );
		},

		//	route perma caption to actual link of image, else allow bubble (e.g. for buttons)
		_routePermaCaptionClick: function( e )
		{
			var active_slide_link = $(this).siblings( '.avia-slideshow-inner' ).find( '>.active-slide a' );

			if( active_slide_link.length )
			{
				e.preventDefault();

				//	jQuery trigger does not work !!!
				active_slide_link[0].click();
			}
		},

		// public method: shows next image
		next: function(e)
		{
			e.preventDefault();
			this._stopSlideshow();
			this._navigate( 'next' );
		},

		// public method: shows previous image
		previous: function(e)
		{
			e.preventDefault();
			this._stopSlideshow();
			this._navigate( 'prev' );
		},

		// public method: goes to a specific image
		go2: function( pos )
		{
			//if we didnt pass a number directly lets asume someone clicked on a link that triggered the goto transition
			if(isNaN(pos))
			{
				//in that case prevent the default link behavior and set the slide number to the links hash
				pos.preventDefault();
				pos = pos.currentTarget.hash.replace('#','');
			}

			pos -= 1;

			if( pos === this.current || pos >= this.itemsCount || pos < 0 )
			{
				return false;
			}

			this._stopSlideshow();
			this._navigate( false, pos );

		},

		// public method: starts the slideshow
		// any call to next(), previous() or goto() will stop the slideshow autoplay
		play: function()
		{
			if( !this.isPlaying )
			{
				this.isPlaying = true;

				this._navigate( 'next' );
				this.options.autoplay = true;
				this._startSlideshow();
			}

		},

		// public methos: pauses the slideshow
		pause: function()
		{
			if( this.isPlaying )
			{
				this.slideshow.pause();
			}
		},

		// publiccmethos: resumes the slideshow
		resume: function()
		{
			if( this.isPlaying )
			{
				this.slideshow.resume();
			}
		},

		// public methos: destroys the instance
		destroy: function( callback )
		{
			this.slideshow.destroy( callback );
		}
    };

    //simple wrapper to call the slideshow. makes sure that the slide data is not applied twice
    $.fn.aviaSlider = function( options )
    {
    	return this.each(function()
    	{
    		var self = $.data( this, 'aviaSlider' );

    		if( ! self )
    		{
    			self = $.data( this, 'aviaSlider', new $.AviaSlider( options, this ) );
    		}
    	});
    };

})( jQuery );

;

;/* avia-module-countdown-js */
// -------------------------------------------------------------------------------------------
//
// AVIA Countdown
//
// @since 4.5.6  Countdown is UTC based to reflect different browser timezones
// @since 5.5  flip clocks added
//
// -------------------------------------------------------------------------------------------

var aviaJS = aviaJS || {};

(function($)
{
	"use strict";

	var _units	= ['years','months','weeks','days','hours','minutes','seconds'],
		_second = 1000,
		_minute = _second * 60,
		_hour 	= _minute * 60,
		_day 	= _hour * 24,
		_week	= _day * 7,

		getDaysInMonth = function( month, year )
		{
			//	January is 1 based
			return new Date( year, month, 0 ).getDate();
		},

		splitStartDate = function( date )
		{
			var result = {
						year: date.getFullYear(),
						month: date.getMonth() + 1,
						day: date.getDate(),
						hours: date.getHours(),
						minutes: date.getMinutes(),
						seconds: date.getSeconds()
					};

			return result;
		},

		getYears = function( start, endDate )
		{
			var diff = endDate.getFullYear() - start.year;

			if( diff > 0 )
			{
				//	take care of leap year
				var check = new Date( start.year + diff, start.month - 1, start.day, start.hours, start.minutes, start.seconds );
				if( check > endDate )
				{
					diff --;
				}
			}

			return ( diff >= 0 ) ? diff : 0;
		},

		getMonths = function( start, endDate )
		{
			var endMonth = endDate.getMonth() + 1;
			var diff = endMonth - start.month;
			if( diff < 0 )
			{
				diff = 12 - start.month + endMonth;
			}

			if( diff > 0 )
			{
				//	take care of leap year
				var check = new Date( start.year, start.month - 1 + diff, start.day, start.hours, start.minutes, start.seconds );
				if( check > endDate )
				{
					diff --;
				}
			}

			return ( diff >= 0 ) ? diff : 0;
		},

		getDays = function( start, endDate )
		{
			var endDay = endDate.getDate();
			var diff = endDay - start.day;
			if( diff < 0 )
			{
				diff = getDaysInMonth( start.month, start.year ) - start.day + endDay;
			}

			if( diff > 0 )
			{
				var check = new Date( start.year, start.month - 1, start.day + diff, start.hours, start.minutes, start.seconds );
				if( check > endDate )
				{
					diff --;
				}
			}

			return ( diff >= 0 ) ? diff : 0;
		},

		getBetween = function( startDate, endDate )
		{
			var start = splitStartDate( startDate ),
				result = {
							years: 0,
							year_months: 0,
							month_months: 0,
							days: 0
						};


			result.years = getYears( start, endDate );
			start.year += result.years;

			result.year_months = getMonths( start, endDate );
			start.month += result.year_months;

			result.days = getDays( start, endDate );
			start.day += result.days;

			result.month_months = result.years * 12 + result.year_months;

			return result;
		},

		setLabelMinWidth = function( _self, reset )
		{
			if( true === reset )
			{
				for( let i in _self.time )
				{
					if( typeof _self.update[i] == "object"  && _self.update[i].label_container.length )
					{
						_self.update[i].label_container.css( { "min-width": '' } );
					}
				}

				_self.labelMinWidth = 0;

				return;
			}

			let newMin = _self.labelMinWidth;

			for( let i in _self.time )
			{
				if( typeof _self.update[i] == "object"  && _self.update[i].label_container.length )
				{
					let curr = _self.update[i].label_container.outerWidth( true );

					if( newMin < curr )
					{
						newMin = curr;
					}
				}
			}

			if( newMin > _self.labelMinWidth )
			{
				for( let i in _self.time )
				{
					if( typeof _self.update[i] == "object"  && _self.update[i].label_container.length )
					{
						_self.update[i].label_container.css( { "min-width": newMin + "px" } );
					}
				}

				_self.labelMinWidth = newMin;
			}
		},

		ticker = function( _self )
		{
			var tmLoc = new Date(),
				_now = new Date( tmLoc.getTime() + tmLoc.getTimezoneOffset() * 60000 ),		//	get UTC time
				_timestamp = _self.end - _now;

			if( _timestamp <= 0 )
			{
				if( _self.firstrun && ! _self.container.hasClass( 'av-finished-msg' ) )
				{
					_timestamp = 0;
				}
				else
				{
					_self.container.addClass('av-countdown-finished');
					clearInterval( _self.countdown );

					return;
				}
			}

			_self.time.years	= 0;
			_self.time.months	= 0;
			_self.time.weeks   	= Math.floor( _timestamp / _week );
			_self.time.days 	= Math.floor( ( _timestamp % _week ) / _day );
			_self.time.hours	= Math.floor( ( _timestamp % _day ) / _hour );
			_self.time.minutes 	= Math.floor( ( _timestamp % _hour ) / _minute );
			_self.time.seconds 	= Math.floor( ( _timestamp % _minute ) / _second );

			var between = getBetween( _now, _self.end );

			switch( _self.data.maximum )
			{
				case 1:
					_self.time.seconds = Math.floor( _timestamp / _second );
					break;
				case 2:
					_self.time.minutes = Math.floor( _timestamp / _minute );
					break;
				case 3:
					_self.time.hours = Math.floor( _timestamp / _hour );
					break;
				case 4:
					_self.time.days = Math.floor( _timestamp / _day );
					break;
				case 6:
					_self.time.days = between.days;
					_self.time.months = between.month_months;
					break;
				case 7:
					_self.time.days = between.days;
					_self.time.months = between.year_months;
					_self.time.years  = between.years;
					break;
			}

			for( let i in _self.time )
			{
				if( typeof _self.update[i] == "object" && _self.update[i].label_container.length )
				{
					if(_self.firstrun || _self.oldtime[i] != _self.time[i])
					{
						let labelkey = ( _self.time[i] === 1 ) ? "single" : "multi",
							new_label = _self.update[i][labelkey],
							old_label = _self.update[i].label_container.text();

						if( old_label != new_label )
						{
							_self.update[i].label_container.text( new_label );
						}

						if( _self.isFlipNumbers )
						{
							if( _self.update[i].unitContainer.length )
							{
								if( ! _self.firstrun )
								{
									_self.update[i].backCard.attr( 'data-value', _self.oldtime[i] );
									_self.update[i].bottomCard.attr( 'data-value', _self.oldtime[i] );
								}

								_self.update[i].topCard.text( _self.time[i] );
								_self.update[i].backBottomCard.attr( 'data-value', _self.time[i] );

								_self.update[i].unitContainer.removeClass( 'flip' );
								void _self.update[i].unitContainer[0].offsetWidth;
								_self.update[i].unitContainer.addClass( 'flip' );
							}
						}
						else if( _self.isFlipClock )
						{
							if( _self.update[i].unitContainer.length )
							{
								if( ! _self.firstrun )
								{
									_self.update[i].currentTop.text( _self.oldtime[i] );
									_self.update[i].currentBottom.text( _self.oldtime[i] );
								}

								_self.update[i].nextTop.text( _self.time[i] );
								_self.update[i].nextBottom.text( _self.time[i] );

								_self.update[i].unitContainer.removeClass( 'flip' );
								void _self.update[i].unitContainer[0].offsetWidth;
								_self.update[i].unitContainer.addClass( 'flip' );
							}
						}
						else
						{
							_self.update[i].time_container.text(_self.time[i]);
						}
					}
				}
			}

			//show ticker
			if( _self.firstrun )
			{
				_self.container.addClass('av-countdown-active');
			}

			_self.oldtime = $.extend( {}, _self.time );
			_self.firstrun = false;

			if( ( _self.isFlipNumbers || _self.isFlipClock ) && _self.number_space )
			{
				setTimeout( function()
				{
					setLabelMinWidth( _self );
				}, 50 );
			}
		};


	$.fn.aviaCountdown = function( options )
	{
		if( ! this.length )
		{
			return;
		}

		return this.each( function()
		{
			var _self = {};

			_self.update = {};
			_self.time = {};
			_self.oldtime = {};
			_self.firstrun = true;
			_self.container = $(this);
			_self.data = _self.container.data();
			_self.end = new Date( _self.data.year, _self.data.month, _self.data.day, _self.data.hour, _self.data.minute );
			_self.isFlipNumbers = _self.container.hasClass('av-flip-numbers');
			_self.isFlipClock = _self.container.hasClass('av-flip-clock');
			_self.number_space = _self.container.hasClass('av-number-space-equal');
			_self.labelMinWidth = 0;

			var onResize = function( e )
			{
				if( _self.number_space )
				{
					setLabelMinWidth( _self, true );
				}
			};

			if( _self.data.timezone != '0' )
			{
				_self.end = new Date( _self.end.getTime() - _self.data.timezone * 60000 );
			}

			for( var i in _units )
			{
				let unitContainer = _self.container.find('.av-countdown-' + _units[i] );

				_self.update[_units[i]] = {
										unitContainer:	 unitContainer,
										time_container:  _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time'),
										label_container: _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time-label')
									};

				if( _self.update[_units[i]].label_container.length )
				{
					_self.update[_units[i]].single = _self.update[_units[i]].label_container.data('label');
					_self.update[_units[i]].multi  = _self.update[_units[i]].label_container.data('label-multi');
				}

				if( _self.isFlipNumbers )
				{
					_self.update[_units[i]].topCard = unitContainer.find('.card__top');
					_self.update[_units[i]].bottomCard = unitContainer.find('.card__bottom');
					_self.update[_units[i]].backCard = unitContainer.find('.card__back');
					_self.update[_units[i]].backBottomCard = unitContainer.find('.card__back .card__bottom');
				}
				else if( _self.isFlipClock )
				{
					_self.update[_units[i]].currentTop = unitContainer.find('.curr.top');
					_self.update[_units[i]].nextTop = unitContainer.find('.next.top');
					_self.update[_units[i]].nextBottom = unitContainer.find('.next.bottom');
					_self.update[_units[i]].currentBottom = unitContainer.find('.curr.bottom');
				}
			}

			ticker( _self );
			_self.countdown = setInterval( function(){ ticker( _self ); }, 1000 );

			window.addEventListener( 'resize', aviaJS.aviaJSHelpers.debounce( onResize.bind( this ), 50 ) );
		});
	};

}(jQuery));

;

;/* avia-module-gallery-js */
(function($)
{
	'use strict';

	// -------------------------------------------------------------------------------------------
	// Gallery shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_gallery = function(options)
	{
		return this.each(function()
		{
			var gallery = $(this),
				images = gallery.find('img'),
				big_prev = gallery.find('.avia-gallery-big'),
				prev = gallery.find( '.avia-slideshow-arrows .prev-slide' ),
				next = gallery.find( '.avia-slideshow-arrows .next-slide' ),
				thumbs = gallery.find( '.avia-gallery-thumb a' ),
				no_hover_effect = gallery.hasClass( 'no-hover-effect' );

			if( next.length )
			{
				gallery.avia_swipe_trigger( {prev:'.prev-slide', next:'.next-slide'} );
			}

			//trigger displaying of thumbnails
			gallery.on( 'avia_start_animation', function()
			{
				images.each(function(i)
				{
					var image = $(this);
					setTimeout( function()
					{
						image.addClass('avia_start_animation');
					}, (i * 110) );
				});
			});

			if( gallery.hasClass('deactivate_avia_lazyload') )
			{
				gallery.trigger('avia_start_animation');
			}

			//trigger thumbnail hover and big prev image change
			if( big_prev.length )
			{
				gallery.on( 'mouseenter', '.avia-gallery-thumb a', function()
				{
					var _self = $(this),
						newImgSrc = _self.attr('data-prev-img'),
						oldImg = big_prev.find('img'),
						oldImgSrc = oldImg.attr('src');

					if( no_hover_effect )
					{
						if( ! gallery.hasClass( 'av-force-img-change' ) )
						{
							return;
						}
					}

					gallery.removeClass( 'av-force-img-change' );

					if( newImgSrc == oldImgSrc )
					{
						return;
					}

					big_prev.height( big_prev.height() );

					big_prev.attr('data-onclick', _self.attr('data-onclick'));
					big_prev.attr('href', _self.attr('href'));
					big_prev.attr('title', _self.attr('title'));

					//	copy lightbox attributes
					if( 'undefined' == typeof _self.data('srcset') )
					{
						big_prev.removeAttr('data-srcset');
						big_prev.removeData('srcset');
					}
					else
					{
						big_prev.data('srcset', _self.data('srcset'));
						big_prev.attr('data-srcset', _self.data('srcset'));
					}

					if( 'undefined' == typeof _self.data('sizes') )
					{
						big_prev.removeAttr('data-sizes');
						big_prev.removeData('sizes');
					}
					else
					{
						big_prev.data('sizes', _self.data('sizes'));
						big_prev.attr('data-sizes', _self.data('sizes'));
					}

					//	since 4.8.8.2 we have a hidden img to support scrset and sizes - fallback to old version if missing
					var newPrev = _self.find( '.big-prev-fake img' ).clone( true );
					if( newPrev.length == 0 )
					{
						var next_img = new Image();
						next_img.src = newImgSrc;
						newPrev = $(next_img);
					}

					if( big_prev.hasClass( 'avia-gallery-big-no-crop-thumb' ) )
					{
//						changed 5.4: https://github.com/KriesiMedia/wp-themes/issues/4028
//						newPrev.css( {'height':big_prev.height(),'width':'auto'} );
						newPrev.css( {'height':'auto', 'width':'auto', 'max-height':'100%', 'max-width':'100%'} );
					}

					big_prev.stop().animate( {opacity:0}, function()
					{
						newPrev.insertAfter( oldImg );
						oldImg.remove();
						big_prev.animate( {opacity:1} );
					});
				});

				next.on( 'click', function( e )
				{
					e.preventDefault();

					if( ! big_prev.length )
					{
						return;
					}

					let current = big_prev[0].dataset.onclick,
						next_index = current;

					if( next_index >= thumbs.length  )
					{
						next_index = 0;
					}

					gallery.addClass( 'av-force-img-change' );
					$( thumbs[ next_index ] ).trigger( 'mouseenter' );
				});

				prev.on( 'click', function( e )
				{
					e.preventDefault();

					if( ! big_prev.length )
					{
						return;
					}

					let current = big_prev[0].dataset.onclick,
						prev_index = current - 2;

					if( prev_index < 0  )
					{
						prev_index = thumbs.length - 1;
					}

					gallery.addClass( 'av-force-img-change' );
					$( thumbs[ prev_index ] ).trigger( 'mouseenter' );
				});

				big_prev.on( 'click', function( e )
				{
					e.preventDefault();
					
					var imagelink = gallery.find('.avia-gallery-thumb a').eq( this.getAttribute('data-onclick') - 1 );

					if( imagelink && ! imagelink.hasClass('aviaopeninbrowser') )
					{
						imagelink.trigger('click');
					}
					else if( imagelink )
					{
						var imgurl = imagelink.attr('href');
						var secure = imagelink.hasClass( 'custom_link' ) ? 'noopener,noreferrer' : '';

						if( imagelink.hasClass('aviablank') && imgurl != '' )
						{
							window.open( imgurl, '_blank', secure );
						}
						else if( imgurl != '' )
						{
							window.open( imgurl, '_self', secure );
						}
					}
					return false;
				});


				$(window).on( 'debouncedresize', function()
				{
				  	big_prev.height('auto');
				});
			}
		});
	};

}(jQuery));

;

;/* avia-module-gallery-hor-js */
// -------------------------------------------------------------------------------------------
// Horizontal Gallery
//
// @since ???
// @since 5.0		extended "slideshow" navigation, added transform3d support
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.avia_hor_gallery = function(options)
	{
		var defaults =
			{
				slide_container	: '.av-horizontal-gallery-inner', //element with max width
				slide_element	: '.av-horizontal-gallery-slider', //element that gets moved
				slide_content	: '.av-horizontal-gallery-wrap',
				slide_arrows	: '.avia-slideshow-arrows',
				slide_dots		: '.avia-slideshow-dots',
				active			: 'av-active-gal-item',				// must be a class string without the . in front
				slide_controls	: '.avia-slideshow-controls',
				prev			: '.av-horizontal-gallery-prev',
				next			: '.av-horizontal-gallery-next'
			};

		var options = $.extend(defaults, options);

		var win 			= $(window),
			browserPrefix 	= $.avia_utilities.supports('transition'),
			cssActive 		= this.browserPrefix !== false ? true : false,
			isMobile 		= $.avia_utilities.isMobile,
			isTouchDevice	= $.avia_utilities.isTouchDevice,
			transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
			transition		= {};

		return this.each(function()
		{
			var container 			= $(this),
				slide_container 	= container.find( options.slide_container ),
				slide_element		= container.find( options.slide_element ),
				slide_content		= container.find( options.slide_content ),
				slide_controls		= container.find( options.slide_controls ),
				slide_arrows		= container.find( options.slide_arrows ),	//	arrows to scroll images
				slide_dots_wrap		= container.find( options.slide_dots ),		//	dots to scroll images
				slide_dots			= slide_dots_wrap.find( 'a' ),
				prev				= container.find( options.prev ),
				next				= container.find( options.next ),
				imgs				= container.find( 'img' ),


				all_elements_width = 0,
				currentIndex = false,	//	0 based
				slideshowOptions = {
								animation: 'av-tab-slide-transition',
								autoplay: false,
								loop_autoplay: 'once',			//	'endless' | 'once'
								interval: 5,
								loop_manual: 'manual-endless',	//	'manual-endless' | 'manual-once'
								autoplay_stopper: false,
								noNavigation: false,
								initial: null,
								enlarge: 1
							},
				slideshowData = container.data( 'slideshow-data' ),		//	returns decoded json object
				timeoutIDAutoplay = null;

			if( 'undefined' != typeof slideshowData )
			{
				slideshowOptions = $.extend( {}, slideshowOptions, slideshowData );
			}

			var	set_up = function()
				{
					var sl_height = ( slide_container.width() / 100 ) * slide_container.data('av-height');

					slide_container.css( {'padding':0} ).height( sl_height );

					//fixes img distortion when resizing browser:
					imgs.css('display','inline-block');
					setTimeout( function(){ imgs.css( 'display', 'block' ); }, 10 );

					//calculate the slidelement width based on the elements inside
					all_elements_width = 0;

					slide_content.each( function()
					{
						all_elements_width += $(this).outerWidth( true );
					});

					slide_element.css( 'min-width' , all_elements_width );

					if( currentIndex !== false )
					{
						change_active( currentIndex );
					}
				},

				change_active = function( index )
				{
					//scroll the tabs if there is not enough room to display them all
					var current 	= slide_element.find( options.slide_content ).eq( index ),
						viewport	= slide_container.width(),
						modifier	= slideshowOptions.enlarge > 1  && currentIndex == index ? slideshowOptions.enlarge : 1,
						outerWidth	= current.outerWidth( true ) * modifier,
						margin_right= parseInt( current.css('margin-right'), 10 ) / 2,
						left_pos	= viewport < all_elements_width ? ( current.position().left * - 1 ) - ( outerWidth / 2 ) + ( viewport / 2 ): 0;

					//center properly
					left_pos = left_pos + margin_right;

					//out of bounce right side
					if( left_pos + all_elements_width < viewport )
					{
						left_pos = ( all_elements_width - viewport - parseInt( current.css('margin-right'), 10 ) ) * -1;
					}

					//out of bounce left side
					if( left_pos > 0 )
					{
						left_pos = 0;
					}

					if( cssActive )
					{
						transition['transform'] = transform3d ? "translate3d( " + left_pos  + "px, 0, 0 )" : "translate( " + left_pos + "px, 0 )"; //3d or 2d transform?
						transition['left'] = "0px";
						slide_element.css( transition );
					}
					else
					{
						slide_element.css( 'left', left_pos );
					}

					slide_container.find( '.' + options.active ).removeClass( options.active );
					current.addClass( options.active );
					currentIndex = index;

					set_slide_arrows_visibility();
					set_slide_dots_visibility();
				},

				clearTimeoutAutoplay = function()
				{
					if( typeof timeoutIDAutoplay === 'number' )
					{
						clearTimeout( timeoutIDAutoplay );
					}

					timeoutIDAutoplay = null;
				},

				init_autoplay = function()
				{
					if( true !== slideshowOptions.autoplay )
					{
						container.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
					}

					if( 'undefined' == typeof slideshowOptions.loop_autoplay || 'endless' != slideshowOptions.loop_autoplay  )
					{
						slideshowOptions.loop_autoplay = 'once';
					}

					if( 'undefined' == typeof slideshowOptions.interval )
					{
						slideshowOptions.interval = 5;
					}

					if( 'undefined' == typeof slideshowOptions.autoplay || true !== slideshowOptions.autoplay  )
					{
						slideshowOptions.autoplay = false;
						container.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
						return;
					}

					clearTimeoutAutoplay();

					timeoutIDAutoplay = setTimeout( function()
					{
						rotate_next_image();
					}, slideshowOptions.interval * 1000 );
				},

				rotate_next_image = function()
				{
					timeoutIDAutoplay = null;

					if( 'endless' != slideshowOptions.loop_autoplay )
					{
						var stop = false;

						if( currentIndex === false )
						{
							if( slide_content.length == 0 )
							{
								stop = true;
							}
						}
						else
						{
							stop = currentIndex + 1 >= slide_content.length;
						}

						if( stop )
						{
							slideshowOptions.autoplay = false;
							slideshowOptions.loop_autoplay = 'manual';
							container.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
							container.removeClass( 'av-loop-endless' ).addClass( 'av-loop-once' );
							return;
						}
					}

					//	activates autorotate again
					next.trigger( 'click' );
				},

				set_slide_arrows_visibility = function()
				{
					if( 'endless' == slideshowOptions.loop_autoplay || 'manual-endless' == slideshowOptions.loop_manual || false === currentIndex )
					{
						slide_arrows.addClass( 'av-visible-prev' );
						slide_arrows.addClass( 'av-visible-next' );
					}
					else if( 0 == currentIndex )
					{
						slide_arrows.removeClass( 'av-visible-prev' );
						slide_arrows.addClass( 'av-visible-next' );
					}
					else if( currentIndex + 1 >= slide_content.length )
					{
						slide_arrows.addClass( 'av-visible-prev' );
						slide_arrows.removeClass( 'av-visible-next' );
					}
					else
					{
						slide_arrows.addClass( 'av-visible-prev' );
						slide_arrows.addClass( 'av-visible-next' );
					}
				},

				set_slide_dots_visibility = function()
				{
					slide_dots_wrap.find( 'a' ).removeClass( 'active' );

					var tmpIndex = false !== currentIndex ? currentIndex : 0;
					slide_dots_wrap.find( 'a' ).eq( tmpIndex ).addClass( 'active' );
				};

			//element click
			slide_content.on( 'click', function(e)
			{
				var current = $(this);
				var index = slide_content.index( current );

				if( currentIndex === index )
				{
//					if( av_enlarge > 1 && ! $( e.target ).is( 'a' ) )
//					{
//						//slide_container.find("." +options.active).removeClass(options.active);
//						//currentIndex = false;
//					}
					return;
				}

				clearTimeoutAutoplay();
				change_active( index );
				init_autoplay();
			});

			prev.on( 'click', function(e)
			{
				//	select first image by default
				var nextID = currentIndex !== false ? currentIndex - 1 : 0;

				if( nextID < 0 )
				{
					if( 'endless' != slideshowOptions.loop_autoplay && 'manual-endless' != slideshowOptions.loop_manual )
					{
						return;
					}

					nextID = slide_content.length - 1;
				}

				clearTimeoutAutoplay();
				change_active( nextID );
				init_autoplay();
			});

			next.on( 'click', function(e)
			{
				//	select first image by default to avoid zooming
				var nextID = currentIndex !== false ? currentIndex + 1 : 0;

				if( nextID >= slide_content.length )
				{
					if( 'endless' != slideshowOptions.loop_autoplay && 'manual-endless' != slideshowOptions.loop_manual )
					{
						return;
					}

					nextID = 0;
				}

				clearTimeoutAutoplay();
				change_active( nextID );
				init_autoplay();
			});

			slide_dots.on( 'click', function( e )
			{
				var current = $( this );
				var index = slide_dots.index( current );

				clearTimeoutAutoplay();
				change_active( index );
				init_autoplay();
			});

			$.avia_utilities.preload({
				container: container,
				global_callback: function()
				{
					// activate behavior
					set_up();

					if( slideshowOptions.initial )
					{
						var first = parseInt( slideshowOptions.initial, 10 );

						if( isNaN( first ) || first < 1 )
						{
							first = 1;
						}
						else if( first > slide_content.length )
						{
							first = slide_content.length;
						}

						change_active( first - 1 );
					}

					set_slide_arrows_visibility();
					set_slide_dots_visibility();
					init_autoplay();

					setTimeout( function()
					{
						container.addClass( 'av-horizontal-gallery-animated' );
					}, 10 );

					win.on( 'debouncedresize', set_up );
				}
			});

			if( ! container.hasClass( 'av-control-hidden' ) )
			{
				//if its a desktop browser add arrow navigation, otherwise add touch nav (also for touch devices)
				if( ! isMobile )
				{
					container.avia_keyboard_controls( { 37: options.prev, 39: options.next } );
				}

				if( isMobile || isTouchDevice )
				{
					container.avia_swipe_trigger( { prev: options.prev, next: options.next } );
				}
			}
		});
	};

}(jQuery));



;

;/* avia-module-rotator-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// Avia Text Rotator
	//
	// accordion slider script
	// -------------------------------------------------------------------------------------------

	$.AviaTextRotator  =  function(options, slider)
	{
	    this.$win	  	= $( window );
	    this.$slider  	= $( slider );
	    this.$inner	  	= this.$slider.find('.av-rotator-text');
	    this.$slides	= this.$inner.find('.av-rotator-text-single');
	    this.$current   = this.$slides.eq(0);
	    this.open		= 0;
	    this.count		= this.$slides.length;

	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}

		this.browserPrefix 	= $.avia_utilities.supported.transition;
	    this.cssActive 		= this.browserPrefix !== false ? true : false;
		this.property		= this.browserPrefix + 'transform',

		//this.cssActive    = false; //testing no css3 browser

	    this._init( options );
	}

  	$.AviaTextRotator.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;

    		if(this.count <= 1) return;

    		_self.options = $.extend({}, options, this.$slider.data());
			_self.$inner.addClass('av-rotation-active');
			//if(_self.options.fixwidth == 1) this.$inner.width(this.$current.width());
			_self._autoplay();

			if(_self.options.animation == "typewriter")
			{
				_self.$slider.addClass('av-caret av-blinking-caret');
			}


    	},

    	_autoplay: function()
    	{
    		var _self = this;

			_self.autoplay = setTimeout(function()
			{
				_self.open = _self.open === false ? 0 : _self.open + 1;
				if(_self.open >= _self.count) _self.open = 0;

				if(_self.options.animation != "typewriter")
				{
					_self._move({}, _self.open);
					_self._autoplay();
				}
				else
				{
					_self._typewriter();
				}


			}, _self.options.interval * 1000);
    	},

    	_typewriter: function(event)
    	{
	    	var _self = this;

	    	//mark text
	    	_self.$current.css('background-color', _self.$current.css('color') );
	    	_self.$slider.removeClass('av-caret av-blinking-caret').addClass('av-marked-text');


		    //store and hide text
		    setTimeout(function()
	    	{
		    	_self.$slider.addClass('av-caret av-blinking-caret').removeClass('av-marked-text');
		    	_self.$current.data('av_typewriter_text', _self.$current.html());
		    	_self.$current.css('background-color', 'transparent');
		    	_self.$current.html("");

		    }, 800 );


	    	//start typing new text
	    	setTimeout(function()
	    	{
		    	_self.$slider.removeClass('av-blinking-caret');
		    	_self.$next = _self.$slides.eq(_self.open);
		    	var content = _self.$next.data('av_typewriter_text') || _self.$next.html();
			content = content.replace(/&amp;/g, '&');

		    	_self.$current.css({display:'none'});
		    	_self.$next.css({display:'inline'});
		    	_self.$next.html("");

		    	var i = 0;
				var speed = 50; /* The speed/duration of the effect in milliseconds */

				function typeWriter() {

				  if (i < content.length) {
				    _self.$next[0].innerHTML += content.charAt(i);
				    i++;
				    setTimeout(typeWriter, speed + Math.floor(Math.random() * 100 ) );
				  }
				  else
				  {
					  _self.$slider.addClass('av-caret av-blinking-caret');
					  _self.$current = _self.$slides.eq(_self.open);
					  _self._autoplay();
				  }

				}

				typeWriter();

	    	}, 1500 );
	    },

    	_move: function(event)
    	{
	    	var _self 		= this,
	    		modifier 	= 30 * _self.options.animation,
	    		fade_out 	= {opacity:0},
	    		fade_start  = {display:'inline-block', opacity:0},
	    		fade_in		= {opacity:1};

    		this.$next = _self.$slides.eq(this.open);

    		if(this.cssActive)
    		{
	    		fade_out[_self.property] 	= "translate(0px," + modifier +"px)";
	    		fade_start[_self.property] 	= "translate(0px," + (modifier * -1) +"px)";
	    		fade_in[_self.property] 	= "translate(0px,0px)";
    		}
    		else
    		{
	    		fade_out['top'] 	= modifier;
	    		fade_start['top'] 	= (modifier * -1);
	    		fade_in['top'] 		= 0;
    		}


    		_self.$current.avia_animate(fade_out, function()
    		{
	    		_self.$current.css({display:'none'});
	    		_self.$next.css(fade_start).avia_animate(fade_in, function()
	    		{
		    		_self.$current = _self.$slides.eq(_self.open);
	    		});
    		});
    	}
    };


	$.fn.avia_textrotator = function( options )
	{
		return this.each(function()
		{
			var active = $.data( this, 'AviaTextRotator' );

			if(!active)
			{
				//make sure that the function doesnt get aplied a second time
				$.data( this, 'AviaTextRotator', 1 );

				//create the preparations for fullscreen slider
				new $.AviaTextRotator( options, this );
			}
		});
	};

}(jQuery));

;

;/* avia-module-icon-circles-js */
// -------------------------------------------------------------------------------------------
// Icon circles picker
// -------------------------------------------------------------------------------------------
(function($)
{
	"use strict";

	$.fn.aviaIconCircles = function(options)
	{
		return this.each( function()
		{
			var container = $(this),
				logos = container.find('.avia-icon-circles-icon'),
				logoText = container.find('.avia-icon-circles-icon-text');

			//trigger animation
			container.on( 'avia_start_animation', function()
			{
				if( container.hasClass( 'avia_animation_finished' ) )
				{
					return;
				}

				//	modal preview does not have waypoint script - simulate it
				container.addClass( 'avia_start_animation' );

				setTimeout( function()
				{
					container.addClass( 'avia_animation_finished' );

					if( container.hasClass( 'avia-active-icon' ) )
					{
						setTimeout(function()
						{
							var firstLogo = logos.filter('.av-first-active');

							if( firstLogo.length && ! logos.filter('.active').length )
							{
								firstLogo.addClass('active');
								firstLogo.next().addClass('active');
								container.addClass('active-container');
							}
						}, 800 );
					}
				}, 2000 );

				logos.on( 'mouseenter', function()
				{
					logos.removeClass('active');
					logoText.removeClass('active');

					var logo = $(this).addClass('active');
					logo.next().addClass('active');
					container.addClass('active-container');
				});

				container.on( 'mouseleave', function()
				{
					logos.removeClass('active');
					logoText.removeClass('active');
					container.removeClass('active-container');
				});
			});
		});
	};

}(jQuery));

;

;/* avia-module-icongrid-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// Icongrid shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_icongrid = function(options)
	{
		return this.each( function()
		{
			var icongrid_container = $( this ),
				icongrid = icongrid_container.find( '.avia-icongrid' ),
				icongrid_cards = icongrid.find( '.av-icon-cell-item' ),
				icongrid_id = '#' + icongrid.attr( 'id' ),
				min_height = icongrid_container.data( 'min-height' ),
				methods = {};

			icongrid_cards.on( 'touchend', function( e )
			{
				var current = $(this),
					container = current.closest( '.avia-icongrid' );

				if( current.hasClass( 'avia-hover' ) )
				{
					container.find( '.av-icon-cell-item' ).removeClass( 'avia-hover' );
				}
				else
				{
					container.find( '.av-icon-cell-item' ).removeClass( 'avia-hover' );
					current.addClass( 'avia-hover' );
				}

				var links = current.find( 'a' );

				if( links.length > 0 )
				{
					links.off( 'touchend.aviaIconGridLink' ).on( 'touchend.aviaIconGridLink', function( e )
					{
						e.preventDefault();

						var link = $( this ),
							container = link.closest( '.av-icon-cell-item' );

						if( ! container.hasClass( 'avia-hover' ) )
						{
							return;
						}

						e.stopImmediatePropagation();

						link.css( 'opacity', 0.5 );

						window.location.href = link.attr( 'href' );
					});
				}

				e.preventDefault();
				e.stopImmediatePropagation();
			});

			if( icongrid.hasClass( 'avia_flip_force_close' ) )
			{
				$( 'body' ).on( 'touchend', function( e )
				{
					var flipboxes = $( '.avia-icongrid.avia_flip_force_close' );
					flipboxes.each( function()
					{
						var flipbox = $( this );

						flipbox.find( '.av-icon-cell-item' ).removeClass( 'avia-hover' );
					});
				});
			}

			methods =
			{
				buildIconGrid: function ()
				{
					this.setMinHeight( $( icongrid_id + ' li article' ) );
				},

				setMinHeight: function (els)
				{
					if( els.length < 2 )
					{
						return;
					}

					var elsHeights = new Array(),
						front = [],
						back = [];

					els.css( 'min-height', '0' ).each( function (i)
					{
						var current = $(this);

						if( icongrid.hasClass( 'avia-icongrid-flipbox' ) )
						{
							front = current.find( '.avia-icongrid-front .avia-icongrid-inner' );
							back = current.find( '.avia-icongrid-flipback .avia-icongrid-inner' );
						}
						else
						{
							front = current.find( '.avia-icongrid-front .avia-icongrid-inner' );
							back = current.find( '.avia-icongrid-content' );

							//	needed for reverse columns
							elsHeights.push( current.outerHeight( true ) );
						}

						if( front.length )
						{
							elsHeights.push( front.outerHeight( true ) );
						}

						if( back.length )
						{
							elsHeights.push( back.outerHeight( true ) );
						}
					});

					if( 'undefined' != typeof( min_height ) )
					{
						var i = parseInt( min_height );
						if( ! isNaN( i ) )
						{
							elsHeights.push( i );
						}
					}

					var largest = Math.max.apply( null, elsHeights );
					els.css( 'min-height', largest );

					if( icongrid.hasClass( 'avia-icongrid-tooltip' ) )
					{
						var elWidth = els.first().outerWidth( true );
						if( largest > elWidth )
						{
							els.css( 'min-height', elWidth );
						}
					}
				}
			};

			methods.buildIconGrid();

			$(window).on( 'debouncedresize', function()
			{
				methods.buildIconGrid();
			});
		});
	};

}(jQuery));

;

;/* avia-module-iconlist-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// Iconlist shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_iconlist = function(options)
	{
		return this.each( function()
		{
			var iconlist = $(this),
				elements = iconlist.find('>li');


			//trigger displaying of thumbnails
			iconlist.on('avia_start_animation', function()
			{
				elements.each( function(i)
				{
					var element = $(this);
					setTimeout( function(){ element.addClass('avia_start_animation'); }, ( i * 350 ) );
				});
			});
		});
	};


}(jQuery));

;

;/* underscore-js */
/*! This file is auto-generated */
!function(n,t){var r,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("underscore",t):(n="undefined"!=typeof globalThis?globalThis:n||self,r=n._,(e=n._=t()).noConflict=function(){return n._=r,e})}(this,function(){var n="1.13.8",t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,V=Object.prototype,F="undefined"!=typeof Symbol?Symbol.prototype:null,P=e.push,f=e.slice,s=V.toString,q=V.hasOwnProperty,r="undefined"!=typeof ArrayBuffer,u="undefined"!=typeof DataView,U=Array.isArray,W=Object.keys,z=Object.create,L=r&&ArrayBuffer.isView,$=isNaN,C=isFinite,K=!{toString:null}.propertyIsEnumerable("toString"),J=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=Math.pow(2,53)-1;function l(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),t=Array(n),r=0;r<n;r++)t[r]=arguments[r+i];switch(i){case 0:return u.call(this,t);case 1:return u.call(this,arguments[0],t);case 2:return u.call(this,arguments[0],arguments[1],t)}for(var e=Array(i+1),r=0;r<i;r++)e[r]=arguments[r];return e[i]=t,u.apply(this,e)}}function i(n){var t=typeof n;return"function"==t||"object"==t&&!!n}function H(n){return void 0===n}function Q(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function o(n){var t="[object "+n+"]";return function(n){return s.call(n)===t}}var X=o("String"),Y=o("Number"),Z=o("Date"),nn=o("RegExp"),tn=o("Error"),rn=o("Symbol"),en=o("ArrayBuffer"),a=o("Function"),t=t.document&&t.document.childNodes,p=a="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof t?function(n){return"function"==typeof n||!1}:a,t=o("Object"),un=u&&(!/\[native code\]/.test(String(DataView))||t(new DataView(new ArrayBuffer(8)))),a="undefined"!=typeof Map&&t(new Map),u=o("DataView");var h=un?function(n){return null!=n&&p(n.getInt8)&&en(n.buffer)}:u,c=U||o("Array");function v(n,t){return null!=n&&q.call(n,t)}var on=o("Arguments"),an=(!function(){on(arguments)||(on=function(n){return v(n,"callee")})}(),on);function fn(n){return Y(n)&&$(n)}function cn(n){return function(){return n}}function ln(t){return function(n){n=t(n);return"number"==typeof n&&0<=n&&n<=G}}function sn(t){return function(n){return null==n?void 0:n[t]}}var y=sn("byteLength"),pn=ln(y),hn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var vn=r?function(n){return L?L(n)&&!h(n):pn(n)&&hn.test(s.call(n))}:cn(!1),d=sn("length");function yn(n,t){t=function(t){for(var r={},n=t.length,e=0;e<n;++e)r[t[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(n){return r[n]=!0,t.push(n)}}}(t);var r=J.length,e=n.constructor,u=p(e)&&e.prototype||V,i="constructor";for(v(n,i)&&!t.contains(i)&&t.push(i);r--;)(i=J[r])in n&&n[i]!==u[i]&&!t.contains(i)&&t.push(i)}function g(n){if(!i(n))return[];if(W)return W(n);var t,r=[];for(t in n)v(n,t)&&r.push(t);return K&&yn(n,r),r}function dn(n,t){var r=g(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function b(n){return n instanceof b?n:this instanceof b?void(this._wrapped=n):new b(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,y(n))}b.VERSION=n,b.prototype.valueOf=b.prototype.toJSON=b.prototype.value=function(){return this._wrapped},b.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function m(n){if(!i(n))return[];var t,r=[];for(t in n)r.push(t);return K&&yn(n,r),r}function mn(e){var u=d(e);return function(n){if(null==n)return!1;var t=m(n);if(d(t))return!1;for(var r=0;r<u;r++)if(!p(n[e[r]]))return!1;return e!==wn||!p(n[jn])}}var jn="forEach",t=["clear","delete"],u=["get","has","set"],U=t.concat(jn,u),wn=t.concat(u),r=["add"].concat(t,jn,"has"),u=a?mn(U):o("Map"),t=a?mn(wn):o("WeakMap"),U=a?mn(r):o("Set"),a=o("WeakSet");function j(n){for(var t=g(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function _n(n){for(var t={},r=g(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function An(n){var t,r=[];for(t in n)p(n[t])&&r.push(t);return r.sort()}function xn(f,c){return function(n){var t=arguments.length;if(c&&(n=Object(n)),!(t<2||null==n))for(var r=1;r<t;r++)for(var e=arguments[r],u=f(e),i=u.length,o=0;o<i;o++){var a=u[o];c&&void 0!==n[a]||(n[a]=e[a])}return n}}var Sn=xn(m),w=xn(g),On=xn(m,!0);function Mn(n){var t;return i(n)?z?z(n):((t=function(){}).prototype=n,n=new t,t.prototype=null,n):{}}function En(n){return c(n)?n:[n]}function _(n){return b.toPath(n)}function Bn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function Nn(n,t,r){n=Bn(n,_(t));return H(n)?r:n}function kn(n){return n}function A(t){return t=w({},t),function(n){return dn(n,t)}}function In(t){return t=_(t),function(n){return Bn(n,t)}}function x(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,t,r){return u.call(i,n,t,r)};case 4:return function(n,t,r,e){return u.call(i,n,t,r,e)}}return function(){return u.apply(i,arguments)}}function Tn(n,t,r){return null==n?kn:p(n)?x(n,t,r):(i(n)&&!c(n)?A:In)(n)}function Dn(n,t){return Tn(n,t,1/0)}function S(n,t,r){return b.iteratee!==Dn?b.iteratee(n,t):Tn(n,t,r)}function Rn(){}function Vn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}b.toPath=En,b.iteratee=Dn;var O=Date.now||function(){return(new Date).getTime()};function Fn(t){function r(n){return t[n]}var n="(?:"+g(t).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,r):n}}var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Pn=Fn(r),r=Fn(_n(r)),qn=b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Un=/(.)^/,Wn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},zn=/\\|'|\r|\n|\u2028|\u2029/g;function Ln(n){return"\\"+Wn[n]}var $n=/^\s*(\w|\$)+\s*$/;var Cn=0;function Kn(n,t,r,e,u){return e instanceof t?(e=Mn(n.prototype),i(t=n.apply(e,u))?t:e):n.apply(r,u)}var M=l(function(u,i){function o(){for(var n=0,t=i.length,r=Array(t),e=0;e<t;e++)r[e]=i[e]===a?arguments[n++]:i[e];for(;n<arguments.length;)r.push(arguments[n++]);return Kn(u,o,this,this,r)}var a=M.placeholder;return o}),Jn=(M.placeholder=b,l(function(t,r,e){var u;if(p(t))return u=l(function(n){return Kn(t,u,r,this,e.concat(n))});throw new TypeError("Bind must be called on a function")})),E=ln(d);function B(n,t,r){t||0===t||(t=1/0);for(var e=[],u=0,i=0,o=d(n)||0,a=[];;){if(o<=i){if(a.length){var f=a.pop(),i=f.i,o=d(n=f.v);continue}break}f=n[i++];t<=a.length?e[u++]=f:E(f)&&(c(f)||an(f))?(a.push({i:i,v:n}),i=0,o=d(n=f)):r||(e[u++]=f)}return e}var Gn=l(function(n,t){var r=(t=B(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Jn(n[e],n)}return n});var Hn=l(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Qn=M(Hn,b,1);function Xn(n){return function(){return!n.apply(this,arguments)}}function Yn(n,t){var r;return function(){return 0<--n&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var Zn=M(Yn,2);function nt(n,t,r){t=S(t,r);for(var e,u=g(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function tt(i){return function(n,t,r){t=S(t,r);for(var e=d(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(t(n[u],u,n))return u;return-1}}var rt=tt(1),et=tt(-1);function ut(n,t,r,e){for(var u=(r=S(r,e,1))(t),i=0,o=d(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i}function it(i,o,a){return function(n,t,r){var e=0,u=d(n);if("number"==typeof r)0<i?e=0<=r?r:Math.max(r+u,e):u=0<=r?Math.min(r+1,u):r+u+1;else if(a&&r&&u)return n[r=a(n,t)]===t?r:-1;if(t!=t)return 0<=(r=o(f.call(n,e,u),fn))?r+e:-1;for(r=0<i?e:u-1;0<=r&&r<u;r+=i)if(n[r]===t)return r;return-1}}var ot=it(1,rt,ut),at=it(-1,et);function ft(n,t,r){t=(E(n)?rt:nt)(n,t,r);if(void 0!==t&&-1!==t)return n[t]}function N(n,t,r){if(t=x(t,r),E(n))for(u=0,i=n.length;u<i;u++)t(n[u],u,n);else for(var e=g(n),u=0,i=e.length;u<i;u++)t(n[e[u]],e[u],n);return n}function k(n,t,r){t=S(t,r);for(var e=!E(n)&&g(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i}function ct(f){return function(n,t,r,e){var u=3<=arguments.length;return function(n,t,r,e){var u=!E(n)&&g(n),i=(u||n).length,o=0<f?0:i-1;for(e||(r=n[u?u[o]:o],o+=f);0<=o&&o<i;o+=f){var a=u?u[o]:o;r=t(r,n[a],a,n)}return r}(n,x(t,e,4),r,u)}}var lt=ct(1),st=ct(-1);function I(n,e,t){var u=[];return e=S(e,t),N(n,function(n,t,r){e(n,t,r)&&u.push(n)}),u}function pt(n,t,r){t=S(t,r);for(var e=!E(n)&&g(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function ht(n,t,r){t=S(t,r);for(var e=!E(n)&&g(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function T(n,t,r,e){return E(n)||(n=j(n)),0<=ot(n,t,r="number"==typeof r&&!e?r:0)}var vt=l(function(n,r,e){var u,i;return p(r)?i=r:(r=_(r),u=r.slice(0,-1),r=r[r.length-1]),k(n,function(n){var t=i;if(!t){if(null==(n=u&&u.length?Bn(n,u):n))return;t=n[r]}return null==t?t:t.apply(n,e)})});function yt(n,t){return k(n,In(t))}function dt(n,e,t){var r,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(r=n[a])&&i<r&&(i=r);else e=S(e,t),N(n,function(n,t,r){u=e(n,t,r),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i}var gt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function bt(n){return n?c(n)?f.call(n):X(n)?n.match(gt):E(n)?k(n,kn):j(n):[]}function mt(n,t,r){if(null==t||r)return(n=E(n)?n:j(n))[Vn(n.length-1)];for(var e=bt(n),r=d(e),u=(t=Math.max(Math.min(t,r),0),r-1),i=0;i<t;i++){var o=Vn(i,u),a=e[i];e[i]=e[o],e[o]=a}return e.slice(0,t)}function D(i,t){return function(r,e,n){var u=t?[[],[]]:{};return e=S(e,n),N(r,function(n,t){t=e(n,t,r);i(u,n,t)}),u}}var jt=D(function(n,t,r){v(n,r)?n[r].push(t):n[r]=[t]}),wt=D(function(n,t,r){n[r]=t}),_t=D(function(n,t,r){v(n,r)?n[r]++:n[r]=1}),At=D(function(n,t,r){n[r?0:1].push(t)},!0);function xt(n,t,r){return t in r}var St=l(function(n,t){var r={},e=t[0];if(null!=n){p(e)?(1<t.length&&(e=x(e,t[1])),t=m(n)):(e=xt,t=B(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}}return r}),Ot=l(function(n,r){var t,e=r[0];return p(e)?(e=Xn(e),1<r.length&&(t=r[1])):(r=k(B(r,!1,!1),String),e=function(n,t){return!T(r,t)}),St(n,e,t)});function Mt(n,t,r){return f.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function Et(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:Mt(n,n.length-t)}function R(n,t,r){return f.call(n,null==t||r?1:t)}var Bt=l(function(n,t){return t=B(t,!0,!0),I(n,function(n){return!T(t,n)})}),Nt=l(function(n,t){return Bt(n,t)});function kt(n,t,r,e){Q(t)||(e=r,r=t,t=!1),null!=r&&(r=S(r,e));for(var u=[],i=[],o=0,a=d(n);o<a;o++){var f=n[o],c=r?r(f,o,n):f;t&&!r?(o&&i===c||u.push(f),i=c):r?T(i,c)||(i.push(c),u.push(f)):T(u,f)||u.push(f)}return u}var It=l(function(n){return kt(B(n,!0,!0))});function Tt(n){for(var t=n&&dt(n,d).length||0,r=Array(t),e=0;e<t;e++)r[e]=yt(n,e);return r}var Dt=l(Tt);function Rt(n,t){return n._chain?b(t).chain():t}function Vt(r){return N(An(r),function(n){var t=b[n]=r[n];b.prototype[n]=function(){var n=[this._wrapped];return P.apply(n,arguments),Rt(this,t.apply(b,n))}}),b}N(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var r=e[t];b.prototype[t]=function(){var n=this._wrapped;return null!=n&&(r.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0]),Rt(this,n)}}),N(["concat","join","slice"],function(n){var t=e[n];b.prototype[n]=function(){var n=this._wrapped;return Rt(this,n=null!=n?t.apply(n,arguments):n)}});n=Vt({__proto__:null,VERSION:n,restArguments:l,isObject:i,isNull:function(n){return null===n},isUndefined:H,isBoolean:Q,isElement:function(n){return!(!n||1!==n.nodeType)},isString:X,isNumber:Y,isDate:Z,isRegExp:nn,isError:tn,isSymbol:rn,isArrayBuffer:en,isDataView:h,isArray:c,isFunction:p,isArguments:an,isFinite:function(n){return!rn(n)&&C(n)&&!isNaN(parseFloat(n))},isNaN:fn,isTypedArray:vn,isEmpty:function(n){var t;return null==n||("number"==typeof(t=d(n))&&(c(n)||X(n)||an(n))?0===t:0===d(g(n)))},isMatch:dn,isEqual:function(n,t){for(var r=[{a:n,b:t}],e=[],u=[];r.length;){var i=r.pop();if(!0===i)e.pop(),u.pop();else{if((n=i.a)===(t=i.b)){if(0!==n||1/n==1/t)continue;return!1}if(null==n||null==t)return!1;if(n!=n){if(t!=t)continue;return!1}i=typeof n;if("function"!=i&&"object"!=i&&"object"!=typeof t)return!1;n instanceof b&&(n=n._wrapped),t instanceof b&&(t=t._wrapped);i=s.call(n);if(i!==s.call(t))return!1;if(un&&"[object Object]"==i&&h(n)){if(!h(t))return!1;i=bn}switch(i){case"[object RegExp]":case"[object String]":if(""+n==""+t)continue;return!1;case"[object Number]":r.push({a:+n,b:+t});continue;case"[object Date]":case"[object Boolean]":if(+n==+t)continue;return!1;case"[object Symbol]":if(F.valueOf.call(n)===F.valueOf.call(t))continue;return!1;case"[object ArrayBuffer]":case bn:r.push({a:gn(n),b:gn(t)});continue}i="[object Array]"===i;if(!i&&vn(n)){if(y(n)!==y(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)continue;i=!0}if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(p(o)&&o instanceof o&&p(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}for(var f=e.length;f--;)if(e[f]===n){if(u[f]===t)break;return!1}if(!(0<=f))if(e.push(n),u.push(t),r.push(!0),i){if((f=n.length)!==t.length)return!1;for(;f--;)r.push({a:n[f],b:t[f]})}else{var c,l=g(n),f=l.length;if(g(t).length!==f)return!1;for(;f--;){if(!v(t,c=l[f]))return!1;r.push({a:n[c],b:t[c]})}}}}return!0},isMap:u,isWeakMap:t,isSet:U,isWeakSet:a,keys:g,allKeys:m,values:j,pairs:function(n){for(var t=g(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},invert:_n,functions:An,methods:An,extend:Sn,extendOwn:w,assign:w,defaults:On,create:function(n,t){return n=Mn(n),t&&w(n,t),n},clone:function(n){return i(n)?c(n)?n.slice():Sn({},n):n},tap:function(n,t){return t(n),n},get:Nn,has:function(n,t){for(var r=(t=_(t)).length,e=0;e<r;e++){var u=t[e];if(!v(n,u))return!1;n=n[u]}return!!r},mapObject:function(n,t,r){t=S(t,r);for(var e=g(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},identity:kn,constant:cn,noop:Rn,toPath:En,property:In,propertyOf:function(t){return null==t?Rn:function(n){return Nn(t,n)}},matcher:A,matches:A,times:function(n,t,r){var e=Array(Math.max(0,n));t=x(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},random:Vn,now:O,escape:Pn,unescape:r,templateSettings:qn,template:function(i,n,t){n=On({},n=!n&&t?t:n,b.templateSettings);var r,t=RegExp([(n.escape||Un).source,(n.interpolate||Un).source,(n.evaluate||Un).source].join("|")+"|$","g"),o=0,a="__p+='";if(i.replace(t,function(n,t,r,e,u){return a+=i.slice(o,u).replace(zn,Ln),o=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",t=n.variable){if(!$n.test(t))throw new Error("variable is not a bare identifier: "+t)}else a="with(obj||{}){\n"+a+"}\n",t="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(t,"_",a)}catch(n){throw n.source=a,n}function e(n){return r.call(this,n,b)}return e.source="function("+t+"){\n"+a+"}",e},result:function(n,t,r){var e=(t=_(t)).length;if(!e)return p(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=p(i)?i.call(n):i}return n},uniqueId:function(n){var t=++Cn+"";return n?n+t:t},chain:function(n){return(n=b(n))._chain=!0,n},iteratee:Dn,partial:M,bind:Jn,bindAll:Gn,memoize:function(e,u){function i(n){var t=i.cache,r=""+(u?u.apply(this,arguments):n);return v(t,r)||(t[r]=e.apply(this,arguments)),t[r]}return i.cache={},i},delay:Hn,defer:Qn,throttle:function(r,e,u){function i(){l=!1===u.leading?0:O(),o=null,c=r.apply(a,f),o||(a=f=null)}function n(){var n=O(),t=(l||!1!==u.leading||(l=n),e-(n-l));return a=this,f=arguments,t<=0||e<t?(o&&(clearTimeout(o),o=null),l=n,c=r.apply(a,f),o||(a=f=null)):o||!1===u.trailing||(o=setTimeout(i,t)),c}var o,a,f,c,l=0;return u=u||{},n.cancel=function(){clearTimeout(o),l=0,o=a=f=null},n},debounce:function(t,r,e){function u(){var n=O()-o;n<r?i=setTimeout(u,r-n):(i=null,e||(f=t.apply(c,a)),i||(a=c=null))}var i,o,a,f,c,n=l(function(n){return c=this,a=n,o=O(),i||(i=setTimeout(u,r),e&&(f=t.apply(c,a))),f});return n.cancel=function(){clearTimeout(i),i=a=c=null},n},wrap:function(n,t){return M(t,n)},negate:Xn,compose:function(){var r=arguments,e=r.length-1;return function(){for(var n=e,t=r[e].apply(this,arguments);n--;)t=r[n].call(this,t);return t}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:Yn,once:Zn,findKey:nt,findIndex:rt,findLastIndex:et,sortedIndex:ut,indexOf:ot,lastIndexOf:at,find:ft,detect:ft,findWhere:function(n,t){return ft(n,A(t))},each:N,forEach:N,map:k,collect:k,reduce:lt,foldl:lt,inject:lt,reduceRight:st,foldr:st,filter:I,select:I,reject:function(n,t,r){return I(n,Xn(S(t)),r)},every:pt,all:pt,some:ht,any:ht,contains:T,includes:T,include:T,invoke:vt,pluck:yt,where:function(n,t){return I(n,A(t))},max:dt,min:function(n,e,t){var r,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(r=n[a])&&r<i&&(i=r);else e=S(e,t),N(n,function(n,t,r){((u=e(n,t,r))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},shuffle:function(n){return mt(n,1/0)},sample:mt,sortBy:function(n,e,t){var u=0;return e=S(e,t),yt(k(n,function(n,t,r){return{value:n,index:u++,criteria:e(n,t,r)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(e<r||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")},groupBy:jt,indexBy:wt,countBy:_t,partition:At,toArray:bt,size:function(n){return null==n?0:(E(n)?n:g(n)).length},pick:St,omit:Ot,first:Et,head:Et,take:Et,initial:Mt,last:function(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:R(n,Math.max(0,n.length-t))},rest:R,tail:R,drop:R,compact:function(n){return I(n,Boolean)},flatten:function(n,t){return B(n,t,!1)},without:Nt,uniq:kt,unique:kt,union:It,intersection:function(n){for(var t=[],r=arguments.length,e=0,u=d(n);e<u;e++){var i=n[e];if(!T(t,i)){for(var o=1;o<r&&T(arguments[o],i);o++);o===r&&t.push(i)}}return t},difference:Bt,unzip:Tt,transpose:Tt,zip:Dt,object:function(n,t){for(var r={},e=0,u=d(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},range:function(n,t,r){null==t&&(t=n||0,n=0),r=r||(t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(f.call(n,e,e+=t));return r},mixin:Vt,default:b});return n._=n});
;

;/* avia-module-hotspot-js */
// -------------------------------------------------------------------------------------------
// AVIA Image Hotspots
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.aviaHotspots = function( options )
	{
		if( ! this.length )
		{
			return;
		}

		return this.each(function()
		{
			var _self = {};

			_self.container	= $(this);
			_self.hotspots	= _self.container.find('.av-image-hotspot');

				_self.container.on('avia_start_animation', function()
				{
					setTimeout(function()
					{
						_self.hotspots.each(function(i)
						{
							var current = $(this);
							setTimeout(function(){ current.addClass('av-display-hotspot'); },300 * i);
						});
					},400);
				});

		});
	};

}(jQuery));
;

;/* avia-module-magazine-js */
// -------------------------------------------------------------------------------------------
//
// AVIA Magazine function for magazine sorting
//
// -------------------------------------------------------------------------------------------
(function($)
{
	"use strict";

	var animating = false,
		methods = {

			switchMag: function(clicked, _self)
			{
				var current = $(clicked);

				if( current.is('.active_sort') || animating )
				{
					return;
				}

				var filter = current.data('filter'),
					oldContainer = _self.container.filter(':visible'),
					newContainer = _self.container.filter( '.' + filter );

				//switch Class
				animating = true;
				_self.sort_buttons.removeClass('active_sort');
				current.addClass('active_sort');

				//apply fixed heiht for transition
				_self.magazine.height(_self.magazine.outerHeight());

				//switch items
				oldContainer.avia_animate({opacity:0}, 200, function()
				{
					oldContainer.css({display:'none'});
					newContainer.css({opacity:0, display:'block'}).avia_animate({opacity:1}, 150, function()
					{
						_self.magazine.avia_animate({height: (newContainer.outerHeight() + _self.sort_bar.outerHeight())}, 150, function()
						{
							_self.magazine.height('auto');
							animating = false;
						});
					});
				});
			}
	};


	$.fn.aviaMagazine = function( options )
	{
		if( ! this.length )
		{
			return;
		}

		return this.each(function()
		{
			var _self = {};

			_self.magazine = $(this),
			_self.sort_buttons = _self.magazine.find('.av-magazine-sort a');
			_self.container = _self.magazine.find('.av-magazine-group');
			_self.sort_bar = _self.magazine.find('.av-magazine-top-bar');

			//	Hide sort buttons that link to an empty container
			_self.sort_buttons.each( function (i)
			{
				var current = $( this ),
					filter = current.data('filter'),
					entry = _self.container.filter( '.' + filter );

				if( entry.length == 0 || entry.html().trim() == '' )
				{
					current.hide();
					current.prev('span.text-sep').hide();
				}
			});

			_self.sort_buttons.on( 'click', function(e)
			{
				e.preventDefault();
				methods.switchMag(this, _self);
			});
		});
	};

}(jQuery));


;

;/* avia-module-isotope-js */
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
    
    
/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope-layout/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
;

;/* avia-module-masonry-js */
// -------------------------------------------------------------------------------------------
// Masonry
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.avia_masonry = function(options)
	{
		//return if we didnt find anything
		if( ! this.length )
		{
			return this;
		}

		var the_body = $('body'),
			the_win = $(window),
			isMobile = $.avia_utilities.isMobile,
			isTouchDevice = $.avia_utilities.isTouchDevice,
			mobile_no_animation = the_body.hasClass( 'avia-mobile-no-animations' ),
			loading = false,
			methods = {

				masonry_filter: function()
				{
					var current		= $(this),
						linktext	= current.html(),
						selector	= current.data('filter'),
						masonry 	= current.parents('.av-masonry').eq( 0 ),
						container 	= masonry.find('.av-masonry-container').eq( 0 ),
						links		= masonry.find('.av-masonry-sort a'),
						activeCat	= masonry.find('.av-current-sort-title');

					links.removeClass('active_sort');
					current.addClass('active_sort');
					container.attr('id', 'masonry_id_' + selector);

					if( activeCat.length )
					{
						activeCat.html(linktext);
					}

					methods.applyMasonry( container, selector, function()
					{
						container.css({overflow:'visible'});
					});

					setTimeout( function() { the_win.trigger('debouncedresize'); }, 500 );

					return false;
				},

				applyMasonry: function(container, selector, callback)
				{
					var filters = selector ? {filter: '.'+selector} : {};

					filters['layoutMode'] = 'packery';
					filters['packery'] = {gutter:0};
					filters['percentPosition'] = true;
					filters['itemSelector'] = "a.isotope-item, div.isotope-item";
					filters['originLeft'] = $('body').hasClass('rtl') ? false : true;

					container.isotope( filters, function()
					{
						the_win.trigger('av-height-change');
					});

					if( typeof callback === 'function' )
					{
						setTimeout( callback, 0 );
					}
				},

				show_bricks: function( bricks, callback )
				{
					var browserPrefix = $.avia_utilities.supports('transition'),
						multiplier = isMobile && mobile_no_animation ? 0 : 100;

					bricks.each( function(i)
					{
						var currentLink = $( this );
						var reveal = currentLink.find( '.avia-curtain-reveal-overlay' );

						if( reveal.length > 0 )
						{
							//	reveal is used on all devices
							multiplier = 500;

							//	- in sortable isotop reveal shows content before animation ( ?? )
							//	- we also remove reveal as only needed once to avoid multiple animation when shown again via filter
							reveal.on( 'animationstart', function( e )
							{
								currentLink.css( { visibility: 'visible' } );
							});

							reveal.on( 'animationend', function( e )
							{
								$( this ).remove();
							});
						}

						setTimeout( function()
						{
							if( browserPrefix === false )
							{
								currentLink.css( {visibility:"visible", opacity:0} ).animate( {opacity:1}, 1500 );
							}
							else
							{
								currentLink.addClass( 'av-masonry-item-loaded' );

								//	activate reveal animation - element is already in viewport
								reveal.addClass( 'avia_start_delayed_animation' );
							}

							if( i == bricks.length - 1 && typeof callback == 'function' )
							{
								callback.call();
								the_win.trigger('av-height-change');
							}

						}, ( multiplier * i ) );
					});
				},

				loadMore: function(e)
				{
					e.preventDefault();

					if( loading )
					{
						return false;
					}

					loading = true;

					var current = $(this),
						data = current.data(),
						masonry = current.parents('.av-masonry').eq( 0 ),
						post_id = masonry.data( 'post_id' ),
						container = masonry.find('.av-masonry-container'),
						items = masonry.find('.av-masonry-entry'),
						loader = $.avia_utilities.loading(),
						finished = function(){ loading = false; loader.hide(); the_body.trigger('av_resize_finished'); };

					if( 'undefined' != typeof post_id )
					{
						data.post_id = post_id;
					}

					//calculate a new offset
					if( ! data.offset )
					{
						data.offset = 0;
					}

					data.offset += data.items;
					data.action = 'avia_ajax_masonry_more';
					data.loaded = []; //prevents duplicate entries from beeing loaded when randomized is active

					items.each( function()
					{
						var item_id = $(this).data('av-masonry-item');
						if( item_id )
						{
							data.loaded.push( item_id );
						}
					});

					$.ajax({
						url: avia_framework_globals.ajaxurl,
						type: "POST",
						data: data,
						beforeSend: function()
						{
							loader.show();
						},
						success: function(response)
						{
							if( response.indexOf("{av-masonry-loaded}") !== -1 )
							{
								//fetch the response. if any php warnings were displayed before rendering of the items the are removed by the string split
								var response  = response.split('{av-masonry-loaded}'),
									new_items = $(response.pop()).filter('.isotope-item');

								//check if we got more items than we need. if not we have reached the end of items
								if( new_items.length > data.items )
								{
									new_items = new_items.not( new_items.last() );
								}
								else
								{
									current.addClass('av-masonry-no-more-items');
								}

								//	caused by ajax call - remove to prevent immediate animation
								new_items.find( '.avia-animate-admin-preview' ).removeClass( 'avia-animate-admin-preview' );

								//	hide content to avoid flicker in masonry entries
								if( new_items.find( '.avia-curtain-reveal-overlay' ).length > 0 )
								{
									new_items.css( { visibility: 'hidden' } );
								}

								var load_container = $('<div class="loadcontainer"></div>').append(new_items);

								$.avia_utilities.preload(
								{
									container: load_container,
									single_callback: function()
									{
										var links = masonry.find('.av-masonry-sort a'),
											filter_container = masonry.find('.av-sort-by-term'),
											allowed_filters = filter_container.data("av-allowed-sort");

										filter_container.hide();

										loader.hide();
										container.isotope( 'insert', new_items );
										$.avia_utilities.avia_ajax_call( masonry );

										setTimeout( function(){ methods.show_bricks( new_items, finished ); }, 150 );
										setTimeout( function(){ the_win.trigger('av-height-change'); }, 550 );

										if( links )
										{
											$( links ).each( function( filterlinkindex )
											{
												var filterlink = $(this),
												sort = filterlink.data('filter');

												if( new_items )
												{
													$( new_items ).each( function( itemindex )
													{
														var item = $(this);

														if( item.hasClass( sort ) && allowed_filters.indexOf( sort ) !== -1 )
														{
															var term_count = filterlink.find('.avia-term-count').text();
															filterlink.find('.avia-term-count').text(' ' + ( parseInt( term_count ) + 1 ) + ' ' );

															if( filterlink.hasClass('avia_hide_sort') )
															{
																filterlink.removeClass('avia_hide_sort').addClass('avia_show_sort');
																masonry.find('.av-masonry-sort .' + sort + '_sep').removeClass('avia_hide_sort').addClass('avia_show_sort');
																masonry.find('.av-masonry-sort .av-sort-by-term').removeClass('hidden');
															}
														}
													});
												}
											});
										}

										filter_container.fadeIn();
									}
								});
							}
							else
							{
								finished();
							}
						},
						error: finished,
						complete: function()
						{
							setTimeout(function() { the_win.trigger('debouncedresize'); }, 500);
						}
					});
				}
			};

		return this.each( function()
		{
			var masonry	= $(this),
				container = masonry.find('.av-masonry-container'),
				bricks = masonry.find('.isotope-item'),
				filter = masonry.find('.av-masonry-sort').css({visibility:"visible", opacity:0}).on('click', 'a', methods.masonry_filter),
				load_more = masonry.find('.av-masonry-load-more').css({visibility:"visible", opacity:0});

			//	hide content to avoid flicker in masonry entries
			if( bricks.find( '.avia-curtain-reveal-overlay' ).length > 0 )
			{
				bricks.css( { visibility: 'hidden' } );
			}

			$.avia_utilities.preload(
			{
				container: container,
				single_callback: function()
				{
					var start_animation = function()
					{
						filter.animate({opacity:1}, 400);

						//fix for non aligned elements because of scrollbar
						if( container.outerHeight() + container.offset().top + $('#footer').outerHeight() > $(window).height() )
						{
							$('html').css({'overflow-y':'scroll'});
						}

						methods.applyMasonry( container, false, function()
						{
							masonry.addClass('avia_sortable_active');
							container.removeClass('av-js-disabled');
						});

						methods.show_bricks( bricks, function()
						{
							load_more.css( {opacity:1} ).on( 'click', methods.loadMore );
						});

						//container.isotope( 'reLayout' );
					};

					if( isMobile && mobile_no_animation )
					{
						//	start immediatly
						start_animation();
					}
					else
					{
						masonry.waypoint( start_animation, { offset: '80%'} );
					}

					// update columnWidth on window resize
					$(window).on( 'debouncedresize', function()
					{
						methods.applyMasonry( container, false, function()
						{
							masonry.addClass('avia_sortable_active');
						});
					});
				}
			});
		});
	};

}(jQuery));

;

;/* avia-module-menu-js */
(function($)
{
	"use strict";
	$.avia_utilities = $.avia_utilities || {};

	$( function()
    {
		 //activates the sticky submenu
		$.avia_utilities = $.avia_utilities || {};

        if( $.avia_utilities.avia_sticky_submenu )
		{
			$.avia_utilities.avia_sticky_submenu();
		}
    });


	$.avia_utilities.avia_sticky_submenu = function()
	{
		var win 		= $(window),
			html 		= $('html').first(),
			header  	= $('.html_header_top.html_header_sticky #header'),
			html_margin = parseInt( $('html').first().css('margin-top'), 10),
			setWitdth	= $('.html_header_sidebar #main, .boxed #main'),
			menus		= $('.av-submenu-container'),
			bordermod	= html.is('.html_minimal_header') ? 0 : 1,
			fixed_frame	= $('.av-frame-top').height(),
			burger_menu	= $('.av-burger-menu-main'),
			calc_margin	= function()
			{
				html_margin = parseInt( html.css('margin-top'), 10);
				if(!$('.mobile_menu_toggle:visible').length)
				{
					$('.av-open-submenu').removeClass('av-open-submenu');
				}

				menus.filter('.av-sticky-submenu').each(function()
				{
					$(this).next('.sticky_placeholder').height($(this).height());
				});

			},

			calc_values	= function()
			{
				var content_width = setWitdth.width();
				html_margin = parseInt( html.css('margin-top'), 10);
				menus.width(content_width);
			},

			check = function( placeholder, no_timeout)
			{
				var menu_pos	= this.offset().top,
					top_pos 	= placeholder.offset().top,
					scrolled	= win.scrollTop(),
					modifier 	= html_margin,
					fixed		= false;

					/**
					 * If we have burger menu active we ignore sticking submenus
					 */
					if( burger_menu.is(":visible") )
					{
						this.css({top: 'auto', position: 'absolute'}); fixed = false;
						return;
					}

					if(header.length)
					{
						modifier += header.outerHeight() + parseInt( header.css('margin-top'), 10);
					}

					if(fixed_frame)
					{
						modifier += fixed_frame;
					}

					if(scrolled + modifier > top_pos)
					{
						if(!fixed)
						{
							this.css({top: modifier - bordermod, position: 'fixed'}); fixed = true;
						}
					}
					else
					{
						this.css({top: 'auto', position: 'absolute'}); fixed = false;
					}

			},
			toggle = function(e)
			{
				e.preventDefault();

				var clicked = $(this),
					menu 	= clicked.siblings('.av-subnav-menu');

					if(menu.hasClass('av-open-submenu'))
					{
						menu.removeClass('av-open-submenu');
					}
					else
					{
						menu.addClass('av-open-submenu');
					}
			};

		win.on("debouncedresize av-height-change",  calc_margin ); calc_margin();

		if(setWitdth.length)
		{
			win.on("debouncedresize av-height-change",  calc_values );
			calc_values();
		}


		menus.each( function()
		{
			var menu = $(this),
				sticky = menu.filter('.av-sticky-submenu'),
				placeholder = menu.next('.sticky_placeholder'),
				mobile_button = menu.find('.mobile_menu_toggle');

			if( sticky.length )
			{
				win.on( 'scroll debouncedresize',  function()
				{
					window.requestAnimationFrame( check.bind( sticky, placeholder ) );
				});
			}

			if( mobile_button.length )
			{
			   mobile_button.on( 'click',  toggle );
			}
        });


		html.on('click', '.av-submenu-hidden .av-open-submenu li a', function()
		{
			var current = $(this);

			var list_item = current.siblings('ul, .avia_mega_div');
			if(list_item.length)
			{
				if(list_item.hasClass('av-visible-sublist'))
				{
				    list_item.removeClass('av-visible-sublist');
				}
				else
				{
				    list_item.addClass('av-visible-sublist');
				}
				return false;
			}
		});

		$('.avia_mobile').on('click', '.av-menu-mobile-disabled li a', function()
		{
			var current = $(this);
			var list_item = current.siblings('ul');
			if(list_item.length)
			{
				if(list_item.hasClass('av-visible-mobile-sublist'))
				{

				}
				else
				{
					$('.av-visible-mobile-sublist').removeClass('av-visible-mobile-sublist');
				    list_item.addClass('av-visible-mobile-sublist');
				    return false;
				}

			}
		});



	};


}(jQuery));

;

;/* avia-module-notification-js */
// -------------------------------------------------------------------------------------------
// Message Box
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.avia_sc_messagebox = function (options) {

		"use strict";

		return this.each(function ()
		{
			var container = $(this),
				close_btn = container.find('.av_message_close'),
				mbox_ID = container.attr('id'),

				aviaSetCookie = function(CookieName,CookieValue,CookieDays)
				{
					var expires = "";
					if( CookieDays )
					{
						var date = new Date();
						date.setTime( date.getTime() + ( CookieDays*24*60*60*1000 ) );
						expires = "; expires=" + date.toGMTString();
					}

					document.cookie = CookieName + "=" + CookieValue + expires + "; path=/; samesite=strict";
				},

				aviaGetCookie = function(CookieName)
				{
					var docCookiesStr = CookieName + "=";
					var docCookiesArr = document.cookie.split(';');

					for( var i=0; i < docCookiesArr.length; i++ )
					{
						var thisCookie = docCookiesArr[i];

						while( thisCookie.charAt(0) == ' ' )
						{
							thisCookie = thisCookie.substring( 1,thisCookie.length );
						}

						if( thisCookie.indexOf( docCookiesStr ) == 0 )
						{
							var cookieContents = container.attr('data-contents');
							var savedContents = thisCookie.substring( docCookiesStr.length, thisCookie.length );
							if( savedContents == cookieContents )
							{
								return savedContents;
							}
						}
					}
					return null;
				};

			// check if cookie is set and display message box
			if ( ! aviaGetCookie( mbox_ID ) )
			{
				container.removeClass('messagebox-hidden');
			}

			// set cookie when button clicked
			close_btn.on( 'click', function()
			{
				var cookieContents = container.attr('data-contents');
				var cookieLifetime = "";

				// set session cookie
				if ( container.hasClass('messagebox-session_cookie') )
				{
					cookieLifetime = "";
				}
				// set cookie with defined lifetime
				else if ( container.hasClass('messagebox-custom_cookie') )
				{
					cookieLifetime = parseInt( container.attr('data-cookielifetime') );
				}

				aviaSetCookie( mbox_ID, cookieContents, cookieLifetime );
				container.addClass('messagebox-hidden');
			});

		});

	};

	// activate message box
	$('.avia_message_box').avia_sc_messagebox();


}(jQuery));


;

;/* avia-module-numbers-js */
// -------------------------------------------------------------------------------------------
// Big Number animation shortcode javascript
// -------------------------------------------------------------------------------------------

(function($)
{
	// options.simple_up = dont prepend leading zeros, options.instant_start = trigger counting instantly, options.start_timer = delay when to start counting
	$.fn.avia_sc_animated_number = function(options)
	{
		if(!this.length) return;
		if(this.is('.avia_sc_animated_number_active')) return;

		this.addClass('avia_sc_animated_number_active');

		var simple_upcount 	= (options && options.simple_up) ? true : false,
			start_timer 	= (options && options.start_timer) ? options.start_timer : 300,

			format_number = function( number, number_format, final_number )
			{
				var prepend = '',
					addZeros = final_number.toString().length - number.toString().length;

				//if the number has less digits than the final number some zeros where omitted. add them to the front
				for(var i = addZeros; i > 0; i--)
				{
					prepend += '0';
				}

				number = ( simple_upcount ) ? number.toString() : prepend + number.toString();

				if( '' == number_format )
				{
					return number;
				}

				return number.split( /(?=(?:...)*$)/ ).join( number_format );
			},

			start_count = function(element, countTo, increment, current, fakeCountTo, number_format)
			{
				//calculate the new number
				var newCount = current + increment,
					final = '';

				//if the number is bigger than our final number set the number and finish
				if(newCount >= fakeCountTo)
				{
					final = format_number( countTo, number_format, countTo );
					element.text( final ); //exit
				}
				else
				{
					final = format_number( newCount, number_format, countTo );
					element.text(final);

					window.requestAnimationFrame(function(){ start_count(element, countTo, increment, newCount, fakeCountTo, number_format); });
				}
			};

		return this.each(function()
		{
			var number_container = $(this),
				elements = number_container.find('.__av-single-number'),
				countTimer = number_container.data('timer') || 3000;

			//prepare elements
			elements.each(function(i)
			{
				var element = $(this),
					text = element.text();

				if(window.addEventListener) element.text( text.replace(/./g, "0")); /*https://github.com/AviaThemes/wp-themes/issues/812*/
			});

			//trigger number animation
			number_container.addClass('number_prepared').on('avia_start_animation', function()
			{
				if(number_container.is('.avia_animation_done')) return;
				number_container.addClass('avia_animation_done');

				elements.each(function(i)
				{
					var element = $(this),
						countTo = element.data('number'),
						fakeCountTo = countTo,
						current = parseInt(element.text(),10),
						zeroOnly = /^0+$/.test(countTo),
						increment = 0,
						number_format = '';

					if( 'undefined' != typeof element.data('start_from') )
					{
						current = element.data('start_from');
					}

					if( 'undefined' != typeof element.data('number_format') )
					{
						number_format = element.data('number_format');
					}

					//fallback for decimals like 00 or 000
					if( zeroOnly && countTo !== 0 )
					{
						fakeCountTo = countTo.replace( /0/g, '9' );
					}

					increment = Math.round( fakeCountTo * 32 / countTimer);
					if(increment == 0 || increment % 10 == 0) increment += 1;

					setTimeout( function(){ start_count(element, countTo, increment, current, fakeCountTo, number_format);}, start_timer);
				});
			});

			if(options && options.instant_start == true)
			{
				number_container.trigger('avia_start_animation');
			}


		});
	};
})(jQuery);


;

;/* avia-module-portfolio-js */
// -------------------------------------------------------------------------------------------
// Avia AJAX Portfolio
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";
	$.avia_utilities = $.avia_utilities || {};


	// -------------------------------------------------------------------------------------------
	//Portfolio sorting
	// -------------------------------------------------------------------------------------------

    $.fn.avia_iso_sort = function(options)
	{
		return this.each(function()
		{
			var the_body		= $('body'),
				container		= $(this),
				portfolio_id	= container.data('portfolio-id'),
				parentContainer	= container.closest('.av-portfolio-grid-sorting-container, .entry-content-wrapper, .avia-fullwidth-portfolio'),
				filter			= parentContainer.find('.sort_width_container[data-portfolio-id="' + portfolio_id + '"]').find('#js_sort_items').css({visibility:"visible", opacity:0}),
				links			= filter.find('a'),
				imgParent		= container.find('.grid-image'),
				isoActive		= false,
				items			= $('.post-entry', container),
				is_originLeft	= the_body.hasClass('rtl') ? false : true;

			function applyIso()
			{
				container.addClass('isotope_activated').isotope({
					layoutMode : 'fitRows', itemSelector : '.flex_column', originLeft: is_originLeft
				});

				container.isotope( 'on', 'layoutComplete', function()
				{
					container.css({overflow:'visible'});
					the_body.trigger('av_resize_finished');
				});

				isoActive = true;
				setTimeout(function(){ parentContainer.addClass('avia_sortable_active'); }, 0);
			};

			links.on('click',function()
			{
				var current		= $(this),
			  		selector	= current.data('filter'),
			  		linktext	= current.html(),
			  		activeCat	= parentContainer.find('.av-current-sort-title');

			  		if(activeCat.length) activeCat.html(linktext);

					links.removeClass('active_sort');
					current.addClass('active_sort');
					container.attr('id', 'grid_id_'+selector);

					parentContainer.find('.open_container .ajax_controlls .avia_close').trigger('click');
					//container.css({overflow:'hidden'})
					container.isotope({ layoutMode : 'fitRows', itemSelector : '.flex_column' , filter: '.'+selector, originLeft: is_originLeft });

					return false;
			});

			// update columnWidth on window resize
			$(window).on( 'debouncedresize', function()
			{
			  	applyIso();
			});

			$.avia_utilities.preload({container: container, single_callback:  function()
				{
					filter.animate({opacity:1}, 400); applyIso();

					//call a second time to for the initial resizing
					setTimeout(function(){ applyIso(); });

					imgParent.css({height:'auto'}).each(function(i)
					{
						var currentLink = $(this);

						setTimeout(function()
						{
							currentLink.animate({opacity:1},1500);
						}, (100 * i));
					});
				}
			});

		});
	};





	$.fn.avia_portfolio_preview = function(passed_options)
	{
		var win  = $(window),
		the_body = $('body'),
		isMobile = $.avia_utilities.isMobile,
		defaults =
		{
			open_in:	'.portfolio-details-inner',
			easing:		'easeOutQuint',
			timing:		800,
			transition:	'slide' // 'fade' or 'slide'
		},

		options = $.extend({}, defaults, passed_options);

		return this.each(function()
		{
			var container			= $(this),
				portfolio_id		= container.data('portfolio-id'),
				target_wrap			= $('.portfolio_preview_container[data-portfolio-id="' + portfolio_id + '"]'),
				target_container	= target_wrap.find(options.open_in),
				items				= container.find('.grid-entry'),
				content_retrieved	= {},
				is_open				= false,
				animating			= false,
				index_open			= false,
				ajax_call			= false,
				methods,
				controls,
				loader				= $.avia_utilities.loading();

			methods =
			{
				load_item: function(e)
				{
					e.preventDefault();

					var link			= $(this),
						post_container	= link.parents('.post-entry').eq( 0 ),
						post_id			= "ID_" + post_container.data('ajax-id'),
						clickedIndex	= items.index(post_container);

					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open || animating == true)
					{
						return false;
					}

					animating = true;

					container.find('.active_portfolio_item').removeClass('active_portfolio_item');
					post_container.addClass('active_portfolio_item');
					loader.show();

					methods.ajax_get_contents(post_id, clickedIndex);
				},

				scroll_top: function()
				{
					setTimeout(function()
					{
						var target_offset = target_wrap.offset().top - 175,
							window_offset = win.scrollTop();

						if(window_offset > target_offset || target_offset - window_offset > 100  )
						{
							$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target_offset }, options.timing, options.easing);
						}
					},10);
				},

				attach_item: function(post_id)
				{
					content_retrieved[post_id] = $(content_retrieved[post_id]).appendTo(target_container);
					ajax_call = true;
				},

				remove_video: function()
				{
					var del = target_wrap.find('iframe, .avia-video').parents('.ajax_slide:not(.open_slide)');

						if(del.length > 0)
						{
							del.remove();
							content_retrieved["ID_" + del.data('slideId')] = undefined;
						}
				},

				show_item: function(post_id, clickedIndex)
				{

					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open)
					{
						return false;
					}
					animating = true;


					loader.hide();

					if(false === is_open)
					{
						target_wrap.addClass('open_container');
						content_retrieved[post_id].addClass('open_slide');

						methods.scroll_top();

						target_wrap.css({display:'none'}).slideDown(options.timing, options.easing, function()
						{
							if(ajax_call)
							{
								$.avia_utilities.activate_shortcode_scripts(content_retrieved[post_id]);
								$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
								the_body.trigger('av_resize_finished');
								ajax_call = false;
							}

							methods.remove_video();
							the_body.trigger('av_resize_finished');
						});

							index_open	= clickedIndex;
							is_open		= post_id;
							animating	= false;



					}
					else
					{
						methods.scroll_top();

						var initCSS = { zIndex:3 },
							easing	= options.easing;

						if(index_open > clickedIndex) { initCSS.left = '-110%'; }
						if(options.transition === 'fade'){ initCSS.left = '0%'; initCSS.opacity = 0; easing = 'easeOutQuad'; }

						//fixate height for container during animation
						target_container.height(target_container.height()); //outerHeight = border problems?

						content_retrieved[post_id].css(initCSS).avia_animate({'left':"0%", opacity:1}, options.timing, easing);
						content_retrieved[is_open].avia_animate({opacity:0}, options.timing, easing, function()
						{
							content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
							content_retrieved[post_id].addClass('open_slide');
																										  //+ 2 fixes border problem (slides move up and down 2 px on transition)
							target_container.avia_animate({height: content_retrieved[post_id].outerHeight() + 2}, options.timing/2, options.easing, function()
							{
								target_container.attr({'style':""});
								is_open		= post_id;
								index_open	= clickedIndex;
								animating	= false;

								methods.remove_video();
								if(ajax_call)
								{
									the_body.trigger('av_resize_finished');
									$.avia_utilities.activate_shortcode_scripts(content_retrieved[post_id]);
									$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
									ajax_call = false;
								}

							});

						});
					}
				},

				ajax_get_contents: function(post_id, clickedIndex)
				{
					if(content_retrieved[post_id] !== undefined)
					{
						methods.show_item(post_id, clickedIndex);
						return;
					}

					/**
					 * Possible fix for complex pages that throw a js error when user clicks item and not fully loaded
					 */
					var template = $('#avia-tmpl-portfolio-preview-' + post_id.replace(/ID_/,""));
					if( template.length == 0 )
					{
						setTimeout( function(){ methods.ajax_get_contents( post_id, clickedIndex); return; }, 500);
					}

					content_retrieved[post_id] = template.html();

					//this line is necessary to prevent w3 total cache from messing up the portfolio if inline js is compressed
					content_retrieved[post_id] = content_retrieved[post_id].replace('/*<![CDATA[*/','').replace('*]]>','');

					methods.attach_item(post_id);

					$.avia_utilities.preload({container: content_retrieved[post_id] , single_callback:  function(){ methods.show_item(post_id, clickedIndex); }});
				},

				add_controls: function()
				{
					controls = target_wrap.find('.ajax_controlls');

					target_wrap.avia_keyboard_controls({27:'.avia_close', 37:'.ajax_previous', 39:'.ajax_next'});
					//target_wrap.avia_swipe_trigger({prev:'.ajax_previous', next:'.ajax_next'});

					items.each(function(){

						var current = $(this), overlay;

						current.addClass('no_combo').on('click', function(event)
						{
							overlay = current.find('.slideshow_overlay');

							if(overlay.length)
							{
								event.stopPropagation();
								methods.load_item.apply(current.find('a').eq( 0 ));
								return false;
							}
						});


					});
				},

				control_click: function()
				{
					var showItem,
						activeID = container.find('.active_portfolio_item').data('ajax-id'),
						active   = container.find('.post-entry-'+activeID);

					switch(this.hash)
					{
						case '#next':

							showItem = active.nextAll('.post-entry:visible').eq( 0 ).find('a').eq( 0 );
							if(!showItem.length) { showItem = $('.post-entry:visible', container).eq( 0 ).find('a').eq( 0 ); }
							showItem.trigger('click');

						break;
						case '#prev':

							showItem = active.prevAll('.post-entry:visible').eq( 0 ).find('a').eq( 0 );
							if(!showItem.length) { showItem = $('.post-entry:visible', container).last().find('a').eq( 0 ); }
							showItem.trigger('click');

						break;
						case '#close':

							animating = true;

							target_wrap.slideUp( options.timing, options.easing, function()
							{
								container.find('.active_portfolio_item').removeClass('active_portfolio_item');
								content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
								target_wrap.removeClass('open_container');
								animating = is_open = index_open = false;
								methods.remove_video();
								the_body.trigger('av_resize_finished');
							});

						break;
					}
					return false;
				},

				resize_reset: function()
				{
					if(is_open === false)
					{
						target_container.html('');
						content_retrieved = [];
					}
				}
			};

			methods.add_controls();

			container.on("click", "a", methods.load_item);
			controls.on("click", "a", methods.control_click);

			//	removed in 4.8 as jQuery.support was deprecated with 2.0 and returns "undefined"/false
//			if(jQuery.support.leadingWhitespace) { win.on('debouncedresize', methods.resize_reset); }
			win.on('debouncedresize', methods.resize_reset);

		});
	};
}(jQuery));



;

;/* avia-module-progress-bar-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// Progress bar shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_progressbar = function(options)
	{
		return this.each(function()
		{
			var container = $(this), elements = container.find('.avia-progress-bar');

			//trigger displaying of progress bar
			container.on('avia_start_animation', function()
			{
				elements.each(function(i)
				{
					var element = $(this);

					setTimeout(function()
					{
						element.find('.progress').addClass('avia_start_animation');
						element.find('.progressbar-percent').avia_sc_animated_number(
						{
							instant_start:true, simple_up:true, start_timer: 10
						});

					}, (i * 250));
				});
			});
		});
	};

}(jQuery));

;

;/* avia-module-slideshow-accordion-js */
(function($)
{
	"use strict";
// -------------------------------------------------------------------------------------------
// Aviaccordion Slideshow
//
// accordion slider script
// -------------------------------------------------------------------------------------------

	$.AviaccordionSlider = function(options, slider)
	{
	    this.$slider  	= $( slider );
	    this.$inner	  	= this.$slider.find('.aviaccordion-inner');
	    this.$slides	= this.$inner.find('.aviaccordion-slide');
	    this.$images	= this.$inner.find('.aviaccordion-image');
	    this.$last		= this.$slides.last();
	    this.$titles  	= this.$slider.find('.aviaccordion-preview');
	    this.$titlePos  = this.$slider.find('.aviaccordion-preview-title-pos');
	    this.$titleWrap = this.$slider.find('.aviaccordion-preview-title-wrap');
	    this.$win	  	= $( window );

	    if( $.avia_utilities.supported.transition === undefined )
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}

		this.options		= {};
		this.browserPrefix 	= $.avia_utilities.supported.transition;
	    this.cssActive 		= this.browserPrefix !== false ? true : false;
	    this.transform3d	= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
		this.isMobile 		= $.avia_utilities.isMobile;
		this.isTouchDevice	= $.avia_utilities.isTouchDevice;
		this.property		= this.browserPrefix + 'transform';
		this.count			= this.$slides.length;
		this.open			= false;
		this.autoplay		= false;			//	 id of setInterval
		this.increaseTitle  = this.$slider.is(".aviaccordion-title-on-hover");
		// this.cssActive    = false; //testing no css3 browser

	    this._init( options );
	};

	$.AviaccordionSlider.defaults = {

		//	interval between autorotation switches
		interval: 5,

		//	autorotation active or not
		autoplay: true,

		//	'endless' | 'once'
		loop_autoplay: 'endless'
	};

  	$.AviaccordionSlider.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;

			 // set slider options
			this.options = this._setOptions( options );

			$.avia_utilities.preload({
						container: this.$slider,
						single_callback: function(){ _self._kickOff(); }
					});
    	},

		_setOptions: function( options )
		{
			var jsonOptions = this.$slider.data( 'slideshow-options' );

			//	since 5.0 - render options via json to clean up html - $.data returns parsed object
			if( 'object' == typeof jsonOptions )
			{
				var newOptions = $.extend( {}, $.AviaccordionSlider.defaults, options, jsonOptions );
				return newOptions;
			}

			var newOptions = $.extend( {}, $.AviaccordionSlider.defaults, options, this.$slider.data() );
			return newOptions;
		},

    	_kickOff: function()
    	{
    		var _self = this;

    		_self._calcMovement();
    		_self._bindEvents();
    		_self._showImages();
    		_self._autoplay();
    	},

    	_autoplay: function()
    	{
    		var _self = this;

    		if( _self.options.autoplay )
    		{
    			_self.autoplay = setInterval( function()
    			{
    				_self.open = _self.open === false ? 0 : _self.open + 1;

    				if( _self.open >= _self.count )
					{
						if( _self.options.loop_autoplay == 'once' )
						{
							clearInterval( _self.autoplay );
							_self.options.autoplay = false;
							_self.autoplay = false;
							return;
						}

						_self.open = 0;
					}

    				_self._move( {}, _self.open );

    			}, _self.options.interval * 1000 );
    		}
    	},

    	_showImages: function()
    	{
    		var _self = this,
				counter = 0,
				delay = 300,
				title_delay = this.count * delay;

    		if(this.cssActive)
    		{
    			setTimeout(function(){ _self.$slider.addClass('av-animation-active'); }, 10);
    		}

    		this.$images.each( function(i)
    		{
    			var current = $(this),
					timer = delay * (i + 1);

    			setTimeout(function()
    			{
    				current.avia_animate({opacity:1}, 400, function()
    				{
    					current.css($.avia_utilities.supported.transition + "transform", "none");
    				});
    			}, timer );
    		});

    		if(_self.increaseTitle)
			{
				title_delay = 0;
			}

    		this.$titlePos.each(function(i)
    		{
    			var current = $(this),
					new_timer = title_delay + 100 * (i + 1);

    			setTimeout(function()
    			{
    				current.avia_animate({opacity:1}, 200, function()
    				{
    					current.css($.avia_utilities.supported.transition + "transform", "none");
    				});
    			}, new_timer );
    		});
    	},

    	_bindEvents: function()
    	{
    		var trigger = this.isMobile ? "click" : "mouseenter";

    		this.$slider.on( trigger, '.aviaccordion-slide', this._move.bind( this ) );
    		this.$slider.on( 'mouseleave','.aviaccordion-inner', this._move.bind( this ) );
    		this.$win.on( 'debouncedresize', this._calcMovement.bind( this ) );
    		this.$slider.on( 'av-prev av-next', this._moveTo.bind( this ) );

    		if( this.isMobile || this.isTouchDevice )
    		{
    			this.$slider.avia_swipe_trigger({next: this.$slider, prev: this.$slider, event:{prev: 'av-prev', next: 'av-next'}});
    		}
    	},

    	_titleHeight: function()
    	{
    		var th = 0;

    		this.$titleWrap.css({'height':'auto'}).each( function()
    		{
    			var new_h = $(this).outerHeight();

				if( new_h > th)
				{
					th = new_h;
				}
    		}).css( {'height': th + 2} );
    	},

    	_calcMovement: function(event, allow_repeat)
    	{
    		var _self			= this,
    			containerWidth	= this.$slider.width(),
    			defaultPos		= this.$last.data('av-left'),
    			imgWidth		= this.$images.last().width() || containerWidth,
    			imgWidthPercent = Math.floor((100 / containerWidth) * imgWidth),
    			allImageWidth	= imgWidthPercent * _self.count,
    			modifier		= 3, // 10 - _self.count,
    			tempMinLeft		= 100 - imgWidthPercent,
    			minLeft 		= tempMinLeft > defaultPos / modifier ? tempMinLeft : 0,
    			oneLeft			= minLeft / (_self.count -1 ),
    			titleWidth		= imgWidth;



    		if(allImageWidth < 110 && allow_repeat !== false)
    		{
    			//set height if necessary
    			var slideHeight = this.$slider.height(),
    				maxHeight 	= (slideHeight / allImageWidth) * 110 ;

    			this.$slider.css({'max-height': maxHeight});
    			_self._calcMovement(event, false);

    			return;
    		}

    		//backup so the minimized slides dont get too small
    		if(oneLeft < 2)
			{
				minLeft = 0;
			}

			this.$slides.each(function(i)
			{
				var current = $(this),
					newLeft = 0,
					newRight = 0,
					defaultLeft = current.data('av-left');

				if( minLeft !== 0)
				{
					newLeft  = oneLeft * i;
					newRight = imgWidthPercent + newLeft - oneLeft;
				}
				else
				{
					newLeft  = defaultLeft / Math.abs(modifier);
					newRight = 100 - ((newLeft / i) * (_self.count - i));
				}

				if(i == 1 && _self.increaseTitle)
				{
					titleWidth = newRight + 1;
				}

				if(_self.cssActive)
				{
					//if we are not animating based on the css left value but on css transform we need to subtract the left value
					newLeft = newLeft - defaultLeft;
					newRight = newRight - defaultLeft;
					defaultLeft = 0;
				}

				current.data('av-calc-default', defaultLeft);
				current.data('av-calc-left', newLeft);
				current.data('av-calc-right', newRight);

			});

			if(_self.increaseTitle)
			{
				_self.$titles.css({width: titleWidth + "%"});
			}
    	},

    	_moveTo: function(event)
    	{
    		var direction = event.type == "av-next" ? 1 : -1,
    			nextSlide = this.open === false ? 0 : this.open + direction;

    		if(nextSlide >= 0 && nextSlide < this.$slides.length)
			{
				this._move(event, nextSlide);
			}
    	},

    	_move: function( event, direct_open )
    	{
    		var _self  = this,
    			slide  = event.currentTarget,
    			itemNo = typeof direct_open != "undefined" ? direct_open : this.$slides.index(slide);

    		this.open = itemNo;

    		if( _self.autoplay && typeof slide != "undefined" )
			{
				clearInterval( _self.autoplay );
				_self.autoplay = false;
			}

    		this.$slides.removeClass('aviaccordion-active-slide').each(function(i)
    		{
    			var current 	= $(this),
    				dataSet 	= current.data(),
    				trans_val	= i <= itemNo ? dataSet.avCalcLeft : dataSet.avCalcRight,
					transition 	= {},
					reset		= event.type == 'mouseleave' ? 1 : 0,
					active 		= itemNo === i ? _self.$titleWrap.eq(i) : false;

    			if(active)
				{
					current.addClass('aviaccordion-active-slide');
				}

    			if(reset)
    			{
    				trans_val = dataSet.avCalcDefault;
    				this.open = false;
    			}

				if(_self.cssActive) //do a css3 animation
				{
					//move the slides
					transition[_self.property]  = _self.transform3d ? "translate3d(" + trans_val  + "%, 0, 0)" : "translate(" + trans_val + "%,0)"; //3d or 2d transform?
					current.css(transition);
				}
				else
				{
					transition.left = trans_val + "%";
					current.stop().animate(transition, 700, 'easeOutQuint');
				}
    		});
    	}
    };


	$.fn.aviaccordion = function( options )
	{
		return this.each(function()
		{
			var active = $.data( this, 'AviaccordionSlider' );

			if(!active)
			{
				//make sure that the function doesnt get aplied a second time
				$.data( this, 'AviaccordionSlider', 1 );

				//create the preparations for fullscreen slider
				new $.AviaccordionSlider( options, this );
			}
		});
	};

})(jQuery);

;

;/* avia-module-slideshow-fullscreen-js */
// -------------------------------------------------------------------------------------------
// Fullscreen Slideshow
//
// extends avia slideshow script with a more sophisticated preloader and fixed size for slider
// -------------------------------------------------------------------------------------------

(function($)
{
    "use strict";

	$.AviaFullscreenSlider = function(options, slider)
	{
		this.$slider  	= $( slider );
		this.$inner	  	= this.$slider.find('.avia-slideshow-inner');
		this.$innerLi	= this.$inner.find('>li');
		this.$caption 	= this.$inner.find('.avia-slide-wrap .caption_container');
		this.$win	  	= $( window );
		this.isMobile 	= $.avia_utilities.isMobile;
		this.isTouchDevice	= $.avia_utilities.isTouchDevice;
		this.mobile_no_animation = $( 'body' ).hasClass( 'avia-mobile-no-animations' );
		this.options	= {};
		this.property 	= {};
		this.scrollPos	= "0";
		this.transform3d = document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
		this.ticking = false;

		if( $.avia_utilities.supported.transition === undefined )
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}

		this._init( options );
	};

	$.AviaFullscreenSlider.defaults =
	{
		//height of the slider in percent
		height: 100,

		//subtract elements from the height
		subtract: '#wpadminbar, #header, #main>.title_container',

		// @since 5.0   only parallax works - fixed not (chrome and firefox) due to translate
		image_attachment: 'scroll',

		// enabled parallax flag
		parallax_enabled: true
	};

  	$.AviaFullscreenSlider.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this,
				slideshow_options = this.$slider.data( 'slideshow-options' );

    		//set the default options
    		this.options = $.extend( true, {}, $.AviaFullscreenSlider.defaults, options );

			//	since 5.0 we render data attributes in a json string
			if( 'object' == typeof slideshow_options )
			{
				this.options.height = 'undefined' != typeof slideshow_options.slide_height ? slideshow_options.slide_height : this.options.height;
				this.options.image_attachment = 'undefined' != typeof slideshow_options.image_attachment ? slideshow_options.image_attachment : this.options.image_attachment;
			}
			else
			{
				if( this.$slider.data('slide_height') )
				{
					this.options.height = this.$slider.data('slide_height');
				}

				if( this.$slider.data('image_attachment') )
				{
					this.options.image_attachment = this.$slider.data('image_attachment');
				}
			}

			//if background attachment is set to fixed or scroll disable the parallax effect
			this.options.parallax_enabled = this.options.image_attachment == '' ? true : false;

			//elements that get subtracted from the image height
			this.$subtract = $( this.options.subtract );


			// set the slideshow size
			this._setSize();

			// set resizing script on window resize
			this.$win.on( 'debouncedresize',  this._setSize.bind( this ) );

			//parallax scroll if element if leaving viewport
			setTimeout( function()
			{
				if( _self.options.parallax_enabled )
    			{
					//	disable parallax scrolling on mobile
					if( ! _self.isMobile || ( _self.isMobile && ! this.mobile_no_animation ) )
					{
						_self.$win.on( 'scroll', _self._on_scroll.bind( _self ) );
					}
    			}
			}, 100 );

			//activate the defaule slider
			this.$slider.aviaSlider( {bg_slider:true} );
		},

    	_on_scroll: function(e)
    	{
	    	var _self = this;

	    	if( !_self.ticking )
			{
				_self.ticking = true;
				window.requestAnimationFrame( _self._parallaxRequest.bind( _self ) );
		    }
    	},

    	_fetch_properties: function(slide_height)
		{
			this.property.offset 	= this.$slider.offset().top;
			this.property.wh 		= this.$win.height();
			this.property.height 	= slide_height || this.$slider.outerHeight();

			//re-position the slider
			this._parallax_scroll();
		},

    	_setSize: function( )
    	{
    		if( ! $.fn.avia_browser_height )
    		{
				var viewport		= this.$win.height(),
					slide_height	= Math.ceil( ( viewport / 100 ) * this.options.height );

				if( this.$subtract.length && this.options.height == 100 )
				{
					this.$subtract.each( function()
					{
						slide_height -= this.offsetHeight - 0.5;
					});
				}
				else
				{
					slide_height -= 1;
				}

				this.$slider.height( slide_height ).removeClass('av-default-height-applied');
				this.$inner.css( 'padding', 0 );
    		}

    		this._fetch_properties( slide_height );
    	},

		_parallaxRequest: function( e )
		{
			//	https://stackoverflow.com/questions/47184298/why-is-it-recommend-to-nest-settimeout-in-requestanimationframe-when-scheduling
			var _self = this;
			setTimeout( _self._parallax_scroll.bind( _self ), 0 );
		},

    	_parallax_scroll: function(e)
    	{
			if( ! this.options.parallax_enabled )
			{
				return;
			}

			//disable parallax scrolling on mobile
			if( this.isMobile && this.mobile_no_animation )
			{
				return;
			}

    		var winTop 		= this.$win.scrollTop(),
    			winBottom	=  winTop + this.property.wh,
    			scrollPos 	= '0',
    			prop 		= {};

    		if(this.property.offset < winTop && winTop <= this.property.offset + this.property.height)
    		{
    			scrollPos = Math.round( ( winTop - this.property.offset ) * 0.3 );
    		}

    		if( this.scrollPos != scrollPos )
    		{
    			//slide background parallax
    			this.scrollPos = scrollPos;

    			if( this.transform3d )
    			{
    				prop[$.avia_utilities.supported.transition + "transform"] = "translate3d(0px," + scrollPos + "px,0px)";
    			}
    			else
    			{
    				prop[$.avia_utilities.supported.transition + "transform"] = "translate(0px," + scrollPos + "px)";
    			}

    			this.$inner.css(prop);

    			//slider caption parallax

				// prop2[$.avia_utilities.supported.transition+"transform"] = "translate(0px,-"+ ( scrollPos * 1) +"px)";
				/*
	    		prop2['opacity'] = Math.ceil((this.$slider.height() - (scrollPos * 2)) / 100)/ 10;
	    		prop2['opacity'] = prop2['opacity'] < 0 ? 0 : prop2['opacity'];
	    		this.$caption.css(prop2);
				*/
    		}

    		this.ticking = false;
    	}
    };

	$.fn.aviaFullscreenSlider = function( options )
	{
		return this.each(function()
		{
			var active = $.data( this, 'aviaFullscreenSlider' );

			if( ! active )
			{
				//make sure that the function doesnt get aplied a second time
				$.data( this, 'aviaFullscreenSlider', 1 );

				//create the preparations for fullscreen slider (this is slideshow and not section avia-fullscreen-slider !!)
				new $.AviaFullscreenSlider( options, this );
			}
		});
	};

})(jQuery);

;

;/* avia-module-slideshow-ls-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// makes sure that the fixed container height is removed once the layerslider is loaded, so it adapts to the screen resolution
	// -------------------------------------------------------------------------------------------

	$.fn.layer_slider_height_helper = function(options)
	{
		return this.each(function()
		{
			var container 	= $(this),
				first_div 	= container.find('>div').first(),
				timeout 	= false,
				counter 	= 0,
				reset_size 	= function()
				{
					if(first_div.height() > 0 || counter > 5)
					{
						container.height('auto');
					}
					else
					{
						timeout = setTimeout(reset_size, 500);
						counter++;
					}
				};

			if( ! first_div.length )
			{
				return;
			}

			timeout = setTimeout(reset_size, 0);
		});
	};


}(jQuery));
;

;/* avia-module-tabsection-js */
// -------------------------------------------------------------------------------------------
// Tab Section and Slideshow Section
// =================================
//
// @since 5.0		extended to support slideshow section
// -------------------------------------------------------------------------------------------
(function($)
{
	"use strict";

	$.fn.avia_sc_tab_section = function()
	{
		var win 			= $(window),
			browserPrefix 	= $.avia_utilities.supports('transition'),
			cssActive 		= this.browserPrefix !== false ? true : false,
			isMobile 		= $.avia_utilities.isMobile,
			isTouchDevice	= $.avia_utilities.isTouchDevice,
			mobile_no_animation = $( 'body' ).hasClass( 'avia-mobile-no-animations' ),
			transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
			transition		= {},
			animations = [
							'avia_animate_when_visible',
							'avia_animate_when_almost_visible',
							'av-animated-generic',
							'av-animated-when-visible',
							'av-animated-when-almost-visible',
							'av-animated-when-visible-95'
						];

		return this.each( function()
		{
			var container 		= $(this),
				tabs			= container.find('.av-section-tab-title'),
				tab_outer		= container.find('.av-tab-section-outer-container'),
				tab_wrap		= container.find('.av-tab-section-tab-title-container'),
				tab_nav			= container.find('.av_tab_navigation'),		//	dummy structure used for sliding logic
				arrows_wrap		= container.find('.av-tabsection-arrow'),	//	arrows to scroll tab buttons
				arrows			= arrows_wrap.find('.av-tab-section-slide'),
				slides_wrap		= container.find('.av-slide-section-container-wrap'),
				slide_arrows_wrap = container.find('.av-tabsection-slides-arrow'),	//	arrows to scroll slides
				slide_arrows	= slide_arrows_wrap.find('.av-tab-section-slide-content'),
				slide_dots_wrap = container.find('.av-tabsection-slides-dots'),		//	dots to scroll slides
				slide_dots		= slide_dots_wrap.find('.goto-slide'),
				content_wrap	= container.find('.av-tab-section-inner-container'),
				single_tabs		= container.find('.av-animation-delay-container'), //for elements inside the tab that receive waypoint animation
				layout_tab_wrap = container.find('.av-layout-tab'),
				inner_content	= container.find('.av-layout-tab-inner'),
				flexible    	= container.is('.av-tab-content-auto'),
				minimumBrowserHeight = container.hasClass( 'av-minimum-height'),
				current_content = null,		// container.find('.__av_init_open') => .av-layout-tab,
				current_tab_id  = '1',		// current_content.data( 'av-tab-section-content' ),
				current_iTab_id = 1,		// 'undefined' != typeof current_tab_id ? parseInt( current_tab_id, 10 ) : 1,
				min_width		= 0,
				transition_action = 'none',
				slideshowOptions = {
								animation: 'av-tab-slide-transition',
								autoplay: false,
								loop_autoplay: 'once',			//	'endless' | 'once'
								interval: 5,
								loop_manual: 'manual-endless',	//	'manual-endless' | 'manual-once'
								autoplay_stopper: false,
								noNavigation: false
							},
				slideshowData = tab_outer.data( 'slideshow-data' ),		//	returns decoded json object
				deepLinksToTabs = {},				//	deeplink: tabID  allows case insensitive retrieve of hash tag
				timeoutIDAutoplay = null;

			if( 'undefined' != typeof slideshowData )
			{
				slideshowOptions = $.extend( {}, slideshowOptions, slideshowData );
			}

			layout_tab_wrap.each( function ()
			{
				var tab = $( this ),
					link = tab.data( 'av-deeplink-tabs' ),
					id = tab.data( 'av-tab-section-content' );

				if( link )
				{
					deepLinksToTabs[ link.toLowerCase() ] = id;
				}
			});

			//	__av_init_open might not set because we cannot check for invalid initial open slide number in php - we set it here
			current_tab_id = container.find( '.av-active-tab-title' ).data( 'av-tab-section-title' );
			current_tab_id = 'undefined' != typeof current_tab_id ? current_tab_id : '1';
			current_iTab_id = parseInt( current_tab_id, 10 );
			current_content = container.find( '[data-av-tab-section-content="' + current_tab_id + '"]' );
			current_content.addClass( '__av_init_open av-active-tab-content' );

			if( 'av-tab-slide-transition' == slideshowOptions.animation )
			{
				transition_action = 'slide_sidewards';
			}
			else if( 'av-tab-slide-up-transition' == slideshowOptions.animation )
			{
				transition_action = 'slide_up';
			}
			else if( 'av-tab-fade-transition' == slideshowOptions.animation )
			{
				transition_action = 'fade';
			}

			//	due to translate animations are not working correctly with waypoint script we have to add this here
			if( 'slide_up' == transition_action )
			{
				$.each( animations, function( index, value )
				{
					inner_content.find( '.' + value ).addClass( 'avia_start_animation_when_active' );
				});
			}

			var change_tab = function( e, prevent_hash )
				{
					e.preventDefault();

					//	ignore user click on tab buttons when slideshow
					if( container.hasClass( 'av-is-slideshow' ) && e.originalEvent !== undefined )
					{
						return;
					}

					var current_tab = $( e.currentTarget ),
//						current_arrow = current_tab.find('.av-tab-arrow-container span'),
						tab_nr = current_tab.data('av-tab-section-title'),
						iTab_nr = parseInt( tab_nr, 10 ),
						prev_content = current_content;

					tabs.removeClass( 'av-active-tab-title' );
					prev_content.removeClass( 'av-active-tab-content' );

					//	needed to avoid scroll on pageload when multiple tab sections on page
					current_tab.removeClass( 'no-scroll' );

					//	reset global scope !!
					current_content = container.find( '[data-av-tab-section-content="' + tab_nr + '"]' );
					current_tab_id = tab_nr;
					current_iTab_id = iTab_nr;

					current_tab.addClass( 'av-active-tab-title' );
					current_content.addClass( 'av-active-tab-content' );

					var new_pos = ( ( iTab_nr - 1 ) * -100 );

					if( $('body').hasClass('rtl') )
					{
						new_pos = ( ( iTab_nr - 1 ) * 100 );
					}

					//	set height of section depending on current content
					set_slide_height();

					if( ['none', 'slide_sidewards'].indexOf( transition_action ) >= 0 )
					{
						//	default tab section slide behaviour
						if( cssActive )
						{
							//move the slides
							new_pos = new_pos / tabs.length;
							transition['transform'] = transform3d ? "translate3d(" + new_pos  + "%, 0, 0)" : "translate(" + new_pos + "%,0)"; //3d or 2d transform?
							transition['left'] = "0%";
							content_wrap.css( transition );
						}
						else
						{
							content_wrap.css( 'left', new_pos + "%" );
						}
					}
					else if( 'slide_up' == transition_action )
					{
						layout_tab_wrap.css( 'opacity', 1 );

						//	default tab section slide behaviour
						if( cssActive )
						{
							var top = current_content.data( 'slide-top' );

							if( 'undefined' == typeof top )
							{
								top = 0;
							}

							//move the slides
							transition['transform'] = transform3d ? "translate3d(0, -" + top + "px, 0)" : "translate(0, -" + top + "px ,0)"; //3d or 2d transform?
							transition['left'] = "0";
							content_wrap.css( transition );
						}
						else
						{
							content_wrap.css( 'top', '-' + new_pos + 'px' );
						}

						layout_tab_wrap.filter(':not(.av-active-tab-content)').css( 'opacity', 0 );
					}

					set_tab_title_pos();
					set_slide_arrows_visibility( iTab_nr );
					set_slide_dots_visibility( iTab_nr );

					if( ! ( prevent_hash || slideshowOptions.autoplay ) )
					{
						var newHash = current_tab.attr( 'href' ),
							deepLink = current_content.data( 'av-deeplink-tabs' );

						if( 'undefined' != typeof( deepLink ) && '' != deepLink )
						{
							newHash = deepLink;
						}

						location.hash = newHash;
					}

					setTimeout( function()
					{
						current_content.trigger( 'avia_start_animation_if_current_slide_is_active' );

						//	fixes bug that animations do not work due to fn.avia_waypoints()
						if( ! isMobile || ( isMobile && ! mobile_no_animation ) )
						{
							single_tabs.not( current_content ).trigger( 'avia_remove_animation' );
						}
					}, 600 );
				},

				set_min_width = function()
				{
					min_width = 0;
					tabs.each( function()
					{
						min_width += $(this).outerWidth();
					});

					tab_wrap.css( 'min-width', min_width );
				},

				set_slide_height = function()
				{
					var tab_wrap_height = container.hasClass( 'av-hide-tabs' ) ? 0 : tab_wrap.height(),
						tab_wrap_add = tab_wrap_height ? tab_wrap.outerHeight() : 0,
						min_el_height = 0,
						cell_padding = 0,
						same_slide_height = 0,
						same_table_cell_height = 0,
						calc_el_height = 0;

					if( minimumBrowserHeight )
					{
						var css_height = container.hasClass( 'av-minimum-height-custom' ) ? container.data( 'av_minimum_height_px' ) : container.css( 'min-height' );
						css_height = parseInt( css_height, 10 );
						if( ! isNaN( css_height ) )
						{
							min_el_height = css_height;
						}

						if( ! min_el_height )
						{
							minimumBrowserHeight = false;
						}
					}

					if( ! flexible )
					{
						//	reset all slide content to actual height
						inner_content.css( 'height', '' );
						content_wrap.css( 'min-height', '' );

						var first = layout_tab_wrap.first();

						cell_padding = first.outerHeight() - first.height();

						layout_tab_wrap.each( function()
						{
							var content = $( this ),
								inner = content.find( '.av-layout-tab-inner' );

							same_slide_height = Math.max( same_slide_height, inner.height() );
						});

						same_table_cell_height = same_slide_height + cell_padding;
						calc_el_height = same_table_cell_height + tab_wrap_add;

						if( minimumBrowserHeight )
						{
							if( calc_el_height < min_el_height )
							{
								same_table_cell_height = min_el_height - tab_wrap_add;
								calc_el_height = min_el_height;
							}
						}

//						inner_content.height( same_table_cell_height );
						content_wrap.css( 'min-height', same_table_cell_height );
						content_wrap.css( 'height', same_table_cell_height );
					}
					else if( flexible && minimumBrowserHeight )
					{
						same_table_cell_height = min_el_height - tab_wrap_add;
						calc_el_height = min_el_height;

						content_wrap.css( 'min-height', same_table_cell_height );
						content_wrap.css( 'height', same_table_cell_height );
					}

					if( ['none', 'slide_sidewards', 'fade'].indexOf( transition_action ) >= 0 )
					{
						if( ! current_content.length )
						{
							return;
						}

						//	table and table cell - only needs to be adjusted when content adjusted to content height
						if( flexible )
						{
//							var old_height = inner_content.height();
							inner_content.height( 'auto' );

							//	since 4.8.9 changed to outerHeight because huge_padding is broken - padding is ignored
							var content_height = current_content.find( '.av-layout-tab-inner' ).height(),
								height = current_content.outerHeight(),
								outer_height = height + tab_wrap_height + 100;

							tab_outer.css( 'max-height', outer_height );
//							inner_content.height( old_height );
							inner_content.height( content_height );
							inner_content.css( 'overflow', 'hidden' );
						}

						setTimeout( function() { win.trigger( 'av-height-change' ); }, 600 );

						return;
					}

					//	'slide_up'
					var top = 0;

					layout_tab_wrap.each( function()
					{
						var content = $( this ),
							inner = content.find( '.av-layout-tab-inner' ),
							layout_tab_nr = content.data( 'av-tab-section-content' ),
							layout_iTab_nr = parseInt( layout_tab_nr, 10 ),
							outerHeight = content.outerHeight();

						content.data( 'slide-top', top );
						top += outerHeight;

						if( flexible && layout_iTab_nr == current_iTab_id )
						{
							//	adjust height of section to visible element
							tab_outer.css( 'max-height', outerHeight + tab_wrap_add );
							inner.css( 'overflow', 'hidden' );
						}
					});
				},

				set_tab_title_pos = function()
				{
					//	scroll the tabs if there is not enough room to display them all - rtl allign right to left !!
					var current_tab = container.find('.av-active-tab-title'),
						viewport = container.width(),
						left_pos = ( current_tab.position().left * - 1 ) - ( current_tab.outerWidth() / 2 ) + ( viewport / 2 );

					if( ! $('body').hasClass('rtl') )
					{
						if( viewport >= min_width )
						{
							left_pos = 0;
						}

						if( left_pos + min_width < viewport )
						{
							left_pos = ( min_width - viewport ) * -1;
						}

						if( left_pos > 0 )
						{
							left_pos = 0;
						}

						tab_wrap.css( 'left', left_pos );

						var show_prev = left_pos !== 0;
						var show_next = left_pos + min_width > viewport;

						set_arrows_visibility( show_prev, show_next );
					}
					else
					{
						var right_pos = 0;

						if( viewport < min_width )
						{
							if( left_pos + min_width > viewport )
							{
								if( left_pos > 0 )
								{
									left_pos = 0;
								}

								right_pos = ( left_pos + min_width - viewport ) * -1;
							}
						}

						tab_wrap.css( 'left', 'auto' );
						tab_wrap.css( 'right', right_pos );

						var show_prev = right_pos + min_width > viewport;
						var show_next = right_pos !== 0;

						set_arrows_visibility( show_prev, show_next );
					}
				},

				set_arrows_visibility = function( show_prev, show_next )
				{
					if( show_prev )
					{
						arrows_wrap.addClass( 'av-visible-prev' );
					}
					else
					{
						arrows_wrap.removeClass( 'av-visible-prev' );
					}

					if( show_next )
					{
						arrows_wrap.addClass( 'av-visible-next' );
					}
					else
					{
						arrows_wrap.removeClass( 'av-visible-next' );
					}
				},

				set_slide_arrows_visibility = function( current_tab )
				{
					if( current_tab > 1 )
					{
						slide_arrows_wrap.addClass( 'av-visible-prev' );
					}
					else
					{
						slide_arrows_wrap.removeClass( 'av-visible-prev' );
					}

					if( current_tab < tabs.length )
					{
						slide_arrows_wrap.addClass( 'av-visible-next' );
					}
					else
					{
						slide_arrows_wrap.removeClass( 'av-visible-next' );
					}
				},

				set_slide_dots_visibility = function( current_tab )
				{
					slide_dots_wrap.find( 'a' ).removeClass( 'active' );
					slide_dots_wrap.find( 'a' ).eq( current_tab - 1 ).addClass( 'active' );
				},

				swipe_to_next_prev = function(e)
				{
					//	ignore user interaction
					if( slideshowOptions.noNavigation )
					{
						return;
					}

					switch_to_next_prev( e );
				},

				switch_to_next_prev = function( e )
				{
					e.preventDefault();

					var clicked = $( e.currentTarget ),
						current_tab = container.find('.av-active-tab-title');

					//	handle slideshow section -> reroute to slideshow navigation arrows (might be hidden with CSS)
					if( container.hasClass( 'av-slideshow-section' ) )
					{
						if( clicked.hasClass( 'av_prev_tab_section' ) )
						{
							slide_arrows_wrap.find( '.av_prev_tab_section' ).trigger( 'click' );
						}
						else
						{
							slide_arrows_wrap.find( '.av_next_tab_section' ).trigger( 'click' );
						}

						return;
					}

					if( clicked.is('.av_prev_tab_section') )
					{
						if( ! $('body').hasClass('rtl') )
						{
							current_tab.prev('.av-section-tab-title').trigger('click');
						}
						else
						{
							current_tab.next('.av-section-tab-title').trigger('click');
						}
					}
					else
					{
						if( ! $('body').hasClass('rtl') )
						{
							current_tab.next('.av-section-tab-title').trigger('click');
						}
						else
						{
							current_tab.prev('.av-section-tab-title').trigger('click');
						}
					}
				},

				slide_arrows_next_prev = function( e )
				{
					e.preventDefault();

					//	ignore user clicks on slideshow arrows
					if( slideshowOptions.noNavigation && e.originalEvent !== undefined )
					{
						return;
					}

					var clicked = $( e.currentTarget ),
						current_tab = container.find('.av-active-tab-title'),
						tab_nr = current_tab.data('av-tab-section-title'),
						iTab_nr = parseInt( tab_nr, 10 ),
						next = 0;

					if( clicked.hasClass( 'av_prev_tab_section' ) )
					{
						next = ! $('body').hasClass('rtl') ? -1 : 1;
					}
					else
					{
						next = ! $('body').hasClass('rtl') ? 1 : -1;
					}

					var pos = iTab_nr + next;

					if( pos <= 0 || pos > tabs.length )
					{
						//	fallback, if arrows are visible for first or last slide
						if( 'endless' != slideshowOptions.loop_autoplay && 'manual-endless' != slideshowOptions.loop_manual )
						{
							return;
						}

						pos = pos <= 0 ? tabs.length : 1;
					}

					clearTimeoutAutoplay();
					tabs.eq( pos - 1 ).trigger( 'click' );
					init_autoplay();
				},

				slide_dots_change_tab = function( e )
				{
					e.preventDefault();

					var clicked = $( e.currentTarget );

					if( clicked.hasClass( 'active' ) )
					{
						return;
					}

					var tab_nr = clicked.attr( 'href' ).replace( '#', '' ),
						iTab_nr = parseInt( tab_nr, 10 );

					if( iTab_nr > tabs.length )
					{
						return;
					}

					clearTimeoutAutoplay();
					tabs.eq( iTab_nr - 1 ).trigger( 'click' );
					init_autoplay();
				},

				get_init_open = function()
				{
//					removed 5.0
//					if( ! hash && window.location.hash ) var hash = window.location.hash;

					var hash = window.location.hash ? window.location.hash : '',
						deepHash = hash.toLowerCase().replace( '#', '' ),
						open = null;

					if( 'undefined' != typeof( deepLinksToTabs[ deepHash ] ) && '' != deepLinksToTabs[ deepHash ] )
					{
						var hashID = deepLinksToTabs[ deepHash ];
						open = tabs.filter( '[data-av-tab-section-title="' + hashID + '"]' );
					}
					else
					{
						open = tabs.filter( '[href="' + hash + '"]' );
					}

					if( open.length )
					{
						if( ! open.is( '.active_tab' ) )
						{
							open.trigger( 'click' );
						}
					}
					else
					{
						//set correct color
						container.find( '.av-active-tab-title' ).trigger( 'click', true );
					}
				},

				clearTimeoutAutoplay = function()
				{
					if( typeof timeoutIDAutoplay === 'number' )
					{
						clearTimeout( timeoutIDAutoplay );
					}

					timeoutIDAutoplay = null;
				},

				init_autoplay = function()
				{
					if( ! container.hasClass( 'av-slideshow-section' ) )
					{
						return;
					}

					if( true !== slideshowOptions.autoplay )
					{
						tab_outer.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
					}

					if( 'undefined' == typeof slideshowOptions.loop_autoplay || 'endless' != slideshowOptions.loop_autoplay  )
					{
						slideshowOptions.loop_autoplay = 'once';
					}

					if( 'undefined' == typeof slideshowOptions.interval )
					{
						slideshowOptions.interval = 5;
					}

					if( 'undefined' == typeof slideshowOptions.autoplay || true !== slideshowOptions.autoplay  )
					{
						slideshowOptions.autoplay = false;
						tab_outer.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
						return;
					}

					clearTimeoutAutoplay();

					timeoutIDAutoplay = setTimeout( function()
					{
						rotate_next_slide();
					}, slideshowOptions.interval * 1000 );
				},

				rotate_next_slide = function()
				{
					var current_tab = container.find('.av-active-tab-title'),
						tab_nr = current_tab.data('av-tab-section-title'),
						iTab_nr = parseInt( tab_nr, 10 ),
						stop = false,
						next = 0;

					timeoutIDAutoplay = null;

					if( 'endless' == slideshowOptions.loop_autoplay )
					{
						if( ! $('body').hasClass('rtl') )
						{
							next = iTab_nr < tabs.length ? iTab_nr + 1 : 1;
						}
						else
						{
							next = iTab_nr > 1 ? iTab_nr - 1 : tabs.length;
						}
					}
					else
					{
						if( ! $('body').hasClass('rtl') )
						{
							stop = iTab_nr == tabs.length;
							next = iTab_nr + 1;
						}
						else
						{
							stop = iTab_nr == 1;
							next = iTab_nr - 1;
						}

						if( stop )
						{
							slideshowOptions.autoplay = false;
							slideshowOptions.loop_autoplay = 'manual';
							tab_outer.removeClass( 'av-slideshow-autoplay' ).addClass( 'av-slideshow-manual' );
							tab_outer.removeClass( 'av-loop-endless' ).addClass( 'av-loop-once' );
							return;
						}
					}

					tabs.eq( next - 1 ).trigger( 'click' );

					timeoutIDAutoplay = setTimeout( function()
					{
						rotate_next_slide();
					}, slideshowOptions.interval * 1000 );
				};

			$.avia_utilities.preload({

				container: current_content,
				single_callback: function()
				{
					tabs.on( 'click', change_tab );
					arrows.on( 'click', switch_to_next_prev );
					slide_arrows.on( 'click', slide_arrows_next_prev );
					slide_dots.on( 'click', slide_dots_change_tab );

					//	implement swipe event
					if( isMobile || isTouchDevice )
					{
						tab_nav.on( 'click', swipe_to_next_prev );
					}

					win.on( 'debouncedresize', set_tab_title_pos );

					win.on( 'hashchange', get_init_open );


					/**
					 * We had to remove av-height-change because this event is recursivly triggered in set_slide_height and lead to performance problems
					 * AND broken layout - content was not displayed completly
					 *
					 * Content elements that can can change their height and trigger av-height-change should trigger this additional event after to
					 * allow layout elements like tab section to react on this and then call av-height-change by themself
					 *
					 * @since 4.2.3
					 */
					win.on( 'debouncedresize av-content-el-height-changed', set_slide_height );

					set_min_width();
					set_slide_height();
					get_init_open();
					init_autoplay();
				}
			});

			if( isMobile || isTouchDevice )
			{
				if( ! slideshowOptions.noNavigation )
				{
					content_wrap.avia_swipe_trigger( { prev:'.av_prev_tab_section', next:'.av_next_tab_section' } );
				}
			}

			//	preload has some delay - try to build a correct layout
			set_slide_height();
		});
	};

}(jQuery));

;

;/* avia-module-tabs-js */
// -------------------------------------------------------------------------------------------
// Tab Shortcode
//
// @since 6.0 added better HTML support for European Accessibility Act:
//		https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/
//		https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#examples
//
//	LIMITATION: currently we leave tabindex:0 to allow to tab through tabs and open with enter
//	            as we do not support the default key behaviour because we loose focus
//	            (needs a different implementation)
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.avia_sc_tabs = function(options)
	{
		var defaults =
		{
			heading: '.tab',
			content:'.tab_content',
			active:'active_tab',
			sidebar: false
		};

		var win = $(window),
			options = $.extend(defaults, options);

		return this.each(function()
		{
			var container 	= $(this),
				tab_titles 	= $('<div class="tab_titles" role="tablist"></div>').prependTo(container),
				tabs 		= $(options.heading, container),
				content 	= $(options.content, container),
				newtabs 	= false,
				oldtabs 	= false;

			//	clone tabs and move into tab_titles container
			newtabs = tabs.clone();
			oldtabs = tabs.addClass('fullsize-tab').attr( { 'aria-hidden': true, 'aria-selected': false, id: '', role: '', 'aria-controls': '', tabindex: 0 } );
			tabs = newtabs;

			tabs.prependTo( tab_titles ).each( function(i)
			{
				var tab = $(this),
					the_oldtab = false;

				if(newtabs)
				{
					the_oldtab = oldtabs.eq( i );
				}

				tab.addClass( 'tab_counter_' + i ).attr( { tab_counter: i } ).on( 'click', function()
				{
					open_content(tab, i, the_oldtab);
					return false;
				});

				tab.on('keydown', function(objEvent)
				{
					if( objEvent.keyCode === 13 )  // if user presses 'enter'
					{
						tab.trigger('click');
					}
				});

				if(newtabs)
				{
					the_oldtab.on('click', function()
					{
						open_content(the_oldtab, i, tab);
						return false;
					});

					the_oldtab.on('keydown', function(objEvent)
					{
						if( objEvent.keyCode === 13 )  // if user presses 'enter'
						{
							the_oldtab.trigger('click');
						}
					});
				}
			});

			set_size();
			trigger_default_open(false);
			win.on("debouncedresize", set_size);

	        $('a').on('click',function(){
	            var hash = $(this).attr('href');
	            if(typeof hash != "undefined" && hash)
	            {
	                hash = hash.replace(/^.*?#/,'');
	                trigger_default_open('#'+hash);
	            }
	        });

			function set_size()
			{
				if( ! options.sidebar)
				{
					return;
				}

				content.css({'min-height': tab_titles.outerHeight() + 1});
			}

			function open_content( tab, i, alternate_tab )
			{
				if( ! tab.is( '.' + options.active ) )
				{
					$( '.' + options.active, container ).removeClass( options.active ).attr( { 'aria-selected': false, tabindex: 0 } );
					$( '.' + options.active + '_content', container ).removeClass( options.active + '_content' ).attr( 'aria-hidden', true );

					tab.addClass( options.active ).attr( { 'aria-selected': true, tabindex: 0 } );

					var new_loc = tab.data('fake-id');
					if( typeof new_loc == 'string' )
					{
						window.location.replace( new_loc );
					}

					if( alternate_tab )
					{
						alternate_tab.addClass( options.active );
					}

					var active_c = content.eq( i ).addClass( options.active + '_content' ).attr( 'aria-hidden', false );

					if(typeof click_container != 'undefined' && click_container.length)
					{
						sidebar_shadow.height( active_c.outerHeight() );
					}

					//check if tab title is in viewport. if not scroll up
					var el_offset = active_c.offset().top,
						scoll_target = el_offset - 50 - parseInt( $('html').css('margin-top'), 10 );

					if( win.scrollTop() > el_offset )
					{
						$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);
					}
				}

				win.trigger( 'av-content-el-height-changed', tab );
			}

			function trigger_default_open(hash)
			{
				if( ! hash && window.location.hash )
				{
					hash = window.location.hash;
				}

				if( ! hash )
				{
					return;
				}

				var open = tabs.filter('[data-fake-id="'+hash+'"]');

				if(open.length)
				{
					if( ! open.is('.active_tab') )
					{
						open.trigger('click');
					}

					window.scrollTo(0, container.offset().top - 70);
				}
			}

		});
	};


}(jQuery));

;

;/* avia-module-testimonials-js */
(function($)
{
	"use strict";

	// -------------------------------------------------------------------------------------------
	// testimonial shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_testimonial = function(options)
	{
		return this.each(function()
		{
			var container = $(this),
				elements = container.find('.avia-testimonial');

			//trigger displaying of thumbnails
			container.on('avia_start_animation', function()
			{
				elements.each( function(i)
				{
					var element = $(this);
					setTimeout( function(){ element.addClass('avia_start_animation'); }, (i * 150) );
				});
			});
		});
	};

}(jQuery));

;

;/* avia-module-timeline-js */
// -------------------------------------------------------------------------------------------
// Avia Timeline
// -------------------------------------------------------------------------------------------


(function($)
{
    "use strict";

    $(window).on('load', function (e)
	{
        if( $.AviaSlider )
		{
            $('.avia-timeline-container').avia_sc_timeline();
        }
    });


    $.fn.avia_sc_timeline = function (options)
	{
        return this.each( function ()
		{
			var container = this,
				timeline_id = '#' + $(this).attr('id'),
				timeline = $(timeline_id),
				methods;

            methods =
			{
				// make sure all milestones have the same height in horizontal timelines
				matchHeights: function()
				{
					//date
					this.setMinHeight( $(timeline_id + ' .av-milestone-placement-top .av-milestone-date'), true );

					//content
					this.setMinHeight( $(timeline_id + ' .av-milestone-placement-bottom .av-milestone-content-wrap'), true );

					//contentbox
					this.setMinHeight( $(timeline_id + ' .av-milestone-placement-bottom.avia-timeline-boxshadow .av-milestone-contentbox'), false );
					this.setMinHeight( $(timeline_id + ' .av-milestone-placement-top.avia-timeline-boxshadow .av-milestone-contentbox'), false );

					//alternate
					this.setMinHeight( $(timeline_id + ' .avia-timeline-horizontal.av-milestone-placement-alternate li >:first-child'), true );
				},

				setMinHeight: function( els, setNav )
				{
					if(els.length < 2)
					{
						return;
					}

					var elsHeights = new Array();
					els.css('min-height','0').each( function(i)
					{
						var current = $(this);
						var currentHeight = current.outerHeight(true);
						elsHeights.push(currentHeight);
					});

					var largest = Math.max.apply( null, elsHeights );
					els.css('min-height', largest);

					//set nav position
					if( setNav )
					{
						var $firstElement = els.first(),
							$parent = $firstElement.closest('.avia-timeline-container'),
							$pos = $firstElement.height();

						$parent.find('.av-timeline-nav').css( 'top', $pos );
					}

				},

				createCarousel: function(e)
				{
					var self = this,
						slider = $(timeline_id + '.avia-slideshow-carousel'),
						slides_num = 3,
						slides_num_small = 1;

					if( timeline.attr('avia-data-slides'))
					{
						slides_num = parseInt(timeline.attr('avia-data-slides'));
					}

					if( slides_num >= 2 )
					{
						slides_num_small = 2;
					}

					var sliderOptions = {
									carousel: 'yes',
									keep_padding: true,
									carouselSlidesToShow: slides_num,
									carouselSlidesToScroll: 3,
									carouselResponsive: [
													{
														breakpoint: 989,
														settings: {
																	carouselSlidesToShow: slides_num_small,
																	carouselSlidesToScroll: slides_num_small
																}
													},
													{
														breakpoint: 767,
														settings: {
																	carouselSlidesToShow: 1,
																	carouselSlidesToScroll: 1
																}
													}
												]
								};

					slider.aviaSlider( sliderOptions );

					slider.on('_kickOff',function()
					{
						self.matchHeights();
					});

					$(window).on( 'resize', function()
					{
						self.matchHeights();
					});

				},

				layoutHelpers: function(e)
				{
					$(timeline_id + ' .avia-timeline-vertical li').each( function(index, element)
					{
						var $length = $(this).parents('ul').find('li').length;
						var $icon_wrap = $(this).find('.av-milestone-icon-wrap');
						var $icon_wrap_height = $icon_wrap.outerHeight(true);
						var $icon_wrap_height_half = parseInt( $icon_wrap_height / 2 );

						if( index === ( $length - 1 ) )
						{
							$icon_wrap.css({
										'height': $icon_wrap_height_half
									});
						}
						else
						{
							$icon_wrap.css({
										'height': $icon_wrap_height
									});
						}
					});
				},

				fireAnimations: function(e)
				{
					if( $(timeline_id + ' > ul').hasClass('avia-timeline-vertical') )
					{
						var milestone = timeline.find('.av-milestone');

						timeline.on('avia_start_animation', function()
						{
							milestone.each(function(i)
							{
								var element = $(this);
								setTimeout( function(){ element.addClass('avia_start_animation'); }, ( i * 350 ) );
							});
						});
					}
				}
			};

            methods.createCarousel();
            methods.layoutHelpers();
            methods.fireAnimations();
            methods.matchHeights();
        });
    };

})(jQuery);


;

;/* avia-module-toggles-js */
// -------------------------------------------------------------------------------------------
// Toggle shortcode javascript
// -------------------------------------------------------------------------------------------
(function($)
{
	"use strict";

	$.fn.avia_sc_toggle = function(options)
	{
		var defaults =
		{
			single: '.single_toggle',
			heading: '.toggler',
			content: '.toggle_wrap',
			sortContainer:'.taglist'
		};

		var win = $(window),
			options = $.extend(defaults, options);

		return this.each(function()
		{
			var container = $(this).addClass('enable_toggles'),
				toggles = $(options.single, container),
				heading = $(options.heading, container),
				allContent = $(options.content, container),
				sortLinks = $(options.sortContainer + " a", container),
				preview = $( '#av-admin-preview' );



			//	needed to avoid scroll to top when opening and closing toggles - can be removed when other solution found (readded @since 4.8.4.1)
			var activeStyle = '',
				headingStyle = '';

			heading.each(function(i)
			{
				var thisheading = $(this),
					content = thisheading.hasClass( 'av-title-below' ) ? thisheading.prev( options.content, container ) : thisheading.next( options.content, container ),
					slideSpeed = parseInt( thisheading.data( 'slide-speed' ) );

				slideSpeed = isNaN( slideSpeed ) ? 200 : slideSpeed;

				function scroll_to_viewport()
				{
				    //check if toggle title is in viewport. if not scroll up
				    var el_offset = content.offset().top,
				        scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);

				    if(win.scrollTop() > el_offset)
				    {
				        $('html:not(:animated),body:not(:animated)').animate( {scrollTop: scoll_target}, slideSpeed );
				    }
				}

				if( content.css('visibility') != "hidden" )
				{
					thisheading.addClass('activeTitle').attr('style',activeStyle);
				}

				thisheading.on('keydown', function(objEvent)
				{
					// user presses 'enter' or space https://www.w3.org/WAI/ARIA/apg/patterns/accordion/#keyboardinteraction
					if( objEvent.keyCode === 13 || objEvent.keyCode === 32 )  // if user presses 'enter' or space
					{
						thisheading.trigger('click');
					}
				});

				thisheading.on( 'click', function()
				{
					if( content.css('visibility') != "hidden" )
					{
						content.slideUp( slideSpeed, function()
						{
							content.removeClass('active_tc').attr({style:''});
							win.trigger('av-height-change');
							win.trigger('av-content-el-height-changed', this );

							if( preview.length == 0 )
							{
								location.replace( thisheading.data('fake-id') + "-closed" );
							}
						});

						thisheading.removeClass('activeTitle').attr('style', headingStyle);
					}
					else
					{
						if( container.is('.toggle_close_all') )
						{
							allContent.not(content).slideUp( slideSpeed, function()
							{
								$(this).removeClass('active_tc').attr({style:''});
								scroll_to_viewport();
							});

							heading.removeClass('activeTitle').attr('style',headingStyle);
						}

						content.addClass('active_tc');

						setTimeout(function()
						{
							content.slideDown( slideSpeed, function()
							{
								if( ! container.is('.toggle_close_all') )
								{
									scroll_to_viewport();
								}

								win.trigger( 'av-height-change' );
								win.trigger( 'av-content-el-height-changed', this );
							});

						}, 1);

						thisheading.addClass('activeTitle').attr( 'style', activeStyle );

						if( preview.length == 0 )
						{
							location.replace(thisheading.data('fake-id'));
						}
					}

				});
			});

			sortLinks.on( 'click', function(e)
			{
				e.preventDefault();

				var show = toggles.filter('[data-tags~="' + $(this).data('tag') + '"]'),
					hide = toggles.not('[data-tags~="' + $(this).data('tag') + '"]');

				sortLinks.removeClass('activeFilter');
				$(this).addClass('activeFilter');
				heading.filter('.activeTitle').trigger('click');
				show.slideDown();
				hide.slideUp();
			});

			function changeTitleAria()
			{
				heading.each( function( i )
				{
					let $heading = $(this),
						title_open = $heading.attr( 'data-title-open' ),
						title = $heading.attr( 'data-title' ),
						aria_collapsed = $heading.attr( 'data-aria_collapsed' ),
						aria_expanded = $heading.attr( 'data-aria_expanded' ),
						content = $heading.hasClass( 'av-title-below' ) ? $heading.prev( options.content, container ) : $heading.next( options.content, container ),
						titleHasHtml = false,
						currentTitle = $heading.contents()[0].data;

					if( ! title )
					{
						title = '***';
					}

					if( ! aria_collapsed )
					{
						aria_collapsed = 'Expand Toggle';
					}

					if( ! aria_expanded )
					{
						aria_expanded = 'Collapse Toggle';
					}

					//	limitation - html markup breaks exchange logic because contents()[0] ends with first markup
					titleHasHtml = title.indexOf( '<' ) >= 0;

					if( content.css('visibility') != "hidden" )
					{
						if( title_open && ! titleHasHtml && currentTitle != title_open )
						{
							$heading.contents()[0].data = title_open;
						}
						$heading.attr( 'aria-expanded', 'true' );
						$heading.attr( 'aria-label', aria_expanded );
						content.attr( { 'aria-hidden': 'false', tabindex: 0 } );
					}
					else
					{
						if( title_open && ! titleHasHtml && currentTitle != title )
						{
							$heading.contents()[0].data = title;
						}

						$heading.attr( 'aria-expanded', 'false' );
						$heading.attr( 'aria-label', aria_collapsed );
						content.attr( { 'aria-hidden': 'true', tabindex: -1 } );
					}
				});

				setTimeout( function(){ changeTitleAria(); }, 150 );
			}

			function trigger_default_open(hash)
			{
				if( ! hash && window.location.hash )
				{
					hash = window.location.hash;
				}

				if( ! hash )
				{
					return;
				}

				var open = heading.filter('[data-fake-id="' + hash + '"]');

				if( open.length )
				{
					if( ! open.is('.activeTitle') )
					{
						open.trigger('click');
					}

					window.scrollTo(0, container.offset().top - 70);
				}
			}

			changeTitleAria();
			trigger_default_open(false);

			$('a').on( 'click', function()
			{
				var hash = $(this).attr('href');
				if(typeof hash != "undefined" && hash)
				{
					hash = hash.replace( /^.*?#/,'' );
					trigger_default_open( '#' + hash );
				}
			});

		});
	};

}(jQuery));


;

;/* collapseomatic-js-js */
/*!
 * Collapse-O-Matic JavaSctipt v1.7.0
 * https://pluginoven.com/plugins/collapse-o-matic/
 *
 * Copyright 2021, Twinpictures
 */

function collapse_init() {
	//force collapse
	jQuery('.force_content_collapse').each(function(index) {
		jQuery(this).css('display', 'none');
	});

	//inital collapse
	jQuery('.collapseomatic:not(.colomat-close)').each(function(index) {
		var thisid = jQuery(this).attr('id');
		jQuery('#target-'+thisid).css('display', 'none');
	});

	//inital swaptitle for pre-expanded elements
	jQuery('.collapseomatic.colomat-close').each(function(index) {
		var thisid = jQuery(this).attr('id');
		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid );
		}
		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});
	});
}

function swapTitle(origObj, swapObj){
	if(jQuery(origObj).prop("tagName") == 'IMG'){
		var origsrc = jQuery(origObj).prop('src');
		var swapsrc = jQuery(swapObj).prop('src');

		jQuery(origObj).prop('src',swapsrc);
		jQuery(swapObj).prop('src',origsrc);
	}
	else{
		var orightml = jQuery(origObj).html();
		var swaphtml = jQuery(swapObj).html();

		jQuery(origObj).html(swaphtml);
		jQuery(swapObj).html(orightml);

		//is cufon involved? if so, do that thing
		if(swaphtml.indexOf("<cufon") != -1){
			var trigelem = jQuery(this).get(0).tagName;
			Cufon.replace(trigelem);
		}
	}
}

function toggleState (obj, id, maptastic, trig_id) {

	if (maptastic && jQuery('[id^=target][id$='+id+']').hasClass('maptastic') ) {
		jQuery('[id^=target][id$='+id+']').removeClass('maptastic');
	}

	//reset effect and duration to default
	com_effect = com_options.colomatslideEffect;
	com_duration = com_options.colomatduration;

	//effect override
	if( obj.attr('data-animation_effect') ){
		com_effect = obj.attr('data-animation_effect');
	}

	//duration override
	if( obj.attr('data-duration') ){
		com_duration = obj.attr('data-duration');
	}

	//if durration is a number, make it a number
	if( isFinite(com_duration) ){
		com_duration = parseFloat(com_duration);
	}

	//slideToggle
	if(com_effect == 'slideToggle'){
		//jQuery('[id^=target][id$='+id+']').slideToggle(com_duration, function() {
		jQuery('#target-'+id).slideToggle(com_duration, function() {
			// Animation complete.
			if( jQuery(this).hasClass('colomat-inline') && jQuery(this).is(':visible') ){
				jQuery(this).css('display', 'inline');
			}

			//deal with any findme links
			if(trig_id && jQuery('#'+trig_id).is('.find-me.colomat-close')){
				//offset_top = jQuery('#find-'+trig_id).attr('name');
				findme = jQuery('#'+trig_id).attr('data-findme');
				target_offset = jQuery('#'+trig_id).offset();

				if( findme == 'auto' || findme == 'target'){
					target_offset = jQuery('#target-'+trig_id).offset();
				}
				if( findme == 'trigger'){
					target_offset = jQuery('#'+trig_id).offset();
				}
				jQuery('html, body').animate({scrollTop:target_offset.top}, 500);
			}
		});
	}
	//slideFade
	else if(com_effect == 'slideFade'){
		jQuery('#target-'+id).animate({
			height: "toggle",
			opacity: "toggle"
		}, com_duration, function (){
			//Animation complete
			if( jQuery(this).hasClass('colomat-inline') && jQuery(this).is(':visible') ){
				jQuery(this).css('display', 'inline');
			}

			//deal with any findme links
			if(trig_id && jQuery('#'+trig_id).is('.find-me.colomat-close')){
				findme = jQuery('#'+trig_id).attr('data-findme');
				target_offset = jQuery('#'+trig_id).offset();

				if( findme == 'auto' || findme == 'target'){
					target_offset = jQuery('#target-'+trig_id).offset();
				}
				if( findme == 'trigger'){
					target_offset = jQuery('#'+trig_id).offset();
				}
				jQuery('html, body').animate({scrollTop:target_offset.top}, 500);
			}
		});
	}

	//deal with google maps builder resize
	if(jQuery('#'+id).hasClass('colomat-close')){
		jQuery('.google-maps-builder').each(function(index) {
			map = jQuery(".google-maps-builder")[index];
			google.maps.event.trigger(map, 'resize');
		});
	}

	//callback
	if ( typeof colomat_callback != 'undefined' ) {
		colomat_callback();
	}
}

function closeOtherGroups(rel){
	jQuery('.collapseomatic[rel!="' + rel +'"]').each(function(index) {
		//add close class if open
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}
		if(jQuery(this).hasClass('colomat-close') && jQuery(this).attr('rel') !== undefined){
			jQuery(this).removeClass('colomat-close');
			var id = jQuery(this).attr('id');
			//remove parent highlight class
			jQuery('#parent-'+id).removeClass('colomat-parent-highlight');

			//check if the title needs to be swapped out
			if(jQuery("#swap-"+id).length > 0){
				swapTitle(this, "#swap-"+id);
			}

			//check if the excerpt needs to be swapped out
			if(jQuery("#swapexcerpt-"+id).length > 0){
				swapTitle("#exerpt-"+id, "#swapexcerpt-"+id);
			}

			//external triggers
			jQuery('[id^=extra][id$='+id+']').each( function( index ){
				if(jQuery(this).data('swaptitle')){
					old_swap_title = jQuery(this).data('swaptitle');
					old_title = jQuery(this).html();
					jQuery(this).html(old_swap_title);
					jQuery(this).data('swaptitle', old_title);
				}
			});

			toggleState (jQuery(this), id, false, false);

			//check if there are nested children that need to be collapsed
			var ancestors = jQuery('.collapseomatic', '#target-'+id);
			ancestors.each(function(index) {
				jQuery(this).removeClass('colomat-close');
				var thisid = jQuery(this).attr('id');
				jQuery('#target-'+thisid).css('display', 'none');
			})
		}
	});
}

function closeOtherRelMembers(rel, id){
	jQuery('.collapseomatic[rel="' + rel +'"]').each(function(index) {
		closeOtherMembers( this, id);
	});
}

function closeOtherTogMembers(togname, id){
	jQuery('.collapseomatic[data-togglegroup="' + togname +'"]').each(function(index) {
		closeOtherMembers( this, id);
	});
}

function closeOtherMembers(obj, id){
		if(jQuery(obj).hasClass('colomat-expand-only') && jQuery(obj).hasClass('colomat-close')){
			return;
		}

		//add close class if open
		if(jQuery(obj).attr('id') != id && jQuery(obj).hasClass('colomat-close')){
			//collapse the element
			jQuery(obj).removeClass('colomat-close');
			var thisid = jQuery(obj).attr('id');
			//remove parent highlight class
			jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');

			//check if the title needs to be swapped out
			if(jQuery("#swap-"+thisid).length > 0){
				swapTitle(obj, "#swap-"+thisid);
			}

			//check if the excerpt needs to be swapped out
			if(jQuery("#swapexcerpt-"+thisid).length > 0){
				swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
			}

			//external triggers
			jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
				if(jQuery(this).data('swaptitle')){
					old_swap_title = jQuery(this).data('swaptitle');
					old_title = jQuery(this).html();
					jQuery(this).html(old_swap_title);
					jQuery(this).data('swaptitle', old_title);
				}
			});

			//check for snap-shut
			if(!jQuery(obj).hasClass('colomat-close') && jQuery(obj).hasClass('snap-shut')){
				jQuery('#target-'+thisid).hide();
			}
			else{
				toggleState (jQuery(obj), thisid, false, false);
			}

			//check if there are nested children that need to be collapsed
			var ancestors = jQuery('.collapseomatic', '#target-'+id);
			ancestors.each(function(index) {
				if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
					return;
				}
				//deal with extra tirggers
				var pre_id = id.split('-');
				if (pre_id[0].indexOf('extra') != '-1') {
					//console.log('this is an extra trigger');
					pre = pre_id.splice(0, 1);
					id = pre_id.join('-');

					//deal with any scroll to links from the Extra Collapse Trigger
					if(jQuery(this).hasClass('scroll-to-trigger')){
						var target_offset = jQuery('#'+id).offset();
						offset_top = target_offset.top;
					}

					//deal with any scroll to links from the Title Trigger
					if(jQuery('#'+id).hasClass('scroll-to-trigger')){
						offset_top = jQuery('#scrollonclose-'+id).attr('name');
						if (offset_top == 'auto') {
							var target_offset = jQuery('#'+id).offset();
							offset_top = target_offset.top;
						}
					}

					//toggle master trigger arrow
					jQuery('#'+id).toggleClass('colomat-close');

					//toggle any other extra trigger arrows
					jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
				}

				if(jQuery(this).attr('id').indexOf('bot-') == '-1'){
					jQuery(this).removeClass('colomat-close');
					var thisid = jQuery(this).attr('id');
					//check if the title needs to be swapped out
					if(jQuery("#swap-"+thisid).length > 0){
						swapTitle(this, "#swap-"+thisid);
					}
					//check if the excerpt needs to be swapped out
					if(jQuery("#swapexcerpt-"+thisid).length > 0){
						swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
					}
					//external triggers
					jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
						if(jQuery(this).data('swaptitle')){
							old_swap_title = jQuery(this).data('swaptitle');
							old_title = jQuery(this).html();
							jQuery(this).html(old_swap_title);
							jQuery(this).data('swaptitle', old_title);
						}
					});
					jQuery('#target-'+thisid).css('display', 'none');
				}
			})
		}
}

function colomat_expandall(loop_items){
	if (!loop_items){
		loop_items = jQuery('.collapseomatic:not(.colomat-close)');
	}
	loop_items.each(function(index) {
		jQuery(this).addClass('colomat-close');
		var thisid = jQuery(this).attr('id');
		jQuery('#parent-'+thisid).addClass('colomat-parent-highlight');

		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid);
		}

		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}

		//external triggers
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		toggleState(jQuery(this), thisid, true, false);
	});
}

function colomat_collapseall(loop_items){
	if (!loop_items){
		loop_items = jQuery('.collapseomatic.colomat-close');
	}

	loop_items.each(function(index) {
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		jQuery(this).removeClass('colomat-close');
		var thisid = jQuery(this).attr('id');
		jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');

		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid);
		}

		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}

		//external triggers
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		toggleState(jQuery(this), thisid, false, false);

	});
}


jQuery(document).ready(function() {
	com_binding = 'click';
	if (com_options.colomattouchstart) {
		com_binding = 'click touchstart';
	}

	if (com_options.colomatpauseInit) {
		init_pause = setTimeout(collapse_init, com_options.colomatpauseInit);
	}
	else{
		collapse_init();
	}

	//jetpack infinite scroll catch-all
	jQuery( document.body ).on( 'post-load', function () {
		collapse_init();
	} );

	//Display the collapse wrapper... use to reverse the show-all on no JavaScript degredation.
	jQuery('.content_collapse_wrapper').each(function(index) {
		jQuery(this).css('display', 'inline');
	});

	//hover
	jQuery(document).on({
		mouseenter: function(){
			//stuff to do on mouseover
			jQuery(this).addClass('colomat-hover');
		},
		mouseleave: function(){
			//stuff to do on mouseleave
			jQuery(this).removeClass('colomat-hover');
		},
		focusin: function(){
			//stuff to do on keyboard focus
			jQuery(this).addClass('colomat-hover');
		},
		focusout: function(){
			//stuff to do on losing keyboard focus
			jQuery(this).removeClass('colomat-hover');
		}
	}, '.collapseomatic'); //pass the element as an argument to .on

	//tabindex enter
	jQuery(document).on('keypress','.collapseomatic', function(event) {
		if (event.which == 13) {
			event.currentTarget.click();
		};
	});

	//the main collapse/expand function
	jQuery(document.body).on(com_binding, '.collapseomatic', function(event) {
		var offset_top;

		//alert('phones ringin dude');
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		// rel highlander must be one
		if(jQuery(this).attr('rel') && jQuery(this).attr('rel').toString().indexOf('-highlander') != '-1' && jQuery(this).hasClass('must-be-one') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		//toggle group highlander must be one
		if(jQuery(this).data('togglegroup') && jQuery(this).data('togglegroup').toString().indexOf('-highlander') != '-1' && jQuery(this).hasClass('must-be-one') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		var id = jQuery(this).attr('id');

		//deal with any scroll to links
		if(jQuery(this).hasClass('colomat-close') && jQuery(this).hasClass('scroll-to-trigger')){
			offset_top = jQuery('#scrollonclose-'+id).attr('name');
			if (offset_top == 'auto') {
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}
		}

		var id_arr = id.split('-');

		//deal with extra tirggers
		if (id_arr[0].indexOf('extra') != '-1') {
			//console.log('this is an extra trigger');
			pre = id_arr.splice(0, 1);
			id = id_arr.join('-');

			//deal with any scroll to links from the Extra Collapse Trigger
			if(jQuery(this).hasClass('scroll-to-trigger')){
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}

			//deal with any scroll to links from the Title Trigger
			if(jQuery('#'+id).hasClass('scroll-to-trigger')){
				offset_top = jQuery('#scrollonclose-'+id).attr('name');
				if (offset_top == 'auto') {
					var target_offset = jQuery('#'+id).offset();
					offset_top = target_offset.top;
				}
			}

			//toggle master trigger arrow
			jQuery('#'+id).toggleClass('colomat-close');

			//toggle any other extra trigger arrows
			jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
		}

		else if(id.indexOf('bot-') != '-1'){
			id = id.substr(4);
			jQuery('#'+id).toggleClass('colomat-close');

			//deal with any scroll to links from the Internal Collapse Trigger
			if(jQuery(this).hasClass('scroll-to-trigger')){
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}

			//deal with any scroll to links from the Title Trigger
			if(jQuery('#'+id).hasClass('scroll-to-trigger')){
				offset_top = jQuery('#scrollonclose-'+id).attr('name');
				if (offset_top == 'auto') {
					var target_offset = jQuery('#'+id).offset();
					offset_top = target_offset.top;
				}
			}
		}
		else{
			jQuery(this).toggleClass('colomat-close');
			//toggle any extra triggers
			jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
		}

		//check if the title needs to be swapped out
		if(jQuery("#swap-"+id).length > 0){
			swapTitle(jQuery('#'+id), "#swap-"+id);
		}

		//check if the excerpt needs to be swapped out
		if(jQuery("#swapexcerpt-"+id).length > 0){
			swapTitle("#excerpt-"+id, "#swapexcerpt-"+id);
		}

		//external triggers
		jQuery('[id^=extra][id$='+id+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		//add visited class
		jQuery(this).addClass('colomat-visited');

		//toggle parent highlight class
		var parentID = 'parent-'+id;
		jQuery('#' + parentID).toggleClass('colomat-parent-highlight');

		//check for snap-shut
		if(!jQuery(this).hasClass('colomat-close') && jQuery(this).hasClass('snap-shut')){
			jQuery('#target-'+id).hide();
		}
		else{
			toggleState (jQuery(this), id, true, id);
		}

		//deal with grouped items if needed
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel').toString();
			if(rel.indexOf('-highlander') != '-1'){
				closeOtherRelMembers(rel, id);
			}
			else{
				closeOtherGroups(rel);
			}
		}

		if(jQuery(this).data('togglegroup') !== undefined){
			var togname = jQuery(this).data('togglegroup').toString();
			if(togname.indexOf('-highlander') != '-1'){
				closeOtherTogMembers(togname, id);
			}
		}

		if(offset_top){
			jQuery('html, body').animate({scrollTop:offset_top}, 500);
		}
	});


	jQuery(document).on(com_binding, '.expandall', function(event) {
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel');
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)[rel="' + rel +'"]');
		}
		else if(jQuery(this).attr('data-togglegroup') !== undefined){
			var toggroup = jQuery(this).attr('data-togglegroup');
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)[data-togglegroup="' + toggroup +'"]');
		}
		else{
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)');
		}

		colomat_expandall(loop_items);
	});

	jQuery(document).on(com_binding, '.collapseall', function(event) {
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel');
			var loop_items = jQuery('.collapseomatic.colomat-close[rel="' + rel +'"]');
		}
		else if(jQuery(this).attr('data-togglegroup') !== undefined){
			var toggroup = jQuery(this).attr('data-togglegroup');
			var loop_items = jQuery('.collapseomatic.colomat-close[data-togglegroup="' + toggroup +'"]');
		}
		else {
			var loop_items = jQuery('.collapseomatic.colomat-close');
		}

		colomat_collapseall(loop_items);
	});

	//handle new page loads with anchor
	var fullurl = document.location.toString();
	if (fullurl.match('#(?!\!)')) {
		hashmaster(fullurl);
	}

	//handle no-link triggers within the same page
	jQuery(document).on('click', 'a.colomat-nolink', function(event) {
		event.preventDefault();
	});

	//manual hashtag changes in url
	jQuery(window).on('hashchange', function (e) {
		fullurl = document.location.toString();
		if (fullurl.match('#(?!\!)')) {
			hashmaster(fullurl);
		}
	});

	//master url hash funciton
	function hashmaster(fullurl){
		// the URL contains an anchor but not a hash-bang
		if (fullurl.match('#(?!\!)')) {
			// click the navigation item corresponding to the anchor
			var anchor_arr = fullurl.split(/#(?!\!)/);

			if(anchor_arr.length > 1){
				junk = anchor_arr.splice(0, 1);
				anchor = anchor_arr.join('#');
			}
			else{
				anchor = anchor_arr[0];
			}

			if( jQuery('#' + anchor).length ){
				//expand any nested parents
				jQuery('#' + anchor).parents('.collapseomatic_content').each(function(index) {
					parent_arr = jQuery(this).attr('id').split('-');
					junk = parent_arr.splice(0, 1);
					parent = parent_arr.join('-');
					if(!jQuery('#' + parent).hasClass('colomat-close')){
						jQuery('#' + parent).click();
					}
				})
				//now expand the target anchor
				if(!jQuery('#' + anchor).hasClass('colomat-close')){
					jQuery('#' + anchor).click();
				}
			}

			if(typeof colomatoffset !== 'undefined'){
				var anchor_offset = jQuery('#' + anchor).offset();
				colomatoffset = colomatoffset + anchor_offset.top;
				jQuery('html, body').animate({scrollTop:colomatoffset}, 50);
			}

		}
	}
});

;

;/* avia-hamburger-menu-js */
/*
 * Implements the hamburger menu behaviour
 *
 *
 * @since 4.8		moved from avia.js to own file as some user request to customize this feature
 */
(function($)
{
    "use strict";

    $(function()
    {
		$.avia_utilities = $.avia_utilities || {};

		if( 'undefined' == typeof $.avia_utilities.isMobile )
		{
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement )
			{
				$.avia_utilities.isMobile = true;
			}
			else
			{
				$.avia_utilities.isMobile = false;
			}
		}

		//activates the hamburger mobile menu
		avia_hamburger_menu();

		$(window).trigger( 'resize' );

	});

	$.avia_utilities = $.avia_utilities || {};

	function avia_hamburger_menu()
	{
		var header		= $('#header'),
			header_main	= $('#main .av-logo-container'), //check if we got a top menu that is above the header
			menu		= $('#avia-menu'),
			burger_wrap = $('.av-burger-menu-main a'),
			htmlEL  	= $('html').eq(0),
			overlay		= $('<div class="av-burger-overlay" role="menu" aria-orientation="vertical"></div>'),
			overlay_scroll	= $('<div class="av-burger-overlay-scroll"></div>').appendTo(overlay),
			inner_overlay 	= $('<div class="av-burger-overlay-inner"></div>').appendTo(overlay_scroll),
			bgColor 	  	= $('<div class="av-burger-overlay-bg"></div>').appendTo(overlay),
			animating 	  	= false,
			first_level	  	= {},
			logo_container	= $('.av-logo-container .inner-container'),
			menu_in_logo_container = logo_container.find('.main_menu'),
			cloneFirst		= htmlEL.is('.html_av-submenu-display-click.html_av-submenu-clone, .html_av-submenu-display-hover.html_av-submenu-clone'),
			menu_generated 	= false,
			cloned_menu_cnt = 0;

		if( ! htmlEL.hasClass( 'html_av-submenu-hidden' ) )
		{
			htmlEL.addClass( 'html_av-submenu-visible' );
		}

		/**
		 * Check for alternate mobile menu
		 */
		var alternate = $('#avia_alternate_menu');
		if( alternate.length > 0 )
		{
			menu = alternate;
		}

		var	set_list_container_height = function()
			{
				//necessary for ios since the height is usually not 100% but 100% - menu bar which can be requested by window.innerHeight
				if($.avia_utilities.isMobile)
				{
					overlay_scroll.outerHeight(window.innerHeight);
				}
			},
			create_list = function( items , append_to )
			{
				if( ! items )
				{
					return;
				}

				var list, link, current, subitems, megacolumns, sub_current, sub_current_list, new_li, new_ul;

				items.each(function()
				{
					current  = $(this);
					subitems = current.find(' > .sub-menu > li'); //find sublists of a regular defined menu
					if( subitems.length == 0 )
					{
						subitems = current.find(' > .children > li'); //find sublists of a fallback menu
					}
					megacolumns = current.find( '.avia_mega_div > .sub-menu > li.menu-item' );

					//	href = '#': we have a custom link that should not link to something - is also in use by megamenu for titles
					var cur_menu = current.find('>a');
					var clone_events = true;

					if( cur_menu.length )
					{
						if( cur_menu.get(0).hash == '#' || 'undefined' == typeof cur_menu.attr('href') || cur_menu.attr('href') == '#' )
						{
							// eventhandler conflict 'click' by megamenu (returns false) - ignore all handlers
							if( subitems.length > 0 || megacolumns.length > 0 )
							{
								clone_events = false;
							}
						}
					}

					link = cur_menu.clone(clone_events).attr('style','');

						//	megamenus can have '' as url in top menu - allow click event in burger
					if( 'undefined' == typeof cur_menu.attr('href') )
					{
						link.attr( 'href', '#' );
					}

					new_li = $('<li>').append( link );
					new_li.attr( 'role', 'menuitem' );

					//	Copy user set classes for menu items - these must not start with menu-item, page-item, page_item (used by default classes)
					var cls = [];
					if( 'undefined' != typeof current.attr('class') )
					{
						cls = current.attr('class').split(/\s+/);
						$.each( cls, function( index, value ){
										if( ( value.indexOf('menu-item') != 0 ) && ( value.indexOf('page-item') < 0 ) && ( value.indexOf('page_item') != 0 ) && ( value.indexOf('dropdown_ul') < 0 ) )
										{
											//	'current-menu-item' is also copied !!
											new_li.addClass( value );
										}
										return true;
									});
					}

					if( 'undefined' != typeof current.attr('id') && '' != current.attr('id') )
					{
						new_li.addClass(current.attr('id'));
					}
					else
					{
						//	fallback menu has no id -> try to find page id in class
						$.each( cls, function( index, value ){
										if( value.indexOf('page-item-') >= 0 )
										{
											new_li.addClass(value);
											return false;
										}
								});
					}

					append_to.append(new_li);

					if(subitems.length)
					{
						new_ul = $('<ul class="sub-menu">').appendTo(new_li);

						if(cloneFirst && ( link.get(0).hash != '#' && link.attr('href') != '#' ))
						{
							new_li.clone(true).prependTo(new_ul);
						}

						new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');

						create_list( subitems , new_ul);
					}
					else if(megacolumns.length)	//if we got no normal sublists try megamenu columns and sublists
					{
						new_ul = $('<ul class="sub-menu">').appendTo(new_li);

						if(cloneFirst && ( link.get(0).hash != '#' && link.attr('href') != '#' ))
						{
							new_li.clone(true).prependTo(new_ul);
						}

						megacolumns.each(function(iteration)
						{
							var megacolumn		= $(this),
								mega_current  	= megacolumn.find( '> .sub-menu' ),		//	can be 0 if only a column is used without submenus
								mega_title 		= megacolumn.find( '> .mega_menu_title' ),
								mega_title_link = mega_title.find('a').attr('href') || "#",
								current_megas 	= mega_current.length > 0 ? mega_current.find('>li') : null,
								mega_title_set  = false,
								mega_link 		= new_li.find('>a'),
								hide_enty		= '';

							//	ignore columns that have no actual link and no subitems
							if( ( current_megas === null ) || ( current_megas.length == 0 ) )
							{
								if( mega_title_link == '#' )
								{
									hide_enty = ' style="display: none;"';
								}
							}

							if(iteration == 0) new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');

							//if we got a title split up submenu items into multiple columns
							if(mega_title.length && mega_title.text() != "")
							{
								mega_title_set  = true;

								//if we are within the first iteration we got a new submenu, otherwise we start a new one
								if(iteration > 0)
								{
									var check_li = new_li.parents('li').eq(0);

									if(check_li.length) new_li = check_li;

									new_ul = $('<ul class="sub-menu">').appendTo(new_li);
								}


								new_li = $('<li' + hide_enty + '>').appendTo(new_ul);
								new_ul = $('<ul class="sub-menu">').appendTo(new_li);

								$('<a href="'+mega_title_link+'"><span class="avia-bullet"></span><span class="avia-menu-text">' +mega_title.text()+ '</span></a>').insertBefore(new_ul);
								mega_link = new_li.find('>a');

								//	Clone if we have submenus
								if(cloneFirst && ( mega_current.length > 0 ) && ( mega_link.length && mega_link.get(0).hash != '#' && mega_link.attr('href') != '#' ))
								{
									new_li.clone(true).addClass('av-cloned-title').prependTo(new_ul);
								}

							}

								//	do not append av-submenu-indicator if no submenus (otherwise link action is blocked !!!)
							if( mega_title_set && ( mega_current.length > 0 ) )
							{
								new_li.addClass('av-width-submenu').find('>a').append('<span class="av-submenu-indicator">');
							}

							create_list( current_megas , new_ul);
						});

					}

				});

				burger_wrap.trigger( 'avia_burger_list_created' );
				return list;
			};

		var burger_ul, burger;

		//prevent scrolling of outer window when scrolling inside
		$('body').on( 'mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-scroll', function (e)
		{
			var height = this.offsetHeight,
				scrollHeight = this.scrollHeight,
				direction = e.originalEvent.wheelDelta;

			if(scrollHeight != this.clientHeight)
			{
				if( ( this.scrollTop >= (scrollHeight - height) && direction < 0) || (this.scrollTop <= 0 && direction > 0) )
				{
			      e.preventDefault();
			    }
		    }
		    else
		    {
				e.preventDefault();
		    }
		});

		//prevent scrolling for the rest of the screen
		$(document).on( 'mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-bg, .av-burger-overlay-active .av-burger-menu-main', function (e)
		{
			e.preventDefault();
		});

		//prevent scrolling on mobile devices
		var touchPos = {};

		$(document).on('touchstart', '.av-burger-overlay-scroll', function(e)
		{
			touchPos.Y = e.originalEvent.touches[0].clientY;
		});

		$(document).on('touchend', '.av-burger-overlay-scroll', function(e)
		{
			touchPos = {};
		});

		//prevent rubberband scrolling http://blog.christoffer.me/six-things-i-learnt-about-ios-safaris-rubber-band-scrolling/
		$(document).on( 'touchmove', '.av-burger-overlay-scroll', function (e)
		{
			if(!touchPos.Y)
			{
				touchPos.Y = e.originalEvent.touches[0].clientY;
			}

			var	differenceY = e.originalEvent.touches[0].clientY - touchPos.Y,
				element 	= this,
				top 		= element.scrollTop,
				totalScroll = element.scrollHeight,
				currentScroll = top + element.offsetHeight,
				direction	  = differenceY > 0 ? "up" : "down";

			$('body').get(0).scrollTop = touchPos.body;

	        if( top <= 0 )
	        {
	            if( direction == "up" )
				{
					e.preventDefault();
				}

	        }
			else if( currentScroll >= totalScroll )
	        {
	            if( direction == "down" )
				{
					e.preventDefault();
				}
	        }
		});

		$(window).on( 'debouncedresize', function (e)
		{
			var close = true;

			//	@since 4.8.3 we support portrait/landscape screens to switch mobile menu
			if( $.avia_utilities.isMobile && htmlEL.hasClass( 'av-mobile-menu-switch-portrait' ) && htmlEL.hasClass( 'html_text_menu_active' ) )
			{
				var height = $( window ).height();
				var width = $( window ).width();

				if( width <= height )
				{
					//	in portrait mode we only need to remove added class
					htmlEL.removeClass( 'html_burger_menu' );
				}
				else
				{
					//	in landscape mode
					var switch_width = htmlEL.hasClass( 'html_mobile_menu_phone' ) ? 768 : 990;
					if( height < switch_width )
					{
						htmlEL.addClass( 'html_burger_menu' );
						close = false;
					}
					else
					{
						htmlEL.removeClass( 'html_burger_menu' );
					}
				}
			}


			//	close burger menu when returning to desktop
			if( close && burger && burger.length )
			{
				if( ! burger_wrap.is(':visible') )
				{
					burger.filter(".is-active").parents('a').eq(0).trigger('click');
				}
			}

			set_list_container_height();
		});

		//close overlay on overlay click
		$('.html_av-overlay-side').on( 'click', '.av-burger-overlay-bg', function (e)
		{
			e.preventDefault();
			burger.parents('a').eq(0).trigger('click');
		});

		 //close overlay when smooth scrollign begins
		$(window).on('avia_smooth_scroll_start', function()
		{
			if(burger && burger.length)
			{
				burger.filter(".is-active").parents('a').eq(0).trigger('click');
			}
		});


		//toogle hide/show for submenu items
		$('.html_av-submenu-display-hover').on( 'mouseenter', '.av-width-submenu', function (e)
		{
			$(this).children("ul.sub-menu").slideDown('fast');
		});

		$('.html_av-submenu-display-hover').on( 'mouseleave', '.av-width-submenu', function (e)
		{
			$(this).children("ul.sub-menu").slideUp('fast');
		});

		$('.html_av-submenu-display-hover').on( 'click', '.av-width-submenu > a', function (e)
		{
			e.preventDefault();
			e.stopImmediatePropagation();
		});

			//	for mobile we use same behaviour as submenu-display-click
		$('.html_av-submenu-display-hover').on( 'touchstart', '.av-width-submenu > a', function (e)
		{
			var menu = $(this);
			toggle_submenu( menu, e );
		});


		//toogle hide/show for submenu items
		$('.html_av-submenu-display-click').on( 'click', '.av-width-submenu > a', function (e)
		{
			var menu = $(this);
			toggle_submenu( menu, e );
		});


		//	close mobile menu if click on active menu item
		$('.html_av-submenu-display-click, .html_av-submenu-visible').on( 'click', '.av-burger-overlay a', function (e)
		{
			var loc = window.location.href.match(/(^[^#]*)/)[0];
			var cur = $(this).attr('href').match(/(^[^#]*)/)[0];

			if( cur == loc )
			{
				e.preventDefault();
				e.stopImmediatePropagation();

				burger.parents('a').eq(0).trigger('click');
				return false;
			}

			return true;
		});


		function toggle_submenu( menu, e )
		{
			e.preventDefault();
			e.stopImmediatePropagation();

			var parent  = menu.parents('li').eq(0);

			parent.toggleClass('av-show-submenu');

			if(parent.is('.av-show-submenu'))
			{
				parent.children("ul.sub-menu").slideDown('fast');
			}
			else
			{
				parent.children("ul.sub-menu").slideUp('fast');
			}
		};


		(function normalize_layout()
		{
			//if we got the menu outside of the main menu container we need to add it to the container as well
			if( menu_in_logo_container.length )
			{
				return;
			}

			var menu2 = $('#header .main_menu').clone(true),
				ul = menu2.find('ul.av-main-nav'),
				id = ul.attr('id');

			if( 'string' == typeof id && '' != id.trim() )
			{
				ul.attr('id', id + '-' + cloned_menu_cnt++ );
			}
			menu2.find('.menu-item:not(.menu-item-avia-special)').remove();
			menu2.insertAfter(logo_container.find('.logo').first());

			//check if we got social icons and append it to the secondary menu
			var social = $('#header .social_bookmarks').clone(true);
			if( ! social.length )
			{
				social = $('.av-logo-container .social_bookmarks').clone(true);
			}

			if( social.length )
			{
				menu2.find('.avia-menu').addClass('av_menu_icon_beside');
				menu2.append(social);
			}

			//re select the burger menu if we added a new one
			burger_wrap = $('.av-burger-menu-main a');
		}());



		burger_wrap.on('click', function(e)
		{
			if( animating )
			{
				return;
			}

			burger = $(this).find('.av-hamburger'),
			animating = true;

			if(!menu_generated)
			{
				menu_generated = true;
				burger.addClass("av-inserted-main-menu");

				burger_ul = $('<ul>').attr( {id:'av-burger-menu-ul', class:'', 'aria-haspopup': 'true', 'aria-controls': 'menu2'} );
				var first_level_items = menu.find('> li:not(.menu-item-avia-special)'); //select all first level items that are not special items
				var	list = create_list( first_level_items , burger_ul);

				burger_ul.find('.noMobile').remove(); //remove any menu items with the class noMobile so user can filter manually if he wants
				burger_ul.appendTo(inner_overlay);
				first_level = inner_overlay.find('#av-burger-menu-ul > li');

				if($.fn.avia_smoothscroll)
				{
					$('a[href*="#"]', overlay).avia_smoothscroll(overlay);
				}
			}

			if(burger.is(".is-active"))
			{
				burger.removeClass("is-active");
				htmlEL.removeClass("av-burger-overlay-active-delayed");

				overlay.animate({opacity:0}, function()
	    		{
	    			overlay.css({display:'none'});
					htmlEL.removeClass("av-burger-overlay-active");
					animating = false;
	    		});

 			}
			else
			{
				set_list_container_height();

				var offsetTop = header_main.length ? header_main.outerHeight() + header_main.position().top : header.outerHeight() + header.position().top;

				overlay.appendTo($(e.target).parents('.avia-menu'));

				burger_ul.css({padding:( offsetTop ) + "px 0px"});

				first_level.removeClass('av-active-burger-items');

				burger.addClass("is-active");
				htmlEL.addClass("av-burger-overlay-active");
				overlay.css({display:'block'}).animate({opacity:1}, function()
				{
					animating = false;
				});

				setTimeout(function()
				{
					htmlEL.addClass("av-burger-overlay-active-delayed");
				}, 100);

				first_level.each(function(i)
				{
					var _self = $(this);
					setTimeout(function()
					{
						_self.addClass('av-active-burger-items');
					}, (i + 1) * 125);
				});

			}

			e.preventDefault();
		});
	}

})( jQuery );

;

;/* avia-parallax-support-js */
/*
 * Parallax Support
 * @since 5.0			added
 */
(function($)
{
	"use strict";

	$.avia_utilities = $.avia_utilities || {};

    $( function()
    {
		//activate parallax scrolling for background images (sections) and objects.
    	if( $.fn.avia_parallax )
		{
			$( '.av-parallax,.av-parallax-object' ).avia_parallax();
		}
	});

	/**
	 * Object Parallax scrolling feature
	 *
	 *		- horizontal or vertical parallax for objects like images with responsive support
	 *		- background image parallax (up to 5.0 handled by $.AviaParallaxElement) - was used for sections
	 *
	 * @since 5.0
	 * @param {} options
	 * @param {} element
	 */
	var AviaObjectParallaxElement = function( options, element )
	{
		//	do not use in old browsers that do not support this CSS
		if( ! ( this.transform || this.transform3d ) )
		{
			return;
		}

		this.options = $.extend( {}, options );
		this.win = $( window );
		this.body = $( 'body' );
		this.isMobile = $.avia_utilities.isMobile,		//	not defined in constructor
		this.winHeight = this.win.height();
		this.winWidth = this.win.width();
		this.el = $( element ).addClass( 'active-parallax' );
		this.objectType = this.el.hasClass( 'av-parallax-object' ) ? 'object' : 'background-image';
		this.elInner = this.el;							//	container to use for parallax calculation - may be smaller than element e.g. due to position rules
		this.elBackgroundParent = this.el.parent();		//	parent container when 'background-image' parallax
		this.elParallax = this.el.data( 'parallax' ) || {};
		this.direction = '';
		this.speed = 0.5;
		this.elProperty = {};
		this.ticking = false,
		this.isTransformed = false;						//	needed for responsive to reset transform when no parallax !!!

		//	set the browser transition string
		if( $.avia_utilities.supported.transition === undefined )
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports( 'transition' );
		}

		this._init( options );
	};

	AviaObjectParallaxElement.prototype =
	{
		mediaQueries: {
				'av-mini-':		'(max-width: 479px)',
				'av-small-':	'(min-width: 480px) and (max-width: 767px)',
				'av-medium-':	'(min-width: 768px) and (max-width: 989px)',
				'av-desktop-':	'(min-width: 990px)'
		   },

		transform:			document.documentElement.className.indexOf( 'avia_transform' ) !== -1,
		transform3d:		document.documentElement.className.indexOf( 'avia_transform3d' ) !== -1,
		mobileNoAnimation:	$( 'body' ).hasClass( 'avia-mobile-no-animations' ),
		defaultSpeed:		0.5,
		defaultDirections:	[ 'bottom_top', 'left_right', 'right_left', 'no_parallax' ],
		transformCSSProps:	[ 'transform', '-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform' ],
		matrixDef:			[ 1, 0, 0, 1, 0, 0 ],
		matrix3dDef:		[ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],

		_init: function()
		{
			var _self = this;

			//	select inner container if necessary for positioning
			if( typeof this.el.data( 'parallax-selector') != 'undefined' && this.el.data( 'parallax-selector') !== '' )
			{
				this.elInner = this.el.find( this.el.data( 'parallax-selector' ) );
				if( this.elInner.length == 0 )
				{
					this.elInner = this.el;
				}
			}

			if( 'background-image' == this.objectType )
			{
				//	shortcut and exit
				if( this.isMobile && this.mobileNoAnimation )
				{
					return;
				}

				//	by default we slow down
				this.elParallax.parallax = 'bottom_top';
				this.elParallax.parallax_speed = parseFloat( this.el.data( 'avia-parallax-ratio' ) ) || 0.5;
			}

			//fetch window constants
			setTimeout( function()
			{
				_self._fetchProperties();
			}, 30 );

			this.win.on( 'debouncedresize av-height-change', _self._fetchProperties.bind( _self ) );
			this.body.on( 'av_resize_finished', _self._fetchProperties.bind( _self ) );

			//activate the scrolling
			setTimeout( function()
			{
				_self.win.on( 'scroll', _self._onScroll.bind( _self ) );
			}, 100 );
		},

		_setParallaxProps: function()
		{
			if( 'background-image' == this.objectType )
			{
				this.direction = this.elParallax.parallax;
				this.speed = this.elParallax.parallax_speed;
				return;
			}

			var all_direction = this.elParallax.parallax || '',
				all_speed = this.elParallax.parallax_speed || '',
				resp_direction = '',
				resp_speed = '',
				media = 'all';

			if( this.defaultDirections.indexOf( all_direction ) < 0 )
			{
				all_direction = 'no_parallax';
			}

			if( typeof window.matchMedia == 'function' )
			{
				$.each( this.mediaQueries, function( key, query )
				{
					var mql = window.matchMedia( query );
					if( mql.matches )
					{
						media = key;
						return false;
					}
				});
			}

			if( 'all' == media )
			{
				this.direction = all_direction;
				this.speed = '' == all_speed ? this.defaultSpeed : parseFloat( all_speed ) / 100.0;
				return;
			}

			resp_direction = this.elParallax[ media + 'parallax' ] || '';
			resp_speed = this.elParallax[ media + 'parallax_speed' ] || '';

			if( 'inherit' == resp_direction )
			{
				resp_direction = all_direction;
				resp_speed = all_speed;
			}

			if( this.defaultDirections.indexOf( resp_direction ) < 0 )
			{
				resp_direction = 'no_parallax';
			}

			this.direction = resp_direction;
			this.speed = '' == resp_speed ? this.defaultSpeed : parseFloat( resp_speed ) / 100.0;
		},

		_getTranslateObject: function( element )
		{
			//	https://zellwk.com/blog/css-translate-values-in-javascript/
			//	This function might not work properly if stacked transform operations are used - this is a limitation
			var translate = {
						type:	'',
						matrix: [],
						x:		0,
						y:		0,
						z:		0
					};

			$.each( this.transformCSSProps, function( i, prop )
			{
				var found = element.css( prop );

				if( 'string' != typeof found || 'none' == found )
				{
					return;
				}

				if( found.indexOf( 'matrix' ) >= 0 )
				{
					var matrixValues = found.match( /matrix.*\((.+)\)/)[1].split( ', ' );

					if( found.indexOf( 'matrix3d' ) >= 0 )
					{
						translate.type = '3d';
						translate.matrix = matrixValues;

						//	3d have 16 values
						translate.x = matrixValues[12];
						translate.y = matrixValues[13];
						translate.z = matrixValues[14];
					}
					else
					{
						translate.type = '2d';
						translate.matrix = matrixValues;

						//	2d have 6 values
						translate.x = matrixValues[4];
						translate.y = matrixValues[5];
					}

					return false;
				}
				else
				{
					translate.type = '';

					// translateX
					var matchX = found.match( /translateX\((-?\d+\.?\d*px)\)/ );
					if( matchX )
					{
						translate.x = parseInt( matchX[1], 10 );
					}

					// translateY
					var matchY = found.match( /translateY\((-?\d+\.?\d*px)\)/ );
					if( matchY )
					{
						translate.y = parseInt( matchY[1], 10 );
					}
				}
			});

			return translate;
		},

		_getTranslateMatrix: function( translateObj, changes )
		{
			//	matrix( a, b, c, d, tx, ty )
			//	matrix3d( a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1 )
			var matrix = '';

			$.each( changes, function( key, value )
			{
				translateObj[key] = value;
			});

			if( this.transform3d )
			{
				var matrix3d = this.matrix3dDef.slice( 0 );

				switch( translateObj.type )
				{
					case '2d':
						//	2d have 6 values
						matrix3d[0] = translateObj.matrix[0];
						matrix3d[1] = translateObj.matrix[1];
						matrix3d[4] = translateObj.matrix[2];
						matrix3d[5] = translateObj.matrix[3];
						matrix3d[12] = translateObj.x;
						matrix3d[13] = translateObj.y;
						break;
					case '3d':
						//	3d have 16 values
						matrix3d = translateObj.matrix.slice( 0 );
						matrix3d[12] = translateObj.x;
						matrix3d[13] = translateObj.y;
						matrix3d[14] = translateObj.z;
						break;
					default:
						matrix3d[12] = translateObj.x;
						matrix3d[13] = translateObj.y;
						break;
				}

				matrix = 'matrix3d(' + matrix3d.join( ', ' ) + ')';
			}
			else if( this.transform )
			{
				var matrix2d = this.matrixDef.slice( 0 );

				switch( translateObj.type )
				{
					case '2d':
						//	2d have 6 values
						matrix2d = translateObj.matrix.slice( 0 );
						matrix2d[4] = translateObj.x;
						matrix2d[5] = translateObj.y;
						break;
					case '3d':		//	fallback only
						//	3d have 16 values
						matrix2d[0] = translateObj.matrix[0];
						matrix2d[1] = translateObj.matrix[1];
						matrix2d[2] = translateObj.matrix[4];
						matrix2d[3] = translateObj.matrix[5];
						matrix2d[4] = translateObj.x;
						matrix2d[5] = translateObj.y;
						break;
					default:
						matrix2d[4] = translateObj.x;
						matrix2d[5] = translateObj.y;
						break;
				}

				matrix = 'matrix(' + matrix2d.join( ', ' ) + ')';
			}

			return matrix;
		},

		_fetchProperties: function()
		{
			this._setParallaxProps();

			//	unset any added transform styles to get real CSS position before apply parallax transforms again
			this.el.css( $.avia_utilities.supported.transition + 'transform', '' );

			//	cache values that only change on resize of viewport
			this.winHeight = this.win.height();
			this.winWidth = this.win.width();

			if( 'background-image' == this.objectType )
			{
				//	special case where we have a div with background image
				this.elProperty.top = this.elBackgroundParent.offset().top;
				this.elProperty.height = this.elBackgroundParent.outerHeight();

				//	set the height of the element based on the windows height, offset ratio and parent height
				this.el.height( Math.ceil( ( this.winHeight * Math.abs( this.speed ) ) + this.elProperty.height ) );
			}
			else
			{
				this.elProperty.top = this.elInner.offset().top;
				this.elProperty.left = this.elInner.offset().left;
				this.elProperty.height = this.elInner.outerHeight();
				this.elProperty.width = this.elInner.outerWidth();
				this.elProperty.bottom = this.elProperty.top + this.elProperty.height;
				this.elProperty.right = this.elProperty.left + this.elProperty.width;

				this.elProperty.distanceLeft = this.elProperty.right;
				this.elProperty.distanceRight = this.winWidth - this.elProperty.left;
			}

			//	Save original position of element relative to container
			this.elProperty.translateObj = this._getTranslateObject( this.el );

			//re-position the element
			this._parallaxScroll();
		},

		_onScroll: function( e )
		{
			var _self = this;

			if( ! _self.ticking )
			{
				_self.ticking = true;
				window.requestAnimationFrame( _self._parallaxRequest.bind( _self ) );
			}
		},

		_inViewport: function( elTop, elRight, elBottom, elLeft, winTop, winBottom, winLeft, winRight )
		{
			//	add a few pixel to be on safe side
			return ! ( elTop > winBottom + 10 || elBottom < winTop - 10 || elLeft > winRight + 10 || elRight < winLeft - 10 );
		},

		_parallaxRequest: function( e )
		{
			//	https://stackoverflow.com/questions/47184298/why-is-it-recommend-to-nest-settimeout-in-requestanimationframe-when-scheduling
			var _self = this;
			setTimeout( _self._parallaxScroll.bind( _self ), 0 );
		},

		_parallaxScroll: function( e )
		{
			//	shortcut
			if( ( 'no_parallax' == this.direction || '' == this.direction ) && ! this.isTransformed )
			{
				this.ticking = false;
				return;
			}

			var winTop = this.win.scrollTop(),
				winLeft = this.win.scrollLeft(),
				winRight = winLeft + this.winWidth,
				winBottom = winTop + this.winHeight,
				scrollPos = 0,
				matrix = '';

			//	special case where we have a div with background image - 'bottom_top'
			if( 'background-image' == this.objectType )
			{
				//	shift element when it moves into viewport
				if( this.elProperty.top < winBottom && winTop <= this.elProperty.top + this.elProperty.height )
				{
					scrollPos = Math.ceil( ( winBottom - this.elProperty.top ) * this.speed );
					matrix = this._getTranslateMatrix( this.elProperty.translateObj, { y: scrollPos } );

					this.el.css( $.avia_utilities.supported.transition + 'transform', matrix );
				}

				this.ticking = false;
				return;
			}

			//	reset and shortcut
			if( ( 'no_parallax' == this.direction || '' == this.direction ) )
			{
				matrix = this._getTranslateMatrix( this.elProperty.translateObj, { x: 0, y: 0  } );
				this.el.css( $.avia_utilities.supported.transition + 'transform', matrix );

				this.ticking = false;
				this.isTransformed = false;
				return;
			}

			//	Get current coordinates for element
			var scroll_px_toTop = Math.ceil( this.elProperty.top - winTop ),
				scroll_px_el = Math.ceil( winBottom - this.elProperty.top ),
				scrolled_pc_toTop = 0,
				reduceDistanceX = 0,
				transform = { x: 0, y: 0 };

			//	if element is initially in viewport on unscrolled screen we leave it and reduce distance to move
			if( this.elProperty.top < this.winHeight )
			{
				reduceDistanceX = Math.ceil( this.winHeight - this.elProperty.top );
			}

			//	Calculate transform value
			if( this.elProperty.top > winBottom )
			{
				// element below viewport
				scrolled_pc_toTop = 0;
				scroll_px_el = 0;
			}
			else
			{
				//	container is inside viewport or above ( scroll_px_toTop is negative)
				scrolled_pc_toTop = 1 - ( scroll_px_toTop + reduceDistanceX ) / this.winHeight;
			}

			switch( this.direction )
			{
				case 'bottom_top':
					scrollPos = Math.ceil( ( scroll_px_el - reduceDistanceX ) * this.speed );
					transform.y = -scrollPos;
					matrix = this._getTranslateMatrix( this.elProperty.translateObj, { y: -scrollPos } );
					break;
				case 'left_right':
					scrollPos = Math.ceil( this.elProperty.distanceRight * scrolled_pc_toTop * this.speed );
					transform.x = scrollPos;
					matrix = this._getTranslateMatrix( this.elProperty.translateObj, { x: scrollPos } );
					break;
				case 'right_left':
					scrollPos = Math.ceil( this.elProperty.distanceLeft * scrolled_pc_toTop * this.speed );
					transform.x = -scrollPos;
					matrix = this._getTranslateMatrix( this.elProperty.translateObj, { x: -scrollPos } );
					break;
				default:
					break;
			}

			var elInViewport = this._inViewport( this.elProperty.top, this.elProperty.right, this.elProperty.bottom, this.elProperty.left, winTop, winBottom, winLeft, winRight ),
				transformedInViewport = this._inViewport( this.elProperty.top + transform.y, this.elProperty.right + transform.x, this.elProperty.bottom + transform.y, this.elProperty.left + transform.x, winTop, winBottom, winLeft, winRight );

			if( elInViewport || transformedInViewport )
			{
				this.el.css( $.avia_utilities.supported.transition + 'transform', matrix );
			}

			this.ticking = false;
			this.isTransformed = true;
		}
	};

	/**
	 * Wrapper to avoid double initialization of object
	 *
	 * @param {} options
	 */
	$.fn.avia_parallax = function( options )
	{

//		if( window.location.search.includes('new-parallax') ) //for testing 2 versions in 2 browser windows
//		{
//			return this;
//		}

		return this.each( function()
		{
			var obj = $( this );
			var self = obj.data( 'aviaParallax' );

			if( ! self )
			{
				self = obj.data( 'aviaParallax', new AviaObjectParallaxElement( options, this ) );
			}
		});
	};

})( jQuery );

;

;/* avia-fold-unfold-js */
/*
 * Support to fold/unfold various elements:
 *		- Textblock
 *		- Grid Row
 *		- Sections
 *
 *	HTML for fold container is placed before section to fold. This section is moved inside with js in init()
 *
 * @since 5.6			added
 * @by Günter
 */

"use strict";

//	global namespace
var avia_js_shortcodes = avia_js_shortcodes || {};
var aviaJS = aviaJS || {};

(function()
{
	if( ! avia_js_shortcodes.aviaFoldUnfoldSection )
	{
		class avFoldUnfoldSection
		{
			container = null;		//	container element
			id = '';
			settings = {};
			button = [];
			foldContainer = [];
			folded = false;
			preview = false;
			innerDimension = {};

			//	element specific data
			textblock = [];
			multiColumsTextblock = false;
			gridRow = [];
			colorSection = [];
			column = [];

			constructor( container )
			{
				this.container = container;
				this.container.avFoldUnfoldSection = this;
				this.id = container.getAttribute('id');

				this.init();
			}

			init()
			{
				this.settings = JSON.parse( this.container.dataset.fold_unfold );
				this.preview = document.getElementById( 'av-admin-preview' ) != null;

				this.moveIntoFoldContainer();

				//	fallback due to missing containers
				if( ! this.button.length || ! this.foldContainer.length || this.checkMissingInnerContainers() )
				{
					return;
				}

				/**
				 * Currently we do not allow nesting.
				 * Remove this to check if we can allow it on complex pages
				 */
				if( this.isNested() )
				{
					this.container.classList.remove( 'avia-fold-init' );
					this.foldContainer[0].classList.remove( 'unfolded', 'folded' );
					this.foldContainer[0].style['max-height'] = 'unset';
					this.button[0].remove();
					return;
				}

				//	ensure initially folded (max-height should be set by post css to avoid jumping of content)
				this.foldContainer[0].style['max-height'] = this.settings.height + 'px';
				this.foldContainer[0].classList.add( 'folded' );
				this.foldContainer[0].classList.remove( 'unfolded' );
				this.folded = true;

				this.container.classList.add( 'avia-fold-init-done' );

				this.getMaxHeight();
				this.foldChanged();
				this.bindEvents();

				this.container.classList.remove( 'avia-fold-init' );
			}

			moveIntoFoldContainer()
			{
				// query child nodes to allow nested elements (e.g. textblock)
				if( this.container.hasChildNodes() )
				{
					let children = this.container.childNodes;
					for( const child of children )
					{
						if( child.classList )
						{
							if( child.classList.contains( 'av-fold-unfold-container' ) )
							{
								this.foldContainer[0] = child;
							}

							if( child.classList.contains( 'av-fold-button-wrapper' ) )
							{
								const btn = child.getElementsByClassName( 'av-fold-button-container' );
								if( btn.length )
								{
									this.button[0] = btn[0];
								}
							}
						}
					}
				}

				let move = null;

				if( this.settings.context == 'avia_sc_text' )
				{
					let el = this.foldContainer[0].nextSibling;

					while( el )
					{
						if( el.classList && el.classList.contains( 'avia_textblock' ) )
						{
							move = el;
							break;
						}

						el = el.nextSibling;
					}
				}
				else if( this.settings.context == 'avia_sc_columns' )
				{
					let el = this.foldContainer[0].nextSibling;
					this.column = this.foldContainer[0].getElementsByClassName( 'av-fold-unfold-inner' );

					if( this.column.length )
					{
						while( el )
						{
							if( el.classList && el.classList.contains( 'av-fold-button-wrapper' ) )
							{
								el = el.nextSibling;
							}
							else
							{
								const next = el.nextSibling;
								this.column[0].append( el );
								el = next;
							}
						}
					}
				}
				else
				{
					const el = this.container.nextSibling;
					if( el )
					{
						move = el;
					}
				}

				if( move )
				{
					this.foldContainer[0].append( move );
				}
			}

			checkMissingInnerContainers()
			{
				let retVal = false;

				switch( this.settings.context )
				{
					case 'avia_sc_text':
						this.textblock = this.container.getElementsByClassName( 'avia_textblock' );

						if( this.textblock.length == 0 )
						{
							retVal = true;
						}
						else
						{
							this.multiColumsTextblock = this.textblock[0].classList.contains( 'av_multi_colums' );
						}
						break;
					case 'avia_sc_grid_row':
						this.gridRow = this.container.getElementsByClassName( 'av-layout-grid-container' );

						if( this.gridRow.length == 0 )
						{
							retVal = true;
						}
						break;
					case 'avia_sc_section':
						this.colorSection = this.container.getElementsByClassName( 'avia-section' );

						if( this.colorSection.length == 0 )
						{
							retVal = true;
						}
						break;
					case 'avia_sc_columns':
						if( ! this.column[0].childNodes.length )
						{
							retVal = true;
						}
						break;
					default:
						//	if we encounter a not supported container we ignore it
						retVal = true;
				}

				return retVal;
			}

			isNested()
			{
				const parent = this.container.parentElement;

				if( null == parent )
				{
					return false;
				}

				let closest = parent.closest( '.avia-fold-unfold-section' );

				if( closest == parent )
				{
					closest = null;
				}
				return closest != null;
			}

			bindEvents()
			{
				this.container.addEventListener( 'transitionend', this.onTransitionEnd.bind( this ) );
				this.container.addEventListener( 'webkitTransitionEnd', this.onTransitionEnd.bind( this ) );

				this.button[0].addEventListener( 'click', this.onClickFoldUnfold.bind( this ) );
				window.addEventListener( 'avia_fold_unfold_changed', this.onFoldUnfoldChanged.bind( this ) );
				window.addEventListener( 'resize', aviaJS.aviaJSHelpers.debounce( this.onResize.bind( this ), 200 ) );
			}

			getMaxHeight()
			{
				switch( this.settings.context )
				{
					case 'avia_sc_text':
						this.innerDimension = this.textblock[0].getBoundingClientRect();
						break;
					case 'avia_sc_grid_row':
						this.innerDimension = this.gridRow[0].getBoundingClientRect();
						break;
					case 'avia_sc_section':
						this.innerDimension = this.colorSection[0].getBoundingClientRect();
						break;
					case 'avia_sc_columns':
						this.innerDimension = this.column[0].getBoundingClientRect();
						break;
				}
			}

			foldChanged()
			{
				let btnText = '',
					btnLink = '';

				if( this.folded )
				{
					this.foldContainer[0].style['max-height'] = this.settings.height + 'px';
					btnText = this.settings.more;
					btnLink = '#';
				}
				else
				{
					this.getMaxHeight();

					// add some extra space to be on the safe side
					this.foldContainer[0].style['max-height'] = Math.ceil( this.innerDimension.height ) + 200 + 'px';
					btnText = this.settings.less;
					btnLink += '#' + this.id;
				}

				this.button[0].setAttribute( 'href', btnLink );
				this.button[0].textContent = btnText;

				this.triggerHeightChange();
			}

			onClickFoldUnfold( event )
			{
				event.preventDefault();
				event.stopPropagation();

				if( this.foldContainer[0].classList.contains( 'folded' ) )
				{
					this.foldContainer[0].classList.remove( 'folded' );
					this.foldContainer[0].classList.add( 'unfolded' );
					this.folded = false;
				}
				else
				{
					this.foldContainer[0].classList.remove( 'unfolded' );
					this.foldContainer[0].classList.add( 'folded' );
					this.folded = true;
				}

				this.foldChanged();

				let obj = this;

				setTimeout( function()
				{
					const opt = {
								'bubbles':		true,
								'cancelable':	true,
								detail:			{ caller: obj }
							};

					const event = new CustomEvent( 'avia_fold_unfold_changed', opt );
					obj.container.dispatchEvent( event );
				}, 500 );
			}

			onTransitionEnd( event )
			{
				//	removes max-height to allow smooth expanding on page load
				this.container.classList.remove( 'avia-fold-init-done' );

				this.triggerHeightChange();
			}

			onResize( event )
			{
				this.foldChanged();
			}

			onFoldUnfoldChanged( event )
			{
				this.foldChanged();
			}

			triggerHeightChange()
			{
				const opt = {
							'bubbles':		true,
							'cancelable':	true
						};

				const event = new CustomEvent( 'avia_height_change', opt );
				window.dispatchEvent( event );
			}
		}

		//	class factory
		avia_js_shortcodes.aviaFoldUnfoldSection = function( container )
		{
			return new avFoldUnfoldSection( container );
		};

		aviaJS.aviaPlugins.register( avia_js_shortcodes.aviaFoldUnfoldSection, '.avia-fold-unfold-section' );
	}

})();

;

;/* avia-popup-js-js */
/*! Magnific Popup - v1.3 - 2022-09-14
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(e){var t,i,n,o,a,r,s="Close",l="BeforeClose",c="MarkupParse",d="Open",p="Change",u="mfp",f="."+u,m="mfp-ready",g="mfp-removing",v="mfp-prevent-close",h=function(){},y=!!window.jQuery,C=e(window),b=function(e,i){t.ev.on(u+e+f,i)},w=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},I=function(e,i){t.ev.triggerHandler(u+e,i),t.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),t.st.callbacks[e]&&t.st.callbacks[e].apply(t,Array.isArray(i)?i:[i]))},x=function(i){return i===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=i),t.currTemplate.closeBtn},k=function(){e.magnificPopup.instance||((t=new h).init(),e.magnificPopup.instance=t)};h.prototype={constructor:h,init:function(){var i=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document),t.popupsCache={}},open:function(i){var o;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var r,s=i.items;for(o=0;o<s.length;o++)if((r=s[o]).parsed&&(r=r.el[0]),r===i.el[0]){t.index=o;break}}else t.items=Array.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(!t.isOpen){t.types=[],a="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=n,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=w("bg").on("click"+f,(function(){t.close()})),t.wrap=w("wrap").attr("tabindex",-1).on("click"+f,(function(e){t._checkIfClose(e.target)&&t.close()})),t.container=w("container",t.wrap)),t.contentContainer=w("content"),t.st.preloader&&(t.preloader=w("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var p=l[o];p=p.charAt(0).toUpperCase()+p.slice(1),t["init"+p].call(t)}I("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(b(c,(function(e,t,i,n){i.close_replaceWith=x(n.type)})),a+=" mfp-close-btn-in"):t.wrap.append(x())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:C.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:n.height(),position:"absolute"}),t.st.enableEscapeKey&&n.on("keyup"+f,(function(e){27===e.keyCode&&t.close()})),C.on("resize"+f,(function(){t.updateSize()})),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=C.height(),g={};if(t.fixedContentPos&&t._hasScrollBar(u)){var v=t._getScrollbarSize();v&&(g.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var h=t.st.mainClass;return t.isIE7&&(h+=" mfp-ie7"),h&&t._addClassToMFP(h),t.updateItemHTML(),I("BuildControls"),e("html").css(g),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout((function(){t.content?(t._addClassToMFP(m),t._setFocus()):t.bgOverlay.addClass(m),n.on("focusin"+f,t._onFocusIn)}),16),t.isOpen=!0,t.updateSize(u),I(d),i}t.updateItemHTML()},close:function(){t.isOpen&&(I(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(g),setTimeout((function(){t._close()}),t.st.removalDelay)):t._close())},_close:function(){I(s);var i=g+" "+m+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}n.off("keyup.mfp focusin"+f),t.ev.off(f),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).trigger("focus"),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,I("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||C.height();t.fixedContentPos||t.wrap.css("height",t.wH),I("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(I("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var a=!!t.st[n]&&t.st[n].markup;I("FirstMarkupParse",a),t.currTemplate[n]=!a||e(a)}o&&o!==i.type&&t.container.removeClass("mfp-"+o+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,I(p,i),o=i.type,t.container.prepend(t.contentContainer),I("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(x()):t.content=e:t.content="",I("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n,o=t.items[i];if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){n=a[r];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||t.st.type||"inline",o.index=i,o.parsed=!0,t.items[i]=o,I("ElementParse",o),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if("function"==typeof a){if(!a.call(t))return!0}else if(C.width()<a)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};I("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",(function(e){e.stopImmediatePropagation()})),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass(v)){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?n.height():document.body.scrollHeight)>(e||C.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).trigger("focus")},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return t._setFocus(),!1},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),I(c,[t,i,n]),e.each(i,(function(i,n){if(void 0===n||!1===n)return!0;if((o=i.split("_")).length>1){var a=t.find(f+"-"+o[0]);if(a.length>0){var r=o[1];"replaceWith"===r?a[0]!==n[0]&&a.replaceWith(n):"img"===r?a.is("img")?a.attr("src",n):a.replaceWith(e("<img>").attr("src",n).attr("class",a.attr("class"))):a.attr(o[1],n)}}else t.find(f+"-"+i).html(n)}))},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(t,i){return k(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(i){k();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=y?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),y?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var T,_,z,P="inline",S=function(){z&&(_.after(z.addClass(T)).detach(),z=null)};e.magnificPopup.registerModule(P,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(P),b(s+"."+P,(function(){S()}))},getInline:function(i,n){if(S(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(_||(T=o.hiddenClass,_=w(T),T="mfp-"+T),z=a.after(_).detach().removeClass(T)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var E,O="ajax",M=function(){E&&e(document.body).removeClass(E)},B=function(){M(),t.req&&t.req.abort()};e.magnificPopup.registerModule(O,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(O),E=t.st.ajax.cursor,b(s+"."+O,B),b("BeforeChange."+O,B)},getAjax:function(i){E&&e(document.body).addClass(E),t.updateStatus("loading");var n=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};I("ParseAjax",r),t.appendContent(e(r.data),O),i.finished=!0,M(),t._setFocus(),setTimeout((function(){t.wrap.addClass(m)}),16),t.updateStatus("ready"),I("AjaxContentAdded")},error:function(){M(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(n),""}}});var A,L=function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var i=t.st.image.titleSrc;if(i){if("function"==typeof i)return i.call(t,e);if(e.el)return e.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=t.st.image,n=".image";t.types.push("image"),b(d+n,(function(){"image"===t.currItem.type&&i.cursor&&e(document.body).addClass(i.cursor)})),b(s+n,(function(){i.cursor&&e(document.body).removeClass(i.cursor),C.off("resize"+f)})),b("Resize"+n,t.resizeImage),t.isLowIE&&b("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,A&&clearInterval(A),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){A&&clearInterval(A),A=setInterval((function(){n.naturalWidth>0?t._onImageHasSize(e):(i>200&&clearInterval(A),3===++i?o(10):40===i?o(50):100===i&&o(500))}),a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,I("ImageLoadComplete")):++o<200?setTimeout(a,100):r())},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");if(c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,e("body").hasClass("responsive-images-lightbox-support")){var d=i.el.data("srcset"),p=i.el.data("sizes");void 0!==d?(c.srcset=d,void 0!==p&&(c.sizes=p)):(void 0!==(d=i.el.find("img").attr("srcset"))&&(c.srcset=d),void 0!==(p=i.el.find("img").attr("sizes"))&&(c.sizes=p))}l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return t._parseMarkup(n,{title:L(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(A&&clearInterval(A),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var H;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,n=".zoom";if(i.enabled&&t.supportsTransition){var o,a,r=i.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,t.css(o),t},d=function(){t.content.css("visibility","visible")};b("BuildControls"+n,(function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void d();(a=c(e)).css(t._getOffset()),t.wrap.append(a),o=setTimeout((function(){a.css(t._getOffset(!0)),o=setTimeout((function(){d(),setTimeout((function(){a.remove(),e=a=null,I("ZoomAnimationEnded")}),16)}),r)}),16)}})),b(l+n,(function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=c(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout((function(){a.css(t._getOffset())}),16)}})),b(s+n,(function(){t._allowZoom()&&(d(),a&&a.remove(),e=null)}))}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var n,o=(n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(y?n.innerHeight():n[0].offsetHeight)-r-a};return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var F="iframe",j=function(e){if(t.currTemplate[F]){var i=t.currTemplate[F].find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen allow="autoplay; encrypted-media" ></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(F),b("BeforeChange",(function(e,t,i){t!==i&&(t===F?j():i===F&&j(!0))})),b(s+"."+F,(function(){j()}))},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,(function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1}));var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var N=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},W=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,o=".mfp-gallery";if(t.direction=!0,!i||!i.enabled)return!1;a+=" mfp-gallery",b(d+o,(function(){i.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",(function(){if(t.items.length>1)return t.next(),!1})),n.on("keydown"+o,(function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()}))})),b("UpdateStatus"+o,(function(e,i){i.text&&(i.text=W(i.text,t.currItem.index,t.items.length))})),b(c+o,(function(e,n,o,a){var r=t.items.length;o.counter=r>1?W(i.tCounter,a.index,r):""})),b("BuildControls"+o,(function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(v),a=t.arrowRight=e(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(v);o.on("click",(function(){t.prev()})),a.on("click",(function(){t.next()})),t.container.append(o.add(a))}})),b(p+o,(function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout((function(){t.preloadNearbyImages(),t._preloadTimeout=null}),16)})),b(s+o,(function(){n.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=N(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=N(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=N(i),!t.items[i].preloaded){var n=t.items[i];if(n.parsed||(n=t.parseEl(i)),I("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",(function(){n.hasSize=!0})).on("error.mfploader",(function(){n.hasSize=!0,n.loadError=!0,I("LazyLoadError",n)})).attr("src",n.src),e("body").hasClass("responsive-images-lightbox-support")&&n.el.length>0)){var o=e(n.el[0]),a=o.data("srcset"),r=o.data("sizes");if(void 0!==a)n.img.attr("srcset",a),void 0!==r&&n.img.attr("sizes",r);else{var s=e(n.el[0]).find("img");void 0!==(a=s.attr("srcset"))&&n.img.attr("srcset",a),void 0!==(r=s.attr("sizes"))&&n.img.attr("sizes",r)}}n.preloaded=!0}}}});var R="retina";e.magnificPopup.registerModule(R,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,(function(e){return"@2x"+e}))},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(b("ImageHasSize."+R,(function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})})),b("ElementParse."+R,(function(t,n){n.src=e.replaceSrc(n,i)})))}}}}),k()}(jQuery);
;

;/* avia-lightbox-activation-js */
(function($)
{
    "use strict";

	// -------------------------------------------------------------------------------------------
	// Ligthbox activation
	// -------------------------------------------------------------------------------------------

	$.avia_utilities = $.avia_utilities || {};

	$.avia_utilities.av_popup = {
			type: 				 'image',
			mainClass: 			 'avia-popup mfp-zoom-in',
			tLoading: 			 '',
			tClose: 			 '',
			removalDelay: 		 300, //delay removal by X to allow out-animation
			closeBtnInside: 	 true,
			closeOnContentClick: false,
			midClick: 			 true,
			autoFocusLast: 		 false, // false, prevents issues with accordion slider
			fixedContentPos: 	 $('html').hasClass('av-default-lightbox-no-scroll'), // allows scrolling when lightbox is open but also removes any jumping because of scrollbar removal
			iframe: {
			    patterns: {
			        youtube: {
						index: 'youtube.com/watch',
			            id: function(url) {
						let m = url.match(/[\\?\\&]v=([^\\?\\&]+)/),
							id,
							params;

							if( ! m || ! m[1] )
							{
								return null;
							}

							id = m[1];

							params = url.split('/watch');
							params = params[1];

							return id + params;
			            },
						src: '//www.youtube.com/embed/%id%'
			        },
					youtube_shorts: {
						index: 'youtube.com/shorts',
						id: function(url) {
							let m = url.match(/(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]*)/),
								id,
								params;

							if( ! m || ! m[1] )
							{
								return null;
							}

							id = m[1];

							params = url.split('/shorts');
							params = params[1];

							return id + params;
						},
						src: '//www.youtube.com/embed/%id%'
			        },
					vimeo: {
						index: 'vimeo.com/',
						id: function(url) {
							let m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})\/(\w{6,11})[?]?.*/),
								params,
								vid;

                            m = m ? m : url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);

							if( ! m || ! m[5] )
							{
								return null;
							}

							vid = m[5];

                            params = url.split('?');
						    params = params[1] ? "?" + params[1] : "";

                            if(m[6])
                            {
                                vid = vid + (params ? params + "&h=" : "?h=") + m[6];
                            } else {
                                vid = vid + params;
                            }

    						return vid;
						},
						src: '//player.vimeo.com/video/%id%'
					}
				}
			},
			image: {
			    titleSrc: function( item )
						{
							var title = item.el.attr('title');
							if( ! title )
							{
								title = item.el.find('img').attr('title');
							}
							if( ! title )
							{
								title = item.el.parent().next( '.wp-caption-text' ).html();
							}
							if( typeof title != "undefined" )
							{
								return title;
							}

							if( ! $( 'body' ).hasClass( 'avia-mfp-show-alt-text' ) )
							{
								return '';
							}

							//	@since 4.7.6.2 check for alt attribute
							var alt = item.el.attr('alt');
							if( typeof alt != "undefined" )
							{
								return alt;
							}

							alt = item.el.find('img').attr('alt');
							if( typeof alt != "undefined" )
							{
								return alt;
							}

							return '';
						}
			},

			gallery: {
				// delegate: 	options.autolinkElements,
				tPrev:		'',
				tNext:		'',
				tCounter:	'%curr% / %total%',
				enabled:	true,
				preload:	[1,1] // Will preload 1 - before current, and 1 after the current image
			},

			callbacks:
			{
				beforeOpen: function()
				{
					//add custom css class for different styling
					if( this.st.el && this.st.el.data('fixed-content') )
					{
						this.fixedContentPos = true;
					}

					let elementCustomClass = '';

					if( this.st.el && this.st.el.data('custom_class') )
					{
						elementCustomClass = this.st.el.data('custom_class').trim();
					}
					else if( this.st.el )
					{
						let element = $( this.st.el ),
							href = element.attr( 'href' );

						if( ( href.indexOf( 'youtube.com' ) >= 0 ) && ( href.indexOf( '/shorts/' ) >= 0 ) )
						{
							elementCustomClass = 'avia-mfp-is-video avia-mfp-video-9-16';
						}
					}

					if( elementCustomClass )
					{
						this.st.mainClass += ' ' + elementCustomClass;
					}
				},

				open: function()
				{
					//overwrite default prev + next function. Add timeout for  crossfade animation
					$.magnificPopup.instance.next = function()
					{
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					};

					$.magnificPopup.instance.prev = function()
					{
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					};

					//add custom css class for different styling
					if( this.st.el && this.st.el.data('av-extra-class') )
					{
						this.wrap.addClass( this.currItem.el.data('av-extra-class') );
					}

					this.wrap.avia_swipe_trigger( {prev:'.mfp-arrow-left', next:'.mfp-arrow-right'} );
				},

				markupParse: function( template, values, item )
				{
					if( typeof values.img_replaceWith == 'undefined' || typeof values.img_replaceWith.length == 'undefined' || values.img_replaceWith.length == 0 )
					{
						return;
					}

					var img = $( values.img_replaceWith[0] );

					if( typeof img.attr( 'alt' ) != 'undefined' )
					{
						return;
					}

					var alt = item.el.attr( 'alt' );
					if( typeof alt == "undefined" )
					{
						alt = item.el.find('img').attr('alt');
					}

					if( typeof alt != "undefined" )
					{
						img.attr( 'alt', alt );
					}

					return;
				},

				imageLoadComplete: function()
				{
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				},

				change: function()
				{
				    if( this.currItem.el )
				    {
					    var current = this.currItem.el;

					    this.content.find( '.av-extra-modal-content, .av-extra-modal-markup' ).remove();

					    if( current.data('av-extra-content') )
					    {
						    var extra = current.data('av-extra-content');
						    this.content.append( "<div class='av-extra-modal-content'>" + extra + "</div>" );
					    }

					    if( current.data('av-extra-markup') )
					    {
						    var markup = current.data('av-extra-markup');
						    this.wrap.append( "<div class='av-extra-modal-markup'>" + markup + "</div>"  );
					    }
				    }
				}
			}
		};

	$.fn.avia_activate_lightbox = function(variables)
	{

		var defaults = {
			groups			:	['.avia-slideshow', '.avia-gallery', '.av-horizontal-gallery', '.av-instagram-pics', '.portfolio-preview-image', '.portfolio-preview-content', '.isotope', '.post-entry', '.sidebar', '#main', '.main_menu', '.woocommerce-product-gallery'],
			autolinkElements:   'a.lightbox, a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=webp], a[href$=png], a[href$=gif], a[href$=jpeg], a[href*=".jpg?"], a[href*=".png?"], a[href*=".gif?"], a[href*=".jpeg?"], a[href$=".mov"] , a[href$=".swf"] , a:regex(href, .vimeo\.com/[0-9]) , a[href*="youtube.com/watch"] , a[href*="youtube.com/shorts"] , a[href*="screenr.com"], a[href*="iframe=true"]',
			videoElements	: 	'a[href$=".mov"] , a[href$=".swf"] , a:regex(href, .vimeo\.com/[0-9]) , a[href*="youtube.com/watch"] , a[href*="youtube.com/shorts"] , a[href*="screenr.com"], a[href*="iframe=true"]',
			exclude			:	'.noLightbox, .noLightbox a, .fakeLightbox, .lightbox-added, a[href*="dropbox.com"], .pagination a'
		},

		options = $.extend({}, defaults, variables),

		active = ! $('html').is('.av-custom-lightbox');

		if( ! active)
		{
			return this;
		}

		return this.each(function()
		{
			var container	= $(this),
				videos		= $(options.videoElements, this).not(options.exclude).addClass('mfp-iframe'), /*necessary class for the correct lightbox markup*/
				ajaxed		= ! container.is('body') && ! container.is('.ajax_slide');
				for( var i = 0; i < options.groups.length; i++ )
				{
					container.find(options.groups[i]).each(function()
					{
						var links = $(options.autolinkElements, this);

						if( ajaxed )
						{
							links.removeClass('lightbox-added');
						}

						links.not(options.exclude).addClass('lightbox-added').magnificPopup($.avia_utilities.av_popup);
					});
				}

		});
	};
})(jQuery);

;

;/* avia-sticky-header-js */
(function($)
{
	"use strict";

	$( function()
	{
		// decreases header size when user scrolls down
		avia_header_size();
	});


	function av_change_class($element, change_method, class_name)
	{
		if($element[0].classList)
		{
			if(change_method == "add")
			{
				$element[0].classList.add(class_name);
			}
			else
			{
				$element[0].classList.remove(class_name);
			}
		}
		else
		{
			if(change_method == "add")
			{
				$element.addClass(class_name);
			}
			else
			{
				$element.removeClass(class_name);
			}
		}
	}


	function avia_header_size()
	{
		var win				= $(window),
			header          = $('.html_header_top.html_header_sticky #header'),
			unsticktop		= $('.av_header_unstick_top');

		if( ! header.length && ! unsticktop.length )
		{
			return;
		}

		var logo            = $('#header_main .container .logo img, #header_main .container .logo svg, #header_main .container .logo a'),
			elements        = $('#header_main .container:not(#header_main_alternate>.container), #header_main .main_menu ul:first-child > li > a:not(.avia_mega_div a, #header_main_alternate a), #header_main #menu-item-shop .cart_dropdown_link'),
			el_height       = $(elements).first().height(),
			isMobile        = $.avia_utilities.isMobile,
			scroll_top		= $('#scroll-top-link'),
			transparent 	= header.is('.av_header_transparency'),
			shrinking		= header.is('.av_header_shrinking'),
			shrink_factor	= header.data( 'av_shrink_factor' ),
			shrink_val		= el_height/2.0,
			el_shrinked		= el_height/2.0,
			header_meta		= header.find('#header_meta'),
			topbar_height	= header_meta.length ? header_meta.outerHeight() : 0,
			header_alternate = header.find('#header_main_alternate'),
			alternate_header_height = header_alternate.length ? header_alternate.outerHeight() : 0,

			set_height = function()
			{
				var st = win.scrollTop(),
					newH = 0,
					st_real = st;

				if( unsticktop )
				{
					st -= topbar_height;
				}

				if( st < 0 )
				{
					st = 0;
				}

				if( shrinking && ! isMobile )
				{
					if( st < shrink_val )
					{
						newH = el_height - st;
						if( st <= 0 )
						{
							newH = el_height;
						}

						av_change_class( header, 'remove', 'header-scrolled' );
						//header.removeClass('header-scrolled');
					}
					else
					{
						newH = el_shrinked;
						//header.addClass('header-scrolled');
						av_change_class( header, 'add', 'header-scrolled' );
					}

					if( st - 30 < el_height )
					{
						av_change_class( header, 'remove', 'header-scrolled-full' );
					}
					else
					{
						av_change_class( header, 'add', 'header-scrolled-full' );
					}

					elements.css({'height': newH + 'px', 'lineHeight': newH + 'px'});
					logo.css({'maxHeight': newH + 'px'});

					// (solution contributed by Guenni007)
					let propHeight = newH + alternate_header_height;

					if( header.length )
					{
						if( ! unsticktop.length )
						{
							propHeight += topbar_height;
						}
						else
						{
							if( st <= topbar_height )
							{
								propHeight = propHeight + topbar_height - st_real;
							}
						}
					}

					$(':root')[0].style.setProperty( '--enfold-header-height', Math.round( propHeight ) + 'px' );
				}

				if( unsticktop.length )
				{
					if( st <= 0 )
					{
						if( st_real <= 0 )
						{
							st_real = 0;
						}

						unsticktop.css({"margin-top":"-"+st_real+"px"});
					}
					else
					{
						unsticktop.css({"margin-top":"-"+topbar_height+"px"});
					}
				}

				if( transparent )
				{
					if( st > 50 )
					{
						//header.removeClass('av_header_transparency');
						av_change_class( header, 'remove', 'av_header_transparency' );
					}
					else
					{
						//header.addClass('av_header_transparency');
						av_change_class( header, 'add', 'av_header_transparency' );
					}
				}
			};

		if( typeof shrink_factor != 'undefined' )
		{
			const value = parseInt( shrink_factor );
			if( ! isNaN( value ) )
			{
				shrink_val = el_height * ( value / 100.0 );
				el_shrinked = el_height - shrink_val;
			}
		}

		if( $('body').is( '.avia_deactivate_menu_resize' ) )
		{
			shrinking = false;
		}

		if( ! transparent && ! shrinking && ! unsticktop.length )
		{
			return;
		}

		win.on( 'debouncedresize',  function()
		{
			el_height = $( elements ).attr( 'style',"" ).first().height();
			set_height();
		});

		win.on( 'scroll',  function()
		{
			window.requestAnimationFrame( set_height );
		});

		set_height();
    }

})(jQuery);

;

;/* avia-footer-effects-js */
/**
 * Support for footer behaviour
 * ============================
 *
 *	- Curtain effect
 *
 * @since 4.8.6.3
 */
(function($)
{
	"use strict";

	var win = null,
		body = null,
		placeholder = null,
		footer = null,
		max_height = null;

	$( function()
	{
		win = $(window);
		body = $('body');

		if( body.hasClass( 'av-curtain-footer' ) )
		{
			aviaFooterCurtain();
			return;
		}

		return;
	});


	function aviaFooterCurtain()
	{
		footer = body.find( '.av-curtain-footer-container' );

		//	remove classes
		if( footer.length == 0 )
		{
			body.removeClass( 'av-curtain-footer av-curtain-activated av-curtain-numeric av-curtain-screen' );
			return;
		}

		placeholder = $( '<div id="av-curtain-footer-placeholder"></div>' );
		footer.before( placeholder );

		if( body.hasClass( 'av-curtain-numeric' ) )
		{
			max_height = footer.data( 'footer_max_height' );
			if( 'undefined' == typeof max_height )
			{
				max_height = 70;
			}
			else
			{
				max_height = parseInt( max_height, 10 );
				if( isNaN( max_height ) )
				{
					max_height = 70;
				}
			}
		}

		aviaCurtainEffects();

		win.on( 'debouncedresize', aviaCurtainEffects );
	}

	function aviaCurtainEffects()
	{
		var height = Math.floor( footer.outerHeight() ),
			viewportHeight = win.innerHeight();

		//	screen width based
		if( null == max_height )
		{
			placeholder.css( { height: height + 'px' } );
		}
		else
		{
			var limit = Math.floor( viewportHeight * ( max_height / 100.0 ) );
			if( height > limit )
			{
				body.removeClass( 'av-curtain-activated' );
				placeholder.css( { height: '' } );
			}
			else
			{
				body.addClass( 'av-curtain-activated' );
				placeholder.css( { height: height + 'px' } );
			}
		}

	}

})(jQuery);

;

;/* avia-widget-js-js */
(function($)
{
	"use strict";

	$( function()
	{
		$('.avia_auto_toc').each(function()
		{
			var $toc_section = $(this).attr('id');
			var $levels = 'h1';
			var $levelslist = new Array();
			var $excludeclass = '';

			var $toc_container = $(this).find('.avia-toc-container');

			if( $toc_container.length )
			{
				var $levels_attr = $toc_container.attr('data-level');
				var $excludeclass_attr = $toc_container.attr('data-exclude');

				if( typeof $levels_attr != 'undefined' )
				{
					$levels = $levels_attr;
				}

				if( typeof $excludeclass_attr != 'undefined' )
				{
					$excludeclass = $excludeclass_attr.trim();
				}
			}

			$levelslist = $levels.split(',');

			$('.entry-content-wrapper').find( $levels ).each( function()
			{
				var headline = $( this );

				if( headline.hasClass('av-no-toc') )
				{
					return;
				}

				if( $excludeclass != '' && ( headline.hasClass( $excludeclass ) || headline.parent().hasClass( $excludeclass ) ) )
				{
					return;
				}

				var $h_id = headline.attr('id');
				var $tagname = headline.prop( 'tagName' ).toLowerCase();
				var $txt = headline.text();
				var $pos = $levelslist.indexOf($tagname);

				if( typeof $h_id == 'undefined' )
				{
					var $new_id = av_pretty_url( $txt );
					headline.attr( 'id', $new_id );
					$h_id = $new_id;
				}

				var $list_tag = '<a href="#' + $h_id + '" class="avia-toc-link avia-toc-level-' + $pos + '"><span>' + $txt + '</span></a>';
				$toc_container.append( $list_tag );
			});

            // Smooth Scrolling
			$( ".avia-toc-smoothscroll .avia-toc-link" ).on( 'click', function(e)
			{
				e.preventDefault();

				var $target = $(this).attr('href');
				var $offset = 50;

				// calculate offset if there is a sticky header
				var $sticky_header = $('.html_header_top.html_header_sticky #header');

				if( $sticky_header.length )
				{
					$offset = $sticky_header.outerHeight() + 50;
				}

				$('html,body').animate( { scrollTop: $($target).offset().top - $offset } );
			});
        });
    });

    function av_pretty_url(text)
	{
		return text.replace(/[ÄÖÜäöüß]/g, function(match) {
									return {
										"Ä": "Ae", "Ö": "Oe", "Ü": "Ue",
										"ä": "ae", "ö": "oe", "ü": "ue",
										"ß": "ss"
									}[match];
								})
					.toLowerCase()
					.replace( /[^a-z0-9]+/g, "-" )
					.replace( /^-+|-+$/g, "-" )
					.replace( /^-+|-+$/g, '' );
    }

})( jQuery );

;

document.addEventListener('click', function(event) {
  if (event.target instanceof Element && event.target.closest('.av-masonry-load-more')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('https://iyerlaboratory.org/lab-news/');
  }
}, true);
