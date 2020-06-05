<template>
<article id="modal" class="modal shadow" @click="$emit('close')">
      <div class="modal-content">
        <div class="close-btn">CLOSE</div>
        <div class="pic-container">
          <img :src="require('@/assets/' + product.imgFile)" alt />
        </div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit unde ab iure, quasi nisi adipisci, aliquid porro iste asperiores sunt, similique ipsum architecto. Quas voluptatibus harum debitis? Perferendis, fugiat numquam.
      </div>
    </article>
</template>
<script>
export default {
    data: () => ({

    }),
    components:{
        product: Object
    }
    
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.modal-content {
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
  -webkit-box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
}

</style>