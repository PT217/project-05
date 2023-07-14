import { L as g, m as k, F as w, a9 as b, R as L, C as m, n as M, aH as x, T as v, s as y, V as u } from "./index-20e94914.mjs";
class C extends g {
  constructor(e) {
    super(e);
  }
  /**
   * Loads and parses a MTL asset from a URL.
   *
   * @param {String} url - URL to the MTL file.
   * @param {Function} [onLoad] - Callback invoked with the loaded object.
   * @param {Function} [onProgress] - Callback for download progress.
   * @param {Function} [onError] - Callback for download errors.
   *
   * @see setPath setResourcePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setResourcePath() explicitly prior to load.
   */
  load(e, n, o, s) {
    const i = this, c = this.path === "" ? k.extractUrlBase(e) : this.path, a = new w(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(t) {
      try {
        n(i.parse(t, c));
      } catch (r) {
        s ? s(r) : console.error(r), i.manager.itemError(e);
      }
    }, o, s);
  }
  setMaterialOptions(e) {
    return this.materialOptions = e, this;
  }
  /**
   * Parses a MTL file.
   *
   * @param {String} text - Content of MTL file
   * @return {MaterialCreator}
   *
   * @see setPath setResourcePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setResourcePath() explicitly prior to parse.
   */
  parse(e, n) {
    const o = e.split(`
`);
    let s = {};
    const i = /\s+/, c = {};
    for (let t = 0; t < o.length; t++) {
      let r = o[t];
      if (r = r.trim(), r.length === 0 || r.charAt(0) === "#")
        continue;
      const p = r.indexOf(" ");
      let l = p >= 0 ? r.substring(0, p) : r;
      l = l.toLowerCase();
      let h = p >= 0 ? r.substring(p + 1) : "";
      if (h = h.trim(), l === "newmtl")
        s = { name: h }, c[h] = s;
      else if (l === "ka" || l === "kd" || l === "ks" || l === "ke") {
        const f = h.split(i, 3);
        s[l] = [parseFloat(f[0]), parseFloat(f[1]), parseFloat(f[2])];
      } else
        s[l] = h;
    }
    const a = new F(this.resourcePath || n, this.materialOptions);
    return a.setCrossOrigin(this.crossOrigin), a.setManager(this.manager), a.setMaterials(c), a;
  }
}
class F {
  constructor(e = "", n = {}) {
    this.baseUrl = e, this.options = n, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = this.options.side !== void 0 ? this.options.side : b, this.wrap = this.options.wrap !== void 0 ? this.options.wrap : L;
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setManager(e) {
    this.manager = e;
  }
  setMaterials(e) {
    this.materialsInfo = this.convert(e), this.materials = {}, this.materialsArray = [], this.nameLookup = {};
  }
  convert(e) {
    if (!this.options)
      return e;
    const n = {};
    for (const o in e) {
      const s = e[o], i = {};
      n[o] = i;
      for (const c in s) {
        let a = !0, t = s[c];
        const r = c.toLowerCase();
        switch (r) {
          case "kd":
          case "ka":
          case "ks":
            this.options && this.options.normalizeRGB && (t = [t[0] / 255, t[1] / 255, t[2] / 255]), this.options && this.options.ignoreZeroRGBs && t[0] === 0 && t[1] === 0 && t[2] === 0 && (a = !1);
            break;
        }
        a && (i[r] = t);
      }
    }
    return n;
  }
  preload() {
    for (const e in this.materialsInfo)
      this.create(e);
  }
  getIndex(e) {
    return this.nameLookup[e];
  }
  getAsArray() {
    let e = 0;
    for (const n in this.materialsInfo)
      this.materialsArray[e] = this.create(n), this.nameLookup[n] = e, e++;
    return this.materialsArray;
  }
  create(e) {
    return this.materials[e] === void 0 && this.createMaterial_(e), this.materials[e];
  }
  createMaterial_(e) {
    const n = this, o = this.materialsInfo[e], s = {
      name: e,
      side: this.side
    };
    function i(a, t) {
      return typeof t != "string" || t === "" ? "" : /^https?:\/\//i.test(t) ? t : a + t;
    }
    function c(a, t) {
      if (s[a])
        return;
      const r = n.getTextureParams(t, s), p = n.loadTexture(i(n.baseUrl, r.url));
      p.repeat.copy(r.scale), p.offset.copy(r.offset), p.wrapS = n.wrap, p.wrapT = n.wrap, (a === "map" || a === "emissiveMap") && (p.encoding = y), s[a] = p;
    }
    for (const a in o) {
      const t = o[a];
      let r;
      if (t !== "")
        switch (a.toLowerCase()) {
          case "kd":
            s.color = new m().fromArray(t).convertSRGBToLinear();
            break;
          case "ks":
            s.specular = new m().fromArray(t).convertSRGBToLinear();
            break;
          case "ke":
            s.emissive = new m().fromArray(t).convertSRGBToLinear();
            break;
          case "map_kd":
            c("map", t);
            break;
          case "map_ks":
            c("specularMap", t);
            break;
          case "map_ke":
            c("emissiveMap", t);
            break;
          case "norm":
            c("normalMap", t);
            break;
          case "map_bump":
          case "bump":
            c("bumpMap", t);
            break;
          case "map_d":
            c("alphaMap", t), s.transparent = !0;
            break;
          case "ns":
            s.shininess = parseFloat(t);
            break;
          case "d":
            r = parseFloat(t), r < 1 && (s.opacity = r, s.transparent = !0);
            break;
          case "tr":
            r = parseFloat(t), this.options && this.options.invertTrProperty && (r = 1 - r), r > 0 && (s.opacity = 1 - r, s.transparent = !0);
            break;
        }
    }
    return this.materials[e] = new M(s), this.materials[e];
  }
  getTextureParams(e, n) {
    const o = {
      scale: new u(1, 1),
      offset: new u(0, 0)
    }, s = e.split(/\s+/);
    let i;
    return i = s.indexOf("-bm"), i >= 0 && (n.bumpScale = parseFloat(s[i + 1]), s.splice(i, 2)), i = s.indexOf("-s"), i >= 0 && (o.scale.set(parseFloat(s[i + 1]), parseFloat(s[i + 2])), s.splice(i, 4)), i = s.indexOf("-o"), i >= 0 && (o.offset.set(parseFloat(s[i + 1]), parseFloat(s[i + 2])), s.splice(i, 4)), o.url = s.join(" ").trim(), o;
  }
  loadTexture(e, n, o, s, i) {
    const c = this.manager !== void 0 ? this.manager : x;
    let a = c.getHandler(e);
    a === null && (a = new v(c)), a.setCrossOrigin && a.setCrossOrigin(this.crossOrigin);
    const t = a.load(e, o, s, i);
    return n !== void 0 && (t.mapping = n), t;
  }
}
export {
  C as MTLLoader
};
