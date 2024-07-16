import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/app.css";
import App from "./App.vue";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
