import uView from "uview-ui";
export default {
  install(Vue) {
    Vue.use(uView);
    uni.$u.setConfig({
      config: {
        unit: "rpx",
      },
      props: {
        radio: {
          size: 15,
        },
      },
    });
  },
};
