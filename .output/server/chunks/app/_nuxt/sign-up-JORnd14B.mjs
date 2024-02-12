import { _ as __nuxt_component_0 } from './nuxt-link-qrgkPLYk.mjs';
import { defineComponent, reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { a as useSupabaseClient } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import '@terrahq/vue-form';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const createUser = reactive({
      email: "",
      password: ""
    });
    const state = reactive({
      loading: false,
      success: "",
      error: "",
      errorMessage: "",
      hintMessage: "",
      inputError: false,
      errorPasswordMessage: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroup = resolveComponent("FormGroup");
      const _component_Label = resolveComponent("Label");
      const _component_TextField = resolveComponent("TextField");
      const _component_ErrorAndHint = resolveComponent("ErrorAndHint");
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "f--container" }, _attrs))}><div class="f--row"><div class="f--col-12"><h2 class="f--font-a">Sign up</h2></div><div class="f--col-6"><form>`);
      _push(ssrRenderComponent(_component_FormGroup, { formClass: "c--form-group-a" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Label, {
              forId: "email",
              labelClass: "c--form-label-a",
              textLabel: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TextField, {
              type: "text",
              modelValue: unref(createUser).email,
              "onUpdate:modelValue": ($event) => unref(createUser).email = $event,
              id: "email",
              inputClass: "c--form-input-a",
              placeholder: "Email",
              error: unref(state).inputError
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ErrorAndHint, {
              errorMessage: unref(state).errorMessage,
              errorClass: "c--form-error-a",
              hintMessage: unref(state).hintMessage,
              hintClass: "c--form-hint-a"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Label, {
                forId: "email",
                labelClass: "c--form-label-a",
                textLabel: ""
              }),
              createVNode(_component_TextField, {
                type: "text",
                modelValue: unref(createUser).email,
                "onUpdate:modelValue": ($event) => unref(createUser).email = $event,
                id: "email",
                inputClass: "c--form-input-a",
                placeholder: "Email",
                error: unref(state).inputError
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
              createVNode(_component_ErrorAndHint, {
                errorMessage: unref(state).errorMessage,
                errorClass: "c--form-error-a",
                hintMessage: unref(state).hintMessage,
                hintClass: "c--form-hint-a"
              }, null, 8, ["errorMessage", "hintMessage"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormGroup, { formClass: "c--form-group-a" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Label, {
              forId: "password",
              labelClass: "c--form-label-a",
              textLabel: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TextField, {
              type: "password",
              modelValue: unref(createUser).password,
              "onUpdate:modelValue": ($event) => unref(createUser).password = $event,
              id: "password",
              inputClass: "c--form-input-a",
              placeholder: "Password",
              error: unref(state).inputError
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ErrorAndHint, {
              errorMessage: unref(state).errorPasswordMessage,
              errorClass: "c--form-error-a",
              hintMessage: unref(state).hintMessage,
              hintClass: "c--form-hint-a"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Label, {
                forId: "password",
                labelClass: "c--form-label-a",
                textLabel: ""
              }),
              createVNode(_component_TextField, {
                type: "password",
                modelValue: unref(createUser).password,
                "onUpdate:modelValue": ($event) => unref(createUser).password = $event,
                id: "password",
                inputClass: "c--form-input-a",
                placeholder: "Password",
                error: unref(state).inputError
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
              createVNode(_component_ErrorAndHint, {
                errorMessage: unref(state).errorPasswordMessage,
                errorClass: "c--form-error-a",
                hintMessage: unref(state).hintMessage,
                hintClass: "c--form-hint-a"
              }, null, 8, ["errorMessage", "hintMessage"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(state).error) {
        _push(`<div class="c--form-error-a">${unref(state).error}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(state).success) {
        _push(`<div class="c--form-success-a">${unref(state).success}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="c--btn-a">Sign Up</button><hr>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "c--btn-a c--btn-a--second"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`home`);
          } else {
            return [
              createTextVNode("home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-JORnd14B.mjs.map
