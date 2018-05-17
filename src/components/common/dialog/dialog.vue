<template>
  <div class="modshade" :class="dialogconfig.className" v-if="dialogconfig.visible"><!-- mods-a为弹窗自定义类名-->
    <div class="mods-cont" v-bind:style="{ width: dialogconfig.width+ 'px', height: dialogconfig.height + 'px','margin-left':dialogconfig.marginLeft+'px','margin-top':dialogconfig.marginTop+'px'}">
      <div class="mc-tit">
        <big>{{dialogconfig.title}}</big>
        <b>{{dialogconfig.description}}</b>
        <i class="icon-gb click-close" v-if="dialogconfig.closeVisible" @click="clickCloseDialog"></i>
      </div>
      <div class="mc-cont">
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myDialog',
    props: {
      dialogconfig: {
        type: Object,
        default: function () {
          return {
            className: '',
            width: '260',
            height: '200',
            marginLeft: '0',
            marginTop: '0',
            title: '信息',
            description: '',
            visible: false,
            closeVisible: true
          }
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      clickCloseDialog () {
        this.$emit('showVisible', false)
      }
    }
  }
</script>
<style scoped>
  .modshade {
    position: fixed;
    z-index: 103;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
  .mods-examine .mc-cont{text-align:center;padding: 60px 0;}
</style>
