<template>
  <div class="container">
    <div class="user-datail-item" v-show="userDetail.address != null">
      <img :src="imgSrc" alt="">
      <span class="user-detail-name">{{userDetail.name}}</span>
      <p v-if="userDetail.address!=null">{{userDetail.address.suite}} - {{userDetail.address.street}} - {{userDetail.address.city}}</p>
      <p>{{userDetail.phone}}</p>
      <p>{{userDetail.email}}</p>
      <p><a @click="goBlog">{{userDetail.website}}</a></p>
    </div>
    <div class="user-children-box" v-show="userDetail.address != null">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item :to="todoRouter" value="user-todos" title="任务" icon="event_note"/>
        <mu-bottom-nav-item :to="postRouter" value="user-posts" title="动态" icon="bubble_chart"/>
        <mu-bottom-nav-item :to="albumRouter" value="user-albums" title="相册" icon="photo_library"/>
      </mu-bottom-nav>
      <div class="user-children-item">
        <router-view></router-view>
      </div>
    </div>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'post-detail',
    data() {
      return {
        userId: this.$route.params.userId,
        userIconlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        imgSrc: '',
        color: '#00b4ff',
        size: '30px',
        bottomNav: 'todos',
        todoRouter: `/users/${this.$route.params.userId}/todos`,
        albumRouter: `/users/${this.$route.params.userId}/albums`,
        postRouter: `/users/${this.$route.params.userId}/posts`
      }
    },
    components: {

    },
    computed: {
      ...mapGetters({
        userDetail: 'users/userDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ]),
      handleChange (val) {
        this.bottomNav = val
      },
      goBlog() {
        const href = 'http://' + this.userDetail.website;
        window.location.href = href;
      }
    },
    created() {
      let index =  Math.ceil((Math.random() * this.userIconlist.length));
      this.imgSrc = `../static/user/emoji-${index}.png`;
      this.bottomNav = this.$route.name;
      this.$store.dispatch('users/getUserDetail', this.userId);
    },
    destroyed() {
      this.$store.commit('users/RESET_USER_DETAIL');
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>
  .user-datail-item {
     text-align: left; 
  }
  .user-datail-item p {
    height: 1.3em;
    line-height: 1.3em;
    margin-top: 1em;
    padding-left: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-size: 1.3em 1.3em;
    background-repeat: no-repeat;
  }
  .user-datail-item p:nth-child(3) {
    background-image: url('../assets/img/address.png')
  }
  .user-datail-item p:nth-child(4) {
    background-image: url('../assets/img/tel.png')
  }
  .user-datail-item p:nth-child(5) {
    background-image: url('../assets/img/new_email.png')
  }
  .user-datail-item p:nth-child(6) {
    background-image: url('../assets/img/blog.png')
  }
  .user-datail-item p a {
    color: #00b4ff;
  }
  .user-datail-item img {
    width: 3em;
    height: 3em;
  }
  .user-detail-name {
    padding-left: 1em;
    height: 3em;
    line-height: 3em;
    vertical-align: top;
    /* 超出部分... */
    width: 70%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
  .user-children-box {
    margin: 1em;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: 0 2px 6px #d7d7d7;
  }
  .user-children-item {
    padding: 1em;
  }
</style>
