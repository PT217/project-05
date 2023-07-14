import { L as M, m as f, F as A, G as p, n as u, o as m, A as x, p as b, j as C, q as c, b as g, T, C as _ } from "./index-20e94914.mjs";
class ce extends M {
  constructor(t) {
    super(t), this.debug = !1, this.group = null, this.materials = [], this.meshes = [];
  }
  /**
   * Load 3ds file from url.
   *
   * @method load
   * @param {[type]} url URL for the file.
   * @param {Function} onLoad onLoad callback, receives group Object3D as argument.
   * @param {Function} onProgress onProgress callback.
   * @param {Function} onError onError callback.
   */
  load(t, s, e, a) {
    const r = this, n = this.path === "" ? f.extractUrlBase(t) : this.path, i = new A(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(t, function(o) {
      try {
        s(r.parse(o, n));
      } catch (d) {
        a ? a(d) : console.error(d), r.manager.itemError(t);
      }
    }, e, a);
  }
  /**
   * Parse arraybuffer data and load 3ds file.
   *
   * @method parse
   * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
   * @param {String} path Path for external resources.
   * @return {Group} Group loaded from 3ds file.
   */
  parse(t, s) {
    this.group = new p(), this.materials = [], this.meshes = [], this.readFile(t, s);
    for (let e = 0; e < this.meshes.length; e++)
      this.group.add(this.meshes[e]);
    return this.group;
  }
  /**
   * Decode file content to read 3ds data.
   *
   * @method readFile
   * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
   * @param {String} path Path for external resources.
   */
  readFile(t, s) {
    const e = new DataView(t), a = new h(e, 0, this.debugMessage);
    if (a.id === E || a.id === w || a.id === F) {
      let r = a.readChunk();
      for (; r; ) {
        if (r.id === I) {
          const n = r.readDWord();
          this.debugMessage("3DS file version: " + n);
        } else
          r.id === P ? this.readMeshData(r, s) : this.debugMessage("Unknown main chunk: " + r.hexId);
        r = a.readChunk();
      }
    }
    this.debugMessage("Parsed " + this.meshes.length + " meshes");
  }
  /**
   * Read mesh data chunk.
   *
   * @method readMeshData
   * @param {Chunk} chunk to read mesh from
   * @param {String} path Path for external resources.
   */
  readMeshData(t, s) {
    let e = t.readChunk();
    for (; e; ) {
      if (e.id === N) {
        const a = +e.readDWord();
        this.debugMessage("Mesh Version: " + a);
      } else if (e.id === U) {
        const a = e.readFloat();
        this.debugMessage("Master scale: " + a), this.group.scale.set(a, a, a);
      } else
        e.id === ae ? (this.debugMessage("Named Object"), this.readNamedObject(e)) : e.id === B ? (this.debugMessage("Material"), this.readMaterialEntry(e, s)) : this.debugMessage("Unknown MDATA chunk: " + e.hexId);
      e = t.readChunk();
    }
  }
  /**
   * Read named object chunk.
   *
   * @method readNamedObject
   * @param {Chunk} chunk Chunk in use.
   */
  readNamedObject(t) {
    const s = t.readString();
    let e = t.readChunk();
    for (; e; ) {
      if (e.id === ie) {
        const a = this.readMesh(e);
        a.name = s, this.meshes.push(a);
      } else
        this.debugMessage("Unknown named object chunk: " + e.hexId);
      e = t.readChunk();
    }
  }
  /**
   * Read material data chunk and add it to the material list.
   *
   * @method readMaterialEntry
   * @param {Chunk} chunk Chunk in use.
   * @param {String} path Path for external resources.
   */
  readMaterialEntry(t, s) {
    let e = t.readChunk();
    const a = new u();
    for (; e; ) {
      if (e.id === L)
        a.name = e.readString(), this.debugMessage("   Name: " + a.name);
      else if (e.id === X)
        this.debugMessage("   Wireframe"), a.wireframe = !0;
      else if (e.id === q) {
        const r = e.readByte();
        a.wireframeLinewidth = r, this.debugMessage("   Wireframe Thickness: " + r);
      } else if (e.id === Y)
        a.side = m, this.debugMessage("   DoubleSided");
      else if (e.id === j)
        this.debugMessage("   Additive Blending"), a.blending = x;
      else if (e.id === v)
        this.debugMessage("   Diffuse Color"), a.color = this.readColor(e);
      else if (e.id === G)
        this.debugMessage("   Specular Color"), a.specular = this.readColor(e);
      else if (e.id === W)
        this.debugMessage("   Ambient color"), a.color = this.readColor(e);
      else if (e.id === V) {
        const r = this.readPercentage(e);
        a.shininess = r * 100, this.debugMessage("   Shininess : " + r);
      } else if (e.id === H) {
        const r = this.readPercentage(e);
        a.opacity = 1 - r, this.debugMessage("  Transparency : " + r), a.transparent = a.opacity < 1;
      } else
        e.id === z ? (this.debugMessage("   ColorMap"), a.map = this.readMap(e, s)) : e.id === Z ? (this.debugMessage("   BumpMap"), a.bumpMap = this.readMap(e, s)) : e.id === J ? (this.debugMessage("   OpacityMap"), a.alphaMap = this.readMap(e, s)) : e.id === K ? (this.debugMessage("   SpecularMap"), a.specularMap = this.readMap(e, s)) : this.debugMessage("   Unknown material chunk: " + e.hexId);
      e = t.readChunk();
    }
    this.materials[a.name] = a;
  }
  /**
   * Read mesh data chunk.
   *
   * @method readMesh
   * @param {Chunk} chunk Chunk in use.
   * @return {Mesh} The parsed mesh.
   */
  readMesh(t) {
    let s = t.readChunk();
    const e = new b(), a = new u(), r = new C(e, a);
    for (r.name = "mesh"; s; ) {
      if (s.id === re) {
        const n = s.readWord();
        this.debugMessage("   Vertex: " + n);
        const i = [];
        for (let o = 0; o < n; o++)
          i.push(s.readFloat()), i.push(s.readFloat()), i.push(s.readFloat());
        e.setAttribute("position", new c(i, 3));
      } else if (s.id === ne)
        this.readFaceArray(s, r);
      else if (s.id === de) {
        const n = s.readWord();
        this.debugMessage("   UV: " + n);
        const i = [];
        for (let o = 0; o < n; o++)
          i.push(s.readFloat()), i.push(s.readFloat());
        e.setAttribute("uv", new c(i, 2));
      } else if (s.id === he) {
        this.debugMessage("   Tranformation Matrix (TODO)");
        const n = [];
        for (let d = 0; d < 12; d++)
          n[d] = s.readFloat();
        const i = new g();
        i.elements[0] = n[0], i.elements[1] = n[6], i.elements[2] = n[3], i.elements[3] = n[9], i.elements[4] = n[2], i.elements[5] = n[8], i.elements[6] = n[5], i.elements[7] = n[11], i.elements[8] = n[1], i.elements[9] = n[7], i.elements[10] = n[4], i.elements[11] = n[10], i.elements[12] = 0, i.elements[13] = 0, i.elements[14] = 0, i.elements[15] = 1, i.transpose();
        const o = new g();
        o.copy(i).invert(), e.applyMatrix4(o), i.decompose(r.position, r.quaternion, r.scale);
      } else
        this.debugMessage("   Unknown mesh chunk: " + s.hexId);
      s = t.readChunk();
    }
    return e.computeVertexNormals(), r;
  }
  /**
   * Read face array data chunk.
   *
   * @method readFaceArray
   * @param {Chunk} chunk Chunk in use.
   * @param {Mesh} mesh Mesh to be filled with the data read.
   */
  readFaceArray(t, s) {
    const e = t.readWord();
    this.debugMessage("   Faces: " + e);
    const a = [];
    for (let i = 0; i < e; ++i)
      a.push(t.readWord(), t.readWord(), t.readWord()), t.readWord();
    s.geometry.setIndex(a);
    let r = 0, n = 0;
    for (; !t.endOfChunk; ) {
      const i = t.readChunk();
      if (i.id === oe) {
        this.debugMessage("      Material Group");
        const o = this.readMaterialGroup(i), d = o.index.length * 3;
        s.geometry.addGroup(n, d, r), n += d, r++;
        const l = this.materials[o.name];
        Array.isArray(s.material) === !1 && (s.material = []), l !== void 0 && s.material.push(l);
      } else
        this.debugMessage("      Unknown face array chunk: " + i.hexId);
    }
    s.material.length === 1 && (s.material = s.material[0]);
  }
  /**
   * Read texture map data chunk.
   *
   * @method readMap
   * @param {Chunk} chunk Chunk in use.
   * @param {String} path Path for external resources.
   * @return {Texture} Texture read from this data chunk.
   */
  readMap(t, s) {
    let e = t.readChunk(), a = {};
    const r = new T(this.manager);
    for (r.setPath(this.resourcePath || s).setCrossOrigin(this.crossOrigin); e; ) {
      if (e.id === Q) {
        const n = e.readString();
        a = r.load(n), this.debugMessage("      File: " + s + n);
      } else
        e.id === se ? (a.offset.x = e.readFloat(), this.debugMessage("      OffsetX: " + a.offset.x)) : e.id === te ? (a.offset.y = e.readFloat(), this.debugMessage("      OffsetY: " + a.offset.y)) : e.id === $ ? (a.repeat.x = e.readFloat(), this.debugMessage("      RepeatX: " + a.repeat.x)) : e.id === ee ? (a.repeat.y = e.readFloat(), this.debugMessage("      RepeatY: " + a.repeat.y)) : this.debugMessage("      Unknown map chunk: " + e.hexId);
      e = t.readChunk();
    }
    return a;
  }
  /**
   * Read material group data chunk.
   *
   * @method readMaterialGroup
   * @param {Chunk} chunk Chunk in use.
   * @return {Object} Object with name and index of the object.
   */
  readMaterialGroup(t) {
    const s = t.readString(), e = t.readWord();
    this.debugMessage("         Name: " + s), this.debugMessage("         Faces: " + e);
    const a = [];
    for (let r = 0; r < e; ++r)
      a.push(t.readWord());
    return { name: s, index: a };
  }
  /**
   * Read a color value.
   *
   * @method readColor
   * @param {Chunk} chunk Chunk.
   * @return {Color} Color value read..
   */
  readColor(t) {
    const s = t.readChunk(), e = new _();
    if (s.id === y || s.id === O) {
      const a = s.readByte(), r = s.readByte(), n = s.readByte();
      e.setRGB(a / 255, r / 255, n / 255), this.debugMessage("      Color: " + e.r + ", " + e.g + ", " + e.b);
    } else if (s.id === S || s.id === k) {
      const a = s.readFloat(), r = s.readFloat(), n = s.readFloat();
      e.setRGB(a, r, n), this.debugMessage("      Color: " + e.r + ", " + e.g + ", " + e.b);
    } else
      this.debugMessage("      Unknown color chunk: " + s.hexId);
    return e;
  }
  /**
   * Read percentage value.
   *
   * @method readPercentage
   * @param {Chunk} chunk Chunk to read data from.
   * @return {Number} Data read from the dataview.
   */
  readPercentage(t) {
    const s = t.readChunk();
    switch (s.id) {
      case D:
        return s.readShort() / 100;
      case R:
        return s.readFloat();
      default:
        return this.debugMessage("      Unknown percentage chunk: " + s.hexId), 0;
    }
  }
  /**
   * Print debug message to the console.
   *
   * Is controlled by a flag to show or hide debug messages.
   *
   * @method debugMessage
   * @param {Object} message Debug message to print to the console.
   */
  debugMessage(t) {
    this.debug && console.log(t);
  }
}
class h {
  /**
   * Create a new chunk
   *
   * @class Chunk
   * @param {DataView} data DataView to read from.
   * @param {Number} position in data.
   * @param {Function} debugMessage logging callback.
   */
  constructor(t, s, e) {
    this.data = t, this.offset = s, this.position = s, this.debugMessage = e, this.debugMessage instanceof Function && (this.debugMessage = function() {
    }), this.id = this.readWord(), this.size = this.readDWord(), this.end = this.offset + this.size, this.end > t.byteLength && this.debugMessage("Bad chunk size for chunk at " + s);
  }
  /**
   * read a sub cchunk.
   *
   * @method readChunk
   * @return {Chunk | null} next sub chunk
   */
  readChunk() {
    if (this.endOfChunk)
      return null;
    try {
      const t = new h(this.data, this.position, this.debugMessage);
      return this.position += t.size, t;
    } catch {
      return this.debugMessage("Unable to read chunk at " + this.position), null;
    }
  }
  /**
   * return the ID of this chunk as Hex
   *
   * @method idToString
   * @return {String} hex-string of id
   */
  get hexId() {
    return this.id.toString(16);
  }
  get endOfChunk() {
    return this.position >= this.end;
  }
  /**
   * Read byte value.
   *
   * @method readByte
   * @return {Number} Data read from the dataview.
   */
  readByte() {
    const t = this.data.getUint8(this.position, !0);
    return this.position += 1, t;
  }
  /**
   * Read 32 bit float value.
   *
   * @method readFloat
   * @return {Number} Data read from the dataview.
   */
  readFloat() {
    try {
      const t = this.data.getFloat32(this.position, !0);
      return this.position += 4, t;
    } catch (t) {
      return this.debugMessage(t + " " + this.position + " " + this.data.byteLength), 0;
    }
  }
  /**
   * Read 32 bit signed integer value.
   *
   * @method readInt
   * @return {Number} Data read from the dataview.
   */
  readInt() {
    const t = this.data.getInt32(this.position, !0);
    return this.position += 4, t;
  }
  /**
   * Read 16 bit signed integer value.
   *
   * @method readShort
   * @return {Number} Data read from the dataview.
   */
  readShort() {
    const t = this.data.getInt16(this.position, !0);
    return this.position += 2, t;
  }
  /**
   * Read 64 bit unsigned integer value.
   *
   * @method readDWord
   * @return {Number} Data read from the dataview.
   */
  readDWord() {
    const t = this.data.getUint32(this.position, !0);
    return this.position += 4, t;
  }
  /**
   * Read 32 bit unsigned integer value.
   *
   * @method readWord
   * @return {Number} Data read from the dataview.
   */
  readWord() {
    const t = this.data.getUint16(this.position, !0);
    return this.position += 2, t;
  }
  /**
   * Read NULL terminated ASCII string value from chunk-pos.
   *
   * @method readString
   * @return {String} Data read from the dataview.
   */
  readString() {
    let t = "", s = this.readByte();
    for (; s; )
      t += String.fromCharCode(s), s = this.readByte();
    return t;
  }
}
const F = 19789, E = 15786, w = 49725, I = 2, S = 16, y = 17, O = 18, k = 19, D = 48, R = 49, P = 15677, N = 15678, U = 256, B = 45055, L = 40960, W = 40976, v = 40992, G = 41008, V = 41024, H = 41040, Y = 41089, j = 41091, X = 41093, q = 41095, z = 41472, J = 41488, Z = 41520, K = 41476, Q = 41728, $ = 41812, ee = 41814, se = 41816, te = 41818, ae = 16384, ie = 16640, re = 16656, ne = 16672, oe = 16688, de = 16704, he = 16736;
export {
  ce as TDSLoader
};
