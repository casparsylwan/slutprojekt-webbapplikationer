<template>
<div class="shop">
  
    <article class="product-container" v-for="(product, index) in products" :key="index">
        <div  class="product" v-on:click="openPopup">
            <h1 class="title">{{product.title}}</h1>
            <div class="product-info">
                <h2 class="short-desc">{{product.shortDesc}}</h2>
                <h2 class="price">{{product.price}} kr</h2>
            </div>
            <div class="pic-container">
                <!-- <img :src="require('@/assets/' + product.imgFile)" alt=""> -->
                <!-- <img src="../assets/wheel-wave.png" alt=""> -->
            </div> 
        </div>
     
            
</article>
<div class="open-btn" v-on:click="openPopup">OPEN</div>


<div id="popup" class="popup shadow" v-on:click="closePopup">
     <div class="popup-content">
         
        <div class="close-btn" v-on:click="closePopup">CLOSE</div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit unde ab iure, quasi nisi adipisci, aliquid porro iste asperiores sunt, similique ipsum architecto. Quas voluptatibus harum debitis? Perferendis, fugiat numquam.
    </div>
    

</div>

</div>
</template>
<script>
// import axios from 'axios';

import { mapState } from "vuex";
export default {
    components:{
        
    },
    data: () => ({
    }),
    
    methods: {
        closePopup() {
            console.log("closed popup")
            document.getElementById("popup").style.display = "none"
        },
        openPopup() {
            console.log("open popup")
            document.getElementById("popup").style.display = "block"
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


.popup{
//     width: 280px;
//   height: 180px;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   padding: 10px;
//   margin-top: -100px;
//   margin-left: -150px;
//   z-index: 999;
//   background-color: #aaa

  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.popup-content{
    position: relative;
  top: 50%; /* 25% from the top */
  left: 25%;
  width: 50%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  background-color: white;
  z-index: 2;
}



.shadow {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
  box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
}

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

    .product{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 15rem;
        cursor: pointer;
        
        .product-info{
        
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }

        .pic-container{
            width: 100%;
            min-height: 20rem;
            max-height: 25rem;
            background-color: grey;
        }

    }


}


</style>