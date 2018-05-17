import * as types from '../../mutation_type'
import getDate from '../../../../apis/api'

export default {
  getgoodstype ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_GOODSTYPE(params).then((res) => {
        commit(types.GETGOODSTYPE, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getGoods ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_GOODS(params).then((res) => {
        commit(types.GETGOODS, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getGoodsInfo ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_GOODSINFO(params).then((res) => {
        commit(types.GETGOODSINFO, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getBlogTag ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_BLOGTAG(params).then((res) => {
        commit(types.GETBLOGTAG, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getBlogTagInfo ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_BLOGTAGINFO(params).then((res) => {
        commit(types.GETBLOGTAGINFO, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getBlogs ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_BLOGS(params).then((res) => {
        commit(types.GETBLOGS, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getBlogsinfo ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_BLOGSINFO(params).then((res) => {
        commit(types.GETBLOGSINFO, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getBlogReply ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_BLOGREPLY(params).then((res) => {
        commit(types.GETBLOGREPLY, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  addBlogReply ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.ADD_BLOGREPLY(params).then((res) => {
        commit(types.ADDBLOGREPLY, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  addContact ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.ADD_CONTACT(params).then((res) => {
        commit(types.ADDCONTACT, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  },
  getGoodsTypeAndGoods ({state, commit}, params) {
    return new Promise((resolve, reject) => {
      return getDate.GET_GOODSTYPEGOODS(params).then((res) => {
        commit(types.GETGOODSTYPEGOODS, res)
        resolve(res)
      }).catch((thrown) => {
        console.log(thrown)
        reject(thrown)
      })
    })
  }
}
