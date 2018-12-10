<template>
  <div class="about">
    <h1 class="pageIdentifier">{{currentPage}}</h1>
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
  
</style>