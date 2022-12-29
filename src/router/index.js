import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'home',
      component:()=> import('../views/Home.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
    {
      path: '/single-course',
      name: 'single-course',
      component: () => import('../views/Single.vue')
    },

  ]
})

export default router
