<template>
  <div class="list-item" @click="open">
    <img class="album-img" :src="item.thumbnailUrl" alt="">
    <span class="album-detail-title">{{item.title}}</span>
    <mu-dialog :open="dialog" title="详情" @close="close">
      <img class="album-img-detail" :src="item.url" alt="">
      <span class="album-img-title">{{item.title}}</span>
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: 'album-item-detail',
  props: ['item'],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
}
</script>

<style>
  .album-img {
    width: 3em;
    height: 3em;
  }
  .album-detail-title {
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
  .album-img-detail {
    width: 100%;
    margin-bottom: 1em;
  }
  .album-img-title {
    text-align: center;
    font-weight: 600;
  }
</style>
