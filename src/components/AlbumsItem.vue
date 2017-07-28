<template>
  <li class="list-item clearfix">
    <span class="list-id">{{item.id}}</span>
    <span class="list-title">{{item.title}}</span>
  </li>
</template>

<script>
export default {
  name: 'albumes-item',
  props: ['item'],
  data() {
    return {

    }
  },

}
</script>

<style>

</style>