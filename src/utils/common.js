const getParams = (key, url) => {
  // 构造一个含有目标参数的正则表达式对象
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  // 匹配目标参数
  let link = new URL(url)
  let r = link.search.substr(1).match(reg)
  // 返回参数值
  if (r != null) {
    return decodeURI(r[2])
  }
  return null
}

// 获取浏览器参数
const getParam = (name, url) => {
  if (!url) url = location.href
  name = name.replace(/[\\[]/, '\\\\[').replace(/[\]]/, '\\\\]')
  var regexS = '[\\?&]' + name + '=([^&#]*)'
  var regex = new RegExp(regexS)
  var results = regex.exec(url)
  return results == null ? null : results[1]
}
// 获取距离顶部需要滚动的距离
const getElementY = (elem) => {
  // 当前滚动条距离顶部的距离+当前元素距离顶部窗口的距离
  return window.pageYOffset + document.querySelector(elem).getBoundingClientRect().top
}
/**
 * 滚动到指定元素
 * @param {String} elem DOM元素
 * @param {Number} duration 滚动动画执行的时间
 * @param {Number} offset 滚动偏移量
 */
const scrollToElem = (elem, duration, offset) => {
// 初始位置
  const startingY = window.pageYOffset
  const elemmentY = getElementY(elem)
  // 需要去滚动的距离
  const diff = elemmentY - startingY + offset
  if (!diff) {
    return
  }
  const easing = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  let start
  window.requestAnimationFrame(function step (timestamp) {
    if (!start) start = timestamp
    // 计算时间的差值，根据差值计算偏移量
    const time = timestamp - start
    let percent = Math.min(time / duration, 1)
    percent = easing(percent)
    window.scrollTo(0, startingY + diff + percent)
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

export { getParams, getParam, getElementY, scrollToElem }
