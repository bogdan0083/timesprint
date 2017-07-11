!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),r=(n(a),o(5)),c=n(r),u=o(6),s=n(u),d=o(7),f=n(d),l=o(8),m=n(l),p=o(9),b=n(p),v=o(10),g=n(v),y=o(13),w=n(y),h=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(k=!0),k?(h=(0,g["default"])(h,j),(0,b["default"])(h,j.once),h):void 0},_=function(){h=(0,w["default"])(),O()},z=function(){h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},A=function(e){return e===!0||"mobile"===e&&m["default"].mobile()||"phone"===e&&m["default"].phone()||"tablet"===e&&m["default"].tablet()||"function"==typeof e&&e()===!0},E=function(e){return j=i(j,e),h=(0,w["default"])(),A(j.disable)||x?z():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,s["default"])(O,50,!0)),window.addEventListener("orientationchange",(0,s["default"])(O,50,!0)),window.addEventListener("scroll",(0,c["default"])(function(){(0,b["default"])(h,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s["default"])(_,50,!0)}),(0,f["default"])("[data-aos]",_),h)};e.exports={init:E,refresh:O,refreshHard:_}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,O=t,y=e.apply(n,o)}function a(e){return O=e,w=setTimeout(d,t),_?n(e):y}function r(e){var o=e-h,n=e-O,i=t-o;return z?x(i,g-n):i}function u(e){var o=e-h,n=e-O;return!h||o>=t||0>o||z&&n>=g}function d(){var e=j();return u(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return clearTimeout(w),w=void 0,A&&b?n(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),h=O=0,b=v=w=void 0}function m(){return void 0===w?y:f(j())}function p(){var e=j(),o=u(e);if(b=arguments,v=this,h=e,o){if(void 0===w)return a(h);if(z)return clearTimeout(w),w=setTimeout(d,t),n(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h=0,O=0,_=!1,z=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,i(o)&&(_=!!o.leading,z="maxWait"in o,g=z?k(c(o.maxWait)||0,t):g,A="trailing"in o?!!o.trailing:A),p.cancel=l,p.flush=m,p}function n(e){var t=i(e)?h.call(e):"";return t==f||t==l}function i(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||a(e)&&h.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t=n(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||g.test(e)?y(e.slice(2),o?2:8):b.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Function]",l="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;n>o;o++){e=r[o],t=i.querySelectorAll(e.selector);for(var a,c=0,u=t.length;u>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,a=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t["default"]=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t["default"]=new i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),a=n(i),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a["default"])(e.node,t.offset)}),e};t["default"]=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a["default"])(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t["default"]=o}])});
//# sourceMappingURL=aos.js.map
/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
!function(a, b) {
  "function" == typeof define && define.amd
    ? define("sifter", b)
    : "object" == typeof exports
      ? module.exports = b()
      : a.Sifter = b()
}(this, function() {
  var a = function(a, b) {
    this.items = a,
    this.settings = b || {
      diacritics: !0
    }
  };
  a.prototype.tokenize = function(a) {
    if (a = e(String(a || "").toLowerCase()), !a || !a.length) 
      return [];
    var b,
      c,
      d,
      g,
      i = [],
      j = a.split(/ +/);
    for (b = 0, c = j.length; b < c; b++) {
      if (d = f(j[b]), this.settings.diacritics) 
        for (g in h) 
          h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
    i.push({
        string: j[b],
        regex: new RegExp(d, "i")
      })
    }
    return i
  },
  a.prototype.iterator = function(a, b) {
    var c;
    c = g(a)
      ? Array.prototype.forEach || function(a) {
        for (var b = 0, c = this.length; b < c; b++) 
          a(this[b], b, this)
      }
      : function(a) {
        for (var b in this) 
          this.hasOwnProperty(b) && a(this[b], b, this)
      },
    c.apply(a, [b])
  },
  a.prototype.getScoreFunction = function(a, b) {
    var c,
      e,
      f,
      g,
      h;
    c = this,
    a = c.prepareSearch(a, b),
    f = a.tokens,
    e = a.options.fields,
    g = f.length,
    h = a.options.nesting;
    var i = function(a, b) {
        var c,
          d;
        return a
          ? (a = String(a || ""), d = a.search(b.regex), d === -1
            ? 0
            : (c = b.string.length / a.length, 0 === d && (c += .5), c))
          : 0
      },
      j = function() {
        var a = e.length;
        return a
          ? 1 === a
            ? function(a, b) {
              return i(d(b, e[0], h), a)
            }
            : function(b, c) {
              for (var f = 0, g = 0; f < a; f++) 
                g += i(d(c, e[f], h), b);
              return g / a
            }
          : function() {
            return 0
          }
      }();
    return g
      ? 1 === g
        ? function(a) {
          return j(f[0], a)
        }
        : "and" === a.options.conjunction
          ? function(a) {
            for (var b, c = 0, d = 0; c < g; c++) {
              if (b = j(f[c], a), b <= 0) 
                return 0;
              d += b
            }
            return d / g
          }
          : function(a) {
            for (var b = 0, c = 0; b < g; b++) 
              c += j(f[b], a);
            return c / g
          }
      : function() {
        return 0
      }
  },
  a.prototype.getSortFunction = function(a, c) {
    var e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o;
    if (g = this, a = g.prepareSearch(a, c), o = !a.query && c.sort_empty || c.sort, m = function(a, b) {
      return "$score" === a
        ? b.score
        : d(g.items[b.id], a, c.nesting)
    },
    i = [],
    o) 
      for (e = 0, f = o.length; e < f; e++) 
        (a.query || "$score" !== o[e].field) && i.push(o[e]);
  if (a.query) {
      for (n = !0, e = 0, f = i.length; e < f; e++) 
        if ("$score" === i[e].field) {
          n = !1;
          break
        }
      n && i.unshift({field: "$score", direction: "desc"})
    } else 
      for (e = 0, f = i.length; e < f; e++) 
        if ("$score" === i[e].field) {
          i.splice(e, 1);
          break
        }
      for (l = [], e = 0, f = i.length; e < f; e++) 
      l.push("desc" === i[e].direction
        ? -1
        : 1);
    return j = i.length,
    j
      ? 1 === j
        ? (h = i[0].field, k = l[0], function(a, c) {
          return k * b(m(h, a), m(h, c))
        })
        : function(a, c) {
          var d,
            e,
            f;
          for (d = 0; d < j; d++) 
            if (f = i[d].field, e = l[d] * b(m(f, a), m(f, c))) 
              return e;
        return 0
        }
      : null
  },
  a.prototype.prepareSearch = function(a, b) {
    if ("object" == typeof a) 
      return a;
    b = c({}, b);
    var d = b.fields,
      e = b.sort,
      f = b.sort_empty;
    return d && !g(d) && (b.fields = [d]),
    e && !g(e) && (b.sort = [e]),
    f && !g(f) && (b.sort_empty = [f]), {
      options: b,
      query: String(a || "").toLowerCase(),
      tokens: this.tokenize(a),
      total: 0,
      items: []
    }
  },
  a.prototype.search = function(a, b) {
    var c,
      d,
      e,
      f,
      g = this;
    return d = this.prepareSearch(a, b),
    b = d.options,
    a = d.query,
    f = b.score || g.getScoreFunction(d),
    a.length
      ? g.iterator(g.items, function(a, e) {
        c = f(a),
        (b.filter === !1 || c > 0) && d.items.push({score: c, id: e})
      })
      : g.iterator(g.items, function(a, b) {
        d.items.push({score: 1, id: b})
      }),
    e = g.getSortFunction(d, b),
    e && d.items.sort(e),
    d.total = d.items.length,
    "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)),
    d
  };
  var b = function(a, b) {
      return "number" == typeof a && "number" == typeof b
        ? a > b
          ? 1
          : a < b
            ? -1
            : 0
        : (a = i(String(a || "")), b = i(String(b || "")), a > b
          ? 1
          : b > a
            ? -1
            : 0)
    },
    c = function(a, b) {
      var c,
        d,
        e,
        f;
      for (c = 1, d = arguments.length; c < d; c++) 
        if (f = arguments[c]) 
          for (e in f) 
            f.hasOwnProperty(e) && (a[e] = f[e]);
    return a
    },
    d = function(a, b, c) {
      if (a && b) {
        if (!c) 
          return a[b];
        for (var d = b.split("."); d.length && (a = a[d.shift()]);) 
        ;
        return a
      }
    },
    e = function(a) {
      return (a + "").replace(/^\s+|\s+$|/g, "")
    },
    f = function(a) {
      return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    },
    g = Array.isArray || "undefined" != typeof $ && $.isArray || function(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    },
    h = {
      a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
      b: "[b␢βΒB฿𐌁ᛒ]",
      c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
      d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
      e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
      f: "[fƑƒḞḟ]",
      g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
      h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
      i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
      j: "[jȷĴĵɈɉʝɟʲ]",
      k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
      l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
      n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
      o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
      p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
      q: "[qꝖꝗʠɊɋꝘꝙq̃]",
      r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
      s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
      t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
      u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
      v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
      w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
      x: "[xẌẍẊẋχ]",
      y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
      z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
    },
    i = function() {
      var a,
        b,
        c,
        d,
        e = "",
        f = {};
      for (c in h) 
        if (h.hasOwnProperty(c)) 
          for (d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length; a < b; a++) 
            f[d.charAt(a)] = c;
    var g = new RegExp("[" + e + "]", "g");
      return function(a) {
        return a.replace(g, function(a) {
          return f[a]
        }).toLowerCase()
      }
    }();
  return a
}),
function(a, b) {
  "function" == typeof define && define.amd
    ? define("microplugin", b)
    : "object" == typeof exports
      ? module.exports = b()
      : a.MicroPlugin = b()
}(this, function() {
  var a = {};
  a.mixin = function(a) {
    a.plugins = {},
    a.prototype.initializePlugins = function(a) {
      var c,
        d,
        e,
        f = this,
        g = [];
      if (f.plugins = {
        names: [],
        settings: {},
        requested: {},
        loaded: {}
      }, b.isArray(a)) 
        for (c = 0, d = a.length; c < d; c++) 
          "string" == typeof a[c]
            ? g.push(a[c])
            : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
        else if (a) 
          for (e in a) 
            a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
    for (; g.length;) 
        f.require(g.shift())
    },
    a.prototype.loadPlugin = function(b) {
      var c = this,
        d = c.plugins,
        e = a.plugins[b];
      if (!a.plugins.hasOwnProperty(b)) 
        throw new Error('Unable to find "' + b + '" plugin');
      d.requested[b] = !0,
      d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}
      ]),
      d.names.push(b)
    },
    a.prototype.require = function(a) {
      var b = this,
        c = b.plugins;
      if (!b.plugins.loaded.hasOwnProperty(a)) {
        if (c.requested[a]) 
          throw new Error('Plugin has circular dependency ("' + a + '")');
        b.loadPlugin(a)
      }
      return c.loaded[a]
    },
    a.define = function(b, c) {
      a.plugins[b] = {
        name: b,
        fn: c
      }
    }
  };
  var b = {
    isArray: Array.isArray || function(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }
  };
  return a
}),
function(a, b) {
  "function" == typeof define && define.amd
    ? define("selectize", [
      "jquery", "sifter", "microplugin"
    ], b)
    : "object" == typeof exports
      ? module.exports = b(require("jquery"), require("sifter"), require("microplugin"))
      : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin)
}(this, function(a, b, c) {
  "use strict";
  var d = function(a, b) {
    if ("string" != typeof b || b.length) {
      var c = "string" == typeof b
          ? new RegExp(b, "i")
          : b,
        d = function(a) {
          var b = 0;
          if (3 === a.nodeType) {
            var e = a.data.search(c);
            if (e >= 0 && a.data.length > 0) {
              var f = a.data.match(c),
                g = document.createElement("span");
              g.className = "highlight";
              var h = a.splitText(e),
                i = (h.splitText(f[0].length), h.cloneNode(!0));
              g.appendChild(i),
              h.parentNode.replaceChild(g, h),
              b = 1
            }
          } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName)) 
            for (var j = 0; j < a.childNodes.length; ++j) 
              j += d(a.childNodes[j]);
        return b
        };
      return a.each(function() {
        d(this)
      })
    }
  };
  a.fn.removeHighlight = function() {
    return this.find("span.highlight").each(function() {
      this.parentNode.firstChild.nodeName;
      var a = this.parentNode;
      a.replaceChild(this.firstChild, this),
      a.normalize()
    }).end()
  };
  var e = function() {};
  e.prototype = {
    on: function(a, b) {
      this._events = this._events || {},
      this._events[a] = this._events[a] || [],
      this._events[a].push(b)
    },
    off: function(a, b) {
      var c = arguments.length;
      return 0 === c
        ? delete this._events
        : 1 === c
          ? delete this._events[a]
          : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
    },
    trigger: function(a) {
      if (this._events = this._events || {}, a in this._events != !1) 
        for (var b = 0; b < this._events[a].length; b++) 
          this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
    }
  },
  e.mixin = function(a) {
    for (var b = [
      "on", "off", "trigger"
    ], c = 0; c < b.length; c++) 
      a.prototype[b[c]] = e.prototype[b[c]]
  };
  var f = /Mac/.test(navigator.userAgent),
    g = 65,
    h = 13,
    i = 27,
    j = 37,
    k = 38,
    l = 80,
    m = 39,
    n = 40,
    o = 78,
    p = 8,
    q = 46,
    r = 16,
    s = f
      ? 91
      : 17,
    t = f
      ? 18
      : 17,
    u = 9,
    v = 1,
    w = 2,
    x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
    y = function(a) {
      return "undefined" != typeof a
    },
    z = function(a) {
      return "undefined" == typeof a || null === a
        ? null
        : "boolean" == typeof a
          ? a
            ? "1"
            : "0"
          : a + ""
    },
    A = function(a) {
      return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    },
    B = {};
  B.before = function(a, b, c) {
    var d = a[b];
    a[b] = function() {
      return c.apply(a, arguments),
      d.apply(a, arguments)
    }
  },
  B.after = function(a, b, c) {
    var d = a[b];
    a[b] = function() {
      var b = d.apply(a, arguments);
      return c.apply(a, arguments),
      b
    }
  };
  var C = function(a) {
      var b = !1;
      return function() {
        b || (b = !0, a.apply(this, arguments))
      }
    },
    D = function(a, b) {
      var c;
      return function() {
        var d = this,
          e = arguments;
        window.clearTimeout(c),
        c = window.setTimeout(function() {
          a.apply(d, e)
        }, b)
      }
    },
    E = function(a, b, c) {
      var d,
        e = a.trigger,
        f = {};
      a.trigger = function() {
        var c = arguments[0];
        return b.indexOf(c) === -1
          ? e.apply(a, arguments)
          : void(f[c] = arguments)
      },
      c.apply(a, []),
      a.trigger = e;
      for (d in f) 
        f.hasOwnProperty(d) && e.apply(a, f[d])
    },
    F = function(a, b, c, d) {
      a.on(b, c, function(b) {
        for (var c = b.target; c && c.parentNode !== a[0];) 
          c = c.parentNode;
        return b.currentTarget = c,
        d.apply(this, [b])
      })
    },
    G = function(a) {
      var b = {};
      if ("selectionStart" in a) 
        b.start = a.selectionStart,
        b.length = a.selectionEnd - b.start;
      else if (document.selection) {
        a.focus();
        var c = document.selection.createRange(),
          d = document.selection.createRange().text.length;
        c.moveStart("character", -a.value.length),
        b.start = c.text.length - d,
        b.length = d
      }
      return b
    },
    H = function(a, b, c) {
      var d,
        e,
        f = {};
      if (c) 
        for (d = 0, e = c.length; d < e; d++) 
          f[c[d]] = a.css(c[d]);
    else 
        f = a.css();
      b.css(f)
    },
    I = function(b, c) {
      if (!b) 
        return 0;
      var d = a("<test>").css({
        position: "absolute",
        top: -99999,
        left: -99999,
        width: "auto",
        padding: 0,
        whiteSpace: "pre"
      }).text(b).appendTo("body");
      H(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
      var e = d.width();
      return d.remove(),
      e
    },
    J = function(a) {
      var b = null,
        c = function(c, d) {
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l;
          c = c || window.event || {},
          d = d || {},
          c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p
            ? (l = G(a[0]), l.length
              ? e = e.substring(0, l.start) + e.substring(l.start + l.length)
              : f === p && l.start
                ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1)
                : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1)))
            : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j
              ? k.toUpperCase()
              : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = I(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
        };
      a.on("keydown keyup update blur", c),
      c()
    },
    K = function(a) {
      var b = document.createElement("div");
      return b.appendChild(a.cloneNode(!0)),
      b.innerHTML
    },
    L = function(a, b) {
      b || (b = {});
      var c = "Selectize";
      console.error(c + ": " + a),
      b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd())
    },
    M = function(c, d) {
      var e,
        f,
        g,
        h,
        i = this;
      h = c[0],
      h.selectize = i;
      var j = window.getComputedStyle && window.getComputedStyle(h, null);
      if (g = j
        ? j.getPropertyValue("direction")
        : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
        order: 0,
        settings: d,
        $input: c,
        tabIndex: c.attr("tabindex") || "",
        tagType: "select" === h.tagName.toLowerCase()
          ? v
          : w,
        rtl: /rtl/i.test(g),
        eventNS: ".selectize" + ++M.count,
        highlightedValue: null,
        isOpen: !1,
        isDisabled: !1,
        isRequired: c.is("[required]"),
        isInvalid: !1,
        isLocked: !1,
        isFocused: !1,
        isInputHidden: !1,
        isSetup: !1,
        isShiftDown: !1,
        isCmdDown: !1,
        isCtrlDown: !1,
        ignoreFocus: !1,
        ignoreBlur: !1,
        ignoreHover: !1,
        hasOptions: !1,
        currentResults: null,
        lastValue: "",
        caretPos: 0,
        loading: 0,
        loadedSearches: {},
        $activeOption: null,
        $activeItems: [],
        optgroups: {},
        options: {},
        userOptions: {},
        items: [],
        renderCache: {},
        onSearchChange: null === d.loadThrottle
          ? i.onSearchChange
          : D(i.onSearchChange, d.loadThrottle)
      }), i.sifter = new b(this.options, {diacritics: d.diacritics}), i.settings.options) {
        for (e = 0, f = i.settings.options.length; e < f; e++) 
          i.registerOption(i.settings.options[e]);
        delete i.settings.options
      }
      if (i.settings.optgroups) {
        for (e = 0, f = i.settings.optgroups.length; e < f; e++) 
          i.registerOptionGroup(i.settings.optgroups[e]);
        delete i.settings.optgroups
      }
      i.settings.mode = i.settings.mode || (1 === i.settings.maxItems
        ? "single"
        : "multi"),
      "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode),
      i.initializePlugins(i.settings.plugins),
      i.setupCallbacks(),
      i.setupTemplates(),
      i.setup()
    };
  return e.mixin(M),
  "undefined" != typeof c
    ? c.mixin(M)
    : L("Dependency MicroPlugin is missing", {explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),
  a.extend(M.prototype, {
    setup: function() {
      var b,
        c,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m = this,
        n = m.settings,
        o = m.eventNS,
        p = a(window),
        q = a(document),
        u = m.$input;
      if (i = m.settings.mode, j = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", u.is(":disabled")
        ? "-1"
        : m.tabIndex), h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), (l = u.attr("id")) && (d.attr("id", l + "-selectized"), a("label[for='" + l + "']").attr("for", l + "-selectized")), m.settings.copyClassesToDropdown && e.addClass(j), b.css({width: u[0].style.width}), m.plugins.names.length && (k = "plugin-" + m.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), m.settings.placeholder && d.attr("placeholder", n.placeholder), !m.settings.splitOn && m.settings.delimiter) {
        var w = m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
      }
      u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")),
      u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")),
      m.$wrapper = b,
      m.$control = c,
      m.$control_input = d,
      m.$dropdown = e,
      m.$dropdown_content = g,
      e.on("mouseenter", "[data-selectable]", function() {
        return m.onOptionHover.apply(m, arguments)
      }),
      e.on("mousedown click", "[data-selectable]", function() {
        return m.onOptionSelect.apply(m, arguments)
      }),
      F(c, "mousedown", "*:not(input)", function() {
        return m.onItemSelect.apply(m, arguments)
      }),
      J(d),
      c.on({
        mousedown: function() {
          return m.onMouseDown.apply(m, arguments)
        },
        click: function() {
          return m.onClick.apply(m, arguments)
        }
      }),
      d.on({
        mousedown: function(a) {
          a.stopPropagation()
        },
        keydown: function() {
          return m.onKeyDown.apply(m, arguments)
        },
        keyup: function() {
          return m.onKeyUp.apply(m, arguments)
        },
        keypress: function() {
          return m.onKeyPress.apply(m, arguments)
        },
        resize: function() {
          m.positionDropdown.apply(m, [])
        },
        blur: function() {
          return m.onBlur.apply(m, arguments)
        },
        focus: function() {
          return m.ignoreBlur = !1,
          m.onFocus.apply(m, arguments)
        },
        paste: function() {
          return m.onPaste.apply(m, arguments)
        }
      }),
      q.on("keydown" + o, function(a) {
        m.isCmdDown = a[f
            ? "metaKey"
            : "ctrlKey"],
        m.isCtrlDown = a[f
            ? "altKey"
            : "ctrlKey"],
        m.isShiftDown = a.shiftKey
      }),
      q.on("keyup" + o, function(a) {
        a.keyCode === t && (m.isCtrlDown = !1),
        a.keyCode === r && (m.isShiftDown = !1),
        a.keyCode === s && (m.isCmdDown = !1)
      }),
      q.on("mousedown" + o, function(a) {
        if (m.isFocused) {
          if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) 
            return !1;
          m.$control.has(a.target).length || a.target === m.$control[0] || m.blur(a.target)
        }
      }),
      p.on([
        "scroll" + o,
        "resize" + o
      ].join(" "), function() {
        m.isOpen && m.positionDropdown.apply(m, arguments)
      }),
      p.on("mousemove" + o, function() {
        m.ignoreHover = !1
      }),
      this.revertSettings = {
        $children: u.children().detach(),
        tabindex: u.attr("tabindex")
      },
      u.attr("tabindex", -1).hide().after(m.$wrapper),
      a.isArray(n.items) && (m.setValue(n.items), delete n.items),
      x && u.on("invalid" + o, function(a) {
        a.preventDefault(),
        m.isInvalid = !0,
        m.refreshState()
      }),
      m.updateOriginalInput(),
      m.refreshItems(),
      m.refreshState(),
      m.updatePlaceholder(),
      m.isSetup = !0,
      u.is(":disabled") && m.disable(),
      m.on("change", this.onChange),
      u.data("selectize", m),
      u.addClass("selectized"),
      m.trigger("initialize"),
      n.preload === !0 && m.onSearchChange("")
    },
    setupTemplates: function() {
      var b = this,
        c = b.settings.labelField,
        d = b.settings.optgroupLabelField,
        e = {
          optgroup: function(a) {
            return '<div class="optgroup">' + a.html + "</div>"
          },
          optgroup_header: function(a, b) {
            return '<div class="optgroup-header">' + b(a[d]) + "</div>"
          },
          option: function(a, b) {
            return '<div class="option">' + b(a[c]) + "</div>"
          },
          item: function(a, b) {
            return '<div class="item">' + b(a[c]) + "</div>"
          },
          option_create: function(a, b) {
            return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
          }
        };
      b.settings.render = a.extend({}, e, b.settings.render)
    },
    setupCallbacks: function() {
      var a,
        b,
        c = {
          initialize: "onInitialize",
          change: "onChange",
          item_add: "onItemAdd",
          item_remove: "onItemRemove",
          clear: "onClear",
          option_add: "onOptionAdd",
          option_remove: "onOptionRemove",
          option_clear: "onOptionClear",
          optgroup_add: "onOptionGroupAdd",
          optgroup_remove: "onOptionGroupRemove",
          optgroup_clear: "onOptionGroupClear",
          dropdown_open: "onDropdownOpen",
          dropdown_close: "onDropdownClose",
          type: "onType",
          load: "onLoad",
          focus: "onFocus",
          blur: "onBlur"
        };
      for (a in c) 
        c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
    },
    onClick: function(a) {
      var b = this;
      b.isFocused || (b.focus(), a.preventDefault())
    },
    onMouseDown: function(b) {
      var c = this,
        d = b.isDefaultPrevented();
      a(b.target);
      if (c.isFocused) {
        if (b.target !== c.$control_input[0]) 
          return "single" === c.settings.mode
            ? c.isOpen
              ? c.close()
              : c.open()
            : d || c.setActiveItem(null),
          !1
      } else 
        d || window.setTimeout(function() {
          c.focus()
        }, 0)
    },
    onChange: function() {
      this.$input.trigger("change")
    },
    onPaste: function(b) {
      var c = this;
      return c.isFull() || c.isInputHidden || c.isLocked
        ? void b.preventDefault()
        : void(c.settings.splitOn && setTimeout(function() {
          var b = c.$control_input.val();
          if (b.match(c.settings.splitOn)) 
            for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++) 
              c.createItem(d[e])
        }, 0))
    },
    onKeyPress: function(a) {
      if (this.isLocked) 
        return a && a.preventDefault();
      var b = String.fromCharCode(a.keyCode || a.which);
      return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter
        ? (this.createItem(), a.preventDefault(), !1)
        : void 0
    },
    onKeyDown: function(a) {
      var b = (a.target === this.$control_input[0], this);
      if (b.isLocked) 
        return void(a.keyCode !== u && a.preventDefault());
      switch (a.keyCode) {
        case g:
          if (b.isCmdDown) 
            return void b.selectAll();
          break;
        case i:
          return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
        case o:
          if (!a.ctrlKey || a.altKey) 
            break;
          case n:
          if (!b.isOpen && b.hasOptions) 
            b.open();
          else if (b.$activeOption) {
            b.ignoreHover = !0;
            var c = b.getAdjacentOption(b.$activeOption, 1);
            c.length && b.setActiveOption(c, !0, !0)
          }
          return void a.preventDefault();
        case l:
          if (!a.ctrlKey || a.altKey) 
            break;
          case k:
          if (b.$activeOption) {
            b.ignoreHover = !0;
            var d = b.getAdjacentOption(b.$activeOption, -1);
            d.length && b.setActiveOption(d, !0, !0)
          }
          return void a.preventDefault();
        case h:
          return void(b.isOpen && b.$activeOption && (b.onOptionSelect({currentTarget: b.$activeOption}), a.preventDefault()));
        case j:
          return void b.advanceSelection(-1, a);
        case m:
          return void b.advanceSelection(1, a);
        case u:
          return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({currentTarget: b.$activeOption}), b.isFull() || a.preventDefault()),
          void(b.settings.create && b.createItem() && a.preventDefault());
        case p:
        case q:
          return void b.deleteSelection(a)
      }
      return !b.isFull() && !b.isInputHidden || (f
        ? a.metaKey
        : a.ctrlKey)
        ? void 0
        : void a.preventDefault()
    },
    onKeyUp: function(a) {
      var b = this;
      if (b.isLocked) 
        return a && a.preventDefault();
      var c = b.$control_input.val() || "";
      b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
    },
    onSearchChange: function(a) {
      var b = this,
        c = b.settings.load;
      c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function(d) {
        c.apply(b, [a, d])
      })))
    },
    onFocus: function(a) {
      var b = this,
        c = b.isFocused;
      return b.isDisabled
        ? (b.blur(), a && a.preventDefault(), !1)
        : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
    },
    onBlur: function(a, b) {
      var c = this;
      if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
        if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) 
          return c.ignoreBlur = !0,
          void c.onFocus(a);
        var d = function() {
          c.close(),
          c.setTextboxValue(""),
          c.setActiveItem(null),
          c.setActiveOption(null),
          c.setCaret(c.items.length),
          c.refreshState(),
          b && b.focus && b.focus(),
          c.ignoreFocus = !1,
          c.trigger("blur")
        };
        c.ignoreFocus = !0,
        c.settings.create && c.settings.createOnBlur
          ? c.createItem(null, !1, d)
          : d()
      }
    },
    onOptionHover: function(a) {
      this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
    },
    onOptionSelect: function(b) {
      var c,
        d,
        e = this;
      b.preventDefault && (b.preventDefault(), b.stopPropagation()),
      d = a(b.currentTarget),
      d.hasClass("create")
        ? e.createItem(null, function() {
          e.settings.closeAfterSelect && e.close()
        })
        : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect
          ? e.close()
          : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
    },
    onItemSelect: function(a) {
      var b = this;
      b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
    },
    load: function(a) {
      var b = this,
        c = b.$wrapper.addClass(b.settings.loadingClass);
      b.loading++,
      a.apply(b, [function(a) {
          b.loading = Math.max(b.loading - 1, 0),
          a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)),
          b.loading || c.removeClass(b.settings.loadingClass),
          b.trigger("load", a)
        }
      ])
    },
    setTextboxValue: function(a) {
      var b = this.$control_input,
        c = b.val() !== a;
      c && (b.val(a).triggerHandler("update"), this.lastValue = a)
    },
    getValue: function() {
      return this.tagType === v && this.$input.attr("multiple")
        ? this.items
        : this.items.join(this.settings.delimiter)
    },
    setValue: function(a, b) {
      var c = b
        ? []
        : ["change"];
      E(this, c, function() {
        this.clear(b),
        this.addItems(a, b)
      })
    },
    setActiveItem: function(b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this;
      if ("single" !== l.settings.mode) {
        if (b = a(b), !b.length) 
          return a(l.$activeItems).removeClass("active"),
          l.$activeItems = [],
          void(l.isFocused && l.showInput());
        if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
          for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++) 
            i = l.$control[0].childNodes[e],
            l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
          c.preventDefault()
        } else 
          "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown
            ? b.hasClass("active")
              ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active"))
              : l.$activeItems.push(b.addClass("active")[0])
            : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
        l.hideInput(),
        this.isFocused || l.focus()
      }
    },
    setActiveOption: function(b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = this;
      j.$activeOption && j.$activeOption.removeClass("active"),
      j.$activeOption = null,
      b = a(b),
      b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c
        ? j.$dropdown_content.stop().animate({
          scrollTop: i
        }, d
          ? j.settings.scrollDuration
          : 0)
        : g < c && j.$dropdown_content.stop().animate({
          scrollTop: h
        }, d
          ? j.settings.scrollDuration
          : 0)))
    },
    selectAll: function() {
      var a = this;
      "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
    },
    hideInput: function() {
      var a = this;
      a.setTextboxValue(""),
      a.$control_input.css({
        opacity: 0,
        position: "absolute",
        left: a.rtl
          ? 1e4
          : -1e4
      }),
      a.isInputHidden = !0
    },
    showInput: function() {
      this.$control_input.css({opacity: 1, position: "relative", left: 0}),
      this.isInputHidden = !1
    },
    focus: function() {
      var a = this;
      a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function() {
        a.ignoreFocus = !1,
        a.onFocus()
      }, 0))
    },
    blur: function(a) {
      this.$control_input[0].blur(),
      this.onBlur(null, a)
    },
    getScoreFunction: function(a) {
      return this.sifter.getScoreFunction(a, this.getSearchOptions())
    },
    getSearchOptions: function() {
      var a = this.settings,
        b = a.sortField;
      return "string" == typeof b && (b = [
        {
          field: b
        }
      ]), {
        fields: a.searchField,
        conjunction: a.searchConjunction,
        sort: b
      }
    },
    search: function(b) {
      var c,
        d,
        e,
        f = this,
        g = f.settings,
        h = this.getSearchOptions();
      if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) 
        throw new Error('Selectize "score" setting must be a function that returns a function');
      if (b !== f.lastQuery
        ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {score: e})), f.currentResults = d)
        : d = a.extend(!0, {}, f.currentResults), g.hideSelected) 
        for (c = d.items.length - 1; c >= 0; c--) 
          f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
    return d
    },
    refreshOptions: function(b) {
      var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s;
      "undefined" == typeof b && (b = !0);
      var t = this,
        u = a.trim(t.$control_input.val()),
        v = t.search(u),
        w = t.$dropdown_content,
        x = t.$activeOption && z(t.$activeOption.attr("data-value"));
      for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++) 
        for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l)
          ? l
          : [l], e = 0, f = m && m.length; e < f; e++) 
          l = m[e],
          t.optgroups.hasOwnProperty(l) || (l = ""),
          h.hasOwnProperty(l) || (h[l] = document.createDocumentFragment(), i.push(l)),
          h[l].appendChild(k);
    for (this.settings.lockOptgroupOrder && i.sort(function(a, b) {
        var c = t.optgroups[a].$order || 0,
          d = t.optgroups[b].$order || 0;
        return c - d
      }), n = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++) 
        l = i[c],
        t.optgroups.hasOwnProperty(l) && h[l].childNodes.length
          ? (o = document.createDocumentFragment(), o.appendChild(t.render("optgroup_header", t.optgroups[l])), o.appendChild(h[l]), n.appendChild(t.render("optgroup", a.extend({}, t.optgroups[l], {
            html: K(o),
            dom: o
          }))))
          : n.appendChild(h[l]);
      if (w.html(n), t.settings.highlight && v.query.length && v.tokens.length) 
        for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++) 
          d(w, v.tokens[c].regex);
    if (!t.settings.hideSelected) 
        for (c = 0, g = t.items.length; c < g; c++) 
          t.getOption(t.items[c]).addClass("selected");
    p = t.canCreate(u),
      p && (w.prepend(t.render("option_create", {input: u})), s = a(w[0].childNodes[0])),
      t.hasOptions = v.items.length > 0 || p,
      t.hasOptions
        ? (v.items.length > 0
          ? (r = x && t.getOption(x), r && r.length
            ? q = r
            : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence
            ? t.getAdjacentOption(s, 1)
            : w.find("[data-selectable]:first")))
          : q = s, t.setActiveOption(q), b && !t.isOpen && t.open())
        : (t.setActiveOption(null), b && t.isOpen && t.close())
    },
    addOption: function(b) {
      var c,
        d,
        e,
        f = this;
      if (a.isArray(b)) 
        for (c = 0, d = b.length; c < d; c++) 
          f.addOption(b[c]);
    else 
        (e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
      },
      registerOption : function(a) {
        var b = z(a[this.settings.valueField]);
        return "undefined" != typeof b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b)
      },
      registerOptionGroup : function(a) {
        var b = z(a[this.settings.optgroupValueField]);
        return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b)
      },
      addOptionGroup : function(a, b) {
        b[this.settings.optgroupValueField] = a,
        (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
      },
      removeOptionGroup : function(a) {
        this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
      },
      clearOptionGroups : function() {
        this.optgroups = {},
        this.renderCache = {},
        this.trigger("optgroup_clear")
      },
      updateOption : function(b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this;
        if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
          if ("string" != typeof f) 
            throw new Error("Value must be set in option data");
          j = k.options[b].$order,
          f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)),
          c.$order = c.$order || j,
          k.options[f] = c,
          h = k.renderCache.item,
          i = k.renderCache.option,
          h && (delete h[b], delete h[f]),
          i && (delete i[b], delete i[f]),
          k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)),
          k.lastQuery = null,
          k.isOpen && k.refreshOptions(!1)
        }
      },
      removeOption : function(a, b) {
        var c = this;
        a = z(a);
        var d = c.renderCache.item,
          e = c.renderCache.option;
        d && delete d[a],
        e && delete e[a],
        delete c.userOptions[a],
        delete c.options[a],
        c.lastQuery = null,
        c.trigger("option_remove", a),
        c.removeItem(a, b)
      },
      clearOptions : function() {
        var a = this;
        a.loadedSearches = {},
        a.userOptions = {},
        a.renderCache = {},
        a.options = a.sifter.items = {},
        a.lastQuery = null,
        a.trigger("option_clear"),
        a.clear()
      },
      getOption : function(a) {
        return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
      },
      getAdjacentOption : function(b, c) {
        var d = this.$dropdown.find("[data-selectable]"),
          e = d.index(b) + c;
        return e >= 0 && e < d.length
          ? d.eq(e)
          : a()
      },
      getElementWithValue : function(b, c) {
        if (b = z(b), "undefined" != typeof b && null !== b) 
          for (var d = 0, e = c.length; d < e; d++) 
            if (c[d].getAttribute("data-value") === b) 
              return a(c[d]);
      return a()
      },
      getItem : function(a) {
        return this.getElementWithValue(a, this.$control.children())
      },
      addItems : function(b, c) {
        for (var d = a.isArray(b)
          ? b
          : [b], e = 0, f = d.length; e < f; e++) 
          this.isPending = e < f - 1,
          this.addItem(d[e], c)
      },
      addItem : function(b, c) {
        var d = c
          ? []
          : ["change"];
        E(this, d, function() {
          var d,
            e,
            f,
            g,
            h,
            i = this,
            j = i.settings.mode;
          return b = z(b),
          i.items.indexOf(b) !== -1
            ? void("single" === j && i.close())
            : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull()
              ? i.close()
              : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({silent: c})))))
        })
      },
      removeItem : function(b, c) {
        var d,
          e,
          f,
          g = this;
        d = b instanceof a
          ? b
          : g.getItem(b),
        b = z(d.attr("data-value")),
        e = g.items.indexOf(b),
        e !== -1 && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({silent: c}), g.positionDropdown(), g.trigger("item_remove", b, d))
      },
      createItem : function(b, c) {
        var d = this,
          e = d.caretPos;
        b = b || a.trim(d.$control_input.val() || "");
        var f = arguments[arguments.length - 1];
        if ("function" != typeof f && (f = function() {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) 
          return f(),
          !1;
        d.lock();
        var g = "function" == typeof d.settings.create
            ? this.settings.create
            : function(a) {
              var b = {};
              return b[d.settings.labelField] = a,
              b[d.settings.valueField] = a,
              b
            },
          h = C(function(a) {
            if (d.unlock(), !a || "object" != typeof a) 
              return f();
            var b = z(a[d.settings.valueField]);
            return "string" != typeof b
              ? f()
              : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
          }),
          i = g.apply(this, [b, h]);
        return "undefined" != typeof i && h(i),
        !0
      },
      refreshItems : function() {
        this.lastQuery = null,
        this.isSetup && this.addItem(this.items),
        this.refreshState(),
        this.updateOriginalInput()
      },
      refreshState : function() {
        this.refreshValidityState(),
        this.refreshClasses()
      },
      refreshValidityState : function() {
        if (!this.isRequired) 
          return !1;
        var a = !this.items.length;
        this.isInvalid = a,
        this.$control_input.prop("required", a),
        this.$input.prop("required", !a)
      },
      refreshClasses : function() {
        var b = this,
          c = b.isFull(),
          d = b.isLocked;
        b.$wrapper.toggleClass("rtl", b.rtl),
        b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0),
        b.$control_input.data("grow", !c && !d)
      },
      isFull : function() {
        return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
      },
      updateOriginalInput : function(a) {
        var b,
          c,
          d,
          e,
          f = this;
        if (a = a || {}, f.tagType === v) {
          for (d = [], b = 0, c = f.items.length; b < c; b++) 
            e = f.options[f.items[b]][f.settings.labelField] || "",
            d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
          d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'),
          f.$input.html(d.join(""))
        } else 
          f.$input.val(f.getValue()),
          f.$input.attr("value", f.$input.val());
        f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
      },
      updatePlaceholder : function() {
        if (this.settings.placeholder) {
          var a = this.$control_input;
          this.items.length
            ? a.removeAttr("placeholder")
            : a.attr("placeholder", this.settings.placeholder),
          a.triggerHandler("update", {
            force: !0
          })
        }
      },
      open : function() {
        var a = this;
        a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({visibility: "hidden", display: "block"}), a.positionDropdown(), a.$dropdown.css({visibility: "visible"}), a.trigger("dropdown_open", a.$dropdown))
      },
      close : function() {
        var a = this,
          b = a.isOpen;
        "single" === a.settings.mode && a.items.length && (a.hideInput(), a.$control_input.blur()),
        a.isOpen = !1,
        a.$dropdown.hide(),
        a.setActiveOption(null),
        a.refreshState(),
        b && a.trigger("dropdown_close", a.$dropdown)
      },
      positionDropdown : function() {
        var a = this.$control,
          b = "body" === this.settings.dropdownParent
            ? a.offset()
            : a.position();
        b.top += a.outerHeight(!0),
        this.$dropdown.css({width: a.outerWidth(), top: b.top, left: b.left})
      },
      clear : function(a) {
        var b = this;
        b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({silent: a}), b.refreshState(), b.showInput(), b.trigger("clear"))
      },
      insertAtCaret : function(b) {
        var c = Math.min(this.caretPos, this.items.length);
        0 === c
          ? this.$control.prepend(b)
          : a(this.$control[0].childNodes[c]).before(b),
        this.setCaret(c + 1)
      },
      deleteSelection : function(b) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this;
        if (e = b && b.keyCode === p
          ? -1
          : 1, f = G(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
          for (k = l.$control.children(".active:" + (e > 0
            ? "last"
            : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++) 
            g.push(a(l.$activeItems[c]).attr("data-value"));
          b && (b.preventDefault(), b.stopPropagation())
        } else 
          (l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length
            ? g.push(l.items[l.caretPos - 1])
            : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
          if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) 
            return !1;
          for ("undefined" != typeof h && l.setCaret(h); g.length;) 
            l.removeItem(g.pop());
          return l.showInput(),
          l.positionDropdown(),
          l.refreshOptions(!0),
          i && (j = l.getOption(i), j.length && l.setActiveOption(j)),
          !0
        },
        advanceSelection : function(a, b) {
          var c,
            d,
            e,
            f,
            g,
            h,
            i = this;
          0 !== a && (i.rtl && (a *= -1), c = a > 0
            ? "last"
            : "first", d = G(i.$control_input[0]), i.isFocused && !i.isInputHidden
            ? (f = i.$control_input.val().length, g = a < 0
              ? 0 === d.start && 0 === d.length
              : d.start === f, g && !f && i.advanceCaret(a, b))
            : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0
              ? e + 1
              : e))))
        },
        advanceCaret : function(a, b) {
          var c,
            d,
            e = this;
          0 !== a && (c = a > 0
            ? "next"
            : "prev", e.isShiftDown
            ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault()))
            : e.setCaret(e.caretPos + a))
        },
        setCaret : function(b) {
          var c = this;
          if (b = "single" === c.settings.mode
            ? c.items.length
            : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
            var d,
              e,
              f,
              g;
            for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++) 
              g = a(f[d]).detach(),
              d < b
                ? c.$control_input.before(g)
                : c.$control.append(g)
            }
          c.caretPos = b
        },
        lock : function() {
          this.close(),
          this.isLocked = !0,
          this.refreshState()
        },
        unlock : function() {
          this.isLocked = !1,
          this.refreshState()
        },
        disable : function() {
          var a = this;
          a.$input.prop("disabled", !0),
          a.$control_input.prop("disabled", !0).prop("tabindex", -1),
          a.isDisabled = !0,
          a.lock()
        },
        enable : function() {
          var a = this;
          a.$input.prop("disabled", !1),
          a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex),
          a.isDisabled = !1,
          a.unlock()
        },
        destroy : function() {
          var b = this,
            c = b.eventNS,
            d = b.revertSettings;
          b.trigger("destroy"),
          b.off(),
          b.$wrapper.remove(),
          b.$dropdown.remove(),
          b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex: d.tabindex}).show(),
          b.$control_input.removeData("grow"),
          b.$input.removeData("selectize"),
          a(window).off(c),
          a(document).off(c),
          a(document.body).off(c),
          delete b.$input[0].selectize
        },
        render : function(b, c) {
          var d,
            e,
            f = "",
            g = !1,
            h = this;
          return "option" !== b && "item" !== b || (d = z(c[h.settings.valueField]), g = !!d),
          g && (y(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d))
            ? h.renderCache[b][d]
            : (f = a(h.settings.render[b].apply(this, [c, A])), "option" === b || "option_create" === b
              ? f.attr("data-selectable", "")
              : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e)), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0])
        },
        clearCache : function(a) {
          var b = this;
          "undefined" == typeof a
            ? b.renderCache = {}
            : delete b.renderCache[a]
        },
        canCreate : function(a) {
          var b = this;
          if (!b.settings.create) 
            return !1;
          var c = b.settings.createFilter;
          return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
        }
      }),
      M.count = 0,
      M.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
      },
      a.fn.selectize = function(b) {
        var c = a.fn.selectize.defaults,
          d = a.extend({}, c, b),
          e = d.dataAttr,
          f = d.labelField,
          g = d.valueField,
          h = d.optgroupField,
          i = d.optgroupLabelField,
          j = d.optgroupValueField,
          k = function(b, c) {
            var h,
              i,
              j,
              k,
              l = b.attr(e);
            if (l) 
              for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++) 
                c.items.push(c.options[h][g]);
              else {
                var m = a.trim(b.val() || "");
              if (!d.allowEmptyOption && !m.length) 
                return;
              for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++) 
                k = {}
              ,
              k[f] = j[h],
              k[g] = j[h],
              c.options.push(k);
              c.items = j
            }
          },
          l = function(b, c) {
            var k,
              l,
              m,
              n,
              o = c.options,
              p = {},
              q = function(a) {
                var b = e && a.attr(e);
                return "string" == typeof b && b.length
                  ? JSON.parse(b)
                  : null
              },
              r = function(b, e) {
                b = a(b);
                var i = z(b.val());
                if (i || d.allowEmptyOption) 
                  if (p.hasOwnProperty(i)) {
                    if (e) {
                      var j = p[i][h];
                      j
                        ? a.isArray(j)
                          ? j.push(e)
                          : p[i][h] = [j, e]
                        : p[i][h] = e
                    }
                  }
                else {
                  var k = q(b) || {};
                  k[f] = k[f] || b.text(),
                  k[g] = k[g] || i,
                  k[h] = k[h] || e,
                  p[i] = k,
                  o.push(k),
                  b.is(":selected") && c.items.push(i)
                }
              },
              s = function(b) {
                var d,
                  e,
                  f,
                  g,
                  h;
                for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++) 
                  r(h[d], f)
              };
            for (c.maxItems = b.attr("multiple")
              ? null
              : 1, n = b.children(), k = 0, l = n.length; k < l; k++) 
              m = n[k].tagName.toLowerCase(),
              "optgroup" === m
                ? s(n[k])
                : "option" === m && r(n[k])
            };
        return this.each(function() {
          if (!this.selectize) {
            var e,
              f = a(this),
              g = this.tagName.toLowerCase(),
              h = f.attr("placeholder") || f.attr("data-placeholder");
            h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
            var i = {
              placeholder: h,
              options: [],
              optgroups: [],
              items: []
            };
            "select" === g
              ? l(f, i)
              : k(f, i),
            e = new M(f, a.extend(!0, {}, c, i, b))
          }
        })
      },
      a.fn.selectize.defaults = M.defaults,
      a.fn.selectize.support = {
        validity: x
      },
      M.define("drag_drop", function(b) {
        if (!a.fn.sortable) 
          throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
          var c = this;
          c.lock = function() {
            var a = c.lock;
            return function() {
              var b = c.$control.data("sortable");
              return b && b.disable(),
              a.apply(c, arguments)
            }
          }(),
          c.unlock = function() {
            var a = c.unlock;
            return function() {
              var b = c.$control.data("sortable");
              return b && b.enable(),
              a.apply(c, arguments)
            }
          }(),
          c.setup = function() {
            var b = c.setup;
            return function() {
              b.apply(this, arguments);
              var d = c.$control.sortable({
                items: "[data-value]",
                forcePlaceholderSize: !0,
                disabled: c.isLocked,
                start: function(a, b) {
                  b.placeholder.css("width", b.helper.css("width")),
                  d.css({overflow: "visible"})
                },
                stop: function() {
                  d.css({overflow: "hidden"});
                  var b = c.$activeItems
                      ? c.$activeItems.slice()
                      : null,
                    e = [];
                  d.children("[data-value]").each(function() {
                    e.push(a(this).attr("data-value"))
                  }),
                  c.setValue(e),
                  c.setActiveItem(b)
                }
              })
            }
          }()
        }
      }),
      M.define("dropdown_header", function(b) {
        var c = this;
        b = a.extend({
          title: "Untitled",
          headerClass: "selectize-dropdown-header",
          titleRowClass: "selectize-dropdown-header-title",
          labelClass: "selectize-dropdown-header-label",
          closeClass: "selectize-dropdown-header-close",
          html: function(a) {
            return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
          }
        }, b),
        c.setup = function() {
          var d = c.setup;
          return function() {
            d.apply(c, arguments),
            c.$dropdown_header = a(b.html(b)),
            c.$dropdown.prepend(c.$dropdown_header)
          }
        }()
      }),
      M.define("optgroup_columns", function(b) {
        var c = this;
        b = a.extend({
          equalizeWidth: !0,
          equalizeHeight: !0
        }, b),
        this.getAdjacentOption = function(b, c) {
          var d = b.closest("[data-group]").find("[data-selectable]"),
            e = d.index(b) + c;
          return e >= 0 && e < d.length
            ? d.eq(e)
            : a()
        },
        this.onKeyDown = function() {
          var a = c.onKeyDown;
          return function(b) {
            var d,
              e,
              f,
              g;
            return !this.isOpen || b.keyCode !== j && b.keyCode !== m
              ? a.apply(this, arguments)
              : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j
                ? g.prev("[data-group]")
                : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
          }
        }();
        var d = function() {
            var a,
              b = d.width,
              c = document;
            return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)),
            b
          },
          e = function() {
            var e,
              f,
              g,
              h,
              i,
              j,
              k;
            if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
              if (b.equalizeHeight) {
                for (g = 0, e = 0; e < f; e++) 
                  g = Math.max(g, k.eq(e).height());
                k.css({height: g})
              }
              b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({width: h}), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({width: i})))
            }
          };
        (b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), B.after(this, "refreshOptions", e))
      }),
      M.define("remove_button", function(b) {
        b = a.extend({
          label: "&times;",
          title: "Remove",
          className: "remove",
          append: !0
        }, b);
        var c = function(b, c) {
            c.className = "remove-single";
            var d = b,
              e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
              f = function(a, b) {
                return a + b
              };
            b.setup = function() {
              var g = d.setup;
              return function() {
                if (c.append) {
                  var h = a(d.$input.context).attr("id"),
                    i = (a("#" + h), d.settings.render.item);
                  d.settings.render.item = function(a) {
                    return f(i.apply(b, arguments), e)
                  }
                }
                g.apply(b, arguments),
                b.$control.on("click", "." + c.className, function(a) {
                  a.preventDefault(),
                  d.isLocked || d.clear()
                })
              }
            }()
          },
          d = function(b, c) {
            var d = b,
              e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
              f = function(a, b) {
                var c = a.search(/(<\/[^>]+>\s*)$/);
                return a.substring(0, c) + b + a.substring(c)
              };
            b.setup = function() {
              var g = d.setup;
              return function() {
                if (c.append) {
                  var h = d.settings.render.item;
                  d.settings.render.item = function(a) {
                    return f(h.apply(b, arguments), e)
                  }
                }
                g.apply(b, arguments),
                b.$control.on("click", "." + c.className, function(b) {
                  if (b.preventDefault(), !d.isLocked) {
                    var c = a(b.currentTarget).parent();
                    d.setActiveItem(c),
                    d.deleteSelection() && d.setCaret(d.items.length)
                  }
                })
              }
            }()
          };
        return "single" === this.settings.mode
          ? void c(this, b)
          : void d(this, b)
      }),
      M.define("restore_on_backspace", function(a) {
        var b = this;
        a.text = a.text || function(a) {
          return a[this.settings.labelField]
        },
        this.onKeyDown = function() {
          var c = b.onKeyDown;
          return function(b) {
            var d,
              e;
            return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length)
              ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault())
              : c.apply(this, arguments)
          }
        }()
      }),
      M
    });
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {typeof define === 'function' && define.amd ? define(['jquery'], a) : a(typeof exports === 'object' ? require('jquery') : window.jQuery || window.Zepto);}(function (a) {var b, c, d, e, f, g, h = 'Close', i = 'BeforeClose', j = 'AfterClose', k = 'BeforeAppend', l = 'MarkupParse', m = 'Open', n = 'Change', o = 'mfp', p = '.' + o, q = 'mfp-ready', r = 'mfp-removing', s = 'mfp-prevent-close', t = function () {}, u = !!window.jQuery, v = a(window), w = function (a, c) {b.ev.on(o + a + p, c);}, x = function (b, c, d, e) {var f = document.createElement('div'); return f.className = 'mfp-' + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;}, y = function (c, d) {b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));}, z = function (c) {return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace('%title%', b.st.tClose)), g = c), b.currTemplate.closeBtn;}, A = function () {a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);}, B = function () {var a = document.createElement('p').style, b = ['ms', 'O', 'Moz', 'Webkit']; if (void 0 !== a.transition) return !0; for (;b.length;) if (b.pop() + 'Transition' in a) return !0; return !1;}; t.prototype = {constructor: t, init: function () {var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};}, open: function (c) {var e; if (c.isObj === !1) {b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {b.index = e; break;}} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = '', c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = b.st.fixedContentPos === 'auto' ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x('bg').on('click' + p, function () {b.close();}), b.wrap = x('wrap').attr('tabindex', -1).on('click' + p, function (a) {b._checkIfClose(a.target) && b.close();}), b.container = x('container', b.wrap)), b.contentContainer = x('content'), b.st.preloader && (b.preloader = x('preloader', b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) {var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b['init' + j].call(b);}y('BeforeOpen'), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {c.close_replaceWith = z(d.type);}), f += ' mfp-close-btn-in') : b.wrap.append(z())), b.st.alignTop && (f += ' mfp-align-top'), b.fixedContentPos ? b.wrap.css({overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY}) : b.wrap.css({top: v.scrollTop(), position: 'absolute'}), (b.st.fixedBgPos === !1 || b.st.fixedBgPos === 'auto' && !b.fixedContentPos) && b.bgOverlay.css({height: d.height(), position: 'absolute'}), b.st.enableEscapeKey && d.on('keyup' + p, function (a) {a.keyCode === 27 && b.close();}), v.on('resize' + p, function () {b.updateSize();}), b.st.closeOnContentClick || (f += ' mfp-auto-cursor'), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) {var o = b._getScrollbarSize(); o && (n.marginRight = o);}b.fixedContentPos && (b.isIE7 ? a('body, html').css('overflow', 'hidden') : n.overflow = 'hidden'); var r = b.st.mainClass; return b.isIE7 && (r += ' mfp-ie7'), r && b._addClassToMFP(r), b.updateItemHTML(), y('BuildControls'), a('html').css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on('focusin' + p, b._onFocusIn);}, 16), b.isOpen = !0, b.updateSize(k), y(m), c;}, close: function () {b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {b._close();}, b.st.removalDelay)) : b._close());}, _close: function () {y(h); var c = r + ' ' + q + ' '; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + ' '), b._removeClassFromMFP(c), b.fixedContentPos) {var e = {marginRight: ''}; b.isIE7 ? a('body, html').css('overflow', '') : e.overflow = '', a('html').css(e);}d.off('keyup' + p + ' focusin' + p), b.ev.off(p), b.wrap.attr('class', 'mfp-wrap').removeAttr('style'), b.bgOverlay.attr('class', 'mfp-bg'), b.container.attr('class', 'mfp-container'), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);}, updateSize: function (a) {if (b.isIOS) {var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css('height', d), b.wH = d;} else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');}, updateItemHTML: function () {var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]), b.currItem = c, !b.currTemplate[d]) {var f = b.st[d] ? b.st[d].markup : !1; y('FirstMarkupParse', f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;}e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder'); var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y('AfterChange');}, appendContent: function (a, c) {b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find('.mfp-close').length || b.content.append(z()) : b.content = a : b.content = '', y(k), b.container.addClass('mfp-' + c + '-holder'), b.contentContainer.append(b.content);}, parseEl: function (c) {var d, e = b.items[c]; if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass('mfp-' + f[g])) {d = f[g]; break;}e.src = e.el.attr('data-mfp-src'), e.src || (e.src = e.el.attr('href'));} return e.type = d || b.st.type || 'inline', e.index = c, e.parsed = !0, b.items[c] = e, y('ElementParse', e), b.items[c];}, addGroup: function (a, c) {var d = function (d) {d.mfpEl = this, b._openClick(d, a, c);}; c || (c = {}); var e = 'click.magnificPopup'; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));}, _openClick: function (c, d, e) {var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(c.which === 2 || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) {if (!g.call(b)) return !0;} else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);}}, updateStatus: function (a, d) {if (b.preloader) {c !== a && b.container.removeClass('mfp-s-' + c), d || a !== 'loading' || (d = b.st.tLoading); var e = {status: a, text: d}; y('UpdateStatus', e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find('a').on('click', function (a) {a.stopImmediatePropagation();}), b.container.addClass('mfp-s-' + a), c = a;}}, _checkIfClose: function (c) {if (!a(c).hasClass(s)) {var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass('mfp-close') || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) {if (d) return !0;} else if (e && a.contains(document, c)) return !0; return !1;}}, _addClassToMFP: function (a) {b.bgOverlay.addClass(a), b.wrap.addClass(a);}, _removeClassFromMFP: function (a) {this.bgOverlay.removeClass(a), b.wrap.removeClass(a);}, _hasScrollBar: function (a) {return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());}, _setFocus: function () {(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();}, _onFocusIn: function (c) {return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);}, _parseMarkup: function (b, c, d) {var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {if (void 0 === d || d === !1) return !0; if (e = c.split('_'), e.length > 1) {var f = b.find(p + '-' + e[0]); if (f.length > 0) {var g = e[1]; g === 'replaceWith' ? f[0] !== d[0] && f.replaceWith(d) : g === 'img' ? f.is('img') ? f.attr('src', d) : f.replaceWith(a('<img>').attr('src', d).attr('class', f.attr('class'))) : f.attr(e[1], d);}} else b.find(p + '-' + c).html(d);});}, _getScrollbarSize: function () {if (void 0 === b.scrollbarSize) {var a = document.createElement('div'); a.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);} return b.scrollbarSize;}}, a.magnificPopup = {instance: null, proto: t.prototype, modules: [], open: function (b, c) {return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);}, close: function () {return a.magnificPopup.instance && a.magnificPopup.instance.close();}, registerModule: function (b, c) {c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);}, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: '', preloader: !0, focus: '', closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...', autoFocusLast: !0}}, a.fn.magnificPopup = function (c) {A(); var d = a(this); if (typeof c === 'string') if (c === 'open') {var e, f = u ? d.data('magnificPopup') : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f);} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data('magnificPopup', c) : d[0].magnificPopup = c, b.addGroup(d, c); return d;}; var C, D, E, F = 'inline', G = function () {E && (D.after(E.addClass(C)).detach(), E = null);}; a.magnificPopup.registerModule(F, {options: {hiddenClass: 'hide', markup: '', tNotFound: 'Content not found'}, proto: {initInline: function () {b.types.push(F), w(h + '.' + F, function () {G();});}, getInline: function (c, d) {if (G(), c.src) {var e = b.st.inline, f = a(c.src); if (f.length) {var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = 'mfp-' + C), E = f.after(D).detach().removeClass(C)), b.updateStatus('ready');} else b.updateStatus('error', e.tNotFound), f = a('<div>'); return c.inlineElement = f, f;} return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;}}}); var H, I = 'ajax', J = function () {H && a(document.body).removeClass(H);}, K = function () {J(), b.req && b.req.abort();}; a.magnificPopup.registerModule(I, {options: {settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function () {b.types.push(I), H = b.st.ajax.cursor, w(h + '.' + I, K), w('BeforeChange.' + I, K);}, getAjax: function (c) {H && a(document.body).addClass(H), b.updateStatus('loading'); var d = a.extend({url: c.src, success: function (d, e, f) {var g = {data: d, xhr: f}; y('ParseAjax', g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {b.wrap.addClass(q);}, 16), b.updateStatus('ready'), y('AjaxContentAdded');}, error: function () {J(), c.finished = c.loadError = !0, b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src));}}, b.st.ajax.settings); return b.req = a.ajax(d), '';}}}); var L, M = function (c) {if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) {if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || '';} return '';}; a.magnificPopup.registerModule('image', {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function () {var c = b.st.image, d = '.image'; b.types.push('image'), w(m + d, function () {b.currItem.type === 'image' && c.cursor && a(document.body).addClass(c.cursor);}), w(h + d, function () {c.cursor && a(document.body).removeClass(c.cursor), v.off('resize' + p);}), w('Resize' + d, b.resizeImage), b.isLowIE && w('AfterChange', b.resizeImage);}, resizeImage: function () {var a = b.currItem; if (a && a.img && b.st.image.verticalFit) {var c = 0; b.isLowIE && (c = parseInt(a.img.css('padding-top'), 10) + parseInt(a.img.css('padding-bottom'), 10)), a.img.css('max-height', b.wH - c);}}, _onImageHasSize: function (a) {a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y('ImageHasSize', a), a.imgHidden && (b.content && b.content.removeClass('mfp-loading'), a.imgHidden = !1));}, findImageSize: function (a) {var c = 0, d = a.img[0], e = function (f) {L && clearInterval(L), L = setInterval(function () {return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (c === 3 ? e(10) : c === 40 ? e(50) : c === 100 && e(500)));}, f);}; e(1);}, getImage: function (c, d) {var e = 0, f = function () {c && (c.img[0].complete ? (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('ready')), c.hasSize = !0, c.loaded = !0, y('ImageLoadComplete')) : (e++, e < 200 ? setTimeout(f, 100) : g()));}, g = function () {c && (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);}, h = b.st.image, i = d.find('.mfp-img'); if (i.length) {var j = document.createElement('img'); j.className = 'mfp-img', c.el && c.el.find('img').length && (j.alt = c.el.find('img').attr('alt')), c.img = a(j).on('load.mfploader', f).on('error.mfploader', g), j.src = c.src, i.is('img') && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);} return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass('mfp-loading'), b.updateStatus('error', h.tError.replace('%url%', c.src))) : (d.removeClass('mfp-loading'), b.updateStatus('ready')), d) : (b.updateStatus('loading'), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass('mfp-loading'), b.findImageSize(c)), d);}}}); var N, O = function () {return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N;}; a.magnificPopup.registerModule('zoom', {options: {enabled: !1, easing: 'ease-in-out', duration: 300, opener: function (a) {return a.is('img') ? a : a.find('img');}}, proto: {initZoom: function () {var a, c = b.st.zoom, d = '.zoom'; if (c.enabled && b.supportsTransition) {var e, f, g = c.duration, j = function (a) {var b = a.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'), d = 'all ' + c.duration / 1e3 + 's ' + c.easing, e = {position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden'}, f = 'transition'; return e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d, b.css(e), b;}, k = function () {b.content.css('visibility', 'visible');}; w('BuildControls' + d, function () {if (b._allowZoom()) {if (clearTimeout(e), b.content.css('visibility', 'hidden'), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {f.css(b._getOffset(!0)), e = setTimeout(function () {k(), setTimeout(function () {f.remove(), a = f = null, y('ZoomAnimationEnded');}, 16);}, g);}, 16);}}), w(i + d, function () {if (b._allowZoom()) {if (clearTimeout(e), b.st.removalDelay = g, !a) {if (a = b._getItemToZoom(), !a) return; f = j(a);}f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css('visibility', 'hidden'), setTimeout(function () {f.css(b._getOffset());}, 16);}}), w(h + d, function () {b._allowZoom() && (k(), f && f.remove(), a = null);});}}, _allowZoom: function () {return b.currItem.type === 'image';}, _getItemToZoom: function () {return b.currItem.hasSize ? b.currItem.img : !1;}, _getOffset: function (c) {var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css('padding-top'), 10), g = parseInt(d.css('padding-bottom'), 10); e.top -= a(window).scrollTop() - f; var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f}; return O() ? h['-moz-transform'] = h.transform = 'translate(' + e.left + 'px,' + e.top + 'px)' : (h.left = e.left, h.top = e.top), h;}}}); var P = 'iframe', Q = '//about:blank', R = function (a) {if (b.currTemplate[P]) {var c = b.currTemplate[P].find('iframe'); c.length && (a || (c[0].src = Q), b.isIE8 && c.css('display', a ? 'block' : 'none'));}}; a.magnificPopup.registerModule(P, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: 'iframe_src', patterns: {youtube: {index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1'}, vimeo: {index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1'}, gmaps: {index: '//maps.google.', src: '%id%&output=embed'}}}, proto: {initIframe: function () {b.types.push(P), w('BeforeChange', function (a, b, c) {b !== c && (b === P ? R() : c === P && R(!0));}), w(h + '.' + P, function () {R();});}, getIframe: function (c, d) {var e = c.src, f = b.st.iframe; a.each(f.patterns, function () {return e.indexOf(this.index) > -1 ? (this.id && (e = typeof this.id === 'string' ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace('%id%', e), !1) : void 0;}); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d;}}}); var S = function (a) {var c = b.items.length; return a > c - 1 ? a - c : a < 0 ? c + a : a;}, T = function (a, b, c) {return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);}; a.magnificPopup.registerModule('gallery', {options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%'}, proto: {initGallery: function () {var c = b.st.gallery, e = '.mfp-gallery'; return b.direction = !0, c && c.enabled ? (f += ' mfp-gallery', w(m + e, function () {c.navigateByImgClick && b.wrap.on('click' + e, '.mfp-img', function () {return b.items.length > 1 ? (b.next(), !1) : void 0;}), d.on('keydown' + e, function (a) {a.keyCode === 37 ? b.prev() : a.keyCode === 39 && b.next();});}), w('UpdateStatus' + e, function (a, c) {c.text && (c.text = T(c.text, b.currItem.index, b.items.length));}), w(l + e, function (a, d, e, f) {var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';}), w('BuildControls' + e, function () {if (b.items.length > 1 && c.arrows && !b.arrowLeft) {var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right')).addClass(s); e.click(function () {b.prev();}), f.click(function () {b.next();}), b.container.append(e.add(f));}}), w(n + e, function () {b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {b.preloadNearbyImages(), b._preloadTimeout = null;}, 16);}), void w(h + e, function () {d.off(e), b.wrap.off('click' + e), b.arrowRight = b.arrowLeft = null;})) : !1;}, next: function () {b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();}, prev: function () {b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();}, goTo: function (a) {b.direction = a >= b.index, b.index = a, b.updateItemHTML();}, preloadNearbyImages: function () {var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a);}, _preloadItem: function (c) {if (c = S(c), !b.items[c].preloaded) {var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y('LazyLoad', d), d.type === 'image' && (d.img = a('<img class="mfp-img" />').on('load.mfploader', function () {d.hasSize = !0;}).on('error.mfploader', function () {d.hasSize = !0, d.loadError = !0, y('LazyLoadError', d);}).attr('src', d.src)), d.preloaded = !0;}}}}); var U = 'retina'; a.magnificPopup.registerModule(U, {options: {replaceSrc: function (a) {return a.src.replace(/\.\w+$/, function (a) {return '@2x' + a;});}, ratio: 1}, proto: {initRetina: function () {if (window.devicePixelRatio > 1) {var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w('ImageHasSize.' + U, function (a, b) {b.img.css({'max-width': b.img[0].naturalWidth / c, width: '100%'});}), w('ElementParse.' + U, function (b, d) {d.src = a.replaceSrc(d, c);}));}}}}), A();}));

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
