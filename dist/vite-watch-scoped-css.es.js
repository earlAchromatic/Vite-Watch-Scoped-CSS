import { openBlock, createElementBlock, renderSlot, pushScopeId, popScopeId, createElementVNode } from "vue";
var component_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\nsection[data-v-7d5df1d0] {\n      background-color: greenyellow;\n      height: 100vh;\n      width: 100vw;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _withScopeId = (n) => (pushScopeId("data-v-7d5df1d0"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h2", null, "sample text", -1));
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("section", null, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _hoisted_1
  ]);
}
var component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d5df1d0"]]);
export { component as default };
