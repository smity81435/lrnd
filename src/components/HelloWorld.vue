<template>
  <div class="hello">
    <h1>welcome to lrnd</h1>
    
    <h2>Click the <strong id="clickit">"+"</strong>  Symbol to begin.</h2>
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
.hello{
  transition: all 1s;
  position: fixed;
    margin: auto;
    width: 40%;
    height: 20%;
  opacity: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;


}
</style>
