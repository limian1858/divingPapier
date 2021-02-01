
import Vue from "vue";
import ElementUI from "element-ui";
import vConsole from "vconsole";

import router from "./router";
import i18n from "./i18n/i18n";

import App from "./App";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/less/theme.less";
import "./assets/less/base.less";
import "./assets/less/ui_reset.less";


import vueAwesomeCountdown from "vue-awesome-countdown";

Vue.use(vueAwesomeCountdown, "vac");

Vue.config.devtools = process.env.NODE_ENV !== "production";

if (Vue.config.devtools || process.env.NODE_ENV === "prerelease") {
  new vConsole();
} else {
  Vue.config.productionTip = false;
}


Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router,

  i18n
}).$mount("#app");
