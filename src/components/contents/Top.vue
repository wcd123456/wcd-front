<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:49:16
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-10 16:27:09
-->
<template>
  <div class="fly-panel" v-show="lists.length > 0">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #FF5722;"
      >去签到</a>
    </div>
    <list-item :lists="lists" :isShow='false'></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'top',
  components: {
    ListItem
  },
  data () {
    return {
      lists: [
        {
          uid: {
            name: '姓名',
            isVip: '1'
          },
          title: '标题',
          content: '',
          created: '2020-11-10 01:00:00',
          catalog: 'ask',
          fav: 40,
          isEnd: 0,
          answer: 0,
          status: 1,
          isTop: 0,
          tags: [
            {
              name: '精华',
              class: 'layui-bg-red'
            }, {
              name: '热门',
              class: 'layui-bg-blue'
            }
          ]
        },
        {
          uid: {
            name: '姓名',
            isVip: '1'
          },
          title: '标题',
          content: '',
          created: '2020-11-10 01:00:00',
          catalog: 'ask',
          fav: 40,
          isEnd: 0,
          answer: 0,
          status: 1,
          isTop: 0,
          tags: [
            {
              name: '精华',
              class: 'layui-bg-red'
            }, {
              name: '热门',
              class: 'layui-bg-blue'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
