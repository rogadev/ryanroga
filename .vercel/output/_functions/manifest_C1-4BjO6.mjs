import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DZkz-Z07.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_-TpDul3A.mjs';
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ryanr/Documents/dev/ryanroga/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/validate-turnstile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/validate-turnstile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"validate-turnstile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/validate-turnstile.ts","pathname":"/api/validate-turnstile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CpeaGlQh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ryanr/Documents/dev/ryanroga/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/api/validate-turnstile@_@ts":"pages/api/validate-turnstile.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/ryanr/Documents/dev/ryanroga/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_VcRLcyU3.mjs","\u0000@astrojs-manifest":"manifest_C1-4BjO6.mjs","C:/Users/ryanr/Documents/dev/ryanroga/src/components/ResumeSection.astro?astro&type=script&index=0&lang.ts":"_astro/ResumeSection.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/ryanr/Documents/dev/ryanroga/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.BsUwFwVD.js","C:/Users/ryanr/Documents/dev/ryanroga/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.T_WuvD1A.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ryanr/Documents/dev/ryanroga/src/components/ResumeSection.astro?astro&type=script&index=0&lang.ts",""],["C:/Users/ryanr/Documents/dev/ryanroga/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","function d(){const t=document.getElementById(\"mobile-menu-button\"),n=document.getElementById(\"mobile-menu\"),c=document.querySelector(\".menu-icon\"),i=document.querySelector(\".close-icon\");if(!t||!n||!c||!i)return;const o=e=>{n.classList.toggle(\"hidden\",!e),c.classList.toggle(\"hidden\",e),i.classList.toggle(\"hidden\",!e),t.setAttribute(\"aria-expanded\",e.toString())};t.addEventListener(\"click\",()=>{const e=t.getAttribute(\"aria-expanded\")===\"true\";o(!e)}),n.querySelectorAll(\"a\").forEach(e=>{e.addEventListener(\"click\",()=>o(!1))}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&t.getAttribute(\"aria-expanded\")===\"true\"&&o(!1)})}d();"],["C:/Users/ryanr/Documents/dev/ryanroga/src/components/Contact.astro?astro&type=script&index=0&lang.ts","window.onloadTurnstileCallback=function(){window.turnstile.render(\"#turnstile-container\",{sitekey:\"0x4AAAAAAA1jHJu-9QywpvDf\",callback:async function(d){try{const t=await(await fetch(\"/api/validate-turnstile\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({token:d})})).json();if(t.success){const e=document.getElementById(\"contact-info\"),i=document.getElementById(\"pre-verification-message\"),a=document.getElementById(\"captcha-container\");if(!e||!i||!a){console.error(\"Required elements not found\");return}a.classList.add(\"opacity-0\"),i.classList.add(\"opacity-0\"),setTimeout(()=>{a.style.display=\"none\",i.style.display=\"none\",e.classList.remove(\"hidden\"),e.style.display=\"block\",e.offsetHeight,e.classList.remove(\"opacity-0\")},300);const o=e.querySelector('a[aria-label=\"Send email\"]');o&&(o.href=`mailto:${t.data.email}`,o.textContent=t.data.email);const s=e.querySelector('a[aria-label=\"LinkedIn profile\"]');if(s){s.href=t.data.linkedin;const n=s.querySelector(\"#linkedin-username\");if(n){const l=t.data.linkedin.split(\"/\").pop();n.textContent=`(${l})`}}const r=e.querySelector('a[aria-label=\"GitHub profile\"]');if(r){r.href=t.data.github;const n=r.querySelector(\"#github-username\");if(n){const l=t.data.github.split(\"/\").pop();n.textContent=`(${l})`}}}}catch(c){console.error(\"Validation error:\",c)}}})};"]],"assets":["/_astro/index.CpeaGlQh.css","/favicon.svg","/RyanRoga_Resume.pdf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ZXXIDRtRFXtEdLCILKxoBMLrBbLgiy8uFjJdXL5tc5s=","envGetSecretEnabled":true});

export { manifest };
