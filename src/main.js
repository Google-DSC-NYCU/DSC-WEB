import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ts from './i18n'

// import { ViteSSG } from 'vite-ssg'

// export const createApp = ViteSSG(
//   // the root component
//   App,
//   // vue-router options
//   router,
//   // function to have custom setups
//   // ts
// )

createApp(App).use(ts).use(router).mount('#app')

