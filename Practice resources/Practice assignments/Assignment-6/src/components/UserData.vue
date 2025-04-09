<!-- fetching user data -->

<template>
    <section>
    <form @submit.prevent="submitForm">
        <input type="text" placeholder="Enter username" v-model="enteredName"/>
        <input type="number" placeholder="Enter age" v-model="enteredAge"/>
        <button>Set User Data</button>
        <!-- this button should call a function that takes the entered data, passes it to app.vue then uses that data to updat th user details name and age which is then passed to active user by props -->
    </form>
    </section>
    
 </template>

<script>
 export default {

    emits: ['setUserData'],
    // this is the event we will use to pass data up to app.vue
    // we can use this to pass data up to the parent component  
    data(){
        return{
            enteredName: '',
            enteredAge: null
        };
    },
    methods: {
        submitForm(){
            // this function should take the data from the form and pass it to app.vue
            // we can use $emit to pass data up to the parent component
            this.$emit('setUserData', this.enteredName, this.enteredAge);
            // this will pass the data to app.vue where we can use it to update the user object
        }
    }
 };
</script>

<style>

/* this styles all sections in all compoennts even though its defined here */

</style>