<template>
  <div class="login">
        <RegisterComp class="register" :class="rOut"></RegisterComp>
        <LoginComp class="send-password" :class="lOut"></LoginComp>
        <div @click="change()" class="btn">
            change vue
        </div>
      
    
  </div>
</template>
<script>
import RegisterComp from '../components/RegisterComp';
import LoginComp from '../components/LoginComp';


export default {
    name: 'Login',
  components: {
      RegisterComp,
      LoginComp   
  },
  data(){
      return{
          rOut: "out",
          lOut:"out"
      }

  },
  methods:{
      change(){
          if(this.rOut==="out"){
              this.rOut=""
              this.lOut="out"
          }else{
              this.rOut="out"
              this.lOut=""
          }
      }
  }

}
</script>
<style lang="scss" scoped>
    .login{
        position:relative;

        min-height: 100vh;
        background: url('..\src\assets\moutain.jpg');
        background-image: linear-gradient(.25turn,#066, #0aa, #0ff);
        overflow-x: hidden; //horizontal
        .register{

            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;

            transition: transform .5s ease-in;

            &.out{
                
                transform: translateX(-150vw);
                 
            }
        }

        .send-password{

            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;

            transition: transform .5s ease-in;

            &.out{
                
                transform: translateX(150vw); 
            }
        }
    }

    .btn{
        position: relative;
        z-index:10;
        width: 10rem;
        height: 10rem;
    }

    



</style>>

