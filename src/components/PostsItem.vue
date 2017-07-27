<template>
  <li class="user-item">
    <span class="user-id">{{item.id}}</span>
    <span class="user-title">{{item.title}}</span>
    <p class="user-body">{{item.body}}</p>
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['item'],
  data() {
    return {

    }
  },

}
</script>

<style>
  .user-item {
    display: block;
    margin: 1em;
    padding: 1em;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: 0 2px 6px #d7d7d7;
  }
  .user-title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: .6em;
    font-size: 1.2em;
    font-weight: 500;
    text-align: left;
  }
  .user-id {
    float: left; 
    display: inline-block;
    width: 1.8em;
    height: 1.8em;
    background: #00b4ff;
    line-height: 1.8em;
    border-radius: 25px 25px;
    color: #fff;
  }
  .user-id::after {
    content: '.';
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
    clear: both;
  } 
  .user-body {
    margin-top: .8em;
    text-align: left;
    /* text-indent: 1em; */
    overflow : hidden;
    /* 多行文本截断 */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

