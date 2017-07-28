<template>
  <li class="comment-item">
    <img :src="imgSrc" alt="">
    <span class="comment-user">{{item.name}}</span>
    <p class="comment-body">{{item.body}}</p>
    <p></p>
  </li>
</template>

<script>
export default {
  name: 'comment-item',
  props: ['item'],
  data() {
    return {
      userIconlist: [1, 2, 3, 4, 5, 6, 7],
      imgSrc: ''
    }
  },
  created() {
    let index =  Math.ceil((Math.random() * this.userIconlist.length));
    this.imgSrc = `../static/user/emoji-${index}.png`;
  }
}
</script>

<style>
  .comment-item {
    display: table;
    text-align: left;
  }
  .comment-item img {
    width: 3em;
    height: 3em;
  }
  .comment-user {
    /* 图片后面的文字垂直居中 */
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
  }
</style>