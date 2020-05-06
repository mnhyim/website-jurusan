import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {title: 'Home'},
    component: () => import('../views/Home.vue')
  },

  {
    path: '/about',
    name: 'About',
    meta: {title: 'About'},
    component: () => import('../views/About.vue')
  },

  {
    path: '/berita',
    name: 'Berita',
    meta: {title: 'Berita'},
    component: () => import('../views/Berita.vue')
  },

  {
    path: '/jurusan/:jurusan',
    meta: {title: 'Jurusan'},
    component:() => import('../views/Jurusan.vue')
  },

  {
    path: '*',
    name: '404',
    meta: {title: 'Error 404'},
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    window.scrollTo(0,0);
  },
  mode: 'history',
  routes
})


export default router