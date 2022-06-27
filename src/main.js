import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
