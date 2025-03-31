<!-- This is the main App filewhich holds the app component -->
<!-- can reuse fetures/components in other files -->
<!--  Vue app vs vue components
 every component  is like a mini appp, and you can combine multiple compeontns into an app to build complex interfraces
 
 -->

<template>
  <section>
    <header>
      <h1>My friends:</h1>
    </header>
    <ul>
      <!-- props = custom html proprties -->
      <!-- have to use v:bind to use dynamic binding if it accepts sommethign els other than a string and ou can even put a javascript conditional expression in there too -->
      <friend-contact v-for="friend in friends" v-bind:key="friend.id" :name="friend.name" :phone-number="friend.phone"
        :email-address="friend.email" v-bind:is-favorite="friend.isFavorite"></friend-contact>

<!-- now we can comment this out because wwe dynamically loop throuhg EACH freind in the friends array and dynamically bind each prop -->
      <!-- <friend-contact name="Julie Jones" phone-number="01234 5678 992"
        email-address="julie@localhost.com"></friend-contact> -->
      <!-- here we can omit isFavorite prop because e added a default value to the prop in FriendContact speven if there ist one that is set, the deaut will be 0 -->

    </ul>
  </section>

</template>


<script>
import FriendContact from './components/FriendContact.vue';

export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          isFavorite: true
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '01234 5678 992',
          email: 'julie@localhost.com',
          isFavorite: false

        }


      ]
    }
  }
};


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>