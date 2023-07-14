import { L as H, F, M as N, C as D, T as V, R as U, a as I, O as $, b as J, B as G, D as q, c as K, S as Q, P as X, d as Y, e as Z, f as ee, g as te, h as se, i as ae, j as re, k as z, l as oe } from "./index-20e94914.mjs";
const W = /* @__PURE__ */ new WeakMap();
class ce extends H {
  constructor(s) {
    super(s), this.libraryPath = "", this.libraryPending = null, this.libraryBinary = null, this.libraryConfig = {}, this.url = "", this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.workerConfig = {}, this.materials = [], this.warnings = [];
  }
  setLibraryPath(s) {
    return this.libraryPath = s, this;
  }
  setWorkerLimit(s) {
    return this.workerLimit = s, this;
  }
  load(s, a, l, o) {
    const t = new F(this.manager);
    t.setPath(this.path), t.setResponseType("arraybuffer"), t.setRequestHeader(this.requestHeader), this.url = s, t.load(s, (c) => {
      if (W.has(c))
        return W.get(c).promise.then(a).catch(o);
      this.decodeObjects(c, s).then((d) => {
        d.userData.warnings = this.warnings, a(d);
      }).catch((d) => o(d));
    }, l, o);
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((s) => s._taskLoad));
  }
  decodeObjects(s, a) {
    let l, o;
    const t = s.byteLength, c = this._getWorker(t).then((d) => (l = d, o = this.workerNextTaskID++, new Promise((e, h) => {
      l._callbacks[o] = { resolve: e, reject: h }, l.postMessage({ type: "decode", id: o, buffer: s }, [s]);
    }))).then((d) => this._createGeometry(d.data)).catch((d) => {
      throw d;
    });
    return c.catch(() => !0).then(() => {
      l && o && this._releaseTask(l, o);
    }), W.set(s, {
      url: a,
      promise: c
    }), c;
  }
  parse(s, a, l) {
    this.decodeObjects(s, "").then((o) => {
      o.userData.warnings = this.warnings, a(o);
    }).catch((o) => l(o));
  }
  _compareMaterials(s) {
    const a = {};
    a.name = s.name, a.color = {}, a.color.r = s.color.r, a.color.g = s.color.g, a.color.b = s.color.b, a.type = s.type;
    for (let l = 0; l < this.materials.length; l++) {
      const o = this.materials[l], t = {};
      if (t.name = o.name, t.color = {}, t.color.r = o.color.r, t.color.g = o.color.g, t.color.b = o.color.b, t.type = o.type, JSON.stringify(a) === JSON.stringify(t))
        return o;
    }
    return this.materials.push(s), s;
  }
  _createMaterial(s) {
    if (s === void 0)
      return new N({
        color: new D(1, 1, 1),
        metalness: 0.8,
        name: "default",
        side: 2
      });
    const a = s.diffuseColor, l = new D(a.r / 255, a.g / 255, a.b / 255);
    a.r === 0 && a.g === 0 && a.b === 0 && (l.r = 1, l.g = 1, l.b = 1);
    const o = new N({
      color: l,
      name: s.name,
      side: 2,
      transparent: s.transparency > 0,
      opacity: 1 - s.transparency
    }), t = new V();
    for (let c = 0; c < s.textures.length; c++) {
      const d = s.textures[c];
      if (d.image !== null) {
        const e = t.load(d.image);
        switch (d.type) {
          case "Diffuse":
            o.map = e;
            break;
          case "Bump":
            o.bumpMap = e;
            break;
          case "Transparency":
            o.alphaMap = e, o.transparent = !0;
            break;
          case "Emap":
            o.envMap = e;
            break;
        }
        e.wrapS = d.wrapU === 0 ? U : I, e.wrapT = d.wrapV === 0 ? U : I, e.repeat.set(d.repeat[0], d.repeat[1]);
      }
    }
    return o;
  }
  _createGeometry(s) {
    const a = new $(), l = [], o = [], t = [];
    a.userData.layers = s.layers, a.userData.groups = s.groups, a.userData.settings = s.settings, a.userData.objectType = "File3dm", a.userData.materials = null, a.name = this.url;
    let c = s.objects;
    const d = s.materials;
    for (let e = 0; e < c.length; e++) {
      const h = c[e], i = h.attributes;
      switch (h.objectType) {
        case "InstanceDefinition":
          o.push(h);
          break;
        case "InstanceReference":
          t.push(h);
          break;
        default:
          let r;
          if (i.materialIndex >= 0) {
            const n = d[i.materialIndex];
            let m = this._createMaterial(n);
            m = this._compareMaterials(m), r = this._createObject(h, m);
          } else {
            const n = this._createMaterial();
            r = this._createObject(h, n);
          }
          if (r === void 0)
            continue;
          const u = s.layers[i.layerIndex];
          r.visible = u ? s.layers[i.layerIndex].visible : !0, i.isInstanceDefinitionObject ? l.push(r) : a.add(r);
          break;
      }
    }
    for (let e = 0; e < o.length; e++) {
      const h = o[e];
      c = [];
      for (let i = 0; i < h.attributes.objectIds.length; i++) {
        const r = h.attributes.objectIds[i];
        for (let u = 0; u < l.length; u++) {
          const n = l[u].userData.attributes.id;
          r === n && c.push(l[u]);
        }
      }
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (r.geometry.parentIdefId === h.attributes.id) {
          const u = new $(), n = r.geometry.xform.array, m = new J();
          m.set(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]), u.applyMatrix4(m);
          for (let p = 0; p < c.length; p++)
            u.add(c[p].clone(!0));
          a.add(u);
        }
      }
    }
    return a.userData.materials = this.materials, a;
  }
  _createObject(s, a) {
    const l = new G(), o = s.attributes;
    let t, c, d, e;
    switch (s.objectType) {
      case "Point":
      case "PointSet":
        t = l.parse(s.geometry), t.attributes.hasOwnProperty("color") ? c = new z({ vertexColors: !0, sizeAttenuation: !1, size: 2 }) : (d = o.drawColor, e = new D(d.r / 255, d.g / 255, d.b / 255), c = new z({ color: e, sizeAttenuation: !1, size: 2 })), c = this._compareMaterials(c);
        const h = new oe(t, c);
        return h.userData.attributes = o, h.userData.objectType = s.objectType, o.name && (h.name = o.name), h;
      case "Mesh":
      case "Extrusion":
      case "SubD":
      case "Brep":
        if (s.geometry === null)
          return;
        t = l.parse(s.geometry), t.attributes.hasOwnProperty("color") && (a.vertexColors = !0), a === null && (a = this._createMaterial(), a = this._compareMaterials(a));
        const i = new re(t, a);
        return i.castShadow = o.castsShadows, i.receiveShadow = o.receivesShadows, i.userData.attributes = o, i.userData.objectType = s.objectType, o.name && (i.name = o.name), i;
      case "Curve":
        t = l.parse(s.geometry), d = o.drawColor, e = new D(d.r / 255, d.g / 255, d.b / 255), c = new se({ color: e }), c = this._compareMaterials(c);
        const r = new ae(t, c);
        return r.userData.attributes = o, r.userData.objectType = s.objectType, o.name && (r.name = o.name), r;
      case "TextDot":
        t = s.geometry;
        const u = document.createElement("canvas").getContext("2d"), n = `${t.fontHeight}px ${t.fontFace}`;
        u.font = n;
        const m = u.measureText(t.text).width + 10, p = t.fontHeight + 10, b = window.devicePixelRatio;
        u.canvas.width = m * b, u.canvas.height = p * b, u.canvas.style.width = m + "px", u.canvas.style.height = p + "px", u.setTransform(b, 0, 0, b, 0, 0), u.font = n, u.textBaseline = "middle", u.textAlign = "center", e = o.drawColor, u.fillStyle = `rgba(${e.r},${e.g},${e.b},${e.a})`, u.fillRect(0, 0, m, p), u.fillStyle = "white", u.fillText(t.text, m / 2, p / 2);
        const g = new Y(u.canvas);
        g.minFilter = Z, g.wrapS = I, g.wrapT = I, c = new ee({ map: g, depthTest: !1 });
        const w = new te(c);
        return w.position.set(t.point[0], t.point[1], t.point[2]), w.scale.set(m / 10, p / 10, 1), w.userData.attributes = o, w.userData.objectType = s.objectType, o.name && (w.name = o.name), w;
      case "Light":
        t = s.geometry;
        let y;
        switch (t.lightStyle.name) {
          case "LightStyle_WorldPoint":
            y = new X(), y.castShadow = o.castsShadows, y.position.set(t.location[0], t.location[1], t.location[2]), y.shadow.normalBias = 0.1;
            break;
          case "LightStyle_WorldSpot":
            y = new Q(), y.castShadow = o.castsShadows, y.position.set(t.location[0], t.location[1], t.location[2]), y.target.position.set(t.direction[0], t.direction[1], t.direction[2]), y.angle = t.spotAngleRadians, y.shadow.normalBias = 0.1;
            break;
          case "LightStyle_WorldRectangular":
            y = new K();
            const S = Math.abs(t.width[2]), _ = Math.abs(t.length[0]);
            y.position.set(t.location[0] - _ / 2, t.location[1], t.location[2] - S / 2), y.height = _, y.width = S, y.lookAt(t.direction[0], t.direction[1], t.direction[2]);
            break;
          case "LightStyle_WorldDirectional":
            y = new q(), y.castShadow = o.castsShadows, y.position.set(t.location[0], t.location[1], t.location[2]), y.target.position.set(t.direction[0], t.direction[1], t.direction[2]), y.shadow.normalBias = 0.1;
            break;
        }
        return y && (y.intensity = t.intensity, d = t.diffuse, e = new D(d.r / 255, d.g / 255, d.b / 255), y.color = e, y.userData.attributes = o, y.userData.objectType = s.objectType), y;
    }
  }
  _initLibrary() {
    if (!this.libraryPending) {
      const s = new F(this.manager);
      s.setPath(this.libraryPath);
      const a = new Promise((t, c) => {
        s.load("rhino3dm.js", t, void 0, c);
      }), l = new F(this.manager);
      l.setPath(this.libraryPath), l.setResponseType("arraybuffer");
      const o = new Promise((t, c) => {
        l.load("rhino3dm.wasm", t, void 0, c);
      });
      this.libraryPending = Promise.all([a, o]).then(([t, c]) => {
        this.libraryConfig.wasmBinary = c;
        const d = ne.toString(), e = [
          "/* rhino3dm.js */",
          t,
          "/* worker */",
          d.substring(d.indexOf("{") + 1, d.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([e]));
      });
    }
    return this.libraryPending;
  }
  _getWorker(s) {
    return this._initLibrary().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const l = new Worker(this.workerSourceURL);
        l._callbacks = {}, l._taskCosts = {}, l._taskLoad = 0, l.postMessage({
          type: "init",
          libraryConfig: this.libraryConfig
        }), l.onmessage = (o) => {
          const t = o.data;
          switch (t.type) {
            case "warning":
              this.warnings.push(t.data), console.warn(t.data);
              break;
            case "decode":
              l._callbacks[t.id].resolve(t);
              break;
            case "error":
              l._callbacks[t.id].reject(t);
              break;
            default:
              console.error('THREE.Rhino3dmLoader: Unexpected message, "' + t.type + '"');
          }
        }, this.workerPool.push(l);
      } else
        this.workerPool.sort(function(l, o) {
          return l._taskLoad > o._taskLoad ? -1 : 1;
        });
      const a = this.workerPool[this.workerPool.length - 1];
      return a._taskLoad += s, a;
    });
  }
  _releaseTask(s, a) {
    s._taskLoad -= s._taskCosts[a], delete s._callbacks[a], delete s._taskCosts[a];
  }
  dispose() {
    for (let s = 0; s < this.workerPool.length; ++s)
      this.workerPool[s].terminate();
    return this.workerPool.length = 0, this;
  }
}
function ne() {
  let v, s, a, l;
  onmessage = function(e) {
    const h = e.data;
    switch (h.type) {
      case "init":
        s = h.libraryConfig;
        const i = s.wasmBinary;
        let r;
        v = new Promise(function(n) {
          r = { wasmBinary: i, onRuntimeInitialized: n }, rhino3dm(r);
        }).then(() => {
          a = r;
        });
        break;
      case "decode":
        l = h.id;
        const u = h.buffer;
        v.then(() => {
          try {
            const n = o(a, u);
            self.postMessage({ type: "decode", id: h.id, data: n });
          } catch (n) {
            self.postMessage({ type: "error", id: h.id, error: n });
          }
        });
        break;
    }
  };
  function o(e, h) {
    const i = new Uint8Array(h), r = e.File3dm.fromByteArray(i), u = [], n = [], m = [], p = [], b = [], g = [], w = [], y = r.objects(), S = y.count;
    for (let f = 0; f < S; f++) {
      const T = y.get(f), x = t(T, r);
      T.delete(), x && u.push(x);
    }
    for (let f = 0; f < r.instanceDefinitions().count(); f++) {
      const T = r.instanceDefinitions().get(f), x = c(T);
      x.objectIds = T.getObjectIds(), u.push({ geometry: null, attributes: x, objectType: "InstanceDefinition" });
    }
    const _ = [
      // rhino.TextureType.Bitmap,
      e.TextureType.Diffuse,
      e.TextureType.Bump,
      e.TextureType.Transparency,
      e.TextureType.Opacity,
      e.TextureType.Emap
    ], j = [
      e.TextureType.PBR_BaseColor,
      e.TextureType.PBR_Subsurface,
      e.TextureType.PBR_SubsurfaceScattering,
      e.TextureType.PBR_SubsurfaceScatteringRadius,
      e.TextureType.PBR_Metallic,
      e.TextureType.PBR_Specular,
      e.TextureType.PBR_SpecularTint,
      e.TextureType.PBR_Roughness,
      e.TextureType.PBR_Anisotropic,
      e.TextureType.PBR_Anisotropic_Rotation,
      e.TextureType.PBR_Sheen,
      e.TextureType.PBR_SheenTint,
      e.TextureType.PBR_Clearcoat,
      e.TextureType.PBR_ClearcoatBump,
      e.TextureType.PBR_ClearcoatRoughness,
      e.TextureType.PBR_OpacityIor,
      e.TextureType.PBR_OpacityRoughness,
      e.TextureType.PBR_Emission,
      e.TextureType.PBR_AmbientOcclusion,
      e.TextureType.PBR_Displacement
    ];
    for (let f = 0; f < r.materials().count(); f++) {
      const T = r.materials().get(f), x = T.physicallyBased();
      let O = c(T);
      const E = [];
      for (let L = 0; L < _.length; L++) {
        const P = T.getTexture(_[L]);
        if (P) {
          let M = _[L].constructor.name;
          M = M.substring(12, M.length);
          const R = { type: M }, C = r.getEmbeddedFileAsBase64(P.fileName);
          R.wrapU = P.wrapU, R.wrapV = P.wrapV, R.wrapW = P.wrapW;
          const A = P.uvwTransform.toFloatArray(!0);
          R.repeat = [A[0], A[5]], C ? R.image = "data:image/png;base64," + C : (self.postMessage({
            type: "warning",
            id: l,
            data: {
              message: `THREE.3DMLoader: Image for ${M} texture not embedded in file.`,
              type: "missing resource"
            }
          }), R.image = null), E.push(R), P.delete();
        }
      }
      if (O.textures = E, x.supported) {
        for (let P = 0; P < j.length; P++) {
          const M = T.getTexture(j[P]);
          if (M) {
            const R = r.getEmbeddedFileAsBase64(M.fileName);
            let C = j[P].constructor.name;
            C = C.substring(12, C.length);
            const A = { type: C, image: "data:image/png;base64," + R };
            E.push(A), M.delete();
          }
        }
        const L = c(T.physicallyBased());
        O = Object.assign(L, O);
      }
      n.push(O), T.delete(), x.delete();
    }
    for (let f = 0; f < r.layers().count(); f++) {
      const T = r.layers().get(f), x = c(T);
      m.push(x), T.delete();
    }
    for (let f = 0; f < r.views().count(); f++) {
      const T = r.views().get(f), x = c(T);
      p.push(x), T.delete();
    }
    for (let f = 0; f < r.namedViews().count(); f++) {
      const T = r.namedViews().get(f), x = c(T);
      b.push(x), T.delete();
    }
    for (let f = 0; f < r.groups().count(); f++) {
      const T = r.groups().get(f), x = c(T);
      g.push(x), T.delete();
    }
    const k = c(r.settings()), B = r.strings().count();
    for (let f = 0; f < B; f++)
      w.push(r.strings().get(f));
    return r.delete(), { objects: u, materials: n, layers: m, views: p, namedViews: b, groups: g, strings: w, settings: k };
  }
  function t(e, h) {
    const i = e.geometry(), r = e.attributes();
    let u = i.objectType, n, m, p, b, g;
    switch (u) {
      case a.ObjectType.Curve:
        const w = d(i, 100);
        p = {}, m = {}, b = {}, p.itemSize = 3, p.type = "Float32Array", p.array = [];
        for (let k = 0; k < w.length; k++)
          p.array.push(w[k][0]), p.array.push(w[k][1]), p.array.push(w[k][2]);
        m.position = p, b.attributes = m, n = { data: b };
        break;
      case a.ObjectType.Point:
        const y = i.location;
        p = {};
        const S = {};
        m = {}, b = {}, p.itemSize = 3, p.type = "Float32Array", p.array = [y[0], y[1], y[2]];
        const _ = r.drawColor(h);
        S.itemSize = 3, S.type = "Float32Array", S.array = [_.r / 255, _.g / 255, _.b / 255], m.position = p, m.color = S, b.attributes = m, n = { data: b };
        break;
      case a.ObjectType.PointSet:
      case a.ObjectType.Mesh:
        n = i.toThreejsJSON();
        break;
      case a.ObjectType.Brep:
        const j = i.faces();
        g = new a.Mesh();
        for (let k = 0; k < j.count; k++) {
          const B = j.get(k), f = B.getMesh(a.MeshType.Any);
          f && (g.append(f), f.delete()), B.delete();
        }
        g.faces().count > 0 && (g.compact(), n = g.toThreejsJSON(), j.delete()), g.delete();
        break;
      case a.ObjectType.Extrusion:
        g = i.getMesh(a.MeshType.Any), g && (n = g.toThreejsJSON(), g.delete());
        break;
      case a.ObjectType.TextDot:
        n = c(i);
        break;
      case a.ObjectType.Light:
        n = c(i), n.lightStyle.name === "LightStyle_WorldLinear" && self.postMessage({
          type: "warning",
          id: l,
          data: {
            message: `THREE.3DMLoader: No conversion exists for ${u.constructor.name} ${n.lightStyle.name}`,
            type: "no conversion",
            guid: r.id
          }
        });
        break;
      case a.ObjectType.InstanceReference:
        n = c(i), n.xform = c(i.xform), n.xform.array = i.xform.toFloatArray(!0);
        break;
      case a.ObjectType.SubD:
        i.subdivide(3), g = a.Mesh.createFromSubDControlNet(i), g && (n = g.toThreejsJSON(), g.delete());
        break;
      default:
        self.postMessage({
          type: "warning",
          id: l,
          data: {
            message: `THREE.3DMLoader: Conversion not implemented for ${u.constructor.name}`,
            type: "not implemented",
            guid: r.id
          }
        });
        break;
    }
    if (n)
      return m = c(r), m.geometry = c(i), r.groupCount > 0 && (m.groupIds = r.getGroupList()), r.userStringCount > 0 && (m.userStrings = r.getUserStrings()), i.userStringCount > 0 && (m.geometry.userStrings = i.getUserStrings()), m.drawColor = r.drawColor(h), u = u.constructor.name, u = u.substring(11, u.length), { geometry: n, attributes: m, objectType: u };
    self.postMessage({
      type: "warning",
      id: l,
      data: {
        message: `THREE.3DMLoader: ${u.constructor.name} has no associated mesh geometry.`,
        type: "missing mesh",
        guid: r.id
      }
    });
  }
  function c(e) {
    const h = {};
    for (const i in e) {
      const r = e[i];
      typeof r != "function" && (typeof r == "object" && r !== null && r.hasOwnProperty("constructor") ? h[i] = { name: r.constructor.name, value: r.value } : h[i] = r);
    }
    return h;
  }
  function d(e, h) {
    let i = h, r = [];
    const u = [];
    if (e instanceof a.LineCurve)
      return [e.pointAtStart, e.pointAtEnd];
    if (e instanceof a.PolylineCurve) {
      i = e.pointCount;
      for (let p = 0; p < i; p++)
        r.push(e.point(p));
      return r;
    }
    if (e instanceof a.PolyCurve) {
      const p = e.segmentCount;
      for (let b = 0; b < p; b++) {
        const g = e.segmentCurve(b), w = d(g, i);
        r = r.concat(w), g.delete();
      }
      return r;
    }
    if (e instanceof a.ArcCurve && (i = Math.floor(e.angleDegrees / 5), i = i < 2 ? 2 : i), e instanceof a.NurbsCurve && e.degree === 1) {
      const p = e.tryGetPolyline();
      for (let b = 0; b < p.count; b++)
        r.push(p.get(b));
      return p.delete(), r;
    }
    const n = e.domain, m = i - 1;
    for (let p = 0; p < i; p++) {
      const b = n[0] + p / m * (n[1] - n[0]);
      if (b === n[0] || b === n[1]) {
        u.push(b);
        continue;
      }
      const g = e.tangentAt(b), w = e.tangentAt(u.slice(-1)[0]), y = g[0] * g[0] + g[1] * g[1] + g[2] * g[2], S = w[0] * w[0] + w[1] * w[1] + w[2] * w[2], _ = Math.sqrt(y * S);
      let j;
      if (_ === 0)
        j = Math.PI / 2;
      else {
        const k = (g.x * w.x + g.y * w.y + g.z * w.z) / _;
        j = Math.acos(Math.max(-1, Math.min(1, k)));
      }
      j < 0.1 || u.push(b);
    }
    return r = u.map((p) => e.pointAt(p)), r;
  }
}
export {
  ce as Rhino3dmLoader
};
