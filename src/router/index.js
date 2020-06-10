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
import OrderConfirm from '../views/OrderConfirm.vue';

Vue.use(VueRouter)

function guardLoginRoute(to, from, next){

  // let isAuthenticated= false;
 
   if(!localStorage.getItem('theCustomer')){
     
    next();
     
   }else{
     next('/account')
   }
 }

function guardAdminRoute(to, from, next){

  // let isAuthenticated= false;
 
   if(localStorage.getItem('theCustomer')){
     let clientJson = localStorage.getItem('theCustomer');
     let client = JSON.parse(clientJson);
     if(client.role === 'admin'){
       next();
     }else if(client.role === 'customer'){
       next('/account');
     }else{
       next('/login');
     }
     
   }else{
     next('/login');
   }
 }
 

function guardMyroute(to, from, next){

 // let isAuthenticated= false;

  if(localStorage.getItem('theCustomer')){
    let clientJson = localStorage.getItem('theCustomer');
    let client = JSON.parse(clientJson);
    if(client.role === 'admin'){
      next('/admin');
    }else if(client.role === 'customer'){
      next();
    }else{
      next('/login');
    }
    
  }else{
    next('/login');
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
    beforeEnter : guardMyroute,
    component: Account
  },
  {
    path: '/admin',
    name: 'Admin',
    beforeEnter : guardAdminRoute,
    component: Admin
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter : guardLoginRoute,
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
  },
  {
    path: '/orderconfirm',
    name: 'OrderConfirm',
    component: OrderConfirm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
