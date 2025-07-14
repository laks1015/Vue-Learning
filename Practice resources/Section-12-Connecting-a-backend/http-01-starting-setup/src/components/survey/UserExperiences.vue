<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Experiences are loading...</p>
      <p v-else-if="!isLoading && errorMessage" class="error">{{ errorMessage }}</p>

      <p v-else-if="!isLoading && (!results || results.length === 0) && !errorMessage">No stored experiences found. Start adding some now!</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
// import axios from 'axios';

export default {
  // props: ['results'],

  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.errorMessage = null;
      // this will be called when the button is clicked
      //this method will be triggered when the button is clicked
      //now we want to GET results and not POST them
      // axios.get('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json');
      console.log('Loading experiences...');


      fetch('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched data:', data);
          this.isLoading = false;
          const results = [];
          for (const key in data) {
            results.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.error('Error loading experiences:', error);
          this.errorMessage = 'Failed to load experiences. Please try again later.';
          this.isLoading = false;
        });


    },
    mounted() {
      // this will be called when this specific component is mounted/created
      // we can call the loadExperiences method here to load experiences when the component is mounted
      console.log('UserExperiences component mounted');
      this.loadExperiences();
    },

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.error {
  color: red;
  font-weight: bold;
}
</style>