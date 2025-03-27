<!-- this is a component to display a friends contact component -->
 <template>
    <li>
        <h2>{{ name }} {{ FriendIsFavorite === '1' ? '(Favorite!)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>

        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>


    </li>

    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong>{{ emailAddress}}</li>
    </ul>
    
 </template>

 <script>

export default {
    // config options for this specific component
    // props:['name', 
    // 'phoneNumber',
    // 'emailAddress',
    // 'isFavorite'
    // ], // this is where you define the properties that this component expects to receive from the outside
    // // we suse camelcase so that it can be used as a variable 

    //because props can get complex, we have a look at passing it as an object vs an array
    props:{
         //type setting
        // name: String,
        // phoneNumber: String,
        // emailAddress: String,
        // isFavorite: String

        // but we can gt more granualr and set more rules on what data we expect to reciev in these props
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
            type: String,
            required: false,
            //defau;lt value if somehing is not rquired
            default: '0', 
            validator(value){
                return value === '0' || value === '1';
            } //this is a custom validator to make sure that the value is either 0 or 1
        },
        
    }, 
    data(){
        // this data is independent of the data in the parent component (vue app component)
        return{
            detailsAreVisible: false,
            friend:
            {
                id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
            },
            FriendIsFavorite: this.isFavorite, 
            // here we jsut took the value from Parent prop called isFriednFavorite and assigned its passed down value to a new value in the child compoentn nad now because that  value is techincally 'defined' as a variable in child compoennt
            // it can b used legally in the child compoennt file and in fucntions that are defined in the child compoennt file
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
            if(this.FriendIsFavorite === '1'){
                this.FriendIsFavorite = '0';
            }else{  
                this.FriendIsFavorite = '1';
            }
        }

    }
};
 </script>
 