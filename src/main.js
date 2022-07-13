import Vue from "vue";
import App from "./App";

// vuex
import store from "./store";
Vue.prototype.$store = store;

import { router, RouterMount } from "./router";
Vue.use(router);

Vue.config.productionTip = true;

App.mpType = "app";

// 引入全局uView
import uView from "uview-ui";
Vue.use(uView);
import "./configs/uview.config";

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require("uview-ui/libs/mixin/mpShare.js");
Vue.mixin(mpShare);
// #endif

// 全局混入
import mixin from "./common/mixin.js";
Vue.mixin(mixin);

const app = new Vue({
  store,
  ...App,
});

// #ifdef H5
RouterMount(app, router, "#app");
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
