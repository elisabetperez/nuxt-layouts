import { horizontalLoop } from "@andresclua/infinite-marquee-gsap"

class MarqueeA {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
        }
        this.init()
    }
    init() {
        if (process.client) {
            if (this.DOM.element) {
                this.loop = horizontalLoop(this.DOM.element, { paused: false, repeat: -1 })
            }
        }
    }
    destroy() {
        if (process.client) {
            this.loop.clear()
        }
    }
}
export default MarqueeA
