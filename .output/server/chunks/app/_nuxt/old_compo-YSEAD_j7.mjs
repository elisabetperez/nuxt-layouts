import { p as publicAssetsURL } from "../../handlers/renderer.mjs"
import { _ as __nuxt_component_1 } from "./HeroB-pNpmfNRn.mjs"
import { _ as __nuxt_component_1$1 } from "./HeroA-ieRw94nc.mjs"
import { _ as __nuxt_component_3$1 } from "./TextFormLayout-0JTm_MJb.mjs"
import { mergeProps, useSSRContext } from "vue"
import {
    ssrRenderAttrs,
    ssrRenderAttr,
    ssrRenderComponent,
    ssrRenderStyle,
    ssrInterpolate,
} from "vue/server-renderer"
import { _ as _imports_1 } from "./card-23--fourth-RzRwSgnH.mjs"
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
import "./sanity-content-YdaIDtrv.mjs"
import "./client-only-uYF1VBpJ.mjs"
import "./_plugin-vue_export-helper-yVxbj29m.mjs"

const _sfc_main$1 = {
    __name: "Notes",
    __ssrInlineRender: true,
    props: ["notes_block"],
    setup(__props) {
        const info = __props
        return (_ctx, _push, _parent, _attrs) => {
            _push(
                `<section${ssrRenderAttrs(
                    mergeProps({ class: "f--section-a f--background-b" }, _attrs)
                )}><div class="f--container"><div class="f--row f--gap-c"><div class="f--col-8"><h2 class="f--font-d f--color-a u--font-bold">Notes</h2></div><div class="f--col-8"><div class="c--callout-a"><div class="c--callout-a__bg-items" style="${ssrRenderStyle(
                    { "background-image": "url('/assets/img/callout.webp')" }
                )}"></div><div class="c--callout-a__ft-items"><div class="c--callout-a__ft-items__title c--content-a c--content-a--second"><p> To go to any accordion we can add &quot;#accordion-accordionNumber&quot; in the url. For example, to go to accordion-02 add &quot;#accordion-02&quot;, the url will be <a href="#">&quot;https://globalcomponents.netlify.app/accordion.html#accordion-02&quot;</a></p> ${ssrInterpolate(
                    info
                )}</div></div></div></div></div></div></section>`
            )
        }
    },
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "components/Modules/Notes.vue"
    )
    return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const __nuxt_component_3 = _sfc_main$1
