import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(VueAxios, axios).mount('#app')