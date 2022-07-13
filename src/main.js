import Vue from "vue";
import App from "./App";

import mixin from "./common/mixin.js";

// vuex
import store from "./store";
Vue.prototype.$store = store;

Vue.config.productionTip = true;

App.mpType = "app";

// 引入全局uView
import uView from "uview-ui";
Vue.use(uView);

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require("uview-ui/libs/mixin/mpShare.js");
Vue.mixin(mpShare);
// #endif

Vue.mixin(mixin);

const app = new Vue({
  ...App,
});
app.$mount();
