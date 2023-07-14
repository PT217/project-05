import { L as p, F as h, p as u, q as n } from "./index-20e94914.mjs";
class F extends p {
  load(o, i, t, s) {
    const r = this, a = new h(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(o, function(e) {
      try {
        i(r.parse(e));
      } catch (l) {
        s ? s(l) : console.error(l), r.manager.itemError(o);
      }
    }, t, s);
  }
  parse(o) {
    const i = o.split(`
`), t = [], s = [];
    for (let a of i) {
      if (a = a.trim(), a.charAt(0) === "#")
        continue;
      const e = a.split(/\s+/);
      e.length === 3 && (t.push(parseFloat(e[0])), t.push(parseFloat(e[1])), t.push(parseFloat(e[2]))), e.length === 6 && (t.push(parseFloat(e[0])), t.push(parseFloat(e[1])), t.push(parseFloat(e[2])), s.push(parseFloat(e[3]) / 255), s.push(parseFloat(e[4]) / 255), s.push(parseFloat(e[5]) / 255));
    }
    const r = new u();
    return r.setAttribute("position", new n(t, 3)), s.length > 0 && r.setAttribute("color", new n(s, 3)), r;
  }
}
export {
  F as XYZLoader
};
