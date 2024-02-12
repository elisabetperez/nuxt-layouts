//@ts-ignore
import Collapsify from "@terrahq/collapsify"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            Collapsify: (payload) => {
                return new Collapsify(payload)
            },
        },
    }
})
