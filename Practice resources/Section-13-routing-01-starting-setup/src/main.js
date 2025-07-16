import { createApp } from 'vue';
// lets register the router package so we can use it
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    // history options tells the router how to manage the routing history, so when users nav back adn forth, the history makes sure the rotuer knows what the lat page was
    history: createWebHistory(),
    // set all the routes/paths/urls that ypou want to suppot here.it will be an array because there will be multiple routes
    // tells vue which vue coimpoennts should be loaded for which url
    routes: [
        // path: is the url path that should navigate to this component
        {path: '/teams' , component: TeamsList},
        {path: '/users' , component: UsersList},
    
    ],
    // this changes the class that is added to the active link to this cusotm class, so you take control of the active link class
    // by default, vue adds the class 'router-link-active' to the active link,
    linkActiveClass: 'active', // this is the class that will be added to the active link, you can change it to whatever you want
});

// we n=eed to tell the app to use the router
// this is how we register the router with the app
// this is a global registration, so we can use the router in any component
const app = createApp(App);
app.use(router);


app.mount('#app');
