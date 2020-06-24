import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueMeta from 'vue-meta'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./assets/css/site.scss";

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.use(VueLodash, {lodash: lodash })
Vue.use(VueMeta)
Vue.config.productionTip = false;

Vue.filter('capitalize', function (string) {
          var capitalFirst = string.charAt(0).toUpperCase()
          var noCaseTail = string.slice(1, string.length)
            return capitalFirst + noCaseTail
        })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
