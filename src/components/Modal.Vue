<template>
<article id="modal" class="modal shadow" >
      <div class="modal-content" ref="content">
        <div class="pic-container left column">
          <img :src="require('@/assets/' + data.imgFile)" alt />
        </div>
        <div class="right column">
            <img src="@/assets/close.svg" alt="Close button" @click="$emit('close')" class="close-btn">
              <h1 class="title">{{data.title}}</h1>
              <h2 class="subheading">{{data.price}} Kr | {{data.shortDesc}} </h2> 
              <span>___________________________________</span>
              <p class="long-desc">{{data.longDesc}}</p>
              <input id="quantity" class="quantity" type="number" min="1" v-model="tempQuantity">
              <label for="quantity"> Quantity</label>
              <br>
            <div class="btn" @click=addToCart>Add to Cart</div >

            
            
          </div>
      </div>
    </article>
</template>
<script>

export default {
    data: () => ({
      tempQuantity: 1,
      item: {
        id: "",
        quantity: 0,
      },
      

    }),
    props:{
        data: Object
    },
    
    methods: {
        addToCart(){
          if (this.tempQuantity <= 0) {
            console.log("product not added, quantity to low")
          }else{

            this.item.id = this.data._id
            let index = this.cart.findIndex(currentOrder => currentOrder.id == this.item.id)

            if (index == -1) {
              this.item.quantity = Number(this.tempQuantity)
              console.log(this.item.quantity)
              this.cart.push(this.item) 
            } else{
            this.cart[index].quantity += Number(this.tempQuantity);  
             
              console.log(this.item)
            }
            
          }
          
        }
        
       
    },
    computed:{
      cart(){
        return this.$store.getters.getCart
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable";

.btn {
    margin: 2rem;
    display:inline-block;
    color:#444;
    border:1px solid #CCC;
    background: $shop-color;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    cursor:pointer;
    vertical-align:middle;
    max-width: 100px;
    padding: 5px;
    text-align: center;
    
}
.btn:active {
    color:white;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
}

.close-btn{
    position: absolute;
    top: 2%;
    right: 2%;
    width: 2rem;
    cursor: pointer;
}
.modal {
//   display: none;
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba($color: Black, $alpha: 0.5); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.modal-content {
  position: relative;
  left: 25%;
  width: 50%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  background-color: $shop-color;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h1{
    font-size: 2.5rem;
    font-variant: small-caps;
  }
  
  h2{
    font-size: 1.5rem;
  }
  
  .long-desc{
    margin: 1.5rem;
    line-height: 1.1rem;
    font-variant: small-caps;
  }
}


  .pic-container {
    width: 100%;

    // background-color: white;
    display: flex;
    align-items: flex-end;

    img {
      width: inherit;
      vertical-align: bottom;
    }
  }

.left{
    grid-column: 1;

  
}

.right{
   grid-column: 2;
   padding: 1rem;
}

label{
font-variant: small-caps;
}
#quantity{
  font-size: 1rem;
}


</style>