import { L as _e, M as j, h as re, F as Z, ao as Fe, ap as De, aq as Ie, C as Se, a3 as U, p as Ne, r as Y, W as ge, j as Ae, b as Oe, G as Ve, ar as pe } from "./index-20e94914.mjs";
const ae = 0, se = 1, ne = 2, oe = 3, ie = 4, le = 5, $ = 0, Re = 1, Pe = 2, Be = 3, je = 4, Ue = 5, ce = 6, P = "16", W = "24", z = new U(), q = new U();
class ue extends Fe {
  constructor(e) {
    super({
      uniforms: De.merge([
        Ie.fog,
        {
          diffuse: {
            value: new Se()
          },
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: (
        /* glsl */
        `
				attribute vec3 control0;
				attribute vec3 control1;
				attribute vec3 direction;
				varying float discardFlag;

				#include <common>
				#include <color_pars_vertex>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>
				void main() {
					#include <color_vertex>

					vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

					// Transform the line segment ends and control points into camera clip space
					vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
					vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
					vec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					vec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );

					c0.xy /= c0.w;
					c1.xy /= c1.w;
					p0.xy /= p0.w;
					p1.xy /= p1.w;

					// Get the direction of the segment and an orthogonal vector
					vec2 dir = p1.xy - p0.xy;
					vec2 norm = vec2( -dir.y, dir.x );

					// Get control point directions from the line
					vec2 c0dir = c0.xy - p1.xy;
					vec2 c1dir = c1.xy - p1.xy;

					// If the vectors to the controls points are pointed in different directions away
					// from the line segment then the line should not be drawn.
					float d0 = dot( normalize( norm ), normalize( c0dir ) );
					float d1 = dot( normalize( norm ), normalize( c1dir ) );
					discardFlag = float( sign( d0 ) != sign( d1 ) );

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>
				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `
			uniform vec3 diffuse;
			uniform float opacity;
			varying float discardFlag;

			#include <common>
			#include <color_pars_fragment>
			#include <fog_pars_fragment>
			#include <logdepthbuf_pars_fragment>
			#include <clipping_planes_pars_fragment>
			void main() {

				if ( discardFlag > 0.5 ) discard;

				#include <clipping_planes_fragment>
				vec3 outgoingLight = vec3( 0.0 );
				vec4 diffuseColor = vec4( diffuse, opacity );
				#include <logdepthbuf_fragment>
				#include <color_fragment>
				outgoingLight = diffuseColor.rgb; // simple shader
				gl_FragColor = vec4( outgoingLight, diffuseColor.a );
				#include <tonemapping_fragment>
				#include <encodings_fragment>
				#include <fog_fragment>
				#include <premultiplied_alpha_fragment>
			}
			`
      )
    }), Object.defineProperties(this, {
      opacity: {
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(r) {
          this.uniforms.opacity.value = r;
        }
      },
      color: {
        get: function() {
          return this.uniforms.diffuse.value;
        }
      }
    }), this.setValues(e), this.isLDrawConditionalLineMaterial = !0;
  }
}
class Ge extends ge {
  constructor(e, r) {
    super(e, r), this.isConditionalLine = !0;
  }
}
function We(y) {
  for (let e = 0, r = y.length; e < r; e++) {
    const t = y[e], s = t.vertices, d = s[0], u = s[1], n = s[2];
    z.subVectors(u, d), q.subVectors(n, u), t.faceNormal = new U().crossVectors(z, q).normalize();
  }
}
const he = new pe();
function Ye(y, e, r = !1) {
  const t = 100.00000001000001;
  function s(a) {
    const M = ~~(a.x * t), p = ~~(a.y * t), g = ~~(a.z * t);
    return `${M},${p},${g}`;
  }
  function d(a, M) {
    return `${s(a)}_${s(M)}`;
  }
  function u(a, M, p) {
    p.direction.subVectors(M, a).normalize();
    const g = a.dot(p.direction);
    return p.origin.copy(a).addScaledVector(p.direction, -g), p;
  }
  function n(a) {
    return d(a.origin, a.direction);
  }
  const h = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), k = {}, E = [];
  for (let a = 0, M = e.length; a < M; a++) {
    const g = e[a].vertices, i = g[0], m = g[1];
    if (h.add(d(i, m)), h.add(d(m, i)), r) {
      const f = u(i, m, new pe()), x = n(f);
      if (!l.has(x)) {
        u(m, i, f);
        const _ = n(f), I = {
          ray: f,
          distances: []
        };
        l.set(x, I), l.set(_, I);
      }
      const v = l.get(x);
      let b = v.ray.direction.dot(i), T = v.ray.direction.dot(m);
      b > T && ([b, T] = [T, b]), v.distances.push(b, T);
    }
  }
  for (let a = 0, M = y.length; a < M; a++) {
    const p = y[a], g = p.vertices, i = g.length;
    for (let m = 0; m < i; m++) {
      const f = m, x = (m + 1) % i, v = g[f], b = g[x], T = d(v, b);
      if (h.has(T))
        continue;
      if (r) {
        u(v, b, he);
        const I = n(he);
        if (l.has(I)) {
          const F = l.get(I), { ray: w, distances: o } = F;
          let L = w.direction.dot(v), C = w.direction.dot(b);
          L > C && ([L, C] = [C, L]);
          let c = !1;
          for (let D = 0, S = o.length; D < S; D += 2)
            if (L >= o[D] && C <= o[D + 1]) {
              c = !0;
              break;
            }
          if (c)
            continue;
        }
      }
      const _ = {
        index: f,
        tri: p
      };
      k[T] = _;
    }
  }
  for (; ; ) {
    let a = null;
    for (const p in k) {
      a = k[p];
      break;
    }
    if (a === null)
      break;
    const M = [a];
    for (; M.length > 0; ) {
      const p = M.pop().tri, g = p.vertices, i = p.normals, m = p.faceNormal, f = g.length;
      for (let x = 0; x < f; x++) {
        const v = x, b = (x + 1) % f, T = g[v], _ = g[b], I = d(T, _);
        delete k[I];
        const F = d(_, T), w = k[F];
        if (w) {
          const o = w.tri, L = w.index, C = o.normals, c = C.length, D = o.faceNormal;
          if (Math.abs(o.faceNormal.dot(p.faceNormal)) < 0.25)
            continue;
          F in k && (M.push(w), delete k[F]);
          const S = (L + 1) % c;
          i[v] && C[S] && i[v] !== C[S] && (C[S].norm.add(i[v].norm), i[v].norm = C[S].norm);
          let A = i[v] || C[S];
          A === null && (A = { norm: new U() }, E.push(A.norm)), i[v] === null && (i[v] = A, A.norm.add(m)), C[S] === null && (C[S] = A, A.norm.add(D)), i[b] && C[L] && i[b] !== C[L] && (C[L].norm.add(i[b].norm), i[b].norm = C[L].norm);
          let N = i[b] || C[L];
          N === null && (N = { norm: new U() }, E.push(N.norm)), i[b] === null && (i[b] = N, N.norm.add(m)), C[L] === null && (C[L] = N, N.norm.add(D));
        }
      }
    }
  }
  for (let a = 0, M = E.length; a < M; a++)
    E[a].normalize();
}
function de(y) {
  return y === "Part" || y === "Unofficial_Part";
}
function He(y) {
  return /primitive/i.test(y) || y === "Subpart";
}
class G {
  constructor(e, r) {
    this.line = e, this.lineLength = e.length, this.currentCharIndex = 0, this.currentChar = " ", this.lineNumber = r;
  }
  seekNonSpace() {
    for (; this.currentCharIndex < this.lineLength; ) {
      if (this.currentChar = this.line.charAt(this.currentCharIndex), this.currentChar !== " " && this.currentChar !== "	")
        return;
      this.currentCharIndex++;
    }
  }
  getToken() {
    const e = this.currentCharIndex++;
    for (; this.currentCharIndex < this.lineLength && (this.currentChar = this.line.charAt(this.currentCharIndex), !(this.currentChar === " " || this.currentChar === "	")); )
      this.currentCharIndex++;
    const r = this.currentCharIndex;
    return this.seekNonSpace(), this.line.substring(e, r);
  }
  getVector() {
    return new U(parseFloat(this.getToken()), parseFloat(this.getToken()), parseFloat(this.getToken()));
  }
  getRemainingString() {
    return this.line.substring(this.currentCharIndex, this.lineLength);
  }
  isAtTheEnd() {
    return this.currentCharIndex >= this.lineLength;
  }
  setToEnd() {
    this.currentCharIndex = this.lineLength;
  }
  getLineNumberString() {
    return this.lineNumber >= 0 ? " at line " + this.lineNumber : "";
  }
}
class ze {
  constructor(e) {
    this.loader = e, this._cache = {};
  }
  cloneResult(e) {
    const r = {};
    return r.faces = e.faces.map((t) => ({
      colorCode: t.colorCode,
      material: t.material,
      vertices: t.vertices.map((s) => s.clone()),
      normals: t.normals.map(() => null),
      faceNormal: null
    })), r.conditionalSegments = e.conditionalSegments.map((t) => ({
      colorCode: t.colorCode,
      material: t.material,
      vertices: t.vertices.map((s) => s.clone()),
      controlPoints: t.controlPoints.map((s) => s.clone())
    })), r.lineSegments = e.lineSegments.map((t) => ({
      colorCode: t.colorCode,
      material: t.material,
      vertices: t.vertices.map((s) => s.clone())
    })), r.type = e.type, r.category = e.category, r.keywords = e.keywords, r.author = e.author, r.subobjects = e.subobjects, r.fileName = e.fileName, r.totalFaces = e.totalFaces, r.startingBuildingStep = e.startingBuildingStep, r.materials = e.materials, r.group = null, r;
  }
  async fetchData(e) {
    let r = !1, t = $;
    for (; t !== ce; ) {
      let s = e;
      switch (t) {
        case Be:
          t = t + 1;
          break;
        case $:
          s = "parts/" + s, t = t + 1;
          break;
        case Re:
          s = "p/" + s, t = t + 1;
          break;
        case Pe:
          s = "models/" + s, t = t + 1;
          break;
        case je:
          s = e.substring(0, e.lastIndexOf("/") + 1) + s, t = t + 1;
          break;
        case Ue:
          r ? t = ce : (e = e.toLowerCase(), s = e, r = !0, t = $);
          break;
      }
      const d = this.loader, u = new Z(d.manager);
      u.setPath(d.partsLibraryPath), u.setRequestHeader(d.requestHeader), u.setWithCredentials(d.withCredentials);
      try {
        return await u.loadAsync(s);
      } catch {
        continue;
      }
    }
    throw new Error('LDrawLoader: Subobject "' + e + '" could not be loaded.');
  }
  parse(e, r = null) {
    const t = this.loader, s = [], d = [], u = [], n = [], h = {}, l = (F) => h[F] || null;
    let k = "Model", E = null, a = null, M = null, p = 0;
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`));
    const g = e.split(`
`), i = g.length;
    let m = !1, f = null, x = null, v = !1, b = !0, T = !1, _ = !0, I = !1;
    for (let F = 0; F < i; F++) {
      const w = g[F];
      if (w.length === 0)
        continue;
      if (m) {
        w.startsWith("0 FILE ") ? (this.setData(f, x), f = w.substring(7), x = "") : x += w + `
`;
        continue;
      }
      const o = new G(w, F + 1);
      if (o.seekNonSpace(), o.isAtTheEnd())
        continue;
      const L = o.getToken();
      let C, c, D, S, A, N, O, R, H, J, Q;
      switch (L) {
        case "0":
          const ee = o.getToken();
          if (ee)
            switch (ee) {
              case "!LDRAW_ORG":
                k = o.getToken();
                break;
              case "!COLOUR":
                C = t.parseColorMetaDirective(o), C ? h[C.userData.code] = C : console.warn("LDrawLoader: Error parsing material" + o.getLineNumberString());
                break;
              case "!CATEGORY":
                E = o.getToken();
                break;
              case "!KEYWORDS":
                const te = o.getRemainingString().split(",");
                te.length > 0 && (a || (a = []), te.forEach(function(B) {
                  a.push(B.trim());
                }));
                break;
              case "FILE":
                F > 0 && (m = !0, f = o.getRemainingString(), x = "", v = !1, b = !0);
                break;
              case "BFC":
                for (; !o.isAtTheEnd(); ) {
                  const B = o.getToken();
                  switch (B) {
                    case "CERTIFY":
                    case "NOCERTIFY":
                      v = B === "CERTIFY", b = !0;
                      break;
                    case "CW":
                    case "CCW":
                      b = B === "CCW";
                      break;
                    case "INVERTNEXT":
                      T = !0;
                      break;
                    case "CLIP":
                    case "NOCLIP":
                      _ = B === "CLIP";
                      break;
                    default:
                      console.warn('THREE.LDrawLoader: BFC directive "' + B + '" is unknown.');
                      break;
                  }
                }
                break;
              case "STEP":
                I = !0;
                break;
              case "Author:":
                M = o.getToken();
                break;
            }
          break;
        case "1":
          c = o.getToken(), C = l(c);
          const me = parseFloat(o.getToken()), fe = parseFloat(o.getToken()), Ce = parseFloat(o.getToken()), be = parseFloat(o.getToken()), we = parseFloat(o.getToken()), Le = parseFloat(o.getToken()), Me = parseFloat(o.getToken()), ve = parseFloat(o.getToken()), ye = parseFloat(o.getToken()), Ee = parseFloat(o.getToken()), xe = parseFloat(o.getToken()), ke = parseFloat(o.getToken()), Te = new Oe().set(
            be,
            we,
            Le,
            me,
            Me,
            ve,
            ye,
            fe,
            Ee,
            xe,
            ke,
            Ce,
            0,
            0,
            0,
            1
          );
          let V = o.getRemainingString().trim().replace(/\\/g, "/");
          t.fileMap[V] ? V = t.fileMap[V] : V.startsWith("s/") ? V = "parts/" + V : V.startsWith("48/") && (V = "p/" + V), n.push({
            material: C,
            colorCode: c,
            matrix: Te,
            fileName: V,
            inverted: T,
            startingBuildingStep: I
          }), I = !1, T = !1;
          break;
        case "2":
          c = o.getToken(), C = l(c), N = o.getVector(), O = o.getVector(), D = {
            material: C,
            colorCode: c,
            vertices: [N, O]
          }, d.push(D);
          break;
        case "5":
          c = o.getToken(), C = l(c), N = o.getVector(), O = o.getVector(), J = o.getVector(), Q = o.getVector(), D = {
            material: C,
            colorCode: c,
            vertices: [N, O],
            controlPoints: [J, Q]
          }, u.push(D);
          break;
        case "3":
          c = o.getToken(), C = l(c), S = b, A = !v || !_, S === !0 ? (N = o.getVector(), O = o.getVector(), R = o.getVector()) : (R = o.getVector(), O = o.getVector(), N = o.getVector()), s.push({
            material: C,
            colorCode: c,
            faceNormal: null,
            vertices: [N, O, R],
            normals: [null, null, null]
          }), p++, A === !0 && (s.push({
            material: C,
            colorCode: c,
            faceNormal: null,
            vertices: [R, O, N],
            normals: [null, null, null]
          }), p++);
          break;
        case "4":
          c = o.getToken(), C = l(c), S = b, A = !v || !_, S === !0 ? (N = o.getVector(), O = o.getVector(), R = o.getVector(), H = o.getVector()) : (H = o.getVector(), R = o.getVector(), O = o.getVector(), N = o.getVector()), s.push({
            material: C,
            colorCode: c,
            faceNormal: null,
            vertices: [N, O, R, H],
            normals: [null, null, null, null]
          }), p += 2, A === !0 && (s.push({
            material: C,
            colorCode: c,
            faceNormal: null,
            vertices: [H, R, O, N],
            normals: [null, null, null, null]
          }), p += 2);
          break;
        default:
          throw new Error('LDrawLoader: Unknown line type "' + L + '"' + o.getLineNumberString() + ".");
      }
    }
    return m && this.setData(f, x), {
      faces: s,
      conditionalSegments: u,
      lineSegments: d,
      type: k,
      category: E,
      keywords: a,
      author: M,
      subobjects: n,
      totalFaces: p,
      startingBuildingStep: I,
      materials: h,
      fileName: r,
      group: null
    };
  }
  // returns an (optionally cloned) instance of the data
  getData(e, r = !0) {
    const t = e.toLowerCase(), s = this._cache[t];
    return s === null || s instanceof Promise ? null : r ? this.cloneResult(s) : s;
  }
  // kicks off a fetch and parse of the requested data if it hasn't already been loaded. Returns when
  // the data is ready to use and can be retrieved synchronously with "getData".
  async ensureDataLoaded(e) {
    const r = e.toLowerCase();
    r in this._cache || (this._cache[r] = this.fetchData(e).then((t) => {
      const s = this.parse(t, e);
      return this._cache[r] = s, s;
    })), await this._cache[r];
  }
  // sets the data in the cache from parsed data
  setData(e, r) {
    const t = e.toLowerCase();
    this._cache[t] = this.parse(r, e);
  }
}
function K(y, e, r, t) {
  return (!t && y === P || t && y === W) && (y = e), r[y] || null;
}
class qe {
  constructor(e) {
    this.loader = e, this.parseCache = new ze(e), this._cache = {};
  }
  // Convert the given file information into a mesh by processing subobjects.
  async processIntoMesh(e) {
    const r = this.loader, t = this.parseCache, s = /* @__PURE__ */ new Set(), d = async (n, h = null) => {
      const l = n.subobjects, k = [];
      for (let M = 0, p = l.length; M < p; M++) {
        const g = l[M], i = t.ensureDataLoaded(g.fileName).then(() => {
          const m = t.getData(g.fileName, !1);
          return He(m.type) ? d(t.getData(g.fileName), g) : this.loadModel(g.fileName).catch((f) => (console.warn(f), null));
        });
        k.push(i);
      }
      const E = new Ve();
      E.userData.category = n.category, E.userData.keywords = n.keywords, E.userData.author = n.author, E.userData.type = n.type, E.userData.fileName = n.fileName, n.group = E;
      const a = await Promise.all(k);
      for (let M = 0, p = a.length; M < p; M++) {
        const g = n.subobjects[M], i = a[M];
        if (i === null)
          continue;
        if (i.isGroup) {
          const L = i;
          g.matrix.decompose(L.position, L.quaternion, L.scale), L.userData.startingBuildingStep = g.startingBuildingStep, L.name = g.fileName, r.applyMaterialsToMesh(L, g.colorCode, n.materials), L.userData.colorCode = g.colorCode, E.add(L);
          continue;
        }
        i.group.children.length && E.add(i.group);
        const m = n.lineSegments, f = n.conditionalSegments, x = n.faces, v = i.lineSegments, b = i.conditionalSegments, T = i.faces, _ = g.matrix, I = g.inverted, F = _.determinant() < 0, w = g.colorCode, o = w === P ? W : w;
        for (let L = 0, C = v.length; L < C; L++) {
          const c = v[L], D = c.vertices;
          D[0].applyMatrix4(_), D[1].applyMatrix4(_), c.colorCode = c.colorCode === W ? o : c.colorCode, c.material = c.material || K(c.colorCode, c.colorCode, n.materials, !0), m.push(c);
        }
        for (let L = 0, C = b.length; L < C; L++) {
          const c = b[L], D = c.vertices, S = c.controlPoints;
          D[0].applyMatrix4(_), D[1].applyMatrix4(_), S[0].applyMatrix4(_), S[1].applyMatrix4(_), c.colorCode = c.colorCode === W ? o : c.colorCode, c.material = c.material || K(c.colorCode, c.colorCode, n.materials, !0), f.push(c);
        }
        for (let L = 0, C = T.length; L < C; L++) {
          const c = T[L], D = c.vertices;
          for (let S = 0, A = D.length; S < A; S++)
            D[S].applyMatrix4(_);
          c.colorCode = c.colorCode === P ? w : c.colorCode, c.material = c.material || K(c.colorCode, w, n.materials, !1), s.add(c.colorCode), F !== I && D.reverse(), x.push(c);
        }
        n.totalFaces += i.totalFaces;
      }
      return h && (r.applyMaterialsToMesh(E, h.colorCode, n.materials), E.userData.colorCode = h.colorCode), n;
    };
    for (let n = 0, h = e.faces; n < h; n++)
      s.add(e.faces[n].colorCode);
    if (await d(e), r.smoothNormals) {
      const n = s.size > 1;
      We(e.faces), Ye(e.faces, e.lineSegments, n);
    }
    const u = e.group;
    return e.faces.length > 0 && u.add(X(e.faces, 3, !1, e.totalFaces)), e.lineSegments.length > 0 && u.add(X(e.lineSegments, 2)), e.conditionalSegments.length > 0 && u.add(X(e.conditionalSegments, 2, !0)), u;
  }
  hasCachedModel(e) {
    return e !== null && e.toLowerCase() in this._cache;
  }
  async getCachedModel(e) {
    if (e !== null && this.hasCachedModel(e)) {
      const r = e.toLowerCase();
      return (await this._cache[r]).clone();
    } else
      return null;
  }
  // Loads and parses the model with the given file name. Returns a cached copy if available.
  async loadModel(e) {
    const r = this.parseCache, t = e.toLowerCase();
    if (this.hasCachedModel(e))
      return this.getCachedModel(e);
    {
      await r.ensureDataLoaded(e);
      const s = r.getData(e), d = this.processIntoMesh(s);
      return this.hasCachedModel(e) ? this.getCachedModel(e) : (de(s.type) && (this._cache[t] = d), (await d).clone());
    }
  }
  // parses the given model text into a renderable object. Returns cached copy if available.
  async parseModel(e) {
    const t = this.parseCache.parse(e);
    return de(t.type) && this.hasCachedModel(t.fileName) ? this.getCachedModel(t.fileName) : this.processIntoMesh(t);
  }
}
function $e(y, e) {
  return y.colorCode === e.colorCode ? 0 : y.colorCode < e.colorCode ? -1 : 1;
}
function X(y, e, r = !1, t = null) {
  y.sort($e), t === null && (t = y.length);
  const s = new Float32Array(e * t * 3), d = e === 3 ? new Float32Array(e * t * 3) : null, u = [], n = new Array(6), h = new Ne();
  let l = null, k = 0, E = 0, a = 0;
  for (let p = 0, g = y.length; p < g; p++) {
    const i = y[p];
    let m = i.vertices;
    m.length === 4 && (n[0] = m[0], n[1] = m[1], n[2] = m[2], n[3] = m[0], n[4] = m[2], n[5] = m[3], m = n);
    for (let f = 0, x = m.length; f < x; f++) {
      const v = m[f], b = a + f * 3;
      s[b + 0] = v.x, s[b + 1] = v.y, s[b + 2] = v.z;
    }
    if (e === 3) {
      if (!i.faceNormal) {
        const x = m[0], v = m[1], b = m[2];
        z.subVectors(v, x), q.subVectors(b, v), i.faceNormal = new U().crossVectors(z, q).normalize();
      }
      let f = i.normals;
      f.length === 4 && (n[0] = f[0], n[1] = f[1], n[2] = f[2], n[3] = f[0], n[4] = f[2], n[5] = f[3], f = n);
      for (let x = 0, v = f.length; x < v; x++) {
        let b = i.faceNormal;
        f[x] && (b = f[x].norm);
        const T = a + x * 3;
        d[T + 0] = b.x, d[T + 1] = b.y, d[T + 2] = b.z;
      }
    }
    if (l !== i.colorCode) {
      l !== null && h.addGroup(k, E, u.length - 1);
      const f = i.material;
      f !== null ? e === 3 ? u.push(f) : e === 2 && (r ? u.push(f.userData.edgeMaterial.userData.conditionalEdgeMaterial) : u.push(f.userData.edgeMaterial)) : u.push(i.colorCode), l = i.colorCode, k = a / 3, E = m.length;
    } else
      E += m.length;
    a += 3 * m.length;
  }
  E > 0 && h.addGroup(k, 1 / 0, u.length - 1), h.setAttribute("position", new Y(s, 3)), d !== null && h.setAttribute("normal", new Y(d, 3));
  let M = null;
  if (e === 2 ? r ? M = new Ge(h, u.length === 1 ? u[0] : u) : M = new ge(h, u.length === 1 ? u[0] : u) : e === 3 && (M = new Ae(h, u.length === 1 ? u[0] : u)), r) {
    M.isConditionalLine = !0;
    const p = new Float32Array(y.length * 3 * 2), g = new Float32Array(y.length * 3 * 2), i = new Float32Array(y.length * 3 * 2);
    for (let m = 0, f = y.length; m < f; m++) {
      const x = y[m], v = x.vertices, b = x.controlPoints, T = b[0], _ = b[1], I = v[0], F = v[1], w = m * 3 * 2;
      p[w + 0] = T.x, p[w + 1] = T.y, p[w + 2] = T.z, p[w + 3] = T.x, p[w + 4] = T.y, p[w + 5] = T.z, g[w + 0] = _.x, g[w + 1] = _.y, g[w + 2] = _.z, g[w + 3] = _.x, g[w + 4] = _.y, g[w + 5] = _.z, i[w + 0] = F.x - I.x, i[w + 1] = F.y - I.y, i[w + 2] = F.z - I.z, i[w + 3] = F.x - I.x, i[w + 4] = F.y - I.y, i[w + 5] = F.z - I.z;
    }
    h.setAttribute("control0", new Y(p, 3, !1)), h.setAttribute("control1", new Y(g, 3, !1)), h.setAttribute("direction", new Y(i, 3, !1));
  }
  return M;
}
class Xe extends _e {
  constructor(e) {
    super(e), this.materials = [], this.materialLibrary = {}, this.partsCache = new qe(this), this.fileMap = {}, this.setMaterials([]), this.smoothNormals = !0, this.partsLibraryPath = "", this.missingColorMaterial = new j({ color: 16711935, roughness: 0.3, metalness: 0 }), this.missingColorMaterial.name = "Missing material", this.missingEdgeColorMaterial = new re({ color: 16711935 }), this.missingEdgeColorMaterial.name = "Missing material - Edge", this.missingConditionalEdgeColorMaterial = new ue({ fog: !0, color: 16711935 }), this.missingConditionalEdgeColorMaterial.name = "Missing material - Conditional Edge", this.missingColorMaterial.userData.edgeMaterial = this.missingEdgeColorMaterial, this.missingEdgeColorMaterial.userData.conditionalEdgeMaterial = this.missingConditionalEdgeColorMaterial;
  }
  setPartsLibraryPath(e) {
    return this.partsLibraryPath = e, this;
  }
  async preloadMaterials(e) {
    const r = new Z(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials);
    const t = await r.loadAsync(e), s = /^0 !COLOUR/, d = t.split(/[\n\r]/g), u = [];
    for (let n = 0, h = d.length; n < h; n++) {
      const l = d[n];
      if (s.test(l)) {
        const k = l.replace(s, ""), E = this.parseColorMetaDirective(new G(k));
        u.push(E);
      }
    }
    this.setMaterials(u);
  }
  load(e, r, t, s) {
    const d = new Z(this.manager);
    d.setPath(this.path), d.setRequestHeader(this.requestHeader), d.setWithCredentials(this.withCredentials), d.load(e, (u) => {
      this.partsCache.parseModel(u, this.materialLibrary).then((n) => {
        this.applyMaterialsToMesh(n, P, this.materialLibrary, !0), this.computeBuildingSteps(n), n.userData.fileName = e, r(n);
      }).catch(s);
    }, t, s);
  }
  parse(e, r) {
    this.partsCache.parseModel(e, this.materialLibrary).then((t) => {
      this.applyMaterialsToMesh(t, P, this.materialLibrary, !0), this.computeBuildingSteps(t), t.userData.fileName = "", r(t);
    });
  }
  setMaterials(e) {
    this.materialLibrary = {}, this.materials = [];
    for (let r = 0, t = e.length; r < t; r++)
      this.addMaterial(e[r]);
    return this.addMaterial(this.parseColorMetaDirective(new G("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))), this.addMaterial(this.parseColorMetaDirective(new G("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))), this;
  }
  setFileMap(e) {
    return this.fileMap = e, this;
  }
  addMaterial(e) {
    const r = this.materialLibrary;
    return r[e.userData.code] || (this.materials.push(e), r[e.userData.code] = e), this;
  }
  getMaterial(e) {
    if (e.startsWith("0x2")) {
      const r = e.substring(3);
      return this.parseColorMetaDirective(new G("Direct_Color_" + r + " CODE -1 VALUE #" + r + " EDGE #" + r));
    }
    return this.materialLibrary[e] || null;
  }
  // Applies the appropriate materials to a prebuilt hierarchy of geometry. Assumes that color codes are present
  // in the material array if they need to be filled in.
  applyMaterialsToMesh(e, r, t, s = !1) {
    const d = this, u = r === P;
    e.traverse((h) => {
      if (h.isMesh || h.isLineSegments)
        if (Array.isArray(h.material))
          for (let l = 0, k = h.material.length; l < k; l++)
            h.material[l].isMaterial || (h.material[l] = n(h, h.material[l]));
        else
          h.material.isMaterial || (h.material = n(h, h.material));
    });
    function n(h, l) {
      if (u && !(l in t) && !s)
        return l;
      const k = h.isLineSegments || h.isConditionalLine;
      (!k && l === P || k && l === W) && (l = r);
      let a = null;
      if (l in t)
        a = t[l];
      else if (s)
        a = d.getMaterial(l), a === null && (console.warn(`LDrawLoader: Material properties for code ${l} not available.`), a = d.missingColorMaterial);
      else
        return l;
      return h.isLineSegments && (a = a.userData.edgeMaterial, h.isConditionalLine && (a = a.userData.conditionalEdgeMaterial)), a;
    }
  }
  getMainMaterial() {
    return this.getMaterial(P);
  }
  getMainEdgeMaterial() {
    const e = this.getMaterial(W);
    return e ? e.userData.edgeMaterial : null;
  }
  parseColorMetaDirective(e) {
    let r = null, t = 16711935, s = 16711935, d = 1, u = !1, n = 0, h = ae, l = null;
    const k = e.getToken();
    if (!k)
      throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag' + e.getLineNumberString() + ".");
    let E = null;
    for (; E = e.getToken(), !!E; )
      if (!M(E))
        switch (E.toUpperCase()) {
          case "CODE":
            r = e.getToken();
            break;
          case "VALUE":
            if (t = e.getToken(), t.startsWith("0x"))
              t = "#" + t.substring(2);
            else if (!t.startsWith("#"))
              throw new Error("LDrawLoader: Invalid color while parsing material" + e.getLineNumberString() + ".");
            break;
          case "EDGE":
            if (s = e.getToken(), s.startsWith("0x"))
              s = "#" + s.substring(2);
            else if (!s.startsWith("#")) {
              if (l = this.getMaterial(s), !l)
                throw new Error("LDrawLoader: Invalid edge color while parsing material" + e.getLineNumberString() + ".");
              l = l.userData.edgeMaterial;
            }
            break;
          case "ALPHA":
            if (d = parseInt(e.getToken()), isNaN(d))
              throw new Error("LDrawLoader: Invalid alpha value in material definition" + e.getLineNumberString() + ".");
            d = Math.max(0, Math.min(1, d / 255)), d < 1 && (u = !0);
            break;
          case "LUMINANCE":
            if (!M(e.getToken()))
              throw new Error("LDrawLoader: Invalid luminance value in material definition" + G.getLineNumberString() + ".");
            break;
          case "CHROME":
            h = se;
            break;
          case "PEARLESCENT":
            h = ne;
            break;
          case "RUBBER":
            h = oe;
            break;
          case "MATTE_METALLIC":
            h = ie;
            break;
          case "METAL":
            h = le;
            break;
          case "MATERIAL":
            e.setToEnd();
            break;
          default:
            throw new Error('LDrawLoader: Unknown token "' + E + '" while parsing material' + e.getLineNumberString() + ".");
        }
    let a = null;
    switch (h) {
      case ae:
        a = new j({ color: t, roughness: 0.3, metalness: 0 });
        break;
      case ne:
        a = new j({ color: t, roughness: 0.3, metalness: 0.25 });
        break;
      case se:
        a = new j({ color: t, roughness: 0, metalness: 1 });
        break;
      case oe:
        a = new j({ color: t, roughness: 0.9, metalness: 0 });
        break;
      case ie:
        a = new j({ color: t, roughness: 0.8, metalness: 0.4 });
        break;
      case le:
        a = new j({ color: t, roughness: 0.2, metalness: 0.85 });
        break;
    }
    return a.transparent = u, a.premultipliedAlpha = !0, a.opacity = d, a.depthWrite = !u, a.color.convertSRGBToLinear(), a.polygonOffset = !0, a.polygonOffsetFactor = 1, n !== 0 && a.emissive.set(a.color).multiplyScalar(n), l || (l = new re({
      color: s,
      transparent: u,
      opacity: d,
      depthWrite: !u
    }), l.userData.code = r, l.name = k + " - Edge", l.color.convertSRGBToLinear(), l.userData.conditionalEdgeMaterial = new ue({
      fog: !0,
      transparent: u,
      depthWrite: !u,
      color: s,
      opacity: d
    }), l.userData.conditionalEdgeMaterial.color.convertSRGBToLinear(), l.userData.conditionalEdgeMaterial.userData.code = r, l.userData.conditionalEdgeMaterial.name = k + " - Conditional Edge"), a.userData.code = r, a.name = k, a.userData.edgeMaterial = l, this.addMaterial(a), a;
    function M(p) {
      let g;
      return p.startsWith("LUMINANCE") ? g = parseInt(p.substring(9)) : g = parseInt(p), isNaN(g) ? !1 : (n = Math.max(0, Math.min(1, g / 255)), !0);
    }
  }
  computeBuildingSteps(e) {
    let r = 0;
    e.traverse((t) => {
      t.isGroup && (t.userData.startingBuildingStep && r++, t.userData.buildingStep = r);
    }), e.userData.numBuildingSteps = r + 1;
  }
}
export {
  Xe as LDrawLoader
};
