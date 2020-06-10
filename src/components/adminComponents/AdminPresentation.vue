<template>
    <div class="customer-profile">
        <div class="presentation">
        <div class="photo">
            <div class="head">
                <p></p>
                <p></p>
            </div>
            <div class="body">

            </div>
            
        </div>
        <div class="name">
            <h2>
               {{ getClient.email }}
            </h2>
            <p>E-mail</p>
            <p> {{ getClient.email }} </p>            
        </div>
        <section class="table">
            <article class="adress">

            </article>
            <article class="orders">
                <div v-for="(order, index) in orders" :key="index">
                  <h1>Order Id</h1>
                  <p>{{order._id}}</p> 
                  <h1>Order Date</h1>
                  <p>{{order.timeStamp}}</p>
                  <br> 
                </div>
            </article>

        </section>

        </div>
    </div> 
</template>
<script>
import { mapState } from "vuex"

export default {

    method:{

    },
   computed:{
       ...mapState([
           'orders'
       ]),

    getClient(){
      return this.$store.getters.getClient
    }

    },
     mounted(){
      this.$store.dispatch('loadOrders')
  },
}
</script>
<style lang="scss" scoped>
    .customer-profile{
        

        display: flex;
        justify-content: center;


    //    background-color: #999;
        .photo{
                position:relative;

                height: 15rem;
                width: 10rem;
                border: 20px solid transparent;

               // background-color: #333;
                overflow: hidden;

                    .head{
                        position: absolute;
                        z-index: 7;

                        top:2rem;
                        left:20%;

                        height: 6rem;
                        width: 6rem;
                        border-radius: 100%;

                        background-color:#971;

                        display: flex;
                        justify-content: space-evenly;

                        p{
                            width: 0.7rem;
                            height: 0.7rem;
                            background-color: #0ff;
                            border-radius: 100%;
                            margin-top: 2rem;

                            animation: eyes 5s ease, glow 4s ease-in 5s infinite;
                        }
                    }

                    .body{
                        position: absolute;
                        z-index: 7;

                        top:7rem;
                        left:50%;
                        transform: translateX(-50%);



                        height: 30rem;
                        width: 20rem;
                        border-radius:50%;

                        background-color:#971;
                        
                    }


                    &:after{
                        content: '';
                        position: absolute;
                        z-index: 6;

                        top:1rem;
                        bottom: 1rem;
                        left: 1rem;
                        right: 1rem;
                        
                        background: #333;
                    }

                     &:before{
                        content: '';
                        position: absolute;
                        z-index: 4;
                        left:-3rem;
                        top:-3rem;
                        
                       
                       width: 20rem;
                       height: 40rem;
                        
                        background: #0ff;
                        animation: frame 3s ease-in;
                        
                    }
                }
       
    }

    .presentation{
        height: fit-content;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #333;
        border-bottom:2px #fff solid ;
        .name{
            color: #fff;
            
            padding: 0rem;
            

            h2{
                font-size: 1.8rem;
                padding-bottom: 0.5rem;
            }

            p{
                font-size: 1.2rem;
                padding-bottom: 0.5rem;
            }

            
            
        }
    }

    // .table{

    // }

    @keyframes frame {
        0%{
            transform: translateX(80%) translateY(-10%) rotate(45deg);
        }
        100%{
            transform: translateX(0%) translateY(-15%) rotate(-25deg);
            
        }
        
    }

    @keyframes eyes {
        0%{
            background-color: #971;
        }
        50%
        {
            background-color: #971;
        }
        100%{
            background-color: #0ff;
        }
    }

     @keyframes glow {
        0%{
            box-shadow: 10px 13px 55px rgba(0, 255, 255, 1);
        }
        50%
        {
            box-shadow: 0 3px 5px rgba(0, 255, 255, 0.7);
        }
        100%{
            background-color: #0ff;
        }
    }
     

</style>