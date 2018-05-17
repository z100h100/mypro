<template>
  <div>
    <!--start banner-->
    <index_banner :showLoading="showLoading"></index_banner>
    <!--end banner-->
    <div class="clearfix"></div>

    <!--start Solution-->
    <div class="container_alt builder woocommerce">
      <div>
        <div id="ml-block-743-2" class="ml-block ml-block-ml_mp_services ml_span12 ml-first clearfix">
          <div class="widgetwrap widgetwrap-alt" style="padding:80px 0;">
            <div class="block_bg" style="background-color:#f9f9f9;"></div>
            <h2 class="block">
              <span class="subtitle">One Stop Solution for</span>
              <span class="maintitle" style="background-color:#f9f9f9;">
                  Your Branding &amp; Marketing
                </span>
            </h2>
            <!-- end title section-->
            <div>
              <div class="mp-wrap">
                <ul class="mpbox col3 modern boxed">
                  <li class="mp-services tranz in-new-window">
                    <div class="mp-inner tranz">
                      <h3>
                        <img width="60" height="49" src="../assets/picture/1.jpg"
                             class="attachment-service-thumb size-service-thumb wp-post-image" alt=""/>
                        Free Artwork Design
                      </h3>
                      <p>Professional Design Team Supports the Designs Efficiently.</p>
                    </div>
                  </li>
                  <li class="mp-services tranz in-new-window">
                    <div class="mp-inner tranz">
                      <h3>
                        <img width="63" height="50" src="../assets/picture/2-1.jpg"
                             class="attachment-service-thumb size-service-thumb wp-post-image" alt=""/>
                        One Stop Purchase Solution
                      </h3>
                      <p>From purchase to inspection and shipment, we will take care of every process for you.</p>
                    </div>
                  </li>
                  <li class="mp-services tranz in-new-window">
                    <div class="mp-inner tranz">
                      <h3>
                        <router-link :to="{path:'/about'}">
                          <img width="49" height="49" src="../assets/picture/3-1.jpg"
                               class="attachment-service-thumb size-service-thumb wp-post-image" alt=""/></router-link>
                        <router-link :to="{path:'/about'}">Long Term Responsible Support</router-link>
                      </h3>
                      <p>You can depend on high-quality service. We will treat every email within 24 hours. (Usually
                        much faster)</p>
                      <router-link class="mp-more tranz" :to="{path:'/about'}">Read More <i
                        class="fa fa-angle-right"></i>
                      </router-link>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div id="ml-block-743-3" class="ml-block ml-block-ml_text_block_action ml_span12 ml-first clearfix">
        </div>
      </div>
    </div>
    <!--end Solution-->

    <!--start quiz-->
    <div class="widgetwrap widgetwrap-alt text-full text-action"
         style="padding:100px 0;color:#fff !important;background-color:#353535;">
      <div class="container builder woocommerce" style="padding:100px 0;">
        <h2 class="block block-action" style="color:#fff;">
          <span class="maintitle">Get involved. Free design support.</span><br/>
          <span class="subtitle" style="color:#fff;">Don&#039;t hesitate and contact us.</span>
        </h2>
        <router-link class="morebutton rad actionbutton" :to="{ path: '/quote' }">Request a Quote</router-link>
      </div>
    </div>
    <!--end quiz-->

    <!--product-->
    <div class="container_alt builder woocommerce">
      <div>
        <div id="ml-block-743-4" class="ml-block ml-block-ml_portfolio_block ml_span12 ml-first clearfix">
          <div class="widgetwrap widgetwrap-alt" style="padding:60px 0;">
            <div class="block_bg" style="background-color:#f5f5f5;"></div>
            <!-- end title section-->
            <div class="mp-wrap">
              <div id="portfolio-filter" class="clearfix ">
                <ul>
                  <li><a :class="{'active':toggleAll}" @click="toggleCatItem(0)">All</a></li>
                  <li class="cat-item" v-for="(item, index) in index_goodsType" v-if="index<6">
                    <a @click="toggleCatItem(item,index)" :class="{'active':index==toggleItemType}">{{item.name}}</a>
                  </li>
                </ul>
              </div>
              <ul class="folio mpbox col3 isotopefolio">
                <li class="isoitem Normal" v-for="(item, index) in index_goodsList" :key="index" v-if="index<9">
                  <div class="item post tranz classic3 Normal">
                    <div class="imgwrap">
                      <router-link :to="{path: '/proshow/'+item.id}" :title="item.title">
                        <img v-lazy="item.img" style="width: 353px;height: 297px"
                             class="tranz grayscale grayscale-fade wp-post-image"/>
                      </router-link>
                      <router-link :to="{path: '/proshow/'+item.id}" class="hoverstuff hoverstuff-zoom"
                                   data-gal="prettyPhoto[gallery]"><i
                        class="fa fa-search"></i></router-link>
                      <router-link :to="{path: '/proshow/'+item.id}"  class="hoverstuff hoverstuff-link"><i
                        class="fa fa-info-circle"></i></router-link>
                    </div>
                    <div class="item_inn tranz ghost">
                      <h3 class="tranz2">
                        <router-link :to="{path: '/proshow/'+item.id}" :title="item.title">{{item.title}}
                        </router-link>
                      </h3>
                      <span class="meta tranz"></span>
                    </div>
                    <!-- end .item_inn -->
                  </div>
                </li>
                <!-- end post -->
              </ul>
              <!-- end latest posts section-->讨论，没
              <div class="clearfix"></div>
              <router-link class="rad morebutton tranz" :to="{path:'/pro'}">All Projects <i
                class="fa fa-chevron-right"></i></router-link>
              <!-- end latest -->
            </div>
          </div>
        </div>
        <div id="ml-block-743-5" class="ml-block ml-block-ml_text_block_full ml_span12 ml-first clearfix">
        </div>
      </div>
    </div>
    <!--product-->
    <div class="widgetwrap widgetwrap-alt text-full"
         style="padding:100px 0;color:#ffffff !important;background-color:#000000;">
      <h2 class="block" style="color:#ffffff;">
        <span class="maintitle">Top Best Gifts Group</span>
        <span class="subtitle" style="color:#ffffff;">15 Years of Gift Items Experience</span>
      </h2>
    </div>
    <!--bolg-->
    <div class="container_alt builder woocommerce">
      <div>
        <div id="ml-block-743-6" class="ml-block ml-block-ml_blog_minimal ml_span12 ml-first clearfix">
          <div class="widgetwrap widgetwrap-alt homeblog_mini" style="padding:60px 0;">
            <div class="block_bg" style="background-color:#f9f9f9;"></div>
            <h2 class="block">
              <span class="subtitle">Passion for DIY</span>
              <span class="maintitle" style="background-color:#f9f9f9;">Check More from Our Blog</span>
            </h2>
            <!-- end title section-->
            <div class="blogger">
              <div class="item ghost p-border" v-for="(item,index) in index_getBlogs">
                <h4>
                  <router-link :to="{path: '/blog/'+item.id}" :title="item.title">{{item.title}}
                  </router-link>
                </h4>
                <router-link :to="{path: '/blog/'+item.id}" class="alink" :title="item.title">
                  <img width="70" height="70" v-lazy="item.img" class="tranz grayscale grayscale-fade wp-post-image"
                       :alt="item.title"/>
                </router-link>
                <p class="meta date tranz">{{item.created_at|filterDate }}</p>
                <p class="teaser" v-html="item.content" style="word-wrap: break-word;overflow:hidden;text-overflow:ellipsis;height:80px;">{{item.content}}</p>
                <p class="meta_more">
                  <router-link :to="{path: '/blog/'+item.id}">Read more</router-link>
                </p>
              </div>
              <div class="clearfix"></div>
              <router-link class="morebutton" :to="{path: '/blog'}">More From Blog <i
                class="fa fa-angle-double-right"></i></router-link>
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
  </div>
