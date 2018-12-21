import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import grpcClient from './assets/grpc/client';

Vue.config.productionTip = false;
Vue.prototype.$grpcClient = grpcClient;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
