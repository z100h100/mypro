<template>
  <div>
    <div class="page-header p-border">
      <img class="page-header-img" src="../assets/picture/1.jpg" :alt="index_getBlogsInfo.title">
      <div class="titlewrap">
        <h1 class="entry-title dekoline" itemprop="headline">{{index_getBlogsInfo.title}}</h1>
      </div>
    </div>
    <div class="container container_alt">
      <div id="core">
        <div class="postbarLeft">
          <div id="content" class="eightcol first">
            <div class="post-544 page type-page status-publish hentry">
              <div class="item_inn tranz p-border ghost">
                <div class="entry pageentry">
                  <h3><a :href="index_getBlogsInfo.img"
                         data-gal="prettyPhoto" rel="attachment wp-att-841"><img
                    class="alignright size-medium wp-image-841" v-lazy="index_getBlogsInfo.img"
                    alt="spoons-629921_1920" width="300" height="200"></a>{{index_getBlogsInfo.title}}</h3>
                  <div  style="width: 600px;float: left;word-wrap: break-word;" v-html="index_getBlogsInfo.content">{{index_getBlogsInfo.content}}</div>
                </div>
                <div class="clearfix"></div>
                <div class="postinfo">
                  <div class="postauthor vcard author rad">
                    <p class="authorline p-border">
                      <img alt=""
                           src="https://secure.gravatar.com/avatar/f04b576190d1fae8539b13c4ae1a1f6f?s=30&amp;d=mm&amp;r=g"
                           class="avatar avatar-30 photo" height="30" width="30">Written
                      by:<a href="#" title="Posts by admin" rel="author">admin</a></p>
                    <div class="authordesc"></div>
                    <div class="authoricons">
                      <p>
                        <a href="" class="hidd" target="_blank"><i class="fa fa-facebook"></i></a>
                        <a href="" class="hidd" target="_blank"><i class="fa fa-twitter"></i></a>
                        <a href="?rel=author" class="hidd" target="_blank"><i class="fa fa-google-plus"></i></a>
                        <a href="" class="hidd" target="_blank"><i class="fa fa-pinterest"></i></a>
                        <a href="" class="hidd" target="_blank"><i class="fa fa-instagram"></i></a>
                        <a href="" class="hidd" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="" itemprop="url" class="hidd" target="_blank"><i class="fa fa-link"></i></a>
                      </p>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <!--<span class="likes"><a href="#" class="jm-post-like" data-post_id="587" title="Like"><i-->
                    <!--class="icon-heart-empty"></i>&nbsp;2</a></span>-->
                </div>
                <div class="clearfix"></div>
                <div id="comments">
                  <div id="respond" class="comment-respond">
                    <div id="commentform" class="comment-form">
                      <p class="comment-notes">
                        <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked <span class="required">*</span></p>
                      <p class="comment-form-comment"><label for="comment">Comment</label>
                        <textarea id="comment"
                                  name="comment"
                                  cols="45"
                                  rows="8"
                                  maxlength="65525"
                                  required="required" v-model="comments.content"></textarea>
                      </p>
                      <p class="comment-form-author"><label for="author">Name <span class="required">*</span></label>
                        <input id="author" name="author" type="text" value="" size="30" maxlength="245"
                               required="required"  v-model="comments.name"></p>
                      <p class="comment-form-email"><label for="email">Email <span class="required">*</span></label>
                        <input id="email" name="email" type="text" value="" size="30" maxlength="100"
                               aria-describedby="email-notes" required="required"  v-model="comments.email"></p>
                      <p class="comment-form-url"><label for="url">Website</label>
                        <input id="url" name="url"
                               type="text" value=""
                               size="30" maxlength="200"  v-model="comments.Website">
                      </p>
                      <p class="form-submit">
                        <input name="submit" id="submit" class="submit" value="Post Comment" @click="handleSubmit">
                      </p></div>
                  </div><!-- #respond -->

                </div><!-- #comments -->

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
    name: 'blogshow',
    data() {
      return {
        comments:{
          name: '',
          content:'',
          email: '',
          Website: '',
          blog_id: this.$route.params.id
        }
      }
    },
    mounted() {
      let param=this.$route.params
      this.getBlogsinfo(param)
    },
    filters: {
      filterDate(value){
        return value.toString().split(' ')[0]
      }
    },
    methods: {
      ...mapActions(
        ['getgoodstype', 'getGoods', 'getBlogs', 'getBlogsinfo', 'addBlogReply']
      ),
      handleSubmit(){
        this.addBlogReply(this.comments).then(res=>{
          if (res.data.status_code=='200'){
            this.$message({
              message: 'success',
              type: 'success'
            })
            this.comments={
              name: '',
              content:'',
              email: '',
              Website: '',
              blog_id: this.$route.params.id
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
        index_getBlogsInfo: ({index}) => index.index_getBlogsInfo
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-header h1{color: #fff !important;}
  .flexinside h1,.flexinside h2,h1.entry-title,h2.posttitle{font-family:Tillana;line-height:42px;font-weight:600;font-style:normal;color:#222;font-size:40px;opacity: 1;visibility: visible;-webkit-transition: opacity 0.24s ease-in-out;-moz-transition: opacity 0.24s ease-in-out;transition: opacity 0.24s ease-in-out;}
</style>
