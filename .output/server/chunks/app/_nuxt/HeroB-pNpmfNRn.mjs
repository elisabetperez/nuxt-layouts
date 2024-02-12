import { _ as __nuxt_component_0 } from "./sanity-content-YdaIDtrv.mjs"
import { useSSRContext, mergeProps } from "vue"
import {
    ssrRenderAttrs,
    ssrInterpolate,
    ssrRenderComponent,
    ssrRenderSlot,
    ssrRenderAttr,
} from "vue/server-renderer"

const _sfc_main = {
    __name: "HeroB",
    __ssrInlineRender: true,
    props: ["info"],
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--hero-b" }, _attrs)
                )}><div class="f--container"><div class="f--row"><div class="f--col-6 u--display-flex"><div class="c--hero-b__wrapper"><h1 class="c--hero-b__wrapper__title">${ssrInterpolate(
                    __props.info.title
                )}</h1><div class="c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: __props.info.layout_components.hero_slot,
                    },
                    null,
                    _parent
                )
            )
            _push(`</div>`)
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
            _push(
                `</div></div><div class="f--col-5 f--offset-1 u--display-flex u--align-items-flex-end"><div class="c--hero-b__media-wrapper"><img${ssrRenderAttr(
                    "src",
                    __props.info.layout_components.hero_image.url
                )}${ssrRenderAttr(
                    "alt",
                    __props.info.layout_components.hero_image.file_name
                )} class="c--hero-b__media-wrapper__media g--lazy-01"></div></div></div></div></div>`
            )
        }
    },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/hero/HeroB.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const __nuxt_component_1 = _sfc_main

export { __nuxt_component_1 as _ }
//# sourceMappingURL=HeroB-pNpmfNRn.mjs.map
