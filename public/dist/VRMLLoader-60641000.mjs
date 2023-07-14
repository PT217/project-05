import { L as It, m as Nt, F as _t, T as kt, al as Lt, O as st, G as dt, a3 as De, aB as ct, z as $e, aC as mt, j as ut, k as St, l as Pt, h as bt, W as Ct, a9 as xt, o as Mt, n as wt, C as He, aD as Ft, p as Ye, q as xe, aE as Dt, aF as Ut, aG as Vt, V as ze, at as Bt, r as Gt, R as Je, a as et, a4 as jt } from "./index-20e94914.mjs";
/*! chevrotain - v9.0.1 */
var Ee = (e, h) => () => (h || (h = { exports: {} }, e(h.exports, h)), h.exports), vt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VERSION = void 0, e.VERSION = "9.0.1";
}), Ae = Ee((e, h) => {
  var r = e && e.__spreadArray || function(M, K) {
    for (var j = 0, J = K.length, fe = M.length; j < J; j++, fe++)
      M[fe] = K[j];
    return M;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.toFastProperties = e.timer = e.peek = e.isES2015MapSupported = e.PRINT_WARNING = e.PRINT_ERROR = e.packArray = e.IDENTITY = e.NOOP = e.merge = e.groupBy = e.defaults = e.assignNoOverwrite = e.assign = e.zipObject = e.sortBy = e.indexOf = e.some = e.difference = e.every = e.isObject = e.isRegExp = e.isArray = e.partial = e.uniq = e.compact = e.reduce = e.findAll = e.find = e.cloneObj = e.cloneArr = e.contains = e.has = e.pick = e.reject = e.filter = e.dropRight = e.drop = e.isFunction = e.isUndefined = e.isString = e.forEach = e.last = e.first = e.flatten = e.map = e.mapValues = e.values = e.keys = e.isEmpty = void 0;
  function T(M) {
    return M && M.length === 0;
  }
  e.isEmpty = T;
  function m(M) {
    return M == null ? [] : Object.keys(M);
  }
  e.keys = m;
  function O(M) {
    for (var K = [], j = Object.keys(M), J = 0; J < j.length; J++)
      K.push(M[j[J]]);
    return K;
  }
  e.values = O;
  function u(M, K) {
    for (var j = [], J = m(M), fe = 0; fe < J.length; fe++) {
      var I = J[fe];
      j.push(K.call(null, M[I], I));
    }
    return j;
  }
  e.mapValues = u;
  function E(M, K) {
    for (var j = [], J = 0; J < M.length; J++)
      j.push(K.call(null, M[J], J));
    return j;
  }
  e.map = E;
  function o(M) {
    for (var K = [], j = 0; j < M.length; j++) {
      var J = M[j];
      Array.isArray(J) ? K = K.concat(o(J)) : K.push(J);
    }
    return K;
  }
  e.flatten = o;
  function t(M) {
    return T(M) ? void 0 : M[0];
  }
  e.first = t;
  function l(M) {
    var K = M && M.length;
    return K ? M[K - 1] : void 0;
  }
  e.last = l;
  function s(M, K) {
    if (Array.isArray(M))
      for (var j = 0; j < M.length; j++)
        K.call(null, M[j], j);
    else if (q(M))
      for (var J = m(M), j = 0; j < J.length; j++) {
        var fe = J[j], I = M[fe];
        K.call(null, I, fe);
      }
    else
      throw Error("non exhaustive match");
  }
  e.forEach = s;
  function R(M) {
    return typeof M == "string";
  }
  e.isString = R;
  function f(M) {
    return M === void 0;
  }
  e.isUndefined = f;
  function y(M) {
    return M instanceof Function;
  }
  e.isFunction = y;
  function p(M, K) {
    return K === void 0 && (K = 1), M.slice(K, M.length);
  }
  e.drop = p;
  function n(M, K) {
    return K === void 0 && (K = 1), M.slice(0, M.length - K);
  }
  e.dropRight = n;
  function i(M, K) {
    var j = [];
    if (Array.isArray(M))
      for (var J = 0; J < M.length; J++) {
        var fe = M[J];
        K.call(null, fe) && j.push(fe);
      }
    return j;
  }
  e.filter = i;
  function a(M, K) {
    return i(M, function(j) {
      return !K(j);
    });
  }
  e.reject = a;
  function d(M, K) {
    for (var j = Object.keys(M), J = {}, fe = 0; fe < j.length; fe++) {
      var I = j[fe], g = M[I];
      K(g) && (J[I] = g);
    }
    return J;
  }
  e.pick = d;
  function c(M, K) {
    return q(M) ? M.hasOwnProperty(K) : !1;
  }
  e.has = c;
  function P(M, K) {
    return H(M, function(j) {
      return j === K;
    }) !== void 0;
  }
  e.contains = P;
  function F(M) {
    for (var K = [], j = 0; j < M.length; j++)
      K.push(M[j]);
    return K;
  }
  e.cloneArr = F;
  function w(M) {
    var K = {};
    for (var j in M)
      Object.prototype.hasOwnProperty.call(M, j) && (K[j] = M[j]);
    return K;
  }
  e.cloneObj = w;
  function H(M, K) {
    for (var j = 0; j < M.length; j++) {
      var J = M[j];
      if (K.call(null, J))
        return J;
    }
  }
  e.find = H;
  function k(M, K) {
    for (var j = [], J = 0; J < M.length; J++) {
      var fe = M[J];
      K.call(null, fe) && j.push(fe);
    }
    return j;
  }
  e.findAll = k;
  function G(M, K, j) {
    for (var J = Array.isArray(M), fe = J ? M : O(M), I = J ? [] : m(M), g = j, v = 0; v < fe.length; v++)
      g = K.call(null, g, fe[v], J ? v : I[v]);
    return g;
  }
  e.reduce = G;
  function x(M) {
    return a(M, function(K) {
      return K == null;
    });
  }
  e.compact = x;
  function N(M, K) {
    K === void 0 && (K = function(J) {
      return J;
    });
    var j = [];
    return G(M, function(J, fe) {
      var I = K(fe);
      return P(j, I) ? J : (j.push(I), J.concat(fe));
    }, []);
  }
  e.uniq = N;
  function b(M) {
    for (var K = [], j = 1; j < arguments.length; j++)
      K[j - 1] = arguments[j];
    var J = [null], fe = J.concat(K);
    return Function.bind.apply(M, fe);
  }
  e.partial = b;
  function S(M) {
    return Array.isArray(M);
  }
  e.isArray = S;
  function Y(M) {
    return M instanceof RegExp;
  }
  e.isRegExp = Y;
  function q(M) {
    return M instanceof Object;
  }
  e.isObject = q;
  function W(M, K) {
    for (var j = 0; j < M.length; j++)
      if (!K(M[j], j))
        return !1;
    return !0;
  }
  e.every = W;
  function $(M, K) {
    return a(M, function(j) {
      return P(K, j);
    });
  }
  e.difference = $;
  function ee(M, K) {
    for (var j = 0; j < M.length; j++)
      if (K(M[j]))
        return !0;
    return !1;
  }
  e.some = ee;
  function ae(M, K) {
    for (var j = 0; j < M.length; j++)
      if (M[j] === K)
        return j;
    return -1;
  }
  e.indexOf = ae;
  function ie(M, K) {
    var j = F(M);
    return j.sort(function(J, fe) {
      return K(J) - K(fe);
    }), j;
  }
  e.sortBy = ie;
  function se(M, K) {
    if (M.length !== K.length)
      throw Error("can't zipObject with different number of keys and values!");
    for (var j = {}, J = 0; J < M.length; J++)
      j[M[J]] = K[J];
    return j;
  }
  e.zipObject = se;
  function ne(M) {
    for (var K = [], j = 1; j < arguments.length; j++)
      K[j - 1] = arguments[j];
    for (var J = 0; J < K.length; J++)
      for (var fe = K[J], I = m(fe), g = 0; g < I.length; g++) {
        var v = I[g];
        M[v] = fe[v];
      }
    return M;
  }
  e.assign = ne;
  function pe(M) {
    for (var K = [], j = 1; j < arguments.length; j++)
      K[j - 1] = arguments[j];
    for (var J = 0; J < K.length; J++)
      for (var fe = K[J], I = m(fe), g = 0; g < I.length; g++) {
        var v = I[g];
        c(M, v) || (M[v] = fe[v]);
      }
    return M;
  }
  e.assignNoOverwrite = pe;
  function D() {
    for (var M = [], K = 0; K < arguments.length; K++)
      M[K] = arguments[K];
    return pe.apply(void 0, r([{}], M));
  }
  e.defaults = D;
  function B(M, K) {
    var j = {};
    return s(M, function(J) {
      var fe = K(J), I = j[fe];
      I ? I.push(J) : j[fe] = [J];
    }), j;
  }
  e.groupBy = B;
  function z(M, K) {
    for (var j = w(M), J = m(K), fe = 0; fe < J.length; fe++) {
      var I = J[fe], g = K[I];
      j[I] = g;
    }
    return j;
  }
  e.merge = z;
  function X() {
  }
  e.NOOP = X;
  function Q(M) {
    return M;
  }
  e.IDENTITY = Q;
  function re(M) {
    for (var K = [], j = 0; j < M.length; j++) {
      var J = M[j];
      K.push(J !== void 0 ? J : void 0);
    }
    return K;
  }
  e.packArray = re;
  function ve(M) {
    console && console.error && console.error("Error: " + M);
  }
  e.PRINT_ERROR = ve;
  function de(M) {
    console && console.warn && console.warn("Warning: " + M);
  }
  e.PRINT_WARNING = de;
  function _e() {
    return typeof Map == "function";
  }
  e.isES2015MapSupported = _e;
  function Me(M) {
    return M[M.length - 1];
  }
  e.peek = Me;
  function Ve(M) {
    var K = new Date().getTime(), j = M(), J = new Date().getTime(), fe = J - K;
    return { time: fe, value: j };
  }
  e.timer = Ve;
  function Ce(M) {
    function K() {
    }
    K.prototype = M;
    var j = new K();
    function J() {
      return typeof j.bar;
    }
    return J(), J(), M;
  }
  e.toFastProperties = Ce;
}), lt = Ee((e, h) => {
  (function(r, T) {
    typeof define == "function" && define.amd ? define([], T) : typeof h == "object" && h.exports ? h.exports = T() : r.regexpToAst = T();
  })(typeof self < "u" ? self : e, function() {
    function r() {
    }
    r.prototype.saveState = function() {
      return { idx: this.idx, input: this.input, groupIdx: this.groupIdx };
    }, r.prototype.restoreState = function(n) {
      this.idx = n.idx, this.input = n.input, this.groupIdx = n.groupIdx;
    }, r.prototype.pattern = function(n) {
      this.idx = 0, this.input = n, this.groupIdx = 0, this.consumeChar("/");
      var i = this.disjunction();
      this.consumeChar("/");
      for (var a = { type: "Flags", loc: { begin: this.idx, end: n.length }, global: !1, ignoreCase: !1, multiLine: !1, unicode: !1, sticky: !1 }; this.isRegExpFlag(); )
        switch (this.popChar()) {
          case "g":
            o(a, "global");
            break;
          case "i":
            o(a, "ignoreCase");
            break;
          case "m":
            o(a, "multiLine");
            break;
          case "u":
            o(a, "unicode");
            break;
          case "y":
            o(a, "sticky");
            break;
        }
      if (this.idx !== this.input.length)
        throw Error("Redundant input: " + this.input.substring(this.idx));
      return { type: "Pattern", flags: a, value: i, loc: this.loc(0) };
    }, r.prototype.disjunction = function() {
      var n = [], i = this.idx;
      for (n.push(this.alternative()); this.peekChar() === "|"; )
        this.consumeChar("|"), n.push(this.alternative());
      return { type: "Disjunction", value: n, loc: this.loc(i) };
    }, r.prototype.alternative = function() {
      for (var n = [], i = this.idx; this.isTerm(); )
        n.push(this.term());
      return { type: "Alternative", value: n, loc: this.loc(i) };
    }, r.prototype.term = function() {
      return this.isAssertion() ? this.assertion() : this.atom();
    }, r.prototype.assertion = function() {
      var n = this.idx;
      switch (this.popChar()) {
        case "^":
          return { type: "StartAnchor", loc: this.loc(n) };
        case "$":
          return { type: "EndAnchor", loc: this.loc(n) };
        case "\\":
          switch (this.popChar()) {
            case "b":
              return { type: "WordBoundary", loc: this.loc(n) };
            case "B":
              return { type: "NonWordBoundary", loc: this.loc(n) };
          }
          throw Error("Invalid Assertion Escape");
        case "(":
          this.consumeChar("?");
          var i;
          switch (this.popChar()) {
            case "=":
              i = "Lookahead";
              break;
            case "!":
              i = "NegativeLookahead";
              break;
          }
          t(i);
          var a = this.disjunction();
          return this.consumeChar(")"), { type: i, value: a, loc: this.loc(n) };
      }
      l();
    }, r.prototype.quantifier = function(n) {
      var i, a = this.idx;
      switch (this.popChar()) {
        case "*":
          i = { atLeast: 0, atMost: 1 / 0 };
          break;
        case "+":
          i = { atLeast: 1, atMost: 1 / 0 };
          break;
        case "?":
          i = { atLeast: 0, atMost: 1 };
          break;
        case "{":
          var d = this.integerIncludingZero();
          switch (this.popChar()) {
            case "}":
              i = { atLeast: d, atMost: d };
              break;
            case ",":
              var c;
              this.isDigit() ? (c = this.integerIncludingZero(), i = { atLeast: d, atMost: c }) : i = { atLeast: d, atMost: 1 / 0 }, this.consumeChar("}");
              break;
          }
          if (n === !0 && i === void 0)
            return;
          t(i);
          break;
      }
      if (!(n === !0 && i === void 0))
        return t(i), this.peekChar(0) === "?" ? (this.consumeChar("?"), i.greedy = !1) : i.greedy = !0, i.type = "Quantifier", i.loc = this.loc(a), i;
    }, r.prototype.atom = function() {
      var n, i = this.idx;
      switch (this.peekChar()) {
        case ".":
          n = this.dotAll();
          break;
        case "\\":
          n = this.atomEscape();
          break;
        case "[":
          n = this.characterClass();
          break;
        case "(":
          n = this.group();
          break;
      }
      return n === void 0 && this.isPatternCharacter() && (n = this.patternCharacter()), t(n), n.loc = this.loc(i), this.isQuantifier() && (n.quantifier = this.quantifier()), n;
    }, r.prototype.dotAll = function() {
      return this.consumeChar("."), { type: "Set", complement: !0, value: [u(`
`), u("\r"), u("\u2028"), u("\u2029")] };
    }, r.prototype.atomEscape = function() {
      switch (this.consumeChar("\\"), this.peekChar()) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return this.decimalEscapeAtom();
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }, r.prototype.decimalEscapeAtom = function() {
      var n = this.positiveInteger();
      return { type: "GroupBackReference", value: n };
    }, r.prototype.characterClassEscape = function() {
      var n, i = !1;
      switch (this.popChar()) {
        case "d":
          n = R;
          break;
        case "D":
          n = R, i = !0;
          break;
        case "s":
          n = y;
          break;
        case "S":
          n = y, i = !0;
          break;
        case "w":
          n = f;
          break;
        case "W":
          n = f, i = !0;
          break;
      }
      return t(n), { type: "Set", value: n, complement: i };
    }, r.prototype.controlEscapeAtom = function() {
      var n;
      switch (this.popChar()) {
        case "f":
          n = u("\f");
          break;
        case "n":
          n = u(`
`);
          break;
        case "r":
          n = u("\r");
          break;
        case "t":
          n = u("	");
          break;
        case "v":
          n = u("\v");
          break;
      }
      return t(n), { type: "Character", value: n };
    }, r.prototype.controlLetterEscapeAtom = function() {
      this.consumeChar("c");
      var n = this.popChar();
      if (/[a-zA-Z]/.test(n) === !1)
        throw Error("Invalid ");
      var i = n.toUpperCase().charCodeAt(0) - 64;
      return { type: "Character", value: i };
    }, r.prototype.nulCharacterAtom = function() {
      return this.consumeChar("0"), { type: "Character", value: u("\0") };
    }, r.prototype.hexEscapeSequenceAtom = function() {
      return this.consumeChar("x"), this.parseHexDigits(2);
    }, r.prototype.regExpUnicodeEscapeSequenceAtom = function() {
      return this.consumeChar("u"), this.parseHexDigits(4);
    }, r.prototype.identityEscapeAtom = function() {
      var n = this.popChar();
      return { type: "Character", value: u(n) };
    }, r.prototype.classPatternCharacterAtom = function() {
      switch (this.peekChar()) {
        case `
`:
        case "\r":
        case "\u2028":
        case "\u2029":
        case "\\":
        case "]":
          throw Error("TBD");
        default:
          var n = this.popChar();
          return { type: "Character", value: u(n) };
      }
    }, r.prototype.characterClass = function() {
      var n = [], i = !1;
      for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), i = !0); this.isClassAtom(); ) {
        var a = this.classAtom(), d = a.type === "Character";
        if (d && this.isRangeDash()) {
          this.consumeChar("-");
          var c = this.classAtom(), P = c.type === "Character";
          if (P) {
            if (c.value < a.value)
              throw Error("Range out of order in character class");
            n.push({ from: a.value, to: c.value });
          } else
            E(a.value, n), n.push(u("-")), E(c.value, n);
        } else
          E(a.value, n);
      }
      return this.consumeChar("]"), { type: "Set", complement: i, value: n };
    }, r.prototype.classAtom = function() {
      switch (this.peekChar()) {
        case "]":
        case `
`:
        case "\r":
        case "\u2028":
        case "\u2029":
          throw Error("TBD");
        case "\\":
          return this.classEscape();
        default:
          return this.classPatternCharacterAtom();
      }
    }, r.prototype.classEscape = function() {
      switch (this.consumeChar("\\"), this.peekChar()) {
        case "b":
          return this.consumeChar("b"), { type: "Character", value: u("\b") };
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }, r.prototype.group = function() {
      var n = !0;
      switch (this.consumeChar("("), this.peekChar(0)) {
        case "?":
          this.consumeChar("?"), this.consumeChar(":"), n = !1;
          break;
        default:
          this.groupIdx++;
          break;
      }
      var i = this.disjunction();
      this.consumeChar(")");
      var a = { type: "Group", capturing: n, value: i };
      return n && (a.idx = this.groupIdx), a;
    }, r.prototype.positiveInteger = function() {
      var n = this.popChar();
      if (O.test(n) === !1)
        throw Error("Expecting a positive integer");
      for (; m.test(this.peekChar(0)); )
        n += this.popChar();
      return parseInt(n, 10);
    }, r.prototype.integerIncludingZero = function() {
      var n = this.popChar();
      if (m.test(n) === !1)
        throw Error("Expecting an integer");
      for (; m.test(this.peekChar(0)); )
        n += this.popChar();
      return parseInt(n, 10);
    }, r.prototype.patternCharacter = function() {
      var n = this.popChar();
      switch (n) {
        case `
`:
        case "\r":
        case "\u2028":
        case "\u2029":
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
          throw Error("TBD");
        default:
          return { type: "Character", value: u(n) };
      }
    }, r.prototype.isRegExpFlag = function() {
      switch (this.peekChar(0)) {
        case "g":
        case "i":
        case "m":
        case "u":
        case "y":
          return !0;
        default:
          return !1;
      }
    }, r.prototype.isRangeDash = function() {
      return this.peekChar() === "-" && this.isClassAtom(1);
    }, r.prototype.isDigit = function() {
      return m.test(this.peekChar(0));
    }, r.prototype.isClassAtom = function(n) {
      switch (n === void 0 && (n = 0), this.peekChar(n)) {
        case "]":
        case `
`:
        case "\r":
        case "\u2028":
        case "\u2029":
          return !1;
        default:
          return !0;
      }
    }, r.prototype.isTerm = function() {
      return this.isAtom() || this.isAssertion();
    }, r.prototype.isAtom = function() {
      if (this.isPatternCharacter())
        return !0;
      switch (this.peekChar(0)) {
        case ".":
        case "\\":
        case "[":
        case "(":
          return !0;
        default:
          return !1;
      }
    }, r.prototype.isAssertion = function() {
      switch (this.peekChar(0)) {
        case "^":
        case "$":
          return !0;
        case "\\":
          switch (this.peekChar(1)) {
            case "b":
            case "B":
              return !0;
            default:
              return !1;
          }
        case "(":
          return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
        default:
          return !1;
      }
    }, r.prototype.isQuantifier = function() {
      var n = this.saveState();
      try {
        return this.quantifier(!0) !== void 0;
      } catch {
        return !1;
      } finally {
        this.restoreState(n);
      }
    }, r.prototype.isPatternCharacter = function() {
      switch (this.peekChar()) {
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
        case "/":
        case `
`:
        case "\r":
        case "\u2028":
        case "\u2029":
          return !1;
        default:
          return !0;
      }
    }, r.prototype.parseHexDigits = function(n) {
      for (var i = "", a = 0; a < n; a++) {
        var d = this.popChar();
        if (T.test(d) === !1)
          throw Error("Expecting a HexDecimal digits");
        i += d;
      }
      var c = parseInt(i, 16);
      return { type: "Character", value: c };
    }, r.prototype.peekChar = function(n) {
      return n === void 0 && (n = 0), this.input[this.idx + n];
    }, r.prototype.popChar = function() {
      var n = this.peekChar(0);
      return this.consumeChar(), n;
    }, r.prototype.consumeChar = function(n) {
      if (n !== void 0 && this.input[this.idx] !== n)
        throw Error("Expected: '" + n + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
      if (this.idx >= this.input.length)
        throw Error("Unexpected end of input");
      this.idx++;
    }, r.prototype.loc = function(n) {
      return { begin: n, end: this.idx };
    };
    var T = /[0-9a-fA-F]/, m = /[0-9]/, O = /[1-9]/;
    function u(n) {
      return n.charCodeAt(0);
    }
    function E(n, i) {
      n.length !== void 0 ? n.forEach(function(a) {
        i.push(a);
      }) : i.push(n);
    }
    function o(n, i) {
      if (n[i] === !0)
        throw "duplicate flag " + i;
      n[i] = !0;
    }
    function t(n) {
      if (n === void 0)
        throw Error("Internal Error - Should never get here!");
    }
    function l() {
      throw Error("Internal Error - Should never get here!");
    }
    var s, R = [];
    for (s = u("0"); s <= u("9"); s++)
      R.push(s);
    var f = [u("_")].concat(R);
    for (s = u("a"); s <= u("z"); s++)
      f.push(s);
    for (s = u("A"); s <= u("Z"); s++)
      f.push(s);
    var y = [u(" "), u("\f"), u(`
`), u("\r"), u("	"), u("\v"), u("	"), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u(" "), u("\u2028"), u("\u2029"), u(" "), u(" "), u("　"), u("\uFEFF")];
    function p() {
    }
    return p.prototype.visitChildren = function(n) {
      for (var i in n) {
        var a = n[i];
        n.hasOwnProperty(i) && (a.type !== void 0 ? this.visit(a) : Array.isArray(a) && a.forEach(function(d) {
          this.visit(d);
        }, this));
      }
    }, p.prototype.visit = function(n) {
      switch (n.type) {
        case "Pattern":
          this.visitPattern(n);
          break;
        case "Flags":
          this.visitFlags(n);
          break;
        case "Disjunction":
          this.visitDisjunction(n);
          break;
        case "Alternative":
          this.visitAlternative(n);
          break;
        case "StartAnchor":
          this.visitStartAnchor(n);
          break;
        case "EndAnchor":
          this.visitEndAnchor(n);
          break;
        case "WordBoundary":
          this.visitWordBoundary(n);
          break;
        case "NonWordBoundary":
          this.visitNonWordBoundary(n);
          break;
        case "Lookahead":
          this.visitLookahead(n);
          break;
        case "NegativeLookahead":
          this.visitNegativeLookahead(n);
          break;
        case "Character":
          this.visitCharacter(n);
          break;
        case "Set":
          this.visitSet(n);
          break;
        case "Group":
          this.visitGroup(n);
          break;
        case "GroupBackReference":
          this.visitGroupBackReference(n);
          break;
        case "Quantifier":
          this.visitQuantifier(n);
          break;
      }
      this.visitChildren(n);
    }, p.prototype.visitPattern = function(n) {
    }, p.prototype.visitFlags = function(n) {
    }, p.prototype.visitDisjunction = function(n) {
    }, p.prototype.visitAlternative = function(n) {
    }, p.prototype.visitStartAnchor = function(n) {
    }, p.prototype.visitEndAnchor = function(n) {
    }, p.prototype.visitWordBoundary = function(n) {
    }, p.prototype.visitNonWordBoundary = function(n) {
    }, p.prototype.visitLookahead = function(n) {
    }, p.prototype.visitNegativeLookahead = function(n) {
    }, p.prototype.visitCharacter = function(n) {
    }, p.prototype.visitSet = function(n) {
    }, p.prototype.visitGroup = function(n) {
    }, p.prototype.visitGroupBackReference = function(n) {
    }, p.prototype.visitQuantifier = function(n) {
    }, { RegExpParser: r, BaseRegExpVisitor: p, VERSION: "0.5.0" };
  });
}), ft = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.clearRegExpParserCache = e.getRegExpAst = void 0;
  var h = lt(), r = {}, T = new h.RegExpParser();
  function m(u) {
    var E = u.toString();
    if (r.hasOwnProperty(E))
      return r[E];
    var o = T.pattern(E);
    return r[E] = o, o;
  }
  e.getRegExpAst = m;
  function O() {
    r = {};
  }
  e.clearRegExpParserCache = O;
}), Wt = Ee((e) => {
  var h = e && e.__extends || function() {
    var p = function(n, i) {
      return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, d) {
        a.__proto__ = d;
      } || function(a, d) {
        for (var c in d)
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }, p(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      p(n, i);
      function a() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (a.prototype = i.prototype, new a());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canMatchCharCode = e.firstCharOptimizedIndices = e.getOptimizedStartCodesIndices = e.failedOptimizationPrefixMsg = void 0;
  var r = lt(), T = Ae(), m = ft(), O = yt(), u = "Complement Sets are not supported for first char optimization";
  e.failedOptimizationPrefixMsg = `Unable to use "first char" lexer optimizations:
`;
  function E(p, n) {
    n === void 0 && (n = !1);
    try {
      var i = m.getRegExpAst(p), a = o(i.value, {}, i.flags.ignoreCase);
      return a;
    } catch (c) {
      if (c.message === u)
        n && T.PRINT_WARNING("" + e.failedOptimizationPrefixMsg + ("	Unable to optimize: < " + p.toString() + ` >
`) + `	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
      else {
        var d = "";
        n && (d = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), T.PRINT_ERROR(e.failedOptimizationPrefixMsg + `
` + ("	Failed parsing: < " + p.toString() + ` >
`) + ("	Using the regexp-to-ast library version: " + r.VERSION + `
`) + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + d);
      }
    }
    return [];
  }
  e.getOptimizedStartCodesIndices = E;
  function o(p, n, i) {
    switch (p.type) {
      case "Disjunction":
        for (var a = 0; a < p.value.length; a++)
          o(p.value[a], n, i);
        break;
      case "Alternative":
        for (var d = p.value, a = 0; a < d.length; a++) {
          var c = d[a];
          switch (c.type) {
            case "EndAnchor":
            case "GroupBackReference":
            case "Lookahead":
            case "NegativeLookahead":
            case "StartAnchor":
            case "WordBoundary":
            case "NonWordBoundary":
              continue;
          }
          var P = c;
          switch (P.type) {
            case "Character":
              t(P.value, n, i);
              break;
            case "Set":
              if (P.complement === !0)
                throw Error(u);
              T.forEach(P.value, function(H) {
                if (typeof H == "number")
                  t(H, n, i);
                else {
                  var k = H;
                  if (i === !0)
                    for (var G = k.from; G <= k.to; G++)
                      t(G, n, i);
                  else {
                    for (var G = k.from; G <= k.to && G < O.minOptimizationVal; G++)
                      t(G, n, i);
                    if (k.to >= O.minOptimizationVal)
                      for (var x = k.from >= O.minOptimizationVal ? k.from : O.minOptimizationVal, N = k.to, b = O.charCodeToOptimizedIndex(x), S = O.charCodeToOptimizedIndex(N), Y = b; Y <= S; Y++)
                        n[Y] = Y;
                  }
                }
              });
              break;
            case "Group":
              o(P.value, n, i);
              break;
            default:
              throw Error("Non Exhaustive Match");
          }
          var F = P.quantifier !== void 0 && P.quantifier.atLeast === 0;
          if (P.type === "Group" && R(P) === !1 || P.type !== "Group" && F === !1)
            break;
        }
        break;
      default:
        throw Error("non exhaustive match!");
    }
    return T.values(n);
  }
  e.firstCharOptimizedIndices = o;
  function t(p, n, i) {
    var a = O.charCodeToOptimizedIndex(p);
    n[a] = a, i === !0 && l(p, n);
  }
  function l(p, n) {
    var i = String.fromCharCode(p), a = i.toUpperCase();
    if (a !== i) {
      var d = O.charCodeToOptimizedIndex(a.charCodeAt(0));
      n[d] = d;
    } else {
      var c = i.toLowerCase();
      if (c !== i) {
        var d = O.charCodeToOptimizedIndex(c.charCodeAt(0));
        n[d] = d;
      }
    }
  }
  function s(p, n) {
    return T.find(p.value, function(i) {
      if (typeof i == "number")
        return T.contains(n, i);
      var a = i;
      return T.find(n, function(d) {
        return a.from <= d && d <= a.to;
      }) !== void 0;
    });
  }
  function R(p) {
    return p.quantifier && p.quantifier.atLeast === 0 ? !0 : p.value ? T.isArray(p.value) ? T.every(p.value, R) : R(p.value) : !1;
  }
  var f = function(p) {
    h(n, p);
    function n(i) {
      var a = p.call(this) || this;
      return a.targetCharCodes = i, a.found = !1, a;
    }
    return n.prototype.visitChildren = function(i) {
      if (this.found !== !0) {
        switch (i.type) {
          case "Lookahead":
            this.visitLookahead(i);
            return;
          case "NegativeLookahead":
            this.visitNegativeLookahead(i);
            return;
        }
        p.prototype.visitChildren.call(this, i);
      }
    }, n.prototype.visitCharacter = function(i) {
      T.contains(this.targetCharCodes, i.value) && (this.found = !0);
    }, n.prototype.visitSet = function(i) {
      i.complement ? s(i, this.targetCharCodes) === void 0 && (this.found = !0) : s(i, this.targetCharCodes) !== void 0 && (this.found = !0);
    }, n;
  }(r.BaseRegExpVisitor);
  function y(p, n) {
    if (n instanceof RegExp) {
      var i = m.getRegExpAst(n), a = new f(p);
      return a.visit(i), a.found;
    } else
      return T.find(n, function(d) {
        return T.contains(p, d.charCodeAt(0));
      }) !== void 0;
  }
  e.canMatchCharCode = y;
}), yt = Ee((e) => {
  var h = e && e.__extends || function() {
    var D = function(B, z) {
      return D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(X, Q) {
        X.__proto__ = Q;
      } || function(X, Q) {
        for (var re in Q)
          Object.prototype.hasOwnProperty.call(Q, re) && (X[re] = Q[re]);
      }, D(B, z);
    };
    return function(B, z) {
      if (typeof z != "function" && z !== null)
        throw new TypeError("Class extends value " + String(z) + " is not a constructor or null");
      D(B, z);
      function X() {
        this.constructor = B;
      }
      B.prototype = z === null ? Object.create(z) : (X.prototype = z.prototype, new X());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.charCodeToOptimizedIndex = e.minOptimizationVal = e.buildLineBreakIssueMessage = e.LineTerminatorOptimizedTester = e.isShortPattern = e.isCustomPattern = e.cloneEmptyGroups = e.performWarningRuntimeChecks = e.performRuntimeChecks = e.addStickyFlag = e.addStartOfInput = e.findUnreachablePatterns = e.findModesThatDoNotExist = e.findInvalidGroupType = e.findDuplicatePatterns = e.findUnsupportedFlags = e.findStartOfInputAnchor = e.findEmptyMatchRegExps = e.findEndOfInputAnchor = e.findInvalidPatterns = e.findMissingPatterns = e.validatePatterns = e.analyzeTokenTypes = e.enableSticky = e.disableSticky = e.SUPPORT_STICKY = e.MODES = e.DEFAULT_MODE = void 0;
  var r = lt(), T = tt(), m = Ae(), O = Wt(), u = ft(), E = "PATTERN";
  e.DEFAULT_MODE = "defaultMode", e.MODES = "modes", e.SUPPORT_STICKY = typeof new RegExp("(?:)").sticky == "boolean";
  function o() {
    e.SUPPORT_STICKY = !1;
  }
  e.disableSticky = o;
  function t() {
    e.SUPPORT_STICKY = !0;
  }
  e.enableSticky = t;
  function l(D, B) {
    B = m.defaults(B, { useSticky: e.SUPPORT_STICKY, debug: !1, safeMode: !1, positionTracking: "full", lineTerminatorCharacters: ["\r", `
`], tracer: function(g, v) {
      return v();
    } });
    var z = B.tracer;
    z("initCharCodeToOptimizedIndexMap", function() {
      pe();
    });
    var X;
    z("Reject Lexer.NA", function() {
      X = m.reject(D, function(g) {
        return g[E] === T.Lexer.NA;
      });
    });
    var Q = !1, re;
    z("Transform Patterns", function() {
      Q = !1, re = m.map(X, function(g) {
        var v = g[E];
        if (m.isRegExp(v)) {
          var _ = v.source;
          return _.length === 1 && _ !== "^" && _ !== "$" && _ !== "." && !v.ignoreCase ? _ : _.length === 2 && _[0] === "\\" && !m.contains(["d", "D", "s", "S", "t", "r", "n", "t", "0", "c", "b", "B", "f", "v", "w", "W"], _[1]) ? _[1] : B.useSticky ? N(v) : x(v);
        } else {
          if (m.isFunction(v))
            return Q = !0, { exec: v };
          if (m.has(v, "exec"))
            return Q = !0, v;
          if (typeof v == "string") {
            if (v.length === 1)
              return v;
            var A = v.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), C = new RegExp(A);
            return B.useSticky ? N(C) : x(C);
          } else
            throw Error("non exhaustive match");
        }
      });
    });
    var ve, de, _e, Me, Ve;
    z("misc mapping", function() {
      ve = m.map(X, function(g) {
        return g.tokenTypeIdx;
      }), de = m.map(X, function(g) {
        var v = g.GROUP;
        if (v !== T.Lexer.SKIPPED) {
          if (m.isString(v))
            return v;
          if (m.isUndefined(v))
            return !1;
          throw Error("non exhaustive match");
        }
      }), _e = m.map(X, function(g) {
        var v = g.LONGER_ALT;
        if (v) {
          var _ = m.indexOf(X, v);
          return _;
        }
      }), Me = m.map(X, function(g) {
        return g.PUSH_MODE;
      }), Ve = m.map(X, function(g) {
        return m.has(g, "POP_MODE");
      });
    });
    var Ce;
    z("Line Terminator Handling", function() {
      var g = ae(B.lineTerminatorCharacters);
      Ce = m.map(X, function(v) {
        return !1;
      }), B.positionTracking !== "onlyOffset" && (Ce = m.map(X, function(v) {
        if (m.has(v, "LINE_BREAKS"))
          return v.LINE_BREAKS;
        if ($(v, g) === !1)
          return O.canMatchCharCode(g, v.PATTERN);
      }));
    });
    var M, K, j, J;
    z("Misc Mapping #2", function() {
      M = m.map(X, q), K = m.map(re, W), j = m.reduce(X, function(g, v) {
        var _ = v.GROUP;
        return m.isString(_) && _ !== T.Lexer.SKIPPED && (g[_] = []), g;
      }, {}), J = m.map(re, function(g, v) {
        return { pattern: re[v], longerAlt: _e[v], canLineTerminator: Ce[v], isCustom: M[v], short: K[v], group: de[v], push: Me[v], pop: Ve[v], tokenTypeIdx: ve[v], tokenType: X[v] };
      });
    });
    var fe = !0, I = [];
    return B.safeMode || z("First Char Optimization", function() {
      I = m.reduce(X, function(g, v, _) {
        if (typeof v.PATTERN == "string") {
          var A = v.PATTERN.charCodeAt(0), C = ne(A);
          ie(g, C, J[_]);
        } else if (m.isArray(v.START_CHARS_HINT)) {
          var L;
          m.forEach(v.START_CHARS_HINT, function(V) {
            var Z = typeof V == "string" ? V.charCodeAt(0) : V, te = ne(Z);
            L !== te && (L = te, ie(g, te, J[_]));
          });
        } else if (m.isRegExp(v.PATTERN))
          if (v.PATTERN.unicode)
            fe = !1, B.ensureOptimizations && m.PRINT_ERROR("" + O.failedOptimizationPrefixMsg + ("	Unable to analyze < " + v.PATTERN.toString() + ` > pattern.
`) + `	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
          else {
            var U = O.getOptimizedStartCodesIndices(v.PATTERN, B.ensureOptimizations);
            m.isEmpty(U) && (fe = !1), m.forEach(U, function(V) {
              ie(g, V, J[_]);
            });
          }
        else
          B.ensureOptimizations && m.PRINT_ERROR("" + O.failedOptimizationPrefixMsg + ("	TokenType: <" + v.name + `> is using a custom token pattern without providing <start_chars_hint> parameter.
`) + `	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), fe = !1;
        return g;
      }, []);
    }), z("ArrayPacking", function() {
      I = m.packArray(I);
    }), { emptyGroups: j, patternIdxToConfig: J, charCodeToPatternIdxToConfig: I, hasCustom: Q, canBeOptimized: fe };
  }
  e.analyzeTokenTypes = l;
  function s(D, B) {
    var z = [], X = f(D);
    z = z.concat(X.errors);
    var Q = y(X.valid), re = Q.valid;
    return z = z.concat(Q.errors), z = z.concat(R(re)), z = z.concat(F(re)), z = z.concat(w(re, B)), z = z.concat(H(re)), z;
  }
  e.validatePatterns = s;
  function R(D) {
    var B = [], z = m.filter(D, function(X) {
      return m.isRegExp(X[E]);
    });
    return B = B.concat(n(z)), B = B.concat(d(z)), B = B.concat(c(z)), B = B.concat(P(z)), B = B.concat(i(z)), B;
  }
  function f(D) {
    var B = m.filter(D, function(Q) {
      return !m.has(Q, E);
    }), z = m.map(B, function(Q) {
      return { message: "Token Type: ->" + Q.name + "<- missing static 'PATTERN' property", type: T.LexerDefinitionErrorType.MISSING_PATTERN, tokenTypes: [Q] };
    }), X = m.difference(D, B);
    return { errors: z, valid: X };
  }
  e.findMissingPatterns = f;
  function y(D) {
    var B = m.filter(D, function(Q) {
      var re = Q[E];
      return !m.isRegExp(re) && !m.isFunction(re) && !m.has(re, "exec") && !m.isString(re);
    }), z = m.map(B, function(Q) {
      return { message: "Token Type: ->" + Q.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.", type: T.LexerDefinitionErrorType.INVALID_PATTERN, tokenTypes: [Q] };
    }), X = m.difference(D, B);
    return { errors: z, valid: X };
  }
  e.findInvalidPatterns = y;
  var p = /[^\\][\$]/;
  function n(D) {
    var B = function(Q) {
      h(re, Q);
      function re() {
        var ve = Q !== null && Q.apply(this, arguments) || this;
        return ve.found = !1, ve;
      }
      return re.prototype.visitEndAnchor = function(ve) {
        this.found = !0;
      }, re;
    }(r.BaseRegExpVisitor), z = m.filter(D, function(Q) {
      var re = Q[E];
      try {
        var ve = u.getRegExpAst(re), de = new B();
        return de.visit(ve), de.found;
      } catch {
        return p.test(re.source);
      }
    }), X = m.map(z, function(Q) {
      return { message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + Q.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: T.LexerDefinitionErrorType.EOI_ANCHOR_FOUND, tokenTypes: [Q] };
    });
    return X;
  }
  e.findEndOfInputAnchor = n;
  function i(D) {
    var B = m.filter(D, function(X) {
      var Q = X[E];
      return Q.test("");
    }), z = m.map(B, function(X) {
      return { message: "Token Type: ->" + X.name + "<- static 'PATTERN' must not match an empty string", type: T.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN, tokenTypes: [X] };
    });
    return z;
  }
  e.findEmptyMatchRegExps = i;
  var a = /[^\\[][\^]|^\^/;
  function d(D) {
    var B = function(Q) {
      h(re, Q);
      function re() {
        var ve = Q !== null && Q.apply(this, arguments) || this;
        return ve.found = !1, ve;
      }
      return re.prototype.visitStartAnchor = function(ve) {
        this.found = !0;
      }, re;
    }(r.BaseRegExpVisitor), z = m.filter(D, function(Q) {
      var re = Q[E];
      try {
        var ve = u.getRegExpAst(re), de = new B();
        return de.visit(ve), de.found;
      } catch {
        return a.test(re.source);
      }
    }), X = m.map(z, function(Q) {
      return { message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + Q.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: T.LexerDefinitionErrorType.SOI_ANCHOR_FOUND, tokenTypes: [Q] };
    });
    return X;
  }
  e.findStartOfInputAnchor = d;
  function c(D) {
    var B = m.filter(D, function(X) {
      var Q = X[E];
      return Q instanceof RegExp && (Q.multiline || Q.global);
    }), z = m.map(B, function(X) {
      return { message: "Token Type: ->" + X.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')", type: T.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND, tokenTypes: [X] };
    });
    return z;
  }
  e.findUnsupportedFlags = c;
  function P(D) {
    var B = [], z = m.map(D, function(re) {
      return m.reduce(D, function(ve, de) {
        return re.PATTERN.source === de.PATTERN.source && !m.contains(B, de) && de.PATTERN !== T.Lexer.NA && (B.push(de), ve.push(de)), ve;
      }, []);
    });
    z = m.compact(z);
    var X = m.filter(z, function(re) {
      return re.length > 1;
    }), Q = m.map(X, function(re) {
      var ve = m.map(re, function(_e) {
        return _e.name;
      }), de = m.first(re).PATTERN;
      return { message: "The same RegExp pattern ->" + de + "<-" + ("has been used in all of the following Token Types: " + ve.join(", ") + " <-"), type: T.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND, tokenTypes: re };
    });
    return Q;
  }
  e.findDuplicatePatterns = P;
  function F(D) {
    var B = m.filter(D, function(X) {
      if (!m.has(X, "GROUP"))
        return !1;
      var Q = X.GROUP;
      return Q !== T.Lexer.SKIPPED && Q !== T.Lexer.NA && !m.isString(Q);
    }), z = m.map(B, function(X) {
      return { message: "Token Type: ->" + X.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String", type: T.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND, tokenTypes: [X] };
    });
    return z;
  }
  e.findInvalidGroupType = F;
  function w(D, B) {
    var z = m.filter(D, function(Q) {
      return Q.PUSH_MODE !== void 0 && !m.contains(B, Q.PUSH_MODE);
    }), X = m.map(z, function(Q) {
      var re = "Token Type: ->" + Q.name + "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" + Q.PUSH_MODE + "<-which does not exist";
      return { message: re, type: T.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST, tokenTypes: [Q] };
    });
    return X;
  }
  e.findModesThatDoNotExist = w;
  function H(D) {
    var B = [], z = m.reduce(D, function(X, Q, re) {
      var ve = Q.PATTERN;
      return ve === T.Lexer.NA || (m.isString(ve) ? X.push({ str: ve, idx: re, tokenType: Q }) : m.isRegExp(ve) && G(ve) && X.push({ str: ve.source, idx: re, tokenType: Q })), X;
    }, []);
    return m.forEach(D, function(X, Q) {
      m.forEach(z, function(re) {
        var ve = re.str, de = re.idx, _e = re.tokenType;
        if (Q < de && k(ve, X.PATTERN)) {
          var Me = "Token: ->" + _e.name + `<- can never be matched.
` + ("Because it appears AFTER the Token Type ->" + X.name + "<-") + `in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
          B.push({ message: Me, type: T.LexerDefinitionErrorType.UNREACHABLE_PATTERN, tokenTypes: [X, _e] });
        }
      });
    }), B;
  }
  e.findUnreachablePatterns = H;
  function k(D, B) {
    if (m.isRegExp(B)) {
      var z = B.exec(D);
      return z !== null && z.index === 0;
    } else {
      if (m.isFunction(B))
        return B(D, 0, [], {});
      if (m.has(B, "exec"))
        return B.exec(D, 0, [], {});
      if (typeof B == "string")
        return B === D;
      throw Error("non exhaustive match");
    }
  }
  function G(D) {
    var B = [".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"];
    return m.find(B, function(z) {
      return D.source.indexOf(z) !== -1;
    }) === void 0;
  }
  function x(D) {
    var B = D.ignoreCase ? "i" : "";
    return new RegExp("^(?:" + D.source + ")", B);
  }
  e.addStartOfInput = x;
  function N(D) {
    var B = D.ignoreCase ? "iy" : "y";
    return new RegExp("" + D.source, B);
  }
  e.addStickyFlag = N;
  function b(D, B, z) {
    var X = [];
    return m.has(D, e.DEFAULT_MODE) || X.push({ message: "A MultiMode Lexer cannot be initialized without a <" + e.DEFAULT_MODE + `> property in its definition
`, type: T.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE }), m.has(D, e.MODES) || X.push({ message: "A MultiMode Lexer cannot be initialized without a <" + e.MODES + `> property in its definition
`, type: T.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY }), m.has(D, e.MODES) && m.has(D, e.DEFAULT_MODE) && !m.has(D.modes, D.defaultMode) && X.push({ message: "A MultiMode Lexer cannot be initialized with a " + e.DEFAULT_MODE + ": <" + D.defaultMode + `>which does not exist
`, type: T.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST }), m.has(D, e.MODES) && m.forEach(D.modes, function(Q, re) {
      m.forEach(Q, function(ve, de) {
        m.isUndefined(ve) && X.push({ message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + ("<" + re + "> at index: <" + de + `>
`), type: T.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED });
      });
    }), X;
  }
  e.performRuntimeChecks = b;
  function S(D, B, z) {
    var X = [], Q = !1, re = m.compact(m.flatten(m.mapValues(D.modes, function(_e) {
      return _e;
    }))), ve = m.reject(re, function(_e) {
      return _e[E] === T.Lexer.NA;
    }), de = ae(z);
    return B && m.forEach(ve, function(_e) {
      var Me = $(_e, de);
      if (Me !== !1) {
        var Ve = ee(_e, Me), Ce = { message: Ve, type: Me.issue, tokenType: _e };
        X.push(Ce);
      } else
        m.has(_e, "LINE_BREAKS") ? _e.LINE_BREAKS === !0 && (Q = !0) : O.canMatchCharCode(de, _e.PATTERN) && (Q = !0);
    }), B && !Q && X.push({ message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`, type: T.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS }), X;
  }
  e.performWarningRuntimeChecks = S;
  function Y(D) {
    var B = {}, z = m.keys(D);
    return m.forEach(z, function(X) {
      var Q = D[X];
      if (m.isArray(Q))
        B[X] = [];
      else
        throw Error("non exhaustive match");
    }), B;
  }
  e.cloneEmptyGroups = Y;
  function q(D) {
    var B = D.PATTERN;
    if (m.isRegExp(B))
      return !1;
    if (m.isFunction(B) || m.has(B, "exec"))
      return !0;
    if (m.isString(B))
      return !1;
    throw Error("non exhaustive match");
  }
  e.isCustomPattern = q;
  function W(D) {
    return m.isString(D) && D.length === 1 ? D.charCodeAt(0) : !1;
  }
  e.isShortPattern = W, e.LineTerminatorOptimizedTester = { test: function(D) {
    for (var B = D.length, z = this.lastIndex; z < B; z++) {
      var X = D.charCodeAt(z);
      if (X === 10)
        return this.lastIndex = z + 1, !0;
      if (X === 13)
        return D.charCodeAt(z + 1) === 10 ? this.lastIndex = z + 2 : this.lastIndex = z + 1, !0;
    }
    return !1;
  }, lastIndex: 0 };
  function $(D, B) {
    if (m.has(D, "LINE_BREAKS"))
      return !1;
    if (m.isRegExp(D.PATTERN)) {
      try {
        O.canMatchCharCode(B, D.PATTERN);
      } catch (z) {
        return { issue: T.LexerDefinitionErrorType.IDENTIFY_TERMINATOR, errMsg: z.message };
      }
      return !1;
    } else {
      if (m.isString(D.PATTERN))
        return !1;
      if (q(D))
        return { issue: T.LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
      throw Error("non exhaustive match");
    }
  }
  function ee(D, B) {
    if (B.issue === T.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)
      return `Warning: unable to identify line terminator usage in pattern.
` + ("	The problem is in the <" + D.name + `> Token Type
`) + ("	 Root cause: " + B.errMsg + `.
`) + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
    if (B.issue === T.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)
      return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
` + ("	The problem is in the <" + D.name + `> Token Type
`) + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
    throw Error("non exhaustive match");
  }
  e.buildLineBreakIssueMessage = ee;
  function ae(D) {
    var B = m.map(D, function(z) {
      return m.isString(z) && z.length > 0 ? z.charCodeAt(0) : z;
    });
    return B;
  }
  function ie(D, B, z) {
    D[B] === void 0 ? D[B] = [z] : D[B].push(z);
  }
  e.minOptimizationVal = 256;
  var se = [];
  function ne(D) {
    return D < e.minOptimizationVal ? D : se[D];
  }
  e.charCodeToOptimizedIndex = ne;
  function pe() {
    if (m.isEmpty(se)) {
      se = new Array(65536);
      for (var D = 0; D < 65536; D++)
        se[D] = D > 255 ? 255 + ~~(D / 255) : D;
    }
  }
}), qe = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isTokenType = e.hasExtendingTokensTypesMapProperty = e.hasExtendingTokensTypesProperty = e.hasCategoriesProperty = e.hasShortKeyProperty = e.singleAssignCategoriesToksMap = e.assignCategoriesMapProp = e.assignCategoriesTokensProp = e.assignTokenDefaultProps = e.expandCategories = e.augmentTokenTypes = e.tokenIdxToClass = e.tokenShortNameIdx = e.tokenStructuredMatcherNoCategories = e.tokenStructuredMatcher = void 0;
  var h = Ae();
  function r(p, n) {
    var i = p.tokenTypeIdx;
    return i === n.tokenTypeIdx ? !0 : n.isParent === !0 && n.categoryMatchesMap[i] === !0;
  }
  e.tokenStructuredMatcher = r;
  function T(p, n) {
    return p.tokenTypeIdx === n.tokenTypeIdx;
  }
  e.tokenStructuredMatcherNoCategories = T, e.tokenShortNameIdx = 1, e.tokenIdxToClass = {};
  function m(p) {
    var n = O(p);
    u(n), o(n), E(n), h.forEach(n, function(i) {
      i.isParent = i.categoryMatches.length > 0;
    });
  }
  e.augmentTokenTypes = m;
  function O(p) {
    for (var n = h.cloneArr(p), i = p, a = !0; a; ) {
      i = h.compact(h.flatten(h.map(i, function(c) {
        return c.CATEGORIES;
      })));
      var d = h.difference(i, n);
      n = n.concat(d), h.isEmpty(d) ? a = !1 : i = d;
    }
    return n;
  }
  e.expandCategories = O;
  function u(p) {
    h.forEach(p, function(n) {
      l(n) || (e.tokenIdxToClass[e.tokenShortNameIdx] = n, n.tokenTypeIdx = e.tokenShortNameIdx++), s(n) && !h.isArray(n.CATEGORIES) && (n.CATEGORIES = [n.CATEGORIES]), s(n) || (n.CATEGORIES = []), R(n) || (n.categoryMatches = []), f(n) || (n.categoryMatchesMap = {});
    });
  }
  e.assignTokenDefaultProps = u;
  function E(p) {
    h.forEach(p, function(n) {
      n.categoryMatches = [], h.forEach(n.categoryMatchesMap, function(i, a) {
        n.categoryMatches.push(e.tokenIdxToClass[a].tokenTypeIdx);
      });
    });
  }
  e.assignCategoriesTokensProp = E;
  function o(p) {
    h.forEach(p, function(n) {
      t([], n);
    });
  }
  e.assignCategoriesMapProp = o;
  function t(p, n) {
    h.forEach(p, function(i) {
      n.categoryMatchesMap[i.tokenTypeIdx] = !0;
    }), h.forEach(n.CATEGORIES, function(i) {
      var a = p.concat(n);
      h.contains(a, i) || t(a, i);
    });
  }
  e.singleAssignCategoriesToksMap = t;
  function l(p) {
    return h.has(p, "tokenTypeIdx");
  }
  e.hasShortKeyProperty = l;
  function s(p) {
    return h.has(p, "CATEGORIES");
  }
  e.hasCategoriesProperty = s;
  function R(p) {
    return h.has(p, "categoryMatches");
  }
  e.hasExtendingTokensTypesProperty = R;
  function f(p) {
    return h.has(p, "categoryMatchesMap");
  }
  e.hasExtendingTokensTypesMapProperty = f;
  function y(p) {
    return h.has(p, "tokenTypeIdx");
  }
  e.isTokenType = y;
}), Et = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultLexerErrorProvider = void 0, e.defaultLexerErrorProvider = { buildUnableToPopLexerModeMessage: function(h) {
    return "Unable to pop Lexer Mode after encountering Token ->" + h.image + "<- The Mode Stack is empty";
  }, buildUnexpectedCharactersMessage: function(h, r, T, m, O) {
    return "unexpected character: ->" + h.charAt(r) + "<- at offset: " + r + "," + (" skipped " + T + " characters.");
  } };
}), tt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Lexer = e.LexerDefinitionErrorType = void 0;
  var h = yt(), r = Ae(), T = qe(), m = Et(), O = ft();
  (function(o) {
    o[o.MISSING_PATTERN = 0] = "MISSING_PATTERN", o[o.INVALID_PATTERN = 1] = "INVALID_PATTERN", o[o.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", o[o.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", o[o.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", o[o.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", o[o.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", o[o.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", o[o.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", o[o.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", o[o.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", o[o.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", o[o.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", o[o.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", o[o.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", o[o.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", o[o.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK";
  })(e.LexerDefinitionErrorType || (e.LexerDefinitionErrorType = {}));
  var u = { deferDefinitionErrorsHandling: !1, positionTracking: "full", lineTerminatorsPattern: /\n|\r\n?/g, lineTerminatorCharacters: [`
`, "\r"], ensureOptimizations: !1, safeMode: !1, errorMessageProvider: m.defaultLexerErrorProvider, traceInitPerf: !1, skipValidations: !1 };
  Object.freeze(u);
  var E = function() {
    function o(t, l) {
      var s = this;
      if (l === void 0 && (l = u), this.lexerDefinition = t, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.config = void 0, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, typeof l == "boolean")
        throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
      this.config = r.merge(u, l);
      var R = this.config.traceInitPerf;
      R === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof R == "number" && (this.traceInitMaxIdent = R, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", function() {
        var f, y = !0;
        s.TRACE_INIT("Lexer Config handling", function() {
          if (s.config.lineTerminatorsPattern === u.lineTerminatorsPattern)
            s.config.lineTerminatorsPattern = h.LineTerminatorOptimizedTester;
          else if (s.config.lineTerminatorCharacters === u.lineTerminatorCharacters)
            throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
          if (l.safeMode && l.ensureOptimizations)
            throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
          s.trackStartLines = /full|onlyStart/i.test(s.config.positionTracking), s.trackEndLines = /full/i.test(s.config.positionTracking), r.isArray(t) ? (f = { modes: {} }, f.modes[h.DEFAULT_MODE] = r.cloneArr(t), f[h.DEFAULT_MODE] = h.DEFAULT_MODE) : (y = !1, f = r.cloneObj(t));
        }), s.config.skipValidations === !1 && (s.TRACE_INIT("performRuntimeChecks", function() {
          s.lexerDefinitionErrors = s.lexerDefinitionErrors.concat(h.performRuntimeChecks(f, s.trackStartLines, s.config.lineTerminatorCharacters));
        }), s.TRACE_INIT("performWarningRuntimeChecks", function() {
          s.lexerDefinitionWarning = s.lexerDefinitionWarning.concat(h.performWarningRuntimeChecks(f, s.trackStartLines, s.config.lineTerminatorCharacters));
        })), f.modes = f.modes ? f.modes : {}, r.forEach(f.modes, function(a, d) {
          f.modes[d] = r.reject(a, function(c) {
            return r.isUndefined(c);
          });
        });
        var p = r.keys(f.modes);
        if (r.forEach(f.modes, function(a, d) {
          s.TRACE_INIT("Mode: <" + d + "> processing", function() {
            if (s.modes.push(d), s.config.skipValidations === !1 && s.TRACE_INIT("validatePatterns", function() {
              s.lexerDefinitionErrors = s.lexerDefinitionErrors.concat(h.validatePatterns(a, p));
            }), r.isEmpty(s.lexerDefinitionErrors)) {
              T.augmentTokenTypes(a);
              var c;
              s.TRACE_INIT("analyzeTokenTypes", function() {
                c = h.analyzeTokenTypes(a, { lineTerminatorCharacters: s.config.lineTerminatorCharacters, positionTracking: l.positionTracking, ensureOptimizations: l.ensureOptimizations, safeMode: l.safeMode, tracer: s.TRACE_INIT.bind(s) });
              }), s.patternIdxToConfig[d] = c.patternIdxToConfig, s.charCodeToPatternIdxToConfig[d] = c.charCodeToPatternIdxToConfig, s.emptyGroups = r.merge(s.emptyGroups, c.emptyGroups), s.hasCustom = c.hasCustom || s.hasCustom, s.canModeBeOptimized[d] = c.canBeOptimized;
            }
          });
        }), s.defaultMode = f.defaultMode, !r.isEmpty(s.lexerDefinitionErrors) && !s.config.deferDefinitionErrorsHandling) {
          var n = r.map(s.lexerDefinitionErrors, function(a) {
            return a.message;
          }), i = n.join(`-----------------------
`);
          throw new Error(`Errors detected in definition of Lexer:
` + i);
        }
        r.forEach(s.lexerDefinitionWarning, function(a) {
          r.PRINT_WARNING(a.message);
        }), s.TRACE_INIT("Choosing sub-methods implementations", function() {
          if (h.SUPPORT_STICKY ? (s.chopInput = r.IDENTITY, s.match = s.matchWithTest) : (s.updateLastIndex = r.NOOP, s.match = s.matchWithExec), y && (s.handleModes = r.NOOP), s.trackStartLines === !1 && (s.computeNewColumn = r.IDENTITY), s.trackEndLines === !1 && (s.updateTokenEndLineColumnLocation = r.NOOP), /full/i.test(s.config.positionTracking))
            s.createTokenInstance = s.createFullToken;
          else if (/onlyStart/i.test(s.config.positionTracking))
            s.createTokenInstance = s.createStartOnlyToken;
          else if (/onlyOffset/i.test(s.config.positionTracking))
            s.createTokenInstance = s.createOffsetOnlyToken;
          else
            throw Error('Invalid <positionTracking> config option: "' + s.config.positionTracking + '"');
          s.hasCustom ? (s.addToken = s.addTokenUsingPush, s.handlePayload = s.handlePayloadWithCustom) : (s.addToken = s.addTokenUsingMemberAccess, s.handlePayload = s.handlePayloadNoCustom);
        }), s.TRACE_INIT("Failed Optimization Warnings", function() {
          var a = r.reduce(s.canModeBeOptimized, function(d, c, P) {
            return c === !1 && d.push(P), d;
          }, []);
          if (l.ensureOptimizations && !r.isEmpty(a))
            throw Error("Lexer Modes: < " + a.join(", ") + ` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
        }), s.TRACE_INIT("clearRegExpParserCache", function() {
          O.clearRegExpParserCache();
        }), s.TRACE_INIT("toFastProperties", function() {
          r.toFastProperties(s);
        });
      });
    }
    return o.prototype.tokenize = function(t, l) {
      if (l === void 0 && (l = this.defaultMode), !r.isEmpty(this.lexerDefinitionErrors)) {
        var s = r.map(this.lexerDefinitionErrors, function(y) {
          return y.message;
        }), R = s.join(`-----------------------
`);
        throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + R);
      }
      var f = this.tokenizeInternal(t, l);
      return f;
    }, o.prototype.tokenizeInternal = function(t, l) {
      var s = this, R, f, y, p, n, i, a, d, c, P, F, w, H, k, G = t, x = G.length, N = 0, b = 0, S = this.hasCustom ? 0 : Math.floor(t.length / 10), Y = new Array(S), q = [], W = this.trackStartLines ? 1 : void 0, $ = this.trackStartLines ? 1 : void 0, ee = h.cloneEmptyGroups(this.emptyGroups), ae = this.trackStartLines, ie = this.config.lineTerminatorsPattern, se = 0, ne = [], pe = [], D = [], B = [];
      Object.freeze(B);
      var z = void 0;
      function X() {
        return ne;
      }
      function Q(L) {
        var U = h.charCodeToOptimizedIndex(L), V = pe[U];
        return V === void 0 ? B : V;
      }
      var re = function(L) {
        if (D.length === 1 && L.tokenType.PUSH_MODE === void 0) {
          var U = s.config.errorMessageProvider.buildUnableToPopLexerModeMessage(L);
          q.push({ offset: L.startOffset, line: L.startLine !== void 0 ? L.startLine : void 0, column: L.startColumn !== void 0 ? L.startColumn : void 0, length: L.image.length, message: U });
        } else {
          D.pop();
          var V = r.last(D);
          ne = s.patternIdxToConfig[V], pe = s.charCodeToPatternIdxToConfig[V], se = ne.length;
          var Z = s.canModeBeOptimized[V] && s.config.safeMode === !1;
          pe && Z ? z = Q : z = X;
        }
      };
      function ve(L) {
        D.push(L), pe = this.charCodeToPatternIdxToConfig[L], ne = this.patternIdxToConfig[L], se = ne.length, se = ne.length;
        var U = this.canModeBeOptimized[L] && this.config.safeMode === !1;
        pe && U ? z = Q : z = X;
      }
      ve.call(this, l);
      for (var de; N < x; ) {
        n = null;
        var _e = G.charCodeAt(N), Me = z(_e), Ve = Me.length;
        for (R = 0; R < Ve; R++) {
          de = Me[R];
          var Ce = de.pattern;
          i = null;
          var M = de.short;
          if (M !== !1 ? _e === M && (n = Ce) : de.isCustom === !0 ? (k = Ce.exec(G, N, Y, ee), k !== null ? (n = k[0], k.payload !== void 0 && (i = k.payload)) : n = null) : (this.updateLastIndex(Ce, N), n = this.match(Ce, t, N)), n !== null) {
            if (p = de.longerAlt, p !== void 0) {
              var K = ne[p], j = K.pattern;
              a = null, K.isCustom === !0 ? (k = j.exec(G, N, Y, ee), k !== null ? (y = k[0], k.payload !== void 0 && (a = k.payload)) : y = null) : (this.updateLastIndex(j, N), y = this.match(j, t, N)), y && y.length > n.length && (n = y, i = a, de = K);
            }
            break;
          }
        }
        if (n !== null) {
          if (d = n.length, c = de.group, c !== void 0 && (P = de.tokenTypeIdx, F = this.createTokenInstance(n, N, P, de.tokenType, W, $, d), this.handlePayload(F, i), c === !1 ? b = this.addToken(Y, b, F) : ee[c].push(F)), t = this.chopInput(t, d), N = N + d, $ = this.computeNewColumn($, d), ae === !0 && de.canLineTerminator === !0) {
            var J = 0, fe = void 0, I = void 0;
            ie.lastIndex = 0;
            do
              fe = ie.test(n), fe === !0 && (I = ie.lastIndex - 1, J++);
            while (fe === !0);
            J !== 0 && (W = W + J, $ = d - I, this.updateTokenEndLineColumnLocation(F, c, I, J, W, $, d));
          }
          this.handleModes(de, re, ve, F);
        } else {
          for (var g = N, v = W, _ = $, A = !1; !A && N < x; )
            for (G.charCodeAt(N), t = this.chopInput(t, 1), N++, f = 0; f < se; f++) {
              var C = ne[f], Ce = C.pattern, M = C.short;
              if (M !== !1 ? G.charCodeAt(N) === M && (A = !0) : C.isCustom === !0 ? A = Ce.exec(G, N, Y, ee) !== null : (this.updateLastIndex(Ce, N), A = Ce.exec(t) !== null), A === !0)
                break;
            }
          w = N - g, H = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(G, g, w, v, _), q.push({ offset: g, line: v, column: _, length: w, message: H });
        }
      }
      return this.hasCustom || (Y.length = b), { tokens: Y, groups: ee, errors: q };
    }, o.prototype.handleModes = function(t, l, s, R) {
      if (t.pop === !0) {
        var f = t.push;
        l(R), f !== void 0 && s.call(this, f);
      } else
        t.push !== void 0 && s.call(this, t.push);
    }, o.prototype.chopInput = function(t, l) {
      return t.substring(l);
    }, o.prototype.updateLastIndex = function(t, l) {
      t.lastIndex = l;
    }, o.prototype.updateTokenEndLineColumnLocation = function(t, l, s, R, f, y, p) {
      var n, i;
      l !== void 0 && (n = s === p - 1, i = n ? -1 : 0, R === 1 && n === !0 || (t.endLine = f + i, t.endColumn = y - 1 + -i));
    }, o.prototype.computeNewColumn = function(t, l) {
      return t + l;
    }, o.prototype.createTokenInstance = function() {
      for (var t = [], l = 0; l < arguments.length; l++)
        t[l] = arguments[l];
      return null;
    }, o.prototype.createOffsetOnlyToken = function(t, l, s, R) {
      return { image: t, startOffset: l, tokenTypeIdx: s, tokenType: R };
    }, o.prototype.createStartOnlyToken = function(t, l, s, R, f, y) {
      return { image: t, startOffset: l, startLine: f, startColumn: y, tokenTypeIdx: s, tokenType: R };
    }, o.prototype.createFullToken = function(t, l, s, R, f, y, p) {
      return { image: t, startOffset: l, endOffset: l + p - 1, startLine: f, endLine: f, startColumn: y, endColumn: y + p - 1, tokenTypeIdx: s, tokenType: R };
    }, o.prototype.addToken = function(t, l, s) {
      return 666;
    }, o.prototype.addTokenUsingPush = function(t, l, s) {
      return t.push(s), l;
    }, o.prototype.addTokenUsingMemberAccess = function(t, l, s) {
      return t[l] = s, l++, l;
    }, o.prototype.handlePayload = function(t, l) {
    }, o.prototype.handlePayloadNoCustom = function(t, l) {
    }, o.prototype.handlePayloadWithCustom = function(t, l) {
      l !== null && (t.payload = l);
    }, o.prototype.match = function(t, l, s) {
      return null;
    }, o.prototype.matchWithTest = function(t, l, s) {
      var R = t.test(l);
      return R === !0 ? l.substring(s, t.lastIndex) : null;
    }, o.prototype.matchWithExec = function(t, l) {
      var s = t.exec(l);
      return s !== null ? s[0] : s;
    }, o.prototype.TRACE_INIT = function(t, l) {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        var s = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(s + "--> <" + t + ">");
        var R = r.timer(l), f = R.time, y = R.value, p = f > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && p(s + "<-- <" + t + "> time: " + f + "ms"), this.traceInitIndent--, y;
      } else
        return l();
    }, o.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", o.NA = /NOT_APPLICABLE/, o;
  }();
  e.Lexer = E;
}), Ke = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.tokenMatcher = e.createTokenInstance = e.EOF = e.createToken = e.hasTokenLabel = e.tokenName = e.tokenLabel = void 0;
  var h = Ae(), r = tt(), T = qe();
  function m(c) {
    return u(c) ? c.LABEL : c.name;
  }
  e.tokenLabel = m;
  function O(c) {
    return c.name;
  }
  e.tokenName = O;
  function u(c) {
    return h.isString(c.LABEL) && c.LABEL !== "";
  }
  e.hasTokenLabel = u;
  var E = "parent", o = "categories", t = "label", l = "group", s = "push_mode", R = "pop_mode", f = "longer_alt", y = "line_breaks", p = "start_chars_hint";
  function n(c) {
    return i(c);
  }
  e.createToken = n;
  function i(c) {
    var P = c.pattern, F = {};
    if (F.name = c.name, h.isUndefined(P) || (F.PATTERN = P), h.has(c, E))
      throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
    return h.has(c, o) && (F.CATEGORIES = c[o]), T.augmentTokenTypes([F]), h.has(c, t) && (F.LABEL = c[t]), h.has(c, l) && (F.GROUP = c[l]), h.has(c, R) && (F.POP_MODE = c[R]), h.has(c, s) && (F.PUSH_MODE = c[s]), h.has(c, f) && (F.LONGER_ALT = c[f]), h.has(c, y) && (F.LINE_BREAKS = c[y]), h.has(c, p) && (F.START_CHARS_HINT = c[p]), F;
  }
  e.EOF = n({ name: "EOF", pattern: r.Lexer.NA }), T.augmentTokenTypes([e.EOF]);
  function a(c, P, F, w, H, k, G, x) {
    return { image: P, startOffset: F, endOffset: w, startLine: H, endLine: k, startColumn: G, endColumn: x, tokenTypeIdx: c.tokenTypeIdx, tokenType: c };
  }
  e.createTokenInstance = a;
  function d(c, P) {
    return T.tokenStructuredMatcher(c, P);
  }
  e.tokenMatcher = d;
}), Ue = Ee((e) => {
  var h = e && e.__extends || function() {
    var i = function(a, d) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, P) {
        c.__proto__ = P;
      } || function(c, P) {
        for (var F in P)
          Object.prototype.hasOwnProperty.call(P, F) && (c[F] = P[F]);
      }, i(a, d);
    };
    return function(a, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      i(a, d);
      function c() {
        this.constructor = a;
      }
      a.prototype = d === null ? Object.create(d) : (c.prototype = d.prototype, new c());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeProduction = e.serializeGrammar = e.Terminal = e.Alternation = e.RepetitionWithSeparator = e.Repetition = e.RepetitionMandatoryWithSeparator = e.RepetitionMandatory = e.Option = e.Alternative = e.Rule = e.NonTerminal = e.AbstractProduction = void 0;
  var r = Ae(), T = Ke(), m = function() {
    function i(a) {
      this._definition = a;
    }
    return Object.defineProperty(i.prototype, "definition", { get: function() {
      return this._definition;
    }, set: function(a) {
      this._definition = a;
    }, enumerable: !1, configurable: !0 }), i.prototype.accept = function(a) {
      a.visit(this), r.forEach(this.definition, function(d) {
        d.accept(a);
      });
    }, i;
  }();
  e.AbstractProduction = m;
  var O = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, []) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return Object.defineProperty(a.prototype, "definition", { get: function() {
      return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
    }, set: function(d) {
    }, enumerable: !1, configurable: !0 }), a.prototype.accept = function(d) {
      d.visit(this);
    }, a;
  }(m);
  e.NonTerminal = O;
  var u = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.orgText = "", r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.Rule = u;
  var E = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.ignoreAmbiguities = !1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.Alternative = E;
  var o = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.Option = o;
  var t = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.RepetitionMandatory = t;
  var l = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.RepetitionMandatoryWithSeparator = l;
  var s = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.Repetition = s;
  var R = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return a;
  }(m);
  e.RepetitionWithSeparator = R;
  var f = function(i) {
    h(a, i);
    function a(d) {
      var c = i.call(this, d.definition) || this;
      return c.idx = 1, c.ignoreAmbiguities = !1, c.hasPredicates = !1, r.assign(c, r.pick(d, function(P) {
        return P !== void 0;
      })), c;
    }
    return Object.defineProperty(a.prototype, "definition", { get: function() {
      return this._definition;
    }, set: function(d) {
      this._definition = d;
    }, enumerable: !1, configurable: !0 }), a;
  }(m);
  e.Alternation = f;
  var y = function() {
    function i(a) {
      this.idx = 1, r.assign(this, r.pick(a, function(d) {
        return d !== void 0;
      }));
    }
    return i.prototype.accept = function(a) {
      a.visit(this);
    }, i;
  }();
  e.Terminal = y;
  function p(i) {
    return r.map(i, n);
  }
  e.serializeGrammar = p;
  function n(i) {
    function a(P) {
      return r.map(P, n);
    }
    if (i instanceof O)
      return { type: "NonTerminal", name: i.nonTerminalName, idx: i.idx };
    if (i instanceof E)
      return { type: "Alternative", definition: a(i.definition) };
    if (i instanceof o)
      return { type: "Option", idx: i.idx, definition: a(i.definition) };
    if (i instanceof t)
      return { type: "RepetitionMandatory", idx: i.idx, definition: a(i.definition) };
    if (i instanceof l)
      return { type: "RepetitionMandatoryWithSeparator", idx: i.idx, separator: n(new y({ terminalType: i.separator })), definition: a(i.definition) };
    if (i instanceof R)
      return { type: "RepetitionWithSeparator", idx: i.idx, separator: n(new y({ terminalType: i.separator })), definition: a(i.definition) };
    if (i instanceof s)
      return { type: "Repetition", idx: i.idx, definition: a(i.definition) };
    if (i instanceof f)
      return { type: "Alternation", idx: i.idx, definition: a(i.definition) };
    if (i instanceof y) {
      var d = { type: "Terminal", name: i.terminalType.name, label: T.tokenLabel(i.terminalType), idx: i.idx }, c = i.terminalType.PATTERN;
      return i.terminalType.PATTERN && (d.pattern = r.isRegExp(c) ? c.source : c), d;
    } else {
      if (i instanceof u)
        return { type: "Rule", name: i.name, orgText: i.orgText, definition: a(i.definition) };
      throw Error("non exhaustive match");
    }
  }
  e.serializeProduction = n;
}), pt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RestWalker = void 0;
  var h = Ae(), r = Ue(), T = function() {
    function O() {
    }
    return O.prototype.walk = function(u, E) {
      var o = this;
      E === void 0 && (E = []), h.forEach(u.definition, function(t, l) {
        var s = h.drop(u.definition, l + 1);
        if (t instanceof r.NonTerminal)
          o.walkProdRef(t, s, E);
        else if (t instanceof r.Terminal)
          o.walkTerminal(t, s, E);
        else if (t instanceof r.Alternative)
          o.walkFlat(t, s, E);
        else if (t instanceof r.Option)
          o.walkOption(t, s, E);
        else if (t instanceof r.RepetitionMandatory)
          o.walkAtLeastOne(t, s, E);
        else if (t instanceof r.RepetitionMandatoryWithSeparator)
          o.walkAtLeastOneSep(t, s, E);
        else if (t instanceof r.RepetitionWithSeparator)
          o.walkManySep(t, s, E);
        else if (t instanceof r.Repetition)
          o.walkMany(t, s, E);
        else if (t instanceof r.Alternation)
          o.walkOr(t, s, E);
        else
          throw Error("non exhaustive match");
      });
    }, O.prototype.walkTerminal = function(u, E, o) {
    }, O.prototype.walkProdRef = function(u, E, o) {
    }, O.prototype.walkFlat = function(u, E, o) {
      var t = E.concat(o);
      this.walk(u, t);
    }, O.prototype.walkOption = function(u, E, o) {
      var t = E.concat(o);
      this.walk(u, t);
    }, O.prototype.walkAtLeastOne = function(u, E, o) {
      var t = [new r.Option({ definition: u.definition })].concat(E, o);
      this.walk(u, t);
    }, O.prototype.walkAtLeastOneSep = function(u, E, o) {
      var t = m(u, E, o);
      this.walk(u, t);
    }, O.prototype.walkMany = function(u, E, o) {
      var t = [new r.Option({ definition: u.definition })].concat(E, o);
      this.walk(u, t);
    }, O.prototype.walkManySep = function(u, E, o) {
      var t = m(u, E, o);
      this.walk(u, t);
    }, O.prototype.walkOr = function(u, E, o) {
      var t = this, l = E.concat(o);
      h.forEach(u.definition, function(s) {
        var R = new r.Alternative({ definition: [s] });
        t.walk(R, l);
      });
    }, O;
  }();
  e.RestWalker = T;
  function m(O, u, E) {
    var o = [new r.Option({ definition: [new r.Terminal({ terminalType: O.separator })].concat(O.definition) })], t = o.concat(u, E);
    return t;
  }
}), Qe = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.GAstVisitor = void 0;
  var h = Ue(), r = function() {
    function T() {
    }
    return T.prototype.visit = function(m) {
      var O = m;
      switch (O.constructor) {
        case h.NonTerminal:
          return this.visitNonTerminal(O);
        case h.Alternative:
          return this.visitAlternative(O);
        case h.Option:
          return this.visitOption(O);
        case h.RepetitionMandatory:
          return this.visitRepetitionMandatory(O);
        case h.RepetitionMandatoryWithSeparator:
          return this.visitRepetitionMandatoryWithSeparator(O);
        case h.RepetitionWithSeparator:
          return this.visitRepetitionWithSeparator(O);
        case h.Repetition:
          return this.visitRepetition(O);
        case h.Alternation:
          return this.visitAlternation(O);
        case h.Terminal:
          return this.visitTerminal(O);
        case h.Rule:
          return this.visitRule(O);
        default:
          throw Error("non exhaustive match");
      }
    }, T.prototype.visitNonTerminal = function(m) {
    }, T.prototype.visitAlternative = function(m) {
    }, T.prototype.visitOption = function(m) {
    }, T.prototype.visitRepetition = function(m) {
    }, T.prototype.visitRepetitionMandatory = function(m) {
    }, T.prototype.visitRepetitionMandatoryWithSeparator = function(m) {
    }, T.prototype.visitRepetitionWithSeparator = function(m) {
    }, T.prototype.visitAlternation = function(m) {
    }, T.prototype.visitTerminal = function(m) {
    }, T.prototype.visitRule = function(m) {
    }, T;
  }();
  e.GAstVisitor = r;
}), nt = Ee((e) => {
  var h = e && e.__extends || function() {
    var R = function(f, y) {
      return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, n) {
        p.__proto__ = n;
      } || function(p, n) {
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (p[i] = n[i]);
      }, R(f, y);
    };
    return function(f, y) {
      if (typeof y != "function" && y !== null)
        throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
      R(f, y);
      function p() {
        this.constructor = f;
      }
      f.prototype = y === null ? Object.create(y) : (p.prototype = y.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.collectMethods = e.DslMethodsCollectorVisitor = e.getProductionDslName = e.isBranchingProd = e.isOptionalProd = e.isSequenceProd = void 0;
  var r = Ae(), T = Ue(), m = Qe();
  function O(R) {
    return R instanceof T.Alternative || R instanceof T.Option || R instanceof T.Repetition || R instanceof T.RepetitionMandatory || R instanceof T.RepetitionMandatoryWithSeparator || R instanceof T.RepetitionWithSeparator || R instanceof T.Terminal || R instanceof T.Rule;
  }
  e.isSequenceProd = O;
  function u(R, f) {
    f === void 0 && (f = []);
    var y = R instanceof T.Option || R instanceof T.Repetition || R instanceof T.RepetitionWithSeparator;
    return y ? !0 : R instanceof T.Alternation ? r.some(R.definition, function(p) {
      return u(p, f);
    }) : R instanceof T.NonTerminal && r.contains(f, R) ? !1 : R instanceof T.AbstractProduction ? (R instanceof T.NonTerminal && f.push(R), r.every(R.definition, function(p) {
      return u(p, f);
    })) : !1;
  }
  e.isOptionalProd = u;
  function E(R) {
    return R instanceof T.Alternation;
  }
  e.isBranchingProd = E;
  function o(R) {
    if (R instanceof T.NonTerminal)
      return "SUBRULE";
    if (R instanceof T.Option)
      return "OPTION";
    if (R instanceof T.Alternation)
      return "OR";
    if (R instanceof T.RepetitionMandatory)
      return "AT_LEAST_ONE";
    if (R instanceof T.RepetitionMandatoryWithSeparator)
      return "AT_LEAST_ONE_SEP";
    if (R instanceof T.RepetitionWithSeparator)
      return "MANY_SEP";
    if (R instanceof T.Repetition)
      return "MANY";
    if (R instanceof T.Terminal)
      return "CONSUME";
    throw Error("non exhaustive match");
  }
  e.getProductionDslName = o;
  var t = function(R) {
    h(f, R);
    function f() {
      var y = R !== null && R.apply(this, arguments) || this;
      return y.separator = "-", y.dslMethods = { option: [], alternation: [], repetition: [], repetitionWithSeparator: [], repetitionMandatory: [], repetitionMandatoryWithSeparator: [] }, y;
    }
    return f.prototype.reset = function() {
      this.dslMethods = { option: [], alternation: [], repetition: [], repetitionWithSeparator: [], repetitionMandatory: [], repetitionMandatoryWithSeparator: [] };
    }, f.prototype.visitTerminal = function(y) {
      var p = y.terminalType.name + this.separator + "Terminal";
      r.has(this.dslMethods, p) || (this.dslMethods[p] = []), this.dslMethods[p].push(y);
    }, f.prototype.visitNonTerminal = function(y) {
      var p = y.nonTerminalName + this.separator + "Terminal";
      r.has(this.dslMethods, p) || (this.dslMethods[p] = []), this.dslMethods[p].push(y);
    }, f.prototype.visitOption = function(y) {
      this.dslMethods.option.push(y);
    }, f.prototype.visitRepetitionWithSeparator = function(y) {
      this.dslMethods.repetitionWithSeparator.push(y);
    }, f.prototype.visitRepetitionMandatory = function(y) {
      this.dslMethods.repetitionMandatory.push(y);
    }, f.prototype.visitRepetitionMandatoryWithSeparator = function(y) {
      this.dslMethods.repetitionMandatoryWithSeparator.push(y);
    }, f.prototype.visitRepetition = function(y) {
      this.dslMethods.repetition.push(y);
    }, f.prototype.visitAlternation = function(y) {
      this.dslMethods.alternation.push(y);
    }, f;
  }(m.GAstVisitor);
  e.DslMethodsCollectorVisitor = t;
  var l = new t();
  function s(R) {
    l.reset(), R.accept(l);
    var f = l.dslMethods;
    return l.reset(), f;
  }
  e.collectMethods = s;
}), Tt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.firstForTerminal = e.firstForBranching = e.firstForSequence = e.first = void 0;
  var h = Ae(), r = Ue(), T = nt();
  function m(o) {
    if (o instanceof r.NonTerminal)
      return m(o.referencedRule);
    if (o instanceof r.Terminal)
      return E(o);
    if (T.isSequenceProd(o))
      return O(o);
    if (T.isBranchingProd(o))
      return u(o);
    throw Error("non exhaustive match");
  }
  e.first = m;
  function O(o) {
    for (var t = [], l = o.definition, s = 0, R = l.length > s, f, y = !0; R && y; )
      f = l[s], y = T.isOptionalProd(f), t = t.concat(m(f)), s = s + 1, R = l.length > s;
    return h.uniq(t);
  }
  e.firstForSequence = O;
  function u(o) {
    var t = h.map(o.definition, function(l) {
      return m(l);
    });
    return h.uniq(h.flatten(t));
  }
  e.firstForBranching = u;
  function E(o) {
    return [o.terminalType];
  }
  e.firstForTerminal = E;
}), gt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.IN = void 0, e.IN = "_~IN~_";
}), zt = Ee((e) => {
  var h = e && e.__extends || function() {
    var s = function(R, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, p) {
        y.__proto__ = p;
      } || function(y, p) {
        for (var n in p)
          Object.prototype.hasOwnProperty.call(p, n) && (y[n] = p[n]);
      }, s(R, f);
    };
    return function(R, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(R, f);
      function y() {
        this.constructor = R;
      }
      R.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildInProdFollowPrefix = e.buildBetweenProdsFollowPrefix = e.computeAllProdsFollows = e.ResyncFollowsWalker = void 0;
  var r = pt(), T = Tt(), m = Ae(), O = gt(), u = Ue(), E = function(s) {
    h(R, s);
    function R(f) {
      var y = s.call(this) || this;
      return y.topProd = f, y.follows = {}, y;
    }
    return R.prototype.startWalking = function() {
      return this.walk(this.topProd), this.follows;
    }, R.prototype.walkTerminal = function(f, y, p) {
    }, R.prototype.walkProdRef = function(f, y, p) {
      var n = t(f.referencedRule, f.idx) + this.topProd.name, i = y.concat(p), a = new u.Alternative({ definition: i }), d = T.first(a);
      this.follows[n] = d;
    }, R;
  }(r.RestWalker);
  e.ResyncFollowsWalker = E;
  function o(s) {
    var R = {};
    return m.forEach(s, function(f) {
      var y = new E(f).startWalking();
      m.assign(R, y);
    }), R;
  }
  e.computeAllProdsFollows = o;
  function t(s, R) {
    return s.name + R + O.IN;
  }
  e.buildBetweenProdsFollowPrefix = t;
  function l(s) {
    var R = s.terminalType.name;
    return R + s.idx + O.IN;
  }
  e.buildInProdFollowPrefix = l;
}), rt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultGrammarValidatorErrorProvider = e.defaultGrammarResolverErrorProvider = e.defaultParserErrorProvider = void 0;
  var h = Ke(), r = Ae(), T = Ae(), m = Ue(), O = nt();
  e.defaultParserErrorProvider = { buildMismatchTokenMessage: function(u) {
    var E = u.expected, o = u.actual;
    u.previous, u.ruleName;
    var t = h.hasTokenLabel(E), l = t ? "--> " + h.tokenLabel(E) + " <--" : "token of type --> " + E.name + " <--", s = "Expecting " + l + " but found --> '" + o.image + "' <--";
    return s;
  }, buildNotAllInputParsedMessage: function(u) {
    var E = u.firstRedundant;
    return u.ruleName, "Redundant input, expecting EOF but found: " + E.image;
  }, buildNoViableAltMessage: function(u) {
    var E = u.expectedPathsPerAlt, o = u.actual;
    u.previous;
    var t = u.customUserDescription;
    u.ruleName;
    var l = "Expecting: ", s = T.first(o).image, R = `
but found: '` + s + "'";
    if (t)
      return l + t + R;
    var f = T.reduce(E, function(i, a) {
      return i.concat(a);
    }, []), y = T.map(f, function(i) {
      return "[" + T.map(i, function(a) {
        return h.tokenLabel(a);
      }).join(", ") + "]";
    }), p = T.map(y, function(i, a) {
      return "  " + (a + 1) + ". " + i;
    }), n = `one of these possible Token sequences:
` + p.join(`
`);
    return l + n + R;
  }, buildEarlyExitMessage: function(u) {
    var E = u.expectedIterationPaths, o = u.actual, t = u.customUserDescription;
    u.ruleName;
    var l = "Expecting: ", s = T.first(o).image, R = `
but found: '` + s + "'";
    if (t)
      return l + t + R;
    var f = T.map(E, function(p) {
      return "[" + T.map(p, function(n) {
        return h.tokenLabel(n);
      }).join(",") + "]";
    }), y = `expecting at least one iteration which starts with one of these possible Token sequences::
  ` + ("<" + f.join(" ,") + ">");
    return l + y + R;
  } }, Object.freeze(e.defaultParserErrorProvider), e.defaultGrammarResolverErrorProvider = { buildRuleNotFoundError: function(u, E) {
    var o = "Invalid grammar, reference to a rule which is not defined: ->" + E.nonTerminalName + `<-
inside top level rule: ->` + u.name + "<-";
    return o;
  } }, e.defaultGrammarValidatorErrorProvider = { buildDuplicateFoundError: function(u, E) {
    function o(n) {
      return n instanceof m.Terminal ? n.terminalType.name : n instanceof m.NonTerminal ? n.nonTerminalName : "";
    }
    var t = u.name, l = T.first(E), s = l.idx, R = O.getProductionDslName(l), f = o(l), y = s > 0, p = "->" + R + (y ? s : "") + "<- " + (f ? "with argument: ->" + f + "<-" : "") + `
                  appears more than once (` + E.length + " times) in the top level rule: ->" + t + `<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;
    return p = p.replace(/[ \t]+/g, " "), p = p.replace(/\s\s+/g, `
`), p;
  }, buildNamespaceConflictError: function(u) {
    var E = `Namespace conflict found in grammar.
` + ("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <" + u.name + `>.
`) + `To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
    return E;
  }, buildAlternationPrefixAmbiguityError: function(u) {
    var E = T.map(u.prefixPath, function(l) {
      return h.tokenLabel(l);
    }).join(", "), o = u.alternation.idx === 0 ? "" : u.alternation.idx, t = "Ambiguous alternatives: <" + u.ambiguityIndices.join(" ,") + `> due to common lookahead prefix
` + ("in <OR" + o + "> inside <" + u.topLevelRule.name + `> Rule,
`) + ("<" + E + `> may appears as a prefix path in all these alternatives.
`) + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    return t;
  }, buildAlternationAmbiguityError: function(u) {
    var E = T.map(u.prefixPath, function(l) {
      return h.tokenLabel(l);
    }).join(", "), o = u.alternation.idx === 0 ? "" : u.alternation.idx, t = "Ambiguous Alternatives Detected: <" + u.ambiguityIndices.join(" ,") + "> in <OR" + o + ">" + (" inside <" + u.topLevelRule.name + `> Rule,
`) + ("<" + E + `> may appears as a prefix path in all these alternatives.
`);
    return t = t + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, t;
  }, buildEmptyRepetitionError: function(u) {
    var E = O.getProductionDslName(u.repetition);
    u.repetition.idx !== 0 && (E += u.repetition.idx);
    var o = "The repetition <" + E + "> within Rule <" + u.topLevelRule.name + `> can never consume any tokens.
This could lead to an infinite loop.`;
    return o;
  }, buildTokenNameError: function(u) {
    return "deprecated";
  }, buildEmptyAlternationError: function(u) {
    var E = "Ambiguous empty alternative: <" + (u.emptyChoiceIdx + 1) + ">" + (" in <OR" + u.alternation.idx + "> inside <" + u.topLevelRule.name + `> Rule.
`) + "Only the last alternative may be an empty alternative.";
    return E;
  }, buildTooManyAlternativesError: function(u) {
    var E = `An Alternation cannot have more than 256 alternatives:
` + ("<OR" + u.alternation.idx + "> inside <" + u.topLevelRule.name + `> Rule.
 has ` + (u.alternation.definition.length + 1) + " alternatives.");
    return E;
  }, buildLeftRecursionError: function(u) {
    var E = u.topLevelRule.name, o = r.map(u.leftRecursionPath, function(s) {
      return s.name;
    }), t = E + " --> " + o.concat([E]).join(" --> "), l = `Left Recursion found in grammar.
` + ("rule: <" + E + `> can be invoked from itself (directly or indirectly)
`) + (`without consuming any Tokens. The grammar path that causes this is:
 ` + t + `
`) + ` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;
    return l;
  }, buildInvalidRuleNameError: function(u) {
    return "deprecated";
  }, buildDuplicateRuleNameError: function(u) {
    var E;
    u.topLevelRule instanceof m.Rule ? E = u.topLevelRule.name : E = u.topLevelRule;
    var o = "Duplicate definition, rule: ->" + E + "<- is already defined in the grammar: ->" + u.grammarName + "<-";
    return o;
  } };
}), Kt = Ee((e) => {
  var h = e && e.__extends || function() {
    var E = function(o, t) {
      return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, s) {
        l.__proto__ = s;
      } || function(l, s) {
        for (var R in s)
          Object.prototype.hasOwnProperty.call(s, R) && (l[R] = s[R]);
      }, E(o, t);
    };
    return function(o, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      E(o, t);
      function l() {
        this.constructor = o;
      }
      o.prototype = t === null ? Object.create(t) : (l.prototype = t.prototype, new l());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.GastRefResolverVisitor = e.resolveGrammar = void 0;
  var r = Be(), T = Ae(), m = Qe();
  function O(E, o) {
    var t = new u(E, o);
    return t.resolveRefs(), t.errors;
  }
  e.resolveGrammar = O;
  var u = function(E) {
    h(o, E);
    function o(t, l) {
      var s = E.call(this) || this;
      return s.nameToTopRule = t, s.errMsgProvider = l, s.errors = [], s;
    }
    return o.prototype.resolveRefs = function() {
      var t = this;
      T.forEach(T.values(this.nameToTopRule), function(l) {
        t.currTopLevel = l, l.accept(t);
      });
    }, o.prototype.visitNonTerminal = function(t) {
      var l = this.nameToTopRule[t.nonTerminalName];
      if (l)
        t.referencedRule = l;
      else {
        var s = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, t);
        this.errors.push({ message: s, type: r.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF, ruleName: this.currTopLevel.name, unresolvedRefName: t.nonTerminalName });
      }
    }, o;
  }(m.GAstVisitor);
  e.GastRefResolverVisitor = u;
}), ot = Ee((e) => {
  var h = e && e.__extends || function() {
    var n = function(i, a) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var P in c)
          Object.prototype.hasOwnProperty.call(c, P) && (d[P] = c[P]);
      }, n(i, a);
    };
    return function(i, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      n(i, a);
      function d() {
        this.constructor = i;
      }
      i.prototype = a === null ? Object.create(a) : (d.prototype = a.prototype, new d());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.nextPossibleTokensAfter = e.possiblePathsFrom = e.NextTerminalAfterAtLeastOneSepWalker = e.NextTerminalAfterAtLeastOneWalker = e.NextTerminalAfterManySepWalker = e.NextTerminalAfterManyWalker = e.AbstractNextTerminalAfterProductionWalker = e.NextAfterTokenWalker = e.AbstractNextPossibleTokensWalker = void 0;
  var r = pt(), T = Ae(), m = Tt(), O = Ue(), u = function(n) {
    h(i, n);
    function i(a, d) {
      var c = n.call(this) || this;
      return c.topProd = a, c.path = d, c.possibleTokTypes = [], c.nextProductionName = "", c.nextProductionOccurrence = 0, c.found = !1, c.isAtEndOfPath = !1, c;
    }
    return i.prototype.startWalking = function() {
      if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
        throw Error("The path does not start with the walker's top Rule!");
      return this.ruleStack = T.cloneArr(this.path.ruleStack).reverse(), this.occurrenceStack = T.cloneArr(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
    }, i.prototype.walk = function(a, d) {
      d === void 0 && (d = []), this.found || n.prototype.walk.call(this, a, d);
    }, i.prototype.walkProdRef = function(a, d, c) {
      if (a.referencedRule.name === this.nextProductionName && a.idx === this.nextProductionOccurrence) {
        var P = d.concat(c);
        this.updateExpectedNext(), this.walk(a.referencedRule, P);
      }
    }, i.prototype.updateExpectedNext = function() {
      T.isEmpty(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
    }, i;
  }(r.RestWalker);
  e.AbstractNextPossibleTokensWalker = u;
  var E = function(n) {
    h(i, n);
    function i(a, d) {
      var c = n.call(this, a, d) || this;
      return c.path = d, c.nextTerminalName = "", c.nextTerminalOccurrence = 0, c.nextTerminalName = c.path.lastTok.name, c.nextTerminalOccurrence = c.path.lastTokOccurrence, c;
    }
    return i.prototype.walkTerminal = function(a, d, c) {
      if (this.isAtEndOfPath && a.terminalType.name === this.nextTerminalName && a.idx === this.nextTerminalOccurrence && !this.found) {
        var P = d.concat(c), F = new O.Alternative({ definition: P });
        this.possibleTokTypes = m.first(F), this.found = !0;
      }
    }, i;
  }(u);
  e.NextAfterTokenWalker = E;
  var o = function(n) {
    h(i, n);
    function i(a, d) {
      var c = n.call(this) || this;
      return c.topRule = a, c.occurrence = d, c.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 }, c;
    }
    return i.prototype.startWalking = function() {
      return this.walk(this.topRule), this.result;
    }, i;
  }(r.RestWalker);
  e.AbstractNextTerminalAfterProductionWalker = o;
  var t = function(n) {
    h(i, n);
    function i() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return i.prototype.walkMany = function(a, d, c) {
      if (a.idx === this.occurrence) {
        var P = T.first(d.concat(c));
        this.result.isEndOfRule = P === void 0, P instanceof O.Terminal && (this.result.token = P.terminalType, this.result.occurrence = P.idx);
      } else
        n.prototype.walkMany.call(this, a, d, c);
    }, i;
  }(o);
  e.NextTerminalAfterManyWalker = t;
  var l = function(n) {
    h(i, n);
    function i() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return i.prototype.walkManySep = function(a, d, c) {
      if (a.idx === this.occurrence) {
        var P = T.first(d.concat(c));
        this.result.isEndOfRule = P === void 0, P instanceof O.Terminal && (this.result.token = P.terminalType, this.result.occurrence = P.idx);
      } else
        n.prototype.walkManySep.call(this, a, d, c);
    }, i;
  }(o);
  e.NextTerminalAfterManySepWalker = l;
  var s = function(n) {
    h(i, n);
    function i() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return i.prototype.walkAtLeastOne = function(a, d, c) {
      if (a.idx === this.occurrence) {
        var P = T.first(d.concat(c));
        this.result.isEndOfRule = P === void 0, P instanceof O.Terminal && (this.result.token = P.terminalType, this.result.occurrence = P.idx);
      } else
        n.prototype.walkAtLeastOne.call(this, a, d, c);
    }, i;
  }(o);
  e.NextTerminalAfterAtLeastOneWalker = s;
  var R = function(n) {
    h(i, n);
    function i() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return i.prototype.walkAtLeastOneSep = function(a, d, c) {
      if (a.idx === this.occurrence) {
        var P = T.first(d.concat(c));
        this.result.isEndOfRule = P === void 0, P instanceof O.Terminal && (this.result.token = P.terminalType, this.result.occurrence = P.idx);
      } else
        n.prototype.walkAtLeastOneSep.call(this, a, d, c);
    }, i;
  }(o);
  e.NextTerminalAfterAtLeastOneSepWalker = R;
  function f(n, i, a) {
    a === void 0 && (a = []), a = T.cloneArr(a);
    var d = [], c = 0;
    function P(k) {
      return k.concat(T.drop(n, c + 1));
    }
    function F(k) {
      var G = f(P(k), i, a);
      return d.concat(G);
    }
    for (; a.length < i && c < n.length; ) {
      var w = n[c];
      if (w instanceof O.Alternative || w instanceof O.NonTerminal)
        return F(w.definition);
      if (w instanceof O.Option)
        d = F(w.definition);
      else if (w instanceof O.RepetitionMandatory) {
        var H = w.definition.concat([new O.Repetition({ definition: w.definition })]);
        return F(H);
      } else if (w instanceof O.RepetitionMandatoryWithSeparator) {
        var H = [new O.Alternative({ definition: w.definition }), new O.Repetition({ definition: [new O.Terminal({ terminalType: w.separator })].concat(w.definition) })];
        return F(H);
      } else if (w instanceof O.RepetitionWithSeparator) {
        var H = w.definition.concat([new O.Repetition({ definition: [new O.Terminal({ terminalType: w.separator })].concat(w.definition) })]);
        d = F(H);
      } else if (w instanceof O.Repetition) {
        var H = w.definition.concat([new O.Repetition({ definition: w.definition })]);
        d = F(H);
      } else {
        if (w instanceof O.Alternation)
          return T.forEach(w.definition, function(k) {
            T.isEmpty(k.definition) === !1 && (d = F(k.definition));
          }), d;
        if (w instanceof O.Terminal)
          a.push(w.terminalType);
        else
          throw Error("non exhaustive match");
      }
      c++;
    }
    return d.push({ partialPath: a, suffixDef: T.drop(n, c) }), d;
  }
  e.possiblePathsFrom = f;
  function y(n, i, a, d) {
    var c = "EXIT_NONE_TERMINAL", P = [c], F = "EXIT_ALTERNATIVE", w = !1, H = i.length, k = H - d - 1, G = [], x = [];
    for (x.push({ idx: -1, def: n, ruleStack: [], occurrenceStack: [] }); !T.isEmpty(x); ) {
      var N = x.pop();
      if (N === F) {
        w && T.last(x).idx <= k && x.pop();
        continue;
      }
      var b = N.def, S = N.idx, Y = N.ruleStack, q = N.occurrenceStack;
      if (!T.isEmpty(b)) {
        var W = b[0];
        if (W === c) {
          var $ = { idx: S, def: T.drop(b), ruleStack: T.dropRight(Y), occurrenceStack: T.dropRight(q) };
          x.push($);
        } else if (W instanceof O.Terminal)
          if (S < H - 1) {
            var ee = S + 1, ae = i[ee];
            if (a(ae, W.terminalType)) {
              var $ = { idx: ee, def: T.drop(b), ruleStack: Y, occurrenceStack: q };
              x.push($);
            }
          } else if (S === H - 1)
            G.push({ nextTokenType: W.terminalType, nextTokenOccurrence: W.idx, ruleStack: Y, occurrenceStack: q }), w = !0;
          else
            throw Error("non exhaustive match");
        else if (W instanceof O.NonTerminal) {
          var ie = T.cloneArr(Y);
          ie.push(W.nonTerminalName);
          var se = T.cloneArr(q);
          se.push(W.idx);
          var $ = { idx: S, def: W.definition.concat(P, T.drop(b)), ruleStack: ie, occurrenceStack: se };
          x.push($);
        } else if (W instanceof O.Option) {
          var ne = { idx: S, def: T.drop(b), ruleStack: Y, occurrenceStack: q };
          x.push(ne), x.push(F);
          var pe = { idx: S, def: W.definition.concat(T.drop(b)), ruleStack: Y, occurrenceStack: q };
          x.push(pe);
        } else if (W instanceof O.RepetitionMandatory) {
          var D = new O.Repetition({ definition: W.definition, idx: W.idx }), B = W.definition.concat([D], T.drop(b)), $ = { idx: S, def: B, ruleStack: Y, occurrenceStack: q };
          x.push($);
        } else if (W instanceof O.RepetitionMandatoryWithSeparator) {
          var z = new O.Terminal({ terminalType: W.separator }), D = new O.Repetition({ definition: [z].concat(W.definition), idx: W.idx }), B = W.definition.concat([D], T.drop(b)), $ = { idx: S, def: B, ruleStack: Y, occurrenceStack: q };
          x.push($);
        } else if (W instanceof O.RepetitionWithSeparator) {
          var ne = { idx: S, def: T.drop(b), ruleStack: Y, occurrenceStack: q };
          x.push(ne), x.push(F);
          var z = new O.Terminal({ terminalType: W.separator }), X = new O.Repetition({ definition: [z].concat(W.definition), idx: W.idx }), B = W.definition.concat([X], T.drop(b)), pe = { idx: S, def: B, ruleStack: Y, occurrenceStack: q };
          x.push(pe);
        } else if (W instanceof O.Repetition) {
          var ne = { idx: S, def: T.drop(b), ruleStack: Y, occurrenceStack: q };
          x.push(ne), x.push(F);
          var X = new O.Repetition({ definition: W.definition, idx: W.idx }), B = W.definition.concat([X], T.drop(b)), pe = { idx: S, def: B, ruleStack: Y, occurrenceStack: q };
          x.push(pe);
        } else if (W instanceof O.Alternation)
          for (var Q = W.definition.length - 1; Q >= 0; Q--) {
            var re = W.definition[Q], ve = { idx: S, def: re.definition.concat(T.drop(b)), ruleStack: Y, occurrenceStack: q };
            x.push(ve), x.push(F);
          }
        else if (W instanceof O.Alternative)
          x.push({ idx: S, def: W.definition.concat(T.drop(b)), ruleStack: Y, occurrenceStack: q });
        else if (W instanceof O.Rule)
          x.push(p(W, S, Y, q));
        else
          throw Error("non exhaustive match");
      }
    }
    return G;
  }
  e.nextPossibleTokensAfter = y;
  function p(n, i, a, d) {
    var c = T.cloneArr(a);
    c.push(n.name);
    var P = T.cloneArr(d);
    return P.push(1), { idx: i, def: n.definition, ruleStack: c, occurrenceStack: P };
  }
}), it = Ee((e) => {
  var h = e && e.__extends || function() {
    var k = function(G, x) {
      return k = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(N, b) {
        N.__proto__ = b;
      } || function(N, b) {
        for (var S in b)
          Object.prototype.hasOwnProperty.call(b, S) && (N[S] = b[S]);
      }, k(G, x);
    };
    return function(G, x) {
      if (typeof x != "function" && x !== null)
        throw new TypeError("Class extends value " + String(x) + " is not a constructor or null");
      k(G, x);
      function N() {
        this.constructor = G;
      }
      G.prototype = x === null ? Object.create(x) : (N.prototype = x.prototype, new N());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.areTokenCategoriesNotUsed = e.isStrictPrefixOfPath = e.containsPath = e.getLookaheadPathsForOptionalProd = e.getLookaheadPathsForOr = e.lookAheadSequenceFromAlternatives = e.buildSingleAlternativeLookaheadFunction = e.buildAlternativesLookAheadFunc = e.buildLookaheadFuncForOptionalProd = e.buildLookaheadFuncForOr = e.getProdType = e.PROD_TYPE = void 0;
  var r = Ae(), T = ot(), m = pt(), O = qe(), u = Ue(), E = Qe(), o;
  (function(k) {
    k[k.OPTION = 0] = "OPTION", k[k.REPETITION = 1] = "REPETITION", k[k.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", k[k.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", k[k.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", k[k.ALTERNATION = 5] = "ALTERNATION";
  })(o = e.PROD_TYPE || (e.PROD_TYPE = {}));
  function t(k) {
    if (k instanceof u.Option)
      return o.OPTION;
    if (k instanceof u.Repetition)
      return o.REPETITION;
    if (k instanceof u.RepetitionMandatory)
      return o.REPETITION_MANDATORY;
    if (k instanceof u.RepetitionMandatoryWithSeparator)
      return o.REPETITION_MANDATORY_WITH_SEPARATOR;
    if (k instanceof u.RepetitionWithSeparator)
      return o.REPETITION_WITH_SEPARATOR;
    if (k instanceof u.Alternation)
      return o.ALTERNATION;
    throw Error("non exhaustive match");
  }
  e.getProdType = t;
  function l(k, G, x, N, b, S) {
    var Y = c(k, G, x), q = H(Y) ? O.tokenStructuredMatcherNoCategories : O.tokenStructuredMatcher;
    return S(Y, N, q, b);
  }
  e.buildLookaheadFuncForOr = l;
  function s(k, G, x, N, b, S) {
    var Y = P(k, G, b, x), q = H(Y) ? O.tokenStructuredMatcherNoCategories : O.tokenStructuredMatcher;
    return S(Y[0], q, N);
  }
  e.buildLookaheadFuncForOptionalProd = s;
  function R(k, G, x, N) {
    var b = k.length, S = r.every(k, function(W) {
      return r.every(W, function($) {
        return $.length === 1;
      });
    });
    if (G)
      return function(W) {
        for (var $ = r.map(W, function(X) {
          return X.GATE;
        }), ee = 0; ee < b; ee++) {
          var ae = k[ee], ie = ae.length, se = $[ee];
          if (se !== void 0 && se.call(this) === !1)
            continue;
          e:
            for (var ne = 0; ne < ie; ne++) {
              for (var pe = ae[ne], D = pe.length, B = 0; B < D; B++) {
                var z = this.LA(B + 1);
                if (x(z, pe[B]) === !1)
                  continue e;
              }
              return ee;
            }
        }
      };
    if (S && !N) {
      var Y = r.map(k, function(W) {
        return r.flatten(W);
      }), q = r.reduce(Y, function(W, $, ee) {
        return r.forEach($, function(ae) {
          r.has(W, ae.tokenTypeIdx) || (W[ae.tokenTypeIdx] = ee), r.forEach(ae.categoryMatches, function(ie) {
            r.has(W, ie) || (W[ie] = ee);
          });
        }), W;
      }, []);
      return function() {
        var W = this.LA(1);
        return q[W.tokenTypeIdx];
      };
    } else
      return function() {
        for (var W = 0; W < b; W++) {
          var $ = k[W], ee = $.length;
          e:
            for (var ae = 0; ae < ee; ae++) {
              for (var ie = $[ae], se = ie.length, ne = 0; ne < se; ne++) {
                var pe = this.LA(ne + 1);
                if (x(pe, ie[ne]) === !1)
                  continue e;
              }
              return W;
            }
        }
      };
  }
  e.buildAlternativesLookAheadFunc = R;
  function f(k, G, x) {
    var N = r.every(k, function($) {
      return $.length === 1;
    }), b = k.length;
    if (N && !x) {
      var S = r.flatten(k);
      if (S.length === 1 && r.isEmpty(S[0].categoryMatches)) {
        var Y = S[0], q = Y.tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === q;
        };
      } else {
        var W = r.reduce(S, function($, ee, ae) {
          return $[ee.tokenTypeIdx] = !0, r.forEach(ee.categoryMatches, function(ie) {
            $[ie] = !0;
          }), $;
        }, []);
        return function() {
          var $ = this.LA(1);
          return W[$.tokenTypeIdx] === !0;
        };
      }
    } else
      return function() {
        e:
          for (var $ = 0; $ < b; $++) {
            for (var ee = k[$], ae = ee.length, ie = 0; ie < ae; ie++) {
              var se = this.LA(ie + 1);
              if (G(se, ee[ie]) === !1)
                continue e;
            }
            return !0;
          }
        return !1;
      };
  }
  e.buildSingleAlternativeLookaheadFunction = f;
  var y = function(k) {
    h(G, k);
    function G(x, N, b) {
      var S = k.call(this) || this;
      return S.topProd = x, S.targetOccurrence = N, S.targetProdType = b, S;
    }
    return G.prototype.startWalking = function() {
      return this.walk(this.topProd), this.restDef;
    }, G.prototype.checkIsTarget = function(x, N, b, S) {
      return x.idx === this.targetOccurrence && this.targetProdType === N ? (this.restDef = b.concat(S), !0) : !1;
    }, G.prototype.walkOption = function(x, N, b) {
      this.checkIsTarget(x, o.OPTION, N, b) || k.prototype.walkOption.call(this, x, N, b);
    }, G.prototype.walkAtLeastOne = function(x, N, b) {
      this.checkIsTarget(x, o.REPETITION_MANDATORY, N, b) || k.prototype.walkOption.call(this, x, N, b);
    }, G.prototype.walkAtLeastOneSep = function(x, N, b) {
      this.checkIsTarget(x, o.REPETITION_MANDATORY_WITH_SEPARATOR, N, b) || k.prototype.walkOption.call(this, x, N, b);
    }, G.prototype.walkMany = function(x, N, b) {
      this.checkIsTarget(x, o.REPETITION, N, b) || k.prototype.walkOption.call(this, x, N, b);
    }, G.prototype.walkManySep = function(x, N, b) {
      this.checkIsTarget(x, o.REPETITION_WITH_SEPARATOR, N, b) || k.prototype.walkOption.call(this, x, N, b);
    }, G;
  }(m.RestWalker), p = function(k) {
    h(G, k);
    function G(x, N, b) {
      var S = k.call(this) || this;
      return S.targetOccurrence = x, S.targetProdType = N, S.targetRef = b, S.result = [], S;
    }
    return G.prototype.checkIsTarget = function(x, N) {
      x.idx === this.targetOccurrence && this.targetProdType === N && (this.targetRef === void 0 || x === this.targetRef) && (this.result = x.definition);
    }, G.prototype.visitOption = function(x) {
      this.checkIsTarget(x, o.OPTION);
    }, G.prototype.visitRepetition = function(x) {
      this.checkIsTarget(x, o.REPETITION);
    }, G.prototype.visitRepetitionMandatory = function(x) {
      this.checkIsTarget(x, o.REPETITION_MANDATORY);
    }, G.prototype.visitRepetitionMandatoryWithSeparator = function(x) {
      this.checkIsTarget(x, o.REPETITION_MANDATORY_WITH_SEPARATOR);
    }, G.prototype.visitRepetitionWithSeparator = function(x) {
      this.checkIsTarget(x, o.REPETITION_WITH_SEPARATOR);
    }, G.prototype.visitAlternation = function(x) {
      this.checkIsTarget(x, o.ALTERNATION);
    }, G;
  }(E.GAstVisitor);
  function n(k) {
    for (var G = new Array(k), x = 0; x < k; x++)
      G[x] = [];
    return G;
  }
  function i(k) {
    for (var G = [""], x = 0; x < k.length; x++) {
      for (var N = k[x], b = [], S = 0; S < G.length; S++) {
        var Y = G[S];
        b.push(Y + "_" + N.tokenTypeIdx);
        for (var q = 0; q < N.categoryMatches.length; q++) {
          var W = "_" + N.categoryMatches[q];
          b.push(Y + W);
        }
      }
      G = b;
    }
    return G;
  }
  function a(k, G, x) {
    for (var N = 0; N < k.length; N++)
      if (N !== x)
        for (var b = k[N], S = 0; S < G.length; S++) {
          var Y = G[S];
          if (b[Y] === !0)
            return !1;
        }
    return !0;
  }
  function d(k, G) {
    for (var x = r.map(k, function(ee) {
      return T.possiblePathsFrom([ee], 1);
    }), N = n(x.length), b = r.map(x, function(ee) {
      var ae = {};
      return r.forEach(ee, function(ie) {
        var se = i(ie.partialPath);
        r.forEach(se, function(ne) {
          ae[ne] = !0;
        });
      }), ae;
    }), S = x, Y = 1; Y <= G; Y++) {
      var q = S;
      S = n(q.length);
      for (var W = function(ee) {
        for (var ae = q[ee], ie = 0; ie < ae.length; ie++) {
          var se = ae[ie].partialPath, ne = ae[ie].suffixDef, pe = i(se), D = a(b, pe, ee);
          if (D || r.isEmpty(ne) || se.length === G) {
            var B = N[ee];
            if (F(B, se) === !1) {
              B.push(se);
              for (var z = 0; z < pe.length; z++) {
                var X = pe[z];
                b[ee][X] = !0;
              }
            }
          } else {
            var Q = T.possiblePathsFrom(ne, Y + 1, se);
            S[ee] = S[ee].concat(Q), r.forEach(Q, function(re) {
              var ve = i(re.partialPath);
              r.forEach(ve, function(de) {
                b[ee][de] = !0;
              });
            });
          }
        }
      }, $ = 0; $ < q.length; $++)
        W($);
    }
    return N;
  }
  e.lookAheadSequenceFromAlternatives = d;
  function c(k, G, x, N) {
    var b = new p(k, o.ALTERNATION, N);
    return G.accept(b), d(b.result, x);
  }
  e.getLookaheadPathsForOr = c;
  function P(k, G, x, N) {
    var b = new p(k, x);
    G.accept(b);
    var S = b.result, Y = new y(G, k, x), q = Y.startWalking(), W = new u.Alternative({ definition: S }), $ = new u.Alternative({ definition: q });
    return d([W, $], N);
  }
  e.getLookaheadPathsForOptionalProd = P;
  function F(k, G) {
    e:
      for (var x = 0; x < k.length; x++) {
        var N = k[x];
        if (N.length === G.length) {
          for (var b = 0; b < N.length; b++) {
            var S = G[b], Y = N[b], q = S === Y || Y.categoryMatchesMap[S.tokenTypeIdx] !== void 0;
            if (q === !1)
              continue e;
          }
          return !0;
        }
      }
    return !1;
  }
  e.containsPath = F;
  function w(k, G) {
    return k.length < G.length && r.every(k, function(x, N) {
      var b = G[N];
      return x === b || b.categoryMatchesMap[x.tokenTypeIdx];
    });
  }
  e.isStrictPrefixOfPath = w;
  function H(k) {
    return r.every(k, function(G) {
      return r.every(G, function(x) {
        return r.every(x, function(N) {
          return r.isEmpty(N.categoryMatches);
        });
      });
    });
  }
  e.areTokenCategoriesNotUsed = H;
}), Rt = Ee((e) => {
  var h = e && e.__extends || function() {
    var N = function(b, S) {
      return N = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(Y, q) {
        Y.__proto__ = q;
      } || function(Y, q) {
        for (var W in q)
          Object.prototype.hasOwnProperty.call(q, W) && (Y[W] = q[W]);
      }, N(b, S);
    };
    return function(b, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      N(b, S);
      function Y() {
        this.constructor = b;
      }
      b.prototype = S === null ? Object.create(S) : (Y.prototype = S.prototype, new Y());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkPrefixAlternativesAmbiguities = e.validateSomeNonEmptyLookaheadPath = e.validateTooManyAlts = e.RepetionCollector = e.validateAmbiguousAlternationAlternatives = e.validateEmptyOrAlternative = e.getFirstNoneTerminal = e.validateNoLeftRecursion = e.validateRuleIsOverridden = e.validateRuleDoesNotAlreadyExist = e.OccurrenceValidationCollector = e.identifyProductionForDuplicates = e.validateGrammar = void 0;
  var r = Ae(), T = Ae(), m = Be(), O = nt(), u = it(), E = ot(), o = Ue(), t = Qe();
  function l(N, b, S, Y, q) {
    var W = r.map(N, function(D) {
      return s(D, Y);
    }), $ = r.map(N, function(D) {
      return i(D, D, Y);
    }), ee = [], ae = [], ie = [];
    T.every($, T.isEmpty) && (ee = T.map(N, function(D) {
      return c(D, Y);
    }), ae = T.map(N, function(D) {
      return P(D, b, Y);
    }), ie = H(N, b, Y));
    var se = x(N, S, Y), ne = T.map(N, function(D) {
      return w(D, Y);
    }), pe = T.map(N, function(D) {
      return p(D, N, q, Y);
    });
    return r.flatten(W.concat(ie, $, ee, ae, se, ne, pe));
  }
  e.validateGrammar = l;
  function s(N, b) {
    var S = new y();
    N.accept(S);
    var Y = S.allProductions, q = r.groupBy(Y, R), W = r.pick(q, function(ee) {
      return ee.length > 1;
    }), $ = r.map(r.values(W), function(ee) {
      var ae = r.first(ee), ie = b.buildDuplicateFoundError(N, ee), se = O.getProductionDslName(ae), ne = { message: ie, type: m.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS, ruleName: N.name, dslName: se, occurrence: ae.idx }, pe = f(ae);
      return pe && (ne.parameter = pe), ne;
    });
    return $;
  }
  function R(N) {
    return O.getProductionDslName(N) + "_#_" + N.idx + "_#_" + f(N);
  }
  e.identifyProductionForDuplicates = R;
  function f(N) {
    return N instanceof o.Terminal ? N.terminalType.name : N instanceof o.NonTerminal ? N.nonTerminalName : "";
  }
  var y = function(N) {
    h(b, N);
    function b() {
      var S = N !== null && N.apply(this, arguments) || this;
      return S.allProductions = [], S;
    }
    return b.prototype.visitNonTerminal = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitOption = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetitionWithSeparator = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetitionMandatory = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetitionMandatoryWithSeparator = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetition = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitAlternation = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitTerminal = function(S) {
      this.allProductions.push(S);
    }, b;
  }(t.GAstVisitor);
  e.OccurrenceValidationCollector = y;
  function p(N, b, S, Y) {
    var q = [], W = T.reduce(b, function(ee, ae) {
      return ae.name === N.name ? ee + 1 : ee;
    }, 0);
    if (W > 1) {
      var $ = Y.buildDuplicateRuleNameError({ topLevelRule: N, grammarName: S });
      q.push({ message: $, type: m.ParserDefinitionErrorType.DUPLICATE_RULE_NAME, ruleName: N.name });
    }
    return q;
  }
  e.validateRuleDoesNotAlreadyExist = p;
  function n(N, b, S) {
    var Y = [], q;
    return r.contains(b, N) || (q = "Invalid rule override, rule: ->" + N + "<- cannot be overridden in the grammar: ->" + S + "<-as it is not defined in any of the super grammars ", Y.push({ message: q, type: m.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE, ruleName: N })), Y;
  }
  e.validateRuleIsOverridden = n;
  function i(N, b, S, Y) {
    Y === void 0 && (Y = []);
    var q = [], W = a(b.definition);
    if (r.isEmpty(W))
      return [];
    var $ = N.name, ee = r.contains(W, N);
    ee && q.push({ message: S.buildLeftRecursionError({ topLevelRule: N, leftRecursionPath: Y }), type: m.ParserDefinitionErrorType.LEFT_RECURSION, ruleName: $ });
    var ae = r.difference(W, Y.concat([N])), ie = r.map(ae, function(se) {
      var ne = r.cloneArr(Y);
      return ne.push(se), i(N, se, S, ne);
    });
    return q.concat(r.flatten(ie));
  }
  e.validateNoLeftRecursion = i;
  function a(N) {
    var b = [];
    if (r.isEmpty(N))
      return b;
    var S = r.first(N);
    if (S instanceof o.NonTerminal)
      b.push(S.referencedRule);
    else if (S instanceof o.Alternative || S instanceof o.Option || S instanceof o.RepetitionMandatory || S instanceof o.RepetitionMandatoryWithSeparator || S instanceof o.RepetitionWithSeparator || S instanceof o.Repetition)
      b = b.concat(a(S.definition));
    else if (S instanceof o.Alternation)
      b = r.flatten(r.map(S.definition, function($) {
        return a($.definition);
      }));
    else if (!(S instanceof o.Terminal))
      throw Error("non exhaustive match");
    var Y = O.isOptionalProd(S), q = N.length > 1;
    if (Y && q) {
      var W = r.drop(N);
      return b.concat(a(W));
    } else
      return b;
  }
  e.getFirstNoneTerminal = a;
  var d = function(N) {
    h(b, N);
    function b() {
      var S = N !== null && N.apply(this, arguments) || this;
      return S.alternations = [], S;
    }
    return b.prototype.visitAlternation = function(S) {
      this.alternations.push(S);
    }, b;
  }(t.GAstVisitor);
  function c(N, b) {
    var S = new d();
    N.accept(S);
    var Y = S.alternations, q = r.reduce(Y, function(W, $) {
      var ee = r.dropRight($.definition), ae = r.map(ee, function(ie, se) {
        var ne = E.nextPossibleTokensAfter([ie], [], null, 1);
        return r.isEmpty(ne) ? { message: b.buildEmptyAlternationError({ topLevelRule: N, alternation: $, emptyChoiceIdx: se }), type: m.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT, ruleName: N.name, occurrence: $.idx, alternative: se + 1 } : null;
      });
      return W.concat(r.compact(ae));
    }, []);
    return q;
  }
  e.validateEmptyOrAlternative = c;
  function P(N, b, S) {
    var Y = new d();
    N.accept(Y);
    var q = Y.alternations;
    q = T.reject(q, function($) {
      return $.ignoreAmbiguities === !0;
    });
    var W = r.reduce(q, function($, ee) {
      var ae = ee.idx, ie = ee.maxLookahead || b, se = u.getLookaheadPathsForOr(ae, N, ie, ee), ne = k(se, ee, N, S), pe = G(se, ee, N, S);
      return $.concat(ne, pe);
    }, []);
    return W;
  }
  e.validateAmbiguousAlternationAlternatives = P;
  var F = function(N) {
    h(b, N);
    function b() {
      var S = N !== null && N.apply(this, arguments) || this;
      return S.allProductions = [], S;
    }
    return b.prototype.visitRepetitionWithSeparator = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetitionMandatory = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetitionMandatoryWithSeparator = function(S) {
      this.allProductions.push(S);
    }, b.prototype.visitRepetition = function(S) {
      this.allProductions.push(S);
    }, b;
  }(t.GAstVisitor);
  e.RepetionCollector = F;
  function w(N, b) {
    var S = new d();
    N.accept(S);
    var Y = S.alternations, q = r.reduce(Y, function(W, $) {
      return $.definition.length > 255 && W.push({ message: b.buildTooManyAlternativesError({ topLevelRule: N, alternation: $ }), type: m.ParserDefinitionErrorType.TOO_MANY_ALTS, ruleName: N.name, occurrence: $.idx }), W;
    }, []);
    return q;
  }
  e.validateTooManyAlts = w;
  function H(N, b, S) {
    var Y = [];
    return T.forEach(N, function(q) {
      var W = new F();
      q.accept(W);
      var $ = W.allProductions;
      T.forEach($, function(ee) {
        var ae = u.getProdType(ee), ie = ee.maxLookahead || b, se = ee.idx, ne = u.getLookaheadPathsForOptionalProd(se, q, ae, ie), pe = ne[0];
        if (T.isEmpty(T.flatten(pe))) {
          var D = S.buildEmptyRepetitionError({ topLevelRule: q, repetition: ee });
          Y.push({ message: D, type: m.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD, ruleName: q.name });
        }
      });
    }), Y;
  }
  e.validateSomeNonEmptyLookaheadPath = H;
  function k(N, b, S, Y) {
    var q = [], W = T.reduce(N, function(ee, ae, ie) {
      return b.definition[ie].ignoreAmbiguities === !0 || T.forEach(ae, function(se) {
        var ne = [ie];
        T.forEach(N, function(pe, D) {
          ie !== D && u.containsPath(pe, se) && b.definition[D].ignoreAmbiguities !== !0 && ne.push(D);
        }), ne.length > 1 && !u.containsPath(q, se) && (q.push(se), ee.push({ alts: ne, path: se }));
      }), ee;
    }, []), $ = r.map(W, function(ee) {
      var ae = T.map(ee.alts, function(se) {
        return se + 1;
      }), ie = Y.buildAlternationAmbiguityError({ topLevelRule: S, alternation: b, ambiguityIndices: ae, prefixPath: ee.path });
      return { message: ie, type: m.ParserDefinitionErrorType.AMBIGUOUS_ALTS, ruleName: S.name, occurrence: b.idx, alternatives: [ee.alts] };
    });
    return $;
  }
  function G(N, b, S, Y) {
    var q = [], W = T.reduce(N, function($, ee, ae) {
      var ie = T.map(ee, function(se) {
        return { idx: ae, path: se };
      });
      return $.concat(ie);
    }, []);
    return T.forEach(W, function($) {
      var ee = b.definition[$.idx];
      if (ee.ignoreAmbiguities !== !0) {
        var ae = $.idx, ie = $.path, se = T.findAll(W, function(pe) {
          return b.definition[pe.idx].ignoreAmbiguities !== !0 && pe.idx < ae && u.isStrictPrefixOfPath(pe.path, ie);
        }), ne = T.map(se, function(pe) {
          var D = [pe.idx + 1, ae + 1], B = b.idx === 0 ? "" : b.idx, z = Y.buildAlternationPrefixAmbiguityError({ topLevelRule: S, alternation: b, ambiguityIndices: D, prefixPath: pe.path });
          return { message: z, type: m.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS, ruleName: S.name, occurrence: B, alternatives: D };
        });
        q = q.concat(ne);
      }
    }), q;
  }
  e.checkPrefixAlternativesAmbiguities = G;
  function x(N, b, S) {
    var Y = [], q = T.map(b, function(W) {
      return W.name;
    });
    return T.forEach(N, function(W) {
      var $ = W.name;
      if (T.contains(q, $)) {
        var ee = S.buildNamespaceConflictError(W);
        Y.push({ message: ee, type: m.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: $ });
      }
    }), Y;
  }
}), Yt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateGrammar = e.resolveGrammar = void 0;
  var h = Ae(), r = Kt(), T = Rt(), m = rt();
  function O(E) {
    E = h.defaults(E, { errMsgProvider: m.defaultGrammarResolverErrorProvider });
    var o = {};
    return h.forEach(E.rules, function(t) {
      o[t.name] = t;
    }), r.resolveGrammar(o, E.errMsgProvider);
  }
  e.resolveGrammar = O;
  function u(E) {
    return E = h.defaults(E, { errMsgProvider: m.defaultGrammarValidatorErrorProvider }), T.validateGrammar(E.rules, E.maxLookahead, E.tokenTypes, E.errMsgProvider, E.grammarName);
  }
  e.validateGrammar = u;
}), Ze = Ee((e) => {
  var h = e && e.__extends || function() {
    var y = function(p, n) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var d in a)
          Object.prototype.hasOwnProperty.call(a, d) && (i[d] = a[d]);
      }, y(p, n);
    };
    return function(p, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      y(p, n);
      function i() {
        this.constructor = p;
      }
      p.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EarlyExitException = e.NotAllInputParsedException = e.NoViableAltException = e.MismatchedTokenException = e.isRecognitionException = void 0;
  var r = Ae(), T = "MismatchedTokenException", m = "NoViableAltException", O = "EarlyExitException", u = "NotAllInputParsedException", E = [T, m, O, u];
  Object.freeze(E);
  function o(y) {
    return r.contains(E, y.name);
  }
  e.isRecognitionException = o;
  var t = function(y) {
    h(p, y);
    function p(n, i) {
      var a = this.constructor, d = y.call(this, n) || this;
      return d.token = i, d.resyncedTokens = [], Object.setPrototypeOf(d, a.prototype), Error.captureStackTrace && Error.captureStackTrace(d, d.constructor), d;
    }
    return p;
  }(Error), l = function(y) {
    h(p, y);
    function p(n, i, a) {
      var d = y.call(this, n, i) || this;
      return d.previousToken = a, d.name = T, d;
    }
    return p;
  }(t);
  e.MismatchedTokenException = l;
  var s = function(y) {
    h(p, y);
    function p(n, i, a) {
      var d = y.call(this, n, i) || this;
      return d.previousToken = a, d.name = m, d;
    }
    return p;
  }(t);
  e.NoViableAltException = s;
  var R = function(y) {
    h(p, y);
    function p(n, i) {
      var a = y.call(this, n, i) || this;
      return a.name = u, a;
    }
    return p;
  }(t);
  e.NotAllInputParsedException = R;
  var f = function(y) {
    h(p, y);
    function p(n, i, a) {
      var d = y.call(this, n, i) || this;
      return d.previousToken = a, d.name = O, d;
    }
    return p;
  }(t);
  e.EarlyExitException = f;
}), Ot = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.attemptInRepetitionRecovery = e.Recoverable = e.InRuleRecoveryException = e.IN_RULE_RECOVERY_EXCEPTION = e.EOF_FOLLOW_KEY = void 0;
  var h = Ke(), r = Ae(), T = Ze(), m = gt(), O = Be();
  e.EOF_FOLLOW_KEY = {}, e.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
  function u(t) {
    this.name = e.IN_RULE_RECOVERY_EXCEPTION, this.message = t;
  }
  e.InRuleRecoveryException = u, u.prototype = Error.prototype;
  var E = function() {
    function t() {
    }
    return t.prototype.initRecoverable = function(l) {
      this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = r.has(l, "recoveryEnabled") ? l.recoveryEnabled : O.DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = o);
    }, t.prototype.getTokenToInsert = function(l) {
      var s = h.createTokenInstance(l, "", NaN, NaN, NaN, NaN, NaN, NaN);
      return s.isInsertedInRecovery = !0, s;
    }, t.prototype.canTokenTypeBeInsertedInRecovery = function(l) {
      return !0;
    }, t.prototype.tryInRepetitionRecovery = function(l, s, R, f) {
      for (var y = this, p = this.findReSyncTokenType(), n = this.exportLexerState(), i = [], a = !1, d = this.LA(1), c = this.LA(1), P = function() {
        var F = y.LA(0), w = y.errorMessageProvider.buildMismatchTokenMessage({ expected: f, actual: d, previous: F, ruleName: y.getCurrRuleFullName() }), H = new T.MismatchedTokenException(w, d, y.LA(0));
        H.resyncedTokens = r.dropRight(i), y.SAVE_ERROR(H);
      }; !a; )
        if (this.tokenMatcher(c, f)) {
          P();
          return;
        } else if (R.call(this)) {
          P(), l.apply(this, s);
          return;
        } else
          this.tokenMatcher(c, p) ? a = !0 : (c = this.SKIP_TOKEN(), this.addToResyncTokens(c, i));
      this.importLexerState(n);
    }, t.prototype.shouldInRepetitionRecoveryBeTried = function(l, s, R) {
      return !(R === !1 || l === void 0 || s === void 0 || this.tokenMatcher(this.LA(1), l) || this.isBackTracking() || this.canPerformInRuleRecovery(l, this.getFollowsForInRuleRecovery(l, s)));
    }, t.prototype.getFollowsForInRuleRecovery = function(l, s) {
      var R = this.getCurrentGrammarPath(l, s), f = this.getNextPossibleTokenTypes(R);
      return f;
    }, t.prototype.tryInRuleRecovery = function(l, s) {
      if (this.canRecoverWithSingleTokenInsertion(l, s)) {
        var R = this.getTokenToInsert(l);
        return R;
      }
      if (this.canRecoverWithSingleTokenDeletion(l)) {
        var f = this.SKIP_TOKEN();
        return this.consumeToken(), f;
      }
      throw new u("sad sad panda");
    }, t.prototype.canPerformInRuleRecovery = function(l, s) {
      return this.canRecoverWithSingleTokenInsertion(l, s) || this.canRecoverWithSingleTokenDeletion(l);
    }, t.prototype.canRecoverWithSingleTokenInsertion = function(l, s) {
      var R = this;
      if (!this.canTokenTypeBeInsertedInRecovery(l) || r.isEmpty(s))
        return !1;
      var f = this.LA(1), y = r.find(s, function(p) {
        return R.tokenMatcher(f, p);
      }) !== void 0;
      return y;
    }, t.prototype.canRecoverWithSingleTokenDeletion = function(l) {
      var s = this.tokenMatcher(this.LA(2), l);
      return s;
    }, t.prototype.isInCurrentRuleReSyncSet = function(l) {
      var s = this.getCurrFollowKey(), R = this.getFollowSetFromFollowKey(s);
      return r.contains(R, l);
    }, t.prototype.findReSyncTokenType = function() {
      for (var l = this.flattenFollowSet(), s = this.LA(1), R = 2; ; ) {
        var f = s.tokenType;
        if (r.contains(l, f))
          return f;
        s = this.LA(R), R++;
      }
    }, t.prototype.getCurrFollowKey = function() {
      if (this.RULE_STACK.length === 1)
        return e.EOF_FOLLOW_KEY;
      var l = this.getLastExplicitRuleShortName(), s = this.getLastExplicitRuleOccurrenceIndex(), R = this.getPreviousExplicitRuleShortName();
      return { ruleName: this.shortRuleNameToFullName(l), idxInCallingRule: s, inRule: this.shortRuleNameToFullName(R) };
    }, t.prototype.buildFullFollowKeyStack = function() {
      var l = this, s = this.RULE_STACK, R = this.RULE_OCCURRENCE_STACK;
      return r.map(s, function(f, y) {
        return y === 0 ? e.EOF_FOLLOW_KEY : { ruleName: l.shortRuleNameToFullName(f), idxInCallingRule: R[y], inRule: l.shortRuleNameToFullName(s[y - 1]) };
      });
    }, t.prototype.flattenFollowSet = function() {
      var l = this, s = r.map(this.buildFullFollowKeyStack(), function(R) {
        return l.getFollowSetFromFollowKey(R);
      });
      return r.flatten(s);
    }, t.prototype.getFollowSetFromFollowKey = function(l) {
      if (l === e.EOF_FOLLOW_KEY)
        return [h.EOF];
      var s = l.ruleName + l.idxInCallingRule + m.IN + l.inRule;
      return this.resyncFollows[s];
    }, t.prototype.addToResyncTokens = function(l, s) {
      return this.tokenMatcher(l, h.EOF) || s.push(l), s;
    }, t.prototype.reSyncTo = function(l) {
      for (var s = [], R = this.LA(1); this.tokenMatcher(R, l) === !1; )
        R = this.SKIP_TOKEN(), this.addToResyncTokens(R, s);
      return r.dropRight(s);
    }, t.prototype.attemptInRepetitionRecovery = function(l, s, R, f, y, p, n) {
    }, t.prototype.getCurrentGrammarPath = function(l, s) {
      var R = this.getHumanReadableRuleStack(), f = r.cloneArr(this.RULE_OCCURRENCE_STACK), y = { ruleStack: R, occurrenceStack: f, lastTok: l, lastTokOccurrence: s };
      return y;
    }, t.prototype.getHumanReadableRuleStack = function() {
      var l = this;
      return r.map(this.RULE_STACK, function(s) {
        return l.shortRuleNameToFullName(s);
      });
    }, t;
  }();
  e.Recoverable = E;
  function o(t, l, s, R, f, y, p) {
    var n = this.getKeyForAutomaticLookahead(R, f), i = this.firstAfterRepMap[n];
    if (i === void 0) {
      var a = this.getCurrRuleFullName(), d = this.getGAstProductions()[a], c = new y(d, f);
      i = c.startWalking(), this.firstAfterRepMap[n] = i;
    }
    var P = i.token, F = i.occurrence, w = i.isEndOfRule;
    this.RULE_STACK.length === 1 && w && P === void 0 && (P = h.EOF, F = 1), this.shouldInRepetitionRecoveryBeTried(P, F, p) && this.tryInRepetitionRecovery(t, l, s, P);
  }
  e.attemptInRepetitionRecovery = o;
}), ht = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getKeyForAutomaticLookahead = e.AT_LEAST_ONE_SEP_IDX = e.MANY_SEP_IDX = e.AT_LEAST_ONE_IDX = e.MANY_IDX = e.OPTION_IDX = e.OR_IDX = e.BITS_FOR_ALT_IDX = e.BITS_FOR_RULE_IDX = e.BITS_FOR_OCCURRENCE_IDX = e.BITS_FOR_METHOD_TYPE = void 0, e.BITS_FOR_METHOD_TYPE = 4, e.BITS_FOR_OCCURRENCE_IDX = 8, e.BITS_FOR_RULE_IDX = 12, e.BITS_FOR_ALT_IDX = 8, e.OR_IDX = 1 << e.BITS_FOR_OCCURRENCE_IDX, e.OPTION_IDX = 2 << e.BITS_FOR_OCCURRENCE_IDX, e.MANY_IDX = 3 << e.BITS_FOR_OCCURRENCE_IDX, e.AT_LEAST_ONE_IDX = 4 << e.BITS_FOR_OCCURRENCE_IDX, e.MANY_SEP_IDX = 5 << e.BITS_FOR_OCCURRENCE_IDX, e.AT_LEAST_ONE_SEP_IDX = 6 << e.BITS_FOR_OCCURRENCE_IDX;
  function h(r, T, m) {
    return m | T | r;
  }
  e.getKeyForAutomaticLookahead = h, 32 - e.BITS_FOR_ALT_IDX;
}), Ht = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LooksAhead = void 0;
  var h = it(), r = Ae(), T = Be(), m = ht(), O = nt(), u = function() {
    function E() {
    }
    return E.prototype.initLooksAhead = function(o) {
      this.dynamicTokensEnabled = r.has(o, "dynamicTokensEnabled") ? o.dynamicTokensEnabled : T.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = r.has(o, "maxLookahead") ? o.maxLookahead : T.DEFAULT_PARSER_CONFIG.maxLookahead, this.lookAheadFuncsCache = r.isES2015MapSupported() ? /* @__PURE__ */ new Map() : [], r.isES2015MapSupported() ? (this.getLaFuncFromCache = this.getLaFuncFromMap, this.setLaFuncCache = this.setLaFuncCacheUsingMap) : (this.getLaFuncFromCache = this.getLaFuncFromObj, this.setLaFuncCache = this.setLaFuncUsingObj);
    }, E.prototype.preComputeLookaheadFunctions = function(o) {
      var t = this;
      r.forEach(o, function(l) {
        t.TRACE_INIT(l.name + " Rule Lookahead", function() {
          var s = O.collectMethods(l), R = s.alternation, f = s.repetition, y = s.option, p = s.repetitionMandatory, n = s.repetitionMandatoryWithSeparator, i = s.repetitionWithSeparator;
          r.forEach(R, function(a) {
            var d = a.idx === 0 ? "" : a.idx;
            t.TRACE_INIT("" + O.getProductionDslName(a) + d, function() {
              var c = h.buildLookaheadFuncForOr(a.idx, l, a.maxLookahead || t.maxLookahead, a.hasPredicates, t.dynamicTokensEnabled, t.lookAheadBuilderForAlternatives), P = m.getKeyForAutomaticLookahead(t.fullRuleNameToShort[l.name], m.OR_IDX, a.idx);
              t.setLaFuncCache(P, c);
            });
          }), r.forEach(f, function(a) {
            t.computeLookaheadFunc(l, a.idx, m.MANY_IDX, h.PROD_TYPE.REPETITION, a.maxLookahead, O.getProductionDslName(a));
          }), r.forEach(y, function(a) {
            t.computeLookaheadFunc(l, a.idx, m.OPTION_IDX, h.PROD_TYPE.OPTION, a.maxLookahead, O.getProductionDslName(a));
          }), r.forEach(p, function(a) {
            t.computeLookaheadFunc(l, a.idx, m.AT_LEAST_ONE_IDX, h.PROD_TYPE.REPETITION_MANDATORY, a.maxLookahead, O.getProductionDslName(a));
          }), r.forEach(n, function(a) {
            t.computeLookaheadFunc(l, a.idx, m.AT_LEAST_ONE_SEP_IDX, h.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, a.maxLookahead, O.getProductionDslName(a));
          }), r.forEach(i, function(a) {
            t.computeLookaheadFunc(l, a.idx, m.MANY_SEP_IDX, h.PROD_TYPE.REPETITION_WITH_SEPARATOR, a.maxLookahead, O.getProductionDslName(a));
          });
        });
      });
    }, E.prototype.computeLookaheadFunc = function(o, t, l, s, R, f) {
      var y = this;
      this.TRACE_INIT("" + f + (t === 0 ? "" : t), function() {
        var p = h.buildLookaheadFuncForOptionalProd(t, o, R || y.maxLookahead, y.dynamicTokensEnabled, s, y.lookAheadBuilderForOptional), n = m.getKeyForAutomaticLookahead(y.fullRuleNameToShort[o.name], l, t);
        y.setLaFuncCache(n, p);
      });
    }, E.prototype.lookAheadBuilderForOptional = function(o, t, l) {
      return h.buildSingleAlternativeLookaheadFunction(o, t, l);
    }, E.prototype.lookAheadBuilderForAlternatives = function(o, t, l, s) {
      return h.buildAlternativesLookAheadFunc(o, t, l, s);
    }, E.prototype.getKeyForAutomaticLookahead = function(o, t) {
      var l = this.getLastExplicitRuleShortName();
      return m.getKeyForAutomaticLookahead(l, o, t);
    }, E.prototype.getLaFuncFromCache = function(o) {
    }, E.prototype.getLaFuncFromMap = function(o) {
      return this.lookAheadFuncsCache.get(o);
    }, E.prototype.getLaFuncFromObj = function(o) {
      return this.lookAheadFuncsCache[o];
    }, E.prototype.setLaFuncCache = function(o, t) {
    }, E.prototype.setLaFuncCacheUsingMap = function(o, t) {
      this.lookAheadFuncsCache.set(o, t);
    }, E.prototype.setLaFuncUsingObj = function(o, t) {
      this.lookAheadFuncsCache[o] = t;
    }, E;
  }();
  e.LooksAhead = u;
}), Xt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.addNoneTerminalToCst = e.addTerminalToCst = e.setNodeLocationFull = e.setNodeLocationOnlyOffset = void 0;
  function h(O, u) {
    isNaN(O.startOffset) === !0 ? (O.startOffset = u.startOffset, O.endOffset = u.endOffset) : O.endOffset < u.endOffset && (O.endOffset = u.endOffset);
  }
  e.setNodeLocationOnlyOffset = h;
  function r(O, u) {
    isNaN(O.startOffset) === !0 ? (O.startOffset = u.startOffset, O.startColumn = u.startColumn, O.startLine = u.startLine, O.endOffset = u.endOffset, O.endColumn = u.endColumn, O.endLine = u.endLine) : O.endOffset < u.endOffset && (O.endOffset = u.endOffset, O.endColumn = u.endColumn, O.endLine = u.endLine);
  }
  e.setNodeLocationFull = r;
  function T(O, u, E) {
    O.children[E] === void 0 ? O.children[E] = [u] : O.children[E].push(u);
  }
  e.addTerminalToCst = T;
  function m(O, u, E) {
    O.children[u] === void 0 ? O.children[u] = [E] : O.children[u].push(E);
  }
  e.addNoneTerminalToCst = m;
}), At = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.defineNameProp = e.functionName = e.classNameFromInstance = void 0;
  var h = Ae();
  function r(u) {
    return m(u.constructor);
  }
  e.classNameFromInstance = r;
  var T = "name";
  function m(u) {
    var E = u.name;
    return E || "anonymous";
  }
  e.functionName = m;
  function O(u, E) {
    var o = Object.getOwnPropertyDescriptor(u, T);
    return h.isUndefined(o) || o.configurable ? (Object.defineProperty(u, T, { enumerable: !1, configurable: !0, writable: !1, value: E }), !0) : !1;
  }
  e.defineNameProp = O;
}), qt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateRedundantMethods = e.validateMissingCstMethods = e.validateVisitor = e.CstVisitorDefinitionError = e.createBaseVisitorConstructorWithDefaults = e.createBaseSemanticVisitorConstructor = e.defaultVisit = void 0;
  var h = Ae(), r = At();
  function T(s, R) {
    for (var f = h.keys(s), y = f.length, p = 0; p < y; p++)
      for (var n = f[p], i = s[n], a = i.length, d = 0; d < a; d++) {
        var c = i[d];
        c.tokenTypeIdx === void 0 && this[c.name](c.children, R);
      }
  }
  e.defaultVisit = T;
  function m(s, R) {
    var f = function() {
    };
    r.defineNameProp(f, s + "BaseSemantics");
    var y = { visit: function(p, n) {
      if (h.isArray(p) && (p = p[0]), !h.isUndefined(p))
        return this[p.name](p.children, n);
    }, validateVisitor: function() {
      var p = E(this, R);
      if (!h.isEmpty(p)) {
        var n = h.map(p, function(i) {
          return i.msg;
        });
        throw Error("Errors Detected in CST Visitor <" + r.functionName(this.constructor) + `>:
	` + ("" + n.join(`

`).replace(/\n/g, `
	`)));
      }
    } };
    return f.prototype = y, f.prototype.constructor = f, f._RULE_NAMES = R, f;
  }
  e.createBaseSemanticVisitorConstructor = m;
  function O(s, R, f) {
    var y = function() {
    };
    r.defineNameProp(y, s + "BaseSemanticsWithDefaults");
    var p = Object.create(f.prototype);
    return h.forEach(R, function(n) {
      p[n] = T;
    }), y.prototype = p, y.prototype.constructor = y, y;
  }
  e.createBaseVisitorConstructorWithDefaults = O;
  var u;
  (function(s) {
    s[s.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", s[s.MISSING_METHOD = 1] = "MISSING_METHOD";
  })(u = e.CstVisitorDefinitionError || (e.CstVisitorDefinitionError = {}));
  function E(s, R) {
    var f = o(s, R), y = l(s, R);
    return f.concat(y);
  }
  e.validateVisitor = E;
  function o(s, R) {
    var f = h.map(R, function(y) {
      if (!h.isFunction(s[y]))
        return { msg: "Missing visitor method: <" + y + "> on " + r.functionName(s.constructor) + " CST Visitor.", type: u.MISSING_METHOD, methodName: y };
    });
    return h.compact(f);
  }
  e.validateMissingCstMethods = o;
  var t = ["constructor", "visit", "validateVisitor"];
  function l(s, R) {
    var f = [];
    for (var y in s)
      h.isFunction(s[y]) && !h.contains(t, y) && !h.contains(R, y) && f.push({ msg: "Redundant visitor method: <" + y + "> on " + r.functionName(s.constructor) + ` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`, type: u.REDUNDANT_METHOD, methodName: y });
    return f;
  }
  e.validateRedundantMethods = l;
}), Qt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TreeBuilder = void 0;
  var h = Xt(), r = Ae(), T = qt(), m = Be(), O = function() {
    function u() {
    }
    return u.prototype.initTreeBuilder = function(E) {
      if (this.CST_STACK = [], this.outputCst = E.outputCst, this.nodeLocationTracking = r.has(E, "nodeLocationTracking") ? E.nodeLocationTracking : m.DEFAULT_PARSER_CONFIG.nodeLocationTracking, !this.outputCst)
        this.cstInvocationStateUpdate = r.NOOP, this.cstFinallyStateUpdate = r.NOOP, this.cstPostTerminal = r.NOOP, this.cstPostNonTerminal = r.NOOP, this.cstPostRule = r.NOOP;
      else if (/full/i.test(this.nodeLocationTracking))
        this.recoveryEnabled ? (this.setNodeLocationFromToken = h.setNodeLocationFull, this.setNodeLocationFromNode = h.setNodeLocationFull, this.cstPostRule = r.NOOP, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = r.NOOP, this.setNodeLocationFromNode = r.NOOP, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
      else if (/onlyOffset/i.test(this.nodeLocationTracking))
        this.recoveryEnabled ? (this.setNodeLocationFromToken = h.setNodeLocationOnlyOffset, this.setNodeLocationFromNode = h.setNodeLocationOnlyOffset, this.cstPostRule = r.NOOP, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = r.NOOP, this.setNodeLocationFromNode = r.NOOP, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
      else if (/none/i.test(this.nodeLocationTracking))
        this.setNodeLocationFromToken = r.NOOP, this.setNodeLocationFromNode = r.NOOP, this.cstPostRule = r.NOOP, this.setInitialNodeLocation = r.NOOP;
      else
        throw Error('Invalid <nodeLocationTracking> config option: "' + E.nodeLocationTracking + '"');
    }, u.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(E) {
      E.location = { startOffset: NaN, endOffset: NaN };
    }, u.prototype.setInitialNodeLocationOnlyOffsetRegular = function(E) {
      E.location = { startOffset: this.LA(1).startOffset, endOffset: NaN };
    }, u.prototype.setInitialNodeLocationFullRecovery = function(E) {
      E.location = { startOffset: NaN, startLine: NaN, startColumn: NaN, endOffset: NaN, endLine: NaN, endColumn: NaN };
    }, u.prototype.setInitialNodeLocationFullRegular = function(E) {
      var o = this.LA(1);
      E.location = { startOffset: o.startOffset, startLine: o.startLine, startColumn: o.startColumn, endOffset: NaN, endLine: NaN, endColumn: NaN };
    }, u.prototype.cstInvocationStateUpdate = function(E, o) {
      var t = { name: E, children: {} };
      this.setInitialNodeLocation(t), this.CST_STACK.push(t);
    }, u.prototype.cstFinallyStateUpdate = function() {
      this.CST_STACK.pop();
    }, u.prototype.cstPostRuleFull = function(E) {
      var o = this.LA(0), t = E.location;
      t.startOffset <= o.startOffset ? (t.endOffset = o.endOffset, t.endLine = o.endLine, t.endColumn = o.endColumn) : (t.startOffset = NaN, t.startLine = NaN, t.startColumn = NaN);
    }, u.prototype.cstPostRuleOnlyOffset = function(E) {
      var o = this.LA(0), t = E.location;
      t.startOffset <= o.startOffset ? t.endOffset = o.endOffset : t.startOffset = NaN;
    }, u.prototype.cstPostTerminal = function(E, o) {
      var t = this.CST_STACK[this.CST_STACK.length - 1];
      h.addTerminalToCst(t, o, E), this.setNodeLocationFromToken(t.location, o);
    }, u.prototype.cstPostNonTerminal = function(E, o) {
      var t = this.CST_STACK[this.CST_STACK.length - 1];
      h.addNoneTerminalToCst(t, o, E), this.setNodeLocationFromNode(t.location, E.location);
    }, u.prototype.getBaseCstVisitorConstructor = function() {
      if (r.isUndefined(this.baseCstVisitorConstructor)) {
        var E = T.createBaseSemanticVisitorConstructor(this.className, r.keys(this.gastProductionsCache));
        return this.baseCstVisitorConstructor = E, E;
      }
      return this.baseCstVisitorConstructor;
    }, u.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
      if (r.isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
        var E = T.createBaseVisitorConstructorWithDefaults(this.className, r.keys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
        return this.baseCstVisitorWithDefaultsConstructor = E, E;
      }
      return this.baseCstVisitorWithDefaultsConstructor;
    }, u.prototype.getLastExplicitRuleShortName = function() {
      var E = this.RULE_STACK;
      return E[E.length - 1];
    }, u.prototype.getPreviousExplicitRuleShortName = function() {
      var E = this.RULE_STACK;
      return E[E.length - 2];
    }, u.prototype.getLastExplicitRuleOccurrenceIndex = function() {
      var E = this.RULE_OCCURRENCE_STACK;
      return E[E.length - 1];
    }, u;
  }();
  e.TreeBuilder = O;
}), Zt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LexerAdapter = void 0;
  var h = Be(), r = function() {
    function T() {
    }
    return T.prototype.initLexerAdapter = function() {
      this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
    }, Object.defineProperty(T.prototype, "input", { get: function() {
      return this.tokVector;
    }, set: function(m) {
      if (this.selfAnalysisDone !== !0)
        throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
      this.reset(), this.tokVector = m, this.tokVectorLength = m.length;
    }, enumerable: !1, configurable: !0 }), T.prototype.SKIP_TOKEN = function() {
      return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : h.END_OF_FILE;
    }, T.prototype.LA = function(m) {
      var O = this.currIdx + m;
      return O < 0 || this.tokVectorLength <= O ? h.END_OF_FILE : this.tokVector[O];
    }, T.prototype.consumeToken = function() {
      this.currIdx++;
    }, T.prototype.exportLexerState = function() {
      return this.currIdx;
    }, T.prototype.importLexerState = function(m) {
      this.currIdx = m;
    }, T.prototype.resetLexerState = function() {
      this.currIdx = -1;
    }, T.prototype.moveToTerminatedState = function() {
      this.currIdx = this.tokVector.length - 1;
    }, T.prototype.getLexerPosition = function() {
      return this.exportLexerState();
    }, T;
  }();
  e.LexerAdapter = r;
}), $t = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RecognizerApi = void 0;
  var h = Ae(), r = Ze(), T = Be(), m = rt(), O = Rt(), u = Ue(), E = function() {
    function o() {
    }
    return o.prototype.ACTION = function(t) {
      return t.call(this);
    }, o.prototype.consume = function(t, l, s) {
      return this.consumeInternal(l, t, s);
    }, o.prototype.subrule = function(t, l, s) {
      return this.subruleInternal(l, t, s);
    }, o.prototype.option = function(t, l) {
      return this.optionInternal(l, t);
    }, o.prototype.or = function(t, l) {
      return this.orInternal(l, t);
    }, o.prototype.many = function(t, l) {
      return this.manyInternal(t, l);
    }, o.prototype.atLeastOne = function(t, l) {
      return this.atLeastOneInternal(t, l);
    }, o.prototype.CONSUME = function(t, l) {
      return this.consumeInternal(t, 0, l);
    }, o.prototype.CONSUME1 = function(t, l) {
      return this.consumeInternal(t, 1, l);
    }, o.prototype.CONSUME2 = function(t, l) {
      return this.consumeInternal(t, 2, l);
    }, o.prototype.CONSUME3 = function(t, l) {
      return this.consumeInternal(t, 3, l);
    }, o.prototype.CONSUME4 = function(t, l) {
      return this.consumeInternal(t, 4, l);
    }, o.prototype.CONSUME5 = function(t, l) {
      return this.consumeInternal(t, 5, l);
    }, o.prototype.CONSUME6 = function(t, l) {
      return this.consumeInternal(t, 6, l);
    }, o.prototype.CONSUME7 = function(t, l) {
      return this.consumeInternal(t, 7, l);
    }, o.prototype.CONSUME8 = function(t, l) {
      return this.consumeInternal(t, 8, l);
    }, o.prototype.CONSUME9 = function(t, l) {
      return this.consumeInternal(t, 9, l);
    }, o.prototype.SUBRULE = function(t, l) {
      return this.subruleInternal(t, 0, l);
    }, o.prototype.SUBRULE1 = function(t, l) {
      return this.subruleInternal(t, 1, l);
    }, o.prototype.SUBRULE2 = function(t, l) {
      return this.subruleInternal(t, 2, l);
    }, o.prototype.SUBRULE3 = function(t, l) {
      return this.subruleInternal(t, 3, l);
    }, o.prototype.SUBRULE4 = function(t, l) {
      return this.subruleInternal(t, 4, l);
    }, o.prototype.SUBRULE5 = function(t, l) {
      return this.subruleInternal(t, 5, l);
    }, o.prototype.SUBRULE6 = function(t, l) {
      return this.subruleInternal(t, 6, l);
    }, o.prototype.SUBRULE7 = function(t, l) {
      return this.subruleInternal(t, 7, l);
    }, o.prototype.SUBRULE8 = function(t, l) {
      return this.subruleInternal(t, 8, l);
    }, o.prototype.SUBRULE9 = function(t, l) {
      return this.subruleInternal(t, 9, l);
    }, o.prototype.OPTION = function(t) {
      return this.optionInternal(t, 0);
    }, o.prototype.OPTION1 = function(t) {
      return this.optionInternal(t, 1);
    }, o.prototype.OPTION2 = function(t) {
      return this.optionInternal(t, 2);
    }, o.prototype.OPTION3 = function(t) {
      return this.optionInternal(t, 3);
    }, o.prototype.OPTION4 = function(t) {
      return this.optionInternal(t, 4);
    }, o.prototype.OPTION5 = function(t) {
      return this.optionInternal(t, 5);
    }, o.prototype.OPTION6 = function(t) {
      return this.optionInternal(t, 6);
    }, o.prototype.OPTION7 = function(t) {
      return this.optionInternal(t, 7);
    }, o.prototype.OPTION8 = function(t) {
      return this.optionInternal(t, 8);
    }, o.prototype.OPTION9 = function(t) {
      return this.optionInternal(t, 9);
    }, o.prototype.OR = function(t) {
      return this.orInternal(t, 0);
    }, o.prototype.OR1 = function(t) {
      return this.orInternal(t, 1);
    }, o.prototype.OR2 = function(t) {
      return this.orInternal(t, 2);
    }, o.prototype.OR3 = function(t) {
      return this.orInternal(t, 3);
    }, o.prototype.OR4 = function(t) {
      return this.orInternal(t, 4);
    }, o.prototype.OR5 = function(t) {
      return this.orInternal(t, 5);
    }, o.prototype.OR6 = function(t) {
      return this.orInternal(t, 6);
    }, o.prototype.OR7 = function(t) {
      return this.orInternal(t, 7);
    }, o.prototype.OR8 = function(t) {
      return this.orInternal(t, 8);
    }, o.prototype.OR9 = function(t) {
      return this.orInternal(t, 9);
    }, o.prototype.MANY = function(t) {
      this.manyInternal(0, t);
    }, o.prototype.MANY1 = function(t) {
      this.manyInternal(1, t);
    }, o.prototype.MANY2 = function(t) {
      this.manyInternal(2, t);
    }, o.prototype.MANY3 = function(t) {
      this.manyInternal(3, t);
    }, o.prototype.MANY4 = function(t) {
      this.manyInternal(4, t);
    }, o.prototype.MANY5 = function(t) {
      this.manyInternal(5, t);
    }, o.prototype.MANY6 = function(t) {
      this.manyInternal(6, t);
    }, o.prototype.MANY7 = function(t) {
      this.manyInternal(7, t);
    }, o.prototype.MANY8 = function(t) {
      this.manyInternal(8, t);
    }, o.prototype.MANY9 = function(t) {
      this.manyInternal(9, t);
    }, o.prototype.MANY_SEP = function(t) {
      this.manySepFirstInternal(0, t);
    }, o.prototype.MANY_SEP1 = function(t) {
      this.manySepFirstInternal(1, t);
    }, o.prototype.MANY_SEP2 = function(t) {
      this.manySepFirstInternal(2, t);
    }, o.prototype.MANY_SEP3 = function(t) {
      this.manySepFirstInternal(3, t);
    }, o.prototype.MANY_SEP4 = function(t) {
      this.manySepFirstInternal(4, t);
    }, o.prototype.MANY_SEP5 = function(t) {
      this.manySepFirstInternal(5, t);
    }, o.prototype.MANY_SEP6 = function(t) {
      this.manySepFirstInternal(6, t);
    }, o.prototype.MANY_SEP7 = function(t) {
      this.manySepFirstInternal(7, t);
    }, o.prototype.MANY_SEP8 = function(t) {
      this.manySepFirstInternal(8, t);
    }, o.prototype.MANY_SEP9 = function(t) {
      this.manySepFirstInternal(9, t);
    }, o.prototype.AT_LEAST_ONE = function(t) {
      this.atLeastOneInternal(0, t);
    }, o.prototype.AT_LEAST_ONE1 = function(t) {
      return this.atLeastOneInternal(1, t);
    }, o.prototype.AT_LEAST_ONE2 = function(t) {
      this.atLeastOneInternal(2, t);
    }, o.prototype.AT_LEAST_ONE3 = function(t) {
      this.atLeastOneInternal(3, t);
    }, o.prototype.AT_LEAST_ONE4 = function(t) {
      this.atLeastOneInternal(4, t);
    }, o.prototype.AT_LEAST_ONE5 = function(t) {
      this.atLeastOneInternal(5, t);
    }, o.prototype.AT_LEAST_ONE6 = function(t) {
      this.atLeastOneInternal(6, t);
    }, o.prototype.AT_LEAST_ONE7 = function(t) {
      this.atLeastOneInternal(7, t);
    }, o.prototype.AT_LEAST_ONE8 = function(t) {
      this.atLeastOneInternal(8, t);
    }, o.prototype.AT_LEAST_ONE9 = function(t) {
      this.atLeastOneInternal(9, t);
    }, o.prototype.AT_LEAST_ONE_SEP = function(t) {
      this.atLeastOneSepFirstInternal(0, t);
    }, o.prototype.AT_LEAST_ONE_SEP1 = function(t) {
      this.atLeastOneSepFirstInternal(1, t);
    }, o.prototype.AT_LEAST_ONE_SEP2 = function(t) {
      this.atLeastOneSepFirstInternal(2, t);
    }, o.prototype.AT_LEAST_ONE_SEP3 = function(t) {
      this.atLeastOneSepFirstInternal(3, t);
    }, o.prototype.AT_LEAST_ONE_SEP4 = function(t) {
      this.atLeastOneSepFirstInternal(4, t);
    }, o.prototype.AT_LEAST_ONE_SEP5 = function(t) {
      this.atLeastOneSepFirstInternal(5, t);
    }, o.prototype.AT_LEAST_ONE_SEP6 = function(t) {
      this.atLeastOneSepFirstInternal(6, t);
    }, o.prototype.AT_LEAST_ONE_SEP7 = function(t) {
      this.atLeastOneSepFirstInternal(7, t);
    }, o.prototype.AT_LEAST_ONE_SEP8 = function(t) {
      this.atLeastOneSepFirstInternal(8, t);
    }, o.prototype.AT_LEAST_ONE_SEP9 = function(t) {
      this.atLeastOneSepFirstInternal(9, t);
    }, o.prototype.RULE = function(t, l, s) {
      if (s === void 0 && (s = T.DEFAULT_RULE_CONFIG), h.contains(this.definedRulesNames, t)) {
        var R = m.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({ topLevelRule: t, grammarName: this.className }), f = { message: R, type: T.ParserDefinitionErrorType.DUPLICATE_RULE_NAME, ruleName: t };
        this.definitionErrors.push(f);
      }
      this.definedRulesNames.push(t);
      var y = this.defineRule(t, l, s);
      return this[t] = y, y;
    }, o.prototype.OVERRIDE_RULE = function(t, l, s) {
      s === void 0 && (s = T.DEFAULT_RULE_CONFIG);
      var R = [];
      R = R.concat(O.validateRuleIsOverridden(t, this.definedRulesNames, this.className)), this.definitionErrors = this.definitionErrors.concat(R);
      var f = this.defineRule(t, l, s);
      return this[t] = f, f;
    }, o.prototype.BACKTRACK = function(t, l) {
      return function() {
        this.isBackTrackingStack.push(1);
        var s = this.saveRecogState();
        try {
          return t.apply(this, l), !0;
        } catch (R) {
          if (r.isRecognitionException(R))
            return !1;
          throw R;
        } finally {
          this.reloadRecogState(s), this.isBackTrackingStack.pop();
        }
      };
    }, o.prototype.getGAstProductions = function() {
      return this.gastProductionsCache;
    }, o.prototype.getSerializedGastProductions = function() {
      return u.serializeGrammar(h.values(this.gastProductionsCache));
    }, o;
  }();
  e.RecognizerApi = E;
}), Jt = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RecognizerEngine = void 0;
  var h = Ae(), r = ht(), T = Ze(), m = it(), O = ot(), u = Be(), E = Ot(), o = Ke(), t = qe(), l = At(), s = function() {
    function R() {
    }
    return R.prototype.initRecognizerEngine = function(f, y) {
      if (this.className = l.classNameFromInstance(this), this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = t.tokenStructuredMatcherNoCategories, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, h.has(y, "serializedGrammar"))
        throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
      if (h.isArray(f)) {
        if (h.isEmpty(f))
          throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
        if (typeof f[0].startOffset == "number")
          throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
      }
      if (h.isArray(f))
        this.tokensMap = h.reduce(f, function(a, d) {
          return a[d.name] = d, a;
        }, {});
      else if (h.has(f, "modes") && h.every(h.flatten(h.values(f.modes)), t.isTokenType)) {
        var p = h.flatten(h.values(f.modes)), n = h.uniq(p);
        this.tokensMap = h.reduce(n, function(a, d) {
          return a[d.name] = d, a;
        }, {});
      } else if (h.isObject(f))
        this.tokensMap = h.cloneObj(f);
      else
        throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
      this.tokensMap.EOF = o.EOF;
      var i = h.every(h.values(f), function(a) {
        return h.isEmpty(a.categoryMatches);
      });
      this.tokenMatcher = i ? t.tokenStructuredMatcherNoCategories : t.tokenStructuredMatcher, t.augmentTokenTypes(h.values(this.tokensMap));
    }, R.prototype.defineRule = function(f, y, p) {
      if (this.selfAnalysisDone)
        throw Error("Grammar rule <" + f + `> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
      var n = h.has(p, "resyncEnabled") ? p.resyncEnabled : u.DEFAULT_RULE_CONFIG.resyncEnabled, i = h.has(p, "recoveryValueFunc") ? p.recoveryValueFunc : u.DEFAULT_RULE_CONFIG.recoveryValueFunc, a = this.ruleShortNameIdx << r.BITS_FOR_METHOD_TYPE + r.BITS_FOR_OCCURRENCE_IDX;
      this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = f, this.fullRuleNameToShort[f] = a;
      function d(F) {
        try {
          if (this.outputCst === !0) {
            y.apply(this, F);
            var w = this.CST_STACK[this.CST_STACK.length - 1];
            return this.cstPostRule(w), w;
          } else
            return y.apply(this, F);
        } catch (H) {
          return this.invokeRuleCatch(H, n, i);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      }
      var c = function(F, w) {
        return F === void 0 && (F = 0), this.ruleInvocationStateUpdate(a, f, F), d.call(this, w);
      }, P = "ruleName";
      return c[P] = f, c.originalGrammarAction = y, c;
    }, R.prototype.invokeRuleCatch = function(f, y, p) {
      var n = this.RULE_STACK.length === 1, i = y && !this.isBackTracking() && this.recoveryEnabled;
      if (T.isRecognitionException(f)) {
        var a = f;
        if (i) {
          var d = this.findReSyncTokenType();
          if (this.isInCurrentRuleReSyncSet(d))
            if (a.resyncedTokens = this.reSyncTo(d), this.outputCst) {
              var c = this.CST_STACK[this.CST_STACK.length - 1];
              return c.recoveredNode = !0, c;
            } else
              return p();
          else {
            if (this.outputCst) {
              var c = this.CST_STACK[this.CST_STACK.length - 1];
              c.recoveredNode = !0, a.partialCstResult = c;
            }
            throw a;
          }
        } else {
          if (n)
            return this.moveToTerminatedState(), p();
          throw a;
        }
      } else
        throw f;
    }, R.prototype.optionInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.OPTION_IDX, y);
      return this.optionInternalLogic(f, y, p);
    }, R.prototype.optionInternalLogic = function(f, y, p) {
      var n = this, i = this.getLaFuncFromCache(p), a, d;
      if (f.DEF !== void 0) {
        if (a = f.DEF, d = f.GATE, d !== void 0) {
          var c = i;
          i = function() {
            return d.call(n) && c.call(n);
          };
        }
      } else
        a = f;
      if (i.call(this) === !0)
        return a.call(this);
    }, R.prototype.atLeastOneInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.AT_LEAST_ONE_IDX, f);
      return this.atLeastOneInternalLogic(f, y, p);
    }, R.prototype.atLeastOneInternalLogic = function(f, y, p) {
      var n = this, i = this.getLaFuncFromCache(p), a, d;
      if (y.DEF !== void 0) {
        if (a = y.DEF, d = y.GATE, d !== void 0) {
          var c = i;
          i = function() {
            return d.call(n) && c.call(n);
          };
        }
      } else
        a = y;
      if (i.call(this) === !0)
        for (var P = this.doSingleRepetition(a); i.call(this) === !0 && P === !0; )
          P = this.doSingleRepetition(a);
      else
        throw this.raiseEarlyExitException(f, m.PROD_TYPE.REPETITION_MANDATORY, y.ERR_MSG);
      this.attemptInRepetitionRecovery(this.atLeastOneInternal, [f, y], i, r.AT_LEAST_ONE_IDX, f, O.NextTerminalAfterAtLeastOneWalker);
    }, R.prototype.atLeastOneSepFirstInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.AT_LEAST_ONE_SEP_IDX, f);
      this.atLeastOneSepFirstInternalLogic(f, y, p);
    }, R.prototype.atLeastOneSepFirstInternalLogic = function(f, y, p) {
      var n = this, i = y.DEF, a = y.SEP, d = this.getLaFuncFromCache(p);
      if (d.call(this) === !0) {
        i.call(this);
        for (var c = function() {
          return n.tokenMatcher(n.LA(1), a);
        }; this.tokenMatcher(this.LA(1), a) === !0; )
          this.CONSUME(a), i.call(this);
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [f, a, c, i, O.NextTerminalAfterAtLeastOneSepWalker], c, r.AT_LEAST_ONE_SEP_IDX, f, O.NextTerminalAfterAtLeastOneSepWalker);
      } else
        throw this.raiseEarlyExitException(f, m.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, y.ERR_MSG);
    }, R.prototype.manyInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.MANY_IDX, f);
      return this.manyInternalLogic(f, y, p);
    }, R.prototype.manyInternalLogic = function(f, y, p) {
      var n = this, i = this.getLaFuncFromCache(p), a, d;
      if (y.DEF !== void 0) {
        if (a = y.DEF, d = y.GATE, d !== void 0) {
          var c = i;
          i = function() {
            return d.call(n) && c.call(n);
          };
        }
      } else
        a = y;
      for (var P = !0; i.call(this) === !0 && P === !0; )
        P = this.doSingleRepetition(a);
      this.attemptInRepetitionRecovery(this.manyInternal, [f, y], i, r.MANY_IDX, f, O.NextTerminalAfterManyWalker, P);
    }, R.prototype.manySepFirstInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.MANY_SEP_IDX, f);
      this.manySepFirstInternalLogic(f, y, p);
    }, R.prototype.manySepFirstInternalLogic = function(f, y, p) {
      var n = this, i = y.DEF, a = y.SEP, d = this.getLaFuncFromCache(p);
      if (d.call(this) === !0) {
        i.call(this);
        for (var c = function() {
          return n.tokenMatcher(n.LA(1), a);
        }; this.tokenMatcher(this.LA(1), a) === !0; )
          this.CONSUME(a), i.call(this);
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [f, a, c, i, O.NextTerminalAfterManySepWalker], c, r.MANY_SEP_IDX, f, O.NextTerminalAfterManySepWalker);
      }
    }, R.prototype.repetitionSepSecondInternal = function(f, y, p, n, i) {
      for (; p(); )
        this.CONSUME(y), n.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [f, y, p, n, i], p, r.AT_LEAST_ONE_SEP_IDX, f, i);
    }, R.prototype.doSingleRepetition = function(f) {
      var y = this.getLexerPosition();
      f.call(this);
      var p = this.getLexerPosition();
      return p > y;
    }, R.prototype.orInternal = function(f, y) {
      var p = this.getKeyForAutomaticLookahead(r.OR_IDX, y), n = h.isArray(f) ? f : f.DEF, i = this.getLaFuncFromCache(p), a = i.call(this, n);
      if (a !== void 0) {
        var d = n[a];
        return d.ALT.call(this);
      }
      this.raiseNoAltException(y, f.ERR_MSG);
    }, R.prototype.ruleFinallyStateUpdate = function() {
      if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
        var f = this.LA(1), y = this.errorMessageProvider.buildNotAllInputParsedMessage({ firstRedundant: f, ruleName: this.getCurrRuleFullName() });
        this.SAVE_ERROR(new T.NotAllInputParsedException(y, f));
      }
    }, R.prototype.subruleInternal = function(f, y, p) {
      var n;
      try {
        var i = p !== void 0 ? p.ARGS : void 0;
        return n = f.call(this, y, i), this.cstPostNonTerminal(n, p !== void 0 && p.LABEL !== void 0 ? p.LABEL : f.ruleName), n;
      } catch (a) {
        this.subruleInternalError(a, p, f.ruleName);
      }
    }, R.prototype.subruleInternalError = function(f, y, p) {
      throw T.isRecognitionException(f) && f.partialCstResult !== void 0 && (this.cstPostNonTerminal(f.partialCstResult, y !== void 0 && y.LABEL !== void 0 ? y.LABEL : p), delete f.partialCstResult), f;
    }, R.prototype.consumeInternal = function(f, y, p) {
      var n;
      try {
        var i = this.LA(1);
        this.tokenMatcher(i, f) === !0 ? (this.consumeToken(), n = i) : this.consumeInternalError(f, i, p);
      } catch (a) {
        n = this.consumeInternalRecovery(f, y, a);
      }
      return this.cstPostTerminal(p !== void 0 && p.LABEL !== void 0 ? p.LABEL : f.name, n), n;
    }, R.prototype.consumeInternalError = function(f, y, p) {
      var n, i = this.LA(0);
      throw p !== void 0 && p.ERR_MSG ? n = p.ERR_MSG : n = this.errorMessageProvider.buildMismatchTokenMessage({ expected: f, actual: y, previous: i, ruleName: this.getCurrRuleFullName() }), this.SAVE_ERROR(new T.MismatchedTokenException(n, y, i));
    }, R.prototype.consumeInternalRecovery = function(f, y, p) {
      if (this.recoveryEnabled && p.name === "MismatchedTokenException" && !this.isBackTracking()) {
        var n = this.getFollowsForInRuleRecovery(f, y);
        try {
          return this.tryInRuleRecovery(f, n);
        } catch (i) {
          throw i.name === E.IN_RULE_RECOVERY_EXCEPTION ? p : i;
        }
      } else
        throw p;
    }, R.prototype.saveRecogState = function() {
      var f = this.errors, y = h.cloneArr(this.RULE_STACK);
      return { errors: f, lexerState: this.exportLexerState(), RULE_STACK: y, CST_STACK: this.CST_STACK };
    }, R.prototype.reloadRecogState = function(f) {
      this.errors = f.errors, this.importLexerState(f.lexerState), this.RULE_STACK = f.RULE_STACK;
    }, R.prototype.ruleInvocationStateUpdate = function(f, y, p) {
      this.RULE_OCCURRENCE_STACK.push(p), this.RULE_STACK.push(f), this.cstInvocationStateUpdate(y, f);
    }, R.prototype.isBackTracking = function() {
      return this.isBackTrackingStack.length !== 0;
    }, R.prototype.getCurrRuleFullName = function() {
      var f = this.getLastExplicitRuleShortName();
      return this.shortRuleNameToFull[f];
    }, R.prototype.shortRuleNameToFullName = function(f) {
      return this.shortRuleNameToFull[f];
    }, R.prototype.isAtEndOfInput = function() {
      return this.tokenMatcher(this.LA(1), o.EOF);
    }, R.prototype.reset = function() {
      this.resetLexerState(), this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
    }, R;
  }();
  e.RecognizerEngine = s;
}), en = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ErrorHandler = void 0;
  var h = Ze(), r = Ae(), T = it(), m = Be(), O = function() {
    function u() {
    }
    return u.prototype.initErrorHandler = function(E) {
      this._errors = [], this.errorMessageProvider = r.has(E, "errorMessageProvider") ? E.errorMessageProvider : m.DEFAULT_PARSER_CONFIG.errorMessageProvider;
    }, u.prototype.SAVE_ERROR = function(E) {
      if (h.isRecognitionException(E))
        return E.context = { ruleStack: this.getHumanReadableRuleStack(), ruleOccurrenceStack: r.cloneArr(this.RULE_OCCURRENCE_STACK) }, this._errors.push(E), E;
      throw Error("Trying to save an Error which is not a RecognitionException");
    }, Object.defineProperty(u.prototype, "errors", { get: function() {
      return r.cloneArr(this._errors);
    }, set: function(E) {
      this._errors = E;
    }, enumerable: !1, configurable: !0 }), u.prototype.raiseEarlyExitException = function(E, o, t) {
      for (var l = this.getCurrRuleFullName(), s = this.getGAstProductions()[l], R = T.getLookaheadPathsForOptionalProd(E, s, o, this.maxLookahead), f = R[0], y = [], p = 1; p <= this.maxLookahead; p++)
        y.push(this.LA(p));
      var n = this.errorMessageProvider.buildEarlyExitMessage({ expectedIterationPaths: f, actual: y, previous: this.LA(0), customUserDescription: t, ruleName: l });
      throw this.SAVE_ERROR(new h.EarlyExitException(n, this.LA(1), this.LA(0)));
    }, u.prototype.raiseNoAltException = function(E, o) {
      for (var t = this.getCurrRuleFullName(), l = this.getGAstProductions()[t], s = T.getLookaheadPathsForOr(E, l, this.maxLookahead), R = [], f = 1; f <= this.maxLookahead; f++)
        R.push(this.LA(f));
      var y = this.LA(0), p = this.errorMessageProvider.buildNoViableAltMessage({ expectedPathsPerAlt: s, actual: R, previous: y, customUserDescription: o, ruleName: this.getCurrRuleFullName() });
      throw this.SAVE_ERROR(new h.NoViableAltException(p, this.LA(1), y));
    }, u;
  }();
  e.ErrorHandler = O;
}), tn = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContentAssist = void 0;
  var h = ot(), r = Ae(), T = function() {
    function m() {
    }
    return m.prototype.initContentAssist = function() {
    }, m.prototype.computeContentAssist = function(O, u) {
      var E = this.gastProductionsCache[O];
      if (r.isUndefined(E))
        throw Error("Rule ->" + O + "<- does not exist in this grammar.");
      return h.nextPossibleTokensAfter([E], u, this.tokenMatcher, this.maxLookahead);
    }, m.prototype.getNextPossibleTokenTypes = function(O) {
      var u = r.first(O.ruleStack), E = this.getGAstProductions(), o = E[u], t = new h.NextAfterTokenWalker(o, O).startWalking();
      return t;
    }, m;
  }();
  e.ContentAssist = T;
}), nn = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.GastRecorder = void 0;
  var h = Ae(), r = Ue(), T = tt(), m = qe(), O = Ke(), u = Be(), E = ht(), o = { description: "This Object indicates the Parser is during Recording Phase" };
  Object.freeze(o);
  var t = !0, l = Math.pow(2, E.BITS_FOR_OCCURRENCE_IDX) - 1, s = O.createToken({ name: "RECORDING_PHASE_TOKEN", pattern: T.Lexer.NA });
  m.augmentTokenTypes([s]);
  var R = O.createTokenInstance(s, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
  Object.freeze(R);
  var f = { name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, children: {} }, y = function() {
    function d() {
    }
    return d.prototype.initGastRecorder = function(c) {
      this.recordingProdStack = [], this.RECORDING_PHASE = !1;
    }, d.prototype.enableRecording = function() {
      var c = this;
      this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", function() {
        for (var P = function(w) {
          var H = w > 0 ? w : "";
          c["CONSUME" + H] = function(k, G) {
            return this.consumeInternalRecord(k, w, G);
          }, c["SUBRULE" + H] = function(k, G) {
            return this.subruleInternalRecord(k, w, G);
          }, c["OPTION" + H] = function(k) {
            return this.optionInternalRecord(k, w);
          }, c["OR" + H] = function(k) {
            return this.orInternalRecord(k, w);
          }, c["MANY" + H] = function(k) {
            this.manyInternalRecord(w, k);
          }, c["MANY_SEP" + H] = function(k) {
            this.manySepFirstInternalRecord(w, k);
          }, c["AT_LEAST_ONE" + H] = function(k) {
            this.atLeastOneInternalRecord(w, k);
          }, c["AT_LEAST_ONE_SEP" + H] = function(k) {
            this.atLeastOneSepFirstInternalRecord(w, k);
          };
        }, F = 0; F < 10; F++)
          P(F);
        c.consume = function(w, H, k) {
          return this.consumeInternalRecord(H, w, k);
        }, c.subrule = function(w, H, k) {
          return this.subruleInternalRecord(H, w, k);
        }, c.option = function(w, H) {
          return this.optionInternalRecord(H, w);
        }, c.or = function(w, H) {
          return this.orInternalRecord(H, w);
        }, c.many = function(w, H) {
          this.manyInternalRecord(w, H);
        }, c.atLeastOne = function(w, H) {
          this.atLeastOneInternalRecord(w, H);
        }, c.ACTION = c.ACTION_RECORD, c.BACKTRACK = c.BACKTRACK_RECORD, c.LA = c.LA_RECORD;
      });
    }, d.prototype.disableRecording = function() {
      var c = this;
      this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", function() {
        for (var P = 0; P < 10; P++) {
          var F = P > 0 ? P : "";
          delete c["CONSUME" + F], delete c["SUBRULE" + F], delete c["OPTION" + F], delete c["OR" + F], delete c["MANY" + F], delete c["MANY_SEP" + F], delete c["AT_LEAST_ONE" + F], delete c["AT_LEAST_ONE_SEP" + F];
        }
        delete c.consume, delete c.subrule, delete c.option, delete c.or, delete c.many, delete c.atLeastOne, delete c.ACTION, delete c.BACKTRACK, delete c.LA;
      });
    }, d.prototype.ACTION_RECORD = function(c) {
    }, d.prototype.BACKTRACK_RECORD = function(c, P) {
      return function() {
        return !0;
      };
    }, d.prototype.LA_RECORD = function(c) {
      return u.END_OF_FILE;
    }, d.prototype.topLevelRuleRecord = function(c, P) {
      try {
        var F = new r.Rule({ definition: [], name: c });
        return F.name = c, this.recordingProdStack.push(F), P.call(this), this.recordingProdStack.pop(), F;
      } catch (w) {
        if (w.KNOWN_RECORDER_ERROR !== !0)
          try {
            w.message = w.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
          } catch {
            throw w;
          }
        throw w;
      }
    }, d.prototype.optionInternalRecord = function(c, P) {
      return p.call(this, r.Option, c, P);
    }, d.prototype.atLeastOneInternalRecord = function(c, P) {
      p.call(this, r.RepetitionMandatory, P, c);
    }, d.prototype.atLeastOneSepFirstInternalRecord = function(c, P) {
      p.call(this, r.RepetitionMandatoryWithSeparator, P, c, t);
    }, d.prototype.manyInternalRecord = function(c, P) {
      p.call(this, r.Repetition, P, c);
    }, d.prototype.manySepFirstInternalRecord = function(c, P) {
      p.call(this, r.RepetitionWithSeparator, P, c, t);
    }, d.prototype.orInternalRecord = function(c, P) {
      return n.call(this, c, P);
    }, d.prototype.subruleInternalRecord = function(c, P, F) {
      if (a(P), !c || h.has(c, "ruleName") === !1) {
        var w = new Error("<SUBRULE" + i(P) + "> argument is invalid" + (" expecting a Parser method reference but got: <" + JSON.stringify(c) + ">") + (`
 inside top level rule: <` + this.recordingProdStack[0].name + ">"));
        throw w.KNOWN_RECORDER_ERROR = !0, w;
      }
      var H = h.peek(this.recordingProdStack), k = c.ruleName, G = new r.NonTerminal({ idx: P, nonTerminalName: k, referencedRule: void 0 });
      return H.definition.push(G), this.outputCst ? f : o;
    }, d.prototype.consumeInternalRecord = function(c, P, F) {
      if (a(P), !m.hasShortKeyProperty(c)) {
        var w = new Error("<CONSUME" + i(P) + "> argument is invalid" + (" expecting a TokenType reference but got: <" + JSON.stringify(c) + ">") + (`
 inside top level rule: <` + this.recordingProdStack[0].name + ">"));
        throw w.KNOWN_RECORDER_ERROR = !0, w;
      }
      var H = h.peek(this.recordingProdStack), k = new r.Terminal({ idx: P, terminalType: c });
      return H.definition.push(k), R;
    }, d;
  }();
  e.GastRecorder = y;
  function p(d, c, P, F) {
    F === void 0 && (F = !1), a(P);
    var w = h.peek(this.recordingProdStack), H = h.isFunction(c) ? c : c.DEF, k = new d({ definition: [], idx: P });
    return F && (k.separator = c.SEP), h.has(c, "MAX_LOOKAHEAD") && (k.maxLookahead = c.MAX_LOOKAHEAD), this.recordingProdStack.push(k), H.call(this), w.definition.push(k), this.recordingProdStack.pop(), o;
  }
  function n(d, c) {
    var P = this;
    a(c);
    var F = h.peek(this.recordingProdStack), w = h.isArray(d) === !1, H = w === !1 ? d : d.DEF, k = new r.Alternation({ definition: [], idx: c, ignoreAmbiguities: w && d.IGNORE_AMBIGUITIES === !0 });
    h.has(d, "MAX_LOOKAHEAD") && (k.maxLookahead = d.MAX_LOOKAHEAD);
    var G = h.some(H, function(x) {
      return h.isFunction(x.GATE);
    });
    return k.hasPredicates = G, F.definition.push(k), h.forEach(H, function(x) {
      var N = new r.Alternative({ definition: [] });
      k.definition.push(N), h.has(x, "IGNORE_AMBIGUITIES") ? N.ignoreAmbiguities = x.IGNORE_AMBIGUITIES : h.has(x, "GATE") && (N.ignoreAmbiguities = !0), P.recordingProdStack.push(N), x.ALT.call(P), P.recordingProdStack.pop();
    }), o;
  }
  function i(d) {
    return d === 0 ? "" : "" + d;
  }
  function a(d) {
    if (d < 0 || d > l) {
      var c = new Error("Invalid DSL Method idx value: <" + d + `>
	` + ("Idx value must be a none negative value smaller than " + (l + 1)));
      throw c.KNOWN_RECORDER_ERROR = !0, c;
    }
  }
}), rn = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PerformanceTracer = void 0;
  var h = Ae(), r = Be(), T = function() {
    function m() {
    }
    return m.prototype.initPerformanceTracer = function(O) {
      if (h.has(O, "traceInitPerf")) {
        var u = O.traceInitPerf, E = typeof u == "number";
        this.traceInitMaxIdent = E ? u : 1 / 0, this.traceInitPerf = E ? u > 0 : u;
      } else
        this.traceInitMaxIdent = 0, this.traceInitPerf = r.DEFAULT_PARSER_CONFIG.traceInitPerf;
      this.traceInitIndent = -1;
    }, m.prototype.TRACE_INIT = function(O, u) {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        var E = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(E + "--> <" + O + ">");
        var o = h.timer(u), t = o.time, l = o.value, s = t > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && s(E + "<-- <" + O + "> time: " + t + "ms"), this.traceInitIndent--, l;
      } else
        return u();
    }, m;
  }();
  e.PerformanceTracer = T;
}), on = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.applyMixins = void 0;
  function h(r, T) {
    T.forEach(function(m) {
      var O = m.prototype;
      Object.getOwnPropertyNames(O).forEach(function(u) {
        if (u !== "constructor") {
          var E = Object.getOwnPropertyDescriptor(O, u);
          E && (E.get || E.set) ? Object.defineProperty(r.prototype, u, E) : r.prototype[u] = m.prototype[u];
        }
      });
    });
  }
  e.applyMixins = h;
}), Be = Ee((e) => {
  var h = e && e.__extends || function() {
    var F = function(w, H) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, G) {
        k.__proto__ = G;
      } || function(k, G) {
        for (var x in G)
          Object.prototype.hasOwnProperty.call(G, x) && (k[x] = G[x]);
      }, F(w, H);
    };
    return function(w, H) {
      if (typeof H != "function" && H !== null)
        throw new TypeError("Class extends value " + String(H) + " is not a constructor or null");
      F(w, H);
      function k() {
        this.constructor = w;
      }
      w.prototype = H === null ? Object.create(H) : (k.prototype = H.prototype, new k());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EmbeddedActionsParser = e.CstParser = e.Parser = e.EMPTY_ALT = e.ParserDefinitionErrorType = e.DEFAULT_RULE_CONFIG = e.DEFAULT_PARSER_CONFIG = e.END_OF_FILE = void 0;
  var r = Ae(), T = zt(), m = Ke(), O = rt(), u = Yt(), E = Ot(), o = Ht(), t = Qt(), l = Zt(), s = $t(), R = Jt(), f = en(), y = tn(), p = nn(), n = rn(), i = on();
  e.END_OF_FILE = m.createTokenInstance(m.EOF, "", NaN, NaN, NaN, NaN, NaN, NaN), Object.freeze(e.END_OF_FILE), e.DEFAULT_PARSER_CONFIG = Object.freeze({ recoveryEnabled: !1, maxLookahead: 3, dynamicTokensEnabled: !1, outputCst: !0, errorMessageProvider: O.defaultParserErrorProvider, nodeLocationTracking: "none", traceInitPerf: !1, skipValidations: !1 }), e.DEFAULT_RULE_CONFIG = Object.freeze({ recoveryValueFunc: function() {
  }, resyncEnabled: !0 }), function(F) {
    F[F.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", F[F.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", F[F.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", F[F.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", F[F.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", F[F.LEFT_RECURSION = 5] = "LEFT_RECURSION", F[F.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", F[F.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", F[F.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", F[F.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", F[F.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", F[F.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", F[F.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS";
  }(e.ParserDefinitionErrorType || (e.ParserDefinitionErrorType = {}));
  function a(F) {
    return F === void 0 && (F = void 0), function() {
      return F;
    };
  }
  e.EMPTY_ALT = a;
  var d = function() {
    function F(w, H) {
      this.definitionErrors = [], this.selfAnalysisDone = !1;
      var k = this;
      if (k.initErrorHandler(H), k.initLexerAdapter(), k.initLooksAhead(H), k.initRecognizerEngine(w, H), k.initRecoverable(H), k.initTreeBuilder(H), k.initContentAssist(), k.initGastRecorder(H), k.initPerformanceTracer(H), r.has(H, "ignoredIssues"))
        throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
      this.skipValidations = r.has(H, "skipValidations") ? H.skipValidations : e.DEFAULT_PARSER_CONFIG.skipValidations;
    }
    return F.performSelfAnalysis = function(w) {
      throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
    }, F.prototype.performSelfAnalysis = function() {
      var w = this;
      this.TRACE_INIT("performSelfAnalysis", function() {
        var H;
        w.selfAnalysisDone = !0;
        var k = w.className;
        w.TRACE_INIT("toFastProps", function() {
          r.toFastProperties(w);
        }), w.TRACE_INIT("Grammar Recording", function() {
          try {
            w.enableRecording(), r.forEach(w.definedRulesNames, function(x) {
              var N = w[x], b = N.originalGrammarAction, S = void 0;
              w.TRACE_INIT(x + " Rule", function() {
                S = w.topLevelRuleRecord(x, b);
              }), w.gastProductionsCache[x] = S;
            });
          } finally {
            w.disableRecording();
          }
        });
        var G = [];
        if (w.TRACE_INIT("Grammar Resolving", function() {
          G = u.resolveGrammar({ rules: r.values(w.gastProductionsCache) }), w.definitionErrors = w.definitionErrors.concat(G);
        }), w.TRACE_INIT("Grammar Validations", function() {
          if (r.isEmpty(G) && w.skipValidations === !1) {
            var x = u.validateGrammar({ rules: r.values(w.gastProductionsCache), maxLookahead: w.maxLookahead, tokenTypes: r.values(w.tokensMap), errMsgProvider: O.defaultGrammarValidatorErrorProvider, grammarName: k });
            w.definitionErrors = w.definitionErrors.concat(x);
          }
        }), r.isEmpty(w.definitionErrors) && (w.recoveryEnabled && w.TRACE_INIT("computeAllProdsFollows", function() {
          var x = T.computeAllProdsFollows(r.values(w.gastProductionsCache));
          w.resyncFollows = x;
        }), w.TRACE_INIT("ComputeLookaheadFunctions", function() {
          w.preComputeLookaheadFunctions(r.values(w.gastProductionsCache));
        })), !F.DEFER_DEFINITION_ERRORS_HANDLING && !r.isEmpty(w.definitionErrors))
          throw H = r.map(w.definitionErrors, function(x) {
            return x.message;
          }), new Error(`Parser Definition Errors detected:
 ` + H.join(`
-------------------------------
`));
      });
    }, F.DEFER_DEFINITION_ERRORS_HANDLING = !1, F;
  }();
  e.Parser = d, i.applyMixins(d, [E.Recoverable, o.LooksAhead, t.TreeBuilder, l.LexerAdapter, R.RecognizerEngine, s.RecognizerApi, f.ErrorHandler, y.ContentAssist, p.GastRecorder, n.PerformanceTracer]);
  var c = function(F) {
    h(w, F);
    function w(H, k) {
      k === void 0 && (k = e.DEFAULT_PARSER_CONFIG);
      var G = this, x = r.cloneObj(k);
      return x.outputCst = !0, G = F.call(this, H, x) || this, G;
    }
    return w;
  }(d);
  e.CstParser = c;
  var P = function(F) {
    h(w, F);
    function w(H, k) {
      k === void 0 && (k = e.DEFAULT_PARSER_CONFIG);
      var G = this, x = r.cloneObj(k);
      return x.outputCst = !1, G = F.call(this, H, x) || this, G;
    }
    return w;
  }(d);
  e.EmbeddedActionsParser = P;
}), an = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createSyntaxDiagramsCode = void 0;
  var h = vt();
  function r(T, m) {
    var O = m === void 0 ? {} : m, u = O.resourceBase, E = u === void 0 ? "https://unpkg.com/chevrotain@" + h.VERSION + "/diagrams/" : u, o = O.css, t = o === void 0 ? "https://unpkg.com/chevrotain@" + h.VERSION + "/diagrams/diagrams.css" : o, l = `
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`, s = `
<link rel='stylesheet' href='` + t + `'>
`, R = `
<script src='` + E + `vendor/railroad-diagrams.js'><\/script>
<script src='` + E + `src/diagrams_builder.js'><\/script>
<script src='` + E + `src/diagrams_behavior.js'><\/script>
<script src='` + E + `src/main.js'><\/script>
`, f = `
<div id="diagrams" align="center"></div>
`, y = `
<script>
    window.serializedGrammar = ` + JSON.stringify(T, null, "  ") + `;
<\/script>
`, p = `
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;
    return l + s + R + f + y + p;
  }
  e.createSyntaxDiagramsCode = r;
}), sn = Ee((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Parser = e.createSyntaxDiagramsCode = e.clearCache = e.GAstVisitor = e.serializeProduction = e.serializeGrammar = e.Terminal = e.Rule = e.RepetitionWithSeparator = e.RepetitionMandatoryWithSeparator = e.RepetitionMandatory = e.Repetition = e.Option = e.NonTerminal = e.Alternative = e.Alternation = e.defaultLexerErrorProvider = e.NoViableAltException = e.NotAllInputParsedException = e.MismatchedTokenException = e.isRecognitionException = e.EarlyExitException = e.defaultParserErrorProvider = e.tokenName = e.tokenMatcher = e.tokenLabel = e.EOF = e.createTokenInstance = e.createToken = e.LexerDefinitionErrorType = e.Lexer = e.EMPTY_ALT = e.ParserDefinitionErrorType = e.EmbeddedActionsParser = e.CstParser = e.VERSION = void 0;
  var h = vt();
  Object.defineProperty(e, "VERSION", { enumerable: !0, get: function() {
    return h.VERSION;
  } });
  var r = Be();
  Object.defineProperty(e, "CstParser", { enumerable: !0, get: function() {
    return r.CstParser;
  } }), Object.defineProperty(e, "EmbeddedActionsParser", { enumerable: !0, get: function() {
    return r.EmbeddedActionsParser;
  } }), Object.defineProperty(e, "ParserDefinitionErrorType", { enumerable: !0, get: function() {
    return r.ParserDefinitionErrorType;
  } }), Object.defineProperty(e, "EMPTY_ALT", { enumerable: !0, get: function() {
    return r.EMPTY_ALT;
  } });
  var T = tt();
  Object.defineProperty(e, "Lexer", { enumerable: !0, get: function() {
    return T.Lexer;
  } }), Object.defineProperty(e, "LexerDefinitionErrorType", { enumerable: !0, get: function() {
    return T.LexerDefinitionErrorType;
  } });
  var m = Ke();
  Object.defineProperty(e, "createToken", { enumerable: !0, get: function() {
    return m.createToken;
  } }), Object.defineProperty(e, "createTokenInstance", { enumerable: !0, get: function() {
    return m.createTokenInstance;
  } }), Object.defineProperty(e, "EOF", { enumerable: !0, get: function() {
    return m.EOF;
  } }), Object.defineProperty(e, "tokenLabel", { enumerable: !0, get: function() {
    return m.tokenLabel;
  } }), Object.defineProperty(e, "tokenMatcher", { enumerable: !0, get: function() {
    return m.tokenMatcher;
  } }), Object.defineProperty(e, "tokenName", { enumerable: !0, get: function() {
    return m.tokenName;
  } });
  var O = rt();
  Object.defineProperty(e, "defaultParserErrorProvider", { enumerable: !0, get: function() {
    return O.defaultParserErrorProvider;
  } });
  var u = Ze();
  Object.defineProperty(e, "EarlyExitException", { enumerable: !0, get: function() {
    return u.EarlyExitException;
  } }), Object.defineProperty(e, "isRecognitionException", { enumerable: !0, get: function() {
    return u.isRecognitionException;
  } }), Object.defineProperty(e, "MismatchedTokenException", { enumerable: !0, get: function() {
    return u.MismatchedTokenException;
  } }), Object.defineProperty(e, "NotAllInputParsedException", { enumerable: !0, get: function() {
    return u.NotAllInputParsedException;
  } }), Object.defineProperty(e, "NoViableAltException", { enumerable: !0, get: function() {
    return u.NoViableAltException;
  } });
  var E = Et();
  Object.defineProperty(e, "defaultLexerErrorProvider", { enumerable: !0, get: function() {
    return E.defaultLexerErrorProvider;
  } });
  var o = Ue();
  Object.defineProperty(e, "Alternation", { enumerable: !0, get: function() {
    return o.Alternation;
  } }), Object.defineProperty(e, "Alternative", { enumerable: !0, get: function() {
    return o.Alternative;
  } }), Object.defineProperty(e, "NonTerminal", { enumerable: !0, get: function() {
    return o.NonTerminal;
  } }), Object.defineProperty(e, "Option", { enumerable: !0, get: function() {
    return o.Option;
  } }), Object.defineProperty(e, "Repetition", { enumerable: !0, get: function() {
    return o.Repetition;
  } }), Object.defineProperty(e, "RepetitionMandatory", { enumerable: !0, get: function() {
    return o.RepetitionMandatory;
  } }), Object.defineProperty(e, "RepetitionMandatoryWithSeparator", { enumerable: !0, get: function() {
    return o.RepetitionMandatoryWithSeparator;
  } }), Object.defineProperty(e, "RepetitionWithSeparator", { enumerable: !0, get: function() {
    return o.RepetitionWithSeparator;
  } }), Object.defineProperty(e, "Rule", { enumerable: !0, get: function() {
    return o.Rule;
  } }), Object.defineProperty(e, "Terminal", { enumerable: !0, get: function() {
    return o.Terminal;
  } });
  var t = Ue();
  Object.defineProperty(e, "serializeGrammar", { enumerable: !0, get: function() {
    return t.serializeGrammar;
  } }), Object.defineProperty(e, "serializeProduction", { enumerable: !0, get: function() {
    return t.serializeProduction;
  } });
  var l = Qe();
  Object.defineProperty(e, "GAstVisitor", { enumerable: !0, get: function() {
    return l.GAstVisitor;
  } });
  function s() {
    console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`);
  }
  e.clearCache = s;
  var R = an();
  Object.defineProperty(e, "createSyntaxDiagramsCode", { enumerable: !0, get: function() {
    return R.createSyntaxDiagramsCode;
  } });
  var f = function() {
    function y() {
      throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`);
    }
    return y;
  }();
  e.Parser = f;
});
const Xe = sn();
class hn extends It {
  constructor(h) {
    super(h);
  }
  load(h, r, T, m) {
    const O = this, u = O.path === "" ? Nt.extractUrlBase(h) : O.path, E = new _t(O.manager);
    E.setPath(O.path), E.setRequestHeader(O.requestHeader), E.setWithCredentials(O.withCredentials), E.load(h, function(o) {
      try {
        r(O.parse(o, u));
      } catch (t) {
        m ? m(t) : console.error(t), O.manager.itemError(h);
      }
    }, T, m);
  }
  parse(h, r) {
    const T = {};
    function m(I) {
      const g = O(), v = new cn(g.tokens), _ = new ln(g.tokenVocabulary), A = u(_.getBaseCstVisitorConstructor()), C = v.lex(I);
      _.input = C.tokens;
      const L = _.vrml();
      if (_.errors.length > 0)
        throw console.error(_.errors), Error("THREE.VRMLLoader: Parsing errors detected.");
      return A.visit(L);
    }
    function O() {
      const I = Xe.createToken, g = I({ name: "RouteIdentifier", pattern: /[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/ }), v = I({ name: "Identifier", pattern: /[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/, longer_alt: g }), _ = [
        "Anchor",
        "Billboard",
        "Collision",
        "Group",
        "Transform",
        // grouping nodes
        "Inline",
        "LOD",
        "Switch",
        // special groups
        "AudioClip",
        "DirectionalLight",
        "PointLight",
        "Script",
        "Shape",
        "Sound",
        "SpotLight",
        "WorldInfo",
        // common nodes
        "CylinderSensor",
        "PlaneSensor",
        "ProximitySensor",
        "SphereSensor",
        "TimeSensor",
        "TouchSensor",
        "VisibilitySensor",
        // sensors
        "Box",
        "Cone",
        "Cylinder",
        "ElevationGrid",
        "Extrusion",
        "IndexedFaceSet",
        "IndexedLineSet",
        "PointSet",
        "Sphere",
        // geometries
        "Color",
        "Coordinate",
        "Normal",
        "TextureCoordinate",
        // geometric properties
        "Appearance",
        "FontStyle",
        "ImageTexture",
        "Material",
        "MovieTexture",
        "PixelTexture",
        "TextureTransform",
        // appearance
        "ColorInterpolator",
        "CoordinateInterpolator",
        "NormalInterpolator",
        "OrientationInterpolator",
        "PositionInterpolator",
        "ScalarInterpolator",
        // interpolators
        "Background",
        "Fog",
        "NavigationInfo",
        "Viewpoint",
        // bindable nodes
        "Text"
        // Text must be placed at the end of the regex so there are no matches for TextureTransform and TextureCoordinate
      ], A = I({
        name: "Version",
        pattern: /#VRML.*/,
        longer_alt: v
      }), C = I({
        name: "NodeName",
        pattern: new RegExp(_.join("|")),
        longer_alt: v
      }), L = I({
        name: "DEF",
        pattern: /DEF/,
        longer_alt: v
      }), U = I({
        name: "USE",
        pattern: /USE/,
        longer_alt: v
      }), V = I({
        name: "ROUTE",
        pattern: /ROUTE/,
        longer_alt: v
      }), Z = I({
        name: "TO",
        pattern: /TO/,
        longer_alt: v
      }), te = I({ name: "StringLiteral", pattern: /"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/ }), me = I({ name: "HexLiteral", pattern: /0[xX][0-9a-fA-F]+/ }), Oe = I({ name: "NumberLiteral", pattern: /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/ }), be = I({ name: "TrueLiteral", pattern: /TRUE/ }), Ie = I({ name: "FalseLiteral", pattern: /FALSE/ }), ye = I({ name: "NullLiteral", pattern: /NULL/ }), Te = I({ name: "LSquare", pattern: /\[/ }), Ne = I({ name: "RSquare", pattern: /]/ }), Le = I({ name: "LCurly", pattern: /{/ }), Re = I({ name: "RCurly", pattern: /}/ }), Pe = I({
        name: "Comment",
        pattern: /#.*/,
        group: Xe.Lexer.SKIPPED
      }), we = [
        I({
          name: "WhiteSpace",
          pattern: /[ ,\s]/,
          group: Xe.Lexer.SKIPPED
        }),
        // keywords appear before the Identifier
        C,
        L,
        U,
        V,
        Z,
        be,
        Ie,
        ye,
        // the Identifier must appear after the keywords because all keywords are valid identifiers
        A,
        v,
        g,
        te,
        me,
        Oe,
        Te,
        Ne,
        Le,
        Re,
        Pe
      ], Fe = {};
      for (let ge = 0, ce = we.length; ge < ce; ge++) {
        const ue = we[ge];
        Fe[ue.name] = ue;
      }
      return { tokens: we, tokenVocabulary: Fe };
    }
    function u(I) {
      class g extends I {
        constructor() {
          super(), this.validateVisitor();
        }
        vrml(A) {
          const C = {
            version: this.visit(A.version),
            nodes: [],
            routes: []
          };
          for (let L = 0, U = A.node.length; L < U; L++) {
            const V = A.node[L];
            C.nodes.push(this.visit(V));
          }
          if (A.route)
            for (let L = 0, U = A.route.length; L < U; L++) {
              const V = A.route[L];
              C.routes.push(this.visit(V));
            }
          return C;
        }
        version(A) {
          return A.Version[0].image;
        }
        node(A) {
          const C = {
            name: A.NodeName[0].image,
            fields: []
          };
          if (A.field)
            for (let L = 0, U = A.field.length; L < U; L++) {
              const V = A.field[L];
              C.fields.push(this.visit(V));
            }
          return A.def && (C.DEF = this.visit(A.def[0])), C;
        }
        field(A) {
          const C = {
            name: A.Identifier[0].image,
            type: null,
            values: null
          };
          let L;
          return A.singleFieldValue && (L = this.visit(A.singleFieldValue[0])), A.multiFieldValue && (L = this.visit(A.multiFieldValue[0])), C.type = L.type, C.values = L.values, C;
        }
        def(A) {
          return (A.Identifier || A.NodeName)[0].image;
        }
        use(A) {
          return { USE: (A.Identifier || A.NodeName)[0].image };
        }
        singleFieldValue(A) {
          return v(this, A);
        }
        multiFieldValue(A) {
          return v(this, A);
        }
        route(A) {
          return {
            FROM: A.RouteIdentifier[0].image,
            TO: A.RouteIdentifier[1].image
          };
        }
      }
      function v(_, A) {
        const C = {
          type: null,
          values: []
        };
        if (A.node) {
          C.type = "node";
          for (let L = 0, U = A.node.length; L < U; L++) {
            const V = A.node[L];
            C.values.push(_.visit(V));
          }
        }
        if (A.use) {
          C.type = "use";
          for (let L = 0, U = A.use.length; L < U; L++) {
            const V = A.use[L];
            C.values.push(_.visit(V));
          }
        }
        if (A.StringLiteral) {
          C.type = "string";
          for (let L = 0, U = A.StringLiteral.length; L < U; L++) {
            const V = A.StringLiteral[L];
            C.values.push(V.image.replace(/'|"/g, ""));
          }
        }
        if (A.NumberLiteral) {
          C.type = "number";
          for (let L = 0, U = A.NumberLiteral.length; L < U; L++) {
            const V = A.NumberLiteral[L];
            C.values.push(parseFloat(V.image));
          }
        }
        if (A.HexLiteral) {
          C.type = "hex";
          for (let L = 0, U = A.HexLiteral.length; L < U; L++) {
            const V = A.HexLiteral[L];
            C.values.push(V.image);
          }
        }
        if (A.TrueLiteral) {
          C.type = "boolean";
          for (let L = 0, U = A.TrueLiteral.length; L < U; L++)
            A.TrueLiteral[L].image === "TRUE" && C.values.push(!0);
        }
        if (A.FalseLiteral) {
          C.type = "boolean";
          for (let L = 0, U = A.FalseLiteral.length; L < U; L++)
            A.FalseLiteral[L].image === "FALSE" && C.values.push(!1);
        }
        return A.NullLiteral && (C.type = "null", A.NullLiteral.forEach(function() {
          C.values.push(null);
        })), C;
      }
      return new g();
    }
    function E(I) {
      const g = I.nodes, v = new Lt();
      for (let _ = 0, A = g.length; _ < A; _++) {
        const C = g[_];
        o(C);
      }
      for (let _ = 0, A = g.length; _ < A; _++) {
        const C = g[_], L = t(C);
        L instanceof st && v.add(L), C.name === "WorldInfo" && (v.userData.worldInfo = L);
      }
      return v;
    }
    function o(I) {
      I.DEF && (T[I.DEF] = I);
      const g = I.fields;
      for (let v = 0, _ = g.length; v < _; v++) {
        const A = g[v];
        if (A.type === "node") {
          const C = A.values;
          for (let L = 0, U = C.length; L < U; L++)
            o(C[L]);
        }
      }
    }
    function t(I) {
      return I.USE ? q(I.USE) : (I.build !== void 0 || (I.build = l(I)), I.build);
    }
    function l(I) {
      const g = I.name;
      let v;
      switch (g) {
        case "Anchor":
        case "Group":
        case "Transform":
        case "Collision":
          v = s(I);
          break;
        case "Background":
          v = R(I);
          break;
        case "Shape":
          v = f(I);
          break;
        case "Appearance":
          v = y(I);
          break;
        case "Material":
          v = p(I);
          break;
        case "ImageTexture":
          v = d(I);
          break;
        case "PixelTexture":
          v = a(I);
          break;
        case "TextureTransform":
          v = c(I);
          break;
        case "IndexedFaceSet":
          v = w(I);
          break;
        case "IndexedLineSet":
          v = H(I);
          break;
        case "PointSet":
          v = k(I);
          break;
        case "Box":
          v = G(I);
          break;
        case "Cone":
          v = x(I);
          break;
        case "Cylinder":
          v = N(I);
          break;
        case "Sphere":
          v = b(I);
          break;
        case "ElevationGrid":
          v = S(I);
          break;
        case "Extrusion":
          v = Y(I);
          break;
        case "Color":
        case "Coordinate":
        case "Normal":
        case "TextureCoordinate":
          v = P(I);
          break;
        case "WorldInfo":
          v = F(I);
          break;
        case "Billboard":
        case "Inline":
        case "LOD":
        case "Switch":
        case "AudioClip":
        case "DirectionalLight":
        case "PointLight":
        case "Script":
        case "Sound":
        case "SpotLight":
        case "CylinderSensor":
        case "PlaneSensor":
        case "ProximitySensor":
        case "SphereSensor":
        case "TimeSensor":
        case "TouchSensor":
        case "VisibilitySensor":
        case "Text":
        case "FontStyle":
        case "MovieTexture":
        case "ColorInterpolator":
        case "CoordinateInterpolator":
        case "NormalInterpolator":
        case "OrientationInterpolator":
        case "PositionInterpolator":
        case "ScalarInterpolator":
        case "Fog":
        case "NavigationInfo":
        case "Viewpoint":
          break;
        default:
          console.warn("THREE.VRMLLoader: Unknown node:", g);
          break;
      }
      return v !== void 0 && I.DEF !== void 0 && v.hasOwnProperty("name") === !0 && (v.name = I.DEF), v;
    }
    function s(I) {
      const g = new dt(), v = I.fields;
      for (let _ = 0, A = v.length; _ < A; _++) {
        const C = v[_], L = C.name, U = C.values;
        switch (L) {
          case "bboxCenter":
            break;
          case "bboxSize":
            break;
          case "center":
            break;
          case "children":
            W(U, g);
            break;
          case "description":
            break;
          case "collide":
            break;
          case "parameter":
            break;
          case "rotation":
            const V = new De(U[0], U[1], U[2]), Z = U[3];
            g.quaternion.setFromAxisAngle(V, Z);
            break;
          case "scale":
            g.scale.set(U[0], U[1], U[2]);
            break;
          case "scaleOrientation":
            break;
          case "translation":
            g.position.set(U[0], U[1], U[2]);
            break;
          case "proxy":
            break;
          case "url":
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", L);
            break;
        }
      }
      return g;
    }
    function R(I) {
      const g = new dt();
      let v, _, A, C;
      const L = I.fields;
      for (let V = 0, Z = L.length; V < Z; V++) {
        const te = L[V], me = te.name, Oe = te.values;
        switch (me) {
          case "groundAngle":
            v = Oe;
            break;
          case "groundColor":
            _ = Oe;
            break;
          case "backUrl":
            break;
          case "bottomUrl":
            break;
          case "frontUrl":
            break;
          case "leftUrl":
            break;
          case "rightUrl":
            break;
          case "topUrl":
            break;
          case "skyAngle":
            A = Oe;
            break;
          case "skyColor":
            C = Oe;
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", me);
            break;
        }
      }
      const U = 1e4;
      if (C) {
        const V = new ct(U, 32, 16), Z = new $e({ fog: !1, side: mt, depthWrite: !1, depthTest: !1 });
        C.length > 3 ? (K(V, U, A, M(C), !0), Z.vertexColors = !0) : Z.color.setRGB(C[0], C[1], C[2]);
        const te = new ut(V, Z);
        g.add(te);
      }
      if (_ && _.length > 0) {
        const V = new ct(U, 32, 16, 0, 2 * Math.PI, 0.5 * Math.PI, 1.5 * Math.PI), Z = new $e({ fog: !1, side: mt, vertexColors: !0, depthWrite: !1, depthTest: !1 });
        K(V, U, v, M(_), !1);
        const te = new ut(V, Z);
        g.add(te);
      }
      return g.renderOrder = -1 / 0, g;
    }
    function f(I) {
      const g = I.fields;
      let v = new $e({ color: 0 }), _;
      for (let C = 0, L = g.length; C < L; C++) {
        const U = g[C], V = U.name, Z = U.values;
        switch (V) {
          case "appearance":
            Z[0] !== null && (v = t(Z[0]));
            break;
          case "geometry":
            Z[0] !== null && (_ = t(Z[0]));
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", V);
            break;
        }
      }
      let A;
      if (_ && _.attributes.position) {
        const C = _._type;
        if (C === "points") {
          const L = new St({ color: 16777215 });
          _.attributes.color !== void 0 ? L.vertexColors = !0 : v.isMeshPhongMaterial && L.color.copy(v.emissive), A = new Pt(_, L);
        } else if (C === "line") {
          const L = new bt({ color: 16777215 });
          _.attributes.color !== void 0 ? L.vertexColors = !0 : v.isMeshPhongMaterial && L.color.copy(v.emissive), A = new Ct(_, L);
        } else
          _._solid !== void 0 && (v.side = _._solid ? xt : Mt), _.attributes.color !== void 0 && (v.vertexColors = !0), A = new ut(_, v);
      } else
        A = new st(), A.visible = !1;
      return A;
    }
    function y(I) {
      let g = new wt(), v;
      const _ = I.fields;
      for (let A = 0, C = _.length; A < C; A++) {
        const L = _[A], U = L.name, V = L.values;
        switch (U) {
          case "material":
            if (V[0] !== null) {
              const te = t(V[0]);
              te.diffuseColor && g.color.copy(te.diffuseColor), te.emissiveColor && g.emissive.copy(te.emissiveColor), te.shininess && (g.shininess = te.shininess), te.specularColor && g.specular.copy(te.specularColor), te.transparency && (g.opacity = 1 - te.transparency), te.transparency > 0 && (g.transparent = !0);
            } else
              g = new $e({ color: 0 });
            break;
          case "texture":
            const Z = V[0];
            Z !== null && (Z.name === "ImageTexture" || Z.name === "PixelTexture") && (g.map = t(Z));
            break;
          case "textureTransform":
            V[0] !== null && (v = t(V[0]));
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", U);
            break;
        }
      }
      if (g.map) {
        if (g.map.__type) {
          switch (g.map.__type) {
            case Ge.INTENSITY_ALPHA:
              g.opacity = 1;
              break;
            case Ge.RGB:
              g.color.set(16777215);
              break;
            case Ge.RGBA:
              g.color.set(16777215), g.opacity = 1;
              break;
          }
          delete g.map.__type;
        }
        v && (g.map.center.copy(v.center), g.map.rotation = v.rotation, g.map.repeat.copy(v.scale), g.map.offset.copy(v.translation));
      }
      return g;
    }
    function p(I) {
      const g = {}, v = I.fields;
      for (let _ = 0, A = v.length; _ < A; _++) {
        const C = v[_], L = C.name, U = C.values;
        switch (L) {
          case "ambientIntensity":
            break;
          case "diffuseColor":
            g.diffuseColor = new He(U[0], U[1], U[2]);
            break;
          case "emissiveColor":
            g.emissiveColor = new He(U[0], U[1], U[2]);
            break;
          case "shininess":
            g.shininess = U[0];
            break;
          case "specularColor":
            g.emissiveColor = new He(U[0], U[1], U[2]);
            break;
          case "transparency":
            g.transparency = U[0];
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", L);
            break;
        }
      }
      return g;
    }
    function n(I, g, v) {
      let _;
      switch (g) {
        case Ge.INTENSITY:
          _ = parseInt(I), v.r = _, v.g = _, v.b = _, v.a = 1;
          break;
        case Ge.INTENSITY_ALPHA:
          _ = parseInt("0x" + I.substring(2, 4)), v.r = _, v.g = _, v.b = _, v.a = parseInt("0x" + I.substring(4, 6));
          break;
        case Ge.RGB:
          v.r = parseInt("0x" + I.substring(2, 4)), v.g = parseInt("0x" + I.substring(4, 6)), v.b = parseInt("0x" + I.substring(6, 8)), v.a = 1;
          break;
        case Ge.RGBA:
          v.r = parseInt("0x" + I.substring(2, 4)), v.g = parseInt("0x" + I.substring(4, 6)), v.b = parseInt("0x" + I.substring(6, 8)), v.a = parseInt("0x" + I.substring(8, 10));
          break;
      }
    }
    function i(I) {
      let g;
      switch (I) {
        case 1:
          g = Ge.INTENSITY;
          break;
        case 2:
          g = Ge.INTENSITY_ALPHA;
          break;
        case 3:
          g = Ge.RGB;
          break;
        case 4:
          g = Ge.RGBA;
          break;
      }
      return g;
    }
    function a(I) {
      let g, v = Je, _ = Je;
      const A = I.fields;
      for (let C = 0, L = A.length; C < L; C++) {
        const U = A[C], V = U.name, Z = U.values;
        switch (V) {
          case "image":
            const te = Z[0], me = Z[1], Oe = Z[2], be = i(Oe), Ie = new Uint8Array(4 * te * me), ye = { r: 0, g: 0, b: 0, a: 0 };
            for (let Te = 3, Ne = 0, Le = Z.length; Te < Le; Te++, Ne++) {
              n(Z[Te], be, ye);
              const Re = Ne * 4;
              Ie[Re + 0] = ye.r, Ie[Re + 1] = ye.g, Ie[Re + 2] = ye.b, Ie[Re + 3] = ye.a;
            }
            g = new Ft(Ie, te, me), g.needsUpdate = !0, g.__type = be;
            break;
          case "repeatS":
            Z[0] === !1 && (v = et);
            break;
          case "repeatT":
            Z[0] === !1 && (_ = et);
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", V);
            break;
        }
      }
      return g && (g.wrapS = v, g.wrapT = _), g;
    }
    function d(I) {
      let g, v = Je, _ = Je;
      const A = I.fields;
      for (let C = 0, L = A.length; C < L; C++) {
        const U = A[C], V = U.name, Z = U.values;
        switch (V) {
          case "url":
            const te = Z[0];
            te && (g = j.load(te));
            break;
          case "repeatS":
            Z[0] === !1 && (v = et);
            break;
          case "repeatT":
            Z[0] === !1 && (_ = et);
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", V);
            break;
        }
      }
      return g && (g.wrapS = v, g.wrapT = _), g;
    }
    function c(I) {
      const g = {
        center: new ze(),
        rotation: new ze(),
        scale: new ze(),
        translation: new ze()
      }, v = I.fields;
      for (let _ = 0, A = v.length; _ < A; _++) {
        const C = v[_], L = C.name, U = C.values;
        switch (L) {
          case "center":
            g.center.set(U[0], U[1]);
            break;
          case "rotation":
            g.rotation = U[0];
            break;
          case "scale":
            g.scale.set(U[0], U[1]);
            break;
          case "translation":
            g.translation.set(U[0], U[1]);
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", L);
            break;
        }
      }
      return g;
    }
    function P(I) {
      return I.fields[0].values;
    }
    function F(I) {
      const g = {}, v = I.fields;
      for (let _ = 0, A = v.length; _ < A; _++) {
        const C = v[_], L = C.name, U = C.values;
        switch (L) {
          case "title":
            g.title = U[0];
            break;
          case "info":
            g.info = U;
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", L);
            break;
        }
      }
      return g;
    }
    function w(I) {
      let g, v, _, A, C = !0, L = !0, U = 0, V, Z, te, me, Oe = !0, be = !0;
      const Ie = I.fields;
      for (let ke = 0, we = Ie.length; ke < we; ke++) {
        const Fe = Ie[ke], ge = Fe.name, ce = Fe.values;
        switch (ge) {
          case "color":
            const ue = ce[0];
            ue !== null && (g = t(ue));
            break;
          case "coord":
            const oe = ce[0];
            oe !== null && (v = t(oe));
            break;
          case "normal":
            const le = ce[0];
            le !== null && (_ = t(le));
            break;
          case "texCoord":
            const he = ce[0];
            he !== null && (A = t(he));
            break;
          case "ccw":
            C = ce[0];
            break;
          case "colorIndex":
            V = ce;
            break;
          case "colorPerVertex":
            Oe = ce[0];
            break;
          case "convex":
            break;
          case "coordIndex":
            Z = ce;
            break;
          case "creaseAngle":
            U = ce[0];
            break;
          case "normalIndex":
            te = ce;
            break;
          case "normalPerVertex":
            be = ce[0];
            break;
          case "solid":
            L = ce[0];
            break;
          case "texCoordIndex":
            me = ce;
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", ge);
            break;
        }
      }
      if (Z === void 0)
        return console.warn("THREE.VRMLLoader: Missing coordIndex."), new Ye();
      const ye = $(Z, C);
      let Te, Ne, Le;
      if (g)
        if (Oe === !0)
          if (V && V.length > 0) {
            const ke = $(V, C);
            Te = Q(ye, ke, g, 3);
          } else
            Te = de(ye, new xe(g, 3));
        else if (V && V.length > 0) {
          const ke = ae(g, V), we = ee(ke, Z);
          Te = re(ye, we);
        } else {
          const ke = ee(g, Z);
          Te = re(ye, ke);
        }
      if (_)
        if (be === !0)
          if (te && te.length > 0) {
            const ke = $(te, C);
            Ne = Q(ye, ke, _, 3);
          } else
            Ne = de(ye, new xe(_, 3));
        else if (te && te.length > 0) {
          const ke = ae(_, te), we = ee(ke, Z);
          Ne = re(ye, we);
        } else {
          const ke = ee(_, Z);
          Ne = re(ye, ke);
        }
      else
        Ne = Ve(ye, v, U);
      if (A)
        if (me && me.length > 0) {
          const ke = $(me, C);
          Le = Q(ye, ke, A, 2);
        } else
          Le = de(ye, new xe(A, 2));
      const Re = new Ye(), Pe = de(ye, new xe(v, 3));
      return Re.setAttribute("position", Pe), Re.setAttribute("normal", Ne), Te && Re.setAttribute("color", Te), Le && Re.setAttribute("uv", Le), Re._solid = L, Re._type = "mesh", Re;
    }
    function H(I) {
      let g, v, _, A, C = !0;
      const L = I.fields;
      for (let me = 0, Oe = L.length; me < Oe; me++) {
        const be = L[me], Ie = be.name, ye = be.values;
        switch (Ie) {
          case "color":
            const Te = ye[0];
            Te !== null && (g = t(Te));
            break;
          case "coord":
            const Ne = ye[0];
            Ne !== null && (v = t(Ne));
            break;
          case "colorIndex":
            _ = ye;
            break;
          case "colorPerVertex":
            C = ye[0];
            break;
          case "coordIndex":
            A = ye;
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", Ie);
            break;
        }
      }
      let U;
      const V = ie(A);
      if (g)
        if (C === !0)
          if (_.length > 0) {
            const me = ie(_);
            U = Q(V, me, g, 3);
          } else
            U = de(V, new xe(g, 3));
        else if (_.length > 0) {
          const me = ae(g, _), Oe = se(me, A);
          U = ve(V, Oe);
        } else {
          const me = se(g, A);
          U = ve(V, me);
        }
      const Z = new Ye(), te = de(V, new xe(v, 3));
      return Z.setAttribute("position", te), U && Z.setAttribute("color", U), Z._type = "line", Z;
    }
    function k(I) {
      let g, v;
      const _ = I.fields;
      for (let C = 0, L = _.length; C < L; C++) {
        const U = _[C], V = U.name, Z = U.values;
        switch (V) {
          case "color":
            const te = Z[0];
            te !== null && (g = t(te));
            break;
          case "coord":
            const me = Z[0];
            me !== null && (v = t(me));
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", V);
            break;
        }
      }
      const A = new Ye();
      return A.setAttribute("position", new xe(v, 3)), g && A.setAttribute("color", new xe(g, 3)), A._type = "points", A;
    }
    function G(I) {
      const g = new De(2, 2, 2), v = I.fields;
      for (let A = 0, C = v.length; A < C; A++) {
        const L = v[A], U = L.name, V = L.values;
        switch (U) {
          case "size":
            g.x = V[0], g.y = V[1], g.z = V[2];
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", U);
            break;
        }
      }
      return new Dt(g.x, g.y, g.z);
    }
    function x(I) {
      let g = 1, v = 2, _ = !1;
      const A = I.fields;
      for (let L = 0, U = A.length; L < U; L++) {
        const V = A[L], Z = V.name, te = V.values;
        switch (Z) {
          case "bottom":
            _ = !te[0];
            break;
          case "bottomRadius":
            g = te[0];
            break;
          case "height":
            v = te[0];
            break;
          case "side":
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", Z);
            break;
        }
      }
      return new Ut(g, v, 16, 1, _);
    }
    function N(I) {
      let g = 1, v = 2;
      const _ = I.fields;
      for (let C = 0, L = _.length; C < L; C++) {
        const U = _[C], V = U.name, Z = U.values;
        switch (V) {
          case "bottom":
            break;
          case "radius":
            g = Z[0];
            break;
          case "height":
            v = Z[0];
            break;
          case "side":
            break;
          case "top":
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", V);
            break;
        }
      }
      return new Vt(g, g, v, 16, 1);
    }
    function b(I) {
      let g = 1;
      const v = I.fields;
      for (let A = 0, C = v.length; A < C; A++) {
        const L = v[A], U = L.name, V = L.values;
        switch (U) {
          case "radius":
            g = V[0];
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", U);
            break;
        }
      }
      return new ct(g, 16, 16);
    }
    function S(I) {
      let g, v, _, A, C = !0, L = !0, U = !0, V = !0, Z = 0, te = 2, me = 2, Oe = 1, be = 1;
      const Ie = I.fields;
      for (let ce = 0, ue = Ie.length; ce < ue; ce++) {
        const oe = Ie[ce], le = oe.name, he = oe.values;
        switch (le) {
          case "color":
            const Se = he[0];
            Se !== null && (g = t(Se));
            break;
          case "normal":
            const je = he[0];
            je !== null && (v = t(je));
            break;
          case "texCoord":
            const We = he[0];
            We !== null && (_ = t(We));
            break;
          case "height":
            A = he;
            break;
          case "ccw":
            V = he[0];
            break;
          case "colorPerVertex":
            C = he[0];
            break;
          case "creaseAngle":
            Z = he[0];
            break;
          case "normalPerVertex":
            L = he[0];
            break;
          case "solid":
            U = he[0];
            break;
          case "xDimension":
            te = he[0];
            break;
          case "xSpacing":
            Oe = he[0];
            break;
          case "zDimension":
            me = he[0];
            break;
          case "zSpacing":
            be = he[0];
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", le);
            break;
        }
      }
      const ye = [], Te = [], Ne = [], Le = [];
      for (let ce = 0; ce < me; ce++)
        for (let ue = 0; ue < te; ue++) {
          const oe = ce * te + ue, le = Oe * ce, he = A[oe], Se = be * ue;
          if (ye.push(le, he, Se), g && C === !0) {
            const je = g[oe * 3 + 0], We = g[oe * 3 + 1], at = g[oe * 3 + 2];
            Ne.push(je, We, at);
          }
          if (v && L === !0) {
            const je = v[oe * 3 + 0], We = v[oe * 3 + 1], at = v[oe * 3 + 2];
            Te.push(je, We, at);
          }
          if (_) {
            const je = _[oe * 2 + 0], We = _[oe * 2 + 1];
            Le.push(je, We);
          } else
            Le.push(ce / (te - 1), ue / (me - 1));
        }
      const Re = [];
      for (let ce = 0; ce < te - 1; ce++)
        for (let ue = 0; ue < me - 1; ue++) {
          const oe = ce + ue * te, le = ce + (ue + 1) * te, he = ce + 1 + (ue + 1) * te, Se = ce + 1 + ue * te;
          V === !0 ? (Re.push(oe, he, le), Re.push(he, oe, Se)) : (Re.push(oe, le, he), Re.push(he, Se, oe));
        }
      const Pe = de(Re, new xe(ye, 3)), ke = de(Re, new xe(Le, 2));
      let we, Fe;
      if (g)
        if (C === !1) {
          for (let ce = 0; ce < te - 1; ce++)
            for (let ue = 0; ue < me - 1; ue++) {
              const oe = ce + ue * (te - 1), le = g[oe * 3 + 0], he = g[oe * 3 + 1], Se = g[oe * 3 + 2];
              Ne.push(le, he, Se), Ne.push(le, he, Se), Ne.push(le, he, Se), Ne.push(le, he, Se), Ne.push(le, he, Se), Ne.push(le, he, Se);
            }
          we = new xe(Ne, 3);
        } else
          we = de(Re, new xe(Ne, 3));
      if (v)
        if (L === !1) {
          for (let ce = 0; ce < te - 1; ce++)
            for (let ue = 0; ue < me - 1; ue++) {
              const oe = ce + ue * (te - 1), le = v[oe * 3 + 0], he = v[oe * 3 + 1], Se = v[oe * 3 + 2];
              Te.push(le, he, Se), Te.push(le, he, Se), Te.push(le, he, Se), Te.push(le, he, Se), Te.push(le, he, Se), Te.push(le, he, Se);
            }
          Fe = new xe(Te, 3);
        } else
          Fe = de(Re, new xe(Te, 3));
      else
        Fe = Ve(Re, ye, Z);
      const ge = new Ye();
      return ge.setAttribute("position", Pe), ge.setAttribute("normal", Fe), ge.setAttribute("uv", ke), we && ge.setAttribute("color", we), ge._solid = U, ge._type = "mesh", ge;
    }
    function Y(I) {
      let g = [1, 1, 1, -1, -1, -1, -1, 1, 1, 1], v = [0, 0, 0, 0, 1, 0], _, A, C = !0, L = !0, U = 0, V = !0, Z = !0;
      const te = I.fields;
      for (let ge = 0, ce = te.length; ge < ce; ge++) {
        const ue = te[ge], oe = ue.name, le = ue.values;
        switch (oe) {
          case "beginCap":
            C = le[0];
            break;
          case "ccw":
            L = le[0];
            break;
          case "convex":
            break;
          case "creaseAngle":
            U = le[0];
            break;
          case "crossSection":
            g = le;
            break;
          case "endCap":
            V = le[0];
            break;
          case "orientation":
            A = le;
            break;
          case "scale":
            _ = le;
            break;
          case "solid":
            Z = le[0];
            break;
          case "spine":
            v = le;
            break;
          default:
            console.warn("THREE.VRMLLoader: Unknown field:", oe);
            break;
        }
      }
      const me = g[0] === g[g.length - 2] && g[1] === g[g.length - 1], Oe = [], be = new De(), Ie = new De(), ye = new De(), Te = new De(), Ne = new jt();
      for (let ge = 0, ce = 0, ue = 0, oe = v.length; ge < oe; ge += 3, ce += 2, ue += 4) {
        be.fromArray(v, ge), Ie.x = _ ? _[ce + 0] : 1, Ie.y = 1, Ie.z = _ ? _[ce + 1] : 1, ye.x = A ? A[ue + 0] : 0, ye.y = A ? A[ue + 1] : 0, ye.z = A ? A[ue + 2] : 1;
        const le = A ? A[ue + 3] : 0;
        for (let he = 0, Se = g.length; he < Se; he += 2)
          Te.x = g[he + 0], Te.y = 0, Te.z = g[he + 1], Te.multiply(Ie), Ne.setFromAxisAngle(ye, le), Te.applyQuaternion(Ne), Te.add(be), Oe.push(Te.x, Te.y, Te.z);
      }
      const Le = [], Re = v.length / 3, Pe = g.length / 2;
      for (let ge = 0; ge < Re - 1; ge++)
        for (let ce = 0; ce < Pe - 1; ce++) {
          const ue = ce + ge * Pe;
          let oe = ce + 1 + ge * Pe;
          const le = ce + (ge + 1) * Pe;
          let he = ce + 1 + (ge + 1) * Pe;
          ce === Pe - 2 && me === !0 && (oe = ge * Pe, he = (ge + 1) * Pe), L === !0 ? (Le.push(ue, oe, le), Le.push(le, oe, he)) : (Le.push(ue, le, oe), Le.push(le, he, oe));
        }
      if (C === !0 || V === !0) {
        const ge = [];
        for (let oe = 0, le = g.length; oe < le; oe += 2)
          ge.push(new ze(g[oe], g[oe + 1]));
        const ce = Bt.triangulateShape(ge, []), ue = [];
        for (let oe = 0, le = ce.length; oe < le; oe++) {
          const he = ce[oe];
          ue.push(he[0], he[1], he[2]);
        }
        if (C === !0)
          for (let oe = 0, le = ue.length; oe < le; oe += 3)
            L === !0 ? Le.push(ue[oe + 0], ue[oe + 1], ue[oe + 2]) : Le.push(ue[oe + 0], ue[oe + 2], ue[oe + 1]);
        if (V === !0) {
          const oe = Pe * (Re - 1);
          for (let le = 0, he = ue.length; le < he; le += 3)
            L === !0 ? Le.push(oe + ue[le + 0], oe + ue[le + 2], oe + ue[le + 1]) : Le.push(oe + ue[le + 0], oe + ue[le + 1], oe + ue[le + 2]);
        }
      }
      const ke = de(Le, new xe(Oe, 3)), we = Ve(Le, Oe, U), Fe = new Ye();
      return Fe.setAttribute("position", ke), Fe.setAttribute("normal", we), Fe._solid = Z, Fe._type = "mesh", Fe;
    }
    function q(I) {
      const g = T[I], v = t(g);
      return v.isObject3D || v.isMaterial ? v.clone() : v;
    }
    function W(I, g) {
      for (let v = 0, _ = I.length; v < _; v++) {
        const A = t(I[v]);
        A instanceof st && g.add(A);
      }
    }
    function $(I, g) {
      const v = [];
      let _ = 0;
      for (let A = 0, C = I.length; A < C; A++) {
        const L = I[_], U = I[A + (g ? 1 : 2)], V = I[A + (g ? 2 : 1)];
        v.push(L, U, V), (I[A + 3] === -1 || A + 3 >= C) && (A += 3, _ = A + 1);
      }
      return v;
    }
    function ee(I, g) {
      const v = [];
      let _ = 0;
      for (let A = 0, C = g.length; A < C; A++) {
        const L = _ * 3, U = I[L], V = I[L + 1], Z = I[L + 2];
        v.push(U, V, Z), (g[A + 3] === -1 || A + 3 >= C) && (A += 3, _++);
      }
      return v;
    }
    function ae(I, g) {
      const v = [];
      for (let _ = 0, A = g.length; _ < A; _++) {
        const L = g[_] * 3, U = I[L], V = I[L + 1], Z = I[L + 2];
        v.push(U, V, Z);
      }
      return v;
    }
    function ie(I) {
      const g = [];
      for (let v = 0, _ = I.length; v < _; v++) {
        const A = I[v], C = I[v + 1];
        g.push(A, C), (I[v + 2] === -1 || v + 2 >= _) && (v += 2);
      }
      return g;
    }
    function se(I, g) {
      const v = [];
      let _ = 0;
      for (let A = 0, C = g.length; A < C; A++) {
        const L = _ * 3, U = I[L], V = I[L + 1], Z = I[L + 2];
        v.push(U, V, Z), (g[A + 2] === -1 || A + 2 >= C) && (A += 2, _++);
      }
      return v;
    }
    const ne = new De(), pe = new De(), D = new De(), B = new ze(), z = new ze(), X = new ze();
    function Q(I, g, v, _) {
      const A = [];
      for (let C = 0, L = I.length; C < L; C += 3) {
        const U = g[C], V = g[C + 1], Z = g[C + 2];
        _ === 2 ? (B.fromArray(v, U * _), z.fromArray(v, V * _), X.fromArray(v, Z * _), A.push(B.x, B.y), A.push(z.x, z.y), A.push(X.x, X.y)) : (ne.fromArray(v, U * _), pe.fromArray(v, V * _), D.fromArray(v, Z * _), A.push(ne.x, ne.y, ne.z), A.push(pe.x, pe.y, pe.z), A.push(D.x, D.y, D.z));
      }
      return new xe(A, _);
    }
    function re(I, g) {
      const v = [];
      for (let _ = 0, A = 0, C = I.length; _ < C; _ += 3, A++)
        ne.fromArray(g, A * 3), v.push(ne.x, ne.y, ne.z), v.push(ne.x, ne.y, ne.z), v.push(ne.x, ne.y, ne.z);
      return new xe(v, 3);
    }
    function ve(I, g) {
      const v = [];
      for (let _ = 0, A = 0, C = I.length; _ < C; _ += 2, A++)
        ne.fromArray(g, A * 3), v.push(ne.x, ne.y, ne.z), v.push(ne.x, ne.y, ne.z);
      return new xe(v, 3);
    }
    function de(I, g) {
      const v = g.array, _ = g.itemSize, A = new v.constructor(I.length * _);
      let C = 0, L = 0;
      for (let U = 0, V = I.length; U < V; U++) {
        C = I[U] * _;
        for (let Z = 0; Z < _; Z++)
          A[L++] = v[C++];
      }
      return new xe(A, _);
    }
    const _e = new De(), Me = new De();
    function Ve(I, g, v) {
      const _ = [], A = {};
      for (let L = 0, U = I.length; L < U; L += 3) {
        const V = I[L], Z = I[L + 1], te = I[L + 2], me = new fn(V, Z, te);
        ne.fromArray(g, V * 3), pe.fromArray(g, Z * 3), D.fromArray(g, te * 3), Me.subVectors(D, pe), _e.subVectors(ne, pe), Me.cross(_e), Me.normalize(), me.normal.copy(Me), A[V] === void 0 && (A[V] = []), A[Z] === void 0 && (A[Z] = []), A[te] === void 0 && (A[te] = []), A[V].push(me.normal), A[Z].push(me.normal), A[te].push(me.normal), _.push(me);
      }
      const C = [];
      for (let L = 0, U = _.length; L < U; L++) {
        const V = _[L], Z = Ce(A[V.a], V.normal, v), te = Ce(A[V.b], V.normal, v), me = Ce(A[V.c], V.normal, v);
        ne.fromArray(g, V.a * 3), pe.fromArray(g, V.b * 3), D.fromArray(g, V.c * 3), C.push(Z.x, Z.y, Z.z), C.push(te.x, te.y, te.z), C.push(me.x, me.y, me.z);
      }
      return new xe(C, 3);
    }
    function Ce(I, g, v) {
      const _ = new De();
      if (v === 0)
        _.copy(g);
      else
        for (let A = 0, C = I.length; A < C; A++)
          I[A].angleTo(g) < v && _.add(I[A]);
      return _.normalize();
    }
    function M(I) {
      const g = [];
      for (let v = 0, _ = I.length; v < _; v += 3)
        g.push(new He(I[v], I[v + 1], I[v + 2]));
      return g;
    }
    function K(I, g, v, _, A) {
      const C = [], L = A === !0 ? 0 : Math.PI;
      for (let Oe = 0, be = _.length; Oe < be; Oe++) {
        let Ie = Oe === 0 ? 0 : v[Oe - 1];
        Ie = A === !0 ? Ie : L - Ie;
        const ye = new De();
        ye.setFromSphericalCoords(g, Ie, 0), C.push(ye);
      }
      const U = I.index, V = I.attributes.position, Z = new Gt(new Float32Array(I.attributes.position.count * 3), 3), te = new De(), me = new He();
      for (let Oe = 0; Oe < U.count; Oe++) {
        const be = U.getX(Oe);
        te.fromBufferAttribute(V, be);
        let Ie, ye, Te = 1;
        for (let Re = 1; Re < C.length; Re++) {
          Ie = Re - 1, ye = Re;
          const Pe = C[Ie], ke = C[ye];
          if (A === !0) {
            if (te.y <= Pe.y && te.y > ke.y) {
              Te = Math.abs(Pe.y - te.y) / Math.abs(Pe.y - ke.y);
              break;
            }
          } else if (te.y >= Pe.y && te.y < ke.y) {
            Te = Math.abs(Pe.y - te.y) / Math.abs(Pe.y - ke.y);
            break;
          }
        }
        const Ne = _[Ie], Le = _[ye];
        me.copy(Ne).lerp(Le, Te), Z.setXYZ(be, me.r, me.g, me.b);
      }
      I.setAttribute("color", Z);
    }
    const j = new kt(this.manager);
    if (j.setPath(this.resourcePath || r).setCrossOrigin(this.crossOrigin), h.indexOf("#VRML V2.0") === -1)
      throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");
    const J = m(h);
    return E(J);
  }
}
class cn {
  constructor(h) {
    this.lexer = new Xe.Lexer(h);
  }
  lex(h) {
    const r = this.lexer.tokenize(h);
    if (r.errors.length > 0)
      throw console.error(r.errors), Error("THREE.VRMLLexer: Lexing errors detected.");
    return r;
  }
}
const un = Xe.CstParser;
class ln extends un {
  constructor(h) {
    super(h);
    const r = this, T = h.Version, m = h.LCurly, O = h.RCurly, u = h.LSquare, E = h.RSquare, o = h.Identifier, t = h.RouteIdentifier, l = h.StringLiteral, s = h.HexLiteral, R = h.NumberLiteral, f = h.TrueLiteral, y = h.FalseLiteral, p = h.NullLiteral, n = h.DEF, i = h.USE, a = h.ROUTE, d = h.TO, c = h.NodeName;
    r.RULE("vrml", function() {
      r.SUBRULE(r.version), r.AT_LEAST_ONE(function() {
        r.SUBRULE(r.node);
      }), r.MANY(function() {
        r.SUBRULE(r.route);
      });
    }), r.RULE("version", function() {
      r.CONSUME(T);
    }), r.RULE("node", function() {
      r.OPTION(function() {
        r.SUBRULE(r.def);
      }), r.CONSUME(c), r.CONSUME(m), r.MANY(function() {
        r.SUBRULE(r.field);
      }), r.CONSUME(O);
    }), r.RULE("field", function() {
      r.CONSUME(o), r.OR2([
        { ALT: function() {
          r.SUBRULE(r.singleFieldValue);
        } },
        { ALT: function() {
          r.SUBRULE(r.multiFieldValue);
        } }
      ]);
    }), r.RULE("def", function() {
      r.CONSUME(n), r.OR([
        { ALT: function() {
          r.CONSUME(o);
        } },
        { ALT: function() {
          r.CONSUME(c);
        } }
      ]);
    }), r.RULE("use", function() {
      r.CONSUME(i), r.OR([
        { ALT: function() {
          r.CONSUME(o);
        } },
        { ALT: function() {
          r.CONSUME(c);
        } }
      ]);
    }), r.RULE("singleFieldValue", function() {
      r.AT_LEAST_ONE(function() {
        r.OR([
          { ALT: function() {
            r.SUBRULE(r.node);
          } },
          { ALT: function() {
            r.SUBRULE(r.use);
          } },
          { ALT: function() {
            r.CONSUME(l);
          } },
          { ALT: function() {
            r.CONSUME(s);
          } },
          { ALT: function() {
            r.CONSUME(R);
          } },
          { ALT: function() {
            r.CONSUME(f);
          } },
          { ALT: function() {
            r.CONSUME(y);
          } },
          { ALT: function() {
            r.CONSUME(p);
          } }
        ]);
      });
    }), r.RULE("multiFieldValue", function() {
      r.CONSUME(u), r.MANY(function() {
        r.OR([
          { ALT: function() {
            r.SUBRULE(r.node);
          } },
          { ALT: function() {
            r.SUBRULE(r.use);
          } },
          { ALT: function() {
            r.CONSUME(l);
          } },
          { ALT: function() {
            r.CONSUME(s);
          } },
          { ALT: function() {
            r.CONSUME(R);
          } },
          { ALT: function() {
            r.CONSUME(p);
          } }
        ]);
      }), r.CONSUME(E);
    }), r.RULE("route", function() {
      r.CONSUME(a), r.CONSUME(t), r.CONSUME(d), r.CONSUME2(t);
    }), this.performSelfAnalysis();
  }
}
class fn {
  constructor(h, r, T) {
    this.a = h, this.b = r, this.c = T, this.normal = new De();
  }
}
const Ge = {
  INTENSITY: 1,
  INTENSITY_ALPHA: 2,
  RGB: 3,
  RGBA: 4
};
export {
  hn as VRMLLoader
};
