import { L as d, F as p, u as f, ai as i, G as m, aj as u } from "./index-20e94914.mjs";
import { ColladaLoader as l } from "./ColladaLoader-b1a06ed5.mjs";
class h extends d {
  constructor(t) {
    super(t);
  }
  load(t, s, n, r) {
    const e = this, o = new p(e.manager);
    o.setPath(e.path), o.setResponseType("arraybuffer"), o.setRequestHeader(e.requestHeader), o.setWithCredentials(e.withCredentials), o.load(t, function(a) {
      try {
        s(e.parse(a));
      } catch (c) {
        r ? r(c) : console.error(c), e.manager.itemError(t);
      }
    }, n, r);
  }
  parse(t) {
    function s(e) {
      for (const o in r)
        if (o.slice(-e.length) === e)
          return r[o];
    }
    const n = new u();
    n.setURLModifier(function(e) {
      const o = s(e);
      if (o) {
        console.log("Loading", e);
        const a = new Blob([o.buffer], { type: "application/octet-stream" });
        return URL.createObjectURL(a);
      }
      return e;
    });
    const r = f(new Uint8Array(t));
    if (r["doc.kml"]) {
      const o = new DOMParser().parseFromString(i(r["doc.kml"]), "application/xml").querySelector("Placemark Model Link href");
      if (o)
        return new l(n).parse(i(r[o.textContent]));
    } else {
      console.warn("KMZLoader: Missing doc.kml file.");
      for (const e in r)
        if (e.split(".").pop().toLowerCase() === "dae")
          return new l(n).parse(i(r[e]));
    }
    return console.error("KMZLoader: Couldn't find .dae file."), { scene: new m() };
  }
}
export {
  h as KMZLoader
};
