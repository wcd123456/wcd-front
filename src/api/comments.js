import axios from '@/utils/request'
// 获取文章中的评论列表
const getComments = (tid) => {
  return axios.get('/public/list?' + tid)
}

export {
  getComments
}
