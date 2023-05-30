import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import axios from 'axios'
import VueAxios from 'vue-axios'

//url del backend recuerda quitar cualquier pleca del final / quitarla
//axios.defaults.baseURL= process.env.BACKEND || "https://backend.alexandercalderon.me"
//axios.defaults.baseURL= process.env.BACKEND || "http://backend.io"
axios.defaults.baseURL= process.env.BACKEND || "http://alexandercalderon.online"


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
