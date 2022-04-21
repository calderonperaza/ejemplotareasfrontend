import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Al correr en contenedor usara la variable de entorno backend
//Para referir el service name
axios.defaults.baseURL= process.env.BACKEND || "http://192.168.59.103:30000"


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
