<template>
  <!-- <the-navigation @set-page="setActivePage"></the-navigation> -->
  <the-navigation></the-navigation>

  <main>
    <!-- <component :is="activePage"></component> -->
     <!-- we need to let vue know where to load the routed componenet -->
      <router-view></router-view>
  </main>
</template>

<script>
// we dont need to import them here because we arent using it herem we are slectuing and using them in the router 
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      // activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  // methods: {
  //   setActivePage(page) {
  //     this.activePage = page;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>