<template>
  <div class="login">
        <RegisterComp class="register" :class="rOut"></RegisterComp>
        <LoginComp class="send-password" :class="lOut"></LoginComp>
        
            <div @click="change()" class="btn">                
               <p v-if="rOut !=''">{{ btnGoToCreateText }}</p> 
               <p v-if="rOut ==''">{{ btnGoToLogginText }}</p>              
            </div>

            <div @click="test()" class="btn1">                
                test
                {{ getClient.name }}             
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
          lOut:"",
          btnGoToCreateText:"Gå och Skappa ett konto",
          btnGoToLogginText:"Gå till loggin" 
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
      },
      test(){    
        
        console.log("hej");
        this.$store.dispatch("getCustomerOrder");       
    }
      },
   computed:{

    getClient(){
      return this.$store.getters.getClient
    }   
  }
  }

</script>
<style lang="scss" scoped>
    .login{
        position:relative;

        min-height: 86vh;
        
        background-image: /*linear-gradient( rgba(255, 255, 0, 0.5) , rgba(0, 0, 255, 0.5) ),*/ url('../assets/moutain.jpg') ;//'../assets/iland.jpg'
         background-position: center center;
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
        margin: 2rem auto;
        z-index:10;
        padding:1rem;
        max-width: 10rem;
        border-radius: 10px;
        border: solid 2px #777;
        text-align: center;
        color:#fff;
        background-color:#777;
        font-size: 1.5rem;
        font-weight: bold;
        overflow: hidden;

        transition: transform 1s ease-in, background-color 1s ease-in;

         &:after {
           content: "";
           position: absolute;
           top:0;
           bottom: 0;
           left: 0;
           right: 0;
           z-index: -1;
           transform: translateX(15rem);
           border-radius: 10px;
           background: #333;
           
    }
    }

    .btn:hover{
        background-color: #555;
        transform: scale(0.95);
        

         &:after {
           transform: translateX(0rem) translateY(0rem);
           animation: hoverBtn ease-in 3s forwards;  
         }
    }

    .btn1{
        position: relative;
        z-index: 100;
        height: 3rem;
        width: 3rem;
    }

    @keyframes hoverBtn {

        0%
        {
            transform: translateX(15rem) translateY(0rem);
           
        }
        100%
        {
            transform: translateX(0rem) translateY(0rem);
            
        }
        
    }
    
    
   

    



</style>>

