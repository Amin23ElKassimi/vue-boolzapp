

const { createApp } = Vue;

createApp({
    data() {
        return {

        }
    },
    methods: {
        removeTask(index){
            this.todoList.splice(index,1);
        },


    },
}).mount('#app');