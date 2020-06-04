<template>
  <div class="login">
      <RegisterComp></RegisterComp>
    
      
    
  </div>
</template>
<script>
import RegisterComp from '../components/RegisterComp';
export default {
    name: 'Login',
  components: {
      RegisterComp
     

    
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

