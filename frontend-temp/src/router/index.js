import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'MainView',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/deposit',
      name: 'DepositView',
      component: () => import('../views/DepositView.vue')
    },
    {
      path: '/stock',
      name: 'StockView',
      component: () => import('../views/StockView.vue')
    },
    {
      path: '/article',
      name: 'ArticleView',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/map',
      name: 'MapView',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/deposit/:depositId',
      name: 'DepositDetailView',
      component: () => import('../views/DepositDetailView.vue')
    },
  ]
})

export default router
