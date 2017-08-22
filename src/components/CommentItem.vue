<template>
  <li class="comment-item">
    <img :src="imgSrc" alt="">
    <span class="comment-user">{{item.name}}</span>
    <p class="comment-body">{{item.body}}</p>
    <hr class="comment-hr">
  </li>
</template>

<script>
export default {
  name: 'comment-item',
  props: ['item'],
  data() {
    return {
      imgSrc: ''
    }
  },
  created() {
    // 随机图片
    let index =  Math.ceil((Math.random() * 12));
    this.imgSrc = `../static/user/emoji-${index}.png`;
  }
}
</script>

<style>
  .comment-item {
    margin: 1.4em auto;
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
    font-weight: 500;
  }
  .comment-hr {
    height: 2px;
    margin-top: 1em;
    border: none;
    background: -webkit-linear-gradient(left,#fafafa,#ffe4bb,#fafafa);
  }
</style>