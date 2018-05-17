import * as types from '../../mutation_type'

export default {
  [types.GETGOODSTYPE] (state, res) {
    state.index_goodsType = res.data.data
  },
  [types.GETGOODS] (state, res) {
    state.index_goodsList = res.data.data
  },
  [types.GETGOODSINFO] (state, res) {
    state.index_getGoodsInfo = res.data
  },
  [types.GETBLOGTAG] (state, res) {
    state.index_goodsType = res.data.data
  },
  [types.GETBLOGTAGINFO] (state, res) {
    state.index_goodsType = res.data.data
  },
  [types.GETBLOGS] (state, res) {
    state.index_getBlogs = res.data.data
  },
  [types.GETBLOGSINFO] (state, res) {
    state.index_getBlogsInfo = res.data
  },
  [types.GETBLOGREPLY] (state, res) {
    state.index_goodsType = res.data.data
  },
  [types.ADDBLOGREPLY] (state, res) {
    console.log(res)
  },
  [types.ADDCONTACT] (state, res) {

  },
  [types.GETGOODSTYPEGOODS] (state, res) {
    state.index_getGoodsTypeAndGoods = res.data
  },
}
