//@ts-ignore 
import { tns } from './../node_modules/tiny-slider/src/tiny-slider'

export default defineNuxtPlugin(() => {
  return {
    provide: {
        tns: (payload) => { return new tns(payload)}
    }
  }
})

