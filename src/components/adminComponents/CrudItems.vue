<template>
  <div class="crud">
    
      <h2>Ändra Bland produkter</h2>
      <div class="radio">
        <div class="radio-box">
          <input type="radio" name="typeOfUpdate" value="update" :checked="product._id" @click="cleanDataNewProduct()">
          <label >updatera</label>
        </div>
        <div class="radio-box">
          <input id="id" type="radio" name="typeOfUpdate" :value="!product._id" :checked="!product._id" @click="cleanDataNewProduct()">
          <label >Ny produkt</label>
        </div>  
      </div>
      <div class="element-input">
        <label >Produkt title</label>
        <input id="title" type="text" onfocus="this.placeholder=''" placeholder="Produkt title" :value="product.title">
        
      </div>
      <div class="element-input">
        <label >pris</label>
        <input id="price" type="number" min="1" onfocus="this.value=1" :value="product.price">
        
      </div>
      <div class="element-input">
        <label >Bild länk</label>
        <input id="file" type="text" onfocus="this.value=''" placeholder="Länk till fotot" :value="product.imgFile">
        
      </div>
      <div class="element-input">
        <label >Kort beskrivning</label>
        <input id="short" type="text" onfocus="this.value=''" placeholder="Kort produkt beskrivning" :value="product.shortDesc">
        
      </div>
      <div class="element-input">
        <label> Lång beskrivning </label>
        <textarea id="long" rows="10" :value="product.longDesc"></textarea>
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
        newItem:true,
        
        index:1,
         product2 : {...this.product2}    

         
            }
        },
        methods:{

            registerProduct(){
              if(!this.newItem){
                this.$store.dispatch("addProduct", this.product);
              }else if(this.newItem){
                console.log(this.product)
              }else{
                console.log("Error")
              }
                
            },
            cleanDataNewProduct(){
              this.newItem = !this.newItem
             console.log(document.getElementById("title").value)
              document.getElementById("id").value = null 
              document.getElementById("price").value= 0
              document.getElementById("file").value= ""
              document.getElementById("title").value= ""
              document.getElementById("short").value= ""
              document.getElementById("long").value= ""

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
