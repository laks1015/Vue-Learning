const app = Vue.createApp({
    data() {
        return {
            outPut: ""
        }
    },
    methods:{
        showAlert(){
            alert("Hello World!");
        },
        userInput(event){
            event.target.value = "";
        }
    },

    outputText(event){
        this.outPut = event.target.value;
    }
});

app.mount("#assignment");