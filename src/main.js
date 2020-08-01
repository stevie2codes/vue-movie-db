import Vue from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import router from "./routes";
import feather from "vue-icon";
Vue.config.productionTip = false;
Vue.use(feather, "v-icon");
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
