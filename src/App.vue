<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    hello
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    fetchData(){
      console.log('aaaa');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
