import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import UsersList from './views/UsersList.vue'
import axios from 'axios';
import axiosInstance from './axios'; 

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/users', component: UsersList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;


app.use(router);
app.mount('#app');
