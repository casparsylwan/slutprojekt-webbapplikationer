import Vue from 'vue'
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Home from '../views/Home';
import About from '../views/About';
import Profile from '../views/Profile';
import Shop from '../views/Shop.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
  ,
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
