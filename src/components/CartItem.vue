<template>
    <div class="cartItem">
        <div class="title-desc-price">
            <h3>{{title}}</h3>
            <p>{{shortDesc}}</p>
            <p>{{price}} KR</p>
        </div>
        <div class="image">
           <img :src="require('@/assets/' + imgFile)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        shortDesc: String,
        price: Number,
        imgFile: String
    },
    data: () => ({

    }),
    
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .cartItem {
        margin-bottom: 1rem;
        .title-desc-price {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            max-width: 190px;
            margin: auto;
            text-align: left;
            
            h3{
                grid-column: 1 / span 1;
                grid-row: 1 /   span 1;
                margin: 0;
                
            }
            p{
                grid-row: 2 / span 1;
                margin: 0;
            }
        }
        .image {
            img {
                width:150px;
            }
            margin-bottom: 3rem;
        }
    }
</style>