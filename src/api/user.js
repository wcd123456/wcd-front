import axios from '@/utils/request'
import store from '@/store'
const headers = {
  Authorization: 'Bearer ' + store.state.token,
  'Content-type': 'application/json'
}
// 用户签到
const userSign = () => {
  return axios.get('/user/fav', { headers })
}

export {
  userSign
}
