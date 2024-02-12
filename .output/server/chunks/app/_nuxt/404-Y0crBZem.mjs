import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("assets/img/404.webp");
const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "g--404-01" }, _attrs))}><div class="g--404-01__wrapper"><div class="g--404-01__wrapper__content"><div class="g--404-01__wrapper__content__media-wrapper"><img data-src="/assets/img/404.webp"${ssrRenderAttr("src", _imports_0)} alt="alt text" class="g--404-01__wrapper__content__media-wrapper__media g--lazy-01"></div><h1 class="g--404-01__wrapper__content__item-primary">Oops!</h1><p class="g--404-01__wrapper__content__item-secondary"> The page you are looking for might have been removed, had its name changed or is temporarily unavailable. </p><div class="g--404-01__wrapper__content__list-group"><a href="#" class="g--404-01__wrapper__content__list-group__item">Homepage!</a></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=404-Y0crBZem.mjs.map
