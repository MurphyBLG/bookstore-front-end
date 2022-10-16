import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'

createApp(App).use(router).mount('#app')
App.component('PaginatorInst', Paginate)    