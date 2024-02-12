import { _ as __nuxt_component_0 } from './NavA-4GfYqy4Q.mjs';
import { _ as __nuxt_component_1 } from './HeroB-pNpmfNRn.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './TextFormLayout-0JTm_MJb.mjs';
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

const _sfc_main$1 = {
  __name: "Faqs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "f--section-a" }, _attrs))}><div class="f--container"><div class="f--row"><div class="f--col-8"><div class="g--accordion-01"><button class="g--accordion-01__hd" type="button" data-accordion-control="simpleContent-01" aria-expanded="false"><span class="g--accordion-01__hd__item-primary">title</span><span class="g--accordion-01__hd__icon" role="presentation"><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="43" width="43" height="43" rx="21.5" transform="rotate(-90 0 43)" fill="#0F0F0F"></rect><path d="M27.5 19L21.5 25L15.5 19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="g--accordion-01__bd" data-accordion-content="simpleContent-01" aria-hidden="true"><div class="g--accordion-01__bd__content"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, repellat necessitatibus quidem incidunt eligendi quo, consequatur eos et vel nulla recusandae facere quasi illum quod quisquam veniam ducimus quos. </p></div></div></div><div class="g--accordion-01"><button class="g--accordion-01__hd" type="button" data-accordion-control="simpleContent-02" aria-expanded="false"><span class="g--accordion-01__hd__item-primary">title</span><span class="g--accordion-01__hd__icon" role="presentation"><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="43" width="43" height="43" rx="21.5" transform="rotate(-90 0 43)" fill="#0F0F0F"></rect><path d="M27.5 19L21.5 25L15.5 19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="g--accordion-01__bd" data-accordion-content="simpleContent-02" aria-hidden="true"><div class="g--accordion-01__bd__content"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, repellat necessitatibus quidem incidunt eligendi quo, consequatur eos et vel nulla recusandae facere quasi illum quod quisquam veniam ducimus quos. </p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modules/Faqs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "support",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavA = __nuxt_component_0;
      const _component_HeroB = __nuxt_component_1;
      const _component_ModulesFaqs = __nuxt_component_2;
      const _component_ModulesTextFormLayout = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c--layout-d" }, _attrs))}><div class="c--layout-d__left-item">`);
      _push(ssrRenderComponent(_component_NavA, null, null, _parent));
      _push(`</div><div class="c--layout-d__right-item">`);
      _push(ssrRenderComponent(_component_HeroB, null, null, _parent));
      _push(`<div class="f--section-d f--background-b"><div class="f--container"><div class="f--row"><div class="f--col-8"><h1 class="f--font-c u--font-bold f--color-a f--sp-d">FAQs</h1>`);
      _push(ssrRenderComponent(_component_ModulesFaqs, null, null, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_ModulesTextFormLayout, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=support-A4G5BxhP.mjs.map
