import { _ as __nuxt_component_0$1 } from "./client-only-uYF1VBpJ.mjs"
import { useSSRContext, ref, mergeProps, unref } from "vue"
import {
    ssrRenderAttrs,
    ssrRenderList,
    ssrRenderAttr,
    ssrRenderClass,
    ssrInterpolate,
    ssrRenderStyle,
    ssrRenderComponent,
} from "vue/server-renderer"
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.mjs"
import { _ as __nuxt_component_0 } from "./sanity-content-YdaIDtrv.mjs"
import { h as useGetThePermalink } from "../server.mjs"

const _sfc_main$6 = {
    props: ["component", "component_child"],
    computed: {
        ComponentToLoad() {
            console.log(this.component)
            console.log(this.component_child)
            return () => import(`./${this.component_child}`)
        },
    },
}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
    const _component_client_only = __nuxt_component_0$1
    _push(`<div${ssrRenderAttrs(_attrs)}>`)
    _push(ssrRenderComponent(_component_client_only, null, {}, _parent))
    _push(`</div>`)
}
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/demoComponents/index.vue"
    )
    return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const indexComponents = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]])
const _sfc_main$5 = {
    __name: "NavB",
    __ssrInlineRender: true,
    props: ["section"],
    setup(__props) {
        const props = __props
        const isActive = ref("")
        const getID = (title) => {
            return title.toLowerCase().replace(/\s+/g, "-")
        }
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--nav-b" }, _attrs)
                )}><div class="c--nav-b__wrapper"><h3 class="c--nav-b__wrapper__title">On this page</h3><ul class="c--nav-b__wrapper__list-group"><!--[-->`
            )
            ssrRenderList(props.section, (section, index) => {
                _push(
                    `<li${ssrRenderAttr("id", getID(section.title))} class="${ssrRenderClass([
                        {
                            "c--nav-b__wrapper__list-group__list-item--is-active":
                                isActive.value === getID(section.title),
                        },
                        "c--nav-b__wrapper__list-group__list-item",
                    ])}"><a class="c--nav-b__wrapper__list-group__list-item__item">${ssrInterpolate(
                        section.title
                    )}</a></li>`
                )
            })
            _push(`<!--]--></ul></div></div>`)
        }
    },
}
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/nav/NavB.vue"
    )
    return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const NavB = _sfc_main$5
const _sfc_main$4 = {
    __name: "codeExample",
    __ssrInlineRender: true,
    props: ["exampleUsage"],
    setup(__props) {
        const info = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<div${ssrRenderAttrs(
                mergeProps({ class: "c--content-a c--content-a--second" }, _attrs)
            )}><div class="c--code-a c--code-a--second"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#429ed6" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#429ed6" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                            <label class="c--code-a__wrapper__label">${ssrInterpolate(
                info.exampleUsage.language
            )}</label>
                            <code class="c--code-a__wrapper__content">${ssrInterpolate(
                                info.exampleUsage.code
                            )}</code>
                        </pre></div></div>`)
        }
    },
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/codeExample.vue"
    )
    return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const codeExample = _sfc_main$4
const _sfc_main$3 = {
    __name: "notes",
    __ssrInlineRender: true,
    props: ["notes_block"],
    setup(__props) {
        const info = __props
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--content-a c--content-a--second" }, _attrs)
                )}><div class="c--callout-a"><div class="c--callout-a__bg-items" style="${ssrRenderStyle(
                    { "background-image": "url('/assets/img/callout.webp')" }
                )}"></div><div class="c--callout-a__ft-items"><div class="c--callout-a__ft-items__title c--content-a c--content-a--second">`
            )
            _push(
                ssrRenderComponent(
                    _component_SanityContent,
                    {
                        class: "test",
                        blocks: info.notes_block,
                    },
                    null,
                    _parent
                )
            )
            _push(`</div></div></div></div>`)
        }
    },
}
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/notes.vue"
    )
    return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const notes = _sfc_main$3
