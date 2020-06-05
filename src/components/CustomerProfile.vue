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
               caspar 
            </h2>
            <p>E-mail</p>
            <p>cas@gmail.com</p>
            
        </div>

        </div>
    </div> 
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .customer-profile{
        min-height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #999;
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

                            animation: eyes 5s ease;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #333;
        .name{
            color: #fff;
            font-size: 1.5rem;
            padding: 1rem;

            
            
        }
    }

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
     

</style>