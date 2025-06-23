<template>
  <header>
    <h1>{{ title }}</h1>
  </header>  
</template>

<script>

export default{
    props: {
        // props are used to pass data from parent to child component
        title: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
    header {
    width: 100%;
    height: 5rem;
    background-color: #640032;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    header h1 {
    color: white;
    margin: 0;
    }
</style>