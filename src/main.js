import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import { Loading } from 'vant';

Vue.use(Loading);



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
