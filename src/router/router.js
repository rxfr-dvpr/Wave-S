import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue')
    },
    {
      path: '/catalog/:id',
      name: 'catalog product page',
      component: () => import('@/views/ProductPage.vue')
    },
  ]
})

router.beforeEach(function (to, from, next) { 
  window.scrollTo(0, 0);
  next();
})

export default router
