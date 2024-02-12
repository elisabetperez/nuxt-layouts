import { _ as y } from "./sanity-content.alFMDKuN.js"
import { _ as g } from "./ImageBGCta.n_UgDAkv.js"
import {
    u as x,
    n as k,
    q as E,
    s as N,
    c as n,
    a as s,
    b as t,
    t as p,
    v as a,
    F as C,
    x as B,
    G as T,
    o as c,
    y as w,
} from "./entry.OtO-Wuic.js"
import { u as L } from "./useBlazy.v-9l8TKI.js"
import { c as G } from "./components.MJs51-wg.js"
import { N as R, i as S, c as z, v as A, n as F, t as I, e as M } from "./examples.wn-OxAMa.js"
import { _ as V } from "./NavA.Z7BgT95l.js"
import "./client-only.uzzD6Ian.js"
import "./_plugin-vue_export-helper.x3n3nnut.js"
const Y = { class: "c--layout-d" },
    O = { class: "c--layout-d__left-item" },
    P = { class: "c--layout-d__right-item" },
    Q = { class: "f--section-a f--background-b" },
    U = { class: "f--container" },
    $ = { class: "f--row" },
    j = { class: "f--col-8" },
    q = s("p", { class: "c--info-a f--sp-c" }, "FRAMEWORK 5.0 Latest update", -1),
    D = { class: "f--font-c u--font-bold f--color-a f--sp-d" },
    H = { class: "f--font-e f--color-a c--content-a c--content-a--second f--sp-b" },
    K = ["id"],
    W = { class: "u--display-flex u--justify-content-space-between u--align-items-center f--sp-c" },
    J = { class: "f--font-d f--color-a u--font-bold" },
    X = { key: 0, class: "g--btn-01 g--btn-01--second" },
    Z = { class: "f--col-4" },
    ds = {
        __name: "[slug]",
        async setup(ss) {
            let o, l
            const m = x(),
                i =
                    (([o, l] = k(() => T({ QUERY: G, TYPE: "components", SLUG: m.params.slug }))),
                    (o = await o),
                    l(),
                    o)
            i || E("/404")
            const _ = i.layout_components,
                u = i,
                f = {
                    types: {
                        componentList: S,
                        codeExample: z,
                        variables: A,
                        notes: F,
                        tabs: I,
                        examples: M,
                    },
                },
                b = (r) => r.toLowerCase().replace(/\s+/g, "-")
            return (
                N(async () => {
                    L()
                }),
                (r, ts) => {
                    const d = y,
                        h = g
                    return (
                        c(),
                        n("div", Y, [
                            s("div", O, [t(V)]),
                            s("div", P, [
                                s("div", Q, [
                                    s("div", U, [
                                        s("div", $, [
                                            s("div", j, [
                                                q,
                                                s("h1", D, p(a(u).title), 1),
                                                s("div", H, [
                                                    t(d, { blocks: a(_).description }, null, 8, [
                                                        "blocks",
                                                    ]),
                                                ]),
                                                (c(!0),
                                                n(
                                                    C,
                                                    null,
                                                    B(
                                                        a(_).section,
                                                        (e, v) => (
                                                            c(),
                                                            n(
                                                                "div",
                                                                {
                                                                    key: v,
                                                                    class: "f--sp-b",
                                                                    id: `${b(e.title)}`,
                                                                },
                                                                [
                                                                    s("div", W, [
                                                                        s("h2", J, p(e.title), 1),
                                                                        e.button
                                                                            ? (c(),
                                                                              n(
                                                                                  "button",
                                                                                  X,
                                                                                  " Hide "
                                                                              ))
                                                                            : w("", !0),
                                                                    ]),
                                                                    t(
                                                                        d,
                                                                        {
                                                                            blocks: e.content,
                                                                            serializers: f,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ["blocks"]
                                                                    ),
                                                                ],
                                                                8,
                                                                K
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            s("div", Z, [
                                                t(R, { section: a(_).section }, null, 8, [
                                                    "section",
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                t(h),
                            ]),
                        ])
                    )
                }
            )
        },
    }
export { ds as default }
