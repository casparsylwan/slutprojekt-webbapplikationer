<template>
    <div class="cartItem">
        <div class="image">
            <img :src="require('@/assets/' + product.item.imgFile)" alt="">
        </div>
        <div class="title-desc">
            <h3>{{product.item.title}}</h3>
            <p class="desc">{{product.item.shortDesc}}</p>
        </div>
        <div class="quantity">
            <img @click="decrementQuantity" src="../assets/minus-solid.svg" alt="">
            <input type="text" :value="product.quantity">
            <img @click="incrementQuantity" src="../assets/plus-solid.svg" alt="">
        </div>
        <div class="price">
            <p>{{product.item.price}} KR</p>
        </div> 
        <div class="remove">
            <img src="../assets/remove.png" alt="" @click="removeProduct">
        </div> 
        <hr>  
    </div>
</template>
<script>
export default {
    props: {
        product: Object
    },
    data: () => ({
    }),
    
    methods: {
        
        incrementQuantity() {
            this.$store.commit("incrementAmountAndSum", this.product);
        },

        decrementQuantity() {
            if(this.product.quantity > 0){
                this.$store.commit("decrementAmountAndSum", this.product)
            }else {
                this.removeProduct();
            }
        },

        removeProduct() {
            this.$emit('removeItem')
        }
    },


}
</script>

<style lang="scss" scoped>
    .cartItem {
        margin-bottom: 1rem;
        display: grid;
        grid-template-columns:  10% 20% 30% 20% 10%;
        align-items: center;
        .title-desc {
           align-self: center;
           grid-column: 2 / span 1;
           color: black;
            h3{
                margin: 0;
            }

            .desc {
                margin: 0;
            }
            
        }
        .image {
            img {
                width:120px;
            }
        }

        .quantity {

            img {
                width: 12px;
                height: 12px;
                cursor: pointer;
                
            }

            input {
                width: 1rem;
                padding: 6px 8px;
                border-radius: 6px;
                text-align: center;
                border: transparent;
                margin: 0 1rem;
            }
        }

        .remove {
            cursor: pointer;
        }

        .price {
            color: black;
        }

        hr {
            grid-column: 1 / span 5;
            width: 100%;
            border: solid rgba(134, 131, 131, 0.308) 1px;
        }       
    }
</style>