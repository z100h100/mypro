<template>
  <div>
    <!-- /#footer  -->
    <div id="footer_fix"></div>
    <div id="buttom">
      <div class="container container_pad woocommerce">
        <div class="footerhead">
          <ul id="menu-footer-menu" class="bottom-menu">
            <li id="menu-item-926" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-926">
              <router-link :to="{ path: 'about' }">ABOUT US</router-link></li>
            <li id="menu-item-980" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-980">
              <router-link :to="{ path: 'contact' }">CONTACT US</router-link></li>
          </ul>
        </div>
        <!-- /.footerhead -->
        <div class="clearfix"></div>
        <div class="foocol first">
          <div class="textwidget custom-html-widget">
            <div style="font-size:18px;margin-top:15px;">
              ©2010-2018 TOP BEST GIFTS LIMITED All Rights Reserved.
            </div>
          </div>
        </div>
        <div class="foocol">
          <div class="textwidget custom-html-widget">
            <div style="width:100%">
            </div>
          </div>
        </div>
        <div class="foocol">
          <div class="textwidget custom-html-widget">
            <div style="width:100%">
            </div>
          </div>
        </div>
        <div class="foocol">
          <div class="textwidget custom-html-widget">
            <div>
              <p>
                CONTACT US
              </p>
              <div style="font-size:16px;">
                TOP BEST GIFTS
              </div>
              <div style="font-size:15px;">
                Tel:008613710312991
              </div>
              <div style="font-size:14px;">
                Email:sophie@topbestgifts.com
              </div>
            </div>
            <div style="margin-top:20px;">
              <p>
                FOLLOW US
              </p>
              <div style="float:left;margin-right:8px;">
                <a href="https://www.facebook.com/paesophie"><img src="../assets/picture/f.jpg" width=36 height=36></a></div>
              <div style="float:left;margin-right:8px;"><img src="../assets/picture/g.jpg" width=36 height=36></div>
              <div style="float:left;margin-right:8px;"><img src="../assets/picture/p.jpg" width=36 height=36></div>
              <div style="float:left; margin-bottom:15px;"><img src="../assets/picture/t.jpg" width=36 height=36>
              </div>
            </div>
          </div>
        </div>
        <div class="foocol last">
          <div class="textwidget custom-html-widget">
            <div style="width:100%">
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div id="copyright">
        </div>
      </div>
    </div>
    <!-- /#footer  -->
  </div>
</template>

<script>
  export default {
    name: 'buttom',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #buttom .textwidget,#buttom p {
    margin: 0 0 15px 0;
  }
  .wf-loading #buttom,
  h2.description
  {
    opacity: 0;
  }

  .ie.wf-loading #buttom,
  h2.description
  {
    visibility: hidden;
  }
  #buttom,
  h2.description {
    font-family: Poppins;
    line-height: 18px;
    font-weight: 400;
    font-style: normal;
    color: #636363;
    font-size: 25px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.24s ease-in-out;
    -moz-transition: opacity 0.24s ease-in-out;
    transition: opacity 0.24s ease-in-out;
  }
  #buttom,
  .curtain,
  #buttom .searchform input.s,
  .sticky,
  .sticky .item_inn.ghost,
  #buttom h2.widget span {
    background-color: #1e1e1e;
  }

  #buttom a,
  #buttom h3,
  #buttom #serinfo-nav li a,
  .curtain,
  .curtain a,
  #buttom .meta,
  #buttom .meta a,
  #buttom .searchform input.s,
  .sticky {
    color: #cccccc;
  }

  #buttom a:hover,
  .sticky a,
  .sticky .meta,
  .sticky .meta a,
  #buttom #serinfo-nav li.current a,
  #buttom .foocol h2 {
    color: #ffffff;
  }

  .footer-top,
  #buttom .foocol,
  #copyright,
  #buttom .tagcloud a,
  #buttom .p-border,
  .curtain ul.social-menu li a,
  #buttom .searchform input.s,
  #buttom .foocol ul li,
  #buttom ul.social-menu li a {
    border-color: #262626;
  }
</style>
