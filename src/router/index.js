import { createRouter, createWebHistory } from 'vue-router'
import CategoryList from '../views/pages/CategoryList.vue'

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: CategoryList
  },
  {
    path: '/category/:id',
    component: () => import('../views/pages/CategoryDetails.vue')
  },
  {
    path: '/view/:id',
    name: 'home',
    component: () => import('../views/pages/ViewDetails.vue')
  },
  {
    path: '/search/:keyword',
    name: 'search',
    component: () => import('../views/pages/SearchResult.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
