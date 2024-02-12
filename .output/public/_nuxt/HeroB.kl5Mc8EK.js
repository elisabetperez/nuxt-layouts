import { _ as c } from "./sanity-content.alFMDKuN.js"
import { o as a, c as n, a as o, t as _, b as i, a8 as l } from "./entry.OtO-Wuic.js"
const r = { class: "c--hero-b" },
    d = { class: "f--container" },
    m = { class: "f--row" },
    f = { class: "f--col-6 u--display-flex" },
    h = { class: "c--hero-b__wrapper" },
    p = { class: "c--hero-b__wrapper__title" },
    u = { class: "c--content-a c--content-a--second" },
    b = { class: "f--col-5 f--offset-1 u--display-flex u--align-items-flex-end" },
    v = { class: "c--hero-b__media-wrapper" },
    y = ["src", "alt"],
    g = {
        __name: "HeroB",
        props: ["info"],
        setup(s) {
            return (e, x) => {
                const t = c
                return (
                    a(),
                    n("div", r, [
                        o("div", d, [
                            o("div", m, [
                                o("div", f, [
                                    o("div", h, [
                                        o("h1", p, _(s.info.title), 1),
                                        o("div", u, [
                                            i(
                                                t,
                                                {
                                                    class: "test",
                                                    blocks: s.info.layout_components.hero_slot,
                                                },
                                                null,
                                                8,
                                                ["blocks"]
                                            ),
                                        ]),
                                        l(e.$slots, "default"),
                                    ]),
                                ]),
                                o("div", b, [
                                    o("div", v, [
                                        o(
                                            "img",
                                            {
                                                src: s.info.layout_components.hero_image.url,
                                                alt: s.info.layout_components.hero_image.file_name,
                                                class: "c--hero-b__media-wrapper__media g--lazy-01",
                                            },
                                            null,
                                            8,
                                            y
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ])
                )
            }
        },
    },
    B = g
export { B as _ }
