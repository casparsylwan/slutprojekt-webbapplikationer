<template>

    <header class="navBar" v-if="(this.$route.path !== '/orderconfirm')">
        <nav class="top-nav" v-if="getClient.name.length<1">
            <router-link to="/login">Log In</router-link>
            <router-link to="/login">Create Account</router-link>
        </nav>
        <nav class="top-nav" v-if="getClient.role=='customer'">
            <a @click="logout()" href="/login">Log Out</a>
            <router-link to="/profile">My Account</router-link>
        </nav>
        <nav class="top-nav" v-if="getClient.role=='admin'">
            <a @click="logout()" href="/login">Log Out</a>
            <router-link to="">Admin Settings</router-link>
            <router-link to="">My Account</router-link>
        </nav> 
        <nav class="bottom-nav">
            <router-link to="/">
                <div class="sinus">
                    <h1>SINUS.</h1>
                </div>
            </router-link>
            <div class="links">
                <router-link to="/shop">Shop</router-link>
                <router-link to="/about">Our Values</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/cart" v-if="this.$store.state.cart.length > 0">Cart</router-link>
            </div>
        </nav>
    </header>
   
</template>
<script>
export default {
    props: {
    },
    data: () => ({

    }),
    
    methods: {

        logout(){
            
            this.$store.getters.getClient.name = ''
            this.$store.getters.getClient.email = ''
            this.$store.getters.getClient.role = ''
            this.$store.getters.getClient.adress ={
                street: "",
                 city: "",
                  zip: "",
            }
            console.log(this.$store.getters.getClient)
            localStorage.clear();
            
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
    .navBar {
        font-family: 'PT Sans', sans-serif;
        .top-nav {
            background: black;
            display: flex;
            justify-content: flex-end;
            padding: 2px 1rem;
            
            a{
                text-decoration: none;
                color: white;
                margin: 0 1rem;
                font-weight: bold;
            }
        }

        .bottom-nav {
            display: flex;
            justify-content: space-between;
            padding: 0 2rem;

            a{
                text-decoration: none;
                .sinus {
                    h1{
                        font-size: 6rem;
                        color: black;
                        margin: 0;
                    }
                }
            }
            .links{
                display: flex;
                align-items: center;
                a{
                    text-decoration: none;
                    font-size: 2rem;
                    margin: 0 1rem;
                    color: black;
                }
            }
        }
    }
</style>