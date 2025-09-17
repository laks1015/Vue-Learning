<template>
    <!-- tag = wrapper for the transitining element  -->
      <transition-group name="user-list" tag="ul">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
        </transition-group>
        <!-- transisiton is for 1 element. transition GROUP is to work with multiple elmeents at the same time -->
    

    <div>
      <input type="text" placeholder="Add User" ref="addUserInput"/>
      <button @click="addUser">Add User</button>
    </div>
</template>


<script>
export default {
  data() {
    return {

        users: ['Angela','Michael','Schmidt','Jess','Toby','Pam','Jim'],
        newUser : '',
    };
  },
  methods: {
    removeUser(user) {
      const userIndex = this.users.indexOf(user);
      this.users.splice(userIndex, 1);
    },
    addUser() {
      this.newUser = this.$refs.addUserInput.value;
      if (this.newUser.trim() !== '' && !this.users.includes(this.newUser)) {
        this.users.unshift(this.newUser.trim());
        this.newUser = '';
        this.$refs.addUserInput.value = '';
      }
    }
  }
};
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }


  /* animation for user-list */
  .user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  .user-list-enter-active {
    transition: all 0.5s ease-out;
  }
  .user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .user-list-leave-from {
    opacity: 1;
    transform: translateX(0px);
  }
  .user-list-leave-active {
    transition: all 0.5s ease-in;
    position: absolute;
  }
  .user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .user-list-move{
    /* this is to animate the OTHER list items that are nto directly removed or added. but the othher items in the transition-group tag
    so it helps the other items trasnform or morph into position while another animation/transition is occuring */
    /* it automatically adds the trasnform property so we want to change the timing of it so it os smoother  */
    transition: transform 0.3s ease-in-out;
  }
  </style>

