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
      ...mapGetters({
        userTodos: 'userTodos',
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('getUserTodoList', this.userId);
    },
    destroyed() {

    }
  }
</script>

<style>

</style>
