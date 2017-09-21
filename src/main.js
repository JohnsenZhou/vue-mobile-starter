// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import MuseUI from 'muse-ui';
import VueLazyload from 'vue-lazyload';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-light.css'
import App from './App';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/common.css';

Vue.config.productionTip = false;
Vue.component('clip-loader', ClipLoader);
// 引入museUI && lazyload
Vue.use(MuseUI);
Vue.use(VueLazyload, {
  loading: 'static/load.gif'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
