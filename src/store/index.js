import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customer:{
      email: '',
      password: '',
      repeatPassword: '',
      name: '',
      adress: {
         street: '',
         city: '',
         zip: ''
      }
   }
  },
  mutations: {
    registerNewCustomer(state, customer){
      state.customer.name = customer.name;
      console.log(customer);
    }
  },
  actions: {
    async newCustomer({commit}, customer){

      const response = await axios.post('/localhost:5000/api/register/', {customer});
      commit('newCustomer', response.data)
      commit('registerNewCustomer', response.data)
      console.log(response.data)
    }
  },
  modules: {
  }
})
