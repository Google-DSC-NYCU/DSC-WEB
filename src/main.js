import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ts from './i18n'

createApp(App).use(ts).use(router).mount('#app')

