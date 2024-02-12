import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class ZoomScroll {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
            trigger: payload.element.querySelectorAll(".c--media-a"),
        }
        if (this.DOM.trigger && this.DOM.element) {
            this.init()
        }
    }
    init() {
        this.tl = gsap.to(this.DOM.element, {
            duration: 1,
            scale: 1,
            scrollTrigger: {
                trigger: this.DOM.element,
                start: "top 90%",
                end: "bottom 50%",
                scrub: 1,
            },
        })
    }
    destroy() {
        this.tl.scrollTrigger.kill()
    }
}

export default ZoomScroll
