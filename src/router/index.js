import Vue from 'vue'
import Router from 'vue-router'
const Index  = () => import('../pages/Index.vue')
const webZoom = () => import('../pages/webZoom.vue')
const XSS = () => import('../pages/XSS.vue')
const CSRF = () => import('../pages/CSRF.vue')
 
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
        path: '/xss',
        name: 'xss',
        component:XSS,
        meta: {
          title: 'XSS'
        }
      },
      {
        path: '/csrf',
        name: 'csrf',
        component:CSRF,
        meta: {
          title: 'csrf'
        }
      },
    {
      path: '*',
      redirect: '/Index'
    }
  ]
})
