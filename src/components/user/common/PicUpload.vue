<!--
 * @Descripttion:
 * @version:
 * @Author: wcd
 * @Date: 2020-12-14 17:16:00
 * @LastEditors: wcd
 * @LastEditTime: 2020-12-17 15:20:11
-->
<template>
  <!-- 上传头像 -->
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label type="button" class="layui-btn upload-img" for="pic">
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <input id="pic" type="file" name="file" accept="image/png,image/gif,image/jpg" @change="upload">
        <img
          :src="pic"
        />
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from '@/api/content'
import config from '@/config/index'
import { updateUserInfo } from '@/api/user'
export default {
  name: 'pic-upload',
  data () {
    return {
      pic: (this.$store.state.userInfo && this.$store.state.userInfo.pic) ? this.$store.state.userInfo.pic : '/img/bear-200-200.jpg',
      formData: ''
    }
  },
  methods: {
    upload (e) {
      let file = e.target.files
      let formData = new FormData()
      if (file.length > 0) {
        formData.append('file', file[0])
        this.formData = formData
      }
      // 上传图片之后->uploadImg
      uploadImg(this.formData).then((res) => {
        console.log('🚀 ~ file: PicUpload.vue ~ line 49 ~ uploadImg ~ res', res)
        if (res.code === 200) {
          const baseUrl = process.env.NODE_ENV === 'production' ? config.baseUrl.pro : config.baseUrl.dev
          this.pic = baseUrl + res.data
        }
        // 更新用户的基本资料->updateUserInfo
        updateUserInfo({ pic: this.pic }).then(res => {
          console.log('🚀 ~ file: PicUpload.vue ~ line 51 ~ updateUserInfo ~ res', res)
          if (res.code === 200) {
            // 修改全局的$store内的用户基本信息
            let user = this.$store.state.userInfo
            user.pic = this.pic
            this.$store.commit('setUserInfo', user)
            this.$alert('图片上传成功')
          }
        })
      })
      document.getElementById('pic').value = ''
    }

  }
}
</script>

<style lang="scss" scoped>
#pic{display: none;}
</style>