</template>

<script>
  import index_banner from '@/components/index_banner.vue'
  import {mapState, mapActions} from 'vuex'
  import pro1 from '../assets/localImages/Silicone Wristband.jpg'
  import pro2 from '../assets/localImages/Plastic Sunvisor.jpg'
  import pro3 from '../assets/localImages/Slap Wristband.jpg'
  import pro4 from '../assets/localImages/Custom-promotional-metal-star-lapel-badge-pin.jpg'
  import pro5 from '../assets/localImages/Baseball Cap.jpg'
  import pro6 from '../assets/localImages/Aluminum keychain.jpg'
  import pro7 from '../assets/localImages/Custom Keychain.jpg'
  import pro8 from '../assets/localImages/sun visor cap embroidery cotton visors.jpg'
  import pro9 from '../assets/localImages/Branded Pen.jpg'

  export default {
    name: 'index',
    data() {
      return {
        showLoading: true,
        params: {
          id: 0
        },
        toggleAll: true,
        toggleItemType: -1
      }
    },
    components: {
      index_banner
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
    mounted() {
      this.getgoodstype().then(res=>{
        this.showLoading = false
      })
      this.getGoods(this.params)
      this.getBlogs()
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getBlogs']
      ),
      toggleCatItem(param,index) {
        if (param === 0) {
          return false
        } else {
          this.$router.push({path:'/pro/'+param.id})
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
  #portfolio-filter a {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
</style>
