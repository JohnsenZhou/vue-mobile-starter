<template>
  <div class="header">
    <div class="title"><router-link to="/">首页</router-link></div>
    <div class="title"><router-link to="/theme">啦啦啦</router-link></div>
    <div class="title"><router-link to="/user">列表</router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style>
  .header {
    display: flex;
    height: 3rem;
    line-height: 3rem;
    background: #00b4ff;
    color: #fff;
    font-weight: 500px;
  }
  .title {
    flex: 1;
  }
</style>
