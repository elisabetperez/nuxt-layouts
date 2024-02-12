import { withAsyncContext, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { m as modulesQuery, u as useGetComponentName } from './query-yBbHTWSe.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { G as GET_SANITY_CONTENT } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'gsap';
import './card-23--fourth-RzRwSgnH.mjs';
import './sanity-content-YdaIDtrv.mjs';
import './client-only-uYF1VBpJ.mjs';
import 'vue-router';
import '@supabase/supabase-js';
import '@terrahq/vue-form';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const contentPage = ([__temp, __restore] = withAsyncContext(() => GET_SANITY_CONTENT({
      QUERY: modulesQuery,
      TYPE: "page",
      SLUG: "/"
    })), __temp = await __temp, __restore(), __temp);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-sX0zsvQf.mjs.map
