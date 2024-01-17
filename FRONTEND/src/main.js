createApp(App).mount('#app');
import './style.css'
import './assets/bootstrap.bundle.min.js';
import './assets/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa tu configuración de Vue Router

const app = createApp(App);

app.use(router); // Utiliza Vue Router en tu aplicación

app.mount('#app');






