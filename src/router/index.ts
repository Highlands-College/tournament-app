import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { defaultRoutes } from '@/router/routes'

const routes: Array<RouteRecordRaw> = [...defaultRoutes]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
