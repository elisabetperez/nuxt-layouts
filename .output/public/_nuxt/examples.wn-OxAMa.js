import {
    a4 as E,
    o as e,
    c as s,
    b as x,
    w as F,
    A as U,
    z as N,
    r as S,
    s as k,
    j as L,
    a as t,
    F as u,
    x as b,
    a0 as $,
    t as h,
    d as v,
    y as w,
    U as T,
    v as I,
    _ as P,
    a5 as C,
} from "./entry.OtO-Wuic.js"
import { _ as A } from "./client-only.uzzD6Ian.js"
import { _ as V } from "./_plugin-vue_export-helper.x3n3nnut.js"
import { _ as y } from "./sanity-content.alFMDKuN.js"
const D = {
    props: ["component", "component_child"],
    computed: {
        ComponentToLoad() {
            return (
                console.log(this.component),
                console.log(this.component_child),
                () =>
                    E(
                        () => import(`./${this.component_child}`),
                        __vite__mapDeps([]),
                        import.meta.url
                    )
            )
        },
    },
}
function O(l, o, n, i, m, _) {
    const r = A
    return (
        e(),
        s("div", null, [x(r, null, { default: F(() => [(e(), N(U(_.ComponentToLoad)))]), _: 1 })])
    )
}
const It = V(D, [["render", O]]),
    z = { class: "c--nav-b" },
    G = { class: "c--nav-b__wrapper" },
    H = t("h3", { class: "c--nav-b__wrapper__title" }, "On this page", -1),
    Y = { class: "c--nav-b__wrapper__list-group" },
    j = ["id"],
    M = ["onClick"],
    R = {
        __name: "NavB",
        props: ["section"],
        setup(l) {
            const o = l,
                n = S(""),
                i = (a) => a.toLowerCase().replace(/\s+/g, "-"),
                m = (a) => {
                    let p = a.split("#")[1]
                    const c = document.getElementById(p)
                    c && window.scrollTo({ top: c.offsetTop + 80 })
                },
                _ = (a) => {
                    n.value = a
                },
                r = (a) => {
                    m("#" + a), _(a)
                }
            k(() => {
                const a = i(o.section[0].title)
                ;(n.value = a), window.addEventListener("scroll", d)
            }),
                L(() => {
                    window.removeEventListener("scroll", d)
                })
            const d = () => {
                const a = window.scrollY
                for (const p of o.section) {
                    const c = i(p.title),
                        g = document.getElementById(c)
                    if (g) {
                        const f = g.offsetTop,
                            B = f + g.clientHeight
                        if (a >= f && a < B) {
                            n.value = c
                            break
                        }
                    }
                }
            }
            return (a, p) => (
                e(),
                s("div", z, [
                    t("div", G, [
                        H,
                        t("ul", Y, [
                            (e(!0),
                            s(
                                u,
                                null,
                                b(
                                    o.section,
                                    (c, g) => (
                                        e(),
                                        s(
                                            "li",
                                            {
                                                key: g,
                                                id: i(c.title),
                                                class: $([
                                                    "c--nav-b__wrapper__list-group__list-item",
                                                    {
                                                        "c--nav-b__wrapper__list-group__list-item--is-active":
                                                            n.value === i(c.title),
                                                    },
                                                ]),
                                            },
                                            [
                                                t(
                                                    "a",
                                                    {
                                                        onClick: (f) => r(i(c.title)),
                                                        class: "c--nav-b__wrapper__list-group__list-item__item",
                                                    },
                                                    h(c.title),
                                                    9,
                                                    M
                                                ),
                                            ],
                                            10,
                                            j
                                        )
                                    )
                                ),
                                128
                            )),
                        ]),
                    ]),
                ])
            )
        },
    },
    Pt = R,
    q = { class: "c--content-a c--content-a--second" },
    J = { class: "c--code-a c--code-a--second" },
    K = t(
        "button",
        { class: "c--code-a__btn" },
        [
            t(
                "svg",
                {
                    width: "21",
                    height: "21",
                    viewBox: "0 0 21 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                },
                [
                    t("rect", {
                        x: "4.96191",
                        y: "1.04639",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                    t("rect", {
                        x: "1.0459",
                        y: "4.96198",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        fill: "#0F0F0F",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                ]
            ),
        ],
        -1
    ),
    Q = { class: "c--code-a__wrapper" },
    W = { class: "c--code-a__wrapper__label" },
    X = { class: "c--code-a__wrapper__content" },
    Z = {
        __name: "codeExample",
        props: ["exampleUsage"],
        setup(l) {
            const o = l
            return (n, i) => (
                e(),
                s("div", q, [
                    t("div", J, [
                        K,
                        t("pre", Q, [
                            v("                            "),
                            t("label", W, h(o.exampleUsage.language), 1),
                            v(`
                            `),
                            t("code", X, h(o.exampleUsage.code), 1),
                            v(`
                        `),
                        ]),
                    ]),
                ])
            )
        },
    },
    At = Z,
    tt = { class: "c--content-a c--content-a--second" },
    et = { class: "c--callout-a" },
    st = t(
        "div",
        {
            class: "c--callout-a__bg-items",
            style: { "background-image": "url('/assets/img/callout.webp')" },
        },
        null,
        -1
    ),
    ot = { class: "c--callout-a__ft-items" },
    at = { class: "c--callout-a__ft-items__title c--content-a c--content-a--second" },
    ct = {
        __name: "notes",
        props: ["notes_block"],
        setup(l) {
            const o = l
            return (n, i) => {
                const m = y
                return (
                    e(),
                    s("div", tt, [
                        t("div", et, [
                            st,
                            t("div", ot, [
                                t("div", at, [
                                    x(m, { class: "test", blocks: o.notes_block }, null, 8, [
                                        "blocks",
                                    ]),
                                ]),
                            ]),
                        ]),
                    ])
                )
            }
        },
    },
    Vt = ct,
    nt = { class: "c--tabs-a" },
    _t = { class: "c--tabs-a__hd" },
    lt = { class: "c--tabs-a__hd__list" },
    it = ["data-tab-control"],
    rt = ["data-tab-content"],
    dt = { key: 0, class: "c--tabs-a__hd__title c--content-a c--content-a--second" },
    pt = t(
        "button",
        { class: "c--code-a__btn" },
        [
            t(
                "svg",
                {
                    width: "21",
                    height: "21",
                    viewBox: "0 0 21 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                },
                [
                    t("rect", {
                        x: "4.96191",
                        y: "1.04639",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                    t("rect", {
                        x: "1.0459",
                        y: "4.96198",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        fill: "#0F0F0F",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                ]
            ),
        ],
        -1
    ),
    ut = { class: "c--code-a__wrapper" },
    ht = { class: "c--code-a__wrapper__label" },
    mt = { class: "c--code-a__wrapper__content" },
    bt = {
        __name: "tabs",
        props: ["tab"],
        setup(l) {
            const o = l,
                { $Collapsify: n } = T()
            return (
                k(() => {
                    n({ nameSpace: "tab", closeOthers: !0, isTab: !0 })
                }),
                (i, m) => {
                    const _ = y
                    return (
                        e(),
                        s("div", nt, [
                            t("div", _t, [
                                t("ul", lt, [
                                    (e(!0),
                                    s(
                                        u,
                                        null,
                                        b(
                                            o.tab,
                                            (r, d) => (
                                                e(),
                                                s(
                                                    "li",
                                                    {
                                                        class: "c--tabs-a__hd__list__list-item",
                                                        key: d,
                                                    },
                                                    [
                                                        t(
                                                            "button",
                                                            {
                                                                class: "c--tabs-a__hd__list__list-item__link",
                                                                type: "button",
                                                                "data-tab-control":
                                                                    "tabContent-0" + d,
                                                                "aria-expanded": "false",
                                                            },
                                                            h(r.tab_title),
                                                            9,
                                                            it
                                                        ),
                                                    ]
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ]),
                            ]),
                            (e(!0),
                            s(
                                u,
                                null,
                                b(
                                    o.tab,
                                    (r, d) => (
                                        e(),
                                        s(
                                            "div",
                                            {
                                                class: "c--tabs-a__bd c--tabs-a__bd--is-active",
                                                key: d,
                                                "data-tab-content": "tabContent-0" + d,
                                                "aria-hidden": "true",
                                            },
                                            [
                                                (e(!0),
                                                s(
                                                    u,
                                                    null,
                                                    b(
                                                        r.tab_content,
                                                        (a, p) => (
                                                            e(),
                                                            s(
                                                                u,
                                                                { key: p },
                                                                [
                                                                    a._type == "block"
                                                                        ? (e(),
                                                                          s("div", dt, [
                                                                              x(
                                                                                  _,
                                                                                  {
                                                                                      class: "test",
                                                                                      blocks: r.tab_content,
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ["blocks"]
                                                                              ),
                                                                          ]))
                                                                        : w("", !0),
                                                                    a._type == "codeExample"
                                                                        ? (e(),
                                                                          s(
                                                                              "div",
                                                                              {
                                                                                  key: 1,
                                                                                  class: $([
                                                                                      "c--code-a",
                                                                                      {
                                                                                          "c--code-a--second":
                                                                                              a
                                                                                                  .exampleUsage
                                                                                                  .language ===
                                                                                              "scss",
                                                                                      },
                                                                                  ]),
                                                                              },
                                                                              [
                                                                                  pt,
                                                                                  t("pre", ut, [
                                                                                      v(
                                                                                          "            "
                                                                                      ),
                                                                                      t(
                                                                                          "label",
                                                                                          ht,
                                                                                          h(
                                                                                              a
                                                                                                  .exampleUsage
                                                                                                  .language
                                                                                          ),
                                                                                          1
                                                                                      ),
                                                                                      v(`
            `),
                                                                                      t(
                                                                                          "code",
                                                                                          mt,
                                                                                          h(
                                                                                              a
                                                                                                  .exampleUsage
                                                                                                  .code
                                                                                          ),
                                                                                          1
                                                                                      ),
                                                                                      v(`
        `),
                                                                                  ]),
                                                                              ],
                                                                              2
                                                                          ))
                                                                        : w("", !0),
                                                                ],
                                                                64
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ],
                                            8,
                                            rt
                                        )
                                    )
                                ),
                                128
                            )),
                        ])
                    )
                }
            )
        },
    },
    Dt = bt,
    vt = { class: "c--content-a c--content-a--second" },
    gt = ["href"],
    wt = {
        __name: "variables",
        props: ["related_variables"],
        setup(l) {
            const o = l
            return (n, i) => (
                e(),
                s("div", vt, [
                    (e(!0),
                    s(
                        u,
                        null,
                        b(
                            o.related_variables,
                            (m, _) => (
                                e(),
                                s(
                                    u,
                                    { key: _ },
                                    [
                                        t("h2", null, h(m.title), 1),
                                        t("ul", null, [
                                            (e(!0),
                                            s(
                                                u,
                                                null,
                                                b(
                                                    m.properties,
                                                    (r, d) => (
                                                        e(),
                                                        s("li", { key: d }, [
                                                            t(
                                                                "a",
                                                                {
                                                                    href: ("useGetThePermalink" in n
                                                                        ? n.useGetThePermalink
                                                                        : I(P))(r.link),
                                                                },
                                                                h(r.title),
                                                                9,
                                                                gt
                                                            ),
                                                        ])
                                                    )
                                                ),
                                                128
                                            )),
                                        ]),
                                    ],
                                    64
                                )
                            )
                        ),
                        128
                    )),
                ])
            )
        },
    },
    Ot = wt,
    xt = ["id"],
    ft = { class: "c--tabs-a__hd" },
    kt = { class: "c--tabs-a__hd__title" },
    $t = { class: "c--tabs-a__hd__list" },
    yt = { key: 0, class: "c--tabs-a__hd__title c--content-a c--content-a--second" },
    Ct = t(
        "button",
        { class: "c--code-a__btn" },
        [
            t(
                "svg",
                {
                    width: "21",
                    height: "21",
                    viewBox: "0 0 21 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                },
                [
                    t("rect", {
                        x: "4.96191",
                        y: "1.04639",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                    t("rect", {
                        x: "1.0459",
                        y: "4.96198",
                        width: "14.3573",
                        height: "14.3573",
                        rx: "1.84107",
                        fill: "#0F0F0F",
                        stroke: "#429ed6",
                        "stroke-width": "1.5",
                    }),
                ]
            ),
        ],
        -1
    ),
    Tt = { class: "c--code-a__wrapper" },
    Bt = { class: "c--code-a__wrapper__label" },
    Et = { class: "c--code-a__wrapper__content" },
    Ft = {
        __name: "examples",
        props: ["examples_title", "examples", "_id"],
        setup(l) {
            const o = l,
                { $Collapsify: n } = T(),
                i = (_) => `data-${_}-content`,
                m = (_) => `data-${_}-control`
            return (
                k(() => {
                    n({ nameSpace: o._id, closeOthers: !0, isTab: !0 })
                }),
                (_, r) => {
                    const d = y
                    return (
                        e(),
                        s(
                            "div",
                            { class: "c--tabs-a f--sp-c", id: o.examples_id },
                            [
                                t("div", ft, [
                                    t("p", kt, h(o.examples_title), 1),
                                    t("ul", $t, [
                                        (e(!0),
                                        s(
                                            u,
                                            null,
                                            b(
                                                o.examples,
                                                (a, p) => (
                                                    e(),
                                                    s(
                                                        "li",
                                                        {
                                                            class: "c--tabs-a__hd__list__list-item",
                                                            key: p,
                                                        },
                                                        [
                                                            t(
                                                                "button",
                                                                C({
                                                                    class: "c--tabs-a__hd__list__list-item__link",
                                                                    type: "button",
                                                                    [m(o._id) || ""]:
                                                                        "tabContent-" + o._id + p,
                                                                    "aria-expanded": "false",
                                                                }),
                                                                h(a.example_title),
                                                                17
                                                            ),
                                                        ]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                ]),
                                (e(!0),
                                s(
                                    u,
                                    null,
                                    b(
                                        o.examples,
                                        (a, p) => (
                                            e(),
                                            s(
                                                "div",
                                                C({
                                                    class: "c--tabs-a__bd c--tabs-a__bd--is-active",
                                                    key: p,
                                                    [i(o._id) || ""]: "tabContent-" + o._id + p,
                                                    "aria-hidden": "true",
                                                }),
                                                [
                                                    (e(!0),
                                                    s(
                                                        u,
                                                        null,
                                                        b(
                                                            a.example_content,
                                                            (c, g) => (
                                                                e(),
                                                                s(
                                                                    u,
                                                                    { key: g },
                                                                    [
                                                                        c._type == "block"
                                                                            ? (e(),
                                                                              s("div", yt, [
                                                                                  x(
                                                                                      d,
                                                                                      {
                                                                                          class: "test",
                                                                                          blocks: _
                                                                                              .tab
                                                                                              .example_content,
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      ["blocks"]
                                                                                  ),
                                                                              ]))
                                                                            : w("", !0),
                                                                        c._type == "codeExample"
                                                                            ? (e(),
                                                                              s(
                                                                                  "div",
                                                                                  {
                                                                                      key: 1,
                                                                                      class: $([
                                                                                          "c--code-a",
                                                                                          {
                                                                                              "c--code-a--second":
                                                                                                  c
                                                                                                      .exampleUsage
                                                                                                      .language ===
                                                                                                  "scss",
                                                                                          },
                                                                                      ]),
                                                                                  },
                                                                                  [
                                                                                      Ct,
                                                                                      t("pre", Tt, [
                                                                                          v(
                                                                                              "            "
                                                                                          ),
                                                                                          t(
                                                                                              "label",
                                                                                              Bt,
                                                                                              h(
                                                                                                  c
                                                                                                      .exampleUsage
                                                                                                      .language
                                                                                              ),
                                                                                              1
                                                                                          ),
                                                                                          v(`
            `),
                                                                                          t(
                                                                                              "code",
                                                                                              Et,
                                                                                              h(
                                                                                                  c
                                                                                                      .exampleUsage
                                                                                                      .code
                                                                                              ),
                                                                                              1
                                                                                          ),
                                                                                          v(`
        `),
                                                                                      ]),
                                                                                  ],
                                                                                  2
                                                                              ))
                                                                            : w("", !0),
                                                                    ],
                                                                    64
                                                                )
                                                            )
                                                        ),
                                                        128
                                                    )),
                                                ],
                                                16
                                            )
                                        )
                                    ),
                                    128
                                )),
                            ],
                            8,
                            xt
                        )
                    )
                }
            )
        },
    },
    zt = Ft
export { Pt as N, At as c, zt as e, It as i, Vt as n, Dt as t, Ot as v }
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = []
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
