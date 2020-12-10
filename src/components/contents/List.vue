<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-09 11:47:40
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-10 14:19:07
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
    <list-item :lists="lists" @nextpage="nextPage"></list-item>
  </div>
</template>

<script>
import { getList } from '@/api/content'
import ListItem from './ListItem'
export default {
  name: 'list',
  data () {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
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
  },
  components: {
    ListItem
  },
  mounted () {
    this._getList()
  },
  methods: {
    _getList () {
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
        console.log('🚀 ~ file: List.vue ~ line 63 ~ getList ~ res', res)
        // this.lists = res.data
      })
    },
    nextPage () {
      this.page++
      this._getList()
    },
    search (val) {
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
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
