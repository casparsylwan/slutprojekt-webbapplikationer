<template>

    <header class="navBar">
        <nav class="top-nav" v-if="this.$route.path === '/'">
            <router-link to="">Log In</router-link>
            <router-link to="">Create Account</router-link>
        </nav>
        <nav class="top-nav" v-if="this.$route.path === '/account'">
            <router-link to="">Log Out</router-link>
            <router-link to="">My Account</router-link>
        </nav>
        <nav class="top-nav" v-if="this.$route.path === '/admin'">
            <router-link to="">Log Out</router-link>
            <router-link to="">Admin Settings</router-link>
            <router-link to="">My Account</router-link>
        </nav> 
        <nav class="bottom-nav">
            <div class="sinus">
                <h1>SINUS.</h1>
            </div>
            <div class="links">
                <router-link to="/shop">Shop</router-link>
                <router-link to="/about">Our Values</router-link>
                <router-link to="">Contact</router-link>
                <router-link to="/cart">Cart</router-link>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    props: {
        anonymous: Boolean
    },
    data: () => ({

    }),
    
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .navBar {
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
            
            .sinus {
                h1{
                    font-size: 6rem;
                    color: black;
                    margin: 0;
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