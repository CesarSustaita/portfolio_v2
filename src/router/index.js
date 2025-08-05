import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import CSUIKIT from '@/views/ProjectsView/CSUIKIT.vue'
import ETN from '@/views/ProjectsView/ETN.vue'
import UASLPUIKIT from '@/views/ProjectsView/UASLPUIKIT.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/MakingOf',
      name: 'MakingOf',
      component: () => import('../views/MakinOfView.vue'),
    },
    {
      path: '/Inspiration',
      name: 'Inspiration',
      component: () => import('../views/InspirationView.vue'),
    },
    {
    path: '/cs-ui-kit',
    name: 'CSUIKit',
    component: CSUIKIT
    },
    {
    path: '/uaslp-ui-kit',
    name: 'UASLPUIKIT',
    component: UASLPUIKIT
    },
    {
    path: '/etn-design',
    name: 'ETN',
    component: ETN
    },
  ],
})

export default router
