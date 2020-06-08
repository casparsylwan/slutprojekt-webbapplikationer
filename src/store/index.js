import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
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
      // console.log(payload)
      state.products = []
      for(let i=0; i<payload.length; i++)
      {
      //  console.log(payload[i].title)
        payload[i].price = Number(payload[i].price)
        state.products.push(payload[i])
      }
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
      // console.log(customer);
      // console.log(customer.message);
      // console.log(1);
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
    
      commit('loginMutation', response.data)
    
    },
    async getCustomerOrder({commit}){

      const response = await axios.get('http://localhost:5000/api/orders',{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      commit('getCustomerOrder', response.data)
    },
    //Products start here
    async addProduct({commit, dispatch}, product){

      const response = await axios.post('http://localhost:5000/api/products/',{...product},{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      commit('addProducts', response.data)
      if(response.status == 200){
        
        dispatch("loadProducts");
        
      }
    },
    async updateProduct({commit, dispatch}, product, id){
      console.log(product)
      const response = await axios.patch(`http://localhost:5000/api/products/:${id}`,{...product},{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      commit('addProducts', response.data)
      if(response.status == 200){
        
        dispatch("loadProducts");
        
      }
    },

    async loadProducts({commit}){
      console.log("Products loaded!")
      const response = await axios.get("http://localhost:5000/api/products/");
      
      commit('setProducts', response.data)
    // await axios
    //    .get("http://localhost:5000/api/products/")
    //    .then(respone => {
    //      let products = respone.data
    //      console.log(products)
    //      commit('setProducts', products)
    //    })
    //    .catch( error => {
    //      console.log(error)
    //    })
    },
    
    async deleteProduct({dispatch }, id){

      const response = await axios.delete(`http://localhost:5000/api/products/:${id}`,{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
      console.log(response.data)
      if(response.status == 200){
        
        dispatch("loadProducts");
        
      }
    }

  },
  getters:{

    getClient(state){
      return state.localCustomer;
    },
    getProducts(state){
      return state.products;
    },
    //,
    // getOrder(state){
      
      
    // }
  },
  modules: {
  }
})
