<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="  {'invalid': !isInputValid}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validateInput()"/>
      <p v-if="!isInputValid">Name input is invalid</p>

    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" v-model="how" value="video" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" v-model="how" value="blogs" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" v-model="how" value="other" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirmTerms"/> 
      <label for="confirm-terms">I confirm the terms and conditions</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>


export default ({

  data() {
    return {
      userName: '', // Default value for the text input
      userAge: null, // Default value for the number input
      referrer: 'google', // Default value for the select input
      interest: [], // Default value for the checkboxes
      how: null, // Default value for the radio buttons
      confirmTerms: false, // Default value for the checkbox
      isInputValid: true, // Track if the input is valid

    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with:', {
        userName: this.userName,
        userAge: this.userAge,
        referrer: this.referrer,
        interest: this.interest,
        how: this.how,
        confirmTerms: this.confirmTerms
      });
      this.userName = '';
      this.userAge = null;
      this.referrer = 'google'; // Reset to default value
      this.interest = []; // Reset checkboxes
      this.how = null; // Reset radio buttons
      this.confirmTerms = false; // Reset checkbox
    },
    validateInput() {
      // Simple validation to check if the userName is not empty
      // this.isInputValid = this.userName.trim() !== '';
      // if (!this.isInputValid) {
      //   alert('Please enter a valid name.');
      // }

      if(this.userName === '') {
        this.isInputValid = false;
      } else {
        this.isInputValid = true;
      }
    },
  },
})
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}


.form-control.invalid  {
  color:red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox']+label,
input[type='radio']+label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>