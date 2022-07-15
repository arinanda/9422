import VueFab from 'vue-float-action-button'
import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Families from './Families.vue'
import Friends from './Friends.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import firebase from 'firebase/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueFab)
Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.component('Divider', Divider)
Vue.component('Button', Button)

// const NotFound = { template: '<p>Page not found</p>' }

const routes = [
  { path: "/", component: App, props: (route) => ({ name: route.query.name }) },
  { path: "/families", component: Families },
  { path: "/friends", component: Friends },
];

// const routes = {
//   '/': App,
//   '/families': Families,
//   '/friends': Friends
// };

const router = new VueRouter({
  routes
});

// use your firebase info
var firebaseConfig = {
  apiKey: 'Use your api key',
  authDomain: 'carepass-test.firebaseapp.com',
  databaseURL: 'https://carepass-test.firebaseio.com',
  projectId: 'carepass-test',
  storageBucket: 'carepass-test.appspot.com',
  messagingSenderId: '{Use your messagingSenderId}',
  appId: '{Use your appId}',
}
firebase.initializeApp(firebaseConfig)

new AOS.init()

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
