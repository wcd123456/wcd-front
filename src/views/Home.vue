<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:05:39
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-09 14:29:20
-->
<template>
  <div>
  <wcd-panel></wcd-panel>
  <router-view></router-view>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'home',
  components: {
    'wcd-panel': Panel
  }

}
</script>

<style lang="scss" scoped>

</style>
