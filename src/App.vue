<template>
  <div id="app">
    <ShoppingList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    ShoppingList,
    ShoppingCart
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
  margin-top: 60px;
}
.title {
  color: #007878;
  letter-spacing: 1px;
  padding: 1em;
  font-size: 120%;
  border-bottom: #007878 solid 1px;
}
</style>
