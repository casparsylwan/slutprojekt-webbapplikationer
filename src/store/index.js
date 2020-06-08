import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    productSum: 0,
    
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload 
    },

    incrementProductAmount(state, payload) {
      let obj = state.products.filter(product => product._id == payload.id)[0];
      obj.amount++;
      state.productSum += payload.price;
    },

    decrementProductAmount(state, payload) {
      let obj = state.products.filter(product => product._id == payload.id)[0];
      obj.amount--;
      state.productSum -= payload.price;
    },


  
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
    }
  },  

  getters: {
    getProductSum(state) {
      state.products.forEach(product => {
        state.productSum += product.price;
      })
      return state.productSum;
    },

    getProducts(state) {
      return state.products;
    }
  },
  
  modules: {
  }
})
