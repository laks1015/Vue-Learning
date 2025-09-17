<template>
  <RouterView></RouterView>
</template>  

<script>
// import UsersList from './components/UsersList.vue';
export default {
  components: { 
    UsersList 
  },
  data() {
    return { dialogIsVisible: false,
              paragraphIsVisible: false,
              blockIsVisible: false,
              usersAreVisible: false,
              enterInterval: null,
              leaveInterval: null

    };
  },
  methods: {
    showParagraph() {
     this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showBlock() {
     this.blockIsVisible = !this.blockIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() { 
      this.usersAreVisible = false;
    },

    // transition hooks aka anaimation timining controlled by javascript and not css
    beforeEnter(el) { 
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
      enter(el,done) { 
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval=setInterval(() => {
        el.style.opacity = round *0.1;
        round++;
        if(round>10){
          clearInterval(this.enterInterval);
          done();
        } //let it gradually fade in over 20 ms intervals. when it reaches 100, it stop the interval
      }, 20); //this allows us to set the time interval that the animation takes place over aka over every 20 milliseconds
//the done aprameter helps tell vue when this animation is done. we call it when the animation is done and the vue know to call afterEnter    
}, 
      afterEnter(el) { 
      console.log('after enter');
      console.log(el);

    },
      beforeLeave(el) { 
      console.log('before leave');
      console.log(el);
      el.style.opacity = 1;

    },
      leave(el, done) { 
      console.log('leave');
      console.log(el);
      let round = 1;
       this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.leaveInterval);
          done(); // Call done to notify Vue the animation is finished
        }
      }, 20);
    },
      afterLeave(el) { 
      console.log('after leave');
      console.log(el);
      el.style.opacity = 1;
  },

  enterCancelled(el) {
    console.log('enter cancelled');
    console.log(el);
    // call this if the enter animation is cancelled midway through
    clearInterval(this.enterInterval);
  },
  leaveCancelled(el) {
    console.log('leave cancelled');
    console.log(el);
    // call this if the enter animation is cancelled midway through
    clearInterval(this.leaveInterval);  
}
}
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.v-enter-from{
  opacity: 0;
  transform: translateY(10px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* custom animation for the block */

@keyframes block-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* we can apply a custom aniamtion to the transistion property. but then we dont need the leave nad enter propeties. we define it all int he active class */
/* swe also have a custom name 'block-entr-active' vs v-enter-active because we define it in th ename property on the transistion */

.block-enter-active {
 animation: block-fade-in 0.3s ease-in;
}

.block-leave-active {
 animation: block-fade-in 0.3s ease-out;

}

.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-from, .fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to, .fade-button-leave-from {
  opacity: 1;
}



</style>