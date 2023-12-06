

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {name: 'Luigi', image: 'img/avatar_1.jpg'},
                {name: 'Amin', image: 'img/avatar_2.jpg'},
                {name: 'Susan', image: 'img/avatar_3.jpg'},
                {name: 'Marta', image: 'img/avatar_4.jpg'},
                {name: 'Jessica', image: 'img/avatar_5.jpg'},
                {name: 'Imane', image: 'img/avatar_6.jpg'},
                {name: 'Federico', image: 'img/avatar_7.jpg'},
                {name: 'Davide', image: 'img/avatar_8.jpg'},
                {name: 'Alessandro', image: 'img/avatar_1.jpg'},
                {name: 'Federico', image: 'img/avatar_2.jpg'},
                {name: 'Guglielmo', image: 'img/avatar_3.jpg'},
                {name: 'Simone', image: 'img/avatar_4.jpg'},
                {name: 'Chiara', image: 'img/avatar_5.jpg'},
                {name: 'Imane', image: 'img/avatar_6.jpg'},
                {name: 'Federico', image: 'img/avatar_7.jpg'},
                {name: 'Davide', image: 'img/avatar_8.jpg'}
            ]    
        }
    },
    methods: {
        removeTask(index){
            this.todoList.splice(index,1);
        },


    },
}).mount('#app');