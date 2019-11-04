<template>
  <div id="app">
    <item-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import ItemBar from "./components/itemBar";

export default {
  name: 'app',
  components: {
      ItemBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
