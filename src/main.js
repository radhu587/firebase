// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyApR7t7dsK4Yka-xxzsJV6Rud5tRfrrxiM",
  authDomain: "newdemo1-52d8e.firebaseapp.com",
  databaseURL: "https://newdemo1-52d8e.firebaseio.com",
  projectId: "newdemo1-52d8e",
  storageBucket: "newdemo1-52d8e.appspot.com",
  messagingSenderId: "671851657666"
};

firebase.initializeApp(config);

window.firebase=firebase;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
