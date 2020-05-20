import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: 'Home'},
    component: () => import('../views/Home.vue')
  },

  {
    path: '/about',
    name: 'about',
    meta: {title: 'About'},
    component: () => import('../views/About.vue')
  },

  {
    path: '/berita',
    name: 'berita',
    meta: {title: 'Berita'},
    component: () => import('../views/Berita.vue')
  },

  {
    path: '/jurusan/:jurusan',
    name: 'jurusan',
    props: true,
    meta: {title: 'Jurusan'},
    component:() => import('../views/Jurusan.vue')
  },

  {
    path:'/test',
    component:()=> import('../views/test.vue')
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