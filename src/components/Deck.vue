<template>
  <li class="deck" >
    <h2 class="deckCard" 
    @click="handleClick">{{deckTitle}}
    </h2>
    <button class="deleteButt"
    @click="()=>{deleteDeck(deckId)}"
    >
        &mdash;
      </button>
  </li>
</template>

<script>
export default {
  name: "Deck",
  data() {
    return {

    };
  },
  props: {
    deleteDeck:{
      type: Function,
      default: () => {},
    },
    currentDeck:"",
    currentDeckId:"",
    deckTitle: {
      type: String,
      required: true
    },
    deckId:{
      type: String,
      required: true,
    },
    handleClick: {
        type: Function,
        default: () => {},
    },
  }
};
</script>

<style lang="scss" scoped>
.deleteButt{
transition: all .2s;
position: absolute;
top: 90%;
right: 0%;
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
      background: rgb(255, 44, 44);
      cursor:pointer;
      padding: 4px 7px;
      box-shadow: 0px 0px 5px 5px rgba(0,0,0,.2);


      
  }
}
.delimg {
  transition: all 0.2s;
  width: 30px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background: rgba(255, 26, 26, 0.1);
    box-shadow: 0px 0px 3px 3px rgba(255, 26, 26, 0.1);
  }
}
.deckCard{
  position: relative;
  transition: all 0.2s;
  width: 250px;
  background: rgba(255,255,255,.4);
  border: 2px solid white;
  padding: 175px 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.2);

  font-size: 36px;
  color: white;
  &:hover {
    box-shadow: 0px 3px 6px 5px rgba(170, 215, 255, 0.4);
    transform: translateY(-10px);
    background: linear-gradient(rgba(36, 134, 245, 0.76),rgba(202, 1, 209, 0.781));
  }
}
.deck {
  position: relative;
}
</style>
