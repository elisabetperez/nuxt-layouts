import { k as GET_SETTINGS, l as ctaQuery, h as useGetThePermalink } from '../server.mjs';
import { useSSRContext, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ImageBGCta",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const ctaInfo = ([__temp, __restore] = withAsyncContext(() => GET_SETTINGS({
      QUERY: ctaQuery,
      TYPE: "cta"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "g--cta-02" }, _attrs))}><div class="g--cta-02__bg-items g--lazy-01" data-src="/assets/img/cta_02.webp"></div><div class="g--cta-02__ft-items"><div class="g--cta-02__ft-items__content"><h2 class="g--cta-02__ft-items__content__item-primary">${ssrInterpolate(unref(ctaInfo).cta_title)}</h2><p class="g--cta-02__ft-items__content__item-secondary">${ssrInterpolate(unref(ctaInfo).cta_tagline)}</p><div class="g--cta-02__ft-items__content__list-group"><a${ssrRenderAttr("href", unref(ctaInfo).cta_button.external_page ? unref(ctaInfo).cta_button.url_external : ("useGetThePermalink" in _ctx ? _ctx.useGetThePermalink : unref(useGetThePermalink))(unref(ctaInfo).cta_button.url_internal))} class="g--cta-02__ft-items__content__list-group__item"${ssrRenderAttr("target", unref(ctaInfo).cta_button.external_page ? "_blank" : "_self")} rel="noopener noreferrer">${ssrInterpolate(unref(ctaInfo).cta_button.label)}</a></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modules/ImageBGCta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ImageBGCta-Uvxjwsmv.mjs.map
