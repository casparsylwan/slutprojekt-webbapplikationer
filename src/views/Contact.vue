<template>
    <section>
        <header class="title">
            <h1>Contact</h1>
        </header>
        <div class="message">
            <h2>We'd love to help</h2>
            <h4>If you have any questions, feel free to say hello!</h4>
        </div>
        <main>
            <div class="form">
                <textarea name="" id="name" cols="30" rows="2" placeholder="Your Name"></textarea>
                <textarea name="" id="mail" cols="30" rows="2" placeholder="Email"></textarea>
                <textarea name="" id="text" cols="30" rows="10" placeholder="Message"></textarea>
                <button>Send</button>
            </div>
            <div class="contact">
                <img src="../assets/map-marker-alt-solid.svg" alt="">
                <h3 style="width: 150px;"> <strong>Sinus AB</strong> Kungsgatan 117</h3>
                <img src="../assets/phone-solid.svg" alt="">
                <h3>08-735 47 64</h3>
                <img src="../assets/envelope-solid.svg" alt="">
                <h3>sinus@mail.com</h3>
            </div>
        </main>    
    </section>
</template>
<script>
export default {
    data: () => ({

    }),
    
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variable.scss";
    section {
        background: $shop-color;
        height: 100vh;
        text-align: center;
        padding-top: 3rem;
        font-family: 'PT Sans', sans-serif;
        .title {
            border-bottom: dashed black 2px;
            width:80%;
            margin:0 auto 2rem auto;
            h1 {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
        }
        .message {
            font-weight: bold;
            font-family: 'Lobster', cursive;
            h2 {
                font-weight: bold;
                font-size: 1.8rem;
                margin-bottom: 1rem;
            }
            h4 {
                margin-bottom: 3rem;
            }

        }
        main {
            display: grid;
            grid-template-columns: 10% 40% 10% 30% 10%;

            .form {
                grid-column: 2 / span 1;
                display: flex;
                flex-direction: column;
                
                textarea {
                    border-radius: 3px;
                    border: none;
                    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
                    
                }
                #name {
                        margin-bottom: 1rem;
                        justify-self: center;
                }
                #mail {
                        margin-bottom: 1rem;
                }
                button {
                    border: black solid 1.5px;
                    background: white;
                    width: 40%;
                    margin: 2rem auto 0 auto;
                    padding: .5rem;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    font-weight: bold;
                }
            }
            .contact {
                display: grid;
                grid-column: 4 / span 1;
                grid-template-columns: 50% 50%;
                border-bottom: solid rgb(192, 188, 188) 1px;
                img {
                    width: 25px;
                    justify-self: center;
                }
            }
        }
    }
</style>