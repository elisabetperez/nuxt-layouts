import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "collapsify-client" | "vue3-lottie-client" | "form" | "full" | "lottie-player-client" | "scroll-active" | "sidenav" | "timage" | "tiny-slider-client"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}