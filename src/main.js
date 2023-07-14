import './assets/scss/main.scss';
import './assets/css/all.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App).use(Antd);

app.use(createPinia());
app.use(router);

app.mount('#app');
