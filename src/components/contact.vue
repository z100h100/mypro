<template>
  <div>
    <div class="page-header p-border">
      <img class="page-header-img" src="../assets/picture/1.jpg" alt="Contact Us">
      <div class="titlewrap">
        <h1 class="entry-title dekoline" itemprop="headline">Contact Us</h1>
      </div>
    </div>
    <div class="container container_alt">
      <div id="core">
        <div class="postbarLeft">
          <div id="content" class="eightcol first">
            <div class="post-544 page type-page status-publish hentry">
              <div class="item_inn tranz p-border ghost">
                <!--quote-->
                <div class="item_inn tranz p-border ghost">
                  <div class="entry pageentry">
                    <p>Call or submit our online form to request an estimate or for general questions about WP Industry Inc. and our services. We look forward to serving you!</p>
                    <p>&nbsp;</p>
                    <div role="form" class="wpcf7" id="wpcf7-f690-p691-o1" lang="en-US" dir="ltr">
                      <div class="screen-reader-response"></div>
                      <div class="wpcf7-form" ref="comments">
                        <p class="sixcol">
                          Your Name (required)<br>
                          <span class="wpcf7-form-control-wrap your-name">
                            <input type="text" name="your-name" v-model="comments.name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"></span> <br>
                          Your Email (required)<br>
                          <span class="wpcf7-form-control-wrap your-email">
                            <input type="email" name="your-email" v-model="comments.email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"></span> <br>
                          Your Phone Number (required)<br>
                          <span class="wpcf7-form-control-wrap your-tel">
                            <input type="text" name="your-tel"  v-model="comments.phone" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"></span>
                        </p>
                        <p class="sixcol last">
                          Your Message<br>
                          <span class="wpcf7-form-control-wrap your-message">
                            <textarea  v-model="comments.content"  name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea>
                          </span>
                          <br>
                          <input type="submit" value="Send" @click="handleClick" class="wpcf7-form-control wpcf7-submit">
                          <span class="ajax-loader"></span></p>
                        <div class="wpcf7-response-output wpcf7-display-none"></div></div></div>
                  </div>
                  <div class="clearfix"></div>
                  <div id="comments">
                    <p class="nocomments">Comments are closed.</p>
                  </div><!-- #comments -->
                </div>
              </div><!-- .item_inn tranz p-border ghost -->
            </div>
            <div class="clearfix"></div>
          </div><!-- #content -->
        </div><!-- .postbarLeft -->
      </div>
    </div><!-- /.container -->
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'

  export default {
    name: 'quote',
    data() {
      return {
        comments: {
          name:'',
          email:'',
          subject:'',
          phone:'',
          content:'',
          interest_in:''
        }
      }
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'addContact']
      ),
      handleClick(){
        let param=Object.assign(this.comments,{})
        this.addContact(param).then(res=>{
          if (res.data.status_code=='200'){
            this.$message({
              message: 'success',
              type: 'success'
            })
            this.comments={
              name:'',
              email:'',
              subject:'',
              phone:'',
              content:'',
              interest_in:''
            }
          }else {
            this.$message({
              message: 'error',
              type: 'error'
            })
          }
        })
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
