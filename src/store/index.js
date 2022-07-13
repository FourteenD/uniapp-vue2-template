import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import { importModules } from "@/utils";
Vue.use(Vuex);
const modules = importModules("./modules", /\.js$/);
const store = new Vuex.Store({ modules, getters });
export default store;
