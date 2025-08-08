// lets register the router package so we can use it
import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

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
        beforeEnter(to, from, next) {
          // this is a navigation guard, so it will be called before the route is loaded
          console.log('Navigation Guard', to, from);
          // you can add logic here to check if the user is allowed to access the route or not
          // for example, you can check if the user is authenticated or not
          next(); // this tells the router to continue loading the route, if you want to cancel the route, you can call next(false) or next('/some-other-route') to redirect the user to another route
        }
    },
    // this is a dynamic route, so the :teamId will be replaced with the actual team id
    // {path: '/teams/:teamId', component: TeamMembers},
    { path: '/:notFound(.*)', component: NotFound }, // this is a catch-all route, so if the user goes to a url that does not exist, it will rload the NotFound component
  ],
  // this changes the class that is added to the active link to this cusotm class, so you take control of the active link class
  // by default, vue adds the class 'router-link-active' to the active link,
  linkActiveClass: 'active', // this is the class that will be added to the active link, you can change it to whatever you want
  scrollBehavior(_, _2, savedPosition) {
    // this is a function that tells the router how to scroll to the top of the page when the user navigates to a new page
    // if savedPosition is not null, it means the user navigated back or forward, so we should scroll to the saved position
    // console.log('scrollBehavior', to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    // otherwise, we scroll to the top of the page
    // return { left: 0, top: 0 };

    // bottom of the page since we render the teamList at the bottom of the page
      return { left: 0, top: document.body.scrollHeight };
  }
});

// navigation Guards 
// these are functions that are called before the route is loaded, so you can add logic to check if the user is allowed to access the route or not
// you can use these to check if the user is authenticated or not, or if the user has permission to access the route
// this is a global guard, so it will be called for every route
router.beforeEach((to, from, next) => {
    // this runs on every navigation no matter what route is being used
    console.log('Global beforeEach', to, from);
    next(); // this tells the router to continue loading the route, if you want to cancel the route, you can call next(false) or next('/some-other-route') to redirect the user to another route
});


router.afterEach((to, from) => {
    
    //sending analystic data to the server but not used to really display antthing
    // this runs after every navigation, so you can use it to send analytics data to the server or do something else after the route is loaded
    console.log('Global afterEach', to, from);
    // you can also use this to scroll to the top of the page after the route is loaded
    // window.scrollTo(0, 0);
})

// we need to tell the app to use the router
// this is how we register the router with the app
// this is a global registration, so we can use the router in any component

export default router; // this exports the router so we can use it in the main.js file