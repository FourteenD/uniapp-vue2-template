import uView from "uview-ui";
import store from "@/store";

export default {
  install(Vue) {
    Vue.use(uView);
    Vue.prototype.$store = store;
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
