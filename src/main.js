import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
//import 'bootstrap/dist/css/bootstrap.css'
import JQuery from 'jquery'
import 'va/lib/css'
import 'va/lib/script'
import vueRouter from 'vue-router'

global.JQuery = JQuery
global.$ = JQuery
//let bootstrap = require('bootstrap')

Vue.use(VueSweetalert2);
Vue.use(vueRouter);


new Vue({
  el: '#app',
  render: h => h(App)
})
