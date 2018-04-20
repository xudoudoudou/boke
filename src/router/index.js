import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Resume from '@/components/Resume'
import Article from '@/components/Article'
import Work from '@/components/Work'
import Web from '@/components/Web'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/main'
    },
    {
      path: '/',
      component: Home,
      children:[
        // 主页内容
        {
          path:'/main',
          name:'main',
          component:Main,
        },
        // 关于个人信息/简历
        {
          path: '/resume',
          name: 'resume',
          component: Resume,
        },
        // 学习文档
        {
          path: '/article',
          name: 'article',
          component: Article,
        },
        {
          path: '/work',
          name: 'work',
          component: Work,
        },
        // 前端知识库
        {
          path: '/web',
          name: 'web',
          component: Web,
        },
      ]
    }
  ]
})
