<template>

    <header class="navBar">
        <nav class="top-nav">
            <router-link to="">Log In</router-link>
            <router-link to="">Create Account</router-link>
        </nav>
        <nav class="bottom-nav">
            <div class="sinus">
                <h1>SINUS.</h1>
            </div>
            <div class="links">
                <router-link to="">Shop</router-link>
                <router-link to="">Our Values</router-link>
                <router-link to="">Contact</router-link>
                <router-link to="">Cart</router-link>
            </div>
        </nav>
    </header>
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