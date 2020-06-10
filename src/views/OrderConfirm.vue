<template>
    <section>
        <div class="check">
            <img src="../assets/green-check.png" alt="">
        </div>
        <h1>You're all set!</h1>
        <div class="order-nr"><h3>Order #123</h3></div>
        <h4>Thanks for being awesome, we hope you enjoy your purchase!</h4>
        <router-link to="/shop"><h3>Back To Shop</h3></router-link>
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

        getOrderNumber() {
             
            return this.$store.getters.getOrders;
           
        }

    }
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .check {
            img {
                width: 200px;
            }
            margin: 6rem;
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            font-family: 'Lobster', cursive;
            margin-bottom: 2rem;
        }

        .order-nr {
            background: rgb(211, 208, 208);
            width: 150px;
            margin: auto;
            padding: 5px;
            border-radius: 30px;
            h3 {
                margin: 0;
            }
        }

        h4 {
            font-size: 2rem;
            font-weight: 300;
            color: rgb(124, 121, 121);
            width: 50%;
            margin: 2rem auto;
            font-family: 'Lobster', cursive;
        }

        a {
             background: rgb(211, 208, 208);
             width: 150px;
             padding: 1rem 1rem;
             border-radius: 10px;
             color: black;
             font-weight: bold;
        }
    }
</style>