import component from '*.vue'

import { RouteRecordRaw } from 'vue-router'

const defaultRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/scoring',
        name: 'Scoring',
        component: () => import('@/views/Scoring.vue')
    },
    {
        path: '/results',
        name: 'Results',
        component: () => import('@/views/Results.vue')
    }
]

export { defaultRoutes }
