"use strict";
const common_vendor = require("../../../common/vendor.js");
const toolPopup = () => "./tool-popup.js";
const toolBtnItem = () => "./tool-btn-item.js";
const _sfc_main = {
  props: ["data"],
  components: {
    toolPopup,
    toolBtnItem
  },
  data() {
    return {
      toolBtns: [{
        label: "参数设置",
        iconType: "gear"
      }, {
        label: "多图导入",
        iconType: "image"
      }, {
        label: "使用说明",
        iconType: "info"
      }, {
        label: "联系作者",
        iconType: "personadd"
      }]
    };
  },
  methods: {
    toggle(type) {
      console.log(type);
      this.$refs.popup.toggle(type);
    },
    handleSingleBtn() {
      console.log(common_vendor.EXIF);
      common_vendor.index.chooseImage({
        count: 1,
        //默认9
        sizeType: ["original", "compressed"],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"],
        //从相册选择
        success: function(res) {
          console.log("图片加载成功");
          common_vendor.EXIF.getData(res.tempFilePaths[0], function() {
            common_vendor.EXIF.getTag(this, "Make");
            common_vendor.EXIF.getTag(this, "Model");
            console.log(this);
          });
        }
      });
    }
  },
  options: {
    virtualHost: true
  }
};
if (!Array) {
  const _component_tool_btn_item = common_vendor.resolveComponent("tool-btn-item");
  const _component_tool_popup = common_vendor.resolveComponent("tool-popup");
  (_component_tool_btn_item + _component_tool_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleSingleBtn && $options.handleSingleBtn(...args)),
    b: common_vendor.f($data.toolBtns, (item, index, i0) => {
      return {
        a: item.label,
        b: "c99b3ac8-0-" + i0,
        c: common_vendor.p({
          label: item.label,
          btnClick: $options.toggle,
          iconType: item.iconType
        })
      };
    }),
    c: common_vendor.sr("popup", "c99b3ac8-1")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/photo-parameter-border/pages/home/cpns/home-tool.vue"]]);
wx.createComponent(Component);
