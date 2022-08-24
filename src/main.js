import { createApp } from 'vue'
import { install } from 'vue-router-dom'
import App from './App.vue'

import './assets/main.css'

createApp(App).use(install).mount('#app')
