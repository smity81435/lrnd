<template>
  <li class="card">
       <vue-flashcard
          class="flash"
            v-bind:front='cardTitle'
            v-bind:back='cardBack'
            colorTextFront="lightpurple"
            v-bind:headerFront='currentDeck'
      >
      </vue-flashcard>
      <button 
        class="deleteButt"

      >&mdash;</button>
  </li>
</template>

<script>
import vueFlashcard from 'vue-flashcard';
export default {
  name: "Card",
  components:{
    'vue-flashcard': vueFlashcard,

  },
  data() {
    return {};
  },
  props: {
    currentDeck:{
      type: String,
      default: '',
    },
    cardTitle:{
      type: String,
      default: '',
    },
    cardBack:{
      type: String,
      default:'',
    },
    handleClick: {
        type: Function,
        default: () => {},
    },
    created(){
        console.log(cardTitle);
    }
  }
};
</script>

<style lang="scss" scoped>
.deleteButt{
  position: absolute;
  border-radius: 50%;
  padding: 2px 5px;
  border: 2px solid white;
  color: white;
  background: transparent;
  outline: none;
  font-family: Avenir;
  font-size: 15px;
  font-weight: 700;
  &:hover{
    color: white;
    border: 2px solid white;
    background: red;
    cursor:pointer;


    
  }
}
.delimg {
  transition: all 0.2s;
  width: 30px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 5px rgba(255, 26, 26, 0.5);
  }
}
.flash{
  transition: transform .2s;
  &:hover {
    transform: translateY(-10px);
  }
}
.card {
  transition: all 0.2s;
  color: black;
  h2 {
    background: -webkit-linear-gradient(rgb(38, 108, 228), rgb(225, 96, 245));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // padding: 200px 10px;
  }
}
</style>
