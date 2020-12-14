<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:47:40
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-14 15:16:12
-->
<template>
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a href :class="{'layui-this':status ==='' && tag === ''}" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a href :class="{'layui-this':status ==='0'}" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a href :class="{'layui-this':status ==='1'}" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a href  :class="{'layui-this':status ==='' && tag === '精华'}" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a href :class="{'layui-this':sort ==='created'}" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a href :class="{'layui-this':sort ==='answer'}" @click.prevent="search(4)">按热议</a>
      </span>
    </div>
    <list-item :lists="lists" @nextpage="nextPage" :isEnd="isEnd"></list-item>
  </div>
</template>

<script>
import listMix from '@/mixin/list'
import ListItem from './ListItem'
export default {
  name: 'list',
  mixins: [listMix],
  data () {
    return {
      isEnd: false,
      isRepeat: false,
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      lists: [],
      current: ''
    }
  },
  components: {
    ListItem
  },
  watch: {
    current (newValue, oldValue) {
      this.init()
    },
    '$route' (newValue, oldValue) {
      // let catalog = this.$route.params['catalog']
      let catalog = newValue.params['catalog']
      if (catalog !== '' && typeof catalog !== 'undefined') {
        this.catalog = catalog
      }
      this.init()
    }
  },

  methods: {
    search (val) {
      if (typeof val === 'undefined' && this.current === '') { return }
      console.log('🚀 ~ file: List.vue ~ line 97 ~ search ~ val', val)
      this.current = val
      switch (val) {
        case 0:
          this.status = '0'
          this.tag = ''
          break
        case 1:
          this.status = '1'
          this.tag = ''
          break
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        case 3:
          this.sort = 'created'
          break
        case 4:
          this.sort = 'answer'
          break
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
