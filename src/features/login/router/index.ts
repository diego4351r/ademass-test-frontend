import { RouteRecordRaw } from 'vue-router'
import AuthPage from '../pages/AuthPage.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import LoginView from '../views/LoginView.vue'
import PasswordRecoveryView from '../views/PasswordRecoveryView.vue'

const ROUTE = 'auth'

export const authRoutes: RouteRecordRaw = {
  path: `/${ROUTE}`,
  name: 'auth',
  component: AuthPage,
  children: [
    {
      path: `/${ROUTE}/login`,
      name: 'login',
      component: LoginView
    },
    {
      path: `/${ROUTE}/password-recovery`,
      name: 'password-recovery',
      component: PasswordRecoveryView
    },
    {
      path: `/${ROUTE}/create-account`,
      name: 'create-account',
      component: CreateAccountView
    }
  ]
}
