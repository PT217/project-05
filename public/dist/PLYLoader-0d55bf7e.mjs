import { C as w, L as C, F as S, p as j, q as g } from "./index-20e94914.mjs";
const T = new w();
class L extends C {
  constructor(p) {
    super(p), this.propertyNameMapping = {}, this.customPropertyMapping = {};
  }
  load(p, P, y, x) {
    const v = this, m = new S(this.manager);
    m.setPath(this.path), m.setResponseType("arraybuffer"), m.setRequestHeader(this.requestHeader), m.setWithCredentials(this.withCredentials), m.load(p, function(R) {
      try {
        P(v.parse(R));
      } catch (z) {
        x ? x(z) : console.error(z), v.manager.itemError(p);
      }
    }, y, x);
  }
  setPropertyNameMapping(p) {
    this.propertyNameMapping = p;
  }
  setCustomPropertyNameMapping(p) {
    this.customPropertyMapping = p;
  }
  parse(p) {
    function P(e) {
      const o = /^ply([\s\S]*)end_header(\r\n|\r|\n)/;
      let t = "", n = 0;
      const r = o.exec(e);
      r !== null && (t = r[1], n = new Blob([r[0]]).size);
      const s = {
        comments: [],
        elements: [],
        headerLength: n,
        objInfo: ""
      }, a = t.split(/\r\n|\r|\n/);
      let i;
      function f(l, u) {
        const c = { type: l[0] };
        return c.type === "list" ? (c.name = l[3], c.countType = l[1], c.itemType = l[2]) : c.name = l[1], c.name in u && (c.name = u[c.name]), c;
      }
      for (let l = 0; l < a.length; l++) {
        let u = a[l];
        if (u = u.trim(), u === "")
          continue;
        const c = u.split(/\s+/), d = c.shift();
        switch (u = c.join(" "), d) {
          case "format":
            s.format = c[0], s.version = c[1];
            break;
          case "comment":
            s.comments.push(u);
            break;
          case "element":
            i !== void 0 && s.elements.push(i), i = {}, i.name = c[0], i.count = parseInt(c[1]), i.properties = [];
            break;
          case "property":
            i.properties.push(f(c, h.propertyNameMapping));
            break;
          case "obj_info":
            s.objInfo = u;
            break;
          default:
            console.log("unhandled", d, c);
        }
      }
      return i !== void 0 && s.elements.push(i), s;
    }
    function y(e, o) {
      switch (o) {
        case "char":
        case "uchar":
        case "short":
        case "ushort":
        case "int":
        case "uint":
        case "int8":
        case "uint8":
        case "int16":
        case "uint16":
        case "int32":
        case "uint32":
          return parseInt(e);
        case "float":
        case "double":
        case "float32":
        case "float64":
          return parseFloat(e);
      }
    }
    function x(e, o) {
      const t = o.split(/\s+/), n = {};
      for (let r = 0; r < e.length; r++)
        if (e[r].type === "list") {
          const s = [], a = y(t.shift(), e[r].countType);
          for (let i = 0; i < a; i++)
            s.push(y(t.shift(), e[r].itemType));
          n[e[r].name] = s;
        } else
          n[e[r].name] = y(t.shift(), e[r].type);
      return n;
    }
    function v() {
      const e = {
        indices: [],
        vertices: [],
        normals: [],
        uvs: [],
        faceVertexUvs: [],
        colors: []
      };
      for (const o of Object.keys(h.customPropertyMapping))
        e[o] = [];
      return e;
    }
    function m(e) {
      const o = e.map((n) => n.name);
      function t(n) {
        for (let r = 0, s = n.length; r < s; r++) {
          const a = n[r];
          if (o.includes(a))
            return a;
        }
        return null;
      }
      return {
        attrX: t(["x", "px", "posx"]) || "x",
        attrY: t(["y", "py", "posy"]) || "y",
        attrZ: t(["z", "pz", "posz"]) || "z",
        attrNX: t(["nx", "normalx"]),
        attrNY: t(["ny", "normaly"]),
        attrNZ: t(["nz", "normalz"]),
        attrS: t(["s", "u", "texture_u", "tx"]),
        attrT: t(["t", "v", "texture_v", "ty"]),
        attrR: t(["red", "diffuse_red", "r", "diffuse_r"]),
        attrG: t(["green", "diffuse_green", "g", "diffuse_g"]),
        attrB: t(["blue", "diffuse_blue", "b", "diffuse_b"])
      };
    }
    function R(e, o) {
      const t = v();
      let n;
      const r = /end_header\s([\s\S]*)$/;
      let s = "";
      (n = r.exec(e)) !== null && (s = n[1]);
      const a = s.split(/\r\n|\r|\n/);
      let i = 0, f = 0, l = o.elements[i], u = m(l.properties);
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d = d.trim(), d === "")
          continue;
        f >= l.count && (i++, f = 0, l = o.elements[i], u = m(l.properties));
        const M = x(l.properties, d);
        B(t, l.name, M, u), f++;
      }
      return z(t);
    }
    function z(e) {
      let o = new j();
      e.indices.length > 0 && o.setIndex(e.indices), o.setAttribute("position", new g(e.vertices, 3)), e.normals.length > 0 && o.setAttribute("normal", new g(e.normals, 3)), e.uvs.length > 0 && o.setAttribute("uv", new g(e.uvs, 2)), e.colors.length > 0 && o.setAttribute("color", new g(e.colors, 3)), e.faceVertexUvs.length > 0 && (o = o.toNonIndexed(), o.setAttribute("uv", new g(e.faceVertexUvs, 2)));
      for (const t of Object.keys(h.customPropertyMapping))
        e[t].length > 0 && o.setAttribute(
          t,
          new g(
            e[t],
            h.customPropertyMapping[t].length
          )
        );
      return o.computeBoundingSphere(), o;
    }
    function B(e, o, t, n) {
      if (o === "vertex") {
        e.vertices.push(t[n.attrX], t[n.attrY], t[n.attrZ]), n.attrNX !== null && n.attrNY !== null && n.attrNZ !== null && e.normals.push(t[n.attrNX], t[n.attrNY], t[n.attrNZ]), n.attrS !== null && n.attrT !== null && e.uvs.push(t[n.attrS], t[n.attrT]), n.attrR !== null && n.attrG !== null && n.attrB !== null && (T.setRGB(
          t[n.attrR] / 255,
          t[n.attrG] / 255,
          t[n.attrB] / 255
        ).convertSRGBToLinear(), e.colors.push(T.r, T.g, T.b));
        for (const r of Object.keys(h.customPropertyMapping))
          for (const s of h.customPropertyMapping[r])
            e[r].push(t[s]);
      } else if (o === "face") {
        const r = t.vertex_indices || t.vertex_index, s = t.texcoord;
        r.length === 3 ? (e.indices.push(r[0], r[1], r[2]), s && s.length === 6 && (e.faceVertexUvs.push(s[0], s[1]), e.faceVertexUvs.push(s[2], s[3]), e.faceVertexUvs.push(s[4], s[5]))) : r.length === 4 && (e.indices.push(r[0], r[1], r[3]), e.indices.push(r[1], r[2], r[3]));
      }
    }
    function I(e, o) {
      const t = {};
      let n = 0;
      for (let r = 0; r < o.length; r++) {
        const s = o[r], a = s.valueReader;
        if (s.type === "list") {
          const i = [], f = s.countReader.read(e + n);
          n += s.countReader.size;
          for (let l = 0; l < f; l++)
            i.push(a.read(e + n)), n += a.size;
          t[s.name] = i;
        } else
          t[s.name] = a.read(e + n), n += a.size;
      }
      return [t, n];
    }
    function _(e, o, t) {
      function n(r, s, a) {
        switch (s) {
          case "int8":
          case "char":
            return { read: (i) => r.getInt8(i), size: 1 };
          case "uint8":
          case "uchar":
            return { read: (i) => r.getUint8(i), size: 1 };
          case "int16":
          case "short":
            return { read: (i) => r.getInt16(i, a), size: 2 };
          case "uint16":
          case "ushort":
            return { read: (i) => r.getUint16(i, a), size: 2 };
          case "int32":
          case "int":
            return { read: (i) => r.getInt32(i, a), size: 4 };
          case "uint32":
          case "uint":
            return { read: (i) => r.getUint32(i, a), size: 4 };
          case "float32":
          case "float":
            return { read: (i) => r.getFloat32(i, a), size: 4 };
          case "float64":
          case "double":
            return { read: (i) => r.getFloat64(i, a), size: 8 };
        }
      }
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        a.type === "list" ? (a.countReader = n(o, a.countType, t), a.valueReader = n(o, a.itemType, t)) : a.valueReader = n(o, a.type, t);
      }
    }
    function b(e, o) {
      const t = v(), n = o.format === "binary_little_endian", r = new DataView(e, o.headerLength);
      let s, a = 0;
      for (let i = 0; i < o.elements.length; i++) {
        const f = o.elements[i], l = f.properties, u = m(l);
        _(l, r, n);
        for (let c = 0; c < f.count; c++) {
          s = I(a, l), a += s[1];
          const d = s[0];
          B(t, f.name, d, u);
        }
      }
      return z(t);
    }
    function A(e) {
      let o = 0, t = !0, n = "";
      const r = [];
      do {
        const s = String.fromCharCode(e[o++]);
        s !== `
` && s !== "\r" ? n += s : (n === "end_header" && (t = !1), n !== "" && (r.push(n), n = ""));
      } while (t && o < e.length);
      return r.join("\r") + "\r";
    }
    let N;
    const h = this;
    if (p instanceof ArrayBuffer) {
      const e = new Uint8Array(p), o = A(e), t = P(o);
      if (t.format === "ascii") {
        const n = new TextDecoder().decode(e);
        N = R(n, t);
      } else
        N = b(p, t);
    } else
      N = R(p, P(p));
    return N;
  }
}
export {
  L as PLYLoader
};
