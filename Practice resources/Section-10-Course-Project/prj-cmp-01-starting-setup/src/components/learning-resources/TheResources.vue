<!-- Main entry of the resource area - only used once that's why it is named 'The' -->
<template>
    <div>
    <!-- 2 tabs to switch between 2 tabs -->
    <base-card>
    <!-- NB an important Vue.js feature is that if you don't have an attribute set up on the base component, in this case
     it is the base-button. and you want to add an attribute then you can do it in an instance of the atrribute and it automatically
     gets added to the base component -->
     <!-- e.g if there wasn't a click even set up in base-button component and you add it here, then it autp falls to the root through this setup here -->

        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</base-button>
    

    </base-card>

      <keep-alive>
        <component v-bind:is="selectedTab"></component>
      </keep-alive>

      </div>

</template>

<script>

import storedResources from './StoredResources.vue';
import addResource from './AddResource.vue';

export default{
    components: {
        // we are importing the storedResources component and registering it here
        'stored-resources': storedResources,
        'add-resource': addResource,
    },
    data(){
        return{
            selectedTab: 'stored-resources',

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
        }
    },

    provide(){
        // this will allow us to use the storedResources array in the child components
        return {
            resources: this.storedResources
        };
    },

    computed: {
        // this will allow us to use the selectedTab in the template
        // it is a computed property that will return the selected tab
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourceButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },

    methods: {
        // this method will be used to switch between the 2 tabs (add and stored resources)
        setSelectedTab(tab) {
            this.selectedTab = tab;
            console.log('Selected tab:', this.selectedTab);
        }
    },
}
</script>

