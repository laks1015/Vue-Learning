// import Vue
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
// mount = which part of the app should this Vue code be mounted or controlled by this Vue app

// define the data that is goig to be used by Vue app

// pure JavaScript

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = input.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = enteredValue;
//     list.appendChild(listItem);
//     input.value = '';
// }

// button.addEventListener('click', addGoal);
