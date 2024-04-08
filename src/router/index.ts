import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '../features/login/router/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'login'}
    },
    {
      ...authRoutes,
      path: '/auth',
      name: 'auth',
    },

    {
      path: '/:pathMatch(.*)*',
      // redirect: () => ({ name: 'home' }),
      redirect: () => {
        console.log('ruta no existe')
        return { name: 'home' }
      }
    }
  ]
})

export default router
