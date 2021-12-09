import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import Vuetify from 'vuetify'
import VueAnime from 'vue-animejs';
import 'vuetify/dist/vuetify.min.css'
import { store } from "./store/index.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell)
library.add(faCommentDots)
library.add(faAngleDown)
library.add(faUser)
library.add(faEllipsisH)
library.add(faUpload)
library.add(faLink)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Importing the global css file
import "@/assets/css/global.css"

Vue.use(VueAnime)
Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
