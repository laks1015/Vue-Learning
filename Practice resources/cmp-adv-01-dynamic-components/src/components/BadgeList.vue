<template>
    <base-card>
    <!-- <template v-slot:header-slot>
      <h3>Badge List</h3>
    </template> -->

    <!-- #header means the same v-slot:header , it is the shorthand  -->
    <template v-slot:default>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
    </template>

    </base-card>
</template>

<style scoped>

section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>