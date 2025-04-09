<!-- setting user data -->
 <template>
    <section>
        <h2>{{ username }}</h2>
        <h3>{{userage}}</h3>

    </section>
    
 </template>

<script>
 export default {

    // props specify what we expect to get back from the parent component
    //in this case, the parent component is APP.vue and we set up the object there so here we specify what we expect to get back
    props: {
        // longer form to make clear what we expect
        username: {
            type: String,
            required: true
        },
        userage:{
            type: Number,
            required: true
        }
    },
 };
</script>

