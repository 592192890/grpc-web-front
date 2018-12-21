import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {EchoRequest, ServerStreamingEchoRequest, echoService} from './assets/grpc/client';

Vue.config.productionTip = false;
Vue.prototype.$EchoRequest = EchoRequest;
Vue.prototype.$ServerStreamingEchoRequest = ServerStreamingEchoRequest;
Vue.prototype.$echoService = echoService;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
