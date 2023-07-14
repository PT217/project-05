import { w as _e, x as Y, y as ue, L as we, m as Q, F as le, C as O, S as Se, P as ye, D as Me, z as B, s as U, E as C, V as fe, b as K, I as be, O as de, T as Ne, H as Ie, r as V, J as Oe, e as he, v as pe, R as Z, k as Ce, K as X, h as Fe, M as me, o as De, Q as Pe, p as He, U as ke, j as Ge, W as Be, i as Ue, X as ve, l as je, G as z, Y as Ke, Z as Ve, _ as Xe, $ as ze, a0 as Ae, a1 as qe, a2 as We, a3 as P, a4 as ge, N as Ye, a5 as Qe, a6 as Ze, a7 as Je, a as $e, t as et, a8 as tt, a9 as nt, aa as st, ab as te, ac as rt, ad as ne, ae as it, af as ot, ag as at, ah as ct } from "./index-20e94914.mjs";
function se(f, t) {
  if (t === _e)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), f;
  if (t === Y || t === ue) {
    let e = f.getIndex();
    if (e === null) {
      const i = [], a = f.getAttribute("position");
      if (a !== void 0) {
        for (let o = 0; o < a.count; o++)
          i.push(o);
        f.setIndex(i), e = f.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), f;
    }
    const s = e.count - 2, n = [];
    if (t === Y)
      for (let i = 1; i <= s; i++)
        n.push(e.getX(0)), n.push(e.getX(i)), n.push(e.getX(i + 1));
    else
      for (let i = 0; i < s; i++)
        i % 2 === 0 ? (n.push(e.getX(i)), n.push(e.getX(i + 1)), n.push(e.getX(i + 2))) : (n.push(e.getX(i + 2)), n.push(e.getX(i + 1)), n.push(e.getX(i)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = f.clone();
    return r.setIndex(n), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), f;
}
class vt extends we {
  constructor(t) {
    super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
      return new ht(e);
    }), this.register(function(e) {
      return new xt(e);
    }), this.register(function(e) {
      return new Rt(e);
    }), this.register(function(e) {
      return new Lt(e);
    }), this.register(function(e) {
      return new mt(e);
    }), this.register(function(e) {
      return new At(e);
    }), this.register(function(e) {
      return new gt(e);
    }), this.register(function(e) {
      return new Tt(e);
    }), this.register(function(e) {
      return new dt(e);
    }), this.register(function(e) {
      return new Et(e);
    }), this.register(function(e) {
      return new pt(e);
    }), this.register(function(e) {
      return new lt(e);
    }), this.register(function(e) {
      return new _t(e);
    }), this.register(function(e) {
      return new wt(e);
    });
  }
  load(t, e, s, n) {
    const r = this;
    let i;
    this.resourcePath !== "" ? i = this.resourcePath : this.path !== "" ? i = this.path : i = Q.extractUrlBase(t), this.manager.itemStart(t);
    const a = function(c) {
      n ? n(c) : console.error(c), r.manager.itemError(t), r.manager.itemEnd(t);
    }, o = new le(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
      try {
        r.parse(c, i, function(u) {
          e(u), r.manager.itemEnd(t);
        }, a);
      } catch (u) {
        a(u);
      }
    }, s, a);
  }
  setDRACOLoader(t) {
    return this.dracoLoader = t, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(t) {
    return this.ktx2Loader = t, this;
  }
  setMeshoptDecoder(t) {
    return this.meshoptDecoder = t, this;
  }
  register(t) {
    return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
  }
  unregister(t) {
    return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
  }
  parse(t, e, s, n) {
    let r;
    const i = {}, a = {}, o = new TextDecoder();
    if (typeof t == "string")
      r = JSON.parse(t);
    else if (t instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(t, 0, 4)) === Te) {
        try {
          i[A.KHR_BINARY_GLTF] = new St(t);
        } catch (l) {
          n && n(l);
          return;
        }
        r = JSON.parse(i[A.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(o.decode(t));
    else
      r = t;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Gt(r, {
      path: e || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const l = this.pluginCallbacks[u](c);
      a[l.name] = l, i[l.name] = !0;
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const l = r.extensionsUsed[u], d = r.extensionsRequired || [];
        switch (l) {
          case A.KHR_MATERIALS_UNLIT:
            i[l] = new ft();
            break;
          case A.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new yt(r, this.dracoLoader);
            break;
          case A.KHR_TEXTURE_TRANSFORM:
            i[l] = new Mt();
            break;
          case A.KHR_MESH_QUANTIZATION:
            i[l] = new bt();
            break;
          default:
            d.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    c.setExtensions(i), c.setPlugins(a), c.parse(s, n);
  }
  parseAsync(t, e) {
    const s = this;
    return new Promise(function(n, r) {
      s.parse(t, e, n, r);
    });
  }
}
function ut() {
  let f = {};
  return {
    get: function(t) {
      return f[t];
    },
    add: function(t, e) {
      f[t] = e;
    },
    remove: function(t) {
      delete f[t];
    },
    removeAll: function() {
      f = {};
    }
  };
}
const A = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class lt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const t = this.parser, e = this.parser.json.nodes || [];
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(t) {
    const e = this.parser, s = "light:" + t;
    let n = e.cache.get(s);
    if (n)
      return n;
    const r = e.json, o = ((r.extensions && r.extensions[this.name] || {}).lights || [])[t];
    let c;
    const u = new O(16777215);
    o.color !== void 0 && u.fromArray(o.color);
    const l = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        c = new Me(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new ye(u), c.distance = l;
        break;
      case "spot":
        c = new Se(u), c.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, c.angle = o.spot.outerConeAngle, c.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, N(c, o), o.intensity !== void 0 && (c.intensity = o.intensity), c.name = e.createUniqueName(o.name || "light_" + t), n = Promise.resolve(c), e.cache.add(s, n), n;
  }
  getDependency(t, e) {
    if (t === "light")
      return this._loadLight(e);
  }
  createNodeAttachment(t) {
    const e = this, s = this.parser, r = s.json.nodes[t], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(o) {
      return s._getNodeRef(e.cache, a, o);
    });
  }
}
class ft {
  constructor() {
    this.name = A.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return B;
  }
  extendParams(t, e, s) {
    const n = [];
    t.color = new O(1, 1, 1), t.opacity = 1;
    const r = e.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const i = r.baseColorFactor;
        t.color.fromArray(i), t.opacity = i[3];
      }
      r.baseColorTexture !== void 0 && n.push(s.assignTexture(t, "map", r.baseColorTexture, U));
    }
    return Promise.all(n);
  }
}
class dt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(t, e) {
    const n = this.parser.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name].emissiveStrength;
    return r !== void 0 && (e.emissiveIntensity = r), Promise.resolve();
  }
}
class ht {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(s.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(s.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(s.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const a = i.clearcoatNormalTexture.scale;
      e.clearcoatNormalScale = new fe(a, a);
    }
    return Promise.all(r);
  }
}
class pt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (e.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && r.push(s.assignTexture(e, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (e.iridescenceIOR = i.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && r.push(s.assignTexture(e, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class mt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [];
    e.sheenColor = new O(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
    const i = n.extensions[this.name];
    return i.sheenColorFactor !== void 0 && e.sheenColor.fromArray(i.sheenColorFactor), i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(s.assignTexture(e, "sheenColorMap", i.sheenColorTexture, U)), i.sheenRoughnessTexture !== void 0 && r.push(s.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
  }
}
class At {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(s.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(r);
  }
}
class gt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(s.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 1 / 0;
    const a = i.attenuationColor || [1, 1, 1];
    return e.attenuationColor = new O(a[0], a[1], a[2]), Promise.all(r);
  }
}
class Tt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_IOR;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const n = this.parser.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return e.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class Et {
  constructor(t) {
    this.parser = t, this.name = A.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : C;
  }
  extendMaterialParams(t, e) {
    const s = this.parser, n = s.json.materials[t];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    e.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && r.push(s.assignTexture(e, "specularIntensityMap", i.specularTexture));
    const a = i.specularColorFactor || [1, 1, 1];
    return e.specularColor = new O(a[0], a[1], a[2]), i.specularColorTexture !== void 0 && r.push(s.assignTexture(e, "specularColorMap", i.specularColorTexture, U)), Promise.all(r);
  }
}
class xt {
  constructor(t) {
    this.parser = t, this.name = A.KHR_TEXTURE_BASISU;
  }
  loadTexture(t) {
    const e = this.parser, s = e.json, n = s.textures[t];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const r = n.extensions[this.name], i = e.options.ktx2Loader;
    if (!i) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return e.loadTextureImage(t, r.source, i);
  }
}
class Rt {
  constructor(t) {
    this.parser = t, this.name = A.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(t) {
    const e = this.name, s = this.parser, n = s.json, r = n.textures[t];
    if (!r.extensions || !r.extensions[e])
      return null;
    const i = r.extensions[e], a = n.images[i.source];
    let o = s.textureLoader;
    if (a.uri) {
      const c = s.options.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return s.loadTextureImage(t, i.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const e = new Image();
      e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
}
class Lt {
  constructor(t) {
    this.parser = t, this.name = A.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(t) {
    const e = this.name, s = this.parser, n = s.json, r = n.textures[t];
    if (!r.extensions || !r.extensions[e])
      return null;
    const i = r.extensions[e], a = n.images[i.source];
    let o = s.textureLoader;
    if (a.uri) {
      const c = s.options.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return s.loadTextureImage(t, i.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const e = new Image();
      e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
}
class _t {
  constructor(t) {
    this.name = A.EXT_MESHOPT_COMPRESSION, this.parser = t;
  }
  loadBufferView(t) {
    const e = this.parser.json, s = e.bufferViews[t];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], r = this.parser.getDependency("buffer", n.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const o = n.byteOffset || 0, c = n.byteLength || 0, u = n.count, l = n.byteStride, d = new Uint8Array(a, o, c);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(u, l, d, n.mode, n.filter).then(function(h) {
          return h.buffer;
        }) : i.ready.then(function() {
          const h = new ArrayBuffer(u * l);
          return i.decodeGltfBuffer(new Uint8Array(h), u, l, d, n.mode, n.filter), h;
        });
      });
    } else
      return null;
  }
}
class wt {
  constructor(t) {
    this.name = A.EXT_MESH_GPU_INSTANCING, this.parser = t;
  }
  createNodeMesh(t) {
    const e = this.parser.json, s = e.nodes[t];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = e.meshes[s.mesh];
    for (const c of n.primitives)
      if (c.mode !== _.TRIANGLES && c.mode !== _.TRIANGLE_STRIP && c.mode !== _.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const i = s.extensions[this.name].attributes, a = [], o = {};
    for (const c in i)
      a.push(this.parser.getDependency("accessor", i[c]).then((u) => (o[c] = u, o[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(t)), Promise.all(a).then((c) => {
      const u = c.pop(), l = u.isGroup ? u.children : [u], d = c[0].count, h = [];
      for (const g of l) {
        const T = new K(), p = new P(), m = new ge(), R = new P(1, 1, 1), x = new be(g.geometry, g.material, d);
        for (let E = 0; E < d; E++)
          o.TRANSLATION && p.fromBufferAttribute(o.TRANSLATION, E), o.ROTATION && m.fromBufferAttribute(o.ROTATION, E), o.SCALE && R.fromBufferAttribute(o.SCALE, E), x.setMatrixAt(E, T.compose(p, m, R));
        for (const E in o)
          E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && g.geometry.setAttribute(E, o[E]);
        de.prototype.copy.call(x, g), x.frustumCulled = !1, this.parser.assignFinalMaterial(x), h.push(x);
      }
      return u.isGroup ? (u.clear(), u.add(...h), u) : h[0];
    }));
  }
}
const Te = "glTF", k = 12, re = { JSON: 1313821514, BIN: 5130562 };
class St {
  constructor(t) {
    this.name = A.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const e = new DataView(t, 0, k), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(t.slice(0, 4))),
      version: e.getUint32(4, !0),
      length: e.getUint32(8, !0)
    }, this.header.magic !== Te)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - k, r = new DataView(t, k);
    let i = 0;
    for (; i < n; ) {
      const a = r.getUint32(i, !0);
      i += 4;
      const o = r.getUint32(i, !0);
      if (i += 4, o === re.JSON) {
        const c = new Uint8Array(t, k + i, a);
        this.content = s.decode(c);
      } else if (o === re.BIN) {
        const c = k + i;
        this.body = t.slice(c, c + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class yt {
  constructor(t, e) {
    if (!e)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = A.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
  }
  decodePrimitive(t, e) {
    const s = this.json, n = this.dracoLoader, r = t.extensions[this.name].bufferView, i = t.extensions[this.name].attributes, a = {}, o = {}, c = {};
    for (const u in i) {
      const l = J[u] || u.toLowerCase();
      a[l] = i[u];
    }
    for (const u in t.attributes) {
      const l = J[u] || u.toLowerCase();
      if (i[u] !== void 0) {
        const d = s.accessors[t.attributes[u]], h = H[d.componentType];
        c[l] = h.name, o[l] = d.normalized === !0;
      }
    }
    return e.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(l) {
        n.decodeDracoFile(u, function(d) {
          for (const h in d.attributes) {
            const g = d.attributes[h], T = o[h];
            T !== void 0 && (g.normalized = T);
          }
          l(d);
        }, a, c);
      });
    });
  }
}
class Mt {
  constructor() {
    this.name = A.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(t, e) {
    return e.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = !0), t;
  }
}
class bt {
  constructor() {
    this.name = A.KHR_MESH_QUANTIZATION;
  }
}
class Ee extends ct {
  constructor(t, e, s, n) {
    super(t, e, s, n);
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, s = this.sampleValues, n = this.valueSize, r = t * n * 3 + n;
    for (let i = 0; i !== n; i++)
      e[i] = s[r + i];
    return e;
  }
  interpolate_(t, e, s, n) {
    const r = this.resultBuffer, i = this.sampleValues, a = this.valueSize, o = a * 2, c = a * 3, u = n - e, l = (s - e) / u, d = l * l, h = d * l, g = t * c, T = g - c, p = -2 * h + 3 * d, m = h - d, R = 1 - p, x = m - d + l;
    for (let E = 0; E !== a; E++) {
      const I = i[T + E + a], w = i[T + E + o] * u, L = i[g + E + a], y = i[g + E] * u;
      r[E] = R * I + x * w + p * L + m * y;
    }
    return r;
  }
}
const Nt = new ge();
class It extends Ee {
  interpolate_(t, e, s, n) {
    const r = super.interpolate_(t, e, s, n);
    return Nt.fromArray(r).normalize().toArray(r), r;
  }
}
const _ = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, H = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ie = {
  9728: Ye,
  9729: he,
  9984: Qe,
  9985: Ze,
  9986: Je,
  9987: pe
}, oe = {
  33071: $e,
  33648: et,
  10497: Z
}, q = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, J = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, b = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ot = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ae,
  STEP: tt
}, W = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ct(f) {
  return f.DefaultMaterial === void 0 && (f.DefaultMaterial = new me({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: nt
  })), f.DefaultMaterial;
}
function G(f, t, e) {
  for (const s in e.extensions)
    f[s] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[s] = e.extensions[s]);
}
function N(f, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(f.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Ft(f, t, e) {
  let s = !1, n = !1, r = !1;
  for (let c = 0, u = t.length; c < u; c++) {
    const l = t[c];
    if (l.POSITION !== void 0 && (s = !0), l.NORMAL !== void 0 && (n = !0), l.COLOR_0 !== void 0 && (r = !0), s && n && r)
      break;
  }
  if (!s && !n && !r)
    return Promise.resolve(f);
  const i = [], a = [], o = [];
  for (let c = 0, u = t.length; c < u; c++) {
    const l = t[c];
    if (s) {
      const d = l.POSITION !== void 0 ? e.getDependency("accessor", l.POSITION) : f.attributes.position;
      i.push(d);
    }
    if (n) {
      const d = l.NORMAL !== void 0 ? e.getDependency("accessor", l.NORMAL) : f.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = l.COLOR_0 !== void 0 ? e.getDependency("accessor", l.COLOR_0) : f.attributes.color;
      o.push(d);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(a),
    Promise.all(o)
  ]).then(function(c) {
    const u = c[0], l = c[1], d = c[2];
    return s && (f.morphAttributes.position = u), n && (f.morphAttributes.normal = l), r && (f.morphAttributes.color = d), f.morphTargetsRelative = !0, f;
  });
}
function Dt(f, t) {
  if (f.updateMorphTargets(), t.weights !== void 0)
    for (let e = 0, s = t.weights.length; e < s; e++)
      f.morphTargetInfluences[e] = t.weights[e];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const e = t.extras.targetNames;
    if (f.morphTargetInfluences.length === e.length) {
      f.morphTargetDictionary = {};
      for (let s = 0, n = e.length; s < n; s++)
        f.morphTargetDictionary[e[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Pt(f) {
  const t = f.extensions && f.extensions[A.KHR_DRACO_MESH_COMPRESSION];
  let e;
  return t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ae(t.attributes) : e = f.indices + ":" + ae(f.attributes) + ":" + f.mode, e;
}
function ae(f) {
  let t = "";
  const e = Object.keys(f).sort();
  for (let s = 0, n = e.length; s < n; s++)
    t += e[s] + ":" + f[e[s]] + ";";
  return t;
}
function $(f) {
  switch (f) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Ht(f) {
  return f.search(/\.jpe?g($|\?)/i) > 0 || f.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : f.search(/\.webp($|\?)/i) > 0 || f.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const kt = new K();
class Gt {
  constructor(t = {}, e = {}) {
    this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new ut(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = !1, r = -1;
    typeof navigator < "u" && (s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, n = navigator.userAgent.indexOf("Firefox") > -1, r = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || s || n && r < 98 ? this.textureLoader = new Ne(this.options.manager) : this.textureLoader = new Ie(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new le(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(t) {
    this.extensions = t;
  }
  setPlugins(t) {
    this.plugins = t;
  }
  parse(t, e) {
    const s = this, n = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(i) {
      const a = {
        scene: i[0][n.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      G(r, a, n), N(a, n), Promise.all(s._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a);
      })).then(function() {
        t(a);
      });
    }).catch(e);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const t = this.json.nodes || [], e = this.json.skins || [], s = this.json.meshes || [];
    for (let n = 0, r = e.length; n < r; n++) {
      const i = e[n].joints;
      for (let a = 0, o = i.length; a < o; a++)
        t[i[a]].isBone = !0;
    }
    for (let n = 0, r = t.length; n < r; n++) {
      const i = t[n];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (s[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(t, e) {
    e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(t, e, s) {
    if (t.refs[e] <= 1)
      return s;
    const n = s.clone(), r = (i, a) => {
      const o = this.associations.get(i);
      o != null && this.associations.set(a, o);
      for (const [c, u] of i.children.entries())
        r(u, a.children[c]);
    };
    return r(s, n), n.name += "_instance_" + t.uses[e]++, n;
  }
  _invokeOne(t) {
    const e = Object.values(this.plugins);
    e.push(this);
    for (let s = 0; s < e.length; s++) {
      const n = t(e[s]);
      if (n)
        return n;
    }
    return null;
  }
  _invokeAll(t) {
    const e = Object.values(this.plugins);
    e.unshift(this);
    const s = [];
    for (let n = 0; n < e.length; n++) {
      const r = t(e[n]);
      r && s.push(r);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(t, e) {
    const s = t + ":" + e;
    let n = this.cache.get(s);
    if (!n) {
      switch (t) {
        case "scene":
          n = this.loadScene(e);
          break;
        case "node":
          n = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(e);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(e);
          });
          break;
        case "accessor":
          n = this.loadAccessor(e);
          break;
        case "bufferView":
          n = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(e);
          });
          break;
        case "buffer":
          n = this.loadBuffer(e);
          break;
        case "material":
          n = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(e);
          });
          break;
        case "texture":
          n = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(e);
          });
          break;
        case "skin":
          n = this.loadSkin(e);
          break;
        case "animation":
          n = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(e);
          });
          break;
        case "camera":
          n = this.loadCamera(e);
          break;
        default:
          if (n = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(t, e);
          }), !n)
            throw new Error("Unknown type: " + t);
          break;
      }
      this.cache.add(s, n);
    }
    return n;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(t) {
    let e = this.cache.get(t);
    if (!e) {
      const s = this, n = this.json[t + (t === "mesh" ? "es" : "s")] || [];
      e = Promise.all(n.map(function(r, i) {
        return s.getDependency(t, i);
      })), this.cache.add(t, e);
    }
    return e;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(t) {
    const e = this.json.buffers[t], s = this.fileLoader;
    if (e.type && e.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
    if (e.uri === void 0 && t === 0)
      return Promise.resolve(this.extensions[A.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(r, i) {
      s.load(Q.resolveURL(e.uri, n.path), r, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(t) {
    const e = this.json.bufferViews[t];
    return this.getDependency("buffer", e.buffer).then(function(s) {
      const n = e.byteLength || 0, r = e.byteOffset || 0;
      return s.slice(r, r + n);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(t) {
    const e = this, s = this.json, n = this.json.accessors[t];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      const i = q[n.type], a = H[n.componentType], o = n.normalized === !0, c = new a(n.count * i);
      return Promise.resolve(new V(c, i, o));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const a = i[0], o = q[n.type], c = H[n.componentType], u = c.BYTES_PER_ELEMENT, l = u * o, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, g = n.normalized === !0;
      let T, p;
      if (h && h !== l) {
        const m = Math.floor(d / h), R = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + m + ":" + n.count;
        let x = e.cache.get(R);
        x || (T = new c(a, m * h, n.count * h / u), x = new Oe(T, h / u), e.cache.add(R, x)), p = new st(x, o, d % h / u, g);
      } else
        a === null ? T = new c(n.count * o) : T = new c(a, d, n.count * o), p = new V(T, o, g);
      if (n.sparse !== void 0) {
        const m = q.SCALAR, R = H[n.sparse.indices.componentType], x = n.sparse.indices.byteOffset || 0, E = n.sparse.values.byteOffset || 0, I = new R(i[1], x, n.sparse.count * m), w = new c(i[2], E, n.sparse.count * o);
        a !== null && (p = new V(p.array.slice(), p.itemSize, p.normalized));
        for (let L = 0, y = I.length; L < y; L++) {
          const F = I[L];
          if (p.setX(F, w[L * o]), o >= 2 && p.setY(F, w[L * o + 1]), o >= 3 && p.setZ(F, w[L * o + 2]), o >= 4 && p.setW(F, w[L * o + 3]), o >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(t) {
    const e = this.json, s = this.options, r = e.textures[t].source, i = e.images[r];
    let a = this.textureLoader;
    if (i.uri) {
      const o = s.manager.getHandler(i.uri);
      o !== null && (a = o);
    }
    return this.loadTextureImage(t, r, a);
  }
  loadTextureImage(t, e, s) {
    const n = this, r = this.json, i = r.textures[t], a = r.images[e], o = (a.uri || a.bufferView) + ":" + i.sampler;
    if (this.textureCache[o])
      return this.textureCache[o];
    const c = this.loadImageSource(e, s).then(function(u) {
      u.flipY = !1, u.name = i.name || a.name || "";
      const d = (r.samplers || {})[i.sampler] || {};
      return u.magFilter = ie[d.magFilter] || he, u.minFilter = ie[d.minFilter] || pe, u.wrapS = oe[d.wrapS] || Z, u.wrapT = oe[d.wrapT] || Z, n.associations.set(u, { textures: t }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = c, c;
  }
  loadImageSource(t, e) {
    const s = this, n = this.json, r = this.options;
    if (this.sourceCache[t] !== void 0)
      return this.sourceCache[t].then((l) => l.clone());
    const i = n.images[t], a = self.URL || self.webkitURL;
    let o = i.uri || "", c = !1;
    if (i.bufferView !== void 0)
      o = s.getDependency("bufferView", i.bufferView).then(function(l) {
        c = !0;
        const d = new Blob([l], { type: i.mimeType });
        return o = a.createObjectURL(d), o;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
    const u = Promise.resolve(o).then(function(l) {
      return new Promise(function(d, h) {
        let g = d;
        e.isImageBitmapLoader === !0 && (g = function(T) {
          const p = new te(T);
          p.needsUpdate = !0, d(p);
        }), e.load(Q.resolveURL(l, r.path), g, void 0, h);
      });
    }).then(function(l) {
      return c === !0 && a.revokeObjectURL(o), l.userData.mimeType = i.mimeType || Ht(i.uri), l;
    }).catch(function(l) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), l;
    });
    return this.sourceCache[t] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(t, e, s, n) {
    const r = this;
    return this.getDependency("texture", s.index).then(function(i) {
      if (!i)
        return null;
      if (s.texCoord !== void 0 && s.texCoord != 0 && !(e === "aoMap" && s.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + s.texCoord + " for texture " + e + " not yet supported."), r.extensions[A.KHR_TEXTURE_TRANSFORM]) {
        const a = s.extensions !== void 0 ? s.extensions[A.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = r.associations.get(i);
          i = r.extensions[A.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), r.associations.set(i, o);
        }
      }
      return n !== void 0 && (i.encoding = n), t[e] = i, i;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(t) {
    const e = t.geometry;
    let s = t.material;
    const n = e.attributes.tangent === void 0, r = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
    if (t.isPoints) {
      const a = "PointsMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new Ce(), X.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (t.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new Fe(), X.prototype.copy.call(o, s), o.color.copy(s.color), this.cache.add(a, o)), s = o;
    }
    if (n || r || i) {
      let a = "ClonedMaterial:" + s.uuid + ":";
      n && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), i && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = s.clone(), r && (o.vertexColors = !0), i && (o.flatShading = !0), n && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(s))), s = o;
    }
    s.aoMap && e.attributes.uv2 === void 0 && e.attributes.uv !== void 0 && e.setAttribute("uv2", e.attributes.uv), t.material = s;
  }
  getMaterialType() {
    return me;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(t) {
    const e = this, s = this.json, n = this.extensions, r = s.materials[t];
    let i;
    const a = {}, o = r.extensions || {}, c = [];
    if (o[A.KHR_MATERIALS_UNLIT]) {
      const l = n[A.KHR_MATERIALS_UNLIT];
      i = l.getMaterialType(), c.push(l.extendParams(a, r, e));
    } else {
      const l = r.pbrMetallicRoughness || {};
      if (a.color = new O(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && c.push(e.assignTexture(a, "map", l.baseColorTexture, U)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), c.push(e.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(t);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(t, a);
      })));
    }
    r.doubleSided === !0 && (a.side = De);
    const u = r.alphaMode || W.OPAQUE;
    if (u === W.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === W.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== B && (c.push(e.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new fe(1, 1), r.normalTexture.scale !== void 0)) {
      const l = r.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    return r.occlusionTexture !== void 0 && i !== B && (c.push(e.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== B && (a.emissive = new O().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && i !== B && c.push(e.assignTexture(a, "emissiveMap", r.emissiveTexture, U)), Promise.all(c).then(function() {
      const l = new i(a);
      return r.name && (l.name = r.name), N(l, r), e.associations.set(l, { materials: t }), r.extensions && G(n, l, r), l;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(t) {
    const e = Pe.sanitizeNodeName(t || "");
    let s = e;
    for (let n = 1; this.nodeNamesUsed[s]; ++n)
      s = e + "_" + n;
    return this.nodeNamesUsed[s] = !0, s;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(t) {
    const e = this, s = this.extensions, n = this.primitiveCache;
    function r(a) {
      return s[A.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, e).then(function(o) {
        return ce(o, a, e);
      });
    }
    const i = [];
    for (let a = 0, o = t.length; a < o; a++) {
      const c = t[a], u = Pt(c), l = n[u];
      if (l)
        i.push(l.promise);
      else {
        let d;
        c.extensions && c.extensions[A.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = ce(new He(), c, e), n[u] = { primitive: c, promise: d }, i.push(d);
      }
    }
    return Promise.all(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(t) {
    const e = this, s = this.json, n = this.extensions, r = s.meshes[t], i = r.primitives, a = [];
    for (let o = 0, c = i.length; o < c; o++) {
      const u = i[o].material === void 0 ? Ct(this.cache) : this.getDependency("material", i[o].material);
      a.push(u);
    }
    return a.push(e.loadGeometries(i)), Promise.all(a).then(function(o) {
      const c = o.slice(0, o.length - 1), u = o[o.length - 1], l = [];
      for (let h = 0, g = u.length; h < g; h++) {
        const T = u[h], p = i[h];
        let m;
        const R = c[h];
        if (p.mode === _.TRIANGLES || p.mode === _.TRIANGLE_STRIP || p.mode === _.TRIANGLE_FAN || p.mode === void 0)
          m = r.isSkinnedMesh === !0 ? new ke(T, R) : new Ge(T, R), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === _.TRIANGLE_STRIP ? m.geometry = se(m.geometry, ue) : p.mode === _.TRIANGLE_FAN && (m.geometry = se(m.geometry, Y));
        else if (p.mode === _.LINES)
          m = new Be(T, R);
        else if (p.mode === _.LINE_STRIP)
          m = new Ue(T, R);
        else if (p.mode === _.LINE_LOOP)
          m = new ve(T, R);
        else if (p.mode === _.POINTS)
          m = new je(T, R);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Dt(m, r), m.name = e.createUniqueName(r.name || "mesh_" + t), N(m, r), p.extensions && G(n, m, p), e.assignFinalMaterial(m), l.push(m);
      }
      for (let h = 0, g = l.length; h < g; h++)
        e.associations.set(l[h], {
          meshes: t,
          primitives: h
        });
      if (l.length === 1)
        return l[0];
      const d = new z();
      e.associations.set(d, { meshes: t });
      for (let h = 0, g = l.length; h < g; h++)
        d.add(l[h]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(t) {
    let e;
    const s = this.json.cameras[t], n = s[s.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? e = new Ke(Ve.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (e = new Xe(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (e.name = this.createUniqueName(s.name)), N(e, s), Promise.resolve(e);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(t) {
    const e = this.json.skins[t], s = [];
    for (let n = 0, r = e.joints.length; n < r; n++)
      s.push(this._loadNodeShallow(e.joints[n]));
    return e.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", e.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const r = n.pop(), i = n, a = [], o = [];
      for (let c = 0, u = i.length; c < u; c++) {
        const l = i[c];
        if (l) {
          a.push(l);
          const d = new K();
          r !== null && d.fromArray(r.array, c * 16), o.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[c]);
      }
      return new ze(a, o);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(t) {
    const s = this.json.animations[t], n = [], r = [], i = [], a = [], o = [];
    for (let c = 0, u = s.channels.length; c < u; c++) {
      const l = s.channels[c], d = s.samplers[l.sampler], h = l.target, g = h.node, T = s.parameters !== void 0 ? s.parameters[d.input] : d.input, p = s.parameters !== void 0 ? s.parameters[d.output] : d.output;
      n.push(this.getDependency("node", g)), r.push(this.getDependency("accessor", T)), i.push(this.getDependency("accessor", p)), a.push(d), o.push(h);
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(r),
      Promise.all(i),
      Promise.all(a),
      Promise.all(o)
    ]).then(function(c) {
      const u = c[0], l = c[1], d = c[2], h = c[3], g = c[4], T = [];
      for (let m = 0, R = u.length; m < R; m++) {
        const x = u[m], E = l[m], I = d[m], w = h[m], L = g[m];
        if (x === void 0)
          continue;
        x.updateMatrix();
        let y;
        switch (b[L.path]) {
          case b.weights:
            y = it;
            break;
          case b.rotation:
            y = ne;
            break;
          case b.position:
          case b.scale:
          default:
            y = rt;
            break;
        }
        const F = x.name ? x.name : x.uuid, xe = w.interpolation !== void 0 ? Ot[w.interpolation] : Ae, v = [];
        b[L.path] === b.weights ? x.traverse(function(S) {
          S.morphTargetInfluences && v.push(S.name ? S.name : S.uuid);
        }) : v.push(F);
        let D = I.array;
        if (I.normalized) {
          const S = $(D.constructor), j = new Float32Array(D.length);
          for (let M = 0, ee = D.length; M < ee; M++)
            j[M] = D[M] * S;
          D = j;
        }
        for (let S = 0, j = v.length; S < j; S++) {
          const M = new y(
            v[S] + "." + b[L.path],
            E.array,
            D,
            xe
          );
          w.interpolation === "CUBICSPLINE" && (M.createInterpolant = function(Re) {
            const Le = this instanceof ne ? It : Ee;
            return new Le(this.times, this.values, this.getValueSize() / 3, Re);
          }, M.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), T.push(M);
        }
      }
      const p = s.name ? s.name : "animation_" + t;
      return new qe(p, void 0, T);
    });
  }
  createNodeMesh(t) {
    const e = this.json, s = this, n = e.nodes[t];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(r) {
      const i = s._getNodeRef(s.meshCache, n.mesh, r);
      return n.weights !== void 0 && i.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, c = n.weights.length; o < c; o++)
            a.morphTargetInfluences[o] = n.weights[o];
      }), i;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(t) {
    const e = this.json, s = this, n = e.nodes[t], r = s._loadNodeShallow(t), i = [], a = n.children || [];
    for (let c = 0, u = a.length; c < u; c++)
      i.push(s.getDependency("node", a[c]));
    const o = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      r,
      Promise.all(i),
      o
    ]).then(function(c) {
      const u = c[0], l = c[1], d = c[2];
      d !== null && u.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, kt);
      });
      for (let h = 0, g = l.length; h < g; h++)
        u.add(l[h]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(t) {
    const e = this.json, s = this.extensions, n = this;
    if (this.nodeCache[t] !== void 0)
      return this.nodeCache[t];
    const r = e.nodes[t], i = r.name ? n.createUniqueName(r.name) : "", a = [], o = n._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(t);
    });
    return o && a.push(o), r.camera !== void 0 && a.push(n.getDependency("camera", r.camera).then(function(c) {
      return n._getNodeRef(n.cameraCache, r.camera, c);
    })), n._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(t);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[t] = Promise.all(a).then(function(c) {
      let u;
      if (r.isBone === !0 ? u = new We() : c.length > 1 ? u = new z() : c.length === 1 ? u = c[0] : u = new de(), u !== c[0])
        for (let l = 0, d = c.length; l < d; l++)
          u.add(c[l]);
      if (r.name && (u.userData.name = r.name, u.name = i), N(u, r), r.extensions && G(s, u, r), r.matrix !== void 0) {
        const l = new K();
        l.fromArray(r.matrix), u.applyMatrix4(l);
      } else
        r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      return n.associations.has(u) || n.associations.set(u, {}), n.associations.get(u).nodes = t, u;
    }), this.nodeCache[t];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(t) {
    const e = this.extensions, s = this.json.scenes[t], n = this, r = new z();
    s.name && (r.name = n.createUniqueName(s.name)), N(r, s), s.extensions && G(e, r, s);
    const i = s.nodes || [], a = [];
    for (let o = 0, c = i.length; o < c; o++)
      a.push(n.getDependency("node", i[o]));
    return Promise.all(a).then(function(o) {
      for (let u = 0, l = o.length; u < l; u++)
        r.add(o[u]);
      const c = (u) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof X || d instanceof te) && l.set(d, h);
        return u.traverse((d) => {
          const h = n.associations.get(d);
          h != null && l.set(d, h);
        }), l;
      };
      return n.associations = c(r), r;
    });
  }
}
function Bt(f, t, e) {
  const s = t.attributes, n = new ot();
  if (s.POSITION !== void 0) {
    const a = e.json.accessors[s.POSITION], o = a.min, c = a.max;
    if (o !== void 0 && c !== void 0) {
      if (n.set(
        new P(o[0], o[1], o[2]),
        new P(c[0], c[1], c[2])
      ), a.normalized) {
        const u = $(H[a.componentType]);
        n.min.multiplyScalar(u), n.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = t.targets;
  if (r !== void 0) {
    const a = new P(), o = new P();
    for (let c = 0, u = r.length; c < u; c++) {
      const l = r[c];
      if (l.POSITION !== void 0) {
        const d = e.json.accessors[l.POSITION], h = d.min, g = d.max;
        if (h !== void 0 && g !== void 0) {
          if (o.setX(Math.max(Math.abs(h[0]), Math.abs(g[0]))), o.setY(Math.max(Math.abs(h[1]), Math.abs(g[1]))), o.setZ(Math.max(Math.abs(h[2]), Math.abs(g[2]))), d.normalized) {
            const T = $(H[d.componentType]);
            o.multiplyScalar(T);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  f.boundingBox = n;
  const i = new at();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, f.boundingSphere = i;
}
function ce(f, t, e) {
  const s = t.attributes, n = [];
  function r(i, a) {
    return e.getDependency("accessor", i).then(function(o) {
      f.setAttribute(a, o);
    });
  }
  for (const i in s) {
    const a = J[i] || i.toLowerCase();
    a in f.attributes || n.push(r(s[i], a));
  }
  if (t.indices !== void 0 && !f.index) {
    const i = e.getDependency("accessor", t.indices).then(function(a) {
      f.setIndex(a);
    });
    n.push(i);
  }
  return N(f, t), Bt(f, t, e), Promise.all(n).then(function() {
    return t.targets !== void 0 ? Ft(f, t.targets, e) : f;
  });
}
export {
  vt as GLTFLoader
};
