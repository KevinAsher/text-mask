!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.vueTextMask=r():e.vueTextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var o=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(5),a=n(i);r.default={textMaskInputElement:null,inputHandler:function(e){var r=e.target.value;return this.textMaskInputElement.update(r)},bind:function(){var e=this.vm[this.expression]||{};e.inputElement=this.el,this.textMaskInputElement=(0,a.default)(e),this.inputHandler=this.inputHandler.bind(this),this.el.addEventListener("input",this.inputHandler)},unbind:function(){this.el.removeEventListener("input",this.inputHandler)}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==s,g=e.length,b=s.length,y=p.length,C=r.length,x=g-b,k=x>0,P=v+(k?-x:0),O=P+Math.abs(x);if(h===!0&&!k){for(var M=a,T=P;T<O;T++)p[T]===d&&(M+=d);e=e.slice(0,P)+M+e.slice(P,g)}for(var _=e.split(a).map(function(e,r){return{char:e,isNew:r>=P&&r<O}}),j=g-1;j>=0;j--){var w=_[j].char;if(w!==d){var V=j>=P&&b===C;w===p[V?j-x:j]&&_.splice(j,1)}}var S=a,E=!1;e:for(var N=0;N<y;N++){var H=p[N];if(H===d){if(_.length>0)for(;_.length>0;){var I=_.shift(),L=I.char,J=I.isNew;if(L===d&&m!==!0){S+=d;continue e}if(r[N].test(L)){if(h===!0&&J!==!1&&s!==a&&u!==!1&&k){for(var R=_.length,W=null,A=0;A<R;A++){var q=_[A];if(q.char!==d&&q.isNew===!1)break;if(q.char===d){W=A;break}}null!==W?(S+=L,_.splice(W,1)):N--}else S+=L;continue e}E=!0}m===!1&&(S+=p.substr(N,y));break}S+=H}if(m&&k===!1){for(var z=null,B=0;B<S.length;B++)p[B]===d&&(z=B);S=null!==z?S.substr(0,z+1):a}return{conformedValue:S,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,s=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=f.length,b=u.length,y=h-m,C=y>0,x=0===m,k=y>1&&!C&&!x;if(k)return a;var P=C&&(t===u||u===f),O=0;if(P?O=a-y:!function(){for(var e=u.toLowerCase(),r=l.toLowerCase(),t=r.substr(0,a).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),i=n[n.length-1],d=c.map(function(r){return e[r]}),p=d.filter(function(e){return e===i}).length,v=n.filter(function(e){return e===i}).length,h=f.substr(0,f.indexOf(s)).split(o).filter(function(e,r){return e===i&&l[r]!==e}).length,m=h+v+p,g=0,y=0;y<b;y++){var C=e[y];if(O=y+1,C===i&&g++,g>=m)break}}(),C){for(var M=O,T=O;T<=g;T++)if(f[T]===s&&(M=T),f[T]===s||v.indexOf(T)!==-1||T===g)return M}else for(var _=O;_>=0;_--)if(f[_-1]===s||v.indexOf(_)!==-1||0===_)return _}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,s=e.placeholderChar,d=void 0===s?v.placeholderChar:s,g=e.keepCharPositions,y=void 0!==g&&g;("undefined"==typeof t?"undefined":l(t))===b&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var C={previousConformedValue:m},x=void 0,k=void 0;return t instanceof Array&&(x=(0,p.convertMaskToPlaceholder)(t,d)),{state:C,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(t!==!1&&e!==C.previousConformedValue){var s=a(e),v=r.selectionStart,g=C.previousConformedValue,b=void 0;if(("undefined"==typeof t?"undefined":l(t))===h){if(k=t(s,{currentCaretPosition:v,previousConformedValue:g,placeholderChar:d}),k===!1)return;var P=(0,p.processCaretTraps)(k),O=P.maskWithoutCaretTraps,M=P.indexes;k=O,b=M,x=(0,p.convertMaskToPlaceholder)(k,d)}else k=t;var T={previousConformedValue:g,guide:n,placeholderChar:d,pipe:o,placeholder:x,currentCaretPosition:v,keepCharPositions:y},_=(0,c.default)(s,k,T),j=_.conformedValue,w=("undefined"==typeof o?"undefined":l(o))===h,V={};w&&(V=o(j,u({rawValue:s},T)),V===!1?V={value:g,rejected:!0}:(0,p.isString)(V)&&(V={value:V}));var S=w?V.value:j,E=(0,f.default)({previousConformedValue:g,conformedValue:S,placeholder:x,rawValue:s,currentCaretPosition:v,placeholderChar:d,indexesOfPipedChars:V.indexesOfPipedChars,caretTrapIndexes:b}),N=S===x&&0===E,H=N?m:S;C.previousConformedValue=H,r.value!==H&&(r.value=H,i(r,E))}}}}function i(e,r){document.activeElement===e&&e.setSelectionRange(r,r,g)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),p=t(3),v=t(1),h="function",m="",g="none",b="object"}])});