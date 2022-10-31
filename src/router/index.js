import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView'
import AuthView from '../views/AuthView'
import RegisterView from '../views/RegisterView'

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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
