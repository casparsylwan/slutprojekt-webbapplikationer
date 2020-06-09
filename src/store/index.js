import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    productsTemp: [{item:{"title":"Wave","price":249,"shortDesc":"Medium","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-wave.png","serial":"9919291231232312","_id":"xqHNXRHKL3Mwte0R"},  quantity:0
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

   },   
    cart: [],
  },
  mutations: {

    // addToCart(state,payload){

    // },

    setProducts(state, payload){
      state.products = []
      for(let i=0; i<payload.length; i++)
      {
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
    },

    incrementAmountAndSum(state, payload) {
      
      state.productSum += payload.item.price;
      payload.quantity++;
    },

    decrementAmountAndSum(state, payload) {
      state.productSum -= payload.item.price;
      payload.quantity--;
    },
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
    async updateProduct({commit, dispatch}, product){
      
      console.log("ID!====", product._id)
      const response = await axios.patch(`http://localhost:5000/api/products/${product._id}`,{...product},{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
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

      const response = await axios.delete(`http://localhost:5000/api/products/${id}`,{ headers: {"Authorization" : `Bearer ${this.state.localCustomer.token}`}});
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
    getTempProducts(state) {
      return state.productsTemp;
    },

    getProductSum(state) {
      return state.productSum;
    },
    getCart(state){
      return state.cart
    },

    getCartItems(state){
      return state.cart.map(item => 
        ({
          item: state.products.find(product => item.id == product._id),
          quantity: item.quantity
        })
      )
    },
  }, 

  

  modules: {
  }
})
