<template>
<section class="shop">

  <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/>      
  
  <article class="product-container" v-for="(product, index) in products" :key="index">
      <product @click="openModal(product)" :product="product"/>
  </article>
  
    <!-- <article class="product-container" v-for="(product, index) in products" :key="index">
        <div  class="product" v-on:click="openPopup">
            <h1 class="title">{{product.title}}</h1>
            <div class="product-info">
                <h2 class="short-desc">{{product.shortDesc}}</h2>
                <h2 class="price">{{product.price}} kr</h2>
            </div>
            <div class="pic-container">
                <img :src="require('@/assets/' + product.imgFile)" alt="">
            </div> 
        </div>
     
            
</article> -->

<!-- <article id="popup" class="popup shadow" v-on:click="closePopup">
     <div class="popup-content">
         
        <div class="close-btn" v-on:click="closePopup">CLOSE</div>
        <div class="pic-container">
        <img :src="require('@/assets/' + product.imgFile)" alt="">
 
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit unde ab iure, quasi nisi adipisci, aliquid porro iste asperiores sunt, similique ipsum architecto. Quas voluptatibus harum debitis? Perferendis, fugiat numquam.
    </div>
    

</article> -->

</section>
</template>
<script>
import product from '@/components/Product'
import Modal from '@components/Modal'

import { mapState } from "vuex";
export default {
    components:{
        product,
        Modal
        
    },
    data: () => ({
        product: {},
        modalVisible: false,
        modalData: null
    }),
    
    methods: {
        closePopup() {
            console.log("closed popup")
            document.getElementById("popup").style.display = "none"
        },
        openPopup() {
            console.log("open popup")
            document.getElementById("popup").style.display = "block"
        },
        openModal(data){
            this.modalData = data
            this.modalVisible = true
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