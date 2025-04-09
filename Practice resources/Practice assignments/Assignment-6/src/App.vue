<!-- connect components here -->
 <template>
    <div>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @setUserData="setData"></user-data>
    </div>
 </template>

 <!-- <script>
import ActiveUser from './components/ActiveUser.vue';

 export default{
  components: { ActiveUser },};

 </script> -->

<script>
// if we manage to import the component here, we can use it in the template
//we can pass it DOWN the component list to ActiveUser and UserData, but pasing up form there is where the problem is

 export default{
  data(){
    return{
        user: {
            name: 'Gucci',
            age:2
        }
    }
  },
  methods:{
    setData(name,age){
        // so the parameters here isw the data that you set to emit fromthe UserData child compoennt
        // this function will take the data from the form in UsetData and pass it to app.vue
        // we can use $emit to pass data up to the parent component (userdata to app)
        this.user.name = name;
        this.user.age = age;
        // this will pass the data to app.vue where we can use it to update the user object

    }
  }
}

 </script>

<style>
*{
    font-family: sans-serif;
}
/* this styles all sections in all compoennts even though its defined here */
section{
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    margin: 2rem auto;
}

</style>
 