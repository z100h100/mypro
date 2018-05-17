<template>
  <div class="scrollTo_top ribbon">
    <a title="Scroll to top" @click="jump(0)"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>

<script>
  export default {
    name: 'scrollToTop',
    data() {
      return {

      }
    },
    methods: {
      jump (resHeight) {
        let total = resHeight
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total + 100
          step = newTotal / 50
          smoothUp()
        }

        function smoothDown () {
          if (distance < total) {
            distance += step
            // Firefox
            document.documentElement.scrollTop = distance
            // Chrome
            document.body.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.documentElement.scrollTop = total
            document.body.scrollTop = total
            window.pageYOffset = total
          }
        }

        function smoothUp () {
          if (distance > total) {
            distance -= step
            // Firefox
            document.documentElement.scrollTop = distance
            // Chrome
            document.body.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.documentElement.scrollTop = total
            document.body.scrollTop = total
            window.pageYOffset = total
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
