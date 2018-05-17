<template>
  <div id="header" class="tranz" :class="searchTop">
    <div id="header_inn" class="tranz">
      <div class="container_alt container_pad">
        <div id="titles" class="tranz">
          <h1><router-link :to="{path: '/'}">
            <img src="../assets/images/top.jpg" style="height: 80px;"/>
          </router-link></h1>
          <div class="clearfix"></div>
        </div>
        <nav id="navigation" class="tranz">
          <ul id="main-nav" class="nav">
            <li id="menu-item-931"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-759 current_page_item">
              <router-link :to="{ path: '/index' }">Home</router-link></li>
            <li id="menu-item-925" class="menu-item menu-item-type-post_type menu-item-object-page">
              <router-link :to="{ path: '/about' }">ABOUT US</router-link></li>
            <li id="menu-item-897"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
              <router-link :to="{path:'/pro'}">PRODUCTS</router-link>
              <ul class="sub-menu">
                <li id="menu-item-921" v-for="(item,index) in index_getGoodsTypeAndGoods" v-if="index<5"
                    class="menu-item menu-item-type-post_type menu-item-object-page">
                  <router-link :to="{path:'/pro/'+item.id}">{{item.name}}</router-link>
                  <ul class="sub-menu">
                    <li v-for="(item1, index1) in item.goods_list" :key="index1"class="menu-item menu-item-type-taxonomy menu-item-object-category">
                      <router-link :to="{path:'/proshow/'+item1.id}">{{item1.title}}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li id="menu-item-902" class="menu-item menu-item-type-post_type menu-item-object-page">
              <router-link :to="{ path: '/blog' }">BLOG</router-link></li>
            <li id="menu-item-982" class="menu-item menu-item-type-post_type menu-item-object-page">
              <router-link :to="{ path: '/contact' }">CONTACT US</router-link></li>
          </ul>
        </nav>
      </div>
      <!-- end .container  -->
    </div>
    <!-- end #header_inn  -->
  </div>

</template>

<script>
  import store from '@/store/store'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'top',
    data() {
      return {
        wScrollY: 0,
        index_goods: []
      }
    },
    mounted(){
      this.getGoodsTypeAndGoods()
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
      })
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getGoodsTypeAndGoods']
      ),
      onScroll () {
        this.wScrollY = window.scrollY
      }
    },
    computed: {
      ...mapState({
        index_getGoodsTypeAndGoods: ({index}) => index.index_getGoodsTypeAndGoods
      }),
      searchTop() {
        if (this.wScrollY > 100) {
          return 'scrolled'
        }
        return ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
