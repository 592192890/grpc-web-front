import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {EchoRequest, ServerStreamingEchoRequest, echoService} from './assets/grpc/client';

Vue.config.productionTip = false;
Vue.prototype.$EchoRequest = EchoRequest;
Vue.prototype.$ServerStreamingEchoRequest = ServerStreamingEchoRequest;
Vue.prototype.$echoService = echoService;

import axios from 'axios';
axios.defaults.headers.post['custom-header-1']="value1";
// axios.defaults.headers.post['content-type']="application/grpc-web-text+proto";
Vue.prototype.$ajax= axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
