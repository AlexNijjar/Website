import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueGtag from 'vue-gtag'

import './assets/main.css'

createApp(App)
  .use(store)
  .use(VueGtag, {
    config: { id: 'G-BH0QGCB8TF' }
  })
  .mount('#app')