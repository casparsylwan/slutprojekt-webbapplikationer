import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
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

   },
   products: []
  },
  mutations: {

    setProducts(state, payload){
      console.log(payload)
      state.products = payload 
    },

    initialiseStore(state) {

      if(localStorage.getItem('theCustomer')) {
        let clientJson = localStorage.getItem('theCustomer');
        let client = JSON.parse(clientJson)
        state.localCustomer.name = client.name 
        state.localCustomer.email = client.email
        state.localCustomer.role = client.role
        state.localCustomer.token = client.token;
        

      }
    },


/*stop*/
    registerNewCustomer(state, customer){
      state.customer.name = customer.name;
      state.customer.email = customer.email;
      state.customer.password = customer.password;
      state.customer.repeatPassword = customer.repeatPassword;
      console.log(customer);
      console.log(customer.message);
      console.log(1);
    //  console.log(state)
      
      
    },
    loginMutation(state, customer){
    //  console.log(customer)
      state.localCustomer.name = customer.user.name;
      state.localCustomer.email = customer.user.email;
      state.localCustomer.role = customer.user.role;      
      state.localCustomer.token = customer.token;

    //  console.log(state.localCustomer)
      localStorage.setItem('theCustomer', JSON.stringify(state.localCustomer ));
      
      
    },
    getCustomerOrder(state, orders){
      console.log(state.customer);
      console.log(orders);
    },
    addProducts(state, product){
      console.log(state)
      console.log(product)
    }
  },
  actions: {
    async newCustomer({commit , dispatch}, customer){

      const response = await axios.post('http://localhost:5000/api/register', {...customer});
      commit('registerNewCustomer', response.data)
      if(response.status == 200){
        dispatch("loginCall", customer);
        
      }
    
      
    
    },
    async loginCall({commit}, id){
      
      const response = await axios.post('http://localhost:5000/api/auth/', {...id});
    //  console.log(response)
      commit('loginMutation', response.data)
    //  return response.status
    },
    async getCustomerOrder({commit}){

      const response = await axios.get('http://localhost:5000/api/orders',{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      commit('getCustomerOrder', response.data)
    },
    //Products start here
    async addProduct({commit}, product){

      const response = await axios.post('http://localhost:5000/api/products/',{...product},{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      commit('addProducts', response.data)
    },

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
  getters:{

    getClient(state){
      return state.localCustomer;
    }
    //,
    // getOrder(state){
      
      
    // }
  },
  modules: {
  }
})
