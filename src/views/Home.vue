<template>
  <div class="home" >
    <img class="logo" alt="logo" src="../assets/logo.png"
     v-bind:class="{ little : isLittle}"
     @click="logoClick()"
     >
    <p class="lrnd">lrnd</p>
      <component 
      :is="pageContent"
      :class="{blur: isBlurred}"
      :openDeck="changeToDeck"
      :currentDeck="currentDeck"
      :currentDeckId="currentDeckId"
      :currentCard="currentCard"
      :currentPage="currentPage"
      />
    <Menu
      :clickedMenuItem="clickedMenuItem" v-bind:class="{ blur : isBlurred}"/>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Api from '@/api/Api.js'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import DecksContent from '@/components/DecksContent.vue'
import CardsContent from '@/components/CardsContent.vue';
import Deck from '@/components/Deck.vue'
import Card from '@/components/Card.vue'
import Menu from '@/components/Menu.vue'
import Snotify from 'vue-snotify';


export default {
  name: 'home',
  components: {
    About,
    Contact,
    DecksContent,
    CardsContent,
    HelloWorld,
    Deck,
    Card,
    Menu,
    Snotify,
  },
  data() {
    return {
      currentPage: "home",
      currentDeckId:"",
      currentDeck: "",
      currentCard: "",
      nextCard:"",
      previousCard:"",
      createNewCardModalVisible: false,
      pageContent: 'HelloWorld',
      isBlurred: false,
      isLittle: false,
      newDeckTitle: "",
    };
  },
  methods: {
    logoClick(){
      if(this.isLittle){
        this.pageContent = "HelloWorld";
        this.isLittle = false;
      }
    },
    clickedMenuItem(item) {
      this.isLittle = true;
      if(item == 'My Decks'){
        console.log("Decks page opened.")
        this.currentPage="My Decks"
        this.pageContent = 'DecksContent';
      }else if(item == "About"){
        this.currentPage = "About lrnd"
        this.pageContent = 'About'
        
      }else if(item == "Contact"){
        this.currentPage="Contact"
        this.pageContent = "Contact"
      }

    },
    changeToDeck(deckTitle, deckId){
      //test for click
      console.log("Changing to deck: "+deckTitle+".");
      this.pageContent = 'cardsContent';
      this.currentDeck = deckTitle;
      this.currentDeckId= deckId;
    },
  },
}
</script>

<style lang="scss">

  .home{
    color: white;
    margin-top: 5%;
    
    padding-bottom: 40px;
    
  }
  .logo{
    transition: all .6s;
    width: 200px;
  }
  .lrnd{
    font-weight: 700;
    font-size: 60px;
    position: fixed;
    bottom: -50px;
    right: 10px;
    opacity: .5;
  }
  .little{
    
    position: fixed;
    width: 100px;
    top: 10px;
    left: 10px;
    opacity: .2;
    &:hover{
      cursor: pointer;
      opacity: 1;
    }
  }

  .slide-transition {
    transition: all 1.5s ease-in-out;
  }
  .slide-enter,
  .slide-leave {
    opacity: 0;
  }
</style>

