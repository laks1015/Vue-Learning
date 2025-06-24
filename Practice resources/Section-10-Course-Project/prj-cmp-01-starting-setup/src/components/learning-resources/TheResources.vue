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
            resources: this.storedResources,
            // point at the addResource method so that we can use it in the AddResource component aand then you can INJECT it in the AddResource component
            // this is a good practice to follow so that we can reuse the method in other components
            addResource: this.addResource,
            deleteResource: this.removeResource
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
        },

        // we need to be able to call this method from the AddResource component
        // so we will use the $emit method to emit an event from the AddResource component
        // and then we will listen to that event in the TheResources component
        // and call this method to add the resource to the storedResources array
        addResource(title, description, link) {
            // this method will be called when the form is submitted
            //we want to add the resource to the storedResources array using the submitted data in the Add Resource component
            const newResource = {   
                id: Math.random().toString(36).substring(2, 9), // generate a random id
                title: title,
                description: description,
                link: link
            };
            // add to bottom of array
            // this.storedResources.push(newResource);

            // add to top of array
            this.storedResources.unshift(newResource);

            console.log('New resource added:', newResource);
            // reset the selected tab to stored-resources after adding a new resource
            this.selectedTab = 'stored-resources';
        },

        removeResource(resID){

            // update the storedResources array by filtering out the resource with the given id

            const resourceToDelete = this.storedResources.find(resource => resource.id === resID);
            this.storedResources.splice(this.storedResources.indexOf(resourceToDelete), 1);

            
            console.log(this.storedResources.length + ' resources left after deletion.');

        }
    },
}
</script>

