<template>
  <div class="crud">
      <h2>Ändra Bland produkter</h2>
      <div class="element-input">
        <label >Produkt title</label>
        <input type="text" onfocus="this.placeholder=''" placeholder="Produkt title" v-model="product.title">
        
      </div>
      <div class="element-input">
        <label >pris</label>
        <input type="number" min="1" onfocus="this.value=1" v-model="product.price">
        
      </div>
      <div class="element-input">
        <label >Bild länk</label>
        <input type="text" onfocus="this.value=''" placeholder="Länk till fotot" v-model="product.imgFile">
        
      </div>
      <div class="element-input">
        <label >Kort beskrivning</label>
        <input type="text" onfocus="this.value=''" placeholder="Kort produkt beskrivning" v-model="product.shortDesc">
        
      </div>
      <div class="element-input">
        <label> Lång beskrivning </label>
        <textarea rows="10" v-model="product.longDesc"></textarea>
        {{ product.longDesc }}
      </div>
      <div class="element-input btn-box">
                <div @click="registerProduct()" class="btn">
                    <p>Registrera</p> 
                </div>
            </div>
    <section>
      
      
    </section>
  </div>
</template>

<script>


export default {
  name: 'Crud',
  components: {
 
  },
  props:['product'],
  data(){
      return {

          // /**Product interface */
          // product : {
          //           title: '',
          //           price: 0,
          //           shortDesc: '',
          //           longDesc: '',
          //           imgFile: ''
          //           }    
            }
        },
        methods:{

            registerProduct(){
                this.$store.dispatch("addProduct", this.product);
            }

            } 
  }

</script>

<style lang="scss" scoped>
  .crud{
    min-height: 80vh;
    background-color: rgba($color: #111, $alpha: .4);
    color:#fff;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-weight: bold;
        font-size: 2rem;
        margin-top:1.5rem;
    }
    
    .element-input{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top:2rem;

        label{
            font-size: 1.5rem;
            font-weight: bold;
        }

        textarea{

            width:95%;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: start;
            padding:1rem;
            border-radius: 10px;
        }

        input{
            height: 2rem;
            border-radius: 10px;
            
            &[type="text"], &[type="number"]{

                font-size: 1.5rem;
                font-weight: bold;
                text-align: center;
            }            
        }

    }

  }

        .btn{

            padding: 1rem 2rem 1rem 2rem;

            border-radius: 10px;
            border: solid rgba(55,55,55,0.5) 2px;
            
            background-color: #f71;

            text-align: center;
        }
</style>