const _sfc_main$2 = {
    __name: "tabs",
    __ssrInlineRender: true,
    props: ["tab"],
    setup(__props) {
        const info = __props
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--tabs-a" }, _attrs)
                )}><div class="c--tabs-a__hd"><ul class="c--tabs-a__hd__list"><!--[-->`
            )
            ssrRenderList(info.tab, (tab, index) => {
                _push(
                    `<li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link" type="button"${ssrRenderAttr(
                        "data-tab-control",
                        "tabContent-0" + index
                    )} aria-expanded="false">${ssrInterpolate(tab.tab_title)}</button></li>`
                )
            })
            _push(`<!--]--></ul></div><!--[-->`)
            ssrRenderList(info.tab, (tab, index) => {
                _push(
                    `<div class="c--tabs-a__bd c--tabs-a__bd--is-active"${ssrRenderAttr(
                        "data-tab-content",
                        "tabContent-0" + index
                    )} aria-hidden="true"><!--[-->`
                )
                ssrRenderList(tab.tab_content, (content, c) => {
                    _push(`<!--[-->`)
                    if (content._type == "block") {
                        _push(
                            `<div class="c--tabs-a__hd__title c--content-a c--content-a--second">`
                        )
                        _push(
                            ssrRenderComponent(
                                _component_SanityContent,
                                {
                                    class: "test",
                                    blocks: tab.tab_content,
                                },
                                null,
                                _parent
                            )
                        )
                        _push(`</div>`)
                    } else {
                        _push(`<!---->`)
                    }
                    if (content._type == "codeExample") {
                        _push(`<div class="${ssrRenderClass([
                            { "c--code-a--second": content.exampleUsage.language === "scss" },
                            "c--code-a",
                        ])}"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#429ed6" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#429ed6" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">            <label class="c--code-a__wrapper__label">${ssrInterpolate(
                            content.exampleUsage.language
                        )}</label>
            <code class="c--code-a__wrapper__content">${ssrInterpolate(
                content.exampleUsage.code
            )}</code>
        </pre></div>`)
                    } else {
                        _push(`<!---->`)
                    }
                    _push(`<!--]-->`)
                })
                _push(`<!--]--></div>`)
            })
            _push(`<!--]--></div>`)
        }
    },
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/tabs.vue"
    )
    return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const tabs = _sfc_main$2
const _sfc_main$1 = {
    __name: "variables",
    __ssrInlineRender: true,
    props: ["related_variables"],
    setup(__props) {
        const info = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps({ class: "c--content-a c--content-a--second" }, _attrs)
                )}><!--[-->`
            )
            ssrRenderList(info.related_variables, (section, index) => {
                _push(`<!--[--><h2>${ssrInterpolate(section.title)}</h2><ul><!--[-->`)
                ssrRenderList(section.properties, (property, p) => {
                    _push(
                        `<li><a${ssrRenderAttr(
                            "href",
                            ("useGetThePermalink" in _ctx
                                ? _ctx.useGetThePermalink
                                : unref(useGetThePermalink))(property.link)
                        )}>${ssrInterpolate(property.title)}</a></li>`
                    )
                })
                _push(`<!--]--></ul><!--]-->`)
            })
            _push(`<!--]--></div>`)
        }
    },
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/variables.vue"
    )
    return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const variables = _sfc_main$1
const _sfc_main = {
    __name: "examples",
    __ssrInlineRender: true,
    props: ["examples_title", "examples", "_id"],
    setup(__props) {
        const info = __props
        const generateContent = (index) => {
            return `data-${index}-content`
        }
        const generateControl = (index) => {
            return `data-${index}-control`
        }
        return (_ctx, _push, _parent, _attrs) => {
            const _component_SanityContent = __nuxt_component_0
            _push(
                `<div${ssrRenderAttrs(
                    mergeProps(
                        {
                            class: "c--tabs-a f--sp-c",
                            id: info.examples_id,
                        },
                        _attrs
                    )
                )}><div class="c--tabs-a__hd"><p class="c--tabs-a__hd__title">${ssrInterpolate(
                    info.examples_title
                )}</p><ul class="c--tabs-a__hd__list"><!--[-->`
            )
            ssrRenderList(info.examples, (example, index) => {
                _push(
                    `<li class="c--tabs-a__hd__list__list-item"><button${ssrRenderAttrs({
                        class: "c--tabs-a__hd__list__list-item__link",
                        type: "button",
                        [generateControl(info._id) || ""]: "tabContent-" + info._id + index,
                        "aria-expanded": "false",
                    })}>${ssrInterpolate(example.example_title)}</button></li>`
                )
            })
            _push(`<!--]--></ul></div><!--[-->`)
            ssrRenderList(info.examples, (example, index) => {
                _push(
                    `<div${ssrRenderAttrs({
                        class: "c--tabs-a__bd c--tabs-a__bd--is-active",
                        key: index,
                        [generateContent(info._id) || ""]: "tabContent-" + info._id + index,
                        "aria-hidden": "true",
                    })}><!--[-->`
                )
                ssrRenderList(example.example_content, (content, c) => {
                    _push(`<!--[-->`)
                    if (content._type == "block") {
                        _push(
                            `<div class="c--tabs-a__hd__title c--content-a c--content-a--second">`
                        )
                        _push(
                            ssrRenderComponent(
                                _component_SanityContent,
                                {
                                    class: "test",
                                    blocks: _ctx.tab.example_content,
                                },
                                null,
                                _parent
                            )
                        )
                        _push(`</div>`)
                    } else {
                        _push(`<!---->`)
                    }
                    if (content._type == "codeExample") {
                        _push(`<div class="${ssrRenderClass([
                            { "c--code-a--second": content.exampleUsage.language === "scss" },
                            "c--code-a",
                        ])}"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#429ed6" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#429ed6" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">            <label class="c--code-a__wrapper__label">${ssrInterpolate(
                            content.exampleUsage.language
                        )}</label>
            <code class="c--code-a__wrapper__content">${ssrInterpolate(
                content.exampleUsage.code
            )}</code>
        </pre></div>`)
                    } else {
                        _push(`<!---->`)
                    }
                    _push(`<!--]-->`)
                })
                _push(`<!--]--></div>`)
            })
            _push(`<!--]--></div>`)
        }
    },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/portableText/examples.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const examples = _sfc_main

export {
    NavB as N,
    codeExample as c,
    examples as e,
    indexComponents as i,
    notes as n,
    tabs as t,
    variables as v,
}
//# sourceMappingURL=examples-NYe5isyV.mjs.map
