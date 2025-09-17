<template>
  <div class="container">
    <users-list></users-list>
  </div>
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
    <transition 
    :css="false" 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled"
    >
      <!-- transistion can only be used on ONE child element -->
       <!-- we use transsition when we specifically want to animate the leaving state of a property of an element that is removed from the dom. aka it is not
        always on the dom.  -->
        <!-- css falsed means ot skips the css analsis phase and doesnt even look for any css classes for this animaiton. goes straight to JS  -->
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
