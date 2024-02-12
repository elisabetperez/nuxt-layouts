import { horizontalLoop } from "@andresclua/infinite-marquee-gsap"
import gsap from "gsap"

class MarqueeB {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
        }

        this.reversed =
            payload.reversed === undefined ||
            payload.reversed === null ||
            payload.reversed === "left"
                ? false
                : payload.reversed
        this.speed = payload.speed === undefined ? 1 : payload.speed
        this.init()
        this.events()
    }
    events() {}
    init() {
        this.loop = horizontalLoop(this.DOM.element.children, {
            paused: false,
            repeat: -1,
            reversed: this.reversed,
            speed: this.speed,
        })
    }
    destroy() {
        this.speed = null
        this.loop.clear()
    }

    pause() {
        gsap.to(this.loop, { timeScale: 0, overwrite: true })
    }
    play() {
        gsap.to(this.loop, { timeScale: 1, overwrite: true })
    }
}
export default MarqueeB
