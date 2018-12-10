<template>
  <div class="about">
    <h1 class="pageIdentifier">{{currentPage}}</h1>
    
    <section class="info">
      <h2>Studying Simplified.</h2>
      <p>When we are trying to learn new subjects, it is best to cut the fat off the process. <br> That is why I created <strong>lrnd</strong>. <strong>Lrnd</strong> is about taking in big concepts in small pieces, and having all of that information in one place so you can study more effectively.</p>
      <h2>How to use it.</h2>
      <p>Using <strong>lrnd</strong> couldn't be any easier. Just add decks (using either the 
      "New Deck" option in the main menu on the left of the screen, or the green "+" on the "Deck"), and then put your flashcards in those decks to study. If you get sick of a deck or card, use the red minus button on the bottom left of the card. That will delete the whole deck and all of its cards. <br>Keep in mind that flashcards have a front and back, and if you click them you will see the hidden information!</p>
      <h2>How was it made?</h2>
      <p><strong>Lrnd</strong> was made using the powerful <a href="https://vuejs.org/" target="_blank">Vue Framework</a>, coupled with the super fast <a href="https://firebase.google.com/" target="_blank">Google Firebase</a> database. To learn more about the design process, check out the creator Douglas Smith's blog at <a href="https://dpower3.wordpress.com" target="_blank">DPower3</a>. </p>
      <h2 class="bottomH2">Now, go get lrnd.</h2>
    </section>
  </div>
</template>
<script>
  export default{
    name: "About",
    data(){
      return{}
    },
    methods:{

    },props:{
      currentPage:{
        type: String,
        default: '',
      }
    }

  }
</script>
<style lang="scss">
  .about{
    width: 70%;
    padding: 100px 20px;
    margin: auto;
    background: rgba(0,0,0,.2);
    border-radius: 5px;
  }
  .info{
    p{
      font-size: 16px;
    }
    a{
      color: lightgreen;
      font-weight: 700;
      text-decoration: none;
    }
    a:hover{
      color: lightseagreen;
    }
  }
  .bottomH2{
  color: rgb(54, 223, 20);
  }
</style>