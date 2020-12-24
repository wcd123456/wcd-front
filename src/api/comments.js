import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'
// 获取文章中的评论列表
const getComents = (params) => axios.get('/public/comments?' + qs.stringify(params), { headers: { Authorization: 'Bearer ' + store.state.token } })
// 添加评论
const addComment = (data) => axios.post('/comments/reply', { ...data })
// 更新评论
const updateComment = (data) => axios.post('/comments/update', { ...data })
// 采纳最佳评论
const setCommentBest = (params) => axios.get('/comments/accept?' + qs.stringify(params))
// 点赞
const setHands = (params) => axios.get('/comments/hands?' + qs.stringify(params))

export {
  getComents,
  addComment,
  updateComment,
  setCommentBest,
  setHands
}
