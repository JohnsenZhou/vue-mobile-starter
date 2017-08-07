<template>
  <div class="nav-header">
    <mu-appbar :title="Title">
      <mu-icon-button slot="left" @click="toggle(true)">
        <img class="menu-icon" src="../assets/img/menu.png" alt="">
      </mu-icon-button>
      <mu-icon-button slot="right" @click="goGithub">
        <img class="github" src="../assets/img/github.png" alt=""/>
      </mu-icon-button>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-menu @itemClick="docked ? '' : toggle()">
        <mu-appbar title="Vue-Starter"/>
        <mu-menu-item title="主页" to="/" leftIcon="home" @click="Title = '主页'"/>
        <mu-divider />
        <mu-menu-item title="相册" to="/albums" leftIcon="photo" @click="Title = '相册'"/>
        <mu-divider />
        <mu-menu-item title="用户中心" to="/users" leftIcon="person" @click="Title = '用户中心'"/>
        <mu-menu-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-menu>
    </mu-drawer>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        open: false,
        docked: true,
        Title: '主页',
      }
    },
    methods: {
      toggle(flag) {
        this.open = !this.open
        this.docked = !flag
      },
      goGithub() {
        window.location.href = "https://github.com/JohnsenZhou";
      },
      changeTitle() {
        console.log("ddddd")
      }
    },
  }
</script>

<style>
.nav-header {
  text-align: left;
}
.mu-appbar {
  background-color: #00b4ff;
}
.mu-appbar-title {
  font-size: 1.2em;
}
.mu-menu-list {
  padding: 0;
}
.github, .menu-icon {
  width: 100%;
}
</style>
