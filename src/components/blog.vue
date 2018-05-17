<template>
  <div>
    <div class="page-header p-border">
      <img class="page-header-img" src="../assets/picture/1.jpg" alt="Blog">
      <div class="titlewrap">
        <h1 class="entry-title dekoline" itemprop="headline">Blog</h1>
      </div>
    </div>
    <div class="container container_alt">
      <!--bolg-->
      <div class="container_alt builder woocommerce">
          <div>
            <div id="ml-block-743-6" class="ml-block ml-block-ml_blog_minimal ml_span12 ml-first clearfix">
              <div class="widgetwrap widgetwrap-alt homeblog_mini" style="padding:60px 0;">
                <div class="block_bg" style="background-color:#f9f9f9;"></div>
                <!-- end title section-->
                <div class="blogger">
                  <div class="item ghost p-border" v-for="(item,index) in index_getBlogs">
                    <h4>
                      <router-link :to="{path: '/blogshow/'+item.id, params:{id: item.id}}" :title="item.title">{{item.title}}
                      </router-link>
                    </h4>
                    <router-link :to="{path: '/blogshow/'+item.id, params:{id: item.id}}" class="alink" :title="item.title">
                      <img width="70" height="70" v-lazy="item.img" class="tranz grayscale grayscale-fade wp-post-image"
                           :alt="item.title"/>
                    </router-link>
                    <p class="meta date tranz">{{item.created_at|filterDate}}</p>
                    <p class="teaser" v-html="item.content" style="word-wrap: break-word;overflow:hidden;text-overflow:ellipsis;height:80px;">{{item.content}}</p>
                    <p class="meta_more">
                      <router-link :to="{path: '/blogshow/'+item.id, params:{id: item.id}}">Read more</router-link>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <!-- end latest posts section-->
                <div class="clearfix"></div>
              </div>
              <!-- end #core -->
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      <div class="clearfix"></div>
    </div><!-- /.container -->
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'blog',
    data() {
      return {}
    },
    mounted() {
      this.getBlogs()
    },
    filters: {
      filterDate(value){
        return value.toString().split(' ')[0]
      },
      filtersFun (value){
        if (value.trim().length>100) {
          return value.toString().substring(0,100)
        }
      }
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getBlogs']
      ),
      toggleCatItem(param) {
        if (param === 0) {
          let params={
            id: 0
          }
          this.getGoods(params)
        } else {
          this.getGoods(param)
        }
      }
    },
    computed: {
      ...mapState({
        index_goodsType: ({index}) => index.index_goodsType,
        index_goodsList: ({index}) => index.index_goodsList,
        index_getBlogs: ({index}) => index.index_getBlogs,
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
