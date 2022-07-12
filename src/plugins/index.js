import Vue from "vue";
import uView from "uview-ui";
import store from "@/store";
import api from "@/apis";

Vue.prototype.$store = store;
Vue.prototype.$api = api;

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
