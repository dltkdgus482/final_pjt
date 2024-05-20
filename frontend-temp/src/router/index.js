import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    {
      path: '/article/:articleId',
      name: 'ArticleDetailView',
      component: () => import('../views/ArticleDetailView.vue')
    },
    {
      path: '/article/create',
      name: 'ArticleCreateView',
      component: () => import('../views/ArticleCreateView.vue')
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/myaccount',
      name: 'MyAccountView',
      component: () => import('../views/MyAccountView.vue')
    },
    {
      path: '/stock/:stockId',
      name: 'StockDetailView',
      component: () => import('../views/StockDetailView.vue')
    },
  ]
})

export default router
