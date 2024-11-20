import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'


const app = createApp(App) // create app 

// create a store, configure app to use the store
const piniaStore = createPinia()
app.use(piniaStore)

//show in browser inthe div with id = 'app'
app.mount('#app')
