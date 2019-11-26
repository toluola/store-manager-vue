import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  }
]

const router = new VueRouter({
  routes
})

export default router
