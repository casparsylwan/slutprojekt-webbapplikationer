<template>
  <div class="account">
    <section>
      <article class="background">
        <div class="featured">
          <h2>Featured For You</h2>
        </div>
        <div class="images">
          <img src="../assets/hoodie-ash.png" alt="">
          <img src="../assets/hoodie-fire.png" alt="">
        </div>
      </article>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer"

export default {
  name: 'Account',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .background {
    background-image: url("../assets/background.jpg");
    height: 900px;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-rows: 25% 75%;
    grid-template-columns: 10% 80% 10%;

    .featured {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
      align-self: flex-end;
      text-align: left;

      h2 {
        font-size: 2.8rem;
        font-weight: 300;
      }
    }

    .images {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
      justify-self: flex-start;
      margin-top: 2rem;
      img {
        width: 400px;
      }
    }
    
  }
</style>
