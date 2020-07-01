import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import { Loading } from 'vant';
import router from "./router"


Vue.use(Loading);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
