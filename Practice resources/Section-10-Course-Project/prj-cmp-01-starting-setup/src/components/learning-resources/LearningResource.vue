<template>
    <!-- we need external data to use this component so we need to make this compoennt reuable and configaruable by pasing data down into it using props-->
    <li>
        <base-card>
            <header>
                <h3>{{title}}</h3>
                <!-- <button>Delete</button> -->
                 <base-button mode="flat" @click="$emit('delete')">Delete</base-button>
            </header>
            <p>{{description}}</p>
            <nav>
                <a v-bind:href="link">View resource</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
// we could locally import the BaseCard component here but it is better to import it globally so that we can use it in other components as well
// this is a good practice to follow so that we can reuse the component in other components without
// import BaseCard from '../UI/BaseCard.vue';
export default{
    // components: {
    //     // we are importing the BaseCard component and registering it here
    //     'base-card': BaseCard
    // },
    props: { 
        // props are used to pass data from parent to child component
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
/* these are styles that are exclusive to this component because scoped is added */
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
