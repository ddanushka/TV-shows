import { createRouter, createWebHistory } from 'vue-router'
import CategoryList from '../views/pages/CategoryList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CategoryList
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/pages/ViewDetails.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/pages/SearchResult.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
