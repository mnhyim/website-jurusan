import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('../views/Berita.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
