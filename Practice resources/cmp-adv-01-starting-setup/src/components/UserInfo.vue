<template>
  
    <base-card>
    <!-- let vue know which slot this template needs to fill in -->
    <template v-slot:header-slot>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <!-- this p content automatically goes to the second slot that is ot named header-slot -->
     <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
    </base-card>
  
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
/* none of this is needed here. can be added to baseCard styling instead */

/* section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
/* because we added 'scoped' to the style tag in the header component. none of that styling is passed down to this header and so i can style it individually  */
header {
  background: red;
} 
</style>