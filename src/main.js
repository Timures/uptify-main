import { createApp } from 'vue'

import App from './App.vue'
import './assets/scss/global.scss'

import Layout from './layouts/Layout.vue'
import router from './router/router'


const app = createApp(App)
app.component('Layout', Layout)
app.use(router)
app.mount('#app')
