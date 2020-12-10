<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 14:20:22
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-09 14:28:06
-->
<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <wcd-top></wcd-top>
        <wcd-list></wcd-list>
      </div>
      <div class="layui-col-md4">
        <wcd-tips></wcd-tips>
        <wcd-sign></wcd-sign>
        <wcd-hotlist></wcd-hotlist>
        <wcd-ads></wcd-ads>
        <wcd-links></wcd-links>
      </div>
    </div>
  </div>
</template>

<script>
import Ads from '@/components/sidebar/Ads'
import Sign from '@/components/sidebar/Sign'
import HotList from '@/components/sidebar/HotList'
import Tips from '@/components/sidebar/Tips'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
import Top from '@/components/contents/Top'
export default {
  name: 'index',
  components: {
    'wcd-links': Links,
    'wcd-ads': Ads,
    'wcd-sign': Sign,
    'wcd-hotlist': HotList,
    'wcd-tips': Tips,
    'wcd-list': List,
    'wcd-top': Top
  }
}
</script>

<style lang="scss" scoped>

</style>
