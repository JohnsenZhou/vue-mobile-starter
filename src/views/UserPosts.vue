<template>
    <ul>
      <li class="user-posts" @click="showPostDetail(item.id)" v-for="item in userPosts" :key="item.id">
        <span class="user-posts-id">{{item.id}}</span>
        <span class="list-title">{{item.title}}</span>
        <p class="post-body">{{item.body}}</p>
      </li>
    </ul>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'post-detail',
    data() {
      return {
        userId: this.$route.params.userId,
      }
    },
    components: {
      
    },
    computed: {
      ...mapGetters({
        userPosts: 'users/userPosts',
      })
    },
    methods: {
      ...mapActions([
        
      ]),
      showPostDetail(id) {
        this.$router.push({
          name: 'post-detail',
          params: {
            postId: id
          }
        })
      }
    },
    created() {
      this.$store.dispatch('users/getUserPostsList', this.userId);
    },
    destroyed() {
      // childId 为三个子路由模块的代号。1 代表todos；2 代表 posts；3代表albums
      // this.$store.commit('RESET_USER_DETAIL_CHILDREN', { childId: 2 });
    }
  }
</script>

<style>
  .user-posts {
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ffc9c9;
    border-radius: 4px;
    background: #f6f6f6;
  }
  .user-posts-id {
    float: left; 
    width: 1.8em;
    height: 1.8em;
    background: #f99185;
    line-height: 1.8em;
    border-radius: 25px 25px;
    color: #fff;
  }
</style>
