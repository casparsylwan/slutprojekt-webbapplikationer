<template>
<div class="sign-in">
        <div class="input-box">
            <h2>Logga in</h2>
            <div class="input name">
                <label>E-post</label>
                <input type="text" placeholder="Ditt namn" v-model="customer.email" >              
            </div>
            <div class="input email">
                <label>Lösenord</label>
                <input type="password" placeholder="Ditt hemliga" v-model="customer.password">              
            </div>
            <!--<<-->
            <div class="input btn-box">
                <div @click="login()" class="btn">
                    <p>Logga in</p> 
                </div>
            </div>


            <!--<<-->
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
          }
      }
  },
  methods :{
       login(){
        this.customer.adress = this.adress;
        this.$store.dispatch("loginCall", this.customer);
       
    }
  }
    
}

</script>
<style lang="scss" scoped>


.sign-in{

    display: flex;
    justify-content: center;
    align-items: center;
}

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
                label{
                    margin:0 0 .5rem 0;
                }

                &:nth-child(4){

                    margin-top:2rem;
                                   
                }

            }

    }

    .btn{

            padding: 1rem 2rem 1rem 2rem;

            border-radius: 10px;
            border: solid rgba(55,55,55,0.5) 2px;
            
            background-color: #f71;

            text-align: center;
        }

</style>