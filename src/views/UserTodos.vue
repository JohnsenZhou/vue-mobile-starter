<template>
    <ul>
      <user-todos-item v-for="item in userTodos" :key="item.id" :item="item"></user-todos-item>
    </ul>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import UserTodosItem from '../components/UserTodosItem.vue';
  export default {
    name: 'post-detail',
    data() {
      return {
        userId: this.$route.params.userId,
      }
    },
    components: {
      UserTodosItem,
    },
    computed: {
      ...mapGetters('users', {
        userTodos: 'userTodos',
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('users/getUserTodoList', this.userId);
    },
    destroyed() {
      // // childId 为三个子路由模块的代号。1 代表todos；2 代表 posts；3代表albums
      // this.$store.commit('RESET_USER_DETAIL_CHILDREN', { childId: 1 });
    }
  }
</script>

<style>

</style>
