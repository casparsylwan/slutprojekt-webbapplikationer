<template>
  <div class="login">
      <LoginComp></LoginComp>
    
      
    
  </div>
</template>
<script>
import LoginComp from '../components/LoginComp';
export default {
    name: 'Login',
  components: {
      LoginComp
     

    
  },

}
</script>
<style scoped>
    .login{
        min-height: 100vh;
        background-image: linear-gradient(.25turn,#066, #0aa, #0ff);
        

        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>>

