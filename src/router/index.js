import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component:()=>import('@/views/songs/songs'),
    },
    {
      path: '/songs',
      name:'songs',
      component:()=>import('@/views/songs/songs'),
    },
    {
      path:'/mysongs',
      name:'mysongs',
      component:()=>import('@/views/mysongs/mysongs'),
    },
    {
      path:'/songlist',
      name:'songlist',
      component:()=>import('@/views/songlist/songlist'),
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('@/views/search/search'),
    }
  ]
})
