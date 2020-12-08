import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'songs',
      component:()=>import('@/views/songs/songs'),
    },
    {
      path:'/songs',
      name:'songs',
      component:()=>import('@/views/songs/songs'),
    }
  ]
})
