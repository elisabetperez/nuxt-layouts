import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _imports_0 = "" + publicAssetsURL("assets/img/mac.webp");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "g--card-35" }, _attrs))}><h3 class="g--card-35__item-primary">Accordion</h3><div class="g--card-35__list-group"><p class="g--card-35__list-group__item">1 component</p></div><div class="g--card-35__media-wrapper"><img data-src="/assets/img/mac.webp"${ssrRenderAttr("src", _imports_0)} alt="alt text" class="g--card-35__media-wrapper__media g--lazy-01"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/35.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Card35 = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "f--row f--gap-b" }, _attrs))}><div class="f--col-4">`);
  _push(ssrRenderComponent(_component_Card35, null, null, _parent));
  _push(`</div><div class="f--col-4">`);
  _push(ssrRenderComponent(_component_Card35, null, null, _parent));
  _push(`</div><div class="f--col-4">`);
  _push(ssrRenderComponent(_component_Card35, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modules/ThreeElementCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ThreeElementCards-fHJ06Xne.mjs.map
