<template>
  <div id="app">
    <!-- <div class="container">
     
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> 
      </div> -->
      <router-view/>
    
  </div>
</template>
<script>
import * as Api from "@/api/Api.js";

Api.initialize();

//ADD DECK TEST
// console.log('Adding deck');
// Api.addDeck("testDeck")
//   .then(() => {
//     console.log('Deck added');
//   });


export default{
  data(){
    return{
      nowbg:"",
      index: 0,
    }
  },
  created: function(){
      this.bgpicker();
  },
  methods:{
    bgpicker: function(){
      var bgurl = ['./assets/matterhorn.png','./assets/k2.png'];
      var pick = Math.random();
      // console.log('Pick: '+pick);
      if(pick>=.5){
          this.nowbg = bgurl[0];
          // console.log('Matterhorn!');

      }else{
        // console.log("k2!" + bgurl[1]);
        this.nowbg=bgurl[1];
      }
    },
  },
}

</script>

<style lang="scss">
body {
  background: url("./assets/matterhorn.png")no-repeat center center;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}
.back{
  width: 100vw;
  height: 100vh;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
