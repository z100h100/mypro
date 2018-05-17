<template>
  <!--start banner-->
  <div class="mainflex">
    <div class="loading-inn" v-if="showLoading"><i class="fa fa-circle-o-notch fa-spin"></i></div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
        <router-link :to="{path:'/'}">
          <img :src="item.imgUrl" width="1920" height="620" class="tranz wp-post-image" alt=""/>
        </router-link>
        <div class="flexinside tranz content_Center">
          <div class="flexinside-inn">
            <h3></h3>
            <h3><span style="color: #c4af95;">Hello &amp; Welcome to</span></h3>
            <h2>TOP BEST GIFTS GROUP</h2>
            <router-link :to="{path:'/pro'}" class="su-button su-button-style-flat"
               style="color:#FFFFFF;background-color:#c4af95;border-color:#9d8c77;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0"
               target="_self"><span
              style="color:#FFFFFF;padding:0 20px;font-size:16px;line-height:32px;border-color:#d6c7b5;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;text-shadow:none;-moz-text-shadow:none;-webkit-text-shadow:none"> SEE MORE</span></router-link>
            <router-link :to="{path:'/pro'}" class="su-button su-button-style-flat"
               style="color:#FFFFFF;background-color:#999;border-color:#7a7a7a;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0"
               target="_self"><span
              style="color:#FFFFFF;padding:0 20px;font-size:16px;line-height:32px;border-color:#b8b8b8;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;text-shadow:none;-moz-text-shadow:none;-webkit-text-shadow:none"> LEARN MORE</span></router-link>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    </swiper>
  </div>
  <!--end banner-->
</template>

<script>
  import banner1 from '../assets/picture/1-1600x620.jpg'
  import banner2 from '../assets/picture/2-3-1600x620.jpg'
  export default {
    name: 'index_banner',
    props: {
      showLoading: {
        default: true
      }
    },
    data() {
      return {
        swiperSlides: [
          {
            name:1,
            imgUrl:banner2
          },
          {
            name:0,
            imgUrl:banner1
          }
        ],
        swiperOption: {
          autoplay: 3500,
          pagination: '.swiper-pagination',
          paginationClickable: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: true,
          spaceBetween: 0,
          effect: 'fade',
          mousewheelControl: false,
          observeParents: true
        }
      }
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
  .loading-inn {
    position: absolute;
    z-index: 999;
    background: #333;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fa-spin {
    color: #fff;
  }

</style>
