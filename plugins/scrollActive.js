// import Vue from "vue";
// import JSUTIL from "@andresclua/jsutil/src/js_helper";
// import { debounce } from "@/utilities/debounce";

// var tfui = new JSUTIL();

// Vue.directive("tf-scroll-active", {
//   inserted(el, binding, vnode) {
//     const restoreClasses = (componentID, activeClass) => {
//       tfui.removeClass(`.${activeClass}`, activeClass);

//       tfui.addClass(`#${componentID}`, activeClass);
//     };
//     window.addEventListener(
//       "scroll",
//       debounce(() => {
//         if (window.scrollY > el.offsetTop - 300) {
//           restoreClasses(binding.value.componentID, binding.value.activeClass);
//         }
//       }),
//       150
//     );
//   },
// });
