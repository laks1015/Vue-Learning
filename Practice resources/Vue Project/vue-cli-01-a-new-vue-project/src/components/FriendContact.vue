<!-- this is a component to display a friends contact component -->
 <template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite!)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>

        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="deleteFriend">Delete</button>


    </li>

    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong>{{ emailAddress}}</li>
    </ul>
    
 </template>

 <script>

export default {
    // config options for this specific component
     // this is where you define the properties that this component expects to receive from the outside
    // // we suse camelcase so that it can be used as a variable 



    //because props can get complex, we have a look at passing it as an object vs an array
    props:{
        id:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            //defau;lt value if somehing is not rquired
            default: false, 
            // validator(value){
            //     return value === '0' || value === '1';
            // } //this is a custom validator to make sure that the value is either 0 or 1
        },
        
    }, 

    // we also can define the properties of the event. while it is ecommended to do the properties o the variables it is optonal to do it for events
    // this helps documents what events this ompeoent can expect without needing to look at the methods
    emit:[
        'toggle-favorite', 'delete-friend'],


    // // detailed version
    // emit: {
    //     'toggle-favorite': function(id){
    //         // this functoion is called when the event is emitted and it is saying what we can expect to receive (id)
    //         if(id === this.id){
    //             return true;
    //             // add some validation
    //     }
    //     }
    // },


    data(){
        // this data is independent of the data in the parent component (vue app component)
        return{
            detailsAreVisible: false,

            // can gt rid of fummy friend contact because we dynamically loop thoruhg eeach friend in App
            // friend:
            // {
            //     id: 'manuel',
            //         name: 'Manuel Lorenz',
            //         phone: '01234 5678 991',
            //         email: 'manuel@localhost.com'
            // },
         
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        // this is a mujtatin 
        // mutation occurs when datta is not changed directly, but through a function yhat is the child of the component that has the og function
        // in this case: isFavoirite is defined as a prop value in App.vue. and now FrinndContact is a child componnt an dwants to MPODIFY that value. through a function but it cannot
        // it can only read the valiue but not create a new funciton that alters the value that was passed down to it from Parent Vue compoennt.
        // toggleFavorite(){
        //     if(isFavorite === '1'){
        //         isFavorite = '0';
        //     }else{  
        //         isFavorite = '1';
        //     }
        // }

        // this is a better way to do it
        // (there is a way where the child compoent asks the parent compoent to update somethng, the parent updates it in their file (appvvue0 adn then REpasses it don to child compoent in the way that they want it ))

        // the other ay is to take the data passed from parent as the inntial data, change it in friend (child) compeont but then make sure that we are aware that it only hanges there and does not affect the intial dat in the paretn

        toggleFavorite(){
            console.log(this.FriendIsFavorite);

            // this.FriendIsFavorite = !this.FriendIsFavorite;
            // this allows you to ccreate your own custom vent that you can emit to the parent compoennt
            // this is how you can pass data from child to parent

            // name of custom event i the first parameteer in camelcase
            // the second parameter is the data that you want to pass to the parent compoennt
            this.$emit('toggle-favorite', this.id);
            // this means that the tiggl-favorite event ill pass this.ud as a proeprty to whoever (the [arent] that is listening. so the lsitener can use the value on their side)
        },

        deleteFriend(){
            // this.$emit('delete-friend', this.id);
            // this is how you can pass data from child to parent
            // emit a custom event because FreindContact is a child compoennt and it wants to tell the parent compoennt to delete a friend
            // the parent compoennt will listen for this event and then delete the friend
            this.$emit('delete-friend', this.id);
        }

    }
};
 </script>
 