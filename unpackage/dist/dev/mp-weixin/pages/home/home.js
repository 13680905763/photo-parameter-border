"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (homeBanner + homeTool)();
}
const homeBanner = () => "./cpns/home-banner.js";
const homeTool = () => "./cpns/home-tool.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/photo-parameter-border/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
