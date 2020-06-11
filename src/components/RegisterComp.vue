<template>
<div class="container">
    
    <div class="loginComp">
        
        <div class="input-box">

            <h2>Kontaktuppgifter</h2>
            <h2>{{ somethingWentWrong }}</h2>

            <div class="input name">
                <label>Name</label>
                <input type="text" placeholder="Ditt namn" v-model="customer.name" >              
            </div>
            <div class="input email">
                <label>E-post</label>
                <input type="text" placeholder="Din e-post" v-model="customer.email">
                
            </div>
            <div class="input password">
                <label>Lössenord</label>
                <input type="password" placeholder="Ditt supr hemliga lösenord" v-model="customer.password">
                
            </div>
            <div class="input password">
                <label>Skriv ditt igen Lössenord</label>
                <input type="password" placeholder="samma lösenord igen" v-model="customer.repeatPassword">
                
            </div>
            
        </div>
            <div class="input-box adress">  
                <h2>Adress</h2>
                <div class="input name">
                <label>Stad</label>
                <input type="text" placeholder="Stad" v-model="adress.city" >
                
            </div>
            <div class="input email">
                <label>Gata</label>
                <input type="text" placeholder="Gatunamn" v-model="adress.street">
                
            </div>
            <div class="input password">
                <label>Postnummer</label>
                <input type="text" placeholder="Din post adress" v-model="adress.zip">
                
            </div>
                <div class="input password">
                    <div @click="register()" class="btn">
                        <p>Registrera</p> 
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {


  data(){
      return {
          openCloseMenu: false,
          customer: {
              name:'',
              email:'',
              password:'',
              repeatPassword:''
          },
          adress:{
              street:'',
              city:'',
              zip:''
          },
          somethingWentWrong:''
      }
  },
  computed:{

    getClient(){
      return this.$store.getters.getClient
    }
    
    
  },
  methods:{
      open(){
      
        
    },
    register(){
        this.customer.adress = this.adress;
        let self = this;
        let prom = this.$store.dispatch("newCustomer", this.customer);
        prom.then(() =>{
            
                self.$router.replace("/shop")
           
        })
                
             
               
        
        
     
       
    },
    password(){
        return this.customer.password1 == this.password2
    }
  }  
  
}
</script>
<style scoped lang="scss">
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loginComp{       

        display: flex;

        .input-box{
            background-color: #777;
            
            border-radius: 2rem;

            color: #fff;
            font-weight: bold;

            margin: 2rem;
            padding: 2rem;

            -webkit-box-shadow: 10px 10px 53px 4px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 53px 4px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 53px 4px rgba(0,0,0,0.75);

             h2{
                text-align: center;
                font-size: 1.5rem;
                padding: 0.5rem;
                }


            .input{

                display: flex;
                flex-direction: column;

                font-size:1.5rem;

                margin: 1rem;

                input[type="text"], input[type="password"]{

                    height: 2rem;
                    width: 25rem;

                    border-radius: 5px;
                    background-color: #bbb;

                    font-size:1.5rem;



                }

            }


        }

        
    }

    .adress{

           
       

    

        .btn{

            padding: 1rem 2rem 1rem 2rem;

            border-radius: 10px;
            border: solid #333 2px;
            
            background-color: #f71;

            text-align: center;
        }
    }
    

</style>>

