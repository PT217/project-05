import { L as q, F as H, p as Y, q as G, r as k, aA as W } from "./index-20e94914.mjs";
class X extends q {
  constructor(E) {
    super(E);
  }
  load(E, V, v, _) {
    const U = this, j = new H(U.manager);
    j.setPath(U.path), j.setResponseType("arraybuffer"), j.setRequestHeader(U.requestHeader), j.setWithCredentials(U.withCredentials), j.load(E, function(z) {
      try {
        V(U.parse(z));
      } catch (B) {
        _ ? _(B) : console.error(B), U.manager.itemError(E);
      }
    }, v, _);
  }
  parse(E) {
    function V(T) {
      const F = [], S = [], w = [], C = [];
      let d;
      const D = /^[^\d.\s-]+/, N = /(\-?\d+\.?[\d\-\+e]*)\s+(\-?\d+\.?[\d\-\+e]*)\s+(\-?\d+\.?[\d\-\+e]*)/g, m = /^(\d+)\s+([\s\d]*)/, x = /^POINTS /, e = /^POLYGONS /, a = /^TRIANGLE_STRIPS /, s = /^POINT_DATA[ ]+(\d+)/, n = /^CELL_DATA[ ]+(\d+)/, t = /^COLOR_SCALARS[ ]+(\w+)[ ]+3/, i = /^NORMALS[ ]+(\w+)[ ]+(\w+)/;
      let r = !1, p = !1, l = !1, o = !1, I = !1, A = !1, b = !1;
      const P = T.split(`
`);
      for (const y in P) {
        const f = P[y].trim();
        if (f.indexOf("DATASET") === 0) {
          const c = f.split(" ")[1];
          if (c !== "POLYDATA")
            throw new Error("Unsupported DATASET type: " + c);
        } else if (r)
          for (; (d = N.exec(f)) !== null && D.exec(f) === null; ) {
            const c = parseFloat(d[1]), u = parseFloat(d[2]), h = parseFloat(d[3]);
            S.push(c, u, h);
          }
        else if (p) {
          if ((d = m.exec(f)) !== null) {
            const c = parseInt(d[1]), u = d[2].split(/\s+/);
            if (c >= 3) {
              const h = parseInt(u[0]);
              let O = 1;
              for (let R = 0; R < c - 2; ++R) {
                const L = parseInt(u[O]), M = parseInt(u[O + 1]);
                F.push(h, L, M), O++;
              }
            }
          }
        } else if (l) {
          if ((d = m.exec(f)) !== null) {
            const c = parseInt(d[1]), u = d[2].split(/\s+/);
            if (c >= 3)
              for (let h = 0; h < c - 2; h++)
                if (h % 2 === 1) {
                  const O = parseInt(u[h]), R = parseInt(u[h + 2]), L = parseInt(u[h + 1]);
                  F.push(O, R, L);
                } else {
                  const O = parseInt(u[h]), R = parseInt(u[h + 1]), L = parseInt(u[h + 2]);
                  F.push(O, R, L);
                }
          }
        } else if (o || I) {
          if (A)
            for (; (d = N.exec(f)) !== null && D.exec(f) === null; ) {
              const c = parseFloat(d[1]), u = parseFloat(d[2]), h = parseFloat(d[3]);
              w.push(c, u, h);
            }
          else if (b)
            for (; (d = N.exec(f)) !== null && D.exec(f) === null; ) {
              const c = parseFloat(d[1]), u = parseFloat(d[2]), h = parseFloat(d[3]);
              C.push(c, u, h);
            }
        }
        e.exec(f) !== null ? (p = !0, r = !1, l = !1) : x.exec(f) !== null ? (p = !1, r = !0, l = !1) : a.exec(f) !== null ? (p = !1, r = !1, l = !0) : s.exec(f) !== null ? (o = !0, r = !1, p = !1, l = !1) : n.exec(f) !== null ? (I = !0, r = !1, p = !1, l = !1) : t.exec(f) !== null ? (A = !0, b = !1, r = !1, p = !1, l = !1) : i.exec(f) !== null && (b = !0, A = !1, r = !1, p = !1, l = !1);
      }
      let g = new Y();
      if (g.setIndex(F), g.setAttribute("position", new G(S, 3)), C.length === S.length && g.setAttribute("normal", new G(C, 3)), w.length !== F.length)
        w.length === S.length && g.setAttribute("color", new G(w, 3));
      else {
        g = g.toNonIndexed();
        const y = g.attributes.position.count / 3;
        if (w.length === y * 3) {
          const f = [];
          for (let c = 0; c < y; c++) {
            const u = w[3 * c + 0], h = w[3 * c + 1], O = w[3 * c + 2];
            f.push(u, h, O), f.push(u, h, O), f.push(u, h, O);
          }
          g.setAttribute("color", new G(f, 3));
        }
      }
      return g;
    }
    function v(T) {
      const F = new Uint8Array(T), S = new DataView(T);
      let w = [], C = [], d = [], D = 0;
      function N(a, s) {
        let n = s, t = a[n];
        const i = [];
        for (; t !== 10; )
          i.push(String.fromCharCode(t)), n++, t = a[n];
        return {
          start: s,
          end: n,
          next: n + 1,
          parsedString: i.join("")
        };
      }
      let m, x;
      for (; ; ) {
        if (m = N(F, D), x = m.parsedString, x.indexOf("DATASET") === 0) {
          const a = x.split(" ")[1];
          if (a !== "POLYDATA")
            throw new Error("Unsupported DATASET type: " + a);
        } else if (x.indexOf("POINTS") === 0) {
          const a = parseInt(x.split(" ")[1], 10), s = a * 4 * 3;
          w = new Float32Array(a * 3);
          let n = m.next;
          for (let t = 0; t < a; t++)
            w[3 * t] = S.getFloat32(n, !1), w[3 * t + 1] = S.getFloat32(n + 4, !1), w[3 * t + 2] = S.getFloat32(n + 8, !1), n = n + 12;
          m.next = m.next + s + 1;
        } else if (x.indexOf("TRIANGLE_STRIPS") === 0) {
          const a = parseInt(x.split(" ")[1], 10), s = parseInt(x.split(" ")[2], 10), n = s * 4;
          d = new Uint32Array(3 * s - 9 * a);
          let t = 0, i = m.next;
          for (let r = 0; r < a; r++) {
            const p = S.getInt32(i, !1), l = [];
            i += 4;
            for (let o = 0; o < p; o++)
              l.push(S.getInt32(i, !1)), i += 4;
            for (let o = 0; o < p - 2; o++)
              o % 2 ? (d[t++] = l[o], d[t++] = l[o + 2], d[t++] = l[o + 1]) : (d[t++] = l[o], d[t++] = l[o + 1], d[t++] = l[o + 2]);
          }
          m.next = m.next + n + 1;
        } else if (x.indexOf("POLYGONS") === 0) {
          const a = parseInt(x.split(" ")[1], 10), s = parseInt(x.split(" ")[2], 10), n = s * 4;
          d = new Uint32Array(3 * s - 9 * a);
          let t = 0, i = m.next;
          for (let r = 0; r < a; r++) {
            const p = S.getInt32(i, !1), l = [];
            i += 4;
            for (let o = 0; o < p; o++)
              l.push(S.getInt32(i, !1)), i += 4;
            for (let o = 1; o < p - 1; o++)
              d[t++] = l[0], d[t++] = l[o], d[t++] = l[o + 1];
          }
          m.next = m.next + n + 1;
        } else if (x.indexOf("POINT_DATA") === 0) {
          const a = parseInt(x.split(" ")[1], 10);
          m = N(F, m.next);
          const s = a * 4 * 3;
          C = new Float32Array(a * 3);
          let n = m.next;
          for (let t = 0; t < a; t++)
            C[3 * t] = S.getFloat32(n, !1), C[3 * t + 1] = S.getFloat32(n + 4, !1), C[3 * t + 2] = S.getFloat32(n + 8, !1), n += 12;
          m.next = m.next + s;
        }
        if (D = m.next, D >= F.byteLength)
          break;
      }
      const e = new Y();
      return e.setIndex(new k(d, 1)), e.setAttribute("position", new k(w, 3)), C.length === w.length && e.setAttribute("normal", new k(C, 3)), e;
    }
    function _(T, F) {
      const S = T.length, w = new Float32Array(S + F.length);
      return w.set(T), w.set(F, S), w;
    }
    function U(T, F) {
      const S = T.length, w = new Int32Array(S + F.length);
      return w.set(T), w.set(F, S), w;
    }
    function j(T) {
      function F(e) {
        let a = {};
        if (e.nodeType === 1) {
          if (e.attributes && e.attributes.length > 0) {
            a.attributes = {};
            for (let s = 0; s < e.attributes.length; s++) {
              const n = e.attributes.item(s);
              a.attributes[n.nodeName] = n.nodeValue.trim();
            }
          }
        } else
          e.nodeType === 3 && (a = e.nodeValue.trim());
        if (e.hasChildNodes())
          for (let s = 0; s < e.childNodes.length; s++) {
            const n = e.childNodes.item(s), t = n.nodeName;
            if (typeof a[t] > "u") {
              const i = F(n);
              i !== "" && (a[t] = i);
            } else {
              if (typeof a[t].push > "u") {
                const r = a[t];
                a[t] = [r];
              }
              const i = F(n);
              i !== "" && a[t].push(i);
            }
          }
        return a;
      }
      function S(e) {
        const a = typeof Uint8Array < "u" ? Uint8Array : Array, s = [], n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (let A = 0, b = n.length; A < b; ++A)
          s[n.charCodeAt(A)] = A;
        s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
        const t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        const i = e[t - 2] === "=" ? 2 : e[t - 1] === "=" ? 1 : 0, r = new a(t * 3 / 4 - i), p = i > 0 ? t - 4 : t;
        let l = 0, o, I;
        for (o = 0, I = 0; o < p; o += 4, I += 3) {
          const A = s[e.charCodeAt(o)] << 18 | s[e.charCodeAt(o + 1)] << 12 | s[e.charCodeAt(o + 2)] << 6 | s[e.charCodeAt(o + 3)];
          r[l++] = (A & 16711680) >> 16, r[l++] = (A & 65280) >> 8, r[l++] = A & 255;
        }
        if (i === 2) {
          const A = s[e.charCodeAt(o)] << 2 | s[e.charCodeAt(o + 1)] >> 4;
          r[l++] = A & 255;
        } else if (i === 1) {
          const A = s[e.charCodeAt(o)] << 10 | s[e.charCodeAt(o + 1)] << 4 | s[e.charCodeAt(o + 2)] >> 2;
          r[l++] = A >> 8 & 255, r[l++] = A & 255;
        }
        return r;
      }
      function w(e, a) {
        let s = 0;
        D.attributes.header_type === "UInt64" ? s = 8 : D.attributes.header_type === "UInt32" && (s = 4);
        let n, t;
        if (e.attributes.format === "binary" && a) {
          e.attributes.type === "Float32" ? n = new Float32Array() : (e.attributes.type === "Int32" || e.attributes.type === "Int64") && (n = new Int32Array());
          const i = e["#text"], r = Array.isArray(i) ? i[0] : i, p = S(r), l = 8;
          let o = p[0];
          for (let y = 1; y < s - 1; y++)
            o = o | p[y] << y * l;
          let I = (o + 3) * s;
          const A = I % 3 > 0 ? 3 - I % 3 : 0;
          I = I + A;
          const b = [];
          let P = I;
          b.push(P);
          const g = 3 * s;
          for (let y = 0; y < o; y++) {
            let f = p[y * s + g];
            for (let c = 1; c < s - 1; c++)
              f = f | p[y * s + g + c] << c * l;
            P = P + f, b.push(P);
          }
          for (let y = 0; y < b.length - 1; y++)
            t = W(p.slice(b[y], b[y + 1])).buffer, e.attributes.type === "Float32" ? (t = new Float32Array(t), n = _(n, t)) : (e.attributes.type === "Int32" || e.attributes.type === "Int64") && (t = new Int32Array(t), n = U(n, t));
          delete e["#text"], e.attributes.type === "Int64" && e.attributes.format === "binary" && (n = n.filter(function(y, f) {
            if (f % 2 !== 1)
              return !0;
          }));
        } else
          e.attributes.format === "binary" && !a ? (t = S(e["#text"]), t = t.slice(s).buffer) : e["#text"] ? t = e["#text"].split(/\s+/).filter(function(i) {
            if (i !== "")
              return i;
          }) : t = new Int32Array(0).buffer, delete e["#text"], e.attributes.type === "Float32" ? n = new Float32Array(t) : e.attributes.type === "Int32" ? n = new Int32Array(t) : e.attributes.type === "Int64" && (n = new Int32Array(t), e.attributes.format === "binary" && (n = n.filter(function(i, r) {
            if (r % 2 !== 1)
              return !0;
          })));
        return n;
      }
      const d = new DOMParser().parseFromString(T, "application/xml").documentElement, D = F(d);
      let N = [], m = [], x = [];
      if (D.PolyData) {
        const e = D.PolyData.Piece, a = D.attributes.hasOwnProperty("compressor"), s = ["PointData", "Points", "Strips", "Polys"];
        let n = 0;
        const t = s.length;
        for (; n < t; ) {
          const r = e[s[n]];
          if (r && r.DataArray) {
            let p;
            Array.isArray(r.DataArray) ? p = r.DataArray : p = [r.DataArray];
            let l = 0;
            const o = p.length;
            for (; l < o; )
              "#text" in p[l] && p[l]["#text"].length > 0 && (p[l].text = w(p[l], a)), l++;
            switch (s[n]) {
              case "PointData":
                {
                  const I = parseInt(e.attributes.NumberOfPoints), A = r.attributes.Normals;
                  if (I > 0) {
                    for (let b = 0, P = p.length; b < P; b++)
                      if (A === p[b].attributes.Name) {
                        const g = p[b].attributes.NumberOfComponents;
                        m = new Float32Array(I * g), m.set(p[b].text, 0);
                      }
                  }
                }
                break;
              case "Points":
                {
                  const I = parseInt(e.attributes.NumberOfPoints);
                  if (I > 0) {
                    const A = r.DataArray.attributes.NumberOfComponents;
                    N = new Float32Array(I * A), N.set(r.DataArray.text, 0);
                  }
                }
                break;
              case "Strips":
                {
                  const I = parseInt(e.attributes.NumberOfStrips);
                  if (I > 0) {
                    const A = new Int32Array(r.DataArray[0].text.length), b = new Int32Array(r.DataArray[1].text.length);
                    A.set(r.DataArray[0].text, 0), b.set(r.DataArray[1].text, 0);
                    const P = I + A.length;
                    x = new Uint32Array(3 * P - 9 * I);
                    let g = 0;
                    for (let y = 0, f = I; y < f; y++) {
                      const c = [];
                      for (let u = 0, h = b[y], O = 0; u < h - O; u++)
                        c.push(A[u]), y > 0 && (O = b[y - 1]);
                      for (let u = 0, h = b[y], O = 0; u < h - O - 2; u++)
                        u % 2 ? (x[g++] = c[u], x[g++] = c[u + 2], x[g++] = c[u + 1]) : (x[g++] = c[u], x[g++] = c[u + 1], x[g++] = c[u + 2]), y > 0 && (O = b[y - 1]);
                    }
                  }
                }
                break;
              case "Polys":
                {
                  const I = parseInt(e.attributes.NumberOfPolys);
                  if (I > 0) {
                    const A = new Int32Array(r.DataArray[0].text.length), b = new Int32Array(r.DataArray[1].text.length);
                    A.set(r.DataArray[0].text, 0), b.set(r.DataArray[1].text, 0);
                    const P = I + A.length;
                    x = new Uint32Array(3 * P - 9 * I);
                    let g = 0, y = 0, f = 0, c = 0;
                    const u = I;
                    for (; f < u; ) {
                      const h = [];
                      let O = 0;
                      const R = b[f];
                      for (; O < R - c; )
                        h.push(A[y++]), O++;
                      let L = 1;
                      for (; L < R - c - 1; )
                        x[g++] = h[0], x[g++] = h[L], x[g++] = h[L + 1], L++;
                      f++, c = b[f - 1];
                    }
                  }
                }
                break;
            }
          }
          n++;
        }
        const i = new Y();
        return i.setIndex(new k(x, 1)), i.setAttribute("position", new k(N, 3)), m.length === N.length && i.setAttribute("normal", new k(m, 3)), i;
      } else
        throw new Error("Unsupported DATASET type");
    }
    const z = new TextDecoder(), B = z.decode(new Uint8Array(E, 0, 250)).split(`
`);
    return B[0].indexOf("xml") !== -1 ? j(z.decode(E)) : B[2].includes("ASCII") ? V(z.decode(E)) : v(E);
  }
}
export {
  X as VTKLoader
};
