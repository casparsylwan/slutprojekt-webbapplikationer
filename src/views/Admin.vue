<template>
  <div class="admin">
    <section>
      <article class="background">
        <Profile></Profile>
      </article>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Profile from '../components/adminComponents/AdminPresentation';

export default {
  name: 'Admin',
  components: {
    Footer,
    Profile
  }
}
</script>

<style lang="scss" scoped>
  .background {
    background-image: url("../assets/background.jpg");
    min-height: 86vh;
    background-size: cover;
    background-repeat: no-repeat;
    
  }
</style>
