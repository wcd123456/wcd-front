<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 14:20:22
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-09 14:28:20
-->
<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <wcd-list></wcd-list>
      </div>
      <div class="layui-col-md4">
        <wcd-hotlist></wcd-hotlist>
        <wcd-ads></wcd-ads>
        <wcd-links></wcd-links>
      </div>
    </div>
  </div>
</template>

<script>
import Ads from '@/components/sidebar/Ads'
import HotList from '@/components/sidebar/HotList'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
export default {
  name: 'template1',
  components: {
    'wcd-links': Links,
    'wcd-ads': Ads,
    'wcd-hotlist': HotList,
    'wcd-list': List
  }
}
</script>

<style lang="scss" scoped>

</style>
