import { ak as gn, v as yn, L as kn, m as Nn, F as wn, b as X, z as st, al as An, T as Tn, C as it, Z as he, a3 as $, a1 as ot, ac as rt, ad as _n, am as En, n as at, V as xn, o as Cn, a9 as vn, Y as ct, _ as Ln, an as In, S as Rn, P as Sn, D as Gn, p as Mn, q as te, G as lt, a4 as On, s as Ge, a2 as jn, h as dt, U as qn, j as Pn, i as Bn, W as Hn, R as Te, a as ut, $ as Un } from "./index-20e94914.mjs";
class ft extends gn {
  constructor(F) {
    super(F);
  }
  parse(F) {
    function ne(h) {
      switch (h.image_type) {
        case pe:
        case z:
          (h.colormap_length > 256 || h.colormap_size !== 24 || h.colormap_type !== 1) && console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");
          break;
        case U:
        case K:
        case de:
        case me:
          h.colormap_type && console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");
          break;
        case Ee:
          console.error("THREE.TGALoader: No data.");
        default:
          console.error('THREE.TGALoader: Invalid type "%s".', h.image_type);
      }
      (h.width <= 0 || h.height <= 0) && console.error("THREE.TGALoader: Invalid image size."), h.pixel_size !== 8 && h.pixel_size !== 16 && h.pixel_size !== 24 && h.pixel_size !== 32 && console.error('THREE.TGALoader: Invalid pixel size "%s".', h.pixel_size);
    }
    function H(h, q, R, C, P) {
      let E, v;
      const A = R.pixel_size >> 3, w = R.width * R.height * A;
      if (q && (v = P.subarray(C, C += R.colormap_length * (R.colormap_size >> 3))), h) {
        E = new Uint8Array(w);
        let y, u, k, S = 0;
        const J = new Uint8Array(A);
        for (; S < w; )
          if (y = P[C++], u = (y & 127) + 1, y & 128) {
            for (k = 0; k < A; ++k)
              J[k] = P[C++];
            for (k = 0; k < u; ++k)
              E.set(J, S + k * A);
            S += A * u;
          } else {
            for (u *= A, k = 0; k < u; ++k)
              E[S + k] = P[C++];
            S += u;
          }
      } else
        E = P.subarray(
          C,
          C += q ? R.width * R.height : w
        );
      return {
        pixel_data: E,
        palettes: v
      };
    }
    function ee(h, q, R, C, P, E, v, A, w) {
      const y = w;
      let u, k = 0, S, J;
      const oe = j.width;
      for (J = q; J !== C; J += R)
        for (S = P; S !== v; S += E, k++)
          u = A[k], h[(S + oe * J) * 4 + 3] = 255, h[(S + oe * J) * 4 + 2] = y[u * 3 + 0], h[(S + oe * J) * 4 + 1] = y[u * 3 + 1], h[(S + oe * J) * 4 + 0] = y[u * 3 + 2];
      return h;
    }
    function L(h, q, R, C, P, E, v, A) {
      let w, y = 0, u, k;
      const S = j.width;
      for (k = q; k !== C; k += R)
        for (u = P; u !== v; u += E, y += 2)
          w = A[y + 0] + (A[y + 1] << 8), h[(u + S * k) * 4 + 0] = (w & 31744) >> 7, h[(u + S * k) * 4 + 1] = (w & 992) >> 2, h[(u + S * k) * 4 + 2] = (w & 31) << 3, h[(u + S * k) * 4 + 3] = w & 32768 ? 0 : 255;
      return h;
    }
    function Z(h, q, R, C, P, E, v, A) {
      let w = 0, y, u;
      const k = j.width;
      for (u = q; u !== C; u += R)
        for (y = P; y !== v; y += E, w += 3)
          h[(y + k * u) * 4 + 3] = 255, h[(y + k * u) * 4 + 2] = A[w + 0], h[(y + k * u) * 4 + 1] = A[w + 1], h[(y + k * u) * 4 + 0] = A[w + 2];
      return h;
    }
    function G(h, q, R, C, P, E, v, A) {
      let w = 0, y, u;
      const k = j.width;
      for (u = q; u !== C; u += R)
        for (y = P; y !== v; y += E, w += 4)
          h[(y + k * u) * 4 + 2] = A[w + 0], h[(y + k * u) * 4 + 1] = A[w + 1], h[(y + k * u) * 4 + 0] = A[w + 2], h[(y + k * u) * 4 + 3] = A[w + 3];
      return h;
    }
    function le(h, q, R, C, P, E, v, A) {
      let w, y = 0, u, k;
      const S = j.width;
      for (k = q; k !== C; k += R)
        for (u = P; u !== v; u += E, y++)
          w = A[y], h[(u + S * k) * 4 + 0] = w, h[(u + S * k) * 4 + 1] = w, h[(u + S * k) * 4 + 2] = w, h[(u + S * k) * 4 + 3] = 255;
      return h;
    }
    function Q(h, q, R, C, P, E, v, A) {
      let w = 0, y, u;
      const k = j.width;
      for (u = q; u !== C; u += R)
        for (y = P; y !== v; y += E, w += 2)
          h[(y + k * u) * 4 + 0] = A[w + 0], h[(y + k * u) * 4 + 1] = A[w + 0], h[(y + k * u) * 4 + 2] = A[w + 0], h[(y + k * u) * 4 + 3] = A[w + 1];
      return h;
    }
    function _e(h, q, R, C, P) {
      let E, v, A, w, y, u;
      switch ((j.flags & xe) >> be) {
        default:
        case ve:
          E = 0, A = 1, y = q, v = 0, w = 1, u = R;
          break;
        case ge:
          E = 0, A = 1, y = q, v = R - 1, w = -1, u = -1;
          break;
        case se:
          E = q - 1, A = -1, y = -1, v = 0, w = 1, u = R;
          break;
        case Ce:
          E = q - 1, A = -1, y = -1, v = R - 1, w = -1, u = -1;
          break;
      }
      if (fe)
        switch (j.pixel_size) {
          case 8:
            le(h, v, w, u, E, A, y, C);
            break;
          case 16:
            Q(h, v, w, u, E, A, y, C);
            break;
          default:
            console.error("THREE.TGALoader: Format not supported.");
            break;
        }
      else
        switch (j.pixel_size) {
          case 8:
            ee(h, v, w, u, E, A, y, C, P);
            break;
          case 16:
            L(h, v, w, u, E, A, y, C);
            break;
          case 24:
            Z(h, v, w, u, E, A, y, C);
            break;
          case 32:
            G(h, v, w, u, E, A, y, C);
            break;
          default:
            console.error("THREE.TGALoader: Format not supported.");
            break;
        }
      return h;
    }
    const Ee = 0, pe = 1, U = 2, K = 3, z = 9, de = 10, me = 11, xe = 48, be = 4, ge = 0, Ce = 1, ve = 2, se = 3;
    F.length < 19 && console.error("THREE.TGALoader: Not enough data to contain header.");
    let I = 0;
    const M = new Uint8Array(F), j = {
      id_length: M[I++],
      colormap_type: M[I++],
      image_type: M[I++],
      colormap_index: M[I++] | M[I++] << 8,
      colormap_length: M[I++] | M[I++] << 8,
      colormap_size: M[I++],
      origin: [
        M[I++] | M[I++] << 8,
        M[I++] | M[I++] << 8
      ],
      width: M[I++] | M[I++] << 8,
      height: M[I++] | M[I++] << 8,
      pixel_size: M[I++],
      flags: M[I++]
    };
    ne(j), j.id_length + I > F.length && console.error("THREE.TGALoader: No data."), I += j.id_length;
    let ie = !1, ue = !1, fe = !1;
    switch (j.image_type) {
      case z:
        ie = !0, ue = !0;
        break;
      case pe:
        ue = !0;
        break;
      case de:
        ie = !0;
        break;
      case U:
        break;
      case me:
        ie = !0, fe = !0;
        break;
      case K:
        fe = !0;
        break;
    }
    const ye = new Uint8Array(j.width * j.height * 4), ke = H(ie, ue, j, I, M);
    return _e(ye, j.width, j.height, ke.pixel_data, ke.palettes), {
      data: ye,
      width: j.width,
      height: j.height,
      flipY: !0,
      generateMipmaps: !0,
      minFilter: yn
    };
  }
}
class Fn extends kn {
  constructor(F) {
    super(F);
  }
  load(F, ne, H, ee) {
    const L = this, Z = L.path === "" ? Nn.extractUrlBase(F) : L.path, G = new wn(L.manager);
    G.setPath(L.path), G.setRequestHeader(L.requestHeader), G.setWithCredentials(L.withCredentials), G.load(F, function(le) {
      try {
        ne(L.parse(le, Z));
      } catch (Q) {
        ee ? ee(Q) : console.error(Q), L.manager.itemError(F);
      }
    }, H, ee);
  }
  parse(F, ne) {
    function H(t, e) {
      const s = [], n = t.childNodes;
      for (let i = 0, o = n.length; i < o; i++) {
        const r = n[i];
        r.nodeName === e && s.push(r);
      }
      return s;
    }
    function ee(t) {
      if (t.length === 0)
        return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++)
        s[n] = e[n];
      return s;
    }
    function L(t) {
      if (t.length === 0)
        return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++)
        s[n] = parseFloat(e[n]);
      return s;
    }
    function Z(t) {
      if (t.length === 0)
        return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++)
        s[n] = parseInt(e[n]);
      return s;
    }
    function G(t) {
      return t.substring(1);
    }
    function le() {
      return "three_default_" + mn++;
    }
    function Q(t) {
      return Object.keys(t).length === 0;
    }
    function _e(t) {
      return {
        unit: Ee(H(t, "unit")[0]),
        upAxis: pe(H(t, "up_axis")[0])
      };
    }
    function Ee(t) {
      return t !== void 0 && t.hasAttribute("meter") === !0 ? parseFloat(t.getAttribute("meter")) : 1;
    }
    function pe(t) {
      return t !== void 0 ? t.textContent : "Y_UP";
    }
    function U(t, e, s, n) {
      const i = H(t, e)[0];
      if (i !== void 0) {
        const o = H(i, s);
        for (let r = 0; r < o.length; r++)
          n(o[r]);
      }
    }
    function K(t, e) {
      for (const s in t) {
        const n = t[s];
        n.build = e(t[s]);
      }
    }
    function z(t, e) {
      return t.build !== void 0 || (t.build = e(t)), t.build;
    }
    function de(t) {
      const e = {
        sources: {},
        samplers: {},
        channels: {}
      };
      let s = !1;
      for (let n = 0, i = t.childNodes.length; n < i; n++) {
        const o = t.childNodes[n];
        if (o.nodeType !== 1)
          continue;
        let r;
        switch (o.nodeName) {
          case "source":
            r = o.getAttribute("id"), e.sources[r] = Le(o);
            break;
          case "sampler":
            r = o.getAttribute("id"), e.samplers[r] = me(o);
            break;
          case "channel":
            r = o.getAttribute("target"), e.channels[r] = xe(o);
            break;
          case "animation":
            de(o), s = !0;
            break;
          default:
            console.log(o);
        }
      }
      s === !1 && (N.animations[t.getAttribute("id") || he.generateUUID()] = e);
    }
    function me(t) {
      const e = {
        inputs: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "input":
              const o = G(i.getAttribute("source")), r = i.getAttribute("semantic");
              e.inputs[r] = o;
              break;
          }
      }
      return e;
    }
    function xe(t) {
      const e = {};
      let n = t.getAttribute("target").split("/");
      const i = n.shift();
      let o = n.shift();
      const r = o.indexOf("(") !== -1, d = o.indexOf(".") !== -1;
      if (d)
        n = o.split("."), o = n.shift(), e.member = n.shift();
      else if (r) {
        const c = o.split("(");
        o = c.shift();
        for (let l = 0; l < c.length; l++)
          c[l] = parseInt(c[l].replace(/\)/, ""));
        e.indices = c;
      }
      return e.id = i, e.sid = o, e.arraySyntax = r, e.memberSyntax = d, e.sampler = G(t.getAttribute("source")), e;
    }
    function be(t) {
      const e = [], s = t.channels, n = t.samplers, i = t.sources;
      for (const o in s)
        if (s.hasOwnProperty(o)) {
          const r = s[o], d = n[r.sampler], c = d.inputs.INPUT, l = d.inputs.OUTPUT, m = i[c], a = i[l], p = Ce(r, m, a);
          j(p, e);
        }
      return e;
    }
    function ge(t) {
      return z(N.animations[t], be);
    }
    function Ce(t, e, s) {
      const n = N.nodes[t.id], i = ae(n.id), o = n.transforms[t.sid], r = n.matrix.clone().transpose();
      let d, c, l, m, a, p;
      const f = {};
      switch (o) {
        case "matrix":
          for (l = 0, m = e.array.length; l < m; l++)
            if (d = e.array[l], c = l * s.stride, f[d] === void 0 && (f[d] = {}), t.arraySyntax === !0) {
              const O = s.array[c], x = t.indices[0] + 4 * t.indices[1];
              f[d][x] = O;
            } else
              for (a = 0, p = s.stride; a < p; a++)
                f[d][a] = s.array[c + a];
          break;
        case "translate":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
        case "rotate":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
        case "scale":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
      }
      const g = ve(f, r);
      return {
        name: i.uuid,
        keyframes: g
      };
    }
    function ve(t, e) {
      const s = [];
      for (const i in t)
        s.push({ time: parseFloat(i), value: t[i] });
      s.sort(n);
      for (let i = 0; i < 16; i++)
        ie(s, i, e.elements[i]);
      return s;
      function n(i, o) {
        return i.time - o.time;
      }
    }
    const se = new $(), I = new $(), M = new On();
    function j(t, e) {
      const s = t.keyframes, n = t.name, i = [], o = [], r = [], d = [];
      for (let c = 0, l = s.length; c < l; c++) {
        const m = s[c], a = m.time, p = m.value;
        D.fromArray(p).transpose(), D.decompose(se, M, I), i.push(a), o.push(se.x, se.y, se.z), r.push(M.x, M.y, M.z, M.w), d.push(I.x, I.y, I.z);
      }
      return o.length > 0 && e.push(new rt(n + ".position", i, o)), r.length > 0 && e.push(new _n(n + ".quaternion", i, r)), d.length > 0 && e.push(new rt(n + ".scale", i, d)), e;
    }
    function ie(t, e, s) {
      let n, i = !0, o, r;
      for (o = 0, r = t.length; o < r; o++)
        n = t[o], n.value[e] === void 0 ? n.value[e] = null : i = !1;
      if (i === !0)
        for (o = 0, r = t.length; o < r; o++)
          n = t[o], n.value[e] = s;
      else
        ue(t, e);
    }
    function ue(t, e) {
      let s, n;
      for (let i = 0, o = t.length; i < o; i++) {
        const r = t[i];
        if (r.value[e] === null) {
          if (s = fe(t, i, e), n = ye(t, i, e), s === null) {
            r.value[e] = n.value[e];
            continue;
          }
          if (n === null) {
            r.value[e] = s.value[e];
            continue;
          }
          ke(r, s, n, e);
        }
      }
    }
    function fe(t, e, s) {
      for (; e >= 0; ) {
        const n = t[e];
        if (n.value[s] !== null)
          return n;
        e--;
      }
      return null;
    }
    function ye(t, e, s) {
      for (; e < t.length; ) {
        const n = t[e];
        if (n.value[s] !== null)
          return n;
        e++;
      }
      return null;
    }
    function ke(t, e, s, n) {
      if (s.time - e.time === 0) {
        t.value[n] = e.value[n];
        return;
      }
      t.value[n] = (t.time - e.time) * (s.value[n] - e.value[n]) / (s.time - e.time) + e.value[n];
    }
    function h(t) {
      const e = {
        name: t.getAttribute("id") || "default",
        start: parseFloat(t.getAttribute("start") || 0),
        end: parseFloat(t.getAttribute("end") || 0),
        animations: []
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "instance_animation":
              e.animations.push(G(i.getAttribute("url")));
              break;
          }
      }
      N.clips[t.getAttribute("id")] = e;
    }
    function q(t) {
      const e = [], s = t.name, n = t.end - t.start || -1, i = t.animations;
      for (let o = 0, r = i.length; o < r; o++) {
        const d = ge(i[o]);
        for (let c = 0, l = d.length; c < l; c++)
          e.push(d[c]);
      }
      return new ot(s, n, e);
    }
    function R(t) {
      return z(N.clips[t], q);
    }
    function C(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "skin":
              e.id = G(i.getAttribute("source")), e.skin = P(i);
              break;
            case "morph":
              e.id = G(i.getAttribute("source")), console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");
              break;
          }
      }
      N.controllers[t.getAttribute("id")] = e;
    }
    function P(t) {
      const e = {
        sources: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "bind_shape_matrix":
              e.bindShapeMatrix = L(i.textContent);
              break;
            case "source":
              const o = i.getAttribute("id");
              e.sources[o] = Le(i);
              break;
            case "joints":
              e.joints = E(i);
              break;
            case "vertex_weights":
              e.vertexWeights = v(i);
              break;
          }
      }
      return e;
    }
    function E(t) {
      const e = {
        inputs: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "input":
              const o = i.getAttribute("semantic"), r = G(i.getAttribute("source"));
              e.inputs[o] = r;
              break;
          }
      }
      return e;
    }
    function v(t) {
      const e = {
        inputs: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "input":
              const o = i.getAttribute("semantic"), r = G(i.getAttribute("source")), d = parseInt(i.getAttribute("offset"));
              e.inputs[o] = { id: r, offset: d };
              break;
            case "vcount":
              e.vcount = Z(i.textContent);
              break;
            case "v":
              e.v = Z(i.textContent);
              break;
          }
      }
      return e;
    }
    function A(t) {
      const e = {
        id: t.id
      }, s = N.geometries[e.id];
      return t.skin !== void 0 && (e.skin = w(t.skin), s.sources.skinIndices = e.skin.indices, s.sources.skinWeights = e.skin.weights), e;
    }
    function w(t) {
      const s = {
        joints: [],
        // this must be an array to preserve the joint order
        indices: {
          array: [],
          stride: 4
        },
        weights: {
          array: [],
          stride: 4
        }
      }, n = t.sources, i = t.vertexWeights, o = i.vcount, r = i.v, d = i.inputs.JOINT.offset, c = i.inputs.WEIGHT.offset, l = t.sources[t.joints.inputs.JOINT], m = t.sources[t.joints.inputs.INV_BIND_MATRIX], a = n[i.inputs.WEIGHT.id].array;
      let p = 0, f, g, b;
      for (f = 0, b = o.length; f < b; f++) {
        const x = o[f], T = [];
        for (g = 0; g < x; g++) {
          const _ = r[p + d], Y = r[p + c], V = a[Y];
          T.push({ index: _, weight: V }), p += 2;
        }
        for (T.sort(O), g = 0; g < 4; g++) {
          const _ = T[g];
          _ !== void 0 ? (s.indices.array.push(_.index), s.weights.array.push(_.weight)) : (s.indices.array.push(0), s.weights.array.push(0));
        }
      }
      for (t.bindShapeMatrix ? s.bindMatrix = new X().fromArray(t.bindShapeMatrix).transpose() : s.bindMatrix = new X().identity(), f = 0, b = l.array.length; f < b; f++) {
        const x = l.array[f], T = new X().fromArray(m.array, f * m.stride).transpose();
        s.joints.push({ name: x, boneInverse: T });
      }
      return s;
      function O(x, T) {
        return T.weight - x.weight;
      }
    }
    function y(t) {
      return z(N.controllers[t], A);
    }
    function u(t) {
      const e = {
        init_from: H(t, "init_from")[0].textContent
      };
      N.images[t.getAttribute("id")] = e;
    }
    function k(t) {
      return t.build !== void 0 ? t.build : t.init_from;
    }
    function S(t) {
      const e = N.images[t];
      return e !== void 0 ? z(e, k) : (console.warn("THREE.ColladaLoader: Couldn't find image with ID:", t), null);
    }
    function J(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "profile_COMMON":
              e.profile = oe(i);
              break;
          }
      }
      N.effects[t.getAttribute("id")] = e;
    }
    function oe(t) {
      const e = {
        surfaces: {},
        samplers: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "newparam":
              pt(i, e);
              break;
            case "technique":
              e.technique = gt(i);
              break;
            case "extra":
              e.extra = je(i);
              break;
          }
      }
      return e;
    }
    function pt(t, e) {
      const s = t.getAttribute("sid");
      for (let n = 0, i = t.childNodes.length; n < i; n++) {
        const o = t.childNodes[n];
        if (o.nodeType === 1)
          switch (o.nodeName) {
            case "surface":
              e.surfaces[s] = mt(o);
              break;
            case "sampler2D":
              e.samplers[s] = bt(o);
              break;
          }
      }
    }
    function mt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "init_from":
              e.init_from = i.textContent;
              break;
          }
      }
      return e;
    }
    function bt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "source":
              e.source = i.textContent;
              break;
          }
      }
      return e;
    }
    function gt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "constant":
            case "lambert":
            case "blinn":
            case "phong":
              e.type = i.nodeName, e.parameters = yt(i);
              break;
            case "extra":
              e.extra = je(i);
              break;
          }
      }
      return e;
    }
    function yt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "emission":
            case "diffuse":
            case "specular":
            case "bump":
            case "ambient":
            case "shininess":
            case "transparency":
              e[i.nodeName] = Me(i);
              break;
            case "transparent":
              e[i.nodeName] = {
                opaque: i.hasAttribute("opaque") ? i.getAttribute("opaque") : "A_ONE",
                data: Me(i)
              };
              break;
          }
      }
      return e;
    }
    function Me(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "color":
              e[i.nodeName] = L(i.textContent);
              break;
            case "float":
              e[i.nodeName] = parseFloat(i.textContent);
              break;
            case "texture":
              e[i.nodeName] = { id: i.getAttribute("texture"), extra: Oe(i) };
              break;
          }
      }
      return e;
    }
    function Oe(t) {
      const e = {
        technique: {}
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "extra":
              kt(i, e);
              break;
          }
      }
      return e;
    }
    function kt(t, e) {
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "technique":
              Nt(i, e);
              break;
          }
      }
    }
    function Nt(t, e) {
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "repeatU":
            case "repeatV":
            case "offsetU":
            case "offsetV":
              e.technique[i.nodeName] = parseFloat(i.textContent);
              break;
            case "wrapU":
            case "wrapV":
              i.textContent.toUpperCase() === "TRUE" ? e.technique[i.nodeName] = 1 : i.textContent.toUpperCase() === "FALSE" ? e.technique[i.nodeName] = 0 : e.technique[i.nodeName] = parseInt(i.textContent);
              break;
            case "bump":
              e[i.nodeName] = qe(i);
              break;
          }
      }
    }
    function je(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "technique":
              e.technique = wt(i);
              break;
          }
      }
      return e;
    }
    function wt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "double_sided":
              e[i.nodeName] = parseInt(i.textContent);
              break;
            case "bump":
              e[i.nodeName] = qe(i);
              break;
          }
      }
      return e;
    }
    function qe(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "texture":
              e[i.nodeName] = { id: i.getAttribute("texture"), texcoord: i.getAttribute("texcoord"), extra: Oe(i) };
              break;
          }
      }
      return e;
    }
    function Pe(t) {
      return t;
    }
    function At(t) {
      return z(N.effects[t], Pe);
    }
    function Tt(t) {
      const e = {
        name: t.getAttribute("name")
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "instance_effect":
              e.url = G(i.getAttribute("url"));
              break;
          }
      }
      N.materials[t.getAttribute("id")] = e;
    }
    function _t(t) {
      let e, s = t.slice((t.lastIndexOf(".") - 1 >>> 0) + 2);
      switch (s = s.toLowerCase(), s) {
        case "tga":
          e = Se;
          break;
        default:
          e = et;
      }
      return e;
    }
    function Be(t) {
      const e = At(t.url), s = e.profile.technique;
      let n;
      switch (s.type) {
        case "phong":
        case "blinn":
          n = new at();
          break;
        case "lambert":
          n = new En();
          break;
        default:
          n = new st();
          break;
      }
      n.name = t.name || "";
      function i(c, l = null) {
        const m = e.profile.samplers[c.id];
        let a = null;
        if (m !== void 0) {
          const p = e.profile.surfaces[m.source];
          a = S(p.init_from);
        } else
          console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."), a = S(c.id);
        if (a !== null) {
          const p = _t(a);
          if (p !== void 0) {
            const f = p.load(a), g = c.extra;
            if (g !== void 0 && g.technique !== void 0 && Q(g.technique) === !1) {
              const b = g.technique;
              f.wrapS = b.wrapU ? Te : ut, f.wrapT = b.wrapV ? Te : ut, f.offset.set(b.offsetU || 0, b.offsetV || 0), f.repeat.set(b.repeatU || 1, b.repeatV || 1);
            } else
              f.wrapS = Te, f.wrapT = Te;
            return l !== null && (f.encoding = l), f;
          } else
            return console.warn("THREE.ColladaLoader: Loader for texture %s not found.", a), null;
        } else
          return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:", c.id), null;
      }
      const o = s.parameters;
      for (const c in o) {
        const l = o[c];
        switch (c) {
          case "diffuse":
            l.color && n.color.fromArray(l.color), l.texture && (n.map = i(l.texture, Ge));
            break;
          case "specular":
            l.color && n.specular && n.specular.fromArray(l.color), l.texture && (n.specularMap = i(l.texture));
            break;
          case "bump":
            l.texture && (n.normalMap = i(l.texture));
            break;
          case "ambient":
            l.texture && (n.lightMap = i(l.texture, Ge));
            break;
          case "shininess":
            l.float && n.shininess && (n.shininess = l.float);
            break;
          case "emission":
            l.color && n.emissive && n.emissive.fromArray(l.color), l.texture && (n.emissiveMap = i(l.texture, Ge));
            break;
        }
      }
      n.color.convertSRGBToLinear(), n.specular && n.specular.convertSRGBToLinear(), n.emissive && n.emissive.convertSRGBToLinear();
      let r = o.transparent, d = o.transparency;
      if (d === void 0 && r && (d = {
        float: 1
      }), r === void 0 && d && (r = {
        opaque: "A_ONE",
        data: {
          color: [1, 1, 1, 1]
        }
      }), r && d)
        if (r.data.texture)
          n.transparent = !0;
        else {
          const c = r.data.color;
          switch (r.opaque) {
            case "A_ONE":
              n.opacity = c[3] * d.float;
              break;
            case "RGB_ZERO":
              n.opacity = 1 - c[0] * d.float;
              break;
            case "A_ZERO":
              n.opacity = 1 - c[3] * d.float;
              break;
            case "RGB_ONE":
              n.opacity = c[0] * d.float;
              break;
            default:
              console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.', r.opaque);
          }
          n.opacity < 1 && (n.transparent = !0);
        }
      if (s.extra !== void 0 && s.extra.technique !== void 0) {
        const c = s.extra.technique;
        for (const l in c) {
          const m = c[l];
          switch (l) {
            case "double_sided":
              n.side = m === 1 ? Cn : vn;
              break;
            case "bump":
              n.normalMap = i(m.texture), n.normalScale = new xn(1, 1);
              break;
          }
        }
      }
      return n;
    }
    function Et(t) {
      return z(N.materials[t], Be);
    }
    function xt(t) {
      const e = {
        name: t.getAttribute("name")
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "optics":
              e.optics = Ct(i);
              break;
          }
      }
      N.cameras[t.getAttribute("id")] = e;
    }
    function Ct(t) {
      for (let e = 0; e < t.childNodes.length; e++) {
        const s = t.childNodes[e];
        switch (s.nodeName) {
          case "technique_common":
            return vt(s);
        }
      }
      return {};
    }
    function vt(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "perspective":
          case "orthographic":
            e.technique = n.nodeName, e.parameters = Lt(n);
            break;
        }
      }
      return e;
    }
    function Lt(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "xfov":
          case "yfov":
          case "xmag":
          case "ymag":
          case "znear":
          case "zfar":
          case "aspect_ratio":
            e[n.nodeName] = parseFloat(n.textContent);
            break;
        }
      }
      return e;
    }
    function He(t) {
      let e;
      switch (t.optics.technique) {
        case "perspective":
          e = new ct(
            t.optics.parameters.yfov,
            t.optics.parameters.aspect_ratio,
            t.optics.parameters.znear,
            t.optics.parameters.zfar
          );
          break;
        case "orthographic":
          let s = t.optics.parameters.ymag, n = t.optics.parameters.xmag;
          const i = t.optics.parameters.aspect_ratio;
          n = n === void 0 ? s * i : n, s = s === void 0 ? n / i : s, n *= 0.5, s *= 0.5, e = new Ln(
            -n,
            n,
            s,
            -s,
            // left, right, top, bottom
            t.optics.parameters.znear,
            t.optics.parameters.zfar
          );
          break;
        default:
          e = new ct();
          break;
      }
      return e.name = t.name || "", e;
    }
    function It(t) {
      const e = N.cameras[t];
      return e !== void 0 ? z(e, He) : (console.warn("THREE.ColladaLoader: Couldn't find camera with ID:", t), null);
    }
    function Rt(t) {
      let e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "technique_common":
              e = St(i);
              break;
          }
      }
      N.lights[t.getAttribute("id")] = e;
    }
    function St(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "directional":
            case "point":
            case "spot":
            case "ambient":
              e.technique = i.nodeName, e.parameters = Gt(i);
          }
      }
      return e;
    }
    function Gt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "color":
              const o = L(i.textContent);
              e.color = new it().fromArray(o).convertSRGBToLinear();
              break;
            case "falloff_angle":
              e.falloffAngle = parseFloat(i.textContent);
              break;
            case "quadratic_attenuation":
              const r = parseFloat(i.textContent);
              e.distance = r ? Math.sqrt(1 / r) : 0;
              break;
          }
      }
      return e;
    }
    function Ue(t) {
      let e;
      switch (t.technique) {
        case "directional":
          e = new Gn();
          break;
        case "point":
          e = new Sn();
          break;
        case "spot":
          e = new Rn();
          break;
        case "ambient":
          e = new In();
          break;
      }
      return t.parameters.color && e.color.copy(t.parameters.color), t.parameters.distance && (e.distance = t.parameters.distance), e;
    }
    function Mt(t) {
      const e = N.lights[t];
      return e !== void 0 ? z(e, Ue) : (console.warn("THREE.ColladaLoader: Couldn't find light with ID:", t), null);
    }
    function Ot(t) {
      const e = {
        name: t.getAttribute("name"),
        sources: {},
        vertices: {},
        primitives: []
      }, s = H(t, "mesh")[0];
      if (s !== void 0) {
        for (let n = 0; n < s.childNodes.length; n++) {
          const i = s.childNodes[n];
          if (i.nodeType !== 1)
            continue;
          const o = i.getAttribute("id");
          switch (i.nodeName) {
            case "source":
              e.sources[o] = Le(i);
              break;
            case "vertices":
              e.vertices = jt(i);
              break;
            case "polygons":
              console.warn("THREE.ColladaLoader: Unsupported primitive type: ", i.nodeName);
              break;
            case "lines":
            case "linestrips":
            case "polylist":
            case "triangles":
              e.primitives.push(qt(i));
              break;
            default:
              console.log(i);
          }
        }
        N.geometries[t.getAttribute("id")] = e;
      }
    }
    function Le(t) {
      const e = {
        array: [],
        stride: 3
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "float_array":
              e.array = L(n.textContent);
              break;
            case "Name_array":
              e.array = ee(n.textContent);
              break;
            case "technique_common":
              const i = H(n, "accessor")[0];
              i !== void 0 && (e.stride = parseInt(i.getAttribute("stride")));
              break;
          }
      }
      return e;
    }
    function jt(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        n.nodeType === 1 && (e[n.getAttribute("semantic")] = G(n.getAttribute("source")));
      }
      return e;
    }
    function qt(t) {
      const e = {
        type: t.nodeName,
        material: t.getAttribute("material"),
        count: parseInt(t.getAttribute("count")),
        inputs: {},
        stride: 0,
        hasUV: !1
      };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1)
          switch (i.nodeName) {
            case "input":
              const o = G(i.getAttribute("source")), r = i.getAttribute("semantic"), d = parseInt(i.getAttribute("offset")), c = parseInt(i.getAttribute("set")), l = c > 0 ? r + c : r;
              e.inputs[l] = { id: o, offset: d }, e.stride = Math.max(e.stride, d + 1), r === "TEXCOORD" && (e.hasUV = !0);
              break;
            case "vcount":
              e.vcount = Z(i.textContent);
              break;
            case "p":
              e.p = Z(i.textContent);
              break;
          }
      }
      return e;
    }
    function Pt(t) {
      const e = {};
      for (let s = 0; s < t.length; s++) {
        const n = t[s];
        e[n.type] === void 0 && (e[n.type] = []), e[n.type].push(n);
      }
      return e;
    }
    function Bt(t) {
      let e = 0;
      for (let s = 0, n = t.length; s < n; s++)
        t[s].hasUV === !0 && e++;
      e > 0 && e < t.length && (t.uvsNeedsFix = !0);
    }
    function ze(t) {
      const e = {}, s = t.sources, n = t.vertices, i = t.primitives;
      if (i.length === 0)
        return {};
      const o = Pt(i);
      for (const r in o) {
        const d = o[r];
        Bt(d), e[r] = Ht(d, s, n);
      }
      return e;
    }
    function Ht(t, e, s) {
      const n = {}, i = { array: [], stride: 0 }, o = { array: [], stride: 0 }, r = { array: [], stride: 0 }, d = { array: [], stride: 0 }, c = { array: [], stride: 0 }, l = { array: [], stride: 4 }, m = { array: [], stride: 4 }, a = new Mn(), p = [];
      let f = 0;
      for (let g = 0; g < t.length; g++) {
        const b = t[g], O = b.inputs;
        let x = 0;
        switch (b.type) {
          case "lines":
          case "linestrips":
            x = b.count * 2;
            break;
          case "triangles":
            x = b.count * 3;
            break;
          case "polylist":
            for (let T = 0; T < b.count; T++) {
              const _ = b.vcount[T];
              switch (_) {
                case 3:
                  x += 3;
                  break;
                case 4:
                  x += 6;
                  break;
                default:
                  x += (_ - 2) * 3;
                  break;
              }
            }
            break;
          default:
            console.warn("THREE.ColladaLoader: Unknow primitive type:", b.type);
        }
        a.addGroup(f, x, g), f += x, b.material && p.push(b.material);
        for (const T in O) {
          const _ = O[T];
          switch (T) {
            case "VERTEX":
              for (const Y in s) {
                const V = s[Y];
                switch (Y) {
                  case "POSITION":
                    const ce = i.array.length;
                    if (W(b, e[V], _.offset, i.array), i.stride = e[V].stride, e.skinWeights && e.skinIndices && (W(b, e.skinIndices, _.offset, l.array), W(b, e.skinWeights, _.offset, m.array)), b.hasUV === !1 && t.uvsNeedsFix === !0) {
                      const bn = (i.array.length - ce) / i.stride;
                      for (let nt = 0; nt < bn; nt++)
                        r.array.push(0, 0);
                    }
                    break;
                  case "NORMAL":
                    W(b, e[V], _.offset, o.array), o.stride = e[V].stride;
                    break;
                  case "COLOR":
                    W(b, e[V], _.offset, c.array), c.stride = e[V].stride;
                    break;
                  case "TEXCOORD":
                    W(b, e[V], _.offset, r.array), r.stride = e[V].stride;
                    break;
                  case "TEXCOORD1":
                    W(b, e[V], _.offset, d.array), r.stride = e[V].stride;
                    break;
                  default:
                    console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.', Y);
                }
              }
              break;
            case "NORMAL":
              W(b, e[_.id], _.offset, o.array), o.stride = e[_.id].stride;
              break;
            case "COLOR":
              W(b, e[_.id], _.offset, c.array, !0), c.stride = e[_.id].stride;
              break;
            case "TEXCOORD":
              W(b, e[_.id], _.offset, r.array), r.stride = e[_.id].stride;
              break;
            case "TEXCOORD1":
              W(b, e[_.id], _.offset, d.array), d.stride = e[_.id].stride;
              break;
          }
        }
      }
      return i.array.length > 0 && a.setAttribute("position", new te(i.array, i.stride)), o.array.length > 0 && a.setAttribute("normal", new te(o.array, o.stride)), c.array.length > 0 && a.setAttribute("color", new te(c.array, c.stride)), r.array.length > 0 && a.setAttribute("uv", new te(r.array, r.stride)), d.array.length > 0 && a.setAttribute("uv2", new te(d.array, d.stride)), l.array.length > 0 && a.setAttribute("skinIndex", new te(l.array, l.stride)), m.array.length > 0 && a.setAttribute("skinWeight", new te(m.array, m.stride)), n.data = a, n.type = t[0].type, n.materialKeys = p, n;
    }
    function W(t, e, s, n, i = !1) {
      const o = t.p, r = t.stride, d = t.vcount;
      function c(a) {
        let p = o[a + s] * m;
        const f = p + m;
        for (; p < f; p++)
          n.push(l[p]);
        if (i) {
          const g = n.length - m - 1;
          Ne.setRGB(
            n[g + 0],
            n[g + 1],
            n[g + 2]
          ).convertSRGBToLinear(), n[g + 0] = Ne.r, n[g + 1] = Ne.g, n[g + 2] = Ne.b;
        }
      }
      const l = e.array, m = e.stride;
      if (t.vcount !== void 0) {
        let a = 0;
        for (let p = 0, f = d.length; p < f; p++) {
          const g = d[p];
          if (g === 4) {
            const b = a + r * 0, O = a + r * 1, x = a + r * 2, T = a + r * 3;
            c(b), c(O), c(T), c(O), c(x), c(T);
          } else if (g === 3) {
            const b = a + r * 0, O = a + r * 1, x = a + r * 2;
            c(b), c(O), c(x);
          } else if (g > 4)
            for (let b = 1, O = g - 2; b <= O; b++) {
              const x = a + r * 0, T = a + r * b, _ = a + r * (b + 1);
              c(x), c(T), c(_);
            }
          a += r * g;
        }
      } else
        for (let a = 0, p = o.length; a < p; a += r)
          c(a);
    }
    function Fe(t) {
      return z(N.geometries[t], ze);
    }
    function Ut(t) {
      const e = {
        name: t.getAttribute("name") || "",
        joints: {},
        links: []
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "technique_common":
              Vt(n, e);
              break;
          }
      }
      N.kinematicsModels[t.getAttribute("id")] = e;
    }
    function zt(t) {
      return t.build !== void 0 ? t.build : t;
    }
    function Ft(t) {
      return z(N.kinematicsModels[t], zt);
    }
    function Vt(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "joint":
              e.joints[n.getAttribute("sid")] = Kt(n);
              break;
            case "link":
              e.links.push(Ve(n));
              break;
          }
      }
    }
    function Kt(t) {
      let e;
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "prismatic":
            case "revolute":
              e = Dt(n);
              break;
          }
      }
      return e;
    }
    function Dt(t) {
      const e = {
        sid: t.getAttribute("sid"),
        name: t.getAttribute("name") || "",
        axis: new $(),
        limits: {
          min: 0,
          max: 0
        },
        type: t.nodeName,
        static: !1,
        zeroPosition: 0,
        middlePosition: 0
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "axis":
              const i = L(n.textContent);
              e.axis.fromArray(i);
              break;
            case "limits":
              const o = n.getElementsByTagName("max")[0], r = n.getElementsByTagName("min")[0];
              e.limits.max = parseFloat(o.textContent), e.limits.min = parseFloat(r.textContent);
              break;
          }
      }
      return e.limits.min >= e.limits.max && (e.static = !0), e.middlePosition = (e.limits.min + e.limits.max) / 2, e;
    }
    function Ve(t) {
      const e = {
        sid: t.getAttribute("sid"),
        name: t.getAttribute("name") || "",
        attachments: [],
        transforms: []
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "attachment_full":
              e.attachments.push(Jt(n));
              break;
            case "matrix":
            case "translate":
            case "rotate":
              e.transforms.push(Ke(n));
              break;
          }
      }
      return e;
    }
    function Jt(t) {
      const e = {
        joint: t.getAttribute("joint").split("/").pop(),
        transforms: [],
        links: []
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "link":
              e.links.push(Ve(n));
              break;
            case "matrix":
            case "translate":
            case "rotate":
              e.transforms.push(Ke(n));
              break;
          }
      }
      return e;
    }
    function Ke(t) {
      const e = {
        type: t.nodeName
      }, s = L(t.textContent);
      switch (e.type) {
        case "matrix":
          e.obj = new X(), e.obj.fromArray(s).transpose();
          break;
        case "translate":
          e.obj = new $(), e.obj.fromArray(s);
          break;
        case "rotate":
          e.obj = new $(), e.obj.fromArray(s), e.angle = he.degToRad(s[3]);
          break;
      }
      return e;
    }
    function Wt(t) {
      const e = {
        name: t.getAttribute("name") || "",
        rigidBodies: {}
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "rigid_body":
              e.rigidBodies[n.getAttribute("name")] = {}, Yt(n, e.rigidBodies[n.getAttribute("name")]);
              break;
          }
      }
      N.physicsModels[t.getAttribute("id")] = e;
    }
    function Yt(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "technique_common":
              Xt(n, e);
              break;
          }
      }
    }
    function Xt(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "inertia":
              e.inertia = L(n.textContent);
              break;
            case "mass":
              e.mass = L(n.textContent)[0];
              break;
          }
      }
    }
    function Zt(t) {
      const e = {
        bindJointAxis: []
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "bind_joint_axis":
              e.bindJointAxis.push(Qt(n));
              break;
          }
      }
      N.kinematicsScenes[G(t.getAttribute("url"))] = e;
    }
    function Qt(t) {
      const e = {
        target: t.getAttribute("target").split("/").pop()
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1)
          switch (n.nodeName) {
            case "axis":
              const i = n.getElementsByTagName("param")[0];
              e.axis = i.textContent;
              const o = e.axis.split("inst_").pop().split("axis")[0];
              e.jointIndex = o.substring(0, o.length - 1);
              break;
          }
      }
      return e;
    }
    function $t(t) {
      return t.build !== void 0 ? t.build : t;
    }
    function en(t) {
      return z(N.kinematicsScenes[t], $t);
    }
    function tn() {
      const t = Object.keys(N.kinematicsModels)[0], e = Object.keys(N.kinematicsScenes)[0], s = Object.keys(N.visualScenes)[0];
      if (t === void 0 || e === void 0)
        return;
      const n = Ft(t), i = en(e), o = Ze(s), r = i.bindJointAxis, d = {};
      for (let m = 0, a = r.length; m < a; m++) {
        const p = r[m], f = B.querySelector('[sid="' + p.target + '"]');
        if (f) {
          const g = f.parentElement;
          c(p.jointIndex, g);
        }
      }
      function c(m, a) {
        const p = a.getAttribute("name"), f = n.joints[m];
        o.traverse(function(g) {
          g.name === p && (d[m] = {
            object: g,
            transforms: nn(a),
            joint: f,
            position: f.zeroPosition
          });
        });
      }
      const l = new X();
      tt = {
        joints: n && n.joints,
        getJointValue: function(m) {
          const a = d[m];
          if (a)
            return a.position;
          console.warn("THREE.ColladaLoader: Joint " + m + " doesn't exist.");
        },
        setJointValue: function(m, a) {
          const p = d[m];
          if (p) {
            const f = p.joint;
            if (a > f.limits.max || a < f.limits.min)
              console.warn("THREE.ColladaLoader: Joint " + m + " value " + a + " outside of limits (min: " + f.limits.min + ", max: " + f.limits.max + ").");
            else if (f.static)
              console.warn("THREE.ColladaLoader: Joint " + m + " is static.");
            else {
              const g = p.object, b = f.axis, O = p.transforms;
              D.identity();
              for (let x = 0; x < O.length; x++) {
                const T = O[x];
                if (T.sid && T.sid.indexOf(m) !== -1)
                  switch (f.type) {
                    case "revolute":
                      D.multiply(l.makeRotationAxis(b, he.degToRad(a)));
                      break;
                    case "prismatic":
                      D.multiply(l.makeTranslation(b.x * a, b.y * a, b.z * a));
                      break;
                    default:
                      console.warn("THREE.ColladaLoader: Unknown joint type: " + f.type);
                      break;
                  }
                else
                  switch (T.type) {
                    case "matrix":
                      D.multiply(T.obj);
                      break;
                    case "translate":
                      D.multiply(l.makeTranslation(T.obj.x, T.obj.y, T.obj.z));
                      break;
                    case "scale":
                      D.scale(T.obj);
                      break;
                    case "rotate":
                      D.multiply(l.makeRotationAxis(T.obj, T.angle));
                      break;
                  }
              }
              g.matrix.copy(D), g.matrix.decompose(g.position, g.quaternion, g.scale), d[m].position = a;
            }
          } else
            console.log("THREE.ColladaLoader: " + m + " does not exist.");
        }
      };
    }
    function nn(t) {
      const e = [], s = B.querySelector('[id="' + t.id + '"]');
      for (let n = 0; n < s.childNodes.length; n++) {
        const i = s.childNodes[n];
        if (i.nodeType !== 1)
          continue;
        let o, r;
        switch (i.nodeName) {
          case "matrix":
            o = L(i.textContent);
            const d = new X().fromArray(o).transpose();
            e.push({
              sid: i.getAttribute("sid"),
              type: i.nodeName,
              obj: d
            });
            break;
          case "translate":
          case "scale":
            o = L(i.textContent), r = new $().fromArray(o), e.push({
              sid: i.getAttribute("sid"),
              type: i.nodeName,
              obj: r
            });
            break;
          case "rotate":
            o = L(i.textContent), r = new $().fromArray(o);
            const c = he.degToRad(o[3]);
            e.push({
              sid: i.getAttribute("sid"),
              type: i.nodeName,
              obj: r,
              angle: c
            });
            break;
        }
      }
      return e;
    }
    function sn(t) {
      const e = t.getElementsByTagName("node");
      for (let s = 0; s < e.length; s++) {
        const n = e[s];
        n.hasAttribute("id") === !1 && n.setAttribute("id", le());
      }
    }
    const D = new X(), re = new $();
    function Ie(t) {
      const e = {
        name: t.getAttribute("name") || "",
        type: t.getAttribute("type"),
        id: t.getAttribute("id"),
        sid: t.getAttribute("sid"),
        matrix: new X(),
        nodes: [],
        instanceCameras: [],
        instanceControllers: [],
        instanceLights: [],
        instanceGeometries: [],
        instanceNodes: [],
        transforms: {}
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType !== 1)
          continue;
        let i;
        switch (n.nodeName) {
          case "node":
            e.nodes.push(n.getAttribute("id")), Ie(n);
            break;
          case "instance_camera":
            e.instanceCameras.push(G(n.getAttribute("url")));
            break;
          case "instance_controller":
            e.instanceControllers.push(De(n));
            break;
          case "instance_light":
            e.instanceLights.push(G(n.getAttribute("url")));
            break;
          case "instance_geometry":
            e.instanceGeometries.push(De(n));
            break;
          case "instance_node":
            e.instanceNodes.push(G(n.getAttribute("url")));
            break;
          case "matrix":
            i = L(n.textContent), e.matrix.multiply(D.fromArray(i).transpose()), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "translate":
            i = L(n.textContent), re.fromArray(i), e.matrix.multiply(D.makeTranslation(re.x, re.y, re.z)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "rotate":
            i = L(n.textContent);
            const o = he.degToRad(i[3]);
            e.matrix.multiply(D.makeRotationAxis(re.fromArray(i), o)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "scale":
            i = L(n.textContent), e.matrix.scale(re.fromArray(i)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "extra":
            break;
          default:
            console.log(n);
        }
      }
      return Ye(e.id) ? console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.", e.id) : N.nodes[e.id] = e, e;
    }
    function De(t) {
      const e = {
        id: G(t.getAttribute("url")),
        materials: {},
        skeletons: []
      };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "bind_material":
            const i = n.getElementsByTagName("instance_material");
            for (let o = 0; o < i.length; o++) {
              const r = i[o], d = r.getAttribute("symbol"), c = r.getAttribute("target");
              e.materials[d] = G(c);
            }
            break;
          case "skeleton":
            e.skeletons.push(G(n.textContent));
            break;
        }
      }
      return e;
    }
    function on(t, e) {
      const s = [], n = [];
      let i, o, r;
      for (i = 0; i < t.length; i++) {
        const l = t[i];
        let m;
        if (Ye(l))
          m = ae(l), Je(m, e, s);
        else if (dn(l)) {
          const p = N.visualScenes[l].children;
          for (let f = 0; f < p.length; f++) {
            const g = p[f];
            if (g.type === "JOINT") {
              const b = ae(g.id);
              Je(b, e, s);
            }
          }
        } else
          console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:", l);
      }
      for (i = 0; i < e.length; i++)
        for (o = 0; o < s.length; o++)
          if (r = s[o], r.bone.name === e[i].name) {
            n[i] = r, r.processed = !0;
            break;
          }
      for (i = 0; i < s.length; i++)
        r = s[i], r.processed === !1 && (n.push(r), r.processed = !0);
      const d = [], c = [];
      for (i = 0; i < n.length; i++)
        r = n[i], d.push(r.bone), c.push(r.boneInverse);
      return new Un(d, c);
    }
    function Je(t, e, s) {
      t.traverse(function(n) {
        if (n.isBone === !0) {
          let i;
          for (let o = 0; o < e.length; o++) {
            const r = e[o];
            if (r.name === n.name) {
              i = r.boneInverse;
              break;
            }
          }
          i === void 0 && (i = new X()), s.push({ bone: n, boneInverse: i, processed: !1 });
        }
      });
    }
    function rn(t) {
      const e = [], s = t.matrix, n = t.nodes, i = t.type, o = t.instanceCameras, r = t.instanceControllers, d = t.instanceLights, c = t.instanceGeometries, l = t.instanceNodes;
      for (let a = 0, p = n.length; a < p; a++)
        e.push(ae(n[a]));
      for (let a = 0, p = o.length; a < p; a++) {
        const f = It(o[a]);
        f !== null && e.push(f.clone());
      }
      for (let a = 0, p = r.length; a < p; a++) {
        const f = r[a], g = y(f.id), b = Fe(g.id), O = We(b, f.materials), x = f.skeletons, T = g.skin.joints, _ = on(x, T);
        for (let Y = 0, V = O.length; Y < V; Y++) {
          const ce = O[Y];
          ce.isSkinnedMesh && (ce.bind(_, g.skin.bindMatrix), ce.normalizeSkinWeights()), e.push(ce);
        }
      }
      for (let a = 0, p = d.length; a < p; a++) {
        const f = Mt(d[a]);
        f !== null && e.push(f.clone());
      }
      for (let a = 0, p = c.length; a < p; a++) {
        const f = c[a], g = Fe(f.id), b = We(g, f.materials);
        for (let O = 0, x = b.length; O < x; O++)
          e.push(b[O]);
      }
      for (let a = 0, p = l.length; a < p; a++)
        e.push(ae(l[a]).clone());
      let m;
      if (n.length === 0 && e.length === 1)
        m = e[0];
      else {
        m = i === "JOINT" ? new jn() : new lt();
        for (let a = 0; a < e.length; a++)
          m.add(e[a]);
      }
      return m.name = i === "JOINT" ? t.sid : t.name, m.matrix.copy(s), m.matrix.decompose(m.position, m.quaternion, m.scale), m;
    }
    const an = new st({ color: 16711935 });
    function cn(t, e) {
      const s = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const o = e[t[n]];
        o === void 0 ? (console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.", t[n]), s.push(an)) : s.push(Et(o));
      }
      return s;
    }
    function We(t, e) {
      const s = [];
      for (const n in t) {
        const i = t[n], o = cn(i.materialKeys, e);
        if (o.length === 0 && (n === "lines" || n === "linestrips" ? o.push(new dt()) : o.push(new at())), n === "lines" || n === "linestrips")
          for (let l = 0, m = o.length; l < m; l++) {
            const a = o[l];
            if (a.isMeshPhongMaterial === !0 || a.isMeshLambertMaterial === !0) {
              const p = new dt();
              p.color.copy(a.color), p.opacity = a.opacity, p.transparent = a.transparent, o[l] = p;
            }
          }
        const r = i.data.attributes.skinIndex !== void 0, d = o.length === 1 ? o[0] : o;
        let c;
        switch (n) {
          case "lines":
            c = new Hn(i.data, d);
            break;
          case "linestrips":
            c = new Bn(i.data, d);
            break;
          case "triangles":
          case "polylist":
            r ? c = new qn(i.data, d) : c = new Pn(i.data, d);
            break;
        }
        s.push(c);
      }
      return s;
    }
    function Ye(t) {
      return N.nodes[t] !== void 0;
    }
    function ae(t) {
      return z(N.nodes[t], rn);
    }
    function ln(t) {
      const e = {
        name: t.getAttribute("name"),
        children: []
      };
      sn(t);
      const s = H(t, "node");
      for (let n = 0; n < s.length; n++)
        e.children.push(Ie(s[n]));
      N.visualScenes[t.getAttribute("id")] = e;
    }
    function Xe(t) {
      const e = new lt();
      e.name = t.name;
      const s = t.children;
      for (let n = 0; n < s.length; n++) {
        const i = s[n];
        e.add(ae(i.id));
      }
      return e;
    }
    function dn(t) {
      return N.visualScenes[t] !== void 0;
    }
    function Ze(t) {
      return z(N.visualScenes[t], Xe);
    }
    function un(t) {
      const e = H(t, "instance_visual_scene")[0];
      return Ze(G(e.getAttribute("url")));
    }
    function fn() {
      const t = N.clips;
      if (Q(t) === !0) {
        if (Q(N.animations) === !1) {
          const e = [];
          for (const s in N.animations) {
            const n = ge(s);
            for (let i = 0, o = n.length; i < o; i++)
              e.push(n[i]);
          }
          we.push(new ot("default", -1, e));
        }
      } else
        for (const e in t)
          we.push(R(e));
    }
    function hn(t) {
      let e = "";
      const s = [t];
      for (; s.length; ) {
        const n = s.shift();
        n.nodeType === Node.TEXT_NODE ? e += n.textContent : (e += `
`, s.push.apply(s, n.childNodes));
      }
      return e.trim();
    }
    if (F.length === 0)
      return { scene: new An() };
    const Qe = new DOMParser().parseFromString(F, "application/xml"), B = H(Qe, "COLLADA")[0], Re = Qe.getElementsByTagName("parsererror")[0];
    if (Re !== void 0) {
      const t = H(Re, "div")[0];
      let e;
      return t ? e = t.textContent : e = hn(Re), console.error(`THREE.ColladaLoader: Failed to parse collada file.
`, e), null;
    }
    const pn = B.getAttribute("version");
    console.debug("THREE.ColladaLoader: File version", pn);
    const $e = _e(H(B, "asset")[0]), et = new Tn(this.manager);
    et.setPath(this.resourcePath || ne).setCrossOrigin(this.crossOrigin);
    let Se;
    ft && (Se = new ft(this.manager), Se.setPath(this.resourcePath || ne));
    const Ne = new it(), we = [];
    let tt = {}, mn = 0;
    const N = {
      animations: {},
      clips: {},
      controllers: {},
      images: {},
      effects: {},
      materials: {},
      cameras: {},
      lights: {},
      geometries: {},
      nodes: {},
      visualScenes: {},
      kinematicsModels: {},
      physicsModels: {},
      kinematicsScenes: {}
    };
    U(B, "library_animations", "animation", de), U(B, "library_animation_clips", "animation_clip", h), U(B, "library_controllers", "controller", C), U(B, "library_images", "image", u), U(B, "library_effects", "effect", J), U(B, "library_materials", "material", Tt), U(B, "library_cameras", "camera", xt), U(B, "library_lights", "light", Rt), U(B, "library_geometries", "geometry", Ot), U(B, "library_nodes", "node", Ie), U(B, "library_visual_scenes", "visual_scene", ln), U(B, "library_kinematics_models", "kinematics_model", Ut), U(B, "library_physics_models", "physics_model", Wt), U(B, "scene", "instance_kinematics_scene", Zt), K(N.animations, be), K(N.clips, q), K(N.controllers, A), K(N.images, k), K(N.effects, Pe), K(N.materials, Be), K(N.cameras, He), K(N.lights, Ue), K(N.geometries, ze), K(N.visualScenes, Xe), fn(), tn();
    const Ae = un(H(B, "scene")[0]);
    return Ae.animations = we, $e.upAxis === "Z_UP" && (console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."), Ae.rotation.set(-Math.PI / 2, 0, 0)), Ae.scale.multiplyScalar($e.unit), {
      get animations() {
        return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."), we;
      },
      kinematics: tt,
      library: N,
      scene: Ae
    };
  }
}
export {
  Fn as ColladaLoader
};
