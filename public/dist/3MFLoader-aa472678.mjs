import { L as we, F as Se, T as Fe, u as Me, G as B, C as Te, b as De, p as q, q as j, j as P, n as I, r as $, M as je, s as Ne, R as L, a as W, t as X, e as E, v as K, N as V } from "./index-20e94914.mjs";
class qe extends we {
  constructor(w) {
    super(w), this.availableExtensions = [];
  }
  load(w, N, C, T) {
    const v = this, S = new Se(v.manager);
    S.setPath(v.path), S.setResponseType("arraybuffer"), S.setRequestHeader(v.requestHeader), S.setWithCredentials(v.withCredentials), S.load(w, function(O) {
      try {
        N(v.parse(O));
      } catch (R) {
        T ? T(R) : console.error(R), v.manager.itemError(w);
      }
    }, C, T);
  }
  parse(w) {
    const N = this, C = new Fe(this.manager);
    function T(t) {
      let e = null, r = null, o, i;
      const n = [], l = [];
      let a;
      const s = {}, c = {}, u = {}, p = new TextDecoder();
      try {
        e = Me(new Uint8Array(t));
      } catch (m) {
        if (m instanceof ReferenceError)
          return console.error("THREE.3MFLoader: fflate missing and file is compressed."), null;
      }
      for (r in e)
        r.match(/\_rels\/.rels$/) ? o = r : r.match(/3D\/_rels\/.*\.model\.rels$/) ? i = r : r.match(/^3D\/.*\.model$/) ? n.push(r) : r.match(/^3D\/Textures?\/.*/) && l.push(r);
      const x = e[o], h = p.decode(x), b = v(h);
      if (i) {
        const m = e[i], d = p.decode(m);
        a = v(d);
      }
      for (let m = 0; m < n.length; m++) {
        const d = n[m], f = e[d], g = p.decode(f), y = new DOMParser().parseFromString(g, "application/xml");
        y.documentElement.nodeName.toLowerCase() !== "model" && console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ", d);
        const M = y.querySelector("model"), F = {};
        for (let A = 0; A < M.attributes.length; A++) {
          const H = M.attributes[A];
          H.name.match(/^xmlns:(.+)$/) && (F[H.value] = RegExp.$1);
        }
        const D = oe(M);
        D.xml = M, 0 < Object.keys(F).length && (D.extensions = F), s[d] = D;
      }
      for (let m = 0; m < l.length; m++) {
        const d = l[m];
        u[d] = e[d].buffer;
      }
      return {
        rels: b,
        modelRels: a,
        model: s,
        printTicket: c,
        texture: u
      };
    }
    function v(t) {
      const e = [], o = new DOMParser().parseFromString(t, "application/xml").querySelectorAll("Relationship");
      for (let i = 0; i < o.length; i++) {
        const n = o[i], l = {
          target: n.getAttribute("Target"),
          //required
          id: n.getAttribute("Id"),
          //required
          type: n.getAttribute("Type")
          //required
        };
        e.push(l);
      }
      return e;
    }
    function S(t) {
      const e = {};
      for (let r = 0; r < t.length; r++) {
        const o = t[r], i = o.getAttribute("name");
        0 <= [
          "Title",
          "Designer",
          "Description",
          "Copyright",
          "LicenseTerms",
          "Rating",
          "CreationDate",
          "ModificationDate"
        ].indexOf(i) && (e[i] = o.textContent);
      }
      return e;
    }
    function O(t) {
      const e = {
        id: t.getAttribute("id"),
        // required
        basematerials: []
      }, r = t.querySelectorAll("base");
      for (let o = 0; o < r.length; o++) {
        const i = r[o], n = Y(i);
        n.index = o, e.basematerials.push(n);
      }
      return e;
    }
    function R(t) {
      return {
        id: t.getAttribute("id"),
        // required
        path: t.getAttribute("path"),
        // required
        contenttype: t.getAttribute("contenttype"),
        // required
        tilestyleu: t.getAttribute("tilestyleu"),
        tilestylev: t.getAttribute("tilestylev"),
        filter: t.getAttribute("filter")
      };
    }
    function _(t) {
      const e = {
        id: t.getAttribute("id"),
        // required
        texid: t.getAttribute("texid"),
        // required
        displaypropertiesid: t.getAttribute("displaypropertiesid")
      }, r = t.querySelectorAll("tex2coord"), o = [];
      for (let i = 0; i < r.length; i++) {
        const n = r[i], l = n.getAttribute("u"), a = n.getAttribute("v");
        o.push(parseFloat(l), parseFloat(a));
      }
      return e.uvs = new Float32Array(o), e;
    }
    function J(t) {
      const e = {
        id: t.getAttribute("id"),
        // required
        displaypropertiesid: t.getAttribute("displaypropertiesid")
      }, r = t.querySelectorAll("color"), o = [], i = new Te();
      for (let n = 0; n < r.length; n++) {
        const a = r[n].getAttribute("color");
        i.setStyle(a.substring(0, 7)), i.convertSRGBToLinear(), o.push(i.r, i.g, i.b);
      }
      return e.colors = new Float32Array(o), e;
    }
    function Q(t) {
      const e = {
        id: t.getAttribute("id")
        // required
      }, r = t.querySelectorAll("pbmetallic"), o = [];
      for (let i = 0; i < r.length; i++) {
        const n = r[i];
        o.push({
          name: n.getAttribute("name"),
          // required
          metallicness: parseFloat(n.getAttribute("metallicness")),
          // required
          roughness: parseFloat(n.getAttribute("roughness"))
          // required
        });
      }
      return e.data = o, e;
    }
    function Y(t) {
      const e = {};
      return e.name = t.getAttribute("name"), e.displaycolor = t.getAttribute("displaycolor"), e.displaypropertiesid = t.getAttribute("displaypropertiesid"), e;
    }
    function Z(t) {
      const e = {}, r = [], o = t.querySelectorAll("vertices vertex");
      for (let a = 0; a < o.length; a++) {
        const s = o[a], c = s.getAttribute("x"), u = s.getAttribute("y"), p = s.getAttribute("z");
        r.push(parseFloat(c), parseFloat(u), parseFloat(p));
      }
      e.vertices = new Float32Array(r);
      const i = [], n = [], l = t.querySelectorAll("triangles triangle");
      for (let a = 0; a < l.length; a++) {
        const s = l[a], c = s.getAttribute("v1"), u = s.getAttribute("v2"), p = s.getAttribute("v3"), x = s.getAttribute("p1"), h = s.getAttribute("p2"), b = s.getAttribute("p3"), m = s.getAttribute("pid"), d = {};
        d.v1 = parseInt(c, 10), d.v2 = parseInt(u, 10), d.v3 = parseInt(p, 10), n.push(d.v1, d.v2, d.v3), x && (d.p1 = parseInt(x, 10)), h && (d.p2 = parseInt(h, 10)), b && (d.p3 = parseInt(b, 10)), m && (d.pid = m), 0 < Object.keys(d).length && i.push(d);
      }
      return e.triangleProperties = i, e.triangles = new Uint32Array(n), e;
    }
    function ee(t) {
      const e = [], r = t.querySelectorAll("component");
      for (let o = 0; o < r.length; o++) {
        const i = r[o], n = te(i);
        e.push(n);
      }
      return e;
    }
    function te(t) {
      const e = {};
      e.objectId = t.getAttribute("objectid");
      const r = t.getAttribute("transform");
      return r && (e.transform = G(r)), e;
    }
    function G(t) {
      const e = [];
      t.split(" ").forEach(function(o) {
        e.push(parseFloat(o));
      });
      const r = new De();
      return r.set(
        e[0],
        e[3],
        e[6],
        e[9],
        e[1],
        e[4],
        e[7],
        e[10],
        e[2],
        e[5],
        e[8],
        e[11],
        0,
        0,
        0,
        1
      ), r;
    }
    function se(t) {
      const e = {
        type: t.getAttribute("type")
      }, r = t.getAttribute("id");
      r && (e.id = r);
      const o = t.getAttribute("pid");
      o && (e.pid = o);
      const i = t.getAttribute("pindex");
      i && (e.pindex = i);
      const n = t.getAttribute("thumbnail");
      n && (e.thumbnail = n);
      const l = t.getAttribute("partnumber");
      l && (e.partnumber = l);
      const a = t.getAttribute("name");
      a && (e.name = a);
      const s = t.querySelector("mesh");
      s && (e.mesh = Z(s));
      const c = t.querySelector("components");
      return c && (e.components = ee(c)), e;
    }
    function re(t) {
      const e = {};
      e.basematerials = {};
      const r = t.querySelectorAll("basematerials");
      for (let s = 0; s < r.length; s++) {
        const c = r[s], u = O(c);
        e.basematerials[u.id] = u;
      }
      e.texture2d = {};
      const o = t.querySelectorAll("texture2d");
      for (let s = 0; s < o.length; s++) {
        const c = o[s], u = R(c);
        e.texture2d[u.id] = u;
      }
      e.colorgroup = {};
      const i = t.querySelectorAll("colorgroup");
      for (let s = 0; s < i.length; s++) {
        const c = i[s], u = J(c);
        e.colorgroup[u.id] = u;
      }
      e.pbmetallicdisplayproperties = {};
      const n = t.querySelectorAll("pbmetallicdisplayproperties");
      for (let s = 0; s < n.length; s++) {
        const c = n[s], u = Q(c);
        e.pbmetallicdisplayproperties[u.id] = u;
      }
      e.texture2dgroup = {};
      const l = t.querySelectorAll("texture2dgroup");
      for (let s = 0; s < l.length; s++) {
        const c = l[s], u = _(c);
        e.texture2dgroup[u.id] = u;
      }
      e.object = {};
      const a = t.querySelectorAll("object");
      for (let s = 0; s < a.length; s++) {
        const c = a[s], u = se(c);
        e.object[u.id] = u;
      }
      return e;
    }
    function ne(t) {
      const e = [], r = t.querySelectorAll("item");
      for (let o = 0; o < r.length; o++) {
        const i = r[o], n = {
          objectId: i.getAttribute("objectid")
        }, l = i.getAttribute("transform");
        l && (n.transform = G(l)), e.push(n);
      }
      return e;
    }
    function oe(t) {
      const e = { unit: t.getAttribute("unit") || "millimeter" }, r = t.querySelectorAll("metadata");
      r && (e.metadata = S(r));
      const o = t.querySelector("resources");
      o && (e.resources = re(o));
      const i = t.querySelector("build");
      return i && (e.build = ne(i)), e;
    }
    function ie(t, e, r, o) {
      const i = t.texid, l = r.resources.texture2d[i];
      if (l) {
        const a = o[l.path], s = l.contenttype, c = new Blob([a], { type: s }), u = URL.createObjectURL(c), p = C.load(u, function() {
          URL.revokeObjectURL(u);
        });
        switch (p.encoding = Ne, l.tilestyleu) {
          case "wrap":
            p.wrapS = L;
            break;
          case "mirror":
            p.wrapS = X;
            break;
          case "none":
          case "clamp":
            p.wrapS = W;
            break;
          default:
            p.wrapS = L;
        }
        switch (l.tilestylev) {
          case "wrap":
            p.wrapT = L;
            break;
          case "mirror":
            p.wrapT = X;
            break;
          case "none":
          case "clamp":
            p.wrapT = W;
            break;
          default:
            p.wrapT = L;
        }
        switch (l.filter) {
          case "auto":
            p.magFilter = E, p.minFilter = K;
            break;
          case "linear":
            p.magFilter = E, p.minFilter = E;
            break;
          case "nearest":
            p.magFilter = V, p.minFilter = V;
            break;
          default:
            p.magFilter = E, p.minFilter = K;
        }
        return p;
      } else
        return null;
    }
    function le(t, e, r, o, i, n, l) {
      const a = l.pindex, s = {};
      for (let p = 0, x = e.length; p < x; p++) {
        const h = e[p], b = h.p1 !== void 0 ? h.p1 : a;
        s[b] === void 0 && (s[b] = []), s[b].push(h);
      }
      const c = Object.keys(s), u = [];
      for (let p = 0, x = c.length; p < x; p++) {
        const h = c[p], b = s[h], m = t.basematerials[h], d = k(m, o, i, n, l, be), f = new q(), g = [], y = r.vertices;
        for (let F = 0, D = b.length; F < D; F++) {
          const A = b[F];
          g.push(y[A.v1 * 3 + 0]), g.push(y[A.v1 * 3 + 1]), g.push(y[A.v1 * 3 + 2]), g.push(y[A.v2 * 3 + 0]), g.push(y[A.v2 * 3 + 1]), g.push(y[A.v2 * 3 + 2]), g.push(y[A.v3 * 3 + 0]), g.push(y[A.v3 * 3 + 1]), g.push(y[A.v3 * 3 + 2]);
        }
        f.setAttribute("position", new j(g, 3));
        const M = new P(f, d);
        u.push(M);
      }
      return u;
    }
    function ae(t, e, r, o, i, n, l) {
      const a = new q(), s = [], c = [], u = r.vertices, p = t.uvs;
      for (let m = 0, d = e.length; m < d; m++) {
        const f = e[m];
        s.push(u[f.v1 * 3 + 0]), s.push(u[f.v1 * 3 + 1]), s.push(u[f.v1 * 3 + 2]), s.push(u[f.v2 * 3 + 0]), s.push(u[f.v2 * 3 + 1]), s.push(u[f.v2 * 3 + 2]), s.push(u[f.v3 * 3 + 0]), s.push(u[f.v3 * 3 + 1]), s.push(u[f.v3 * 3 + 2]), c.push(p[f.p1 * 2 + 0]), c.push(p[f.p1 * 2 + 1]), c.push(p[f.p2 * 2 + 0]), c.push(p[f.p2 * 2 + 1]), c.push(p[f.p3 * 2 + 0]), c.push(p[f.p3 * 2 + 1]);
      }
      a.setAttribute("position", new j(s, 3)), a.setAttribute("uv", new j(c, 2));
      const x = k(t, o, i, n, l, ie), h = new I({ map: x, flatShading: !0 });
      return new P(a, h);
    }
    function ce(t, e, r, o) {
      const i = new q(), n = [], l = [], a = r.vertices, s = t.colors;
      for (let p = 0, x = e.length; p < x; p++) {
        const h = e[p], b = h.v1, m = h.v2, d = h.v3;
        n.push(a[b * 3 + 0]), n.push(a[b * 3 + 1]), n.push(a[b * 3 + 2]), n.push(a[m * 3 + 0]), n.push(a[m * 3 + 1]), n.push(a[m * 3 + 2]), n.push(a[d * 3 + 0]), n.push(a[d * 3 + 1]), n.push(a[d * 3 + 2]);
        const f = h.p1 !== void 0 ? h.p1 : o.pindex, g = h.p2 !== void 0 ? h.p2 : f, y = h.p3 !== void 0 ? h.p3 : f;
        l.push(s[f * 3 + 0]), l.push(s[f * 3 + 1]), l.push(s[f * 3 + 2]), l.push(s[g * 3 + 0]), l.push(s[g * 3 + 1]), l.push(s[g * 3 + 2]), l.push(s[y * 3 + 0]), l.push(s[y * 3 + 1]), l.push(s[y * 3 + 2]);
      }
      i.setAttribute("position", new j(n, 3)), i.setAttribute("color", new j(l, 3));
      const c = new I({ vertexColors: !0, flatShading: !0 });
      return new P(i, c);
    }
    function ue(t) {
      const e = new q();
      e.setIndex(new $(t.triangles, 1)), e.setAttribute("position", new $(t.vertices, 3));
      const r = new I({ color: 16777215, flatShading: !0 });
      return new P(e, r);
    }
    function pe(t, e, r, o, i, n) {
      const l = Object.keys(t), a = [];
      for (let s = 0, c = l.length; s < c; s++) {
        const u = l[s], p = t[u];
        switch (de(u, o)) {
          case "material":
            const h = o.resources.basematerials[u], b = le(h, p, e, r, o, i, n);
            for (let f = 0, g = b.length; f < g; f++)
              a.push(b[f]);
            break;
          case "texture":
            const m = o.resources.texture2dgroup[u];
            a.push(ae(m, p, e, r, o, i, n));
            break;
          case "vertexColors":
            const d = o.resources.colorgroup[u];
            a.push(ce(d, p, e, n));
            break;
          case "default":
            a.push(ue(e));
            break;
          default:
            console.error("THREE.3MFLoader: Unsupported resource type.");
        }
      }
      if (n.name)
        for (let s = 0; s < a.length; s++)
          a[s].name = n.name;
      return a;
    }
    function de(t, e) {
      return e.resources.texture2dgroup[t] !== void 0 ? "texture" : e.resources.basematerials[t] !== void 0 ? "material" : e.resources.colorgroup[t] !== void 0 ? "vertexColors" : t === "default" ? "default" : void 0;
    }
    function fe(t, e) {
      const r = {}, o = t.triangleProperties, i = e.pid;
      for (let n = 0, l = o.length; n < l; n++) {
        const a = o[n];
        let s = a.pid !== void 0 ? a.pid : i;
        s === void 0 && (s = "default"), r[s] === void 0 && (r[s] = []), r[s].push(a);
      }
      return r;
    }
    function me(t, e, r, o, i) {
      const n = new B(), l = fe(t, i), a = pe(l, t, e, r, o, i);
      for (let s = 0, c = a.length; s < c; s++)
        n.add(a[s]);
      return n;
    }
    function he(t, e, r) {
      if (!t)
        return;
      const o = [], i = Object.keys(t);
      for (let n = 0; n < i.length; n++) {
        const l = i[n];
        for (let a = 0; a < N.availableExtensions.length; a++) {
          const s = N.availableExtensions[a];
          s.ns === l && o.push(s);
        }
      }
      for (let n = 0; n < o.length; n++) {
        const l = o[n];
        l.apply(r, t[l.ns], e);
      }
    }
    function k(t, e, r, o, i, n) {
      return t.build !== void 0 || (t.build = n(t, e, r, o, i)), t.build;
    }
    function be(t, e, r) {
      let o;
      const i = t.displaypropertiesid, n = r.resources.pbmetallicdisplayproperties;
      if (i !== null && n[i] !== void 0) {
        const c = n[i].data[t.index];
        o = new je({ flatShading: !0, roughness: c.roughness, metalness: c.metallicness });
      } else
        o = new I({ flatShading: !0 });
      o.name = t.name;
      const l = t.displaycolor, a = l.substring(0, 7);
      return o.color.setStyle(a), o.color.convertSRGBToLinear(), l.length === 9 && (o.opacity = parseInt(l.charAt(7) + l.charAt(8), 16) / 255), o;
    }
    function ge(t, e, r, o) {
      const i = new B();
      for (let n = 0; n < t.length; n++) {
        const l = t[n];
        let a = e[l.objectId];
        a === void 0 && (U(l.objectId, e, r, o), a = e[l.objectId]);
        const s = a.clone(), c = l.transform;
        c && s.applyMatrix4(c), i.add(s);
      }
      return i;
    }
    function U(t, e, r, o) {
      const i = r.resources.object[t];
      if (i.mesh) {
        const n = i.mesh, l = r.extensions, a = r.xml;
        he(l, n, a), e[i.id] = k(n, e, r, o, i, me);
      } else {
        const n = i.components;
        e[i.id] = k(n, e, r, o, i, ge);
      }
      i.name && (e[i.id].name = i.name);
    }
    function ye(t) {
      const e = t.model, r = t.modelRels, o = {}, i = Object.keys(e), n = {};
      if (r)
        for (let l = 0, a = r.length; l < a; l++) {
          const s = r[l], c = s.target.substring(1);
          t.texture[c] && (n[s.target] = t.texture[c]);
        }
      for (let l = 0; l < i.length; l++) {
        const a = i[l], s = e[a], c = Object.keys(s.resources.object);
        for (let u = 0; u < c.length; u++) {
          const p = c[u];
          U(p, o, s, n);
        }
      }
      return o;
    }
    function xe(t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        if (r.target.split(".").pop().toLowerCase() === "model")
          return r;
      }
    }
    function Ae(t, e) {
      const r = new B(), o = xe(e.rels), i = e.model[o.target.substring(1)].build;
      for (let n = 0; n < i.length; n++) {
        const l = i[n], a = t[l.objectId].clone(), s = l.transform;
        s && a.applyMatrix4(s), r.add(a);
      }
      return r;
    }
    const z = T(w), ve = ye(z);
    return Ae(ve, z);
  }
  addExtension(w) {
    this.availableExtensions.push(w);
  }
}
export {
  qe as ThreeMFLoader
};
