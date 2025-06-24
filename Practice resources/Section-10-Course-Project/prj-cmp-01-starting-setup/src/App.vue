<!-- root Vue compoennt that hold all other components -->

<template>
    <div>
        <!-- <ul v-for="resource in storedResources" :key="resource.id">
            <li>
                <h2>{{ resource.title }}</h2>
                <p>{{ resource.description }}</p>
                <a :href="resource.link" target="_blank">Visit</a>
            </li>
        </ul> -->
        <the-header title="Remember these Learning Resources"></the-header>
        <!-- <the-header :title="storedResources[0].title"></the-header> -->

        <the-resources></the-resources>

        <!-- <stored-resources :resources="storedResources"></stored-resources> -->
        <!-- we are passing the storedResources array as a prop to the stored-resources component and is binded to resources in the toredResources.vue-->
        <!-- this will allow us to use the storedResources array in the stored-resources component -->
    </div>

</template>

<script>

// import LearningResource from './components/learning-resources/LearningResource.vue';
import TheHeader from './components/layouts/TheHeader.vue'; 
import TheResources from './components/learning-resources/TheResources.vue';
export default {
    components: {
        // 'learning-resource': LearningResource,
        'the-header': TheHeader,
        'the-resources': TheResources,
    },
    // data() {
    //     return {
    //         // data properties can be defined here
    //         storedResources: [{
    //             id: 'official-guide',
    //             title: 'Official Guide',
    //             description: 'Official Vue.js documentation',
    //             link: 'https://vuejs.org'
    //         }, {
    //             id: 'google',
    //             title: 'Google',
    //             description: 'Learn to Google',
    //             link: 'https://Google.com'
    //         }]
    //     };
    // }
}
</script>

<style>
/* global styles because scoped is not added so it is added across the app */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>
