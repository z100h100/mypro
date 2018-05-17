import axios from './api_config'
import api from './index'
/**
 *
 * @type {{}}
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=utf-8'
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
axios.interceptors.response.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

let base = ''

export default {
  GET_GOODSTYPE (params) {
    return api.fetch('post', `${base}/getGoodsType`, params)
  },
  GET_GOODS (params) {
    return api.fetch('post', `${base}/getGoods/`, params)
  },
  GET_GOODSINFO (params) {
    return api.fetch('post', `${base}/getGoodsInfo/`, params)
  },
  GET_BLOGTAG (params) {
    return api.fetch('post', `${base}/getBlogTag`, params)
  },
  GET_BLOGTAGINFO (params) {
    return api.fetch('post', `${base}/getBlogTagInfo`, params)
  },
  GET_BLOGS (params) {
    return api.fetch('post', `${base}/getBlogs/`, params)
  },
  GET_BLOGSINFO (params) {
    return api.fetch('post', `${base}/getBlogsInfo/`, params)
  },
  GET_BLOGREPLY (params) {
    return api.fetch('post', `${base}/getBlogReply`, params)
  },
  ADD_BLOGREPLY (params) {
    return api.fetch('post', `${base}/addBlogReply`, params)
  },
  ADD_CONTACT (params) {
    return api.fetch('post', `${base}/addContact`, params)
  },
  GET_GOODSTYPEGOODS (params) {
    return api.fetch('post', `${base}/getGoodsTypeAndGoods`, params)
  }
}
