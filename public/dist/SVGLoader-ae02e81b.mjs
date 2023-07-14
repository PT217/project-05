import { L as wt, F as It, as as at, at as Mt, au as Pt, V as q, av as St, aw as mt, p as Nt, q as dt, ax as ct, a3 as ht } from "./index-20e94914.mjs";
class Tt extends wt {
  constructor(O) {
    super(O), this.defaultDPI = 90, this.defaultUnit = "px";
  }
  load(O, z, V, N) {
    const I = this, Q = new It(I.manager);
    Q.setPath(I.path), Q.setRequestHeader(I.requestHeader), Q.setWithCredentials(I.withCredentials), Q.load(O, function(tt) {
      try {
        z(I.parse(tt));
      } catch (J) {
        N ? N(J) : console.error(J), I.manager.itemError(O);
      }
    }, V, N);
  }
  parse(O) {
    const z = this;
    function V(i, s) {
      if (i.nodeType !== 1)
        return;
      const e = k(i);
      let t = !1, c = null;
      switch (i.nodeName) {
        case "svg":
          s = F(i, s);
          break;
        case "style":
          I(i);
          break;
        case "g":
          s = F(i, s);
          break;
        case "path":
          s = F(i, s), i.hasAttribute("d") && (c = N(i));
          break;
        case "rect":
          s = F(i, s), c = J(i);
          break;
        case "polygon":
          s = F(i, s), c = X(i);
          break;
        case "polyline":
          s = F(i, s), c = K(i);
          break;
        case "circle":
          s = F(i, s), c = G(i);
          break;
        case "ellipse":
          s = F(i, s), c = B(i);
          break;
        case "line":
          s = F(i, s), c = ot(i);
          break;
        case "defs":
          t = !0;
          break;
        case "use":
          s = F(i, s);
          const y = (i.getAttributeNS("http://www.w3.org/1999/xlink", "href") || "").substring(1), m = i.viewportElement.getElementById(y);
          m ? V(m, s) : console.warn("SVGLoader: 'use node' references non-existent node id: " + y);
          break;
      }
      c && (s.fill !== void 0 && s.fill !== "none" && c.color.setStyle(s.fill), S(c, nt), A.push(c), c.userData = { node: i, style: s });
      const u = i.childNodes;
      for (let r = 0; r < u.length; r++) {
        const y = u[r];
        t && y.nodeName !== "style" && y.nodeName !== "defs" || V(y, s);
      }
      e && (H.pop(), H.length > 0 ? nt.copy(H[H.length - 1]) : nt.identity());
    }
    function N(i) {
      const s = new ct(), e = new q(), t = new q(), c = new q();
      let u = !0, r = !1;
      const y = i.getAttribute("d");
      if (y === "" || y === "none")
        return null;
      const m = y.match(/[a-df-z][^a-df-z]*/ig);
      for (let d = 0, a = m.length; d < a; d++) {
        const l = m[d], x = l.charAt(0), g = l.slice(1).trim();
        u === !0 && (r = !0, u = !1);
        let o;
        switch (x) {
          case "M":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2)
              e.x = o[n + 0], e.y = o[n + 1], t.x = e.x, t.y = e.y, n === 0 ? s.moveTo(e.x, e.y) : s.lineTo(e.x, e.y), n === 0 && c.copy(e);
            break;
          case "H":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n++)
              e.x = o[n], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "V":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n++)
              e.y = o[n], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "L":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2)
              e.x = o[n + 0], e.y = o[n + 1], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "C":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 6)
              s.bezierCurveTo(
                o[n + 0],
                o[n + 1],
                o[n + 2],
                o[n + 3],
                o[n + 4],
                o[n + 5]
              ), t.x = o[n + 2], t.y = o[n + 3], e.x = o[n + 4], e.y = o[n + 5], n === 0 && r === !0 && c.copy(e);
            break;
          case "S":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 4)
              s.bezierCurveTo(
                b(e.x, t.x),
                b(e.y, t.y),
                o[n + 0],
                o[n + 1],
                o[n + 2],
                o[n + 3]
              ), t.x = o[n + 0], t.y = o[n + 1], e.x = o[n + 2], e.y = o[n + 3], n === 0 && r === !0 && c.copy(e);
            break;
          case "Q":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 4)
              s.quadraticCurveTo(
                o[n + 0],
                o[n + 1],
                o[n + 2],
                o[n + 3]
              ), t.x = o[n + 0], t.y = o[n + 1], e.x = o[n + 2], e.y = o[n + 3], n === 0 && r === !0 && c.copy(e);
            break;
          case "T":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2) {
              const j = b(e.x, t.x), et = b(e.y, t.y);
              s.quadraticCurveTo(
                j,
                et,
                o[n + 0],
                o[n + 1]
              ), t.x = j, t.y = et, e.x = o[n + 0], e.y = o[n + 1], n === 0 && r === !0 && c.copy(e);
            }
            break;
          case "A":
            o = p(g, [3, 4], 7);
            for (let n = 0, T = o.length; n < T; n += 7) {
              if (o[n + 5] == e.x && o[n + 6] == e.y)
                continue;
              const j = e.clone();
              e.x = o[n + 5], e.y = o[n + 6], t.x = e.x, t.y = e.y, Q(
                s,
                o[n],
                o[n + 1],
                o[n + 2],
                o[n + 3],
                o[n + 4],
                j,
                e
              ), n === 0 && r === !0 && c.copy(e);
            }
            break;
          case "m":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2)
              e.x += o[n + 0], e.y += o[n + 1], t.x = e.x, t.y = e.y, n === 0 ? s.moveTo(e.x, e.y) : s.lineTo(e.x, e.y), n === 0 && c.copy(e);
            break;
          case "h":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n++)
              e.x += o[n], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "v":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n++)
              e.y += o[n], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "l":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2)
              e.x += o[n + 0], e.y += o[n + 1], t.x = e.x, t.y = e.y, s.lineTo(e.x, e.y), n === 0 && r === !0 && c.copy(e);
            break;
          case "c":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 6)
              s.bezierCurveTo(
                e.x + o[n + 0],
                e.y + o[n + 1],
                e.x + o[n + 2],
                e.y + o[n + 3],
                e.x + o[n + 4],
                e.y + o[n + 5]
              ), t.x = e.x + o[n + 2], t.y = e.y + o[n + 3], e.x += o[n + 4], e.y += o[n + 5], n === 0 && r === !0 && c.copy(e);
            break;
          case "s":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 4)
              s.bezierCurveTo(
                b(e.x, t.x),
                b(e.y, t.y),
                e.x + o[n + 0],
                e.y + o[n + 1],
                e.x + o[n + 2],
                e.y + o[n + 3]
              ), t.x = e.x + o[n + 0], t.y = e.y + o[n + 1], e.x += o[n + 2], e.y += o[n + 3], n === 0 && r === !0 && c.copy(e);
            break;
          case "q":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 4)
              s.quadraticCurveTo(
                e.x + o[n + 0],
                e.y + o[n + 1],
                e.x + o[n + 2],
                e.y + o[n + 3]
              ), t.x = e.x + o[n + 0], t.y = e.y + o[n + 1], e.x += o[n + 2], e.y += o[n + 3], n === 0 && r === !0 && c.copy(e);
            break;
          case "t":
            o = p(g);
            for (let n = 0, T = o.length; n < T; n += 2) {
              const j = b(e.x, t.x), et = b(e.y, t.y);
              s.quadraticCurveTo(
                j,
                et,
                e.x + o[n + 0],
                e.y + o[n + 1]
              ), t.x = j, t.y = et, e.x = e.x + o[n + 0], e.y = e.y + o[n + 1], n === 0 && r === !0 && c.copy(e);
            }
            break;
          case "a":
            o = p(g, [3, 4], 7);
            for (let n = 0, T = o.length; n < T; n += 7) {
              if (o[n + 5] == 0 && o[n + 6] == 0)
                continue;
              const j = e.clone();
              e.x += o[n + 5], e.y += o[n + 6], t.x = e.x, t.y = e.y, Q(
                s,
                o[n],
                o[n + 1],
                o[n + 2],
                o[n + 3],
                o[n + 4],
                j,
                e
              ), n === 0 && r === !0 && c.copy(e);
            }
            break;
          case "Z":
          case "z":
            s.currentPath.autoClose = !0, s.currentPath.curves.length > 0 && (e.copy(c), s.currentPath.currentPoint.copy(e), u = !0);
            break;
          default:
            console.warn(l);
        }
        r = !1;
      }
      return s;
    }
    function I(i) {
      if (!(!i.sheet || !i.sheet.cssRules || !i.sheet.cssRules.length))
        for (let s = 0; s < i.sheet.cssRules.length; s++) {
          const e = i.sheet.cssRules[s];
          if (e.type !== 1)
            continue;
          const t = e.selectorText.split(/,/gm).filter(Boolean).map((c) => c.trim());
          for (let c = 0; c < t.length; c++) {
            const u = Object.fromEntries(
              Object.entries(e.style).filter(([, r]) => r !== "")
            );
            U[t[c]] = Object.assign(
              U[t[c]] || {},
              u
            );
          }
        }
    }
    function Q(i, s, e, t, c, u, r, y) {
      if (s == 0 || e == 0) {
        i.lineTo(y.x, y.y);
        return;
      }
      t = t * Math.PI / 180, s = Math.abs(s), e = Math.abs(e);
      const m = (r.x - y.x) / 2, d = (r.y - y.y) / 2, a = Math.cos(t) * m + Math.sin(t) * d, l = -Math.sin(t) * m + Math.cos(t) * d;
      let x = s * s, g = e * e;
      const o = a * a, n = l * l, T = o / x + n / g;
      if (T > 1) {
        const ut = Math.sqrt(T);
        s = ut * s, e = ut * e, x = s * s, g = e * e;
      }
      const j = x * n + g * o, et = (x * g - j) / j;
      let st = Math.sqrt(Math.max(0, et));
      c === u && (st = -st);
      const v = st * s * l / e, it = -st * e * a / s, lt = Math.cos(t) * v - Math.sin(t) * it + (r.x + y.x) / 2, xt = Math.sin(t) * v + Math.cos(t) * it + (r.y + y.y) / 2, ft = tt(1, 0, (a - v) / s, (l - it) / e), pt = tt((a - v) / s, (l - it) / e, (-a - v) / s, (-l - it) / e) % (Math.PI * 2);
      i.currentPath.absellipse(lt, xt, s, e, ft, ft + pt, u === 0, t);
    }
    function tt(i, s, e, t) {
      const c = i * e + s * t, u = Math.sqrt(i * i + s * s) * Math.sqrt(e * e + t * t);
      let r = Math.acos(Math.max(-1, Math.min(1, c / u)));
      return i * t - s * e < 0 && (r = -r), r;
    }
    function J(i) {
      const s = h(i.getAttribute("x") || 0), e = h(i.getAttribute("y") || 0), t = h(i.getAttribute("rx") || i.getAttribute("ry") || 0), c = h(i.getAttribute("ry") || i.getAttribute("rx") || 0), u = h(i.getAttribute("width")), r = h(i.getAttribute("height")), y = 1 - 0.551915024494, m = new ct();
      return m.moveTo(s + t, e), m.lineTo(s + u - t, e), (t !== 0 || c !== 0) && m.bezierCurveTo(
        s + u - t * y,
        e,
        s + u,
        e + c * y,
        s + u,
        e + c
      ), m.lineTo(s + u, e + r - c), (t !== 0 || c !== 0) && m.bezierCurveTo(
        s + u,
        e + r - c * y,
        s + u - t * y,
        e + r,
        s + u - t,
        e + r
      ), m.lineTo(s + t, e + r), (t !== 0 || c !== 0) && m.bezierCurveTo(
        s + t * y,
        e + r,
        s,
        e + r - c * y,
        s,
        e + r - c
      ), m.lineTo(s, e + c), (t !== 0 || c !== 0) && m.bezierCurveTo(s, e + c * y, s + t * y, e, s + t, e), m;
    }
    function X(i) {
      function s(u, r, y) {
        const m = h(r), d = h(y);
        c === 0 ? t.moveTo(m, d) : t.lineTo(m, d), c++;
      }
      const e = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, t = new ct();
      let c = 0;
      return i.getAttribute("points").replace(e, s), t.currentPath.autoClose = !0, t;
    }
    function K(i) {
      function s(u, r, y) {
        const m = h(r), d = h(y);
        c === 0 ? t.moveTo(m, d) : t.lineTo(m, d), c++;
      }
      const e = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, t = new ct();
      let c = 0;
      return i.getAttribute("points").replace(e, s), t.currentPath.autoClose = !1, t;
    }
    function G(i) {
      const s = h(i.getAttribute("cx") || 0), e = h(i.getAttribute("cy") || 0), t = h(i.getAttribute("r") || 0), c = new mt();
      c.absarc(s, e, t, 0, Math.PI * 2);
      const u = new ct();
      return u.subPaths.push(c), u;
    }
    function B(i) {
      const s = h(i.getAttribute("cx") || 0), e = h(i.getAttribute("cy") || 0), t = h(i.getAttribute("rx") || 0), c = h(i.getAttribute("ry") || 0), u = new mt();
      u.absellipse(s, e, t, c, 0, Math.PI * 2);
      const r = new ct();
      return r.subPaths.push(u), r;
    }
    function ot(i) {
      const s = h(i.getAttribute("x1") || 0), e = h(i.getAttribute("y1") || 0), t = h(i.getAttribute("x2") || 0), c = h(i.getAttribute("y2") || 0), u = new ct();
      return u.moveTo(s, e), u.lineTo(t, c), u.currentPath.autoClose = !1, u;
    }
    function F(i, s) {
      s = Object.assign({}, s);
      let e = {};
      if (i.hasAttribute("class")) {
        const r = i.getAttribute("class").split(/\s/).filter(Boolean).map((y) => y.trim());
        for (let y = 0; y < r.length; y++)
          e = Object.assign(e, U["." + r[y]]);
      }
      i.hasAttribute("id") && (e = Object.assign(e, U["#" + i.getAttribute("id")]));
      function t(r, y, m) {
        m === void 0 && (m = function(a) {
          return a.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), a;
        }), i.hasAttribute(r) && (s[y] = m(i.getAttribute(r))), e[r] && (s[y] = m(e[r])), i.style && i.style[r] !== "" && (s[y] = m(i.style[r]));
      }
      function c(r) {
        return Math.max(0, Math.min(1, h(r)));
      }
      function u(r) {
        return Math.max(0, h(r));
      }
      return t("fill", "fill"), t("fill-opacity", "fillOpacity", c), t("fill-rule", "fillRule"), t("opacity", "opacity", c), t("stroke", "stroke"), t("stroke-opacity", "strokeOpacity", c), t("stroke-width", "strokeWidth", u), t("stroke-linejoin", "strokeLineJoin"), t("stroke-linecap", "strokeLineCap"), t("stroke-miterlimit", "strokeMiterLimit", u), t("visibility", "visibility"), s;
    }
    function b(i, s) {
      return i - (s - i);
    }
    function p(i, s, e) {
      if (typeof i != "string")
        throw new TypeError("Invalid input: " + typeof i);
      const t = {
        SEPARATOR: /[ \t\r\n\,.\-+]/,
        WHITESPACE: /[ \t\r\n]/,
        DIGIT: /[\d]/,
        SIGN: /[-+]/,
        POINT: /\./,
        COMMA: /,/,
        EXP: /e/i,
        FLAGS: /[01]/
      }, c = 0, u = 1, r = 2, y = 3;
      let m = c, d = !0, a = "", l = "";
      const x = [];
      function g(j, et, st) {
        const v = new SyntaxError('Unexpected character "' + j + '" at index ' + et + ".");
        throw v.partial = st, v;
      }
      function o() {
        a !== "" && (l === "" ? x.push(Number(a)) : x.push(Number(a) * Math.pow(10, Number(l)))), a = "", l = "";
      }
      let n;
      const T = i.length;
      for (let j = 0; j < T; j++) {
        if (n = i[j], Array.isArray(s) && s.includes(x.length % e) && t.FLAGS.test(n)) {
          m = u, a = n, o();
          continue;
        }
        if (m === c) {
          if (t.WHITESPACE.test(n))
            continue;
          if (t.DIGIT.test(n) || t.SIGN.test(n)) {
            m = u, a = n;
            continue;
          }
          if (t.POINT.test(n)) {
            m = r, a = n;
            continue;
          }
          t.COMMA.test(n) && (d && g(n, j, x), d = !0);
        }
        if (m === u) {
          if (t.DIGIT.test(n)) {
            a += n;
            continue;
          }
          if (t.POINT.test(n)) {
            a += n, m = r;
            continue;
          }
          if (t.EXP.test(n)) {
            m = y;
            continue;
          }
          t.SIGN.test(n) && a.length === 1 && t.SIGN.test(a[0]) && g(n, j, x);
        }
        if (m === r) {
          if (t.DIGIT.test(n)) {
            a += n;
            continue;
          }
          if (t.EXP.test(n)) {
            m = y;
            continue;
          }
          t.POINT.test(n) && a[a.length - 1] === "." && g(n, j, x);
        }
        if (m === y) {
          if (t.DIGIT.test(n)) {
            l += n;
            continue;
          }
          if (t.SIGN.test(n)) {
            if (l === "") {
              l += n;
              continue;
            }
            l.length === 1 && t.SIGN.test(l) && g(n, j, x);
          }
        }
        t.WHITESPACE.test(n) ? (o(), m = c, d = !1) : t.COMMA.test(n) ? (o(), m = c, d = !0) : t.SIGN.test(n) ? (o(), m = u, a = n) : t.POINT.test(n) ? (o(), m = r, a = n) : g(n, j, x);
      }
      return o(), x;
    }
    const w = ["mm", "cm", "in", "pt", "pc", "px"], R = {
      mm: {
        mm: 1,
        cm: 0.1,
        in: 1 / 25.4,
        pt: 72 / 25.4,
        pc: 6 / 25.4,
        px: -1
      },
      cm: {
        mm: 10,
        cm: 1,
        in: 1 / 2.54,
        pt: 72 / 2.54,
        pc: 6 / 2.54,
        px: -1
      },
      in: {
        mm: 25.4,
        cm: 2.54,
        in: 1,
        pt: 72,
        pc: 6,
        px: -1
      },
      pt: {
        mm: 25.4 / 72,
        cm: 2.54 / 72,
        in: 1 / 72,
        pt: 1,
        pc: 6 / 72,
        px: -1
      },
      pc: {
        mm: 25.4 / 6,
        cm: 2.54 / 6,
        in: 1 / 6,
        pt: 72 / 6,
        pc: 1,
        px: -1
      },
      px: {
        px: 1
      }
    };
    function h(i) {
      let s = "px";
      if (typeof i == "string" || i instanceof String)
        for (let t = 0, c = w.length; t < c; t++) {
          const u = w[t];
          if (i.endsWith(u)) {
            s = u, i = i.substring(0, i.length - u.length);
            break;
          }
        }
      let e;
      return s === "px" && z.defaultUnit !== "px" ? e = R.in[z.defaultUnit] / z.defaultDPI : (e = R[s][z.defaultUnit], e < 0 && (e = R[s].in * z.defaultDPI)), e * parseFloat(i);
    }
    function k(i) {
      if (!(i.hasAttribute("transform") || i.nodeName === "use" && (i.hasAttribute("x") || i.hasAttribute("y"))))
        return null;
      const s = M(i);
      return H.length > 0 && s.premultiply(H[H.length - 1]), nt.copy(s), H.push(s), s;
    }
    function M(i) {
      const s = new at(), e = _;
      if (i.nodeName === "use" && (i.hasAttribute("x") || i.hasAttribute("y"))) {
        const t = h(i.getAttribute("x")), c = h(i.getAttribute("y"));
        s.translate(t, c);
      }
      if (i.hasAttribute("transform")) {
        const t = i.getAttribute("transform").split(")");
        for (let c = t.length - 1; c >= 0; c--) {
          const u = t[c].trim();
          if (u === "")
            continue;
          const r = u.indexOf("("), y = u.length;
          if (r > 0 && r < y) {
            const m = u.slice(0, r), d = p(u.slice(r + 1));
            switch (e.identity(), m) {
              case "translate":
                if (d.length >= 1) {
                  const a = d[0];
                  let l = 0;
                  d.length >= 2 && (l = d[1]), e.translate(a, l);
                }
                break;
              case "rotate":
                if (d.length >= 1) {
                  let a = 0, l = 0, x = 0;
                  a = d[0] * Math.PI / 180, d.length >= 3 && (l = d[1], x = d[2]), Y.makeTranslation(-l, -x), P.makeRotation(a), f.multiplyMatrices(P, Y), Y.makeTranslation(l, x), e.multiplyMatrices(Y, f);
                }
                break;
              case "scale":
                if (d.length >= 1) {
                  const a = d[0];
                  let l = a;
                  d.length >= 2 && (l = d[1]), e.scale(a, l);
                }
                break;
              case "skewX":
                d.length === 1 && e.set(
                  1,
                  Math.tan(d[0] * Math.PI / 180),
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  1
                );
                break;
              case "skewY":
                d.length === 1 && e.set(
                  1,
                  0,
                  0,
                  Math.tan(d[0] * Math.PI / 180),
                  1,
                  0,
                  0,
                  0,
                  1
                );
                break;
              case "matrix":
                d.length === 6 && e.set(
                  d[0],
                  d[2],
                  d[4],
                  d[1],
                  d[3],
                  d[5],
                  0,
                  0,
                  1
                );
                break;
            }
          }
          s.premultiply(e);
        }
      }
      return s;
    }
    function S(i, s) {
      function e(r) {
        D.set(r.x, r.y, 1).applyMatrix3(s), r.set(D.x, D.y);
      }
      function t(r) {
        const y = r.xRadius, m = r.yRadius, d = Math.cos(r.aRotation), a = Math.sin(r.aRotation), l = new ht(y * d, y * a, 0), x = new ht(-m * a, m * d, 0), g = l.applyMatrix3(s), o = x.applyMatrix3(s), n = _.set(
          g.x,
          o.x,
          0,
          g.y,
          o.y,
          0,
          0,
          0,
          1
        ), T = Y.copy(n).invert(), st = P.copy(T).transpose().multiply(T).elements, v = $(st[0], st[1], st[4]), it = Math.sqrt(v.rt1), lt = Math.sqrt(v.rt2);
        if (r.xRadius = 1 / it, r.yRadius = 1 / lt, r.aRotation = Math.atan2(v.sn, v.cs), !((r.aEndAngle - r.aStartAngle) % (2 * Math.PI) < Number.EPSILON)) {
          const ft = Y.set(
            it,
            0,
            0,
            0,
            lt,
            0,
            0,
            0,
            1
          ), pt = P.set(
            v.cs,
            v.sn,
            0,
            -v.sn,
            v.cs,
            0,
            0,
            0,
            1
          ), ut = ft.multiply(pt).multiply(n), bt = (gt) => {
            const { x: kt, y: At } = new ht(Math.cos(gt), Math.sin(gt), 0).applyMatrix3(ut);
            return Math.atan2(At, kt);
          };
          r.aStartAngle = bt(r.aStartAngle), r.aEndAngle = bt(r.aEndAngle), L(s) && (r.aClockwise = !r.aClockwise);
        }
      }
      function c(r) {
        const y = C(s), m = W(s);
        r.xRadius *= y, r.yRadius *= m;
        const d = y > Number.EPSILON ? Math.atan2(s.elements[1], s.elements[0]) : Math.atan2(-s.elements[3], s.elements[4]);
        r.aRotation += d, L(s) && (r.aStartAngle *= -1, r.aEndAngle *= -1, r.aClockwise = !r.aClockwise);
      }
      const u = i.subPaths;
      for (let r = 0, y = u.length; r < y; r++) {
        const d = u[r].curves;
        for (let a = 0; a < d.length; a++) {
          const l = d[a];
          l.isLineCurve ? (e(l.v1), e(l.v2)) : l.isCubicBezierCurve ? (e(l.v0), e(l.v1), e(l.v2), e(l.v3)) : l.isQuadraticBezierCurve ? (e(l.v0), e(l.v1), e(l.v2)) : l.isEllipseCurve && (Z.set(l.aX, l.aY), e(Z), l.aX = Z.x, l.aY = Z.y, E(s) ? t(l) : c(l));
        }
      }
    }
    function L(i) {
      const s = i.elements;
      return s[0] * s[4] - s[1] * s[3] < 0;
    }
    function E(i) {
      const s = i.elements, e = s[0] * s[3] + s[1] * s[4];
      if (e === 0)
        return !1;
      const t = C(i), c = W(i);
      return Math.abs(e / (t * c)) > Number.EPSILON;
    }
    function C(i) {
      const s = i.elements;
      return Math.sqrt(s[0] * s[0] + s[1] * s[1]);
    }
    function W(i) {
      const s = i.elements;
      return Math.sqrt(s[3] * s[3] + s[4] * s[4]);
    }
    function $(i, s, e) {
      let t, c, u, r, y;
      const m = i + e, d = i - e, a = Math.sqrt(d * d + 4 * s * s);
      return m > 0 ? (t = 0.5 * (m + a), y = 1 / t, c = i * y * e - s * y * s) : m < 0 ? c = 0.5 * (m - a) : (t = 0.5 * a, c = -0.5 * a), d > 0 ? u = d + a : u = d - a, Math.abs(u) > 2 * Math.abs(s) ? (y = -2 * s / u, r = 1 / Math.sqrt(1 + y * y), u = y * r) : Math.abs(s) === 0 ? (u = 1, r = 0) : (y = -0.5 * u / s, u = 1 / Math.sqrt(1 + y * y), r = y * u), d > 0 && (y = u, u = -r, r = y), { rt1: t, rt2: c, cs: u, sn: r };
    }
    const A = [], U = {}, H = [], _ = new at(), Y = new at(), P = new at(), f = new at(), Z = new q(), D = new ht(), nt = new at(), rt = new DOMParser().parseFromString(O, "image/svg+xml");
    return V(rt.documentElement, {
      fill: "#000",
      fillOpacity: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
      strokeLineJoin: "miter",
      strokeLineCap: "butt",
      strokeMiterLimit: 4
    }), { paths: A, xml: rt.documentElement };
  }
  static createShapes(O) {
    const V = {
      ORIGIN: 0,
      DESTINATION: 1,
      BETWEEN: 2,
      LEFT: 3,
      RIGHT: 4,
      BEHIND: 5,
      BEYOND: 6
    }, N = {
      loc: V.ORIGIN,
      t: 0
    };
    function I(b, p, w, R) {
      const h = b.x, k = p.x, M = w.x, S = R.x, L = b.y, E = p.y, C = w.y, W = R.y, $ = (S - M) * (L - C) - (W - C) * (h - M), A = (k - h) * (L - C) - (E - L) * (h - M), U = (W - C) * (k - h) - (S - M) * (E - L), H = $ / U, _ = A / U;
      if (U === 0 && $ !== 0 || H <= 0 || H >= 1 || _ < 0 || _ > 1)
        return null;
      if ($ === 0 && U === 0) {
        for (let Y = 0; Y < 2; Y++)
          if (Q(Y === 0 ? w : R, b, p), N.loc == V.ORIGIN) {
            const P = Y === 0 ? w : R;
            return { x: P.x, y: P.y, t: N.t };
          } else if (N.loc == V.BETWEEN) {
            const P = +(h + N.t * (k - h)).toPrecision(10), f = +(L + N.t * (E - L)).toPrecision(10);
            return { x: P, y: f, t: N.t };
          }
        return null;
      } else {
        for (let f = 0; f < 2; f++)
          if (Q(f === 0 ? w : R, b, p), N.loc == V.ORIGIN) {
            const Z = f === 0 ? w : R;
            return { x: Z.x, y: Z.y, t: N.t };
          }
        const Y = +(h + H * (k - h)).toPrecision(10), P = +(L + H * (E - L)).toPrecision(10);
        return { x: Y, y: P, t: H };
      }
    }
    function Q(b, p, w) {
      const R = w.x - p.x, h = w.y - p.y, k = b.x - p.x, M = b.y - p.y, S = R * M - k * h;
      if (b.x === p.x && b.y === p.y) {
        N.loc = V.ORIGIN, N.t = 0;
        return;
      }
      if (b.x === w.x && b.y === w.y) {
        N.loc = V.DESTINATION, N.t = 1;
        return;
      }
      if (S < -Number.EPSILON) {
        N.loc = V.LEFT;
        return;
      }
      if (S > Number.EPSILON) {
        N.loc = V.RIGHT;
        return;
      }
      if (R * k < 0 || h * M < 0) {
        N.loc = V.BEHIND;
        return;
      }
      if (Math.sqrt(R * R + h * h) < Math.sqrt(k * k + M * M)) {
        N.loc = V.BEYOND;
        return;
      }
      let L;
      R !== 0 ? L = k / R : L = M / h, N.loc = V.BETWEEN, N.t = L;
    }
    function tt(b, p) {
      const w = [], R = [];
      for (let h = 1; h < b.length; h++) {
        const k = b[h - 1], M = b[h];
        for (let S = 1; S < p.length; S++) {
          const L = p[S - 1], E = p[S], C = I(k, M, L, E);
          C !== null && w.find((W) => W.t <= C.t + Number.EPSILON && W.t >= C.t - Number.EPSILON) === void 0 && (w.push(C), R.push(new q(C.x, C.y)));
        }
      }
      return R;
    }
    function J(b, p, w) {
      const R = new q();
      p.getCenter(R);
      const h = [];
      return w.forEach((k) => {
        k.boundingBox.containsPoint(R) && tt(b, k.points).forEach((S) => {
          h.push({ identifier: k.identifier, isCW: k.isCW, point: S });
        });
      }), h.sort((k, M) => k.point.x - M.point.x), h;
    }
    function X(b, p, w, R, h) {
      (h == null || h === "") && (h = "nonzero");
      const k = new q();
      b.boundingBox.getCenter(k);
      const M = [new q(w, k.y), new q(R, k.y)], S = J(M, b.boundingBox, p);
      S.sort((A, U) => A.point.x - U.point.x);
      const L = [], E = [];
      S.forEach((A) => {
        A.identifier === b.identifier ? L.push(A) : E.push(A);
      });
      const C = L[0].point.x, W = [];
      let $ = 0;
      for (; $ < E.length && E[$].point.x < C; )
        W.length > 0 && W[W.length - 1] === E[$].identifier ? W.pop() : W.push(E[$].identifier), $++;
      if (W.push(b.identifier), h === "evenodd") {
        const A = W.length % 2 === 0, U = W[W.length - 2];
        return { identifier: b.identifier, isHole: A, for: U };
      } else if (h === "nonzero") {
        let A = !0, U = null, H = null;
        for (let _ = 0; _ < W.length; _++) {
          const Y = W[_];
          A ? (H = p[Y].isCW, A = !1, U = Y) : H !== p[Y].isCW && (H = p[Y].isCW, A = !0);
        }
        return { identifier: b.identifier, isHole: A, for: U };
      } else
        console.warn('fill-rule: "' + h + '" is currently not implemented.');
    }
    let K = 999999999, G = -999999999, B = O.subPaths.map((b) => {
      const p = b.getPoints();
      let w = -999999999, R = 999999999, h = -999999999, k = 999999999;
      for (let M = 0; M < p.length; M++) {
        const S = p[M];
        S.y > w && (w = S.y), S.y < R && (R = S.y), S.x > h && (h = S.x), S.x < k && (k = S.x);
      }
      return G <= h && (G = h + 1), K >= k && (K = k - 1), { curves: b.curves, points: p, isCW: Mt.isClockWise(p), identifier: -1, boundingBox: new Pt(new q(k, R), new q(h, w)) };
    });
    B = B.filter((b) => b.points.length > 1);
    for (let b = 0; b < B.length; b++)
      B[b].identifier = b;
    const ot = B.map((b) => X(b, B, K, G, O.userData ? O.userData.style.fillRule : void 0)), F = [];
    return B.forEach((b) => {
      if (!ot[b.identifier].isHole) {
        const w = new St();
        w.curves = b.curves, ot.filter((h) => h.isHole && h.for === b.identifier).forEach((h) => {
          const k = B[h.identifier], M = new mt();
          M.curves = k.curves, w.holes.push(M);
        }), F.push(w);
      }
    }), F;
  }
  static getStrokeStyle(O, z, V, N, I) {
    return O = O !== void 0 ? O : 1, z = z !== void 0 ? z : "#000", V = V !== void 0 ? V : "miter", N = N !== void 0 ? N : "butt", I = I !== void 0 ? I : 4, {
      strokeColor: z,
      strokeWidth: O,
      strokeLineJoin: V,
      strokeLineCap: N,
      strokeMiterLimit: I
    };
  }
  static pointsToStroke(O, z, V, N) {
    const I = [], Q = [], tt = [];
    if (Tt.pointsToStrokeWithBuffers(O, z, V, N, I, Q, tt) === 0)
      return null;
    const J = new Nt();
    return J.setAttribute("position", new dt(I, 3)), J.setAttribute("normal", new dt(Q, 3)), J.setAttribute("uv", new dt(tt, 2)), J;
  }
  static pointsToStrokeWithBuffers(O, z, V, N, I, Q, tt, J) {
    const X = new q(), K = new q(), G = new q(), B = new q(), ot = new q(), F = new q(), b = new q(), p = new q(), w = new q(), R = new q(), h = new q(), k = new q(), M = new q(), S = new q(), L = new q(), E = new q(), C = new q();
    V = V !== void 0 ? V : 12, N = N !== void 0 ? N : 1e-3, J = J !== void 0 ? J : 0, O = d(O);
    const W = O.length;
    if (W < 2)
      return 0;
    const $ = O[0].equals(O[W - 1]);
    let A, U = O[0], H;
    const _ = z.strokeWidth / 2, Y = 1 / (W - 1);
    let P = 0, f, Z, D, nt, rt = !1, yt = 0, i = J * 3, s = J * 2;
    e(O[0], O[1], X).multiplyScalar(_), p.copy(O[0]).sub(X), w.copy(O[0]).add(X), R.copy(p), h.copy(w);
    for (let a = 1; a < W; a++) {
      A = O[a], a === W - 1 ? $ ? H = O[1] : H = void 0 : H = O[a + 1];
      const l = X;
      if (e(U, A, l), G.copy(l).multiplyScalar(_), k.copy(A).sub(G), M.copy(A).add(G), f = P + Y, Z = !1, H !== void 0) {
        e(A, H, K), G.copy(K).multiplyScalar(_), S.copy(A).sub(G), L.copy(A).add(G), D = !0, G.subVectors(H, U), l.dot(G) < 0 && (D = !1), a === 1 && (rt = D), G.subVectors(H, A), G.normalize();
        const x = Math.abs(l.dot(G));
        if (x > Number.EPSILON) {
          const g = _ / x;
          G.multiplyScalar(-g), B.subVectors(A, U), ot.copy(B).setLength(g).add(G), E.copy(ot).negate();
          const o = ot.length(), n = B.length();
          B.divideScalar(n), F.subVectors(H, A);
          const T = F.length();
          switch (F.divideScalar(T), B.dot(E) < n && F.dot(E) < T && (Z = !0), C.copy(ot).add(A), E.add(A), nt = !1, Z ? D ? (L.copy(E), M.copy(E)) : (S.copy(E), k.copy(E)) : u(), z.strokeLineJoin) {
            case "bevel":
              r(D, Z, f);
              break;
            case "round":
              y(D, Z), D ? c(A, k, S, f, 0) : c(A, L, M, f, 1);
              break;
            case "miter":
            case "miter-clip":
            default:
              const j = _ * z.strokeMiterLimit / o;
              if (j < 1)
                if (z.strokeLineJoin !== "miter-clip") {
                  r(D, Z, f);
                  break;
                } else
                  y(D, Z), D ? (F.subVectors(C, k).multiplyScalar(j).add(k), b.subVectors(C, S).multiplyScalar(j).add(S), t(k, f, 0), t(F, f, 0), t(A, f, 0.5), t(A, f, 0.5), t(F, f, 0), t(b, f, 0), t(A, f, 0.5), t(b, f, 0), t(S, f, 0)) : (F.subVectors(C, M).multiplyScalar(j).add(M), b.subVectors(C, L).multiplyScalar(j).add(L), t(M, f, 1), t(F, f, 1), t(A, f, 0.5), t(A, f, 0.5), t(F, f, 1), t(b, f, 1), t(A, f, 0.5), t(b, f, 1), t(L, f, 1));
              else
                Z ? (D ? (t(w, P, 1), t(p, P, 0), t(C, f, 0), t(w, P, 1), t(C, f, 0), t(E, f, 1)) : (t(w, P, 1), t(p, P, 0), t(C, f, 1), t(p, P, 0), t(E, f, 0), t(C, f, 1)), D ? S.copy(C) : L.copy(C)) : D ? (t(k, f, 0), t(C, f, 0), t(A, f, 0.5), t(A, f, 0.5), t(C, f, 0), t(S, f, 0)) : (t(M, f, 1), t(C, f, 1), t(A, f, 0.5), t(A, f, 0.5), t(C, f, 1), t(L, f, 1)), nt = !0;
              break;
          }
        } else
          u();
      } else
        u();
      !$ && a === W - 1 && m(O[0], R, h, D, !0, P), P = f, U = A, p.copy(S), w.copy(L);
    }
    if (!$)
      m(A, k, M, D, !1, f);
    else if (Z && I) {
      let a = C, l = E;
      rt !== D && (a = E, l = C), D ? (nt || rt) && (l.toArray(I, 0 * 3), l.toArray(I, 3 * 3), nt && a.toArray(I, 1 * 3)) : (nt || !rt) && (l.toArray(I, 1 * 3), l.toArray(I, 3 * 3), nt && a.toArray(I, 0 * 3));
    }
    return yt;
    function e(a, l, x) {
      return x.subVectors(l, a), x.set(-x.y, x.x).normalize();
    }
    function t(a, l, x) {
      I && (I[i] = a.x, I[i + 1] = a.y, I[i + 2] = 0, Q && (Q[i] = 0, Q[i + 1] = 0, Q[i + 2] = 1), i += 3, tt && (tt[s] = l, tt[s + 1] = x, s += 2)), yt += 3;
    }
    function c(a, l, x, g, o) {
      X.copy(l).sub(a).normalize(), K.copy(x).sub(a).normalize();
      let n = Math.PI;
      const T = X.dot(K);
      Math.abs(T) < 1 && (n = Math.abs(Math.acos(T))), n /= V, G.copy(l);
      for (let j = 0, et = V - 1; j < et; j++)
        B.copy(G).rotateAround(a, n), t(G, g, o), t(B, g, o), t(a, g, 0.5), G.copy(B);
      t(B, g, o), t(x, g, o), t(a, g, 0.5);
    }
    function u() {
      t(w, P, 1), t(p, P, 0), t(k, f, 0), t(w, P, 1), t(k, f, 1), t(M, f, 0);
    }
    function r(a, l, x) {
      l ? a ? (t(w, P, 1), t(p, P, 0), t(k, f, 0), t(w, P, 1), t(k, f, 0), t(E, f, 1), t(k, x, 0), t(S, x, 0), t(E, x, 0.5)) : (t(w, P, 1), t(p, P, 0), t(M, f, 1), t(p, P, 0), t(E, f, 0), t(M, f, 1), t(M, x, 1), t(L, x, 0), t(E, x, 0.5)) : a ? (t(k, x, 0), t(S, x, 0), t(A, x, 0.5)) : (t(M, x, 1), t(L, x, 0), t(A, x, 0.5));
    }
    function y(a, l) {
      l && (a ? (t(w, P, 1), t(p, P, 0), t(k, f, 0), t(w, P, 1), t(k, f, 0), t(E, f, 1), t(k, P, 0), t(A, f, 0.5), t(E, f, 1), t(A, f, 0.5), t(S, P, 0), t(E, f, 1)) : (t(w, P, 1), t(p, P, 0), t(M, f, 1), t(p, P, 0), t(E, f, 0), t(M, f, 1), t(M, P, 1), t(E, f, 0), t(A, f, 0.5), t(A, f, 0.5), t(E, f, 0), t(L, P, 1)));
    }
    function m(a, l, x, g, o, n) {
      switch (z.strokeLineCap) {
        case "round":
          o ? c(a, x, l, n, 0.5) : c(a, l, x, n, 0.5);
          break;
        case "square":
          if (o)
            X.subVectors(l, a), K.set(X.y, -X.x), G.addVectors(X, K).add(a), B.subVectors(K, X).add(a), g ? (G.toArray(I, 1 * 3), B.toArray(I, 0 * 3), B.toArray(I, 3 * 3)) : (G.toArray(I, 1 * 3), G.toArray(I, 3 * 3), B.toArray(I, 0 * 3));
          else {
            X.subVectors(x, a), K.set(X.y, -X.x), G.addVectors(X, K).add(a), B.subVectors(K, X).add(a);
            const T = I.length;
            g ? (G.toArray(I, T - 1 * 3), B.toArray(I, T - 2 * 3), B.toArray(I, T - 4 * 3)) : (G.toArray(I, T - 2 * 3), B.toArray(I, T - 1 * 3), B.toArray(I, T - 4 * 3));
          }
          break;
      }
    }
    function d(a) {
      let l = !1;
      for (let g = 1, o = a.length - 1; g < o; g++)
        if (a[g].distanceTo(a[g + 1]) < N) {
          l = !0;
          break;
        }
      if (!l)
        return a;
      const x = [];
      x.push(a[0]);
      for (let g = 1, o = a.length - 1; g < o; g++)
        a[g].distanceTo(a[g + 1]) >= N && x.push(a[g]);
      return x.push(a[a.length - 1]), x;
    }
  }
}
export {
  Tt as SVGLoader
};
