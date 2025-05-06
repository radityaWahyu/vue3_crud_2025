import { createRouter, createWebHistory } from 'vue-router'
import HalamanDepan from '../views/HalamanDepan.vue'
import HalamanTentang from '@/views/HalamanTentang.vue'
import DaftarSiswa from '@/views/DaftarSiswa.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HalamanDepan,
    },
    {
      path: '/tentang',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HalamanTentang,
    },
    {
      path: '/siswa',
      name: 'siswa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DaftarSiswa,
    },
  ],
})

export default router
