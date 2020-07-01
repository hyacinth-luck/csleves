import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import webZoom from '../pages/webZoom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '智能客服'
      }
    },
    {
        path: '/webZoom',
        name: 'webZoom',
        component: webZoom,
        meta: {
          title: 'web zoom'
        }
      },
    {
      path: '*',
      redirect: '/Index'
    }
  ]
})
