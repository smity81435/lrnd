
<template>
  <div :class="$style.menu">
    <radial-menu
        :class="$style.deckMenu"
      :itemSize="70"
      :radius="130"
      :rotate="90"
      :angle-restriction="180">
        <radial-menu-item 
          :class="$style.rmitem"
          v-for="(item, index) in items" 
          :key="index" 
          style="background-color: white" 
          @click="clickedMenuItem(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu';



export default {
  name: "Menu",
  components: {
    RadialMenu,
    RadialMenuItem
  },
  props: {
      clickedMenuItem: {
          type: Function,
          required: true,
      },
  },
  data () {
    return {
      items: [ "My Decks", "About", "Contact"],
    }
  },
  
}

</script>
<style lang="scss" scoped module>
    .rmitem{
        box-shadow: 3px 3px 3px 3px rgba(0,0,0,.4);
    }
    .menu {
        color: #2c3e50;
    }
    .deckMenu{
        position: fixed;
        top: 50%;
        margin: auto; 
        margin-top: 0px; 
        background-color: white;
        box-shadow: 5px 5px 5px 2px rgba(0,0,0,.4);
        
        &:hover{
            cursor: pointer;
        }
    }
    .introP {
        color: rgba(255,255,255,1);
        margin-top: 16px;
    }
</style>
