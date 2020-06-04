import Vue from 'vue'
import VueRouter from 'vue-router'
import Anonymous from "../views/Anonymous.vue";
import Account from "../views/Account.vue"
import Admin from "../views/Admin.vue"
import Shop from '../views/Shop.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Anonymous',
    component: Anonymous
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
