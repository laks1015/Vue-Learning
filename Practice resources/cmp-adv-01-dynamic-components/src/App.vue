<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- old way of doing a tab show/hide feature -->
<!-- 
    <manage-goals v-if="selectedComponent == 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent == 'active-goals'"></active-goals> -->

    <!-- component means - show this component if something IS true -->
     <!-- this means that compoennt should swap itself for whatever is stored in selectedComponent witout mutliple v-if statements -->
      <keep-alive>
        <component v-bind:is="selectedComponent"></component>
      </keep-alive>
        <!-- keep alive caches the state of the component and doesnt destroy it with each change -->

  </div>
</template>

<script>

import TheHeader from './components/Layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ErrorAlert from './components/UI/ErrorAlert.vue';

export default {
// register component locally here so that it is only available in this file
  components: {
   'the-header' : TheHeader,
   'manage-goals': ManageGoals,
    'active-goals': ActiveGoals,
    'error-alert': ErrorAlert,
  //  'badge-list': BadgeList,
  //  'user-info': UserInfo,
  //  'course-goals': CourseGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    // this method is used to change the selected component
    // selectedComponent is a data property that is used to determine which component to show
    setSelectedComponent(componentName) {
      this.selectedComponent = componentName;
    }
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