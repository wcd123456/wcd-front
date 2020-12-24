import axios from '@/utils/request'
import qs from 'qs'

// 用户签到
const userSign = () => axios.get('/user/fav')

// 更新用户基本资料
const updateUserInfo = (data) => axios.post('/user/basic', data)

// 确认修改用户名
const updateUsername = (data) => axios.get('/public/reset-email?' + qs.stringify(data))

// 修改用户密码
const changePasswd = (data) => axios.post('/user/change-password', {
  ...data
})

// 修设置收藏
const addCollect = (data) => axios.get('/user/set-collect?' + qs.stringify(data))

// 获取收藏列表
const getCollect = (data) => axios.get('/user/get-collect?' + qs.stringify(data))

export {
  userSign,
  updateUserInfo,
  updateUsername,
  changePasswd,
  addCollect,
  getCollect
}
