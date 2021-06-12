!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const{stringify:i,parse:r}=(()=>{const e={stringify:function(t,n){(n=n||{}).transpose=n.transpose||!1,n.sanitise=n.sanitise||!1;let i=t;return i=e._shape(t,n),i=e._escape(i,n),i=e._join(i),i},_shape:function(e,t){const n=t.transpose,i=e.reduce((e,t)=>Math.max(e,t.length),0),r=n?i:e.length,o=n?e.length:i;let a=[];for(let t=0;t<r;t++){let i=[];for(let r=0;r<o;r++){let o=n?r:t,a=n?t:r,s=e[o][a];a>=e[o].length&&(s=""),i.push(s)}a.push(i)}return a},_escape:function(e,t){const n=t.sanitise;for(let t=0;t<e.length;t++){let i=e[t];for(let e=0;e<i.length;e++)void 0===i[e]?i[e]="":"string"!=typeof i[e]&&(i[e]=""+i[e]),n&&i[e].match(/^[=\-+@]/)&&(i[e]="\t"+i[e]),i[e].match(/,|"|\n/)&&(i[e]=i[e].replace(/"/g,'""'),i[e]='"'+i[e]+'"')}return e},_join:function(e){for(let t=0;t<e.length;t++)e[t]=e[t].join(",");return e=e.join("\n")},parse:function(t){let n=e._tokenise(t);return e._validate(n),n},_tokenise:function(e){let t=[];e=e.replace(/\r/g,"");let n=!1,i=!1,r=0,o=[];for(let a=0;a<e.length;a++){let s=e[a],c=","===s,u='"'===s,l="\n"===s,d=a===e.length-1;if(n)if(u){if('"'===e[a+1]){a++;continue}if(n=!1,i=!0,!d)continue}else if(d)throw new Error("CSV parse: Reached end of file before ending quote. At index "+a);if(!n&&(c||l||d)){let n=e.substring(r,a+1);(c||l)&&(n=n.substring(0,n.length-1)),i&&(i=!1,n=n.substring(1,n.length-1),n=n.replace(/""/g,'"')),o.push(n),c&&d&&o.push(""),(l||d)&&(t.push(o),l&&(o=[])),r=a+1}else{if(i)throw new Error("CSV parse: A value must be complete immediately after closing a quote. At index "+a);u&&(n=!0)}}return t},_validate:function(e){if(e&&e.length>1){let t=e[0].length;for(let n=1;n<e.length;n++){if(e[n].length!==t)throw new Error(`CSV parse: Row ${n} does not have the same length as the first row (${t})`)}}}};return{stringify:e.stringify,parse:e.parse}})(),o=[],{activate:a,deactivate:s}=function(){const e={activate:function(t,n){e._activator(t,n,e._activateSingle)},deactivate:function(t,n){e._activator(t,n,e._deactivateSingle)},_activator:function(t,n,i){if("string"==typeof t)try{t=document.querySelectorAll(t)}catch(n){let r=i===e._deactivateSingle?"deactivate":"activate";throw new DOMException(`${r} failed because it was passed an invalid selector string: '${t}'`)}t instanceof Node?i(t,n):t.length&&t.forEach&&t.forEach(e=>i(e,n))},_activateSingle:function(t,n){if(t instanceof Node==!1)throw new TypeError("activate failed because a valid Node was not passed");if(e._getNodeBindings(t,n))return;if(t.addEventListener("click",n),!1===e._isNodeType(t,"button")){!1===e._getNodeHasBindings(t)&&t.addEventListener("keydown",e._preventSpacebarScroll);let i=e._makeSpacebarFn(n);t.addEventListener("keyup",i);let r={spacebarFn:i};if(!1===e._isNodeType(t,"a")){let i=e._makeEnterFn(n);t.addEventListener("keydown",i),r.enterFn=i}e._rememberNodeBindings(t,n,r)}},_deactivateSingle:function(t,n){if(t instanceof Node==!1)throw new TypeError("deactivate failed because a valid Node was not passed");let i=e._getNodeBindings(t,n);if(t.removeEventListener("click",n),i&&!1===e._isNodeType(t,"button")){t.removeEventListener("keyup",i.spacebarFn),!1===e._isNodeType(t,"a")&&t.removeEventListener("keydown",i.enterFn),e._forgetNodeBindings(t,n),!1===e._getNodeHasBindings(t)&&t.removeEventListener("keydown",e._preventSpacebarScroll)}},_rememberNodeBindings:function(e,t,n){let i=o.find(t=>t.node===e);i||(i={node:e,bindings:[{fn:t}]},o.push(i));let r=i.bindings.find(e=>e.fn===t);r||(r={fn:t},i.bindings.push(r)),Object.assign(r,n)},_forgetNodeBindings:function(e,t){let n=o.find(t=>t.node===e);if(!n)return;let i=n.bindings.find(e=>e.fn===t);if(!i)return;let r=n.bindings.indexOf(i);n.bindings.splice(r,1)},_getNodeBindings:function(e,t){let n=o.find(t=>t.node===e);if(!n)return;let i=n.bindings.find(e=>e.fn===t);return i||void 0},_getNodeHasBindings:function(e){return!!o.find(t=>t.node===e)},_makeEnterFn:function(t){return function(n){let i=e._isEnter(n);i&&t.apply(this,arguments)}},_isEnter:function(e){return e.key&&"enter"===e.key.toLowerCase()},_preventSpacebarScroll:function(t){let n=t.target,i=e._isNodeType(n,"button"),r=e._isNodeType(n,"input","textarea"),o=e._isSpacebar(t);i||r||!o||t.preventDefault()},_makeSpacebarFn:function(t){return function(n){let i=e._isSpacebar(n);i&&t.apply(this,arguments)}},_isSpacebar:function(e){return e.key&&(" "===e.key||"spacebar"===e.key.toLowerCase())},_isNodeType:function(e,...t){t=t.map(e=>e.toLowerCase());let n=e.nodeName.toLowerCase();return t.includes(n)}};return{activate:e.activate,deactivate:e.deactivate}}();const c=[[0,1,2],["test",{test:!0}],[null,!1],["=GET(malicious_code)",!0]];a(".js-stringify__button",()=>{let e=document.querySelector(".js-stringify__input"),t=document.querySelector(".js-stringify__output"),n=document.querySelector(".js-stringify__transpose"),r=document.querySelector(".js-stringify__sanitise"),o={transpose:n.checked,sanitise:r.checked},a=i(c,o);e.innerHTML=JSON.stringify(c,null,"\t"),t.innerHTML=a}),a(".js-parse__button",()=>{let e=document.querySelector(".js-parse__input"),t=document.querySelector(".js-parse__output"),n=i(c),o=r(n);e.innerHTML=n,t.innerHTML=JSON.stringify(o,null,"\t")})}]);
//# sourceMappingURL=bundle.js.map