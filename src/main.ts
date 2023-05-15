import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
// import LottieAnimation from "lottie-web-vue";

createApp(App).use(router).mount('#app')
// createApp(App).use(router).use(LottieAnimation).mount('#app')