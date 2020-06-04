<template>
    <section>
        <article class="cart">
            <h1>Shopping Cart</h1>
            <CartItem class="item"
            v-for="(product, index) in products"
            :key="index"
            :title="product.title"
            :shortDesc="product.shortDesc"
            :price="product.price"
            :imgFile="product.imgFile"/>
        </article>
        <article class="order">

        </article>
        <Footer />
    </section>
</template>
<script>
import Footer from "../components/Footer"
import CartItem from "../components/CartItem"
import { mapState } from "vuex";
export default {
    components: {
        Footer,
        CartItem
    },
    data: () => ({

    }),
    
    methods: {

    },

    computed: {
        ...mapState([
           'products'
       ])
    },
    mounted(){
      this.$store.dispatch('loadProducts')
    }
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
            grid-template-columns: 50% 50%;

            h1 {
                font-size: 2.5rem;
                color: black;
            }

            .item {
                grid-column: 1 / span 1;
            }
        }

        .order {
            background: rgb(245, 241, 241);
        }
    }
</style>