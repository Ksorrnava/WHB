import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueMeta from 'vue-meta'
import VueAgile from 'vue-agile'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/site.scss';

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.use(VueLodash, {lodash: lodash })
Vue.use(VueMeta)
Vue.use(VueAgile)
Vue.config.productionTip = false;

Vue.filter('capitalize', function (string) {
          var capitalFirst = string.charAt(0).toUpperCase()
          var noCaseTail = string.slice(1, string.length)
            return capitalFirst + noCaseTail
        })
Vue.filter('truncate', function(text, length, clamp){
            clamp = clamp || '...';
            var node = document.createElement('div');
            node.innerHTML = text;
            var content = node.textContent;
            return content.length > length ? content.slice(0, length) + clamp : content;
});
Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
