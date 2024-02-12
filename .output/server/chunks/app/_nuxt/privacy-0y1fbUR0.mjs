import { useSSRContext, mergeProps } from "vue"
import { ssrRenderAttrs } from "vue/server-renderer"
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.mjs"

const _sfc_main = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
    _push(
        `<section${ssrRenderAttrs(
            mergeProps({ class: "f--section-a f--background-b" }, _attrs)
        )}><div class="f--container"><div class="f--row u--justify-content-center"><div class="f--col-8 f--col-tablets-10 f--col-mobile-12"><div class="c--content-a c--content-a--second"></div></div></div></div></section>`
    )
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "pages/privacy.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]])

export { privacy as default }
//# sourceMappingURL=privacy-0y1fbUR0.mjs.map
