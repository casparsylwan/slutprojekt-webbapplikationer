<template>
    <section>
        <article class="cart">
            <h1>Shopping Cart</h1>
            <CartItem class="item"
            v-for="(product, index) in getProducts"
            :key="index"
            :product="product"
           />
        </article>
        <article class="order">
            <h1>Order Details</h1>
            <div class="shipping">
                <label>Shipping</label>
                <select id="select" @change="onChange">
                    <option value="Posten">Posten(49kr)</option>
                    <option value="DB Schenker">Schenker(99kr)</option>
                    <option value="DHL">DHL(119kr)</option>
                </select>
            </div>
            <hr>
            <h3>Total Cost</h3>
            <h2>{{getProductSum + shippingValue}} KR</h2>
            <router-link to="/orderconfirm"><button @click="getProductFromCart">Checkout</button> </router-link>
        </article>
    </section>
</template>
<script>
import CartItem from "../components/CartItem"
// import { mapState } from "vuex";
export default {
    components: {
        CartItem
    },
    data() {
        return {
            shippingValue: 49,
            CartItem: []
        }
    },
    
    methods: {
        getProductFromCart() {
        //    let cart = this.$store.getters.getCart
           

        //     let arr = this.$store.state.products.filter(
        //         product => cart.indexOf(product._id). != -1 
        //     );
        //     return arr;
        // let cart = this.$store.getters.getCart
        // let products = this.$store.getters.getProducts
        // let cartproducts = []
        // for (let i = 0; i < cart.length; i++){
        //     for (let j = 0; j <products.length; j++){
        //         if (cart[i].id == products[j]._id) {
        //             products[j].quantity = cart[i].quantity
        //             cartproducts.push(products[j]) 

        //         }
                

        //     }
        // }
        // console.log(cartproducts)
        // return cartproducts

        console.log(this.getProducts)
      
        },

        onChange() {
            console.log(event.target.value)
            if(event.target.value === 'Posten'){
                this.shippingValue = 49
            }
            if(event.target.value === 'DB Schenker'){
                this.shippingValue = 99
            }
            if(event.target.value === 'DHL'){
                this.shippingValue = 119
            }
        },
    },
    computed: {
    //     ...mapState([
    //        'products'
    //    ]),
        

        getProducts() {
            return this.$store.getters.getCartItems;
        },

        getProductSum() {
            return this.$store.getters.getProductSum
        }
    },
    // mounted(){
    //   this.$store.dispatch('loadProducts')
    // }

    // beforeMount(){
        
    //     this.CartItem = this.getProductFromCart
        
       
    // }
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variable.scss";
    section {
        display: grid;
        min-height: 100vh;
        grid-template-columns: 75% 25%;
        grid-template-rows: 100%;
        .cart {
            background: $shop-color;
            display: grid;
            grid-template-columns: 9% 90% 1%;

            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                color: black;
                grid-column: 2 / span 1;
                justify-self: left;
            }

            .item {
                grid-column: 2 / span 1;
                
            }
        }

        .order {
            background: rgb(245, 241, 241);
            
            .shipping {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 70%;
                margin: auto;
                height: 50px;
                padding: 2rem 1rem;
                background:white;
                border-radius: 8px;
                text-align: left;
                
                label {
                    margin-bottom: .5rem;
                }
                #select {
                    
                    border: none;
                    font-size: 1.5rem;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-image: url(../assets/arrow.png);
                    background-repeat: no-repeat;
                    background-position: 98% 95%;
                    // option {
                        
                    // }
                }

                
            }

            hr {
                width: 100%;
                border: solid rgba(134, 131, 131, 0.158) 1px;
                margin-top: 2rem;
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                color: black;
                margin-bottom: 6rem;
            }

            h3 {
                margin-top: 3rem;
                margin-bottom: 0;
                font-weight: 300;
                font-size: 1.5rem;
            }

            button {
                margin-top: 3rem;
                width: 60%;
                padding: 1rem;
                border-radius: 10px;
                border-style: none;
                background: black;
                color: white;
                font-weight: bold;
                font-size: 1.1rem;
                cursor: pointer;
            }

            h2 {
                margin-top: 2px;
            }
        }
    }
</style>