import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

//Instancia Aplicacion
const app = createApp(App);

//Importacion modulos
app.use(router);

//Montar Aplicacion
app.mount('#app');
