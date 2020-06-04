<template>
  <div class="anonymous">
    <section>
      <article class="background">
        <div class="register">
          <h2>Join Our Family</h2>
          <button>Register Here</button>
        </div>
      </article>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer"

export default {
  name: 'Home',
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
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 2% 30% 68%;
    .register {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
      align-self: center;
      text-align: right;
      h2{
        font-size: 2.8rem;
        color: black;
        margin-right: 1rem;
        font-weight: 100;
        
      }

      button {
        border-style: none;
        background: inherit;
        font-size: 1.9rem;
        font-style: italic;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>
