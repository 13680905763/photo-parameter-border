"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: ["data"],
  data() {
    return {};
  },
  options: {
    virtualHost: true
  }
};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "info",
      size: "30"
    }),
    b: common_vendor.p({
      type: "info",
      size: "30"
    }),
    c: common_vendor.p({
      type: "info",
      size: "30"
    }),
    d: common_vendor.p({
      type: "info",
      size: "30"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/photo-parameter-border/pages/home/cpns/home-tool.vue"]]);
wx.createComponent(Component);
