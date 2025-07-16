import { createApp } from 'vue';
// lets register the router package so we can use it
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    // history options tells the router how to manage the routing history, so when users nav back adn forth, the history makes sure the rotuer knows what the lat page was
    history: createWebHistory(),
    // set all the routes/paths/urls that ypou want to suppot here.it will be an array because there will be multiple routes
    // tells vue which vue coimpoennts should be loaded for which url
    routes: []
});
const app = createApp(App)

app.mount('#app');
