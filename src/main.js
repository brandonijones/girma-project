import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'mdb-vue-ui-kit/css/mdb.min.css';
// import 'jquery/dist/jquery.slim.min.js';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';


createApp(App).use(router).mount('#app')
