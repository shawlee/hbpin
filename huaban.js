!
function() {
  "undefined" == typeof window.HUABAN_GLOBAL && (window.HUABAN_GLOBAL = {},
  function(e, t, n) {
    {
      var i = "1.1.2",
      o = t.documentElement,
      r = /(^\n+)|(\n+$)/g,
      a = /^(?:\{.*\}|\[.*\])$/,
      l = /-([a-z])/gi,
      s = /\r\n/g,
      c = /[\-\+0-9\.]/gi,
      u = /\s+/,
      p = /\?/,
      d = /opacity=([^)]*)/,
      h = /^[\],:{}\s]*$/,
      g = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      f = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      m = /(?:^|:|,)(?:\s*\[)+/g,
      v = "height margin-top margin-bottom padding-top padding-bottom".split(" "),
      b = {},
      x = {},
      y = [],
      $ = function() {
        z(y,
        function(e) {
          e()
        }),
        t.removeEventListener("DOMContentLoaded", $, !1)
      },
      w = function(e, n) {
        var i = typeof n;
        if ("string" === i) {
          var o = e && e.ownerDocument || t,
          r = o.createDocumentFragment(),
          a = H("div");
          for (a.innerHTML = n; null != a.childNodes[0];) r.appendChild(a.childNodes[0]);
          n = r,
          a = null
        }
        return "number" === i && (n += ""),
        n
      },
      U = function(e, t) {
        if (null !== e) {
          if (t === n) return e;
          var i = 0,
          o = e.length;
          if (o !== n && o > 0) {
            for (; o > i && t.call(e[i], e[i], e[i++]) !== !1;);
            return e
          }
          return t.call(e, e)
        }
      },
      N = function(e, n, i, o) {
        return U(e,
        function(e) {
          var r, a, l = {},
          s = "show" === n,
          c = e.style,
          u = e._display;
          u || (u = j.get(e, "display"), ("none" === u || "inherit" === u) && (r = P(t.body, H(e.nodeName)), u = j.get(r, "display"), W(r)), e._display = u),
          s ? c.display = u: u = "none",
          i ? (a = j.get(e, "overflow"), c.overflow = "hidden", l.opacity = s ? {
            from: 0,
            to: 1
          }: {
            from: 1,
            to: 0
          },
          z(v,
          function(t) {
            l[t] = s ? {
              from: 0,
              to: j.get(e, t)
            }: 0
          }), J(e, l, i,
          function() {
            z(v,
            function(t) {
              O.set(e, t, "")
            }),
            c.filter = c.opacity = c.overflow = "",
            c.display = u,
            o && o.call(e)
          })) : c.display = u
        })
      },
      A = function(e, t) {
        if ("object" == typeof t) {
          var n = [];
          return z(t,
          function(t, i) {
            n.push("object" == typeof t ? A(e + "[" + i + "]", t) : e + "[" + K(i) + "]=" + K(t))
          }),
          n.join("&")
        }
        return K(e) + "=" + K(t)
      },
      k = t.removeEventListener ?
      function(e, t, n) {
        e.removeEventListener(t, n, !1)
      }: function(e, t, n) {
        e.detachEvent("on" + t, n)
      },
      B = function() {
        try {
          return localStorage.setItem("test", "test"),
          localStorage.removeItem("test"),
          !0
        } catch(e) {
          return ! 1
        }
      } (),
      S = {},
      E = S.$ = function(e) {
        return t.getElementById(e)
      },
      z = S.$each = function(e, t) {
        var n, i = 0,
        o = e.length,
        r = typeof e,
        a = "object" === r;
        if (a && o - 1 in e) for (; o > i && t.call(e[i], e[i++], i) !== !1;);
        else if (a) for (n in e) t.call(e[n], e[n], n);
        else t.call(e, e, 0);
        return e
      },
      _ = (S.$id = function(e, t) {
        var n, i = [];
        return z(e instanceof Array ? e: e.split(" "),
        function(e) {
          n = E(e),
          null !== n && i.push(n)
        }),
        t ? U(i, t) : i
      },
      S.$dom = function(e, t) {
        return t && (e.length ? U(e, t) : t(e)),
        e
      },
      S.$tag = function(e, t, n) {
        var i = [],
        o = e.getElementsByTagName(t),
        r = o.length,
        a = 0;
        if (r > 0) {
          for (; r > a; a++) i.push(o[a]);
          return U(i, n)
        }
        return i
      }),
      H = (S.$class = t.getElementsByClassName ?
      function(e, t, n) {
        var i = [],
        o = e.getElementsByClassName(t),
        r = o.length,
        a = 0;
        if (r > 0) {
          for (; r > a; a++) i.push(o[a]);
          return U(i, n)
        }
        return i
      }: function(e, t, n) {
        var i = [],
        o = new RegExp("(^|\\s)" + t + "(\\s|$)");
        return _(e, "*",
        function(e) {
          o.test(e.className) && i.push(e)
        }),
        U(i, n)
      },
      S.$select = t.querySelectorAll ?
      function(e, n) {
        return U(t.querySelectorAll(e), n)
      }: function(e, n) {
        var i = S.Qselector.styleSheet,
        o = [];
        return i.addRule(e, "q:a"),
        _(t, "*",
        function(e) {
          "a" === e.currentStyle.q && o.push(e)
        }),
        i.cssText = "",
        U(o, n)
      },
      S.$new = function(e, n) {
        var i = t.createElement(e);
        if (n) try {
          return z(n,
          function(e, t) {
            switch (t) {
            case "innerHTML":
            case "html":
              F(i, e);
              break;
            case "className":
            case "class":
              q.set(i, e);
              break;
            case "text":
              D(i, e);
              break;
            default:
              T.set(i, t, e)
            }
          }),
          i
        } catch(o) {} finally {
          i = null
        }
        return i
      }),
      C = S.$string = {
        camelCase: function(e) {
          return e.replace("-ms-", "ms-").replace(l,
          function(e, t) {
            return (t + "").toUpperCase()
          })
        },
        replace: function(e, t) {
          for (var n in t) e = e.replace(new RegExp(n, "ig"), t[n]);
          return e
        },
        slashes: function(e) {
          return C.replace(e, {
            "\\\\": "\\\\",
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\r": "\\r",
            '"': '\\"'
          })
        },
        trim: "".trim && "tes ts" === " tes ts ".trim() ?
        function(e) {
          return e.trim()
        }: function(e) {
          return (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
      },
      T = S.$attr = {
        get: function(e, t) {
          return e.getAttribute(t)
        },
        set: function(e, t, n) {
          return U(e,
          function(e) {
            e.setAttribute(t, n)
          })
        },
        remove: function(e, t) {
          return U(e,
          function(e) {
            e.removeAttribute(t)
          })
        }
      },
      L = S.$data = {
        get: function(e, t) {
          var n = T.get(e, "data-" + t);
          return "true" === n ? !0 : "false" === n ? !1 : "null" === n ? "": null === n ? "": "" === n ? "": !isNaN(parseFloat(n)) && isFinite(n) ? +n: a.test(n) ? X.decode(n) : n
        },
        set: function(e, t, n) {
          return U(e,
          function(e) {
            return n = "object" == typeof n ? X.encode(n) : n,
            "object" == typeof t ? z(t,
            function(t, n) {
              T.set(e, "data-" + n, t)
            }) : T.set(e, "data-" + t, n),
            e
          })
        },
        remove: function(e, t) {
          return U(e,
          function(e) {
            T.remove(e, "data-" + t)
          })
        }
      },
      M = (S.$storage = B ? {
        set: function(e, t) {
          localStorage[e] = "object" == typeof t ? X.encode(t) : t
        },
        get: function(e) {
          var t = localStorage[e];
          return X.isJSON(t) ? X.decode(t) : t || ""
        },
        remove: function(e) {
          return localStorage.removeItem(e),
          !0
        }
      }: {
        set: function(e, t) {
          t = "object" == typeof t ? X.encode(t) : t,
          L.set(S.storage, e, t),
          S.storage.save("Qstorage")
        },
        get: function(e) {
          return S.storage.load("Qstorage"),
          L.get(S.storage, e) || ""
        },
        remove: function(e) {
          return S.storage.load("Qstorage"),
          L.remove(S.storage, e),
          !0
        }
      },
      S.$event = {
        guid: 0,
        global: {},
        handler: {
          call: function(e, t, n, i) {
            var o = M.handler;
            return n.currentTarget = t,
            (i === !1 || i.call(t, n) === !1) && (o.stopPropagation.call(n), o.preventDefault.call(n), e.isStopPropagation = !0),
            e
          },
          preventDefault: function() {
            var e = this.originalEvent;
            e.preventDefault && e.preventDefault()
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            e.stopPropagation && e.stopPropagation()
          },
          stopImmediatePropagation: function() {
            this.stopPropagation()
          },
          mouseenter: function(e) {
            return function(t) {
              var n = t.relatedTarget;
              if (this !== n) {
                for (; n && n !== this;) n = n.parentNode;
                n !== this && e.call(this, t)
              }
            }
          }
        },
        on: function(e, i, o, r, a) {
          return U(e,
          function(e) {
            if (3 === e.nodeType || 8 === e.nodeType) return ! 1;
            if ("object" == typeof i) {
              "string" != typeof o && (r = r || o, o = n);
              for (type in i) M.on(e, type, o, r, i[type]);
              return this
            }
            null == r && null == a ? (a = o, r = o = n) : null == a && ("string" == typeof o ? (a = r, r = n) : (a = r, r = o, o = n)),
            e.guid === n && (M.guid++, e.guid = M.guid, M.global[M.guid] = {});
            var l = e.guid,
            s = (o || "") + i,
            c = M.global[l][s];
            return c || (M.global[l][s] = {}),
            delegate_fn = function(i) {
              var l, s, c = {},
              u = "altKey bubbles button buttons cancelable relatedTarget clientX clientY ctrlKey fromElement offsetX offsetY pageX pageY screenX screenY shiftKey toElement timeStamp".split(" ");
              if (z(u,
              function(e, t) {
                i[e] !== n && (c[e] = i[e])
              }), c.originalEvent = i, c.preventDefault = M.handler.preventDefault, c.stopPropagation = M.handler.stopPropagation, c.stopImmediatePropagation = M.handler.stopImmediatePropagation, c.delegateTarget = e, c.isStopPropagation = !1, c.data = r, s = c.target = o ? i.target || i.srcElement || t: e, c.which = i.which || i.charCode || i.keyCode, c.metaKey = i.metaKey || i.ctrlKey, o) for (l = o ? o.replace(".", "") : ""; s !== e; s = s.parentNode) {
                if (i.isStopPropagation === !0) return ! 1;
                if (null === s || s === t.body) return ! 1; (s.tagName.toLowerCase() === o || q.has(s, l)) && (i = M.handler.call(i, s, c, a))
              } else M.handler.call(i, s, c, a)
            },
            e.addEventListener ? (("mouseenter" === i || "mouseleave" === i) && (i = "mouseenter" === i ? "mouseover": "mouseout", delegate_fn = M.handler.mouseenter(delegate_fn)), e.addEventListener(i, delegate_fn, "blur" === i || "focus" === i)) : e.attachEvent("on" + i, delegate_fn),
            M.global[l][s][a + ""] = delegate_fn,
            e
          })
        },
        off: function(e, t, n, i) {
          if ("object" == typeof t) {
            for (type in t) M.off(e, type, t[type]);
            return this
          }
          null == i && (i = n, n = null);
          var o = e.guid,
          r = (n || "") + t;
          fn_key = i + "",
          i ? (k(e, t, M.global[o][r][fn_key]), delete M.global[o][r][fn_key]) : (z(M.global[o][r],
          function(n) {
            k(e, t, n)
          }), delete M.global[o][r])
        }
      }),
      I = (S.$clear = function(e) {
        return e && (clearTimeout(e), clearInterval(e)),
        null
      },
      S.$ready = function(e) {
        if ("complete" === t.readyState) return setTimeout(e, 1);
        if (t.addEventListener) return y.push(e),
        void t.addEventListener("DOMContentLoaded", $, !1);
        var n = function() {
          try {
            o.doScroll("left")
          } catch(t) {
            return void setTimeout(n, 1)
          }
          e()
        };
        n()
      }),
      O = S.$css = {
        get: function(e, t) {
          if ("object" == typeof t) {
            var n = {};
            return z(t,
            function(t) {
              n[t] = j.get(e, t)
            }),
            n
          }
          return j.get(e, t)
        },
        set: function(e, t, n) {
          return U(e,
          function(e) {
            return "object" == typeof t ? z(t,
            function(t, n) {
              j.set(e, C.camelCase(n), O.fix(n, t))
            }) : j.set(e, C.camelCase(t), O.fix(t, n)),
            e
          })
        },
        number: {
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          zIndex: !0
        },
        unit: function(e, t) {
          if (O.number[e]) return "";
          var n = (t + "").replace(c, "");
          return "" === n ? "px": n
        },
        fix: function(e, t) {
          return "number" != typeof t || O.number[e] || (t += "px"),
          null === t && isNaN(t) ? !1 : t
        }
      },
      j = S.$style = {
        get: e.getComputedStyle ?
        function(e, n) {
          if (null !== e) {
            var i = t.defaultView.getComputedStyle(e, null).getPropertyValue(n);
            return "auto" === i || "" === i ? 0 : i
          }
          return ! 1
        }: function(e, t) {
          if (null !== e) {
            var n = "opacity" === t ? d.test(e.currentStyle.filter) ? .01 * parseFloat(RegExp.$1) + "": 1 : e.currentStyle[C.camelCase(t)];
            return "auto" === n ? 0 : n
          }
          return ! 1
        },
        set: o.style.opacity !== n ?
        function(e, t, n) {
          return U(e,
          function(e) {
            return e.style[t] = n,
            !0
          })
        }: function(e, t, n) {
          return U(e,
          function(e) {
            return e.currentStyle && e.currentStyle.hasLayout || (e.style.zoom = 1),
            "opacity" === t ? (e.style.filter = "alpha(opacity=" + 100 * n + ")", e.style.zoom = 1) : e.style[t] = n,
            !0
          })
        }
      },
      P = (S.$pos = function(e, t, n) {
        return U(e,
        function(e) {
          return j.set(e, "left", t + "px"),
          j.set(e, "top", n + "px"),
          e
        })
      },
      S.$offset = function(n) {
        var i = t.body,
        r = n.getBoundingClientRect();
        return {
          top: r.top + (e.scrollY || i.parentNode.scrollTop || n.scrollTop) - (o.clientTop || i.clientTop || 0),
          left: r.left + (e.scrollX || i.parentNode.scrollLeft || n.scrollLeft) - (o.clientLeft || i.clientLeft || 0),
          width: n.offsetWidth,
          height: n.offsetHeight
        }
      },
      S.$append = function(e, t) {
        return U(e,
        function(e) {
          return e.appendChild(w(e, t))
        })
      }),
      W = (S.$prepend = function(e, t) {
        return U(e,
        function(e) {
          return e.firstChild ? e.insertBefore(w(e, t), e.firstChild) : e.appendChild(w(e, t))
        })
      },
      S.$before = function(e, t) {
        return U(e,
        function(e) {
          return e.parentNode.insertBefore(w(e, t), e)
        })
      },
      S.$after = function(e, t) {
        return U(e,
        function(e) {
          return e.nextSibling ? e.parentNode.insertBefore(w(e, t), e.nextSibling) : e.parentNode.appendChild(w(e, t))
        })
      },
      S.$remove = function(e) {
        return U(e,
        function(e) {
          return R(e),
          e.guid !== n && delete M.global[e.guid],
          null !== e && e.parentNode ? e.parentNode.removeChild(e) : e
        })
      }),
      R = S.$empty = function(e) {
        return U(e,
        function(e) {
          for (; e.firstChild;) 1 === e.nodeType && e.guid !== n && delete M.global[e.guid],
          e.removeChild(e.firstChild);
          return e
        })
      },
      F = S.$html = function(e, t) {
        return U(e,
        function(e) {
          if (t) {
            try {
              e.innerHTML = t
            } catch(n) {
              P(R(e), t)
            }
            return e
          }
          return 1 === e.nodeType ? e.innerHTML: null
        })
      },
      D = S.$text = function(e, n) {
        return U(e,
        function(e) {
          if (n) return R(e),
          e.appendChild(t.createTextNode(n)),
          e;
          var i, o = "",
          a = e.textContent;
          if ((a || e.innerText) === e.innerHTML) o = a ? C.trim(e.textContent.replace(r, "")) : e.innerText.replace(s, "");
          else for (e = e.firstChild; e; e = e.nextSibling) i = e.nodeType,
          3 === i && "" !== C.trim(e.nodeValue) && (o += e.nodeValue.replace(r, "") + (e.nextSibling && e.nextSibling.tagName && "br" !== e.nextSibling.tagName.toLowerCase() ? "\n": "")),
          (1 === i || 2 === i) && (o += D(e) + ("block" === j.get(e, "display") || "br" === e.tagName.toLowerCase() ? "\n": ""));
          return o
        })
      },
      q = S.$className = {
        add: function(e, t) {
          return U(e,
          function(e) {
            if ("" === e.className) e.className = t;
            else {
              var n = e.className,
              i = [];
              z(t.split(u),
              function(e) {
                new RegExp("\\b(" + e + ")\\b").test(n) || i.push(" " + e)
              }),
              e.className += i.join("")
            }
            return e
          })
        },
        set: function(e, t) {
          return U(e,
          function(e) {
            return e.className = t,
            e
          })
        },
        has: function(e, t) {
          return new RegExp("\\b(" + t.split(u).join("|") + ")\\b").test(e.className)
        },
        remove: function(e, t) {
          return U(e,
          function(e) {
            return e.className = t ? C.trim(e.className.replace(new RegExp("\\b(" + t.split(u).join("|") + ")\\b"), "").split(u).join(" ")) : "",
            e
          })
        }
      },
      G = S.$hide = function(e, t, n) {
        N(e, "hide", t, n)
      },
      Q = S.$show = function(e, t, n) {
        N(e, "show", t, n)
      },
      J = (S.$toggle = function(e, t, n) {
        return U(e,
        function(e) {
          "none" === j.get(e, "display") ? Q(e, t, n) : G(e, t, n)
        })
      },
      S.$animate = function() {
        var e = o.style;
        return e.webkitTransition !== n || e.MozTransition !== n || e.OTransition !== n || e.msTransition !== n || e.transition !== n
      } () ?
      function() {
        var e = o.style,
        t = e.webkitTransition !== n ? "Webkit": e.MozTransition !== n ? "Moz": e.OTransition !== n ? "O": e.msTransition !== n ? "ms": "",
        i = t + "Transition";
        return function(e, t, o, r) {
          return U(e,
          function(e) {
            var a, l = [],
            s = [],
            c = [],
            u = [],
            p = e.style;
            o = o || 300;
            for (a in t) s[a] = C.camelCase(a),
            t[a].from !== n ? (t[a].to = t[a].to || 0, l[a] = O.number[a] ? t[a].to: parseInt(t[a].to, 10), c[a] = O.unit(a, t[a].to), j.set(e, s[a], parseInt(t[a].from, 10) + c[a])) : (l[a] = O.number[a] ? t[a] : parseInt(t[a], 10), c[a] = O.unit(a, t[a]), j.set(e, s[a], j.get(e, s[a]))),
            u.push(a);
            return setTimeout(function() {
              p[i] = "all " + o + "ms",
              z(u,
              function(e) {
                p[s[e]] = l[e] + c[e]
              })
            },
            15),
            setTimeout(function() {
              p[i] = "",
              r && r.call(e)
            },
            o),
            e
          })
        }
      } () : function(e, t, i, o) {
        return U(e,
        function(e) {
          var r, a, l, s = 0,
          c = 0,
          u = 0,
          p = 0,
          d = 30,
          h = [],
          g = [],
          f = [],
          m = [],
          v = [];
          i = i || 300;
          for (a in t) f.push(C.camelCase(a)),
          t[a].from !== n ? (r = t[a].to, g.push(O.number[a] ? t[a].from: parseInt(t[a].from, 10)), j.set(e, f[c], g[c] + O.unit(a, r))) : (r = t[a], g.push(parseInt(j.get(e, C.camelCase(a)), 10))),
          h.push(O.number[a] ? r: parseInt(r, 10)),
          m.push(O.unit(a, r)),
          c++,
          p++;
          for (u = 0; d > u; u++) for (v[u] = [], c = 0; p > c; c++) v[u][f[c]] = g[c] + (h[c] - g[c]) / d * u + ("opacity" === f[c] ? "": m[c]);
          for (; d > c; c++) l = setTimeout(function() {
            for (c = 0; p > c; c++) j.set(e, f[c], v[s][f[c]]);
            s++
          },
          i / d * c);
          return setTimeout(function() {
            for (c = 0; p > c; c++) j.set(e, f[c], h[c] + m[c]);
            o && o.call(e)
          },
          i),
          e
        })
      }),
      V = (S.$fadeout = function(e, t, n) {
        return U(e,
        function(e) {
          J(e, {
            opacity: {
              from: 1,
              to: 0
            }
          },
          t || 500, n)
        })
      },
      S.$fadein = function(e, t, n) {
        return U(e,
        function(e) {
          J(e, {
            opacity: {
              from: 0,
              to: 1
            }
          },
          t || 500, n)
        })
      },
      S.$cookie = {
        get: function(e) {
          for (var n, i, o = t.cookie.split("; "), r = 0, a = o.length; a > r; r++) if (n = o[r].split("="), n[0] === e) return i = decodeURIComponent(n[1]),
          X.isJSON(i) ? X.decode(i) : i + "";
          return null
        },
        set: function(e, n, i) {
          if ("object" == typeof e) return i = n,
          z(e,
          function(e, t) {
            V.set(t, e, i)
          });
          var o = new Date;
          return o.setTime(o.getTime()),
          i = i ? ";expires=" + new Date(o.getTime() + 864e5 * i).toGMTString() : "",
          n = "object" == typeof n ? X.encode(n) : n,
          t.cookie = e + "=" + K(n) + i + ";path=/"
        },
        remove: function() {
          return z(arguments,
          function(e) {
            V.set(e, "", -1)
          }),
          !0
        }
      }),
      X = S.$json = {
        decode: e.JSON ?
        function(e) {
          return X.isJSON(e) ? JSON.parse(C.trim(e)) : !1
        }: function(e) {
          return X.isJSON(e) ? new Function("return " + C.trim(e))() : !1
        },
        encode: e.JSON ?
        function(e) {
          return JSON.stringify(e)
        }: function(e) {
          function t(e) {
            var t, n, i, o, r = [];
            for (t in e) {
              if (i = e[t], n = typeof i, "undefined" === n) return;
              if ("function" !== n) {
                switch (n) {
                case "object":
                  o = null === i ? i: i.getDay ? '"' + (1e3 - 10 * ~i.getUTCMonth() + i.toUTCString() + 1e3 + i / 1).replace(/1(..).*?(\d\d)\D+(\d+).(\S+).*(...)/, "$3-$1-$2T$4.$5Z") + '"': i.length ? "[" +
                  function() {
                    var e = [];
                    return z(i,
                    function(t) {
                      e.push("string" == typeof t ? '"' + C.slashes(t) + '"': t)
                    }),
                    e.join(",")
                  } () + "]": X.encode(i);
                  break;
                case "number":
                  o = isFinite(i) ? i: null;
                  break;
                case "boolean":
                case "null":
                  o = i;
                  break;
                case "string":
                  o = '"' + C.slashes(i) + '"'
                }
                r.push('"' + t + '":' + o)
              }
            }
            return r.join(",")
          }
          return "{" + t(e) + "}"
        },
        isJSON: function(e) {
          return "string" == typeof e && "" !== C.trim(e) ? h.test(e.replace(g, "@").replace(f, "]").replace(m, "")) : !1
        }
      },
      K = (S.$ajax = function(t, i) {
        "object" == typeof t && (i = t, t = n),
        i = i || {};
        var o, r = e.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest,
        t = t || i.url,
        a = [];
        i.data && z(i.data,
        function(e, t) {
          a.push(A(t, e))
        }),
        o = a.join("&").replace(/%20/g, "+"),
        "GET" === i.type ? (r.open("GET", t + (p.test(t) ? "&": "?") + o, !0), o = null) : r.open(i.type || "POST", t, !0),
        r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
        i.header && z(i.header,
        function(e, t) {
          r.setRequestHeader(t, e)
        }),
        r.send(o),
        r.onreadystatechange = function() {
          4 === r.readyState && (200 === r.status && i.success ? (o = r.responseText, i.success("" !== o && X.isJSON(o) ? X.decode(o) : o)) : i.error && i.error(r.status))
        }
      },
      S.$require = function(e, n) {
        var i, r = [];
        z(e,
        function(e) {
          b[e] || (b[e] = !0, r.push(e), i = /\.css[^\.]*$/gi.test(e) ? H("link", {
            type: "text/css",
            rel: "stylesheet",
            href: e
          }) : H("script", {
            type: "text/javascript",
            async: !0,
            src: e
          }), i.onload = i.onreadystatechange = function(t) { ("load" === t.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, r.splice(r.indexOf(e), 1), 0 === r.length && n && n())
          },
          P(t.head || _(t, "head")[0] || o, i))
        })
      },
      S.$template = function(e, t) {
        var n = x[e];
        return n || (n = "var s='';s+='" + e.replace(/[\r\t\n]/g, " ").split("'").join("\\'").replace(/\{\{#([\w]*)\}\}(.*)\{\{\/(\1)\}\}/gi,
        function(e, t, n) {
          return "';var i=0,l=data." + t + ".length,d=data." + t + ";for(;i<l;i++){s+='" + n.replace(/\{\{(\.|this)\}\}/g, "'+d[i]+'").replace(/\{\{([\w]*)\}\}/g, "'+d[i].$1+'") + "'}s+='"
        }).replace(/\{\{(.+?)\}\}/g, "'+data.$1+'") + "';return s;", x[e] = n),
        t ? new Function("data", n)(t) : new Function("data", n)
      },
      S.$url = function(e) {
        return encodeURIComponent(e)
      }),
      Y = (S.$rand = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
      },
      S.$browser = function() {
        for (var e = navigator.userAgent.toLowerCase(), t = {},
        n = "msie|firefox|opera|webkit|iPad|iPhone|android".split("|"), i = n.length, o = 6; i--;) t[n[i]] = e.indexOf(n[i].toLowerCase()) > -1;
        for (; 12 > o; o++) t["msie" + o] = e.indexOf("msie " + o) > -1;
        return t.is = function(t) {
          return new RegExp(t, "ig").test(e)
        },
        t
      } (), S.$isArray = Array.isArray ||
      function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
      }),
      Z = S.$merge = function(e) {
        for (var t = 1,
        n = arguments.length; n > t; t++) {
          var i = arguments[t];
          if ("object" != typeof e || "object" != typeof i || Y(e) || Y(i)) e = i;
          else for (var o in i) e[o] = Z(e[o], i[o])
        }
        return e
      },
      ee = S.$clone = function(e) {
        var t = function(e) {
          return "object" == typeof e ? ee(e) : e
        };
        if (Y(e)) {
          for (var n = e.length,
          i = new Array(n); n--;) i[n] = t(e[n]);
          return i
        }
        var i = {};
        for (var o in e) i[o] = t(e[o]);
        return i
      },
      te = (S.$filter = function(e, t, n) {
        for (var i = [], o = 0, r = e.length >>> 0; r > o; o++) o in e && t.call(n, e[o], o, e) && i.push(e[o]);
        return i
      },
      S.$findParent = function(e, t) {
        for (var n = e.parentNode; n && 11 !== n.nodeType;) {
          if (t(n)) return n;
          n = n.parentNode
        }
        return null
      },
      S.$parent = function(e, t) {
        var n = e && e.parentNode;
        return n && 11 !== n.nodeType && (!t || t(n)) ? n: null
      },
      S.$keys = function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t
      });
      S.$parallel = function(e, t) {
        function n(e, n) {
          i[e] = n,
          a++,
          a == r && t(i)
        }
        var i = {},
        o = [],
        r = 0,
        a = 0;
        o = te(e),
        r = o.length,
        z(o,
        function(t) {
          e[t](function(e) {
            n(t, e)
          })
        })
      },
      S.$parallelEach = function(e, t, n) {
        function i() {
          o -= 1,
          0 >= o && n()
        }
        n = n ||
        function() {};
        var o = e.length;
        return o ? void z(e,
        function(e) {
          t(e, i)
        }) : n()
      },
      S.$getQueryParams = function(e) {
        return e = e && e.split("?")[1] || t.location.search.slice(1),
        e.split("&").map(function(e) {
          return e = e.split("="),
          this[e[0]] = e[1],
          this
        }.bind({}))[0]
      }
    }
    S.version = i,
    "undefined" != typeof HUABAN_GLOBAL && (HUABAN_GLOBAL.Qatrix = S),
    I(function() {
      t.querySelectorAll || (S.Qselector = P(t.body, H("style"))),
      B || (S.storage = P(t.body, H("link", {
        style: {
          behavior: "url(#default#userData)"
        }
      })))
    })
  } (window, document),
  function(e, t) {
    var n = t.Qatrix,
    i = "http://huaban.com";
    e.__huaban_dev && (i = "http://" + __huaban_dev);
    var o = t.settings = {
      autoInitialize: !0,
      autoAttachFloatingButton: !1,
      imageMinWidth: 200,
      imageMinHeight: 150,
      elemMinWidth: 150,
      elemMinHeight: 150,
      getSizeTimeout: 1e3,
      orderBy: "recommend",
      prefix: "HUABAN-",
      id: "HUABAN_WIDGETS",
      priority: {
        video: 2,
        og: 1,
        img: 0,
        bg: -1
      },
      huabanUrl: i,
      popupUrl: i + "/bookmarklet/",
      multiPopupUrl: i + "/bookmarklet_multiple/",
      imgBase: i.replace("http:", "") + "/img/widgets",
      analyticsUrl: i.replace("http:", "") + "/share_analytics.html?v=3",
      waterfallLimit: 600,
      md: "",
      via: 2,
      isMobileClient: !1,
      floatingButton: {
        inner: "采集",
        style: "inside",
        color: "red",
        size: "normal",
        position: "top left",
        withIcon: !1
      },
      maximumSelect: 10,
      showCallback: null,
      hideCallback: null
    },
    r = n.$("huaban_share_script"),
    a = ["style", "color", "size", "position"],
    l = o.floatingButton;
    if (r) {
      o.autoInitialize = !1,
      o.autoAttachFloatingButton = !0,
      l.withIcon = !0,
      n.$each(a,
      function(e) {
        var t = n.$data.get(r, e);
        t && (l[e] = t)
      });
      var s = n.$data.get(r, "image-min-size");
      s && (s = s.split(" "), o.imageMinWidth = Number(s[0]) || 0, o.imageMinHeight = Number(s[1]) || Number(s[0]) || 0),
      o.via = 3;
      var c = location && location.host && location.host.split(".") || [];
      "www" == c[0] && c.shift(),
      c.length && (o.md = c.join(".")),
      l.suspended && (l.style = {
        "in": "inside",
        out: "outside"
      } [l.suspended], delete l.suspended),
      l.size = {
        16 : "small",
        66 : "normal",
        108 : "large"
      } [l.size] || l.size || "normal",
      e.huaban_minWidth && (o.imageMinWidth = huaban_minWidth),
      e.huaban_minHeight && (o.imageMinHeight = huaban_minHeight),
      o.md = e.huaban_md || o.md || "",
      l.inner = "收藏",
      "large" == l.size && (l.inner = "收藏到花瓣");
      var u = n.$new("iframe", {
        src: o.analyticsUrl
      });
      n.$style.set(u, "display", "none"),
      n.$append(document.body, u)
    }
    e.HUABAN_PRESETTINGS && n.$merge(o, HUABAN_PRESETTINGS)
  } (window, HUABAN_GLOBAL),
  function(e) {
    var t = e.Qatrix,
    n = {
      "": 'font-family: "helvetica neue",arial,sans-serif; color: #444; font-size: 14px;',
      "*": "box-sizing: content-box;",
      ".main": "position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: #e5e5e5; background: rgba(229,229,229,.95); max-height: 100%; overflow: hidden; z-index: 9999999999999;",
      "a img": "border: 0;",
      ".header": "height: 50px; background: white; box-shadow: 0 0 4px rgba(0,0,0,.2); width: 100%; left: 0; top: 0; position: absolute;",
      ".header .inner": "margin: 0 auto; position: relative;",
      ".header .close": "width: 60px; height: 50px; border-left: 1px solid #ddd; position: absolute; right: 0; top: 0; background: url({{imgBase}}/btn_close.png) 20px 14px no-repeat; cursor: pointer;",
      ".header .close:hover": "background-position: 20px -26px;",
      ".header .close:active": "background-position: 20px -66px;",
      ".header .logo": "display: block; position: absolute; top: 12px;",
      ".waterfall-holder": "position: relative; overflow-y: auto; height: 100%;",
      ".waterfall": "position: relative; margin-top: 50px;",
      ".waterfall .empty": "position: absolute; left: 50%; top: 30px; height: 36px; line-height: 36px; width: 216px; text-align: left; margin-left: -128px; color: #777; background: url({{imgBase}}/icon_notice.png) 12px 8px no-repeat white; padding-left: 40px; font-size: 15px;",
      ".btn": "display: inline-block; border-radius: 2px; font-size: 14px; padding: 0 12px; height: 30px; line-height: 30px; cursor: pointer; text-decoration: none; white-space: nowrap; -moz-user-select: none; -webkit-user-select: none; user-select: none; text-align: center; background: #D53939; color: white;",
      ".btn:hover": "background: #E54646;",
      ".btn:active": "background: #C52424;",
      ".wbtn": "background: #EDEDED; color: #444;",
      ".wbtn:hover": "background: #F2F2F2;",
      ".wbtn:active": "background: #DDD;",
      ".f-button": "position: absolute; display: none; z-index: 9999999999998; box-shadow: 0 0 0 2px rgba(255,255,255,.2); background: #aaa; background: rgba(0,0,0,.3); color: white; cursor: pointer; padding: 0 12px; height: 30px; line-height: 30px; border-radius: 2px; font-size: 14px",
      ".f-button:hover": "background-color: #999; background-color: rgba(0,0,0,.5);",
      ".f-button:active": "background-color: rgba(0,0,0,.6);",
      ".red-normal-icon-button": "width: 36px; height: 24px; border: 0px; line-height: 24px; padding-left: 24px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -200px no-repeat; box-shadow: none !important; font-size: 14px; background-color: transparent !important;",
      ".red-normal-icon-button:hover": "background-position: -130px -200px;",
      ".red-normal-icon-button:active": "background-position: -260px -200px;",
      ".red-large-icon-button": "width: 80px; height: 24px; border: 0px; line-height: 24px; padding-left: 24px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -150px no-repeat; box-shadow: none !important; font-size: 14px; background-color: transparent !important;",
      ".red-large-icon-button:hover": "background-position: -130px -150px;",
      ".red-large-icon-button:active": "background-position: -260px -150px;",
      ".red-small-icon-button": "width: 30px; height: 21px; border: 0px; line-height: 21px; padding-left: 20px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -250px no-repeat; box-shadow: none !important; font-size: 12px; background-color: transparent !important;",
      ".red-small-icon-button:hover": "background-position: -130px -250px;",
      ".red-small-icon-button:active": "background-position: -260px -250px;",
      ".white-normal-icon-button": "width: 36px; height: 24px; border: 0px; line-height: 24px; padding-left: 24px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -500px no-repeat; box-shadow: none !important; color: #444; font-size: 14px; background-color: transparent !important;",
      ".white-normal-icon-button:hover": "background-position: -130px -500px;",
      ".white-normal-icon-button:active": "background-position: -260px -500px;",
      ".white-large-icon-button": "width: 80px; height: 24px; border: 0px; line-height: 24px; padding-left: 24px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -450px no-repeat; box-shadow: none !important; color: #444; font-size: 14px; background-color: transparent !important;",
      ".white-large-icon-button:hover": "background-position: -130px -450px;",
      ".white-large-icon-button:active": "background-position: -260px -450px;",
      ".white-small-icon-button": "width: 30px; height: 21px; border: 0px; line-height: 21px; padding-left: 20px; padding-right: 0px; text-align: left; background: url({{imgBase}}/widget_icons.png) 0 -550px no-repeat; box-shadow: none !important; color: #444; font-size: 12px; background-color: transparent !important;",
      ".white-small-icon-button:hover": "background-position: -130px -550px;",
      ".white-small-icon-button:active": "background-position: -260px -550px;",
      ".cell": "width: 236px; position: absolute; background: white; box-shadow: 0 1px 3px rgba(0,0,0,.3); transition: left .3s ease-in-out, top .3s linear;",
      ".cell .img-holder": "overflow: hidden; position: relative;",
      ".cell .img-holder:hover img.cell-img": "opacity: .8",
      ".cell .video-icon": "width: 72px; height: 62px; position: absolute; left: 50%; top: 50%; margin: -31px auto auto -36px; background: url({{imgBase}}/media_video.png) 0 0 no-repeat; display: none;",
      ".cell.video .video-icon": "display: block;",
      ".cell .over": "display: none;",
      ".cell:hover .over": "display: block;",
      ".cell .over .btn": "width: 60px; height: 34px; padding: 0; position: absolute; left: 50%; top: 50%; margin: -18px 0 0 -31px; line-height: 34px; box-shadow: 0 0 0 2px rgba(255,255,255,.2); font-size: 16px;",
      ".cell.long .img-holder": "height: 600px;",
      ".cell.long .img-holder:after": 'content: ""; display: block; position: absolute; width: 236px; height: 12px; left: 0; bottom: 0; background: url({{imgBase}}/long_image_shadow_2.png) repeat-x 4px top;',
      ".cell img": "width: 236px; display: block;",
      ".cell .size": "margin: 8px 16px; font-size: 12px; color: #999",
      ".cell .description": "display: block; width: 202px; margin: 0 6px 6px; padding: 6px 10px; border: 0; resize: none; outline: 0; border: 1px solid transparent; line-height: 18px; font-size: 13px; overflow: hidden; word-wrap: break-word; background: url({{imgBase}}/icon_edit.png) 500px center no-repeat;",
      ".cell:hover .description": "background-color: #fff9e0; background-position: right top;",
      ".cell .description:focus": "background-color: #F9F9F9; background-position: 500px center;",
      ".cell .select-btn": "width: 34px; height:34px; background: url({{imgBase}}/checkbox.png) 0 0 no-repeat; position: absolute; right: 5px; top: 5px; cursor: pointer;",
      ".cell .pinned-label": "position: absolute; left: 0; top: 10px; height: 24px; line-height: 24px; padding: 0 10px; background: #CE0000; background: rgba(200, 0, 0, 0.9); color: white; font-size: 12px; display: none;",
      ".cell.pinned .pinned-label": "display: block;",
      ".selected .select-btn": "background-position: 0 -40px;",
      ".multi .cell .img-holder": "cursor: pointer;",
      ".multi .cell .cell-pin-btn": "display: none;",
      ".multi .cell .over": "display: block;",
      ".header .multi-buttons": "position: absolute; top: 10px; left: 0; display: none;",
      ".header .multi-buttons .btn": "margin-right: 10px;",
      ".header .multi-noti": "display: none; height: 50px; line-height: 50px; text-align: center; font-size: 16px; color: #999; font-weight: bold;",
      ".header .multi-noti span": "font-weight: normal;",
      ".header .multi-noti i": "font-style: normal;",
      ".header .notice": "padding: 0 10px; height:30px; line-height: 30px; position: absolute; left: 50%; top: 10px; margin-left: -83px; background: #fff9e2; text-align: center;",
      ".header .notice i": "display: inline-block; width: 18px; height: 18px; background: url({{imgBase}}/icon_notice.png) 0 0 no-repeat; vertical-align: top; margin: 6px 6px 0 0;",
      ".switcher": "height: 50px; width: 100px; position: relative;",
      ".switcher .title": "position: absolute; right: 75px; top: 13px; color: #999; white-space: nowrap; line-height: 24px; opacity: 0; visibility: hidden;",
      ".switcher:hover .title": "visibility: visible; opacity: 1; -webkit-transition: opacity .2s linear; -webkit-transition-delay: .2s; transition: opacity .2s linear; transition-delay: .2s;",
      ".switcher .bar": "width: 40px; height: 24px; background: #EB595F; border-radius: 12px; color: white; position: absolute; right: 0; top: 13px; cursor: pointer; font-size: 14px; -webkit-transition: all .2s linear; transition: all .2s linear;",
      ".switcher:hover .bar": "width: 64px;",
      ".switcher.on .bar": "background: #7DD100;",
      ".switcher .bar .round": "width: 20px; height: 20px; background: white; border-radius: 50%; position: absolute; left: 2px; top: 2px; -webkit-transition: left .2s linear; box-shadow: 0px 0px 3px rgba(0,0,0,0.15); transition: left .2s linear; box-shadow: 0px 0px 3px rgba(0,0,0,0.15);",
      ".switcher.on .bar .round": "left: 17px;",
      ".switcher.on:hover .bar .round": "left: 41px;",
      ".switcher .bar .text-1": "height: 24px; line-height: 24px; position: absolute; right:17px; top: 0; opacity: 0; visibility: hidden; -webkit-transition: all .2s linear; transition: all .2s linear;",
      ".switcher:hover .bar .text-1": "right: 9px; opacity: 1; visibility: visible;",
      ".switcher.on:hover .bar .text-1": "right: 17px; opacity: 0; visibility: hidden;",
      ".switcher .bar .text-2": "height: 24px; line-height: 24px; position: absolute; left:17px; top: 0; opacity: 0; visibility: hidden; -webkit-transition: all .2s linear; transition: all .2s linear;",
      ".switcher:hover .bar .text-2": "left: 17px; opacity: 0; visibility: hidden;",
      ".switcher.on:hover .bar .text-2": "left: 9px; opacity: 1; visibility: visible;",
      ".header .switcher": "position: absolute; right: 0; top: 0;"
    },
    i = {
      ".red-normal-icon-button, .red-large-icon-button, .red-small-icon-button, .white-normal-icon-button, .white-large-icon-button, .white-small-icon-button": "{ background-image: url({{imgBase}}/widget_icons_ie6.png)"
    };
    e.styles = "";
    var o = e.settings.imgBase; (t.$browser.msie6 || t.$browser.msie7 || t.$browser.msie8) && (o = window.location.protocol + o),
    t.$each(t.$keys(n),
    function(i) {
      n[i] = t.$string.replace(n[i], {
        "{{imgBase}}": o
      }),
      e.styles += "#" + e.settings.id + " " + i.replace(/\./g, "." + e.settings.prefix) + " {" + n[i] + "} "
    }),
    e.styles += "<!--[if IE 6]>",
    t.$each(t.$keys(i),
    function(t) {
      e.styles += "#" + e.settings.id + " " + t.replace(/\./g, "." + e.settings.prefix) + " " + i[t] + " "
    }),
    e.styles += "<![endif]-->"
  } (HUABAN_GLOBAL),
  function(e) {
    {
      var t = e.Qatrix;
      e.settings.huabanUrl
    }
    e.templates = {
      main: ['<div class="main">', '<div class="waterfall-holder">', '<div class="waterfall">', "</div>", "</div>", '<div class="header">', '<div class="inner sync">', '<a class="logo" href="{{huabanUrl}}" target="_blank">', '<img src="{{imgBase}}/logo.png">', "</a>", '<div class="multi-noti">已选择 <b>1</b> 张<span>（最多 <i>10</i> 张）</span></div>', '<div class="multi-buttons">', '<div class="btn confirm">批量采集</div>', '<div class="btn wbtn cancel">取消</div>', "</div>", '<div class="notice" style="display: none"><i></i><span></span></div>', '<div class="switcher switch-order">', '<div class="title">图片排序</div>', '<div class="bar">', '<div class="text-1">推荐</div>', '<div class="text-2">自然</div>', '<div class="round"></div>', "</div>", "</div>", "</div>", '<div class="close", title="或按 ESC 键关闭">', "</div>", "</div>", "</div>"].join(""),
      "message-box": '<div id="HUABAN_MESSAGE" style="display: none"></div>',
      "waterfall-cell": ['<div class="cell">', '<div class="img-holder">', '<img src="{{imgUrl}}" class="cell-img" height="{{imgHeight}}"/>', '<div class="pinned-label">已采集</div>', '<div class="video-icon"></div>', '<div class="over">', '<div class="btn cell-pin-btn">采集</div>', '<div class="select-btn"></div>', "</div>", "</div>", '<div class="size">{{size.x}} x {{size.y}}</div>', '<textarea class="description">{{description}}</textarea>', "</div>"].join(""),
      "empty-alert": ['<div class="empty">没有找到足够大的图片/视频</div>'].join(""),
      "floating-button": ['<div class="f-button {{extraClass}}">', "{{inner}}", "</div>"].join("")
    },
    t.$each(t.$keys(e.templates),
    function(n) {
      e.templates[n] = t.$string.replace(e.templates[n], {
        "{{imgBase}}": e.settings.imgBase,
        "{{huabanUrl}}": e.settings.huabanUrl
      })
    }),
    e.render = function(n, i) {
      i = i || {};
      var o = t.$template(e.templates[n], i),
      r = t.$new("div", {
        html: o
      }),
      a = r.childNodes[0];
      return t.$tag(r, "*",
      function(n) {
        n.className && (n.className = (e.settings.prefix + t.$string.trim(n.className)).replace(/\ /g, " " + e.settings.prefix))
      }),
      r.removeChild(a),
      a
    }
  } (HUABAN_GLOBAL),
  function(e) {
    var t = e.Qatrix,
    n = function(e) {
      return e.length ? (t.$each(e,
      function(e) {
        e.url = window.location.href
      }), e) : void 0
    };
    e.rules = {
      "^https?://image\\.baidu\\.com\\/channel": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n, i;
          n = t.$findParent(e.elem,
          function(e) {
            return t.$className.has(e, "inner_wrapper")
          }),
          n && (i = t.$class(n, "abs")[0], e.url = t.$attr.get(i, "href"), e.description = t.$text(i))
        }), e) : void 0
      },
      "^https?://image\\.baidu\\.com\\/i\\?": function(e) {
        if (e.length) {
          var n = t.$id("picInfoPnl")[0];
          return n ? t.$each(e,
          function(e) {
            var i = t.$parent(e.elem,
            function(e) {
              return t.$className.has(e, "img-container")
            });
            i && (e.description = t.$class(n, "pictitle")[0].innerText)
          }) : t.$each(e,
          function(e) {
            var n, i = t.$findParent(e.elem,
            function(e) {
              return t.$className.has(e, "pullImgli")
            });
            if (i) try {
              n = t.$class(i, "imgShow")[0],
              e.url = t.$tag(n, "a")[0].href,
              e.description = t.$class(i, "fromURL")[0].innerText
            } catch(o) {}
          }),
          e
        }
      },
      "^https?://(.*\\.)?weibo\\.com": function(e) {
        if (e.length) {
          var n = [];
          return t.$each(e,
          function(e) {
            if (!e.imgUrl.match(/img.t.sinajs.cn/)) {
              var i = t.$findParent(e.elem,
              function(e) {
                return t.$className.has(e, "WB_feed_expand") || t.$className.has(e, "WB_media_expand") || t.$className.has(e, "WB_feed_detail")
              });
              if (i) {
                var o = t.$class(i, "WB_from")[0];
                o && (e.url = t.$tag(o, "a")[0].href);
                var r = t.$class(i, "WB_text")[0];
                r || (i = t.$findParent(e.elem,
                function(e) {
                  return t.$className.has(e, "WB_feed_datail")
                }), r = t.$class(i, "WB_text")[0]),
                r && (e.description = r.innerText)
              }
              n.push(e)
            }
          }),
          n
        }
      },
      "^https?://(.*\\.)?zcool\\.com\\.cn\\/gfx\\/.+": n,
      "^http://(.*\\.)?kmeitu\\.com": n,
      "^http://(.*\\.)?bcy\\.net": n,
      "^https?://(.*\\.)?zcool\\.com\\.cn": function(e) {
        if (e.length) {
          var n = t.$select(".camWholeBox")[0];
          if (n) t.$each(e,
          function(e) {
            var n = t.$parent(e.elem);
            n && (e.url = t.$attr.get(n, "href"))
          });
          else try {
            var i = t.$select(".workTitle")[0].innerText;
            t.$each(e,
            function(e) {
              e.description = i
            })
          } catch(o) {}
          return e
        }
      },
      "^https?://(www\\.)?500px\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$data.get(e.elem, "bind");
          if (n && "photo_img" === n) {
            var i = t.$parent(e.elem);
            i && (e.url = t.$attr.get(i, "href"));
            try {
              var o = t.$parent(i),
              r = t.$string.trim(t.$class(o, "title")[0].innerText) || "",
              a = t.$string.trim(t.$class(o, "info")[0].innerText) || ""; (r || a) && (e.description = r + " - " + a)
            } catch(l) {}
          }
        }), e) : void 0
      },
      "^https?://(www\\.)?pinterest\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$findParent(e.elem,
          function(e) {
            return t.$className.has(e, "pinImageWrapper")
          });
          n && (e.url = "http://www.pinterest.com/" + t.$attr.get(n, "href"))
        }), e) : void 0
      },
      "^https?://(www\\.)?behance\\.net": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(t.$parent(e.elem));
          n && (e.url = t.$attr.get(n, "href"))
        }), e) : void 0
      },
      "^https?://movie\\.douban\\.com": function(e) {
        try {
          var n = t.$select("#mainpic .nbgnbg img")[0],
          i = n.src.replace("movie_poster_cover/spst", "photo/photo"),
          o = n.alt + " (来自豆瓣电影)";
          e.push({
            size: {
              x: 428,
              y: 600
            },
            imgUrl: i,
            description: o
          })
        } catch(r) {}
        return e
      },
      "^https?://(www\\.)?jianjuke\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$findParent(e.elem,
          function(e) {
            return t.$className.has(e, "post")
          });
          if (n) try {
            var i = t.$class(n, "entry-title")[0],
            o = t.$tag(i, "a")[0];
            e.url = t.$attr.get(o, "href"),
            e.description = t.$text(o)
          } catch(r) {}
        }), e) : void 0
      },
      "^https?://(www\\.)?duitang\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          if (window.location.href.match(/.*duitang\.com\/people\/mblog\/\d+\/detail/) && e.url && e.url.match(/http:\/\/www\.duitang\.com\/redirect\//)) {
            var n = t.$getQueryParams(e.url).to;
            n && (e.url = decodeURIComponent(n))
          } else try {
            var i = t.$parent(t.$parent(e.elem)),
            o = t.$tag(t.$class(i, "dt-woo-title")[0], "a")[0];
            e.description = t.$text(o)
          } catch(r) {}
        }), e) : void 0
      },
      "^http://www\\.58pic\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(e.elem);
          t.$className.has(n, "thumb-box") && (e.url = n.href)
        }), e) : void 0
      },
      "^http://(www\\.)?tobosu\\.com/pic": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace("/small/", "//")
        }), e) : void 0
      },
      "^https?://(www\\.)?houzz\\.com/photos(/[^0-9]+)*": function(e) {
        return e.length ? (t.$class(document.body, "browseListBody") && t.$each(e,
        function(e) {
          var n = t.$parent(t.$parent(e.elem));
          t.$className.has(n, "noHoverLink") && (e.url = t.$attr.get(n, "href"))
        }), e) : void 0
      },
      "^https?://(.*\\.)?lofter\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(e.elem),
          i = t.$parent(n);
          n && n.tagName && "a" === n.tagName.toLowerCase() && n.href ? e.url = t.$attr.get(n, "href") : i && i.tagName && "a" === i.tagName.toLowerCase() && i.href && (e.url = t.$attr.get(i, "href"))
        }), e) : void 0
      },
      "^https?://zhan\\.renren\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.url && "javascript:;" !== e.url || (e.url = window.location.href)
        }), e) : void 0
      },
      "^http://(\\w+\\.)?rayli\\.com\\.cn/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace("/thumb_(d+_)+/", "/")
        }), e) : void 0
      },
      "^http://fanjian8\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(e.elem);
          t.$className.has(n, "single-content") && (e.url = "http://" + window.location.host + t.$attr.get(n, "rel") || "")
        }), e) : void 0
      },
      "^http://pic\\.gamespot\\.com\\.cn": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/_\d+\./, ".")
        }), e) : void 0
      },
      "^https?://(www\\.)diandian\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$findParent(e.elem,
          function(e) {
            return t.$className.has(e, "feed-content-holder")
          });
          if (n) try {
            var i = t.$class(n, "link-to-post")[0];
            e.url = t.$attr.get(i, "href")
          } catch(o) {}
        }), e) : void 0
      },
      "^https?://tuchong\\.com": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/\/(\d+)\/g\/(\d+)/, "/$1/f/$2")
        }), e) : void 0
      },
      "^http://(www\\.)zhuqu\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(e.elem),
          i = t.$class(n, "zq_mask")[0];
          i && (e.url = t.$attr.get(i, "href")),
          e.imgUrl = e.imgUrl.replace(/\/thb2\/\d+x\d+\//, "/water/")
        }), e) : void 0
      },
      "^http://(\\w+\\.)cnsc8\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/\/Small_Pic\//, "/Big_Pic/")
        }), e) : void 0
      },
      "^http://(www\\.)35pic\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/img\./, "pic.").replace(/_\d+\./, ".")
        }), e) : void 0
      },
      "^https?://(w+\\.)mogujie\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/(_\d+x\d+\.(jpg|jpeg|png))(?:_\d+x\d+\.(jpg|jpeg|png))*/, "$1")
        }), e) : void 0
      },
      "^https?://(www\\.)youku\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(e.elem)),
            i = t.$tag(t.$class(n, "v-link")[0], "a")[0];
            e.url = t.$attr.get(i, "href")
          } catch(o) {}
        }), e) : void 0
      },
      "^https?://(www\\.)uehtml\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(e.elem));
            e.description = t.$text(t.$class(n, "citemtitle"))
          } catch(i) {}
        }), e) : void 0
      },
      "^http://(\\w+\\.)aili\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/_\d+\.(jpg|jpeg|png)$/, ".$1")
        }), e) : void 0
      },
      "^http://pic\\.gamersky\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.description = document.title
        }), e) : void 0
      },
      "^http://(www\\.)kujiale\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          e.imgUrl = e.imgUrl.replace(/@!?\d+x\d+$/, "")
        }), e) : void 0
      },
      "^http://tupian\\.zol\\.com\\.cn/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(e.elem));
            e.description = t.$text(t.$class(n, "pic-infor"))
          } catch(i) {}
        }), e) : void 0
      },
      "^http://drawcrowd\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$class(t.$parent(e.elem), "project-page")[0];
            e.url = "http://" + window.location.host + t.$attr.get(n, "href")
          } catch(i) {}
        }), e) : void 0
      },
      "^http://(www\\.)gtn9\\.com/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(t.$parent(e.elem))),
            i = t.$class(n, "comment_box")[0];
            e.description = t.$text(t.$tag(i, "li")[1])
          } catch(o) {}
        }), e) : void 0
      },
      "^http://topys\\.cn/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(t.$parent(e.elem)));
            e.description = t.$text(t.$class(n, "cont-text"))
          } catch(i) {}
        }), e) : void 0
      },
      "^http://dp\\.pconline\\.com\\.cn/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          try {
            var n = t.$parent(t.$parent(t.$parent(e.elem)));
            e.description = t.$class(n, "cont-text")[0].innerText
          } catch(i) {}
        }), e) : void 0
      },
      "^http://(www\\.)gameui\\.cn/": function(e) {
        return e.length ? (t.$each(e,
        function(e) {
          var n = t.$parent(e.elem);
          e.description = t.$attr.get(n, "title")
        }), e) : void 0
      }
    },
    e.videoSiteRules = {
      "^https?://v.youku.com": function() {
        if (window.videoId2) {
          var n = t.$id("movie_player")[0];
          if (n) {
            var i = t.$new("param", {
              name: "wmode",
              value: "transparent"
            });
            t.$prepend(n, i),
            e.settings.hideCallback = function() {
              t.$remove(i)
            }
          }
          var o = "http://player.youku.com/player.php/sid/" + videoId2 + "/v.swf";
          return {
            imgUrl: e.settings.huabanUrl + "/pins/create/video/swf?url=" + encodeURIComponent(o),
            size: {
              x: 448,
              y: 252
            },
            video: o,
            elem: null,
            elemSize: null,
            type: "video"
          }
        }
      },
      "^https?://www.tudou.com": function() {
        if (window.itemData) {
          var e = "";
          try {
            t.$select("#shareWrap .iconfont")[0].click(),
            e = t.$("flashInput").value,
            t.$select("#shareWrap .iconfont")[0].click()
          } catch(n) {}
          if (e) return {
            imgUrl: itemData.pic,
            size: {
              x: 320,
              y: 240
            },
            video: e,
            elem: null,
            elemSize: null,
            description: itemData.kw || "",
            type: "video"
          }
        }
      },
      "^https?://www.bilibili.tv": function() {
        var e = t.$select("meta"),
        n = "",
        i = "";
        return t.$each(e,
        function(e) {
          "thumbnailUrl" == t.$attr.get(e, "itemprop") ? n = t.$attr.get(e, "content") : "embedURL" == t.$attr.get(e, "itemprop") && (i = t.$attr.get(e, "content"))
        }),
        {
          imgUrl: n,
          size: {
            x: 120,
            y: 90
          },
          video: i,
          elem: null,
          elemSize: null,
          type: "video"
        }
      },
      "^https?://www.acfun.com/v/": function() {
        if (window.system) {
          var e = system.preview,
          t = "http://static.acfun.com/player/ACFlashPlayer.out.swf?type=page&url=" + system.url;
          if (t && e) return {
            imgUrl: e,
            size: {
              x: 120,
              y: 90
            },
            video: t,
            elem: null,
            elemSize: null,
            type: "video"
          }
        }
      },
      "^https?://v.yinyuetai.com": function() {
        var t = e.collector.og;
        if (t) {
          var n = t.image,
          i = t.videosrc;
          if (i && n) return {
            imgUrl: n,
            size: {
              x: 640,
              y: 360
            },
            video: i,
            elem: null,
            elemSize: null,
            type: "video"
          }
        }
      },
      "^https?://(www|yule).iqiyi.com": function() {
        var n = "",
        i = "",
        o = "";
        try {
          t.$select('a[data-widget="pshareicon"]')[0].click(),
          t.$select(".show-more")[0].click(),
          n = t.$select('input[data-sharecopy-ele="flashurl"]')[0].value;
          var r = /player\.video\.qiyi\.com\/([\w\d]+)\//,
          a = /\-tvId\=(\d+)\-/;
          i = r.exec(n)[1],
          o = a.exec(n)[1],
          t.$select('a[data-widget="pshareicon"]')[0].click()
        } catch(l) {
          return
        }
        return {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/qiyi/?id=" + i + "&tvid=" + o,
          size: {
            x: 115,
            y: 77
          },
          video: n,
          elem: null,
          elemSize: null,
          type: "video"
        }
      },
      "^https?://www.56.com/u": function() {
        var t = /v_(.+?)\.html/,
        n = t.exec(location.href);
        return n = n[1],
        {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/56/?id=" + n,
          size: {
            x: 480,
            y: 405
          },
          video: "http://player.56.com/v_" + n + ".swf",
          elem: null,
          elemSize: null,
          type: "video"
        }
      },
      "^https?://v.ku6.com": function() {
        var e = "",
        t = "";
        try {
          e = App.VideoInfo.data.data.bigpicpath,
          t = App.VideoInfo.id
        } catch(n) {}
        if (e && t) return {
          imgUrl: e,
          size: {
            x: 480,
            y: 405
          },
          video: "http://player.ku6.com/refer/" + t + "/v.swf",
          elem: null,
          elemSize: null,
          type: "video"
        }
      },
      "^https?://v.pptv.com/show": function() {
        return {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/pptv/?id=" + webcfg.id,
          size: {
            x: 120,
            y: 60
          },
          video: webcfg.player.playList[0].swf,
          elem: null,
          elemSize: null,
          type: "video"
        }
      },
      "^https?://v.qq.com/": function() {
        var e = "",
        n = "";
        try {
          var i = /vid=(.+)&/;
          e = t.$("textfield2").value,
          n = i.exec(e)[1]
        } catch(o) {}
        if (n && e) return {
          imgUrl: "http://vpic.video.qq.com/76082551/" + n + "_160_90_3.jpg",
          size: {
            x: 160,
            y: 90
          },
          video: e,
          elem: null,
          elemSize: null,
          type: "video"
        }
      }
    },
    e.embedVideoRules = {
      "(player.youku.com/player|www.tudou.com|player.ku6.com/refer|player.56.com|player.pptv.com/v)": function(t) {
        return {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/swf?url=" + encodeURIComponent(t.url),
          size: {
            x: 448,
            y: 336
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }
      },
      "share.vrs.sohu.com/my/v.swf.+?&id=(.+?)&autoplay=": function(t) {
        var n = /share.vrs.sohu.com\/my\/v.swf.+?&id=(.+?)&autoplay=/.exec(t.url)[1];
        return {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/mysohu/?id=" + n,
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }
      },
      "share.vrs.sohu.com/(.+?)/v.swf": function(t) {
        var n = /share\.vrs\.sohu\.com\/(.+?)\/v\.swf/.exec(t.url)[1];
        return {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/sohu/?id=" + n,
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }
      },
      "v.ifeng.com/include/exterior.swf": function(t) {
        var n = /guid=(.+?)&/,
        i = n.exec(t.url);
        return i ? (i = i[1], {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/ifeng/?id=" + i,
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }) : !1
      },
      "swf.ws.126.net/movieplayer": function(t) {
        var n = /-(vimg.+)-.swf?/,
        i = n.exec(t.url);
        return i ? (i = i[1].replace(/_/g, "."), {
          imgUrl: "http://" + i + ".jpg",
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }) : !1
      },
      "swf.ws.126.net/v": function(t) {
        var n = /coverpic=\"(.+?)&/,
        i = n.exec(t.url);
        return i ? (i = i[1], {
          imgUrl: i,
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }) : !1
      },
      "player.yinyuetai.com": function(t) {
        var n = /video\/swf\/(.+?)\//,
        i = n.exec(t.url);
        if (!i) return ! 1;
        i = i[1];
        var o = t.url.indexOf("video") > 0 ? e.settings.huabanUrl + "/pins/create/video/yinyuetai/?id=" + i: e.settings.huabanUrl + "/pins/create/video/yytList/?id=" + i;
        return {
          imgUrl: o,
          size: {
            x: 480,
            y: 360
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }
      },
      "player.video.qiyi.com": function(t) {
        var n = /com\/(.+?)\//,
        i = n.exec(t.url);
        return i ? (i = i[1], {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/qiyi/?id=" + i,
          size: {
            x: 115,
            y: 77
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }) : !1
      },
      "www.jifenzhong.com/external": function(t) {
        var n = /v1.0\/(.+?)\/player/,
        i = n.exec(t.url);
        return i ? (i = i[1], {
          imgUrl: e.settings.huabanUrl + "/pins/create/video/jfz/?id=" + i,
          size: {
            x: 480,
            y: 305
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }) : !1
      },
      "static.video.qq.com": function(t) {
        var n = /vid=(.+)(&|$)/,
        i = n.exec(t.url);
        return i ? {
          imgUrl: "http://vpic.video.qq.com/76082551/" + i[1] + "_160_90_3.jpg",
          size: {
            x: 160,
            y: 90
          },
          video: t.url,
          elem: t.elem,
          elemSize: e.collector.getElemSize(t.elem),
          type: "video"
        }: !1
      }
    }
  } (HUABAN_GLOBAL),
  function(e, t) {
    {
      var n = e.Qatrix;
      e.collector = {
        getImgUnits: function(e) {
          var i = [],
          o = t.images || [],
          r = this;
          return o.length ? (n.$each(o,
          function(e) {
            var t = r.buildImgUnit(e);
            t && i.push(t)
          }), void e(i)) : e([])
        },
        buildImgUnit: function(t) {
          if (n.$findParent(t,
          function(t) {
            return t.id == e.settings.id
          })) return null;
          if (!t.src) return null;
          var i = this.getImgNaturalSize(t);
          if (!i) return null;
          var o, r = "figure" == n.$parent(t).tagName.toLowerCase() ? n.$parent(t) : null,
          a = r && n.$tag(r, "figcaption").length ? n.$tag(r, "figcaption")[0].innerHTML: null,
          l = n.$parent(t),
          s = n.$attr.get(t, "alt") || a || n.$attr.get(t, "title") || "";
          return "a" === l.tagName.toLowerCase() && l.href && (s = s || n.$attr.get(l, "title") || "", l.href.match(/(^(#|javascript:))|((\.jpg|\.jpeg|\.png|\.gif)$)/) || (o = l.href)),
          {
            elem: t,
            url: o,
            imgUrl: t.src,
            size: i,
            elemSize: this.getElemSize(t),
            description: s,
            type: "img"
          }
        },
        getBgUnits: function(i) {
          var o = [],
          r = t.getElementsByTagName("*"),
          a = (r.length, this);
          n.$parallelEach(r,
          function(t, i) {
            var r = n.$style.get(t, "background-image"),
            l = a.getElemSize(t);
            return ! r || "none" == r || !~r.indexOf("http") || l.x < e.settings.elemMinWidth || l.y < e.settings.elemMinHeight ? i() : (r = a.getAbsoluteUrl(r.replace(/^url\(["']?/, "").replace(/["']?\)$/, "")), void a.getImgSize(r,
            function(e) {
              o.push({
                elem: t,
                imgUrl: r,
                size: e,
                elemSize: l,
                description: n.$attr.get(t, "title") || "",
                type: "bg"
              }),
              i()
            }))
          },
          function() {
            i(o)
          })
        },
        getOpenGraph: function() {
          for (var e = {},
          i = n.$tag(t, "meta"), o = 0; o < i.length; o++) {
            var r = n.$attr.get(i[o], "property");
            r && ~r.toLowerCase().indexOf("og:") && (e[n.$string.trim(r.toLowerCase().replace("og:", ""))] = n.$attr.get(i[o], "content"))
          }
          return e
        },
        getVideos: function(o) {
          var r = t.getElementsByTagName("object"),
          a = t.embeds,
          l = this,
          s = [],
          c = function(t, n) {
            var o = {
              url: t,
              elem: n
            };
            for (i in e.embedVideoRules) {
              var r = new RegExp(i);
              if (r.test(o.url)) {
                var a = e.embedVideoRules[i](o);
                a && s.push(a);
                break
              }
            }
          };
          a.length && n.$each(a,
          function(e) {
            c(e.src, e)
          }),
          r.length && n.$each(r,
          function(e) {
            var t = n.$attr.get(e, "data");
            t || n.$tag(e, "param",
            function(e) {
              var i = n.$attr.get(e, "name"); ("movie" == i || "src" == i) && (t = n.$attr.get(e, "value"))
            }),
            t && c(t, e)
          });
          for (i in e.videoSiteRules) {
            var u = new RegExp(i);
            if (u.test(location.href)) {
              var p = e.videoSiteRules[i]();
              p && s.push(p);
              break
            }
          }
          n.$parallelEach(s,
          function(e, t) {
            l.getImgSize(e.imgUrl,
            function(n) {
              n && (e.size = n),
              t()
            })
          },
          function() {
            o(s)
          })
        },
        getElemSize: function(e) {
          return {
            x: e.offsetWidth,
            y: e.offsetHeight
          }
        },
        getImgSize: function(t, n) {
          function i() {
            return a.complete || a.width ? {
              x: a.width,
              y: a.height
            }: null
          }
          function o() {
            if (new Date - r >= e.settings.getSizeTimeout) return n(null);
            var t = i();
            t ? n(t) : setTimeout(o, 100)
          }
          var r = new Date,
          a = new Image;
          a.src = t,
          setTimeout(o, 0)
        },
        getImgNaturalSize: function(e) {
          var t = {};
          if (e.naturalWidth) t = {
            x: e.naturalWidth,
            y: e.naturalHeight
          };
          else {
            var n = new Image;
            n.src = e.src,
            t = {
              x: n.width,
              y: n.height
            }
          }
          if (0 == t.x && 0 == t.y) {
            if (0 == e.width && 0 == e.height) return null;
            t = {
              x: e.width,
              y: e.height
            }
          }
          return t
        },
        getAbsoluteUrl: function(e) {
          var n = t.createElement("A");
          return n.href = e,
          e = n.href
        },
        buildUnits: function(t) {
          var i = this;
          n.$parallel({
            imgs: function(e) {
              i.getImgUnits(e)
            },
            bgs: function(e) {
              i.getBgUnits(e)
            },
            og: function(e) {
              var t = i.og = i.getOpenGraph();
              t.image && t.videosrc && t["video:type"] && ~t["video:type"].indexOf("flash") ? i.getImgSize(t.image,
              function(n) {
                e({
                  imgUrl: t.image,
                  size: n || {
                    x: 640,
                    y: 360
                  },
                  video: t.videosrc,
                  elem: null,
                  elemSize: null,
                  type: "video"
                })
              }) : t.image ? i.getImgSize(t.image,
              function(n) {
                e({
                  elem: null,
                  imgUrl: t.image,
                  size: n,
                  elemSize: n,
                  description: "",
                  type: "og"
                })
              }) : e()
            },
            videos: function(e) {
              i.getVideos(e)
            }
          },
          function(n) {
            var o = n.imgs.concat(n.bgs);
            n.og && o.push(n.og),
            o = o.concat(n.videos),
            o = i.filter(o),
            o = i.handleUnitsByRule(o),
            o = i.sorting(o, e.settings.orderBy),
            o = i.fillDescriptions(o),
            i.units = o,
            t(o)
          })
        },
        fillDescriptions: function(n) {
          var i = t.title,
          o = e.ui && e.ui.getSelectedText();
          this.og || (this.og = this.getOpenGraph()),
          this.og.title && (i = this.og.title),
          this.og.description && (i ? i += " : " + this.og.description: i = this.og.description);
          for (var r = n.length - 1; r >= 0; r--) n[r].description = o || n[r].description || i;
          return n
        },
        handleUnitsByRule: function(t) {
          if (!e.rules) return t;
          for (i in e.rules) {
            var n = new RegExp(i);
            if (n.test(window.location.href)) {
              t = e.rules[i](t) || t;
              break
            }
          }
          return t
        },
        filter: function(t) {
          for (var i = [], o = function(t) {
            var o = !0,
            r = [t.size && t.size.x >= e.settings.imageMinWidth, t.size && t.size.y >= e.settings.imageMinHeight,
            function() {
              var e = !0;
              return n.$each(i,
              function(n) {
                t.imgUrl == n.imgUrl && (e = !1)
              }),
              e
            } ()];
            return "video" == t.type && (r[0] = !0, r[1] = !0),
            n.$each(r,
            function(e) {
              e || (o = !1)
            }),
            o
          },
          r = 0; r < t.length; r++) o(t[r]) && i.push(t[r]);
          return i
        },
        sorting: function(t, n) {
          for (var i = 0; i < t.length; i++) t[i].documentOrder = i;
          var o = e.settings.priority;
          t.sort(function(e, t) {
            var n = o[t.type] - o[e.type];
            return n ? n: t.size.x * t.size.y - e.size.x * e.size.y
          });
          for (var i = 0; i < t.length; i++) t[i].recommendOrder = i;
          return "document" == n && t.sort(function(e, t) {
            return e.documentOrder - t.documentOrder
          }),
          t
        },
        attachFloatingButton: function() {
          if (!this.floatingButton) {
            var i = this,
            o = e.settings.floatingButton,
            r = [o.color, o.size, "icon-button"].join("-"),
            a = this.floatingButton = e.render("floating-button", {
              inner: o.inner,
              extraClass: o.withIcon ? r: ""
            });
            e.ui.mainEl || e.ui.buildElements(),
            n.$prepend(e.ui.holderEl, a),
            n.$show(a);
            var l = this.getElemSize(a);
            n.$hide(a),
            this.mouseMoveEvent = function(t) {
              var o = t.target || t.srcElement;
              if (!n.$className.has(o, "HUABAN-f-button")) if ("img" == o.tagName.toLowerCase()) {
                var r = i.getImgNaturalSize(o),
                s = i.getElemSize(o);
                if (r.x < e.settings.imageMinWidth || r.y < e.settings.imageMinHeight || s.x < e.settings.elemMinWidth || s.y < e.settings.elemMinHeight) return n.$hide(a);
                var c = i.getElPosition(o);
                n.$css.set(a, i.calButtonPos(c, l)),
                n.$show(a),
                a.imgElem = o
              } else {
                if (n.$className.has(o, "bdimgshare-bg")) return;
                n.$hide(a)
              }
            },
            window.addEventListener ? t.body.addEventListener("mousemove", this.mouseMoveEvent) : t.body.attachEvent("onmousemove", this.mouseMoveEvent),
            n.$event.on(a, "click",
            function() {
              var t = i.buildImgUnit(this.imgElem);
              t = i.handleUnitsByRule([t])[0],
              t = i.fillDescriptions([t])[0],
              e.popup.single(t)
            })
          }
        },
        calButtonPos: function(t, n) {
          var i = 0,
          o = 0,
          r = e.settings.floatingButton;
          return "outside" == r.style ? (i = ~r.position.indexOf("bottom") ? t.bottom: t.top - n.y, o = ~r.position.indexOf("right") ? t.right - n.x: t.left) : (i = ~r.position.indexOf("bottom") ? t.bottom - n.y - 5 : t.top + 5, o = ~r.position.indexOf("right") ? t.right - n.x - 5 : t.left + 5),
          {
            left: o > 0 ? o + "px": 0,
            top: i > 0 ? i + "px": 0
          }
        },
        detachFloatingButton: function() {
          var e = this.floatingButton;
          e && (window.removeEventListener ? t.body.removeEventListener("mousemove", this.mouseMoveEvent) : t.body.detachEvent("onmousemove", this.mouseMoveEvent), e.parentNode && e.parentNode.removeChild(e), delete this.floatingButton)
        },
        getElPosition: function(e) {
          this.docEl || (this.docEl = t.compatMode && "CSS1Compat" != t.compatMode ? t.body: t.documentElement);
          var i = {
            x: window.pageXOffset || this.docEl.scrollLeft,
            y: window.pageYOffset || this.docEl.scrollTop
          },
          o = e.getBoundingClientRect(),
          r = "relative" === n.$css.get(e, "position"),
          a = 0,
          l = 0;
          r && (a = parseInt(n.$css.get(e, "top"), 10) || 0, l = parseInt(n.$css.get(e, "left"), 10) || 0);
          var s = 0,
          c = 0;
          return r && (s = parseInt(n.$css.get(e, "margin-top"), 10) || 0, s = 0 > s ? s: 0, c = parseInt(n.$css.get(e, "margin-left"), 10) || 0, c = 0 > c ? c: 0),
          bodyTop = parseInt(n.$css.get(t.body, "top"), 10) || 0,
          bodyLeft = parseInt(n.$css.get(t.body, "left"), 10) || 0,
          bodyMarginTop = parseInt(n.$css.get(t.body, "margin-top"), 10) || 0,
          bodyMarginLeft = parseInt(n.$css.get(t.body, "margin-left"), 10) || 0,
          {
            left: o.left + i.x - l - c - bodyLeft - bodyMarginLeft,
            top: o.top + i.y - a - s - bodyTop - bodyMarginTop,
            right: o.right + i.x,
            bottom: o.bottom + i.y
          }
        }
      }
    }
  } (HUABAN_GLOBAL, document),
  function(e) {
    var t = e.Qatrix;
    e.initWaterfall = function(e) {
      function n(e) {
        if (o.widthSync) {
          var n = o.widthSync;
          if (!e) {
            var i = r.offsetWidth || document.body.offsetWidth;
            e = Math.floor((i - 2 * o.sideSpace + o.cellSpace) / (o.cellWidth + o.cellSpace)),
            e > o.maxCols && (e = o.maxCols),
            e < o.minCols && (e = o.minCols)
          }
          t.$each(n,
          function(n) {
            t.$css.set(n, "width", e * o.cellWidth + (e - 1) * o.cellSpace)
          })
        }
      }
      var i = {},
      o = {
        container: ".waterfall",
        widthSync: "",
        cellWidth: 236,
        cellSpace: 15,
        minCols: 1,
        maxCols: 6,
        cellClass: "cell",
        sideSpace: 15,
        topSpace: 15
      };
      o = t.$merge(o, e);
      var r = o.container;
      "string" == typeof r && (r = t.$select(r)[0]),
      n(),
      i.cells = t.$class(r, o.cellClass),
      i.reposition = function() {
        var e = r.offsetWidth,
        a = Math.floor((e - 2 * o.sideSpace + o.cellSpace) / (o.cellWidth + o.cellSpace));
        a > o.maxCols && (a = o.maxCols),
        a < o.minCols && (a = o.minCols);
        var l = e - 2 * o.sideSpace - a * (o.cellWidth + o.cellSpace) + o.cellSpace;
        n(a);
        var s = i.cells = t.$class(r, o.cellClass);
        if (s && s.length) {
          for (var c = [], u = 0; a > u; u++) c.push(o.topSpace);
          t.$each(s,
          function(e, n) {
            for (var i = 0,
            r = 0; a > r; r++) c[r] < c[i] && (i = r);
            var s = i * (o.cellWidth + o.cellSpace) + o.sideSpace + Math.floor(l / 2),
            u = c[i];
            t.$pos(e, s, u);
            var p = e.offsetHeight;
            c[i] += p + o.cellSpace
          }),
          t.$css.set(r, "height", Math.max.apply(Math, c) + 50)
        }
      },
      window.addEventListener ? window.addEventListener("resize",
      function() {
        i.reposition()
      }) : window.attachEvent("onresize",
      function() {
        i.reposition()
      }),
      r.waterfall = i
    }
  } (HUABAN_GLOBAL),
  function(e, t) {
    var n = (e.Qatrix,
    function(e) {
      return e.replace(/#+$/, "")
    });
    e.popup = {
      single: function(i, o) {
        var r = [e.settings.popupUrl + "?"],
        a = i.imgUrl;
        a.match(/^data:image\//i) && (a = "base64image");
        var l = {
          media: a,
          w: i.size.x,
          h: i.size.y,
          description: i.description,
          url: n(i.url || location.href)
        };
        "video" == i.type && (l.video = i.video, l.media_type = 1);
        for (var s in l) r.push(encodeURIComponent(s)),
        r.push("="),
        r.push(encodeURIComponent(l[s])),
        r.push("&");
        e.settings.via && r.push("via=" + encodeURIComponent(e.settings.via) + "&"),
        e.settings.md && r.push("md=" + encodeURIComponent(e.settings.md)),
        r = r.join(""),
        this.exportUnits = [{
          imgUrl: i.imgUrl
        }];
        var c = "status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=320,left=0,top=0";
        o ? e.ui.setMessage({
          url: r,
          features: c
        }) : this.popupWindow = t.open(r, "", c)
      },
      multi: function(i) {
        for (var o = [], r = 0; r < i.length; r++) {
          var a = {};
          o.push(a);
          for (key in i[r])"elem" != key && (a[key] = i[r][key]);
          a.url = n(a.url || location.href)
        }
        this.exportUnits = o;
        var l = "status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=500,height=350,left=0,top=0";
        this.popupWindow = t.open(e.settings.multiPopupUrl, "", l)
      },
      sendExportUnits: function() {
        if (this.exportUnits && this.exportUnits.length) {
          var n = JSON.stringify(this.exportUnits);
          /http:\/\/photo\.poco\.cn/.test(t.location.href) && (n = JSON.parse(n)),
          this.popupWindow.postMessage(n, e.settings.huabanUrl)
        }
      }
    }
  } (HUABAN_GLOBAL, window),
  function(e, t) {
    var n = e.Qatrix;
    e.ui = {
      buildElements: function() {
        var i = this,
        o = this.mainEl = e.render("main"),
        r = this.holderEl = n.$new("div", {
          id: e.settings.id
        }),
        a = this.waterfallEl = n.$class(o, "HUABAN-waterfall")[0],
        l = n.$new("style"),
        s = n.$class(o, "HUABAN-close")[0],
        c = n.$class(o, "HUABAN-sync"),
        u = n.$class(o, "HUABAN-multi-buttons")[0],
        p = n.$class(u, "HUABAN-confirm")[0],
        d = n.$class(u, "HUABAN-cancel")[0],
        h = this.multiNoti = n.$class(o, "HUABAN-multi-noti")[0],
        g = n.$tag(h, "b")[0],
        f = n.$tag(h, "i")[0],
        m = (this.noticeEl = n.$class(o, "HUABAN-notice")[0], n.$class(o, "HUABAN-switch-order")[0]);
        f.innerHTML = e.settings.maximumSelect,
        n.$append(r, l),
        n.$append(document.body, r),
        l.styleSheet ? l.styleSheet.cssText = e.styles: l.innerHTML = e.styles,
        e.initWaterfall({
          container: a,
          widthSync: c,
          cellWidth: 236,
          cellSpace: 15,
          minCols: 1,
          maxCols: 6,
          cellClass: e.settings.prefix + "cell",
          sideSpace: 60,
          topSpace: 16
        }),
        n.$event.on(o, "click", ".HUABAN-img-holder", {},
        function(t) {
          if (!n.$className.has(t.target, "HUABAN-select-btn")) {
            var o = n.$findParent(this,
            function(e) {
              return n.$className.has(e, "HUABAN-cell")
            });
            return i.isInMultiMode ? n.$class(o, "HUABAN-select-btn")[0].click() : void e.popup.single(o.unit)
          }
        }),
        n.$event.on(o, "click", ".HUABAN-select-btn", {},
        function() {
          var t = n.$findParent(this,
          function(e) {
            return n.$className.has(e, "HUABAN-cell")
          });
          n.$className.has(t, "HUABAN-selected") ? (n.$className.remove(t, "HUABAN-selected"), i.hideNotice()) : n.$class(o, "HUABAN-selected").length >= e.settings.maximumSelect ? i.showNotice("一次最多选择 " + e.settings.maximumSelect + " 张图片") : n.$className.add(t, "HUABAN-selected");
          var r = n.$class(o, "HUABAN-selected");
          i.isInMultiMode || i.activeMultiMode(),
          g.innerHTML = r.length,
          0 == r.length && i.quitMultiMode()
        }),
        n.$event.on(p, "click",
        function() {
          var t = [];
          n.$class(o, "HUABAN-selected",
          function(e) {
            t.push(e.unit)
          }),
          e.popup.multi(t),
          i.quitMultiMode()
        }),
        n.$event.on(d, "click",
        function() {
          i.quitMultiMode()
        }),
        n.$event.on(s, "click",
        function() {
          i.hide()
        }),
        n.$event.on(m, "click",
        function() {
          n.$className.has(this, "HUABAN-on") ? (n.$className.remove(this, "HUABAN-on"), e.settings.orderBy = "recommend", i.reOrder("recommend")) : (n.$className.add(this, "HUABAN-on"), e.settings.orderBy = "document", i.reOrder("document"))
        }),
        n.$event.on(document.body, "keydown",
        function(e) {
          if (i.isShowing && 27 == e.originalEvent.keyCode) {
            var o = t.document.activeElement;
            return "input" == o.tagName || "textarea" == o.tagName || n.$attr.get(o, "contenteditable") ? e.originalEvent.target.blur() : void i.hide()
          }
        })
      },
      buildCells: function(i) {
        var o = this;
        i.length && n.$each(i,
        function(i) {
          i.imgHeight = 236 / i.size.x * i.size.y;
          var r = e.render("waterfall-cell", i);
          if (r.unit = i, o.pinnedUrls) for (var a = o.pinnedUrls.length - 1; a >= 0; a--) o.pinnedUrls[a] == i.imgUrl && n.$className.add(r, "HUABAN-pinned");
          if (i.imgHeight > e.settings.waterfallLimit && n.$className.add(r, "HUABAN-long"), "video" == i.type && n.$className.add(r, "HUABAN-video"), n.$append(o.waterfallEl, r), !n.$browser.msie6 && !n.$browser.msie7 && !n.$browser.msie8) {
            var l = n.$class(r, "HUABAN-description")[0],
            s = function() {
              n.$style.set(l, "height", "auto"),
              n.$style.set(l, "height", l.scrollHeight - 12 + "px")
            },
            c = function(e) {
              t.setTimeout(s, 0)
            };
            n.$event.on(l, "change", s),
            n.$event.on(l, "cut", c),
            n.$event.on(l, "paste", c),
            n.$event.on(l, "drop", c),
            n.$event.on(l, "keydown", c),
            s()
          }
          if (n.$browser.msie6) {
            var u = n.$class(r, "HUABAN-over")[0],
            p = n.$class(r, "HUABAN-img-holder")[0];
            n.$style.set(u, "height", p.offsetHeight + "px"),
            n.$style.set(document.body, "height", "100%"),
            n.$event.on(r, "mouseover",
            function() {
              n.$show(u)
            }),
            n.$event.on(r, "mouseout",
            function() {
              n.$hide(u)
            })
          }
          o.initTextEl(n.$class(r, "HUABAN-description")[0])
        })
      },
      setMessage: function(t) {
        e.messageBox || (e.messageBox = e.render("message-box"), n.$append(document.body, e.messageBox)),
        "string" != typeof t && (t = JSON.stringify(t)),
        e.messageBox.innerHTML = t
      },
      initTextEl: function(t) {
        function i() {
          o.unit.description = t.value,
          e.ui.waterfallEl.waterfall.reposition()
        }
        var o = n.$findParent(t,
        function(e) {
          return n.$className.has(e, "HUABAN-cell")
        });
        n.$event.on(t, {
          keyup: i,
          blur: i
        })
      },
      show: function() {
        if (!this.checkPermission()) {
          var t = this;
          if (this.mainEl || this.buildElements(), !this.isShowing) {
            if (n.$empty(this.waterfallEl), n.$append(this.holderEl, this.mainEl), e.collector.buildUnits(function(i) {
              i && i.length ? t.buildCells(i) : n.$append(t.waterfallEl, e.render("empty-alert")),
              t.waterfallEl.waterfall.reposition()
            }), n.$browser.msie6) {
              var i = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
              n.$css.set(this.mainEl, "position", "absolute"),
              n.$css.set(this.mainEl, "top", i + "px")
            }
            n.$css.set(document.documentElement, "overflow", "hidden"),
            this.isShowing = !0,
            e.settings.showCallback && e.settings.showCallback()
          }
        }
      },
      hide: function() {
        this.mainEl && this.mainEl.parentNode && this.mainEl.parentNode.removeChild(this.mainEl),
        n.$css.set(document.documentElement, "overflow", "auto"),
        this.quitMultiMode(),
        this.isShowing = !1,
        e.settings.hideCallback && e.settings.hideCallback()
      },
      checkPermission: function() {
        if (location.href.match(/^https?:\/\/huaban.com/)) {
          var e = "你就在花瓣本站呢，可以直接采集本站图片。";
          return t.app && app.error ? app.error(e) : alert(e),
          !0
        }
      },
      activeMultiMode: function() {
        this.isInMultiMode || (this.isInMultiMode = !0, n.$className.add(this.mainEl, "HUABAN-multi"), n.$show(n.$class(this.mainEl, "HUABAN-multi-buttons")[0]), n.$hide(n.$class(this.mainEl, "HUABAN-logo")[0]), n.$show(this.multiNoti))
      },
      quitMultiMode: function() {
        this.isInMultiMode && (this.isInMultiMode = !1, n.$className.remove(this.mainEl, "HUABAN-multi"), n.$hide(n.$class(this.mainEl, "HUABAN-multi-buttons")[0]), n.$show(n.$class(this.mainEl, "HUABAN-logo")[0]), n.$hide(this.multiNoti), n.$class(this.mainEl, "HUABAN-selected",
        function(e) {
          n.$className.remove(e, "HUABAN-selected")
        }))
      },
      getSelectedText: function() {
        return ("" + (t.getSelection ? t.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text)).replace(/(^\s+|\s+$)/g, "")
      },
      pinComplete: function(e) {
        this.pinnedUrls = this.pinnedUrls || [],
        this.pinnedUrls.push(e),
        this.waterfallEl && n.$class(this.waterfallEl, "HUABAN-cell",
        function(t) {
          t.unit.imgUrl == e && n.$className.add(t, "HUABAN-pinned")
        })
      },
      showNotice: function(e) {
        n.$tag(this.noticeEl, "span")[0].innerHTML = e,
        n.$show(this.noticeEl),
        n.$animate(this.noticeEl, {
          opacity: {
            from: .5,
            to: 1
          }
        },
        500),
        this.multiNoti && n.$style.set(this.multiNoti, "visibility", "hidden");
        var t = this;
        this.noticeTimeout && clearTimeout(this.noticeTimeout),
        this.noticeTimeout = setTimeout(function() {
          t.hideNotice()
        },
        4e3)
      },
      hideNotice: function() {
        this.multiNoti && n.$style.set(this.multiNoti, "visibility", "visible"),
        n.$hide(this.noticeEl)
      },
      reOrder: function(e) {
        var t = this.waterfallEl.waterfall,
        i = t.cells,
        e = {
          document: "documentOrder",
          recommend: "recommendOrder"
        } [e];
        i.sort(function(t, n) {
          return n.unit[e] - t.unit[e]
        });
        for (var o = i.length - 1; o >= 0; o--) n.$append(this.waterfallEl, i[o]);
        t.reposition()
      }
    }
  } (HUABAN_GLOBAL, window),
  function(e, t) {
    t.__huaban = {
      _loaded: !0,
      showValidImages: function() {
        e.ui.show()
      }
    }
  } (HUABAN_GLOBAL, document),
  function(e) {
    var t = e.Qatrix;
    e["interface"] = {
      show: function() {
        e.ui.show()
      },
      hide: function() {
        e.ui.hide()
      },
      pinImage: function(n, i) {
        var o = "figure" == t.$parent(n).tagName.toLowerCase() ? t.$parent(n) : null,
        r = o && t.$tag(o, "figcaption").length ? t.$tag(o, "figcaption")[0].innerHTML: null,
        a = {
          elem: n,
          imgUrl: n.src,
          size: e.collector.getImgNaturalSize(n),
          elemSize: e.collector.getElemSize(n),
          description: t.$attr.get(n, "alt") || r || t.$attr.get(n, "title") || "",
          type: "img"
        },
        l = e.collector.handleUnitsByRule([a]);
        l && l.length && (a = l[0]),
        e.collector.fillDescriptions([a]),
        e.popup.single(a, i)
      },
      pinImageUrl: function(e) {
        for (var t = document.images,
        n = 0; n < t.length; n++) if (t[n].src == e) {
          this.pinImage(t[n], !0);
          break
        }
      },
      attachFloatingButton: function() {
        e.collector.attachFloatingButton()
      },
      detachFloatingButton: function() {
        e.collector.detachFloatingButton()
      },
      outputUnits: function() {
        e.collector.buildUnits(function(e) {
          for (var n = e.length - 1; n >= 0; n--) delete e[n].elem;
          window.HBiOSClientJSONString = JSON.stringify(e),
          t.$append(document.body, t.$new("iframe", {
            datatest: "test",
            src: "http://HUABAN_CALLBACK/",
            style: "visibility: hidden"
          }))
        })
      }
    }
  } (HUABAN_GLOBAL),
  function(e) {
    e.Qatrix;
    e.initialize = function() {
      e.ui.checkPermission() || (e.ui.show(), e.collector.attachFloatingButton())
    },
    e.settings.isMobileClient ? e["interface"].outputUnits() : e.settings.autoInitialize ? e.initialize() : e.settings.autoAttachFloatingButton && e.collector.attachFloatingButton();
    var t = window.addEventListener ? window.addEventListener: window.attachEvent;
    t("message",
    function(t) {
      if (t.origin == e.settings.huabanUrl) if ("multiUnits" == t.data) e.popup.sendExportUnits();
      else if ("singleUnit" == t.data) e.popup.sendExportUnits();
      else if ("singlePinComplete" == t.data) e.ui.hide();
      else if (~t.data.indexOf("complete:")) {
        var n = t.data.replace("complete:", "");
        e.ui.pinComplete(n)
      }
    })
  } (HUABAN_GLOBAL),
  function(e, t) {
    var n = e.Qatrix;
    n.$className.add(document.documentElement, "hb-loaded")
  } (HUABAN_GLOBAL, window))
} ();