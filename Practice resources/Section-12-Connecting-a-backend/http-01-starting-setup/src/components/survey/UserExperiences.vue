<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
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
    };
  },
  methods:{
    loadExperiences(){
      //this method will be triggered when the button is clicked
      //now we want to GET results and not POST them
        // axios.get('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json');


        fetch('https://vue-https-demo-5979e-default-rtdb.firebaseio.com/surveyResults.json')
        .then((response) => {
          if(response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          const results = [];
          for(const key in data) {
            results.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            });
          }
          // now we can set this array to our results defined array in data()
          this.results = results;
              
        })
      
  }

}
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>