const app = Vue.createApp({
    data(){
        return{
            friends: [{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie@localhost.com'}
            ],

        }
    }

});
//a vue component is a custom html element and essentially it is a vue instance aka a vue app that belongs to the greater vue app
//.component('html tag name WITH a hyphen', {object with the template, data, methods, etc})
//the first argument is the name of the custom html element that we want to create
//the second argument is an object that holds the configuration of the component
//the object can have a template, data, methods, etc
// components are mini apps that can be reused in the main app that are isolated but also combined to the main vue app component
app.component('friend-contact',{
    template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide ' : 'Show '}}details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend:{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }

        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
} );
app.mount('#app');

