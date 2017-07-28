<template>
  <div id="app">
    <head-top></head-top>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadTop from './components/Header';

export default {
  name: 'app',
  components: {
    HeadTop,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active {
  font-weight: bold;
  text-shadow: 0 2px 4px #949494;
  font-size: 1.2em;
}
</style>
