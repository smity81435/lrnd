import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css'; 

Vue.config.productionTip = false
Vue.use(Snotify);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

