<template>
    <!-- this is where we want to store the styled resource so that we cna just add <stored-resource> into the app.vue file -->
    <div>
        <ul>
            <learning-resource v-for="resource in resources" 
                :key="resource.id" 
                :title="resource.title" 
                :description="resource.description" 
                :link="resource.link"
                :id="resource.id"
                >
            </learning-resource>
        </ul>
    </div>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default{

    components: {
        // we are importing the LearningResource component and registering it here
        'learning-resource': LearningResource
    },

    // inject: { 
    //     // props are used to pass data from parent to child component
    //     // because we are using v-for in the app.vue file, we need to pass the storedResources array as a prop
    //     // this will allow us to use the storedResources array in this component
    //     resources: {
    //         type: Array,
    //         required: true
    //     }
    // },

    inject: ['resources'],
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
