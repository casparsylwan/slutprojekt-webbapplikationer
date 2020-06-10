<template>
    <section>
        <article class="cart">
            <h1>Shopping Cart</h1>
            <CartItem class="item"
            v-for="(product, index) in getProducts"
            :key="index"
            :product="product"
            @removeItem="removeItem(index)"
            
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
            <router-link to="/orderconfirm"><button @click="sendOrder">Checkout</button> </router-link>
        </article>
    </section>
</template>
<script>
import CartItem from "../components/CartItem"
export default {
    components: {
        CartItem
    },
    data() {
        return {
            shippingValue: 49,
            order: {
                items: [],
            },
        }
    },
    
    methods: {
        removeItem(index) {
            this.$store.state.cart.splice(index, 1);
            if(this.$store.getters.getCartItems <= 0) {
                this.$router.push('/shop');
            }
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

        sendOrder() {
            this.order.items = this.getOrder
            this.$store.dispatch('addOrder', this.order)
        },

    },
    computed: {

        getProducts() {
            return this.$store.getters.getCartItems;
        },
        getOrder(){
            return this.$store.getters.getOrderItems;
        },

        getProductSum() {
            return this.getProducts.reduce((acc,product) => {
                return acc + Number (product.item.price) * Number (product.quantity)
            },0);
        },

        

    },
    
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variable.scss";
    section {
        display: grid;
        min-height: 100vh;
        grid-template-columns: 75% 25%;
        .cart {
            background: $shop-color;
            display: grid;
            grid-template-columns: 5% 94% 1%;
            justify-content: space-evenly;
            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                color: black;
                grid-column: 2 / span 1;
                justify-self: left;
                margin: 3rem 0 0rem 0;
            }

            .item {
                grid-column: 2 / span 1;
                
            }
        }

        .order {
            background: rgb(245, 241, 241);
            text-align: center;
            .shipping {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 70%;
                margin: 0 auto 6.5rem auto;
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
                }
            }

            hr {
                width: 90%;
                border: solid rgba(134, 131, 131, 0.158) 1px;
                margin-top: 2rem;
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                color: black;
                margin: 3rem 0 6rem 0;
            }

            h3 {
                margin-top: 3rem;
                margin-bottom: 1rem;
                font-weight: bold;
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