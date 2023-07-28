import Main from '@/pages/Main.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router