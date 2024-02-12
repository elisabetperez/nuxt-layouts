import { _ as __nuxt_component_0 } from './NavA-4GfYqy4Q.mjs';
import { _ as __nuxt_component_1 } from './HeroB-pNpmfNRn.mjs';
import { _ as __nuxt_component_2 } from './ThreeElementCards-fHJ06Xne.mjs';
import { _ as __nuxt_component_1$1 } from './ImageBGCta-Uvxjwsmv.mjs';
import { u as useRoute, G as GET_SANITY_CONTENT, n as navigateTo } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as parentComponentQuery } from './components-8G0zcXOV.mjs';
import './_plugin-vue_export-helper-yVxbj29m.mjs';
import './sanity-content-YdaIDtrv.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import '@terrahq/vue-form';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const contentPage = ([__temp, __restore] = withAsyncContext(() => GET_SANITY_CONTENT({
      QUERY: parentComponentQuery,
      TYPE: "components",
      SLUG: route.params.slug
      // Default slug if not provided in the route
    })), __temp = await __temp, __restore(), __temp);
    if (!contentPage) {
      navigateTo("/404");
    }
    const info = contentPage;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavA = __nuxt_component_0;
      const _component_HeroB = __nuxt_component_1;
      const _component_ModulesThreeElementCards = __nuxt_component_2;
      const _component_ModulesImageBGCta = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c--layout-d" }, _attrs))}><div class="c--layout-d__left-item">`);
      _push(ssrRenderComponent(_component_NavA, null, null, _parent));
      _push(`</div><div class="c--layout-d__right-item">`);
      _push(ssrRenderComponent(_component_HeroB, { info: unref(info) }, null, _parent));
      _push(`<div class="f--section-a f--background-b"><div class="f--container"><div class="f--row f--sp-b"><div class="f--col-12"><h2 class="f--font-s f--color-a">${ssrInterpolate(unref(info).layout_components.loop_title)}</h2></div></div>`);
      _push(ssrRenderComponent(_component_ModulesThreeElementCards, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ModulesImageBGCta, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0gBjITtv.mjs.map
