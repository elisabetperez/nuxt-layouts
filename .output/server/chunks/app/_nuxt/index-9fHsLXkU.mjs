import { _ as __nuxt_component_0 } from "./NavA-4GfYqy4Q.mjs"
import { _ as __nuxt_component_1 } from "./HeroA-ieRw94nc.mjs"
import { _ as __nuxt_component_2 } from "./ThreeElementCards-fHJ06Xne.mjs"
import { useSSRContext } from "vue"
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer"
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.mjs"
import "./client-only-uYF1VBpJ.mjs"
import "../../handlers/renderer.mjs"
import "vue-bundle-renderer/runtime"
import "../../nitro/node-server.mjs"
import "node:http"
import "node:https"
import "fs"
import "path"
import "node:fs"
import "node:url"
import "devalue"
import "@unhead/ssr"
import "unhead"
import "@unhead/shared"

const _sfc_main = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
    const _component_NavA = __nuxt_component_0
    const _component_HeroA = __nuxt_component_1
    const _component_ModulesThreeElementCards = __nuxt_component_2
    _push(
        `<template${ssrRenderAttrs(
            _attrs
        )}><div class="c--layout-d"><div class="c--layout-d__left-item">`
    )
    _push(ssrRenderComponent(_component_NavA, null, null, _parent))
    _push(`</div><div class="c--layout-d__right-item">`)
    _push(ssrRenderComponent(_component_HeroA, null, null, _parent))
    _push(
        `<div class="f--section-a f--background-b"><div class="f--container"><div class="f--row f--sp-a"><div class="f--col-8"><div class="c--content-a c--content-a--second"><h2>Welcome stranger!</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam, qui consequatur reprehenderit sed id blanditiis tenetur doloribus, ab voluptas veniam placeat maiores, beatae ut saepe. Officia voluptas autem numquam. </p></div></div></div>`
    )
    _push(ssrRenderComponent(_component_ModulesThreeElementCards, null, null, _parent))
    _push(`</div></div></div></div></template>`)
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "pages/library/index.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]])

export { index as default }
//# sourceMappingURL=index-9fHsLXkU.mjs.map
