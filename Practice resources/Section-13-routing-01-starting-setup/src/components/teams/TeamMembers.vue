<template>
  <button @click="changeRoute">Back</button>

  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  // we want to use the real data from the teams, so we will inject the teams data from the App.vue
  inject: ['teams', 'users'],
  created(){
    //  here we can access the injected data from App.vue
    // we can use the $route.params to get the teamId from the url
    const teamId = this.$route.params.teamId;
    // we can find the team with the teamId from the teams data
    const team = this.teams.find(team => team.id === teamId);
    // we can set the teamName and members data from the team data
    this.teamName = team.name;
    this.members = team.members.map(memberId => {
      // we can find the user with the memberId from the users data
      return this.users.find(user => user.id === memberId);
    });
},
data() {
    return {
      teamName: '',
      members: [],
    };
  },

  methods: {
    changeRoute() {
      // This method can be used to navigate to a different route if needed
      this.$router.push('/teams');
      // we're basically adding a new route to the routes in main.js
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>