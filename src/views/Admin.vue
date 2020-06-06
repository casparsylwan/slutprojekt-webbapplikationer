<template>
  <div class="admin">
    <section>
      <article class="background">
        <Profile class="profile"></Profile>
        <Crud class="crud"></Crud>
      </article>
      
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Profile from '../components/adminComponents/AdminPresentation';
import Crud from '../components/adminComponents/CrudItems'

export default {
  name: 'Admin',
  components: {
    Footer,
    Profile,
    Crud
  }
}
</script>

<style lang="scss" scoped>
  .background {
    background-image: url("../assets/background.jpg");
    min-height: 86vh;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;

    .profile{
      flex-grow: 2;
      border: solid black 1px;
    }
    
    .crud{
      flex-grow: 1;
      border: solid black 1px;
    }
  }
</style>
