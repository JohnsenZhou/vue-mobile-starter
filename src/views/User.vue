<template>
  <div>
    <ul id="example-1">
      <li v-for="item in userList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <!-- <button @click="getUsers()">获取人员</button> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'user',
    computed: {
      ...mapGetters({
        userList: 'allUsers'
      })
    },
    methods: {
      ...mapActions([
        'getUsers'
      ])
    },
    created() {
      this.$store.dispatch('getUsers')
    }
  }
</script>

<style>

</style>
