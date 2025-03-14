const app = Vue.createApp({

    data() {
        return {
            userInput: '',
            // user1: false,
            // user2: false,
            textClass: '',
            isVisible: true,
            inputColor: ''
        }
    },

    computed: {
        // remember computed is used when you want to calculate a value based on other values
        visibleToggle() {
            return this.isVisible ? "visible" : "hidden";
   
        
        },
    },


    methods:{
       updateClass(){
            console.log('userInput: ' + this.userInput);
            // return this.userInput;

            // // toggle weather user1 or user 2 is true or not 
            // if(this.userInput === 'user1'){
            //     this.user1 = !this.user1;
            //     console.log('user1 ' + this.user1);

            // }
            // else if(this.userInput === 'user2'){
            //     this.user2 = !this.user2;
            // } else{
            //     this.user1 = false;
            //     this.user2 = false;
            // }

            if(this.userInput === 'user1'){
                this.textClass = 'user1';
                console.log('user1 ' + this.textClass);

            }
            else if(this.userInput === 'user2'){
                this.textClass = 'user2';
                console.log('user2 ' + this.textClass);

            } else{
                this.textClass = '';
            }
        },

        toggleParagraph(){
            // when i click this it must trigger a click event and either add visible or block tot he <p> tag with the user class
            console.log('toggleParagraph is called');
            this.isVisible = !this.isVisible;

            // toggleParagraph() is an event lsitener tht has to be binded with a method
            // computed is called only when a value changes, we use the method to change the value on click and then we track that change in the variale called isVisible and then we need to track isVisible value change so we use a computed property to track the change but th actual change (toggle) happens in this method
            console.log('isVisible: ' + this.isVisible);
        },

        // updateBackground(){
        //     console.log('updateBackground is called ' + this.inputColor );
        //     this.inputColor = this.inputColor;
        // }
    }

});

app.mount('#assignment');