// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';

Vue.config.productionTip = false;
Vue.component('clip-loader', ClipLoader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
