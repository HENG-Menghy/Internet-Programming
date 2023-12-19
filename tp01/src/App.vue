<template>
  <div id="myId">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Let say `Hello Vue`!'
      }
    }
  }
</script>

<style scoped>
  #myId{
    text-align: center;
    margin-top: 50px;
  }
</style>