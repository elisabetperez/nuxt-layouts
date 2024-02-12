import { _ as y } from "./sanity-content.alFMDKuN.js"
import { _ as v } from "./ImageBGCta.n_UgDAkv.js"
import {
    Z as g,
    u as x,
    n as C,
    q as E,
    s as N,
    c as n,
    a as t,
    b as a,
    t as _,
    v as c,
    F as k,
    x as w,
    G as B,
    o as i,
    y as T,
} from "./entry.OtO-Wuic.js"
import { u as L } from "./useBlazy.v-9l8TKI.js"
import { N as A, i as G, c as Q, v as R, n as S, t as z, e as F } from "./examples.wn-OxAMa.js"
import { _ as I } from "./NavA.Z7BgT95l.js"
import "./client-only.uzzD6Ian.js"
import "./_plugin-vue_export-helper.x3n3nnut.js"
const M = g(),
    V = `{
  'updated': _updatedAt,
  layout_properties {
    'hero_title': hero_title,
    'hero_description': hero_description,
    'section': sections[]{
      'title': section_title,
      'button': show_button,
      'content': section_content[]${M}
    },
  }
}`,
    Y = { class: "c--layout-d" },
    $ = { class: "c--layout-d__left-item" },
    O = { class: "c--layout-d__right-item" },
    P = { class: "f--section-a f--background-b" },
    U = { class: "f--container" },
    j = { class: "f--row" },
    q = { class: "f--col-8" },
    D = t("p", { class: "c--info-a f--sp-c" }, "FRAMEWORK 5.0 Latest update", -1),
    H = { class: "f--font-c u--font-bold f--color-a f--sp-d" },
    K = { class: "f--font-e f--color-a f--sp-b" },
    W = ["id"],
    Z = { class: "u--display-flex u--justify-content-space-between u--align-items-center f--sp-c" },
    J = { class: "f--font-d f--color-a u--font-bold" },
    X = { key: 0, class: "g--btn-01 g--btn-01--second" },
    tt = { class: "c--content-a c--content-a--second" },
    st = { class: "f--col-4" },
    pt = {
        __name: "[slug]",
        async setup(et) {
            let s, r
            const p = x(),
                l =
                    (([s, r] = C(() => B({ QUERY: V, TYPE: "properties", SLUG: p.params.slug }))),
                    (s = await s),
                    r(),
                    s),
                e = l.layout_properties
            l || E("/404")
            const u = {
                    types: {
                        componentList: G,
                        codeExample: Q,
                        variables: R,
                        notes: S,
                        tabs: z,
                        examples: F,
                    },
                },
                f = (d) => d.toLowerCase().replace(/\s+/g, "-")
            return (
                N(async () => {
                    L()
                }),
                (d, ot) => {
                    const m = y,
                        h = v
                    return (
                        i(),
                        n("div", Y, [
                            t("div", $, [a(I)]),
                            t("div", O, [
                                t("div", P, [
                                    t("div", U, [
                                        t("div", j, [
                                            t("div", q, [
                                                D,
                                                t("h1", H, _(c(e).hero_title), 1),
                                                t("p", K, _(c(e).hero_description), 1),
                                                (i(!0),
                                                n(
                                                    k,
                                                    null,
                                                    w(
                                                        c(e).section,
                                                        (o, b) => (
                                                            i(),
                                                            n(
                                                                "div",
                                                                {
                                                                    key: b,
                                                                    class: "f--sp-b",
                                                                    id: `${f(o.title)}`,
                                                                },
                                                                [
                                                                    t("div", Z, [
                                                                        t("h2", J, _(o.title), 1),
                                                                        o.button
                                                                            ? (i(),
                                                                              n(
                                                                                  "button",
                                                                                  X,
                                                                                  " Hide "
                                                                              ))
                                                                            : T("", !0),
                                                                    ]),
                                                                    t("div", tt, [
                                                                        a(
                                                                            m,
                                                                            {
                                                                                blocks: o.content,
                                                                                serializers: u,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ["blocks"]
                                                                        ),
                                                                    ]),
                                                                ],
                                                                8,
                                                                W
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            t("div", st, [
                                                a(A, { section: c(e).section }, null, 8, [
                                                    "section",
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                a(h),
                            ]),
                        ])
                    )
                }
            )
        },
    }
export { pt as default }
