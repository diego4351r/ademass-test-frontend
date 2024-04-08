import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import LabelTextDirective from './directives/labelTextDirective'

createApp(App)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(router)
  .directive('label-text', LabelTextDirective)
  .mount('#app')
