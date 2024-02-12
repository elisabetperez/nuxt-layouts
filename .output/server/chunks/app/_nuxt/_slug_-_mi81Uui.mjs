import { u as useRoute, G as GET_SANITY_CONTENT, n as navigateTo } from '../server.mjs';
import { withAsyncContext, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { m as modulesQuery, u as useGetComponentName } from './query-yBbHTWSe.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import '@terrahq/vue-form';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'gsap';
import './card-23--fourth-RzRwSgnH.mjs';
import './sanity-content-YdaIDtrv.mjs';
import './client-only-uYF1VBpJ.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const contentPage = ([__temp, __restore] = withAsyncContext(() => GET_SANITY_CONTENT({
      QUERY: modulesQuery,
      TYPE: "page",
      SLUG: route.params.slug
      // Default slug if not provided in the route
    })), __temp = await __temp, __restore(), __temp);
    if (!contentPage) {
      navigateTo("/404");
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(contentPage)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(unref(contentPage).modules, (module, m) => {
          _push(`<div>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("useGetComponentName" in _ctx ? _ctx.useGetComponentName : unref(useGetComponentName))(module)), { info: module }, null), _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-_mi81Uui.mjs.map
