import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const Favorite = () => import('@/views/Favorite')
const MovieInfo = () => import('@/views/MovieInfo')
const Payment = () => import('@/views/Payment')
const PayInfo = () => import('@/views/PayInfo')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
  },
  {
    path: '/movieInfo/:id',
    component: MovieInfo,
    name: 'MovieInfo',
  },
  {
    path: '/favorite',
    component: Favorite,
    name: 'Favorite',
  },
  {
    path: '/payment',
    component: Payment,
    name: 'Payment',
  },
  {
    path: '/payInfo',
    component: PayInfo,
    name: 'PayInfo',
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history',
})

export default router
