<template>
  <div class="loginComp">
      
      <div class="input-box">

          <h2>Kontaktuppgifter</h2>

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
              <input type="password" placeholder="Ditt supr hemliga lösenord" v-model="customer.password1">
              
          </div>
          <div class="input password">
              <label>Skriv ditt igen Lössenord</label>
              <input type="password" placeholder="samma lösenord igen" v-model="customer.password2">
             
          </div>
          
      </div>
        <div class="input-box adress">  
            <h2>Adress</h2>
            <div class="input name">
              <label>Stad</label>
              <input type="text" placeholder="Stad" v-model="customer.name" >
              
          </div>
          <div class="input email">
              <label>Gata</label>
              <input type="text" placeholder="Gatunamn" v-model="customer.email">
              
          </div>
          <div class="input password">
              <label>Postnummer</label>
              <input type="text" placeholder="Ditt supr hemliga lösenord" v-model="customer.password1">
              
          </div>
            <div class="input password">
                <div class="btn">
                   <p>Registrera</p> 
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
              password1:'',
              password2:''
          }
      }
  },
  methods:{
      open(){
      
        
    },
    login(){
       
    },
    password(){
        return this.customer.password1 == this.password2
    }
  }  
  
}
</script>
<style scoped lang="scss">
    .loginComp{
        
         background-image: linear-gradient(#770, #990, #ff0);
        background-color: rgba($color:#0ff, $alpha: .5);
        background-size: cover;
        background-position: center;
        
       
       

        display: flex;

        
        
        

        .input-box{
            background-color: #777;
            border: solid black 1px;
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

