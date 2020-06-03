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
        min-height: 90vh;
        background: #fff;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>>