const _imports_0 = "" + publicAssetsURL("assets/img/example.webp")
const _imports_2 = "" + publicAssetsURL("assets/img/layer.webp")
const _sfc_main = {
    __name: "old_compo",
    __ssrInlineRender: true,
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            const _component_HeroB = __nuxt_component_1
            const _component_HeroA = __nuxt_component_1$1
            const _component_ModulesTextFormLayout = __nuxt_component_3$1
            const _component_ModulesNotes = __nuxt_component_3
            _push(`<div${ssrRenderAttrs(
                mergeProps({ class: "c--layout-d" }, _attrs)
            )}><div class="c--layout-d__left-item"><div class="c--nav-a"><h3 class="c--nav-a__title">Library</h3><div class="c--nav-a__wrapper"><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-a" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-a" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-b" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-b" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-c" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-c" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-d" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-d" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-e" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-e" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-f" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-f" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-g" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-g" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-h" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-h" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-i" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-i" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div><div class="c--dropdown-a"><button class="c--dropdown-a__hd" type="button" data-dropdown-control="simpleContent-j" aria-expanded="false"><span class="c--dropdown-a__hd__title">Accordion</span><span class="c--dropdown-a__hd__icon" role="presentation"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20264 1.25L5.36777 5.25L1.53291 1.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button><div class="c--dropdown-a__bd" data-dropdown-content="simpleContent-j" aria-hidden="true"><div class="c--dropdown-a__bd__content"><a href="#" class="c--dropdown-a__bd__content__item"> See All </a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-01</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-02</a><a href="#" class="c--dropdown-a__bd__content__item"> accordion-03</a></div></div></div></div><div class="c--nav-a__ft"><h3 class="c--nav-a__ft__title">Need Help?</h3><p class="f--font-e f--color-b"> Reach out to <a href="#" class="g--link-01 g--link-01--fifth">Support</a></p></div></div></div><div class="c--layout-d__right-item"><div class="f--section-a f--background-b"><div class="f--container"><div class="f--row f--gap-c"><div class="f--col-8"><h2 class="f--font-d f--color-a u--font-bold">HTML</h2></div><div class="f--col-8"><div class="c--tabs-a"><div class="c--tabs-a__hd"><ul class="c--tabs-a__hd__list"><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link c--tabs-a__hd__list__list-item__link--is-active" type="button" data-tab-control="tabContent-01" aria-expanded="false"> With bg </button></li><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link" type="button" data-tab-control="tabContent-02" aria-expanded="false"> Without bg </button></li><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link" type="button" data-tab-control="tabContent-03" aria-expanded="false"> With lottie </button></li></ul><div class="c--tabs-a__hd__title"> Check an example <a href="#" class="c--tabs-a__hd__title__link">here</a></div></div><div class="c--tabs-a__bd c--tabs-a__bd--is-active" data-tab-content="tabContent-01" aria-hidden="true"><div class="c--code-a"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#7CE55E" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#7CE55E" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">html</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div><div class="c--tabs-a__bd" data-tab-content="tabContent-02" aria-hidden="true"><div class="c--code-a"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#7CE55E" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#7CE55E" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">html</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div><div class="c--tabs-a__bd" data-tab-content="tabContent-03" aria-hidden="true"><div class="c--code-a"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#7CE55E" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#7CE55E" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">html</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div></div></div></div></div></div><div class="g--section-a f--background-b"><div class="f--container"><div class="f--row f--gap-c"><div class="f--col-8 u--display-flex u--justify-content-space-between u--align-items-center"><h2 class="f--font-d f--color-a u--font-bold">SCSS</h2><button class="g--btn-01 g--btn-01--second">Hide</button></div><div class="f--col-8"><div class="c--code-a c--code-a--second"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#429ed6" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#429ed6" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">SCSS</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div></div></div></div><div class="f--section-a f--background-b"><div class="f--container"><div class="f--row f--gap-c"><div class="f--col-8"><h2 class="f--font-d f--color-a u--font-bold">Examples</h2></div><div class="f--col-8"><div class="c--tabs-a"><div class="c--tabs-a__hd"><p class="c--tabs-a__hd__title">Example Name</p><ul class="c--tabs-a__hd__list"><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link c--tabs-a__hd__list__list-item__link--is-active" type="button" data-tabExample-control="tabContent-01" aria-expanded="false"> Preview </button></li><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link" type="button" data-tabExample-control="tabContent-02" aria-expanded="false"> HTML </button></li><li class="c--tabs-a__hd__list__list-item"><button class="c--tabs-a__hd__list__list-item__link" type="button" data-tabExample-control="tabContent-03" aria-expanded="false"> SCSS </button></li></ul></div><div class="c--tabs-a__bd c--tabs-a__bd--is-active" data-tabExample-content="tabContent-01" aria-hidden="true"><img${ssrRenderAttr(
                                            "src",
                                            _imports_0
                                        )} alt="" class="c--tabs-a__bd__media"></div><div class="c--tabs-a__bd" data-tabExample-content="tabContent-02" aria-hidden="true"><div class="c--code-a c--code-a--third"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#fdb335" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#fdb335" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">html</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div><div class="c--tabs-a__bd" data-tabExample-content="tabContent-03" aria-hidden="true"><div class="c--code-a c--code-a--second"><button class="c--code-a__btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.96191" y="1.04639" width="14.3573" height="14.3573" rx="1.84107" stroke="#7CE55E" stroke-width="1.5"></rect><rect x="1.0459" y="4.96198" width="14.3573" height="14.3573" rx="1.84107" fill="#0F0F0F" stroke="#7CE55E" stroke-width="1.5"></rect></svg></button><pre class="c--code-a__wrapper">                                            <label class="c--code-a__wrapper__label">SCSS</label>
                                            <code class="c--code-a__wrapper__content">
    &lt;  div class=&quot;g--card-03&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items&quot; &gt;
    &lt;  h3 class=&quot;g--card-03__ft-items__item-primary&quot; &gt;Investment Banking&lt;  /h3 &gt;
    &lt;  div class=&quot;g--card-03__ft-items__list-group&quot; &gt;
    &lt;  a href=&quot;#&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;g--card-03__ft-items__list-group__item&quot; &gt;Learn More&lt;  /a &gt;
    &lt;  /div &gt;
    &lt;  figure class=&quot;g--card-03__ft-items__media-wrapper&quot; &gt;
    &lt;  div class=&quot;g--card-03__ft-items__media-wrapper__media js--lottie&quot; data-animation-path=&quot;/lottie/terraforms-all.json&quot; &gt;&lt;  /div &gt;
    &lt;  /figure &gt;
    &lt;  /div &gt;
    &lt;  /div &gt;
                                            </code>
                                        </pre></div></div></div></div></div></div></div><div class="f--section-a f--background-b"><div class="f--container"><div class="f--row"><div class="f--col-8"><p class="c--info-a f--sp-c"> FRAMEWORK 5.0 Latest update 2022-05-24 12:31 </p><div class="c--content-a c--content-a--second"><h1 class="f--font-c u--font-bold f--color-a f--sp-c">button-01</h1><p class="f--font-e f--color-a"> Whether you are a beginner or an expert in Hyper Text Markup Language (HTML) it is important to follow some best practices in order to keep your HTML documents consistent and organized. With so many elements, attributes, properties, values, and more \u2014 there is a lot to learn. </p></div></div><div class="f--col-4"><div class="c--nav-b"><div class="c--nav-b__wrapper"><h3 class="c--nav-b__wrapper__title">On this page</h3><ul class="c--nav-b__wrapper__list-group"><li class="c--nav-b__wrapper__list-group__list-item"><a href="#" class="c--nav-b__wrapper__list-group__list-item__item">HTML</a></li><li class="c--nav-b__wrapper__list-group__list-item"><a href="#" class="c--nav-b__wrapper__list-group__list-item__item">Editable Variables</a></li><li class="c--nav-b__wrapper__list-group__list-item c--nav-b__wrapper__list-group__list-item--is-active"><a href="#" class="c--nav-b__wrapper__list-group__list-item__item">SCSS</a></li><li class="c--nav-b__wrapper__list-group__list-item"><a href="#" class="c--nav-b__wrapper__list-group__list-item__item">Notes</a></li><li class="c--nav-b__wrapper__list-group__list-item"><a href="#" class="c--nav-b__wrapper__list-group__list-item__item">Examples</a></li></ul></div></div></div></div></div></div>`)
            _push(ssrRenderComponent(_component_HeroB, null, null, _parent))
            _push(ssrRenderComponent(_component_HeroA, null, null, _parent))
            _push(
                `<div class="f--section-a f--background-b"><div class="f--container"><div class="f--row"><div class="f--col-12"><div class="c--content-a c--content-a--second"><p class="footnote">This is a footenote</p><button>See More!</button><div class="quote"></div><table class="table"><thead><tr><th>Company</th><th>Contact</th><th>Country</th></tr></thead><tbody><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr></tbody></table><p> Influencer marketing continues to spread like wildfire across the B2C industries with varying levels of success. But how does it translate to B2B industries with more complex products and offerings? Influencers: They live among us. They\u2019re next to us in restaurants taking boudoir photos of their food, on our social media homepages shilling discount codes for meal delivery kits, and on the sidewalk blocking our path with their silly little dances. Now that social media has decentralized content creation, anyone can be an influencer. And consequently, every business \u2014 even B2B ones \u2014 can now find a way to use influencer marketing to strengthen their brand and connect with new audiences with higher returns than traditional strategies. </p><h2>Intro to Influencer Marketing</h2><p> Unfortunately, B2B influencer marketing is more than just discount codes and dancing. It requires a well-designed expansion of your marketing mix and a strong understanding of your brand and its values. However, when done right, influencer marketing can be the key to skyrocketing your organization above the competition. </p><ol><li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. <ol><li> Deserunt soluta molestias qui quidem <ol><li> dolores atque quod modi ducimus dolorem est maxime odit consequuntur nam quis sit veniam voluptatum. Harum, porro. </li></ol></li></ol></li><li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li><li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li><li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li></ol><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum iure deserunt non consequuntur eaque nemo accusamus, tenetur voluptas omnis repellat ullam, minima in quisquam tempora iusto provident ad? Esse! </p><ul><li> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maxime nostrum vel, fugiat iure inventore sint aliquam, repellat excepturi doloremque impedit consequuntur cupiditate error architecto dignissimos ea, minima numquam dicta? <ul><li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto et fuga iste minus blanditiis, quae veniam hic eius perferendis? Distinctio saepe vitae amet animi et quae placeat incidunt modi. <ul><li> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic optio accusantium fuga harum, maiores tempora illo, amet nesciunt iste totam unde corporis dicta tenetur sit dolorum, cumque voluptates voluptas perspiciatis? </li></ul></li></ul></li><li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi, maiores veritatis quod ipsum ipsa nihil ratione reiciendis quo modi esse sunt dolor quibusdam nemo in dolorum qui tempore et? </li></ul><figure><img alt="\u201CImage\u201D"${ssrRenderAttr(
                    "src",
                    _imports_1
                )}><figcaption> This is footnote lorem impsum dolor sit amet </figcaption></figure><div class="c--cta-a"><div class="c--cta-a__bg-items"></div><div class="c--cta-a__ft-items"><div class="c--cta-a__ft-items__left-items"><h3 class="c--cta-a__ft-items__left-items__title"> Ready to leverage influencers? </h3><p class="c--cta-a__ft-items__left-items__subtitle"> Our social media strategists can help you find and leverage the right thought leaders for your organization. </p></div><div class="c--cta-a__ft-items__right-items"><a href="#" class="c--cta-a__ft-items__right-items__link">Let&#39;s Talk!</a></div></div></div><div class="c--card-b"><div class="c--card-b__left-items"><img data-src="/assets/img/layer.webp"${ssrRenderAttr(
                    "src",
                    _imports_2
                )} alt="" class="c--card-b__left-items__media g--lazy-01"></div><div class="c--card-b__right-items"><div class="c--card-b__right-items__hd"><span class="c--card-b__right-items__hd__item">Jul 14, 2023 | 4 min read </span></div><div class="c--card-b__right-items__bd"><p class="c--card-b__right-items__bd__content"> What is an Interest Graph, and What Does it Mean for Marketers? </p></div><div class="c--card-b__right-items__ft"><span class="c--card-b__right-items__ft__item">Web Design, UX</span></div></div></div></div></div></div></div></div>`
            )
            _push(ssrRenderComponent(_component_ModulesTextFormLayout, null, null, _parent))
            _push(ssrRenderComponent(_component_ModulesNotes, null, null, _parent))
            _push(
                `<div class="f--section-a f--background-b"></div><div class="f--section-a f--background-b"></div></div></div>`
            )
        }
    },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
        "pages/old_compo.vue"
    )
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=old_compo-YSEAD_j7.mjs.map
