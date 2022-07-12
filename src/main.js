import Vue from "vue";
import App from "./App";
import plugin from "@/plugins";

plugin.install(Vue);

Vue.config.productionTip = true;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
