import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

//Instancia Aplicacion
const app = createApp(App);

//Importacion modulos
app.use(router);
app.use(VueAxios, axios);

//Montar Aplicacion
app.mount('#app');
