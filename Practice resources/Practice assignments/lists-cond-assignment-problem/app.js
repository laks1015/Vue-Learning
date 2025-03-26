const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
    //   buttonText: "Hide",
      isListVisible: true,
    };
  },
  computed:{
    // add a cimputed property when you want to watch for a new result based on the data
    buttonText(){
      // if thisListVisible is true, return Hide, else return Show
        return this.isListVisible ? "Hide" : "Show";
    }

},

  methods: {
    addTask() {
      console.log("addTask " + this.enteredTaskValue);
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = "";
      console.log("tasks: " + this.tasks);
    },

    updateButtonText() {
      if (this.isListVisible) {
        console.log("isListVisible: " + this.isListVisible);
        this.isListVisible = !this.isListVisible;
        this.buttonText = "Show";
      } else {
        console.log("isListVisible: " + this.isListVisible);
        this.isListVisible = !this.isListVisible;

        this.buttonText = "Hide";
      }
    },

    toggleTaskList(){
        // swtich between true and false
        this.isListVisible = !this.isListVisible;
    //   isListVisible ? buttonText = "Hide" : buttonText = "Show";
    }



  },
});
app.mount("#assignment");
