import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import vSelect from "vue-select";
import BootstrapVue from "bootstrap-vue";

Vue.component("v-select", vSelect);

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
