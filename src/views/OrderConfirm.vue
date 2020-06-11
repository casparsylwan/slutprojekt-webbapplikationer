<template>
    <section>
        <div class="check">
            <img src="../assets/green-check.png" alt="">
        </div>
        <div class="order-nr" >
            <h3>Order #{{getLastOrder}}</h3>
        </div>
        <h1>You're all set!</h1>
        
        <h4>Thanks for being awesome, we hope you enjoy your purchase!</h4>
        <router-link to="/shop">
            <img src="../assets/undo-solid.svg" alt="">
            <h3>Back To Shop</h3>
        </router-link>
    </section>
</template>
<script>
export default {
    data: () => ({

    }),
    
    methods: {
        showNav() {
            this.$store.state.hideNav = false;
        }
    },

    computed: {

        getOrders() {
            return this.$store.getters.getOrders;
        },

        getLastOrder() {
            return this.$store.getters.getLastOrder
        }

    },

    mounted(){
      this.$store.dispatch('loadOrders')
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variable.scss";
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100vh;
        background: $shop-color;
        .check {
            img {
                width: 200px;
            }
            margin: 5rem 0 .5rem 0;
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            font-family: 'Lobster', cursive;
            margin-bottom: 0;
        }

        .order-nr {
            background: inherit;
            padding: 10px;
            margin-bottom: 3rem;
            border-radius: 20px;
            background:  rgb(241, 239, 239);
            h3 {
                font-size: 1.5rem;
                margin: 0;
            }
        }

        h4 {
            font-size: 2rem;
            font-weight: 300;
            width: 50%;
            margin: 2rem 0 5rem 0;
            font-family: 'Lobster', cursive;
        }

        a {
            display: flex;
            justify-content: space-evenly;
            background: white;
            border: black solid 2px;
            width: 150px;
            padding: 1rem 1rem;
            border-radius: 10px;
            color: black;
            font-weight: bold;
            img {
                width: 15px;
            }
        }
    }
</style>