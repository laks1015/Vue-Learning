const app = Vue.createApp({

    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },

    computed: {
        // remember computed is used when you want to calculate a value based on other values
        boxAClasses() {
            return {active: this.boxASelected};
        },
    },

    methods: {
        boxSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected;
                /* this.boxASelected = true;
                this will always set boxA to true so instead lets make it a toggle 
                
                */

            } else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            } else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected;
        }
    }
    }
});

app.mount('#styling');