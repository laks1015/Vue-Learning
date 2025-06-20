<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- by adding scoped to this tag it is saying that this css will ONLY apply to the template defined in this file and nowhere else -->
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>