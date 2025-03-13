const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: ""
    };
  },

  watch:{
    // watch is a propety that allows functions to be called only when they nee -> exactly like a computed property
    // but here we link a data property to a function eg. name is the data property that we want to watch for changes so our function will be called name() and this will watch the name data value and call name() when there is a change detected
    name(value){
      if(value === ''){
        this.fullname = '';
      } else{
        this.fullname = value + " " + "Pucci";
        // value =to the latest value of the data property that is linked to this function, so in this case it is name so we use value = name
      }

 
    },

    counter(value){
      if(value > 50){
        this.counter = 0;
    }

  }

    // name(Newvalue, Oldvalue){
    //   this.fullname = Newvalue + " " + "Pucci" + "Not " + " " + Oldvalue;
    // }
  },

computed:{
  // this is like methods except it is aware of the functions dependencies and is only calleed when needed
  // it is also cached
  // naming convention is like a variable (data property) even though it tehcnically is a method aka function
  // so we say firstName() instead of getFirstName()
  
  
  // fullname(){
  //   console.log("I am only run once I am needed");
  //   if (this.name === "") {
  //     return "";
  //   }

  //   return this.name + " " + "Pucci";
  // }

},
// only use methods when you kow you want to run the function everytime the dom is interacted with
// but use computed when you want to run the function only when the dependencies change
// only use computed when you want to output a value e.g full name
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

    resetInput() {
      // we want to reset the input value of the input box
      this.name = "";
      // now resetting this.name will also update wherever we output {{name}}
    },

    outputFullName() {
      console.log("runnning again...")
      // console log this to see that this function actually gets called everytime the dom is intravted with = not the best
      // here is a better way to output a name + last name
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Pucci";
    },
  },
});

app.mount("#events");
