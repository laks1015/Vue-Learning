<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader/> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
        <p>{{ slotProps['anotherProp'] }}</p>
    </course-goals>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
// register component locally here so that it is only available in this file
  components: {
   'the-header' : TheHeader,
   'badge-list': BadgeList,
   'user-info': UserInfo,
   'course-goals': CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>