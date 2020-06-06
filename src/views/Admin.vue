<template>
  <div class="admin">
    <section>
      <article class="background">
        <Profile class="profile"></Profile>
        <FindItem class="find"  @productItem="setProduct" />
        <Crud class="crud" :product="product" ></Crud>
      </article>
      
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Profile from '../components/adminComponents/AdminPresentation';
import Crud from '../components/adminComponents/CrudItems';
import FindItem from '../components/adminComponents/FindItem';

export default {
  name: 'Admin',
  components: {
    Footer,
    Profile,
    Crud,
    FindItem
  },
  data(){
      return {

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
        methods:{
          setProduct(product){
            this.product = product;
          }
        }
}
</script>

<style lang="scss" scoped>
  .background {
    background-image: url("../assets/background.jpg");
    min-height: 86vh;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;

    .profile{
      flex-grow: 1;
      
    }

    .find {
      flex-grow: 2;
      border-right:solid 1px #222;
    }
    
    .crud{
      flex-grow: 2;
      
    }
  }
</style>
