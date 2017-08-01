<template>
  <div class="container">
    <div class="user-datail-item">
      <img :src="imgSrc" alt="">
      <span class="user-detail-name">{{userDetail.name}}</span>
      <p v-if="userDetail.address!=null">{{userDetail.address.suite}} - {{userDetail.address.street}} - {{userDetail.address.city}}</p>
      <p>{{userDetail.phone}}</p>
      <p>{{userDetail.email}}</p>
      <p><a :href="userDetail.website">{{userDetail.website}}</a></p>
    </div>
    <div class="user-children-box">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item :to="todoRouter" value="todos" title="任务" icon="event_note"/>
        <mu-bottom-nav-item :to="postRouter" value="posts" title="动态" icon="bubble_chart"/>
        <mu-bottom-nav-item :to="albumRouter" value="ablums" title="相册" icon="photo_library"/>
      </mu-bottom-nav>
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
        bottomNav: 'todos',
        todoRouter: `/users/${this.$route.params.userId}/todo`,
        albumRouter: `/users/${this.$route.params.userId}/albums`,
        postRouter: `/users/${this.$route.params.userId}/posts`
      }
    },
    components: {
      CommentItem,
    },
    computed: {
      ...mapGetters({
        userDetail: 'userDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ]),
      handleChange (val) {
        this.bottomNav = val
      }
    },
    created() {
      let index =  Math.ceil((Math.random() * this.userIconlist.length));
      this.imgSrc = `../static/user/emoji-${index}.png`;
      this.$store.dispatch('getUserDetail', this.userId);
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
  .user-children-box {
    margin: 1em;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: 0 2px 6px #d7d7d7;
  }
</style>
