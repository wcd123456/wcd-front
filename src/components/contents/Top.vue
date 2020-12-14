<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:49:16
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-14 15:12:45
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
import listMix from '@/mixin/list'
import ListItem from './ListItem'
export default {
  name: 'top',
  mixins: [listMix],
  components: {
    ListItem
  },
  data () {
    return {
      isTop: 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
