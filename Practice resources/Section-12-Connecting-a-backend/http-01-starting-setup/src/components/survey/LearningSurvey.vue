<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      errorMessage: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      // send data to backend
      // always add 'name of JSON node'.json at the end of the URL for Firebase Realtime Database
      // fetch('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: this.enteredName,
      //     rating: this.chosenRating,
      //   }),
      // });
      this.errorMessage = null;
      axios.post('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json', {
        name: this.enteredName,
        rating: this.chosenRating,
      }).then(response =>{
        // this .them always responds when there is no technical error
        if(response.ok){
          console.log('Survey submitted successfully:', response.data);
        } else {
          throw new Error('Network response was not ok');
          // using the error contructor built into JavaScript that then jumps to the catch block and uses the error message set there
        }
      }).catch((error) => {
        console.error('Error submitting survey:', error);
        this.errorMessage = 'Failed to submit survey. Please try again later.';
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>