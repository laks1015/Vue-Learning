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
        <ul>
            <learning-resource v-for="resource in storedResources" 
                :key="resource.id" 
                :title="resource.title" 
                :description="resource.description" 
                :link="resource.link">
            </learning-resource>
        </ul>
    </div>

</template>

<script>

import LearningResource from './components/learning-resources/LearningResource.vue';
export default {
    components: {
        'learning-resource': LearningResource
    },
    data() {
        return {
            // data properties can be defined here
            storedResources: [{
                id: 'official-guide',
                title: 'Official Guide',
                description: 'Official Vue.js documentation',
                link: 'https://vuejs.org'
            }, {
                id: 'google',
                title: 'Google',
                description: 'Learn to Google',
                link: 'https://Google.com'
            }]
        };
    }
}
</script>
