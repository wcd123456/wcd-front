<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:47:40
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-10 17:28:46
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
import { getList } from '@/api/content'
import ListItem from './ListItem'
export default {
  name: 'list',
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
      console.log('🚀 ~ file: List.vue ~ line 53 ~ current ~ oldValue', oldValue)
      console.log('🚀 ~ file: List.vue ~ line 53 ~ current ~ newValue', newValue)
    }
  },
  mounted () {
    this._getList()
  },
  methods: {
    _getList () {
      // if (this.isRepeat) return
      this.isRepeat = true
      if (this.isEnd) return
      let options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options).then((res) => {
        // 加入一个请求所，防止用户多次点击，等待数据返回再点击
        this.isRepeat = false
        // console.log('🚀 ~ file: List.vue ~ line 63 ~ getList ~ res', res)
        // this.lists = res.data
        // 对异常的判断，res.code非200.给一个提示
        // 判断是否lists长度为0，如果为0即可以直接赋值
        // 当长度不为0，后面请求的数据加入到lists里面来
        if (res.code === 200) {
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
      }).catch((err) => {
        this.isRepeat = false
        if (err) {
          this.$alert(err.message)
        }
      })
    },
    nextPage () {
      this.page++
      this._getList()
    },
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
