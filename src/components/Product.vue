<template>
  <div class="product" >
    <h1 class="title">{{product.title}}</h1>
    <div class="product-info">
      <h2 class="short-desc">{{product.shortDesc}}</h2>
      <h2 class="price">{{product.price}} kr</h2>
    </div>
    <div class="pic-container">
      <img :src="require('@/assets/' + product.imgFile)" alt />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    product: Object
  },

  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.product {
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 20rem;
    cursor: pointer;

  .product-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  &:hover{
      border-radius: 1rem;
      border-color: grey;
      border-style: solid;
  }

  .pic-container {
    width: 100%;

    // background-color: grey;
    display: flex;
    align-items: flex-end;

    img {
      width: inherit;
      vertical-align: bottom;
    }
  }
}
</style>