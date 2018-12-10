<template>
  <div class="hello">
    <h1>welcome to lrnd</h1>
    
    <h2>Click the <strong id="clickit">"+"</strong>  Symbol to add a deck.</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#clickit{
  color: rgb(155, 255, 155);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
