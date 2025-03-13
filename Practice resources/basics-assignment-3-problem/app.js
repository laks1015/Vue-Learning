const app = Vue.createApp({
  data() {
    return {
      count: 0,
    //   countResult:""
    };
  },
  computed: {
    // this will only be called everytime count changes in the methods
    result() {
      if (this.count < 37) {
        return  "Not there yet";
      } else if (this.count === 37) {
        return this.count;
      } else {
        return "Too much!";
      }
    },
  },
  watch:{
    // can watch a computed property
    result(){
        // watches a computer property result() doesnt have to watcha  data property
        const that = this;
        setTimeout(function(){
            that.count = 0;
        }, 5000);

    }

  },
  methods: {
    add(num) {
      this.count = this.count + num;
      return this.count;
    },
  },
}); // create a vue app

app.mount("#assignment"); // mount the app to the div with the id of assignment
