<template>
  <div class="admin">
    <section>
      <article class="background"></article>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer"

export default {
  name: 'Admin',
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
    
  }
</style>
