<template>

    <div>
    <base-dialog v-if="inputIsInvalid" title="Input is invalid" @close="closeError()">

    <template #main-content>
        <h3>Oh no, some content is not valid</h3>
         <p> Please check that all inputs are valid </p>
    </template>

        <!-- section actions slot content -->
        <!-- this will hide the dialof because dialog shows when inputIsValid is true -->

    <template #actions>
        <base-button @click="inputIsInvalid = false">Close</base-button>
    </template>

    </base-dialog>

    <!-- <teleport to="body">

        <component v-if="inputIsInvalid" :is="'error-alert'" message="Please enter a resource"></component>

    </teleport> -->

    <base-card>
        <h2>Add Resource</h2>


        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" ref="titleInput" >
            </div>

            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description"  ref="descriptionInput"></textarea>
            </div>

            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" ref="linkInput" >
            </div>

            <base-button type="submit">Add Resource</base-button>
        </form>

    </base-card>
    </div>
</template>

<script>

export default {

    data() {
        return {
            // data properties can be defined here
            // check if input is valid or not

            inputIsInvalid: false,

        };
    },


    
    inject: ['addResource'], // inject the addResource method from the parent component ( from TheResources.vue so that we can use it in this component )
    methods:{
        submitData(){
            // this method will be called when the form is submitted
            // we can use this method to send the data to the server or store it in the local storage
            // for now, we will just log the data to the console
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredLink = this.$refs.linkInput.value;

            // check if empty input
            if(enteredTitle === '' || enteredDescription === '' || enteredLink === '') {
                // show a notification instead of an alert
                this.inputIsInvalid = true;
                return; // stop the execution of the method
            }

            // add this to the storedResources array
            this.addResource(enteredTitle, enteredDescription, enteredLink);

            this.$refs.titleInput.value = '';
            this.$refs.descriptionInput.value = '';
            this.$refs.linkInput.value = '';
        },

        closeError() {
            // this method will be called when the close button is clicked
            // we can use this method to close the error dialog
            this.inputIsInvalid = false;
        },

    }
}
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>