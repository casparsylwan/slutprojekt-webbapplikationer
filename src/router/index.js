import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Home from '../views/Home';
import About from '../views/About';
import Profile from '../views/Profile';
import Shop from '../views/Shop.vue';
import Cart from '../views/Cart.vue';
import Admin from "../views/Admin.vue";
import Anonymous from "../views/Anonymous.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter)


function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('theCustomer'))
  isAuthenticated = true;
 else
  isAuthenticated= false; if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

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
    beforeEnter : guardMyroute,
    component: Profile
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  , 
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
