import { a as useSupabaseClient } from '../server.mjs';
import { defineComponent, reactive, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      success: "",
      error: "",
      email: "",
      errorMessage: "",
      loading: false,
      inputError: false
    });
    useSupabaseClient();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroup = resolveComponent("FormGroup");
      const _component_Label = resolveComponent("Label");
      const _component_TextField = resolveComponent("TextField");
      const _component_ErrorAndHint = resolveComponent("ErrorAndHint");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "f--container" }, _attrs))}><div class="f--row"><div class="f--col-12"><h2 class="f--font-a">Reset Password</h2><h3>You&#39;ll receive an email to recover your password.</h3></div><div class="f--col-6">`);
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
              modelValue: state.email,
              "onUpdate:modelValue": ($event) => state.email = $event,
              id: "email",
              inputClass: "c--form-input-a",
              placeholder: "Email",
              error: state.inputError
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ErrorAndHint, {
              errorMessage: state.errorMessage,
              errorClass: "c--form-error-a",
              hintMessage: false,
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
                modelValue: state.email,
                "onUpdate:modelValue": ($event) => state.email = $event,
                id: "email",
                inputClass: "c--form-input-a",
                placeholder: "Email",
                error: state.inputError
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
              createVNode(_component_ErrorAndHint, {
                errorMessage: state.errorMessage,
                errorClass: "c--form-error-a",
                hintMessage: false,
                hintClass: "c--form-hint-a"
              }, null, 8, ["errorMessage"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (state.error) {
        _push(`<div class="c--form-error-a">${state.error}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (state.success) {
        _push(`<div class="c--form-success-a">${state.success}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="c--btn-a c--btn-a--second"${ssrIncludeBooleanAttr(state.loading) ? " disabled" : ""}>${ssrInterpolate(state.loading ? "Loading" : "Send")}</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-MJoMovXv.mjs.map
