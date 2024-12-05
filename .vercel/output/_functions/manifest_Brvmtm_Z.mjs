import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BZMV10KU.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BeH3Xcyf.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ryanr/Documents/dev/ryanroga/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/validate-turnstile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/validate-turnstile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"validate-turnstile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/validate-turnstile.ts","pathname":"/api/validate-turnstile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function d(){const o=document.getElementById(\"mobile-menu-button\"),a=document.getElementById(\"mobile-menu\"),t=document.querySelector(\".menu-icon\"),n=document.querySelector(\".close-icon\");if(!o||!a||!t||!n)return;const i=e=>{a.classList.toggle(\"hidden\",!e),t.classList.toggle(\"hidden\",e),n.classList.toggle(\"hidden\",!e),o.setAttribute(\"aria-expanded\",e.toString())};o.addEventListener(\"click\",()=>{const e=o.getAttribute(\"aria-expanded\")===\"true\";i(!e)}),a.querySelectorAll(\"a\").forEach(e=>{e.addEventListener(\"click\",()=>i(!1))}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&o.getAttribute(\"aria-expanded\")===\"true\"&&i(!1)})}d();window.onloadTurnstileCallback=function(){window.turnstile.render(\"#turnstile-container\",{sitekey:\"0x4AAAAAAA1jHJu-9QywpvDf\",callback:async function(o){try{const t=await(await fetch(\"/api/validate-turnstile\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({token:o})})).json();if(t.success){const n=document.getElementById(\"contact-info\"),i=document.getElementById(\"pre-verification-message\");if(!n)return;i&&i.remove();const e=n.querySelector('a[aria-label=\"Send email\"]');e&&(e.href=`mailto:${t.data.email}`,e.textContent=t.data.email);const c=n.querySelector('a[aria-label=\"LinkedIn profile\"]');if(c){c.href=t.data.linkedin;const r=c.querySelector(\"#linkedin-username\");if(r){const s=t.data.linkedin.split(\"/\").pop();r.textContent=`(${s})`}}const l=n.querySelector('a[aria-label=\"GitHub profile\"]');if(l){l.href=t.data.github;const r=l.querySelector(\"#github-username\");if(r){const s=t.data.github.split(\"/\").pop();r.textContent=`(${s})`}}n&&(n.classList.remove(\"hidden\"),i&&i.classList.add(\"hidden\"))}}catch(a){console.error(\"Validation error:\",a)}}})};\n"}],"styles":[{"type":"external","src":"/_astro/index.YqeRh2Lj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ryanr/Documents/dev/ryanroga/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/api/validate-turnstile@_@ts":"pages/api/validate-turnstile.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-manifest":"manifest_Brvmtm_Z.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Dt8SmjRY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.YqeRh2Lj.css","/favicon.svg","/RyanRoga_Resume.pdf"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"RDCsgImGda+gFGjYrYEAGagGzbWtXgG+Pw63P2ysYK0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
