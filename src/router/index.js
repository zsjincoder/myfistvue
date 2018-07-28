import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path:'/',
      component:resolve=>require(['../components/common/Home.vue'],resolve),
      meta:{title:"布局"},
      children:[
        {
          path:'/main',
          name:'Main',
          component:resolve=>require(['../components/page/Main.vue'],resolve),
          meta:{title:"内容"}
        },
        {
          path:'/homepage',
          name:'Homopage',
          component:resolve=>require(['../components/page/Homepage.vue'],resolve),
          meta:{title:"内容"}
        }
      ]
    },
    {
      path:'/child',
      name:'Test',
      component: resolve =>require(['../components/child/Test.vue'],resolve),
      meta:{title:'测试'}
    }
  ]
})
