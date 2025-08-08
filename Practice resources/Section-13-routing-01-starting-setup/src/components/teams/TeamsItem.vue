<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- this a link navigates to nothing and we want it to navigate to the /teams/:teamID based on the selected teams ID on the card -->
    <!-- <a href="#">View Members</a> -->

    <router-link :to="teamMembersLink">View Members</router-link>

  </li>
</template>

<script>
export default {
  props: ['name', 'memberCount', 'id'],
  computed:{
    teamMembersLink() {
      // this will create a link to the team members page with the team id in a more efecient way
      // return '/teams/' + this.id;
      return  {
        name: 'team-members',
        params: { teamId: this.id }
      }; //more effecient way to route to the team members page if we change the path way because we just refeer to it by nae when we return it 
    },
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>