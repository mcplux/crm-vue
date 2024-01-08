import './assets/main.css'

import { createApp } from 'vue'
import { defaultConfig, plugin } from '@formkit/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(plugin, defaultConfig())
app.use(router)

app.mount('#app')
