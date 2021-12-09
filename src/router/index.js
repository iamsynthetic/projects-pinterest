import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Focus from '@/views/FocusCard'
 
Vue.use(VueRouter)
 
const routes = [
 {
   path: '/',
   component: Home,
 },
 {
   path: '/:id',
   component: Focus,
 }
]
 
const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})
 
export default router