// connect Vue to html code
// saywhioch parts of HTML will be controlled by Vue

const app = Vue.createApp({
  // configure what is being used here

  data() {
    // this data function says that the data stored here will be use in a function
    // Always returns an object
    return {
      // We can use anything defined here in the part of the HTML connected to this
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalC: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    //excute this when something happens
    //meethod takes an object that will take a lot of functions
    outputGoal() {
      const randomNumber = Math.random();
    //   if (randomNumber < 0.5) {
    //     return "Learn Vue!";
    //   } else {
    //     return "Master Vue!";
    //   }

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
// after linking the app.js file to the HTML file, we can now use Vue to control the HTML file
// but we need to specify WHICH PART of the html we want to control so we use mount to select the element, and everythog underneath it (child) is included in this slection for future nehancemenets
