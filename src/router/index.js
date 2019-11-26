import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import AttendantDashboard from '@/components/AttendantDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'attendant-dashboard',
    component: AttendantDashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
