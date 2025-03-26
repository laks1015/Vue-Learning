const app = Vue.createApp({
    data(){
        return {
            name: 'Laks',
            age: 24,
            imgLink: 'https://images.unsplash.com/photo-1740442829327-4d7a922811fa?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }
    },
    methods:{
        randomNum(){
            const randomNum = Math.random();
            return randomNum;
        }
    }

})

app.mount('#assignment');