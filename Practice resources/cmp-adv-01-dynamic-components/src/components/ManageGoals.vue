<template>
    <div>
        <h2>Manage Goals</h2>
        <input ref="goal" type="text" placeholder="Enter a new goal" />
        <button @click="setGoal">Set Goal</button>
        <!-- <component v-if="inputIsInvalid" :is="error-alert" message="Please enter a goal"></component> -->
        <teleport to="body">
            <!-- please render this directly in the body element and not as nested as it is now - so semantically this dialog is not nested deep in the html (e.g for screenreaders) -->
            <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid</h2>
            <p>Please enter a goal</p>
            <button @click="inputIsInvalid = false">Close</button>
         </error-alert>
        </teleport> 
    </div>

</template>

<script>
import ErrorAlert from './UI/ErrorAlert.vue';



export default {

    components: {
    'error-alert': ErrorAlert
    },
    
    data(){
        return {
            inputIsInvalid: false,
        }
    },
     methods: {
        setGoal() {
            // // Emit an event to the parent component to add a new goal
            // this.$emit('add-goal', this.goal);
            // // Clear the input field after adding the goal
            // this.goal= '';

            const enteredGoal = this.$refs.goal.value;
            if(enteredGoal === '') {
                // alert('Please enter a goal');
                // show a notification instead of an alert
                this.inputIsInvalid = true;
            }
        }
     }
}
</script>
