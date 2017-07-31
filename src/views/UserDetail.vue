<template>
  <div class="container">
    <div class="user-datail-item">
      <img :src="imgSrc" alt="">
      <span class="user-detail-name">{{userDetail.name}}</span>
      <p>{{userDetail.address.suite}} - {{userDetail.address.street}} - {{userDetail.address.city}}</p>
      <p>{{userDetail.phone}}</p>
      <p>{{userDetail.email}}</p>
      <p><a :href="userDetail.website">{{userDetail.website}}</a></p>
    </div>
    <div>
      {{userTodos}}
      <router-view></router-view>
    </div>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import CommentItem from '../components/CommentItem.vue';
  export default {
    name: 'post-detail',
    data() {
      return {
        userId: this.$route.params.userId,
        userIconlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        imgSrc: '',
        color: '#00b4ff',
        size: '30px',
      }
    },
    components: {
      CommentItem,
    },
    computed: {
      ...mapGetters({
        userDetail: 'userDetail',
        userTodos: 'userTodos',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      let index =  Math.ceil((Math.random() * this.userIconlist.length));
      this.imgSrc = `../static/user/emoji-${index}.png`;
      this.$store.dispatch('getUserDetail', this.userId);
      this.$store.dispatch('getUserTodoList', this.userId);
    },
    destroyed() {
      this.$store.dispatch('resetAlbumDetail');
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>
  .user-datail-item {
     text-align: left; 
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
</style>
