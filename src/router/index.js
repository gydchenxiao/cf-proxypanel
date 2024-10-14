import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  const token = localStorage.getItem('token')
  if ((to.name !== 'login' && to.name !== 'register' && to.name !== 'forgetpassword') && !token) {
    return { name: 'login' }
  }
})
export default router
