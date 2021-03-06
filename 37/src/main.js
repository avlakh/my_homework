import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

createApp(App).use(router).use(router).mount('#app')
