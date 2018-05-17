<template>
  <div class="hello home page-template page-template-homepage page-template-homepage-php page page-id-759 upper">
    <div class="wrapper">
      <top></top>
      <div class="clearfix"></div>
      <router-view></router-view>
      <!--bolg-->
    </div>
    <!--footer-->
    <buttom></buttom>
    <!--footer-->
    <scrollToTop></scrollToTop>
  </div>
</template>

<script>
  import top from '@/components/top.vue'
  import buttom from '@/components/buttom.vue'
  import scrollToTop from '@/components/scrollToTop.vue'
  import index_banner from '@/components/index_banner.vue'
  export default {
    name: 'templete',
    data() {
      return {

      }
    },
    components: {
      top,
      buttom,
      scrollToTop,
      index_banner
    },
    mounted(){

    },
    methods: {

    },
    computed: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-slide {
    text-align: center;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
