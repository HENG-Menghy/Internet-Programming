import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import button from './components/button.vue'
import category from './components/category.vue'
import promotion from './components/promotion.vue'
const app = createApp(App)
app.component('button-component', button)
app.component('category-component', category)
app.component('promotion-component', promotion)
app.use(createPinia())
app.mount('#app')
