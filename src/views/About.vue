<template>
  <div class="about">
    
    <h1>Build the best product, cause no unnecessary harm, <br> use business to inspire and implement solutions to the environmental crisis.</h1>
    <section class="responsibility-container">
    <article class="card">
      <h2>Social</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus expedita porro ipsum distinctio magnam explicabo iusto autem nesciunt dicta eligendi enim tempora tenetur esse at ipsam facilis, animi natus aut itaque. Nostrum minus iusto consectetur nemo, fugit laborum amet velit? Accusantium porro necessitatibus natus laboriosam, architecto repudiandae dicta aliquid enim ullam? Quam dolor fugiat quae cupiditate sit, odio dolore eaque nemo reiciendis molestiae, iste doloremque quia vitae aut dolorum quisquam illum neque fugit delectus laborum nam impedit! Rerum delectus nisi beatae tenetur ducimus at velit voluptatibus impedit fuga dolor magni dolorem fugiat quas quaerat laudantium labore, distinctio ratione soluta.</p>
    </article>
    <article class="card">
      <h2>Economic</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quisquam laborum. Esse doloribus laboriosam ea veritatis quam eos est et fuga corporis iure, ab explicabo! Numquam illum cum enim quae exercitationem maxime explicabo, nemo ad similique eius nihil. Eligendi dicta autem voluptatum nemo architecto ea labore ad repudiandae, eius optio, ut placeat eum molestias eveniet pariatur amet tempore quo quod. Tenetur qui velit consequuntur recusandae saepe repellendus repellat corporis autem, impedit quas accusamus magnam amet neque aperiam quo nam iusto! Et reprehenderit perferendis delectus aliquid alias dolore reiciendis provident excepturi, dolorum inventore ipsam, fugiat molestias eligendi? Harum molestias recusandae alias?</p>
    </article>
    <article class="card">
      <h2>Environmental</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt quaerat, tenetur enim saepe quisquam ipsa nisi ipsam nesciunt, magnam doloremque dolore similique, minima quod eum provident ab esse voluptatum accusamus corporis omnis. Repellendus distinctio necessitatibus deserunt corporis tenetur quaerat hic, a suscipit blanditiis? Autem impedit harum molestiae quia itaque pariatur consequuntur iure nemo laboriosam. Modi corrupti minima commodi aliquam sint nostrum ipsam fugit quo sed hic. Nulla a excepturi temporibus mollitia quos neque aperiam ipsa voluptatem veritatis ea et itaque vitae iure magni in suscipit id amet debitis provident, dignissimos iste qui quae. Adipisci voluptate quae nesciunt velit repellendus.</p>
    </article>
    </section>
    
  </div>
</template>
<script>


export default {
  components: {
   
   
  }

}
</script>
<style lang="scss" scoped>
.about{
  flex-grow: 1;
  background-image: url("../assets/about-us.jpg");
  background-size: cover;
  background-repeat: no-repeat

  
}
h1{
  margin: 4rem;
  font-size: 2rem;
  font-style: italic;
  font-variant: small-caps;
}

.responsibility-container{
  padding: 2rem;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;

  .card{
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background-color: rgba($color: grey, $alpha: 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.5s;
    

    h2{
      font-size: 2rem;
    }
    p{
      margin-top: 1rem;
      text-align: center;
    }
  }
  .card:hover{
      background-color: rgba($color: grey, $alpha: 0.4);
    }
}


</style>
