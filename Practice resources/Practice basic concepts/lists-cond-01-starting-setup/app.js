const app = Vue.createApp({
  data() {
    return { 
      goals: [], 
      enteredGoalValue:''
    };
   
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals);
      this.enteredGoalValue ="";
    },

    removeGoal(index){
      this.goals.splice(index,1);
      console.log('removeGoal ' + index);
    }
  }
});

app.mount('#user-goals');
