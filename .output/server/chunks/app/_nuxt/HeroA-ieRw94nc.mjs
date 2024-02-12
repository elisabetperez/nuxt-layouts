import { _ as __nuxt_component_0 } from './client-only-uYF1VBpJ.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "HeroA",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "c--hero-a" }, _attrs))}><div class="f--container"><div class="f--row"><div class="f--col-7"><div class="c--hero-a__wrapper"><h1 class="c--hero-a__wrapper__title"> Welcome to the Global Components Library </h1></div></div><div class="f--col-3 f--offset-2"><div class="c--hero-a__media-wrapper">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero/HeroA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=HeroA-ieRw94nc.mjs.map
