<template>
  <div>
    <div class="page-header p-border">
      <img class="page-header-img" src="../assets/picture/1.jpg" :alt="index_getGoodsInfo.title">
      <div class="titlewrap">
        <h1 class="entry-title dekoline" itemprop="headline">{{index_getGoodsInfo.title}}</h1>
      </div>
    </div>
    <div class="container container_alt">
      <div class="pro-intro clearfloat fl" style="display: flex;margin-top: 20px">
        <!--S 商品介绍-轮播图-->
        <goodPreviewWrap :proid="proid"></goodPreviewWrap>
        <!--E 商品介绍-轮播图-->
        <!--S 商品介绍-规格-->
        <div class="itemInfo-wrap fl" style="margin-left: 10px;text-align: left">
          <h3 class="pro-intro-name" style="text-align: center">{{index_getGoodsInfo.title}}</h3>
          <div class="pro-intro-des" style="text-indent:28px" v-html="index_getGoodsInfo.content">{{index_getGoodsInfo.content}}</div>
        </div>
        <!--E 商品介绍-规格-->
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'proshow',
    data() {
      return {
        protitle: 'GIFTSHOW',
        proid: this.$route.params.id
      }
    },
    watch: {
      '$route' (to, from) {

      }
    },
    mounted() {
      let param = this.$route.params
      console.log(this.$route.params.id)
      this.getGoodsInfo(param)
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getBlogs', 'getGoodsInfo']
      )
    },
    computed: {
      ...mapState({
        index_goodsList: ({index}) => index.index_goodsList,
        index_getGoodsInfo: ({index}) => index.index_getGoodsInfo,
        index_goodsType: ({index}) => index.index_goodsType
      })
    },
    components: {
      goodPreviewWrap: resolve => require(['./goodPreviewWrap'], resolve),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-header h1 {
    color: #fff !important;
  }

  .flexinside h1, .flexinside h2, h1.entry-title, h2.posttitle {
    font-family: Tillana;
    line-height: 42px;
    font-weight: 600;
    font-style: normal;
    color: #222;
    font-size: 40px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.24s ease-in-out;
    -moz-transition: opacity 0.24s ease-in-out;
    transition: opacity 0.24s ease-in-out;
  }
</style>
