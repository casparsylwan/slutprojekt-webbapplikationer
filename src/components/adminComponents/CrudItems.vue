<template>
  <div class="crud">
    
      <h2>Ändra Bland produkter</h2>
      <div class="radio">
        <div class="radio-box">
          <input type="radio"  
            v-model="updateProduct" :value="true" @click="copyToUpdateProduct()" >

        <!--
          :checked="!product2._id"
          disabled="true"
          :checked="product2._id"
          -->


          <label >updatera</label>
        </div>
        <div class="radio-box" >
          <input id="id" type="radio"  
            v-model="updateProduct" :value="false" @click="cleanDataNewProduct()"            
            >
          <label>Ny produkt</label>
        </div> 
        {{ updateProduct }} 
      </div>
      <div class="element-input">
        <label >Produkt title</label>
        <input id="title" type="text" onfocus="this.placeholder=''" placeholder="Produkt title" v-model="product2.title">
        
      </div>
      <div class="element-input">
        <label >pris</label>
        <input id="price" type="number" min="1" onfocus="this.value=1" v-model="product2.price">
        
      </div>
      <div class="element-input">
        <label >Bild länk</label>
        <input id="file" type="text" onfocus="this.value=''" placeholder="Länk till fotot" v-model="product2.imgFile">
        
      </div>
      <div class="element-input">
        <label >Kort beskrivning</label>
        <input id="short" type="text" onfocus="this.value=''" placeholder="Kort produkt beskrivning" v-model="product2.shortDesc">
        
      </div>
      <div class="element-input">
        <label> Lång beskrivning </label>
        <textarea id="long" rows="10" v-model="product2.longDesc"></textarea>
        {{ product2.longDesc }}
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
        updateProduct:false,
        
        index:1,
         product2 : {}    

         
            }
        },
        methods:{

            registerProduct(){
              console.log(this.updateProduct)
              if( !this.updateProduct){              
                console.log("new")
                //AddProduct product2
              this.$store.dispatch("addProduct", this.product2);
                
              }else if( this.updateProduct){
                console.log("updateProduct")
                //UpdateProduct               
                this.$store.dispatch("updateProduct", this.product2);

              }else{
                console.log("Error")
              }                
            },
            cleanDataNewProduct(){
             
              this.product2._id = ''
              this.product2.title = '' 
              this.product2.price = 0
              this.product2.shortDesc = ''
              this.product2.longDesc = ''
              this.product2.imgFile = ''
              
               /*Product interface 
            product : {
                        title: '',
                        price: 0,
                        shortDesc: '',
                        longDesc: '',
                        imgFile: ''
                    }    
                    */
            },
             copyToUpdateProduct(){
              this.product2 = {...this.product}
            }

            },
            beforeMount(){
              this.product2 = {...this.product}
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

    .radio{
      display: flex;
      justify-content: space-evenly;
      width: 70%;
      padding: 1rem;
      
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

            p{
              font-size:1.5rem;
              font-weight: bold;
            }
        }
</style>
