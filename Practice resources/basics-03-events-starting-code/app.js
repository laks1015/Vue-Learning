
// adding event listeners to a button in Vue
const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: ''
    };
  },
  methods:{

    add(num){
      this.counter = this.counter + num;
    },

    subtract(){
      this.counter = this.counter - 1;


    },
    // event object is passed as an argument to the method
    //the browser tells us what the event is and we can read the current value in that input value
    updateName(event, lastName){
      // if we want to pass something else beside just the event, aka 2 paramenters then we have to define the event as a parameter by using $event
      this.name = event.target.value + ' ' + lastName;
      //this should update the name property in the data object with every keystroke in the input field
    },

    // this method works to prvent a form from automatically submitting but there is a nicer way to do it in Vue with event modifiers
    // submitForm(event){
    //   event.preventDefault();
    //   alert('Submitted!');
    // }

    submitForm(event){
      alert('Submitted!');
      // submit event prevented with modifer on the submit event listen .prevent
    },

    confirmInput(){
      this.confirmedName = this.name;
    }
    

  }
});

app.mount('#events');
