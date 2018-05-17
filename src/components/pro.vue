<template>
  <div>
    <div class="page-header p-border">
      <img class="page-header-img" src="../assets/picture/1.jpg" :alt="protitle">
      <div class="titlewrap">
        <h1 class="entry-title dekoline" itemprop="headline">{{protitle}}</h1>
      </div>
    </div>
    <div class="container container_alt">
      <div id="ml-block-743-4" class="ml-block ml-block-ml_portfolio_block ml_span12 ml-first clearfix">
        <div class="widgetwrap widgetwrap-alt" style="padding:60px 0;">
          <div class="block_bg" style="background-color:#f5f5f5;"></div>
          <!-- end title section-->
          <div class="mp-wrap"  v-loading="loading">
            <ul class="folio mpbox col3 isotopefolio">
              <li class="isoitem Normal" v-for="(item, index) in index_goodsList">
                <div class="item post tranz classic3 Normal">
                  <div class="imgwrap">
                    <router-link :to="{path:'/proshow/'+item.id}" :title="item.name">
                      <img style="width: 353px;height: 297px" v-lazy="item.img"
                           class="tranz grayscale grayscale-fade wp-post-image" :alt="item.name"/>
                    </router-link>
                    <router-link :to="{path:'/proshow/'+item.id}" class="hoverstuff hoverstuff-zoom"
                                 data-gal="prettyPhoto[gallery]"><i
                      class="fa fa-search"></i></router-link>
                    <router-link :to="{path:'/proshow/'+item.id}" class="hoverstuff hoverstuff-link"><i
                      class="fa fa-info-circle"></i></router-link>
                  </div>
                  <div class="item_inn tranz ghost">
                    <h3 class="tranz2">
                      <router-link :to="{path:'/proshow/'+item.id}">{{item.title}}
                      </router-link>
                    </h3>
                    <span class="meta tranz"></span>
                  </div>
                  <!-- end .item_inn -->
                </div>
              </li>
              <!-- end post -->
            </ul>
            <!-- end latest posts section-->
            <div class="clearfix"></div>
            <!--<router-link class="rad morebutton tranz" :to="{path:'/pro'}">All Projects <i-->
              <!--class="fa fa-chevron-right"></i></router-link>-->
            <!-- end latest -->
          </div>
        </div>
      </div>
      <div id="ml-block-743-5" class="ml-block ml-block-ml_text_block_full ml_span12 ml-first clearfix">
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'pro',
    data() {
      return {
        protitle: '',
        params: {
          id: 0
        },
        loading: true
      }
    },
    watch: {
      '$route' (to, from) {
        let param = this.$route.params.id || ''
        if (param === '' || param === 0) {
          this.getGoods(this.params)
          this.protitle='product'
        } else {
          let para = {
            id:this.$route.params.id
          }
          this.getGoods(para)
          for (let item in this.index_goodsType) {
            if (this.index_goodsType[item].id==this.$route.params.id) {
              this.protitle = this.index_goodsType[item].name
            }
          }
        }
        this.loading=false
      }
    },
    mounted() {
      this.getgoodstype().then(res=>{
        let param = this.$route.params.id || ''
        if (param === '' || param === 0) {
          this.getGoods(this.params)
          this.protitle='product'
        } else {
          let para = {
            id:this.$route.params.id
          }
          this.getGoods(para)
          for (let item in this.index_goodsType) {
            if (this.index_goodsType[item].id == param) {
              this.protitle = this.index_goodsType[item].name
            }
          }
        }
      })
      this.loading=false
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getBlogs']
      ),
    },
    computed: {
      ...mapState({
        index_goodsList: ({index}) => index.index_goodsList,
        index_goodsType: ({index}) => index.index_goodsType
      })
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
