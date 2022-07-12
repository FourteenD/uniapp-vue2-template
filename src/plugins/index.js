import uView from "uview-ui";
import store from "@/store";

export default {
  install(Vue) {
    Vue.prototype.$store = store;
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
