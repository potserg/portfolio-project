import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import $axios from './requests';

store.$axios = $axios;


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});