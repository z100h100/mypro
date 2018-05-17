<!--S proshowWarp-->
<template>
  <div class="preview-wrap fl">
    <div id="MagnifierWrap2">
      <div class="MagnifierMain">
        <img-zoom :previewImg="data.min" :zoomImg="data.max"></img-zoom>
      </div>
      <span class="spe_leftBtn icon-left" slot="button-prev"></span>
      <span class="spe_rightBtn icon-left" slot="button-next"></span>
      <div class="spec-items">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
            <li :class="{on:num==index}" @click="selectImgShow(item,index)"><img :src="item.img"></li>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="fd click-bigimg" title="Click Show Big Images" @click="config.visible=true"><i class="icon-search"></i></div>
    <!--S proshowWarp-->
    <myDialog :dialogconfig="config" @showVisible="showVisibleMethod">
      <div class="mc-cont clearfloat">
        <div class="layer-img fl">
          <ul class="clearfloat">
            <li><img :src="showFirsePic"></li>
          </ul>
        </div>
        <div class="layer-side fr">
          <h3 class="pro-name">{{title}}</h3>
          <div class="side-list clearfloat">
            <a href="#" v-for="(item,index) in swiperSlides" :key="index" :class="{on:index==hoverSidePic}"
               @mouseover="hoverSidePicMethod(item,index)">
              <img :src="item.img" :alt="title"></a>
          </div>
        </div>
      </div>
    </myDialog>
    <!--E proshowWarp-->
  </div>
</template>
<!--E proshowWarp-->
<script>
  import imgZoom from './common/imgZoom.vue'
  import img from '@/assets/images/goodsGig1.jpg'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'goodPreviewWrap',
    data () {
      return {
        hoverSidePic: 0,
        config: {
          className: 'mods-bigimg',
          width: '1045',
          height: '700',
          marginLeft: '-522.5',
          marginTop: '-350',
          title: 'BigImg',
          visible: false,
          closeVisible: true
        },
        data: {
          min: '',
          max: ''
        },
        title: '',
        swiperSlides: [],
        imgUrl: img,
        showFirsePic: '',
        swiperOption: {
          slidesPerView: 5,
          setWrapperSize: true,
          prevButton: '.spe_leftBtn', // 上一张
          nextButton: '.spe_rightBtn', // 下一张
          observeParents: true,
          observer: true
        },
        num: 0,
        content: '',
        configs: {
          width: 400,
          height: 400,
          maskWidth: 200,
          maskHeight: 200,
          maskColor: 'red',
          maskOpacity: 0.2
        }
      }
    },
    components: {
      imgZoom
    },
    methods: {
      ...mapActions(
        ['getGoodsInfo']
      ),
      hoverSidePicMethod (item, index) {
        this.hoverSidePic = index
        this.showFirsePic = item.img
      },
      selectImgShow (item, index) {
        this.num = index
        this.data.min = item.img
        this.data.max = item.img
      },
      callback () {
        console.log('结束')
      },
      showVisibleMethod (type) {
        this.config.visible = type
      }
    },
    mounted () {
      let param = {
        id: this.proid
      }
      this.getGoodsInfo(param).then(res=> {
        this.content = res.data.content
        this.swiperSlides = res.data.goods_cover_data
        this.showFirsePic = res.data.img
        this.data.min = res.data.img
        this.data.max = res.data.img
        this.title = res.data.title
      })
    },
    props: ['proid'],
    computed: {
      ...mapState({
        index_getGoodsInfo: ({index}) => index.index_getGoodsInfo
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "../assets/css/common.css";*/
  .pro-intro {margin-top: 20px; font-size: 14px;}
  .pro-intro .preview-wrap{ width: 400px; position: relative;}
  .pro-intro .preview-wrap .fd{ position: relative; width: 35px; height: 35px; background-color: #ccc; position: absolute;right: 0; top: 365px; z-index: 3;}
  .pro-intro .preview-wrap .fd i{ display: block; color: #FFFFFF; font-size: 25px; width: 25px; height: 29px; position: absolute; left:50%; margin-left: -12.5px; top: 50%; margin-top: -14.5px;}
  .pro-intro .preview-wrap .fd:hover { cursor: pointer; opacity: 0.8;}
  #MagnifierWrap2{position: relative;width: 400px;}
  .MagnifierMain{position: relative;width: 398px;height: 398px;border: 1px solid #f0f0f0;}
  .MagnifierMain img{width: 100%;}
  .MagnifierDrag{position: absolute;top:0;left: 0;background-color: #ccc; opacity: 0.4;filter:alpha(opacity = 40);cursor: move;}
  .MagnifierPop{position: absolute;top:0;overflow: hidden; z-index: 99;}
  .MagnifierImg{position: absolute;top:0; left: 0;}
  .spec-items{position: relative;width: 346px;height: 60px;overflow: hidden;margin:20px auto 0;}
  .spec-items ul{width: 500%;position: absolute;top:0;left: 0;}
  .spec-items ul *{-webkit-transition: all .3s;-o-transition: all .3s;transition: all .3s;}
  .spec-items li{width: 56px;height: 56px;float: left;overflow: hidden;margin-right: 10px;border: 2px solid #fff;cursor: pointer;	}
  .spec-items li.on{border:2px solid #de2124;}
  .spec-items li img{width: 100%; }
  span.spe_leftBtn,span.spe_rightBtn{position: absolute;display: block;width: 20px;height: 27px;bottom: 15px;font-size: 25px; color: #E0E0E0;}
  span.spe_leftBtn{left: 0;}
  span.spe_rightBtn{right: 0;transform: rotate(180deg);}
  span.spe_leftBtn:hover,span.spe_rightBtn:hover{ cursor: pointer; color: #de2124;}

  .mods-bigimg .mods-cont { width: 1045px; height: 700px; margin-left: -522.5px; margin-top: -350px;}
  .mods-bigimg .mc-cont { padding:25px 10px;}
  .mods-bigimg .layer-img {width: 820px;height: 600px;text-align: center; overflow-y: scroll; margin-right: 20px;}
  .mods-bigimg .layer-img li { float: left;width: 800px;height: 800px;}
  .mods-bigimg .layer-img li img{ width: 800px; height: 800px;}
  .mods-bigimg .layer-side {width: 175px;float: right;padding-top: 20px;color: #666;font-size: 12px;}
  .layer-side .pro-name {max-height: 66px;font-size: 14px;font-weight: 400;line-height: 160%;overflow: hidden;}
  .layer-side .pro-price {padding: 5px 0 8px;}
  .layer-side .pro-price span {font-size: 18px;color: #e4393c;}
  .layer-side .side-list {border: 1px solid #e4e4e4;padding: 14px;margin-top: 15px;}
  .layer-side .side-list img {width: 56px;height: 56px;}
  .layer-side .side-list a {display: inline-block;width: 56px;margin: 6px;padding: 1px;border: 1px solid #e4e4e4;}
  .side-list a.on,.side-list a:hover {padding: 0;border: 2px solid #de2124;}

  .preview-wrap .preview-info { margin-top: 20px;}
  .preview-info a { display:inline-block;left: 0; margin-right: 20px; font-size: 14px; color: #666;}
  .preview-info a i{ padding-right: 10px; color: #de2124;}
  .preview-info a.click-share { position: relative;}
  .preview-info a.click-share .code-box {top: 25px;}
  .preview-info a.bz{ float: right; margin-right: 0;}
  .preview-info a.bz i{ color: #666;}
  .preview-info a.on { color: #de2124;}

  .pro-intro .itemInfo-wrap { margin-left: 30px; width: 562px;}
  .pro-intro-name { font-size: 16px; font-weight: bold; color: #666;padding-top: 10px;line-height: 28px;margin-bottom: 5px;}
  .pro-intro-des { margin-bottom: 10px; color: #de2124; line-height: 22px;}
  .pro-intro-activity {
    background: -webkit-linear-gradient(left, #f73c37 , #f12939);
    background: -o-linear-gradient(right, #f73c37, #f12939);
    background: -moz-linear-gradient(right, #f73c37, #f12939);
    background: linear-gradient(to right, #f73c37 , #f12939);
  }
</style>
