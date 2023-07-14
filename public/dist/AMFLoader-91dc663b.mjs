import { L as R, F as V, G as S, n as B, q as D, C as O, p as H, j as z, u as I } from "./index-20e94914.mjs";
class P extends R {
  constructor(u) {
    super(u);
  }
  load(u, x, p, f) {
    const s = this, d = new V(s.manager);
    d.setPath(s.path), d.setResponseType("arraybuffer"), d.setRequestHeader(s.requestHeader), d.setWithCredentials(s.withCredentials), d.load(u, function(C) {
      try {
        x(s.parse(C));
      } catch (b) {
        f ? f(b) : console.error(b), s.manager.itemError(u);
      }
    }, p, f);
  }
  parse(u) {
    function x(a) {
      let t = new DataView(a);
      if (String.fromCharCode(t.getUint8(0), t.getUint8(1)) === "PK") {
        let l = null, i = null;
        console.log("THREE.AMFLoader: Loading Zip");
        try {
          l = I(new Uint8Array(a));
        } catch (r) {
          if (r instanceof ReferenceError)
            return console.log("THREE.AMFLoader: fflate missing and file is compressed."), null;
        }
        for (i in l)
          if (i.toLowerCase().slice(-4) === ".amf")
            break;
        console.log("THREE.AMFLoader: Trying to load file asset: " + i), t = new DataView(l[i].buffer);
      }
      const n = new TextDecoder().decode(t), e = new DOMParser().parseFromString(n, "application/xml");
      return e.documentElement.nodeName.toLowerCase() !== "amf" ? (console.log("THREE.AMFLoader: Error loading AMF - no AMF document found."), null) : e;
    }
    function p(a) {
      let t = 1, o = "millimeter";
      a.documentElement.attributes.unit !== void 0 && (o = a.documentElement.attributes.unit.value.toLowerCase());
      const n = {
        millimeter: 1,
        inch: 25.4,
        feet: 304.8,
        meter: 1e3,
        micron: 1e-3
      };
      return n[o] !== void 0 && (t = n[o]), console.log("THREE.AMFLoader: Unit scale: " + t), t;
    }
    function f(a) {
      let t = "AMF Material";
      const o = a.attributes.id.textContent;
      let n = { r: 1, g: 1, b: 1, a: 1 }, e = null;
      for (let l = 0; l < a.childNodes.length; l++) {
        const i = a.childNodes[l];
        i.nodeName === "metadata" && i.attributes.type !== void 0 ? i.attributes.type.value === "name" && (t = i.textContent) : i.nodeName === "color" && (n = s(i));
      }
      return e = new B({
        flatShading: !0,
        color: new O(n.r, n.g, n.b),
        name: t
      }), n.a !== 1 && (e.transparent = !0, e.opacity = n.a), { id: o, material: e };
    }
    function s(a) {
      const t = { r: 1, g: 1, b: 1, a: 1 };
      for (let o = 0; o < a.childNodes.length; o++) {
        const n = a.childNodes[o];
        n.nodeName === "r" ? t.r = n.textContent : n.nodeName === "g" ? t.g = n.textContent : n.nodeName === "b" ? t.b = n.textContent : n.nodeName === "a" && (t.a = n.textContent);
      }
      return t;
    }
    function d(a) {
      const t = { name: "", triangles: [], materialid: null };
      let o = a.firstElementChild;
      for (a.attributes.materialid !== void 0 && (t.materialId = a.attributes.materialid.nodeValue); o; ) {
        if (o.nodeName === "metadata")
          o.attributes.type !== void 0 && o.attributes.type.value === "name" && (t.name = o.textContent);
        else if (o.nodeName === "triangle") {
          const n = o.getElementsByTagName("v1")[0].textContent, e = o.getElementsByTagName("v2")[0].textContent, l = o.getElementsByTagName("v3")[0].textContent;
          t.triangles.push(n, e, l);
        }
        o = o.nextElementSibling;
      }
      return t;
    }
    function C(a) {
      const t = [], o = [];
      let n = a.firstElementChild;
      for (; n; ) {
        if (n.nodeName === "vertex") {
          let e = n.firstElementChild;
          for (; e; ) {
            if (e.nodeName === "coordinates") {
              const l = e.getElementsByTagName("x")[0].textContent, i = e.getElementsByTagName("y")[0].textContent, r = e.getElementsByTagName("z")[0].textContent;
              t.push(l, i, r);
            } else if (e.nodeName === "normal") {
              const l = e.getElementsByTagName("nx")[0].textContent, i = e.getElementsByTagName("ny")[0].textContent, r = e.getElementsByTagName("nz")[0].textContent;
              o.push(l, i, r);
            }
            e = e.nextElementSibling;
          }
        }
        n = n.nextElementSibling;
      }
      return { vertices: t, normals: o };
    }
    function b(a) {
      const t = a.attributes.id.textContent, o = { name: "amfobject", meshes: [] };
      let n = null, e = a.firstElementChild;
      for (; e; ) {
        if (e.nodeName === "metadata")
          e.attributes.type !== void 0 && e.attributes.type.value === "name" && (o.name = e.textContent);
        else if (e.nodeName === "color")
          n = s(e);
        else if (e.nodeName === "mesh") {
          let l = e.firstElementChild;
          const i = { vertices: [], normals: [], volumes: [], color: n };
          for (; l; ) {
            if (l.nodeName === "vertices") {
              const r = C(l);
              i.normals = i.normals.concat(r.normals), i.vertices = i.vertices.concat(r.vertices);
            } else
              l.nodeName === "volume" && i.volumes.push(d(l));
            l = l.nextElementSibling;
          }
          o.meshes.push(i);
        }
        e = e.nextElementSibling;
      }
      return { id: t, obj: o };
    }
    const w = x(u);
    let M = "", T = "";
    const y = p(w), E = {}, v = {}, A = w.documentElement.childNodes;
    let c, N;
    for (c = 0; c < A.length; c++) {
      const a = A[c];
      if (a.nodeName === "metadata")
        a.attributes.type !== void 0 && (a.attributes.type.value === "name" ? M = a.textContent : a.attributes.type.value === "author" && (T = a.textContent));
      else if (a.nodeName === "material") {
        const t = f(a);
        E[t.id] = t.material;
      } else if (a.nodeName === "object") {
        const t = b(a);
        v[t.id] = t.obj;
      }
    }
    const g = new S(), j = new B({ color: 11184895, flatShading: !0 });
    g.name = M, g.userData.author = T, g.userData.loader = "AMF";
    for (const a in v) {
      const t = v[a], o = t.meshes, n = new S();
      for (n.name = t.name || "", c = 0; c < o.length; c++) {
        let e = j;
        const l = o[c], i = new D(l.vertices, 3);
        let r = null;
        if (l.normals.length && (r = new D(l.normals, 3)), l.color) {
          const m = l.color;
          e = j.clone(), e.color = new O(m.r, m.g, m.b), m.a !== 1 && (e.transparent = !0, e.opacity = m.a);
        }
        const F = l.volumes;
        for (N = 0; N < F.length; N++) {
          const m = F[N], h = new H();
          let L = e;
          h.setIndex(m.triangles), h.setAttribute("position", i.clone()), r && h.setAttribute("normal", r.clone()), E[m.materialId] !== void 0 && (L = E[m.materialId]), h.scale(y, y, y), n.add(new z(h, L.clone()));
        }
      }
      g.add(n);
    }
    return g;
  }
}
export {
  P as AMFLoader
};
