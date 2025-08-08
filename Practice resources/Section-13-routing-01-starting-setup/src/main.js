import { createApp } from 'vue';
// lets register the router package so we can use it
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  // history options tells the router how to manage the routing history, so when users nav back adn forth, the history makes sure the rotuer knows what the lat page was
  history: createWebHistory(),
  // set all the routes/paths/urls that ypou want to suppot here.it will be an array because there will be multiple routes
  // tells vue which vue coimpoennts should be loaded for which url
  routes: [
    // path: is the url path that should navigate to this component
    { path: '/', redirect: '/teams   ' }, // this is the default route, so when the user goes to the root url, it will redirect to the /teams list qand show the teams list component
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList, // this is the default component that will be loaded when the user goes to the /teams url
        footer: TeamsFooter // this is the footer component that will be loaded when the user goes to the /teams url
      },
      children: [
        // this is a nested route, so the TeamMembers component will be loaded inside the TeamsList component
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', 
        components:{
            default: UsersList, // this is the default component that will be loaded when the user goes to the /users url
            footer: UsersFooter // this is the footer component that will be loaded when the user goes to the /users url
        }, // this is the component that will be loaded when the user goes to the /users url
    },
    // this is a dynamic route, so the :teamId will be replaced with the actual team id
    // {path: '/teams/:teamId', component: TeamMembers},
    { path: '/:notFound(.*)', component: NotFound }, // this is a catch-all route, so if the user goes to a url that does not exist, it will rload the NotFound component
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
