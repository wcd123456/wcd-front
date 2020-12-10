<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-10 09:47:26
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-10 16:27:41
-->
<template>
  <div>
 <ul class="fly-list">
      <li v-for="(item,index) in items" :key="'item'+index">
        <a href="user/home.html" class="fly-avatar">
          <img
            src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
            alt="贤心"
          />
        </a>
        <h2>
          <a class="layui-badge">{{item.catalog}}</a>
          <a href="jie/detail.html">{{item.title}}</a>
        </h2>
        <div class="fly-list-info">
          <a href="user/home.html" link>
            <cite>{{item.uid.name}}</cite>
            <!-- <i class="iconfont icon-renzheng" title="认证信息：XXX"></i> -->
            <i class="layui-badge fly-badge-vip" v-if="item.uid.isVip !== '0'">VIP{{ item.uid.isVip }}</i>
          </a>
          <span>{{item.created | moment}}</span>

          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <i class="iconfont icon-kiss"></i> {{item.fav}}
          </span>
          <span class="layui-badge fly-badge-accept layui-hide-xs" v-show="item.status !== '0'">已结</span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i> {{item.answer}}
          </span>
        </div>
        <div class="fly-list-badge" v-show="item.tags.length > 0">
          <span class="layui-badge layui-bg-red" v-for="(tag,index) in item.tags" :key="'tags'+index" :class="tag.class">{{tag.name}}</span>
        </div>
      </li>
    </ul>
    <div style="text-align: center" v-show="isShow">
      <div class="laypage-main">
        <a @click.prevent="more()" class="laypage-next">更多求解</a>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  name: 'listitem',
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    items () {
      // 遍历lists，改写对象里面的属性catalog
      _.map(this.lists, (item) => {
        switch (item.catalog) {
          case 'ask':
            item.catalog = '提问'
            break
          case 'share':
            item.catalog = '分享'
            break
          case 'logs':
            item.catalog = '动态'
            break
          case 'notice':
            item.catalog = '公告'
            break
          case 'advise':
            item.catalog = '建议'
            break
          case 'discuss':
            item.catalog = '交流'
            break
        }
      })
      return this.lists
    }
  },
  filters: {
    moment (data) {
      // moment().subtract(7, 'days')当前时间往后退7天
      // 超过七天显示年月日
      if (moment(data).isBefore(moment().subtract(7, 'days'))) {
        return moment(data).format('YYY-MM-DD')
      } else {
        // 七天之内显示几天前
        return moment(data).from(moment())
      }
    }
  },
  methods: {
    more () {
      this.$emit('nextpage')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
