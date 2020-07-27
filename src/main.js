import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { abilitiesPlugin } from "@casl/vue";
import { abilities } from "@/services/user-management";

Vue.config.productionTip = false;

Vue.use(abilitiesPlugin, abilities);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
