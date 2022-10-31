import { createApp } from 'vue'
import App from './App.vue'
import MyBtn from './components/MyBtn'
import router from './router'
import store from './store'

const app = createApp(App);

app.component("MyBtn", MyBtn);

app.use(router)
.use(store)
.mount('#app');
