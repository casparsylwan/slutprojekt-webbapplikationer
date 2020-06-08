import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload 
    }
  
  },
  actions: {
   async loadProducts({commit}){
      console.log("Products loaded!")
    await axios
       .get("http://localhost:5000/api/products/")
       .then(respone => {
         let products = respone.data
         console.log(products)
         commit('setProducts', products)
       })
       .catch( error => {
         console.log(error)
       })
    },
    // addToCart({ commit }, product){
    //   commit(types.ADD_TO_CART, {
    //     id: product.id
    //   })
    // }
  },   
  modules: {
  }
})
