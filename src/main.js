import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAe7vjpOOdlG-fN4K-RoVMC5jscC1b4fRs",
  authDomain: "calendar-vue-eaa73.firebaseapp.com",
  databaseURL: "https://calendar-vue-eaa73.firebaseio.com",
  projectId: "calendar-vue-eaa73",
  storageBucket: "calendar-vue-eaa73.appspot.com",
  messagingSenderId: "564272992393",
  appId: "1:564272992393:web:fa8b7fac71c4889705f658"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
