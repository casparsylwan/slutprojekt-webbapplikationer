<template>
    <section>
        <div class="check">
            <img src="../assets/green-check.png" alt="">
        </div>
        <h1>You're all set!</h1>
        <div class="order-nr"><h3>Order #123</h3></div>
        <h4>Thanks for being awesome, we hope you enjoy your purchase!</h4>
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
    section {
        .check {
            img {
                width: 200px;
            }
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            font-family: 'Lobster', cursive;
        }

        .order-nr {
            background: rgb(211, 208, 208);
            width: 150px;
            margin: auto;
            padding: 5px;
            border-radius: 30px;
            h3 {
                margin: 0;
            }
        }

        h4 {
            font-size: 2rem;
            font-weight: 300;
            color: rgb(124, 121, 121);
            width: 50%;
            margin: 2rem auto;
            font-family: 'Lobster', cursive;
        }
    }
</style>