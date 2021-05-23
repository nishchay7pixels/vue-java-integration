<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <h1>Using Vue with Java</h1>

    <People />
  </div>
</template>

<script>
import People from './components/People.vue'

export default {
  name: 'App',
  components: {
    People
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 80%;
  color: #2c3e50;
  margin-top: 60px;
}
</style>