const app = Vue.createApp({
    data() {
        return {
            output: '',
            confirmedInput: ''

        }
    },
    methods:{
        showAlert(){
            alert("Hello World!");
        },
        userInput(event){
            // event.target.value = "";
            this.output = event.target.value;
        },
        // outputText(event){
        //     this.output = event.target.value;
        // }

        confirmInput(){
        
            this.confirmedInput = this.output;
    }

}


});

app.mount("#assignment");