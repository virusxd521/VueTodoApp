import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css';
import VueI18n from 'vue-i18n';
import VueCompositionApi from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia'


// Pinia - State management
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

// Language changer
Vue.use(VueI18n);
// Composition API
Vue.use(VueCompositionApi);
const i18n = new VueI18n();



Vue.config.productionTip = false;
new Vue({
  pinia,
  i18n,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


