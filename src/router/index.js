import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import catalog from '../views/catalog.vue'
import contact from '../views/contact.vue'
import Result from '../views/Result.vue'
import productSheet from '../views/productSheet .vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result/:search',
    name: 'Result',
    component: Result
  },
  {
    path: '/contact/',
    name: 'contact',
    component: contact
  },
  {
    path: '/catalog/',
    name: 'catalog',
    component: catalog
  },
  {
    path: '/product/:id',
    name: 'product',
    component: productSheet
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
