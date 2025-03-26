const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // use this method if we are using @input and saving each value on keyup
      // this.message = this.currentUserInput;

      // use this if we are using ref, where Vue memorises the reference to the element
      this.message = this.$refs.userInput.value;
      console.log(this.$refs.userInput.value); // this will log the value of the input element
      console.dir(this.$refs.userInput); // this will log the value of the input element
      console.log(this.$refs.userInput); // this will log the input element
      // vue provided properties start with $ sign
      // userInput was onlu defined in the html and not in the data property in the JS, so this $ref helps reference the variable you defined and pulls the input elelement from the dom
    },
  },
});

app.mount("#app");
