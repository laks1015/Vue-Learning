<template>
    <form @submit.prevent="submitData">
        <!-- bind the data properties to the input values -->
        <div>
            <label>Name</label>
            <input type='text' v-model="enteredName"/>
        </div>

        <div>
            <label>Phone Number</label>
            <input type='tel' v-model="enteredPhone"/>
        </div>

        <div>
            <label>Email Address</label>
            <input type='email' v-model="enteredEmail"/>
        </div>


        <div>
            <button>Add Friend</button>
        </div>


    </form>
</template>


<script>

export default {
    // we won't need any props becaused we dont need sata from the app or parent conpoent but we will be SENDING data from the child to the parent,
    // so we will need to emit an event
    emits:['add-friend'],
    // we will need to add a method to handle the form submission
    data(){
        return{
            // stpre the data from the form
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods:{
        submitData(){
            // we will need to emit an event to send the data to the parent component
            // we will need to send the data as an object
            this.$emit('add-friend', {
                name: this.enteredName,
                phone: this.enteredPhone,
                email: this.enteredEmail
            });
        }
    }
}
</script>
