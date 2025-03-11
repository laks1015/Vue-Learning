const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput(){
      // we want to reset the input value of the input box
      this.name ='';
      // now resetting this.name will also update wherever we output {{name}}
    },

    outputFullName(){
      // here is a better way to output a name + last name
      if(this.name === ''){
        return '';
      }
      
      return this.name + ' ' + 'Pucci';
  }

  }
});

app.mount('#events');
