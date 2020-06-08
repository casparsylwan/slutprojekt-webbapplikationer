import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    productsTemp: [{item:{"title":"Wave","price":249,"shortDesc":"Medium","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-wave.png","serial":"9919291231232312","_id":"xqHNXRHKL3Mwte0R"}, amount:0, sum:0
  }],
    productSum: 0,
    token:'',
    customer:{
       name: '',
      email: '',
      password: '',
      repeatPassword: '',
     
      adress: {
         street: '',
         city: '',
         zip: ''
      }
   },
   localCustomer :{
    name: '',
    email: '',
    role:'',
    adress: {
      street: '',
      city: '',
      zip: ''
   }

   }   
  },
  mutations: {
    

    setProducts(state, payload){
      state.products = payload 
    },

    incrementAmountAndSum(state, payload) {
      
      state.productSum += payload.item.price;
      payload.amount++;
    },

    decrementAmountAndSum(state, payload) {
      state.productSum -= payload.item.price;
      payload.amount--;
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


    getProducts(state) {
      return state.productsTemp;
    },

    getProductSum(state) {
      return state.productSum;
    },
    

  },
  
  modules: {
  }
})
