import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Families from './Families.vue'
import FamiliesAZ from './FamiliesAZ.vue'
import Friends from './Friends.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import firebase from 'firebase/app'
import 'firebase/firestore';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

Vue.config.productionTip = false

Vue.use(VueHead)
Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.component('Divider', Divider)
Vue.component('Button', Button)

const routes = [
  { path: "/families/za", component: Families },
  { path: "/friends", component: Friends },
  { path: "/families/az", component: FamiliesAZ },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

var firebaseConfig = {
  apiKey: "AIzaSyAtyKOVCGuAQtxJILKYp253JbKJptxzNBA",
  authDomain: "zulfadib-6be45.firebaseapp.com",
  databaseURL: "https://zulfadib-6be45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zulfadib-6be45",
  storageBucket: "zulfadib-6be45.appspot.com",
  messagingSenderId: "980713302102",
  appId: "1:980713302102:web:b857e47a1ca90a777173f7",
  measurementId: "G-VCE6X3GBCY"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

new AOS.init()

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')