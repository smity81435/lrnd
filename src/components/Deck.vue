<template>
  <li class="deck" @click="handleClick">
    <h2>{{deckTitle}}</h2>
    <div class="buttons">
      <button class="delbut">
        <img class="delimg" src="../assets/delete.png" alt="Delete This deck.">
      </button>
    </div>
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
    currentDeck:"",
    currentDeckId:"",
    deckTitle: {
      type: String,
      required: true
    },
    handleClick: {
        type: Function,
        default: () => {},
    },
  }
};
</script>

<style lang="scss" scoped>
.delbut {
  background: none;
  border: none;
  outline: none;
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
.deck {
  transition: all 0.2s;
  width: 250px;
  background: white;
  padding: 200px 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 3px 6px 5px rgba(170, 215, 255, 0.4);
    transform: translateY(-10px);
  }
  h2 {
    background: -webkit-linear-gradient(rgb(38, 108, 228), rgb(225, 96, 245));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // padding: 200px 10px;
  }
}
</style>
