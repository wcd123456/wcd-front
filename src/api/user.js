import axios from '@/utils/request'
import qs from 'qs'
// 用户签到
const userSign = () => axios.get('/user/fav')

// 更新用户基本资料
const updateUserInfo = (data) => axios.post('/user/basic', data)

// 更新用户基本资料
const updateUsername = (options) => {
  return axios.get('/user/updatename?' + qs.stringify(options))
}
export {
  userSign,
  updateUserInfo,
  updateUsername
}
