import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView'
import AuthView from '../views/AuthView'
import RegisterView from '../views/RegisterView'
import ProfileView from '../views/ProfileView'
import OrdersView from '../views/OrdersView'

const routes = [
  {
    path: '/',
    name: 'authentication',
    component: AuthView
  },
  {
    path: '/sign_up',
    name: 'registration',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: MainPageView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
