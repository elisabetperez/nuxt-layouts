import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "c--form-a" }, _attrs))}><div class="f--row"><div class="f--col-12"><div class="f--row"><div class="f--col-6 f--col-mobile-12"><div class="g--form-group-01"><label for="text-01" class="g--form-label-01">First Name *</label><div class="g--form-input-01"><input type="text" id="first-name" class="g--form-input-01__item" placeholder="First Name"></div></div></div><div class="f--col-6 f--col-mobile-12"><div class="g--form-group-01"><label for="text-01" class="g--form-label-01">Last Name *</label><div class="g--form-input-01"><input type="text" id="last-name" class="g--form-input-01__item" placeholder="Last Name"></div></div></div></div><div class="f--row"><div class="f--col-6 f--col-mobile-12"><div class="g--form-group-01"><label for="text-01" class="g--form-label-01">Email *</label><div class="g--form-input-01"><input type="text" id="email" class="g--form-input-01__item" placeholder="Email"></div></div></div><div class="f--col-6 f--col-mobile-12"><div class="g--form-group-01"><label for="text-01" class="g--form-label-01">Phone</label><div class="g--form-input-01"><input type="text" id="phone" class="g--form-input-01__item" placeholder="Phone"></div></div></div></div><div class="f--row"><div class="f--col-12"><div class="g--form-group-01"><label for="text-01" class="g--form-label-01">How can we help you?</label><div class="g--form-textarea-01"><textarea id="textarea-01" class="g--form-textarea-01__item" placeholder=""></textarea></div></div></div></div></div><div class="f--col-12"><button class="c--form-a__btn">Submit!</button></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("assets/img/hero-b.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormA = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "c--layout-c" }, _attrs))}><div class="f--container"><div class="f--row f--gap-e"><div class="f--col-5 f--col-tabletm-6 f--col-tablets-12"><h1 class="c--layout-c__title"> Still didn&#39;t find what you were looking for? Reach out! </h1><div class="c--layout-c__media-wrapper"><img class="c--layout-c__media-wrapper__media"${ssrRenderAttr("src", _imports_0)} alt="terra logos"></div></div><div class="f--col-6 f--offset-1 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0">`);
  _push(ssrRenderComponent(_component_FormA, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modules/TextFormLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=TextFormLayout-0JTm_MJb.mjs.map
