<template>
    <div class="findItem">
        <div class="element-input">
            <h2>Sök efter en produkt</h2>
            <input type="text" onfocus="this.placeholder=''" placeholder="Sök Produkt" v-model="searchTitle" />
            {{ this.searchTitle }}
        </div>
   
        <table>
            <tr>
                <th>Product id</th>
                <th>Namn</th>
                <th>pris</th>
                <th>ta bort</th>                
            </tr>
            <tr :key="product.name" v-for="product in filter">
                <td @click="$emit('productItem', product)" > {{ product._id }} </td>
                <td @click="$emit('productItem', product)">{{ product.title }}</td> 
                <td @click="$emit('productItem', product)">{{ product.price }}</td>
                <td @click="removeItem(product._id)"> X </td>              
            </tr>    
        </table>
     </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    data () {
        return {
            searchTitle:"",
            searchList:[],
             /**Product interface */
            product : {
                        title: '',
                        price: 0,
                        shortDesc: '',
                        longDesc: '',
                        imgFile: ''
                    }    
        }

    },
    methods: {  
        
        removeItem(id){
            this.$store.dispatch("deleteProduct", id);
        }

    },
    computed: {
        ...mapState([
           'products'
       ]),
       filter(){
           
           let searchList = this.getProducts.filter(prod => prod.title.toUpperCase().includes(this.searchTitle.toUpperCase()))
           return searchList
        },
        getProducts(){
            return this.$store.getters.getProducts
    }
    },
    mounted(){
      this.$store.dispatch('loadProducts')
      
    }
}
</script>
<style lang="scss" scoped>
.findItem{
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba($color: #003, $alpha: .4);
}

.element-input{


    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top:1rem;
        padding: 1rem;
        font-size: 2rem;
        font-weight: bold;
        color:#fff;

    }

    input{
            height: 2rem;
            border-radius: 10px;
            margin-top: 2rem;
            
            &[type="text"], &[type="number"]{

                font-size: 1.5rem;
                font-weight: bold;
                text-align: center;
            }            
        }
    
}

table{
        margin-top: 2rem;
        color:#fff;
        width: 80%;
        
        letter-spacing: 2px;

        th{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: start;
            background-color: #000;
            padding-left: 1rem;
            vertical-align: middle;
            
        }

        tr{
            height: 2rem;
             &:nth-child(even){
                background-color: #777;
            }
        }

        td{
            background-color: #333;
            text-align: start;
            padding-left: 1rem;
            vertical-align: middle;
                      
        }

        td:nth-child(4){
            color:#b00;
            font-weight: bolder;
            text-align: center;
        }

        

    }

    tr:hover{
        background-color: #777;
    }

</style>