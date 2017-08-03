<template>
  <div class="header" v-once>
    <div class="title"><router-link to="/">主页</router-link></div>
    <div class="title"><router-link to="/albums">相册</router-link></div>
    <div class="title"><router-link to="/users">用户中心</router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    methods: {
      
    }
  }
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 9999;
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
