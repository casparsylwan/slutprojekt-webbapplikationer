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

      console.log(customer);
      const resp = await axios.get('localhost:5000/');
     // const response = await axios.post('localhost:5000/api/register/', {customer});
     // commit('registerNewCustomer', response.data)
     console.log(commit);
      console.log(resp.data)
    }
  },
  modules: {
  }
})
