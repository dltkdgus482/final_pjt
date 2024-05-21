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
      path: '/saving/:savingId',
      name: 'SavingDetailView',
      component: () => import('../views/SavingDetailView.vue')
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
      path: '/article/update/:articleId',
      name: 'ArticleUpdateView',
      component: () => import('../views/ArticleUpdateView.vue')
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
    {
      path: '/exchangerate',
      name: 'ExchangeRateView',
      component: () => import('../views/ExchangeRateView.vue')
    },
  ]
})

export default router
