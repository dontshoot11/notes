import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import notes from "./modules/notes";

export const store = new Vuex.Store({
  modules: { notes }
});
