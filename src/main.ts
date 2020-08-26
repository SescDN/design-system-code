import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VuePrism from "vue-prism";
import "prismjs/themes/prism-okaidia.css"
import VueGoogleCharts from "vue-google-charts";

Vue.use(VuePrism);

Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
