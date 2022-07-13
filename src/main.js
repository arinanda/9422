import VueFab from 'vue-float-action-button'
import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import firebase from 'firebase/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
// import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false

Vue.use(VueFab)
Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.component('Divider', Divider)
Vue.component('Button', Button)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyA-cxfOklj9T0C1fJmG7lLOSdhhDv2CEp8",
//     libraries: "places"
//   }
// });

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
}).$mount('#app')
