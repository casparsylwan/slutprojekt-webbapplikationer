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
      console.log(customer.message);
      console.log(1);
    }
  },
  actions: {
    async newCustomer({commit}, customer){

     // console.log(customer +1);
     // const response = await axios.get('http://localhost:5000/');
      const response = await axios.post('http://localhost:5000/api/register', {...customer});
    //  console.log(response.data)
      commit('registerNewCustomer', response.data)
    // console.log(commit);
     // console.log(resp.data)
    }
  },
  modules: {
  }
})
