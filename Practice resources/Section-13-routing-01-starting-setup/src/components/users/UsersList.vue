<template>
  <button @click="changeRoute">Go to Teams</button>
  <button @click="saveChangesHandler">Save changes?</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>

</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      saveChanges: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    changeRoute() {
      // This method can be used to navigate to a different route if needed
      this.$router.push('/teams');
      // we're baically addign a new route to the routes in main.js
    },
    saveChangesHandler() {
      // This method can be used to save changes if needed
      this.saveChanges = true;
      console.log('save changes set to true');
    },
  },
  unmounted() {
    // This method can be used to clean up if needed
    console.log('UsersList component is unmounted');
  },
  
  beforeRouteLeave(to, from, next) {
    // This guard only works if the component is used directly in a route view (not as a nested/child component)
    console.log('beforeRouteLeave', to, from);
    if(this.saveChanges) {
      // if saveChanges is true, we can allow the navigation
      next();
    } else {
      // if saveChanges is false, we can cancel the navigation
      const answer = window.confirm('You have unsaved changes, do you really want to leave?');
      // if the user confirms, we can allow the navigation
      next(answer);
    }
  
  }
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>