import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/templete'], resolve),
      children: [
        {
          path: '',
          name: '首页',
          component: resolve => require(['@/components/index'], resolve)
        },
        {
          path: '/index',
          name: '首页index',
          component: resolve => require(['@/components/index'], resolve)
        },
        {
          path: '/about',
          name: '关于我们',
          component: resolve => require(['@/components/aboutUs'], resolve)
        },
        {
          path: '/news',
          name: '新闻',
          component: resolve => require(['@/components/news'], resolve)
        },
        {
          path: '/newsshow/:id',
          name: '新闻展示',
          component: resolve => require(['@/components/newsshow'], resolve)
        },
        {
          path: '/blog',
          name: '博客',
          component: resolve => require(['@/components/blog'], resolve)
        },
        {
          path: '/blogshow/:id',
          name: '博客展示',
          component: resolve => require(['@/components/blogshow'], resolve)
        },
        {
          path: '/quote',
          name: '信息',
          component: resolve => require(['@/components/quote'], resolve)
        },
        {
          path: '/contact',
          name: '联系我们',
          component: resolve => require(['@/components/contact'], resolve)
        },
        {
          path: '/pro',
          name: '产品信息',
          component: resolve => require(['@/components/pro'], resolve)
        },
        {
          path: '/pro/:id',
          name: '产品分类列表',
          component: resolve => require(['@/components/pro'], resolve)
        },
        {
          path: '/proshow/:id',
          name: '个体产品信息',
          component: resolve => require(['@/components/proshow'], resolve)
        },
        {
          path: '*',
          name: '错误页',
          component: resolve => require(['@/components/quote'], resolve)
        }
      ]
    },
  ]
})
