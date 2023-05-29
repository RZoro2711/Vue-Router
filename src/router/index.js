import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/job/JobsView.vue'
import JobDetail from '../views/job/JobsDetailView.vue'
import NotFound from "../views/NotFoundPage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : About,
  },
  {
    path : '/jobs',
    name : 'Job',
    component : Jobs,
  },
  {
    path : '/job/detail/:id',
    name : 'Job/Detail',
    component : JobDetail,
    props : true,
  },
  {
    path : '/all-job',
    redirect : '/jobs',
  },
  {
    path : '/:catchAll(.*)',
    component : NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
