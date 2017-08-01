<template>
  <div class="user-todos">
    <ul>
      <li v-for="item in userTodos" :key="item.id">
        <div class="user-todo-item">
          <span>{{item.title}}</span>
          <img src="../assets/img/true.png" alt="">
        </div>
      </li>
    </ul>
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
      }
    },
    components: {
      CommentItem,
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
  .user-todos {
    padding: 1em;
    
  }
  .user-todo-item {

  }
  .user-todo-item img {
    width: 1.2em;
  }
</style>
