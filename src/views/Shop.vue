<template>
<section class="shop">

  <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/>      
  <article class="product-container" v-for="(product, index) in products" :key="index">
    <product  @click.native="openModal(product)" :product="product"/>
  </article>

</section>
</template>
<script>
import product from '@/components/Product'
import modal from '../components/Modal'
import { mapState } from "vuex"



export default {
    components:{
        product,
        modal
        
    },
    data: () => ({
        product: {},
        modalVisible: false,
        modalData: null
    }),
    
    methods: {
        openModal(product){

            this.modalData = product
            this.modalVisible = true
            // this.$router.push({path: `/shop/${product._id}`, params: {}})
        }
    },
   computed: {
       ...mapState([
           'products'
       ])
   },
   mounted(){
      this.$store.dispatch('loadProducts')
  },

  
}
</script>

<style lang="scss" scoped>
.shop{
    
    width: inherit;
    background-color: #D7E5EE;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 10rem 5rem;

    
}

.product-container{
    display: flex;
    justify-content: center;

    


}
</style>