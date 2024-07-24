import { createApp } from 'vue';
import App from './App.vue';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

// global components
import Header from './components/header/Header.vue';
import Loader from './components/utils/loader.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',Loader);
app.use(ToastPlugin);
app.mount('#app');
