import TImage from "@terrahq/timage";
import VueLazyload from "vue-lazyload";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {loading: useGetPlaceholderImage()});
  nuxtApp.vueApp.use(TImage);
});
