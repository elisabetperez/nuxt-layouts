import { _ as __nuxt_component_0$1 } from "./sanity-content-YdaIDtrv.mjs"
import { _ as __nuxt_component_1 } from "./ImageBGCta-Uvxjwsmv.mjs"
import { u as useRoute, G as GET_SANITY_CONTENT, n as navigateTo } from "../server.mjs"
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue"
import {
    ssrRenderAttrs,
    ssrRenderComponent,
    ssrInterpolate,
    ssrRenderList,
    ssrRenderAttr,
} from "vue/server-renderer"
import { c as componentsQuery } from "./components-8G0zcXOV.mjs"
import {
    N as NavB,
    i as indexComponents,
    c as codeExample,
    v as variables,
    n as notes,
    t as tabs,
    e as examples,
} from "./examples-NYe5isyV.mjs"
import { _ as __nuxt_component_0 } from "./NavA-4GfYqy4Q.mjs"
import "../../nitro/node-server.mjs"
import "node:http"
import "node:https"
import "fs"
import "path"
import "node:fs"
import "node:url"
import "unhead"
import "@unhead/shared"
import "vue-router"
import "@supabase/supabase-js"
import "@terrahq/vue-form"
import "./client-only-uYF1VBpJ.mjs"
import "./_plugin-vue_export-helper-yVxbj29m.mjs"

const _sfc_main = {
    __name: "[slug]",
    __ssrInlineRender: true,
    async setup(__props) {
        let __temp, __restore
        const route = useRoute()
        const contentPage =
            (([__temp, __restore] = withAsyncContext(() =>
                GET_SANITY_CONTENT({
                    QUERY: componentsQuery,
                    TYPE: "components",
                    SLUG: route.params.slug,
                    // Default slug if not provided in the route
                })
            )),
            (__temp = await __temp),
            __restore(),
            __temp)
        if (!contentPage) {
            navigateTo("/404")
        }
        const info = contentPage.layout_components
        const data = contentPage
        const serializers = {
            types: {
                componentList: indexComponents,
                codeExample,
                variables,
                notes,
                tabs,
                examples,
            },
        }
        const generateId = (title) => {
            return title.toLowerCase().replace(/\s+/g, "-")
        }
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0$1
            const _component_ModulesImageBGCta = __nuxt_component_1
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--layout-d" }, _attrs)
                )}><div class="c--layout-d__left-item">`
            )
            _push(ssrRenderComponent(__nuxt_component_0, null, null, _parent))
            _push(
                `</div><div class="c--layout-d__right-item"><div class="f--section-a f--background-b"><div class="f--container"><div class="f--row"><div class="f--col-8"><p class="c--info-a f--sp-c">FRAMEWORK 5.0 Latest update</p><h1 class="f--font-c u--font-bold f--color-a f--sp-d">${ssrInterpolate(
                    unref(data).title
                )}</h1><div class="f--font-e f--color-a c--content-a c--content-a--second f--sp-b">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        blocks: unref(info).description,
                    },
                    null,
                    _parent
                )
            )
            _push(`</div><!--[-->`)
            ssrRenderList(unref(info).section, (section, index) => {
                _push(
                    `<div class="f--sp-b"${ssrRenderAttr(
                        "id",
                        `${generateId(section.title)}`
                    )}><div class="u--display-flex u--justify-content-space-between u--align-items-center f--sp-c"><h2 class="f--font-d f--color-a u--font-bold">${ssrInterpolate(
                        section.title
                    )}</h2>`
                )
                if (section.button) {
                    _push(`<button class="g--btn-01 g--btn-01--second"> Hide </button>`)
                } else {
                    _push(`<!---->`)
                }
                _push(`</div>`)
                _push(
                    ssrRenderComponent(
                        _component_SanityContent,
                        {
                            blocks: section.content,
                            serializers,
                        },
                        null,
                        _parent
                    )
                )
                _push(`</div>`)
            })
            _push(`<!--]--></div><div class="f--col-4">`)
            _push(
                ssrRenderComponent(
                    NavB,
                    {
                        section: unref(info).section,
                    },
                    null,
                    _parent
                )
            )
            _push(`</div></div></div></div>`)
            _push(ssrRenderComponent(_component_ModulesImageBGCta, null, null, _parent))
            _push(`</div></div>`)
        }
    },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "pages/components/[slug]/[slug].vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=_slug_--95iR_lt.mjs.map
