<template>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>


  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition>
      <!-- transistion can only be used on ONE child element -->
       <!-- we use transsition when we specifically want to animate the leaving state of a property of an element that is removed from the dom. aka it is not
        always on the dom.  -->
    <p v-if="paragraphIsVisible">This is toggleble Paragraph text!</p>
    </transition>
    <button @click="showParagraph">Show Paragraph</button>
  </div>

  <!-- adding a transistion with 2 child elements is only possible if one element is shown at a tme on conditional statemnt. if and else -->
    <div class="container"> 
      <transition name="fade-button" mode="out-in">
        <!-- out-in = animate out animation (removal) then animatn of new elemeny (in). this prevents 2 elements from shwoing at once -->
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else>Hide Users</button>
      </transition>
    </div>

    <div class="container">
    <transition name="block">
        <div class="block" v-if="blockIsVisible"></div>
    </transition>
    <button @click="showBlock">Show Block</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { dialogIsVisible: false,
              paragraphIsVisible: false,
              blockIsVisible: false,
              usersAreVisible: false

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
    }
  },
};
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