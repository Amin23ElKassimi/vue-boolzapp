

const { createApp } = Vue;

createApp({
    data() {
        return {
            indexChat: 0,
            NewMessage: '',
            contacts: [
                    {name: 'Amin', image: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Bravo quando torni ti faro un bel regalo',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Cosa?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: "te lo diro piu in la'",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Ma accirtt!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Ma ucciditi tu',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Comunque prego',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Grazie ti voglio bene',
                        status: 'sent'
                    }
                    ]},  
                    {   name: 'Amore❤️', image: 'https://i.pravatar.cc/47?img=19',
                        visible: true,
                        messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Amore dove sei?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Sta sera non torno a casa mi trattengo in ufficio sta notte',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Okay non scomodarti di tornare a casa domani!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Amore stavo scherzando',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Da quando entro a lavoro non faccio altro che pensare a te',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Veramente?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'You are my love❤️',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'You too!😘❤️❤️',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Amore non dimenticare di passare a prendere la pasta al supermercato',
                            status: 'received'
                        },
                    ]},
                    {   name: 'Federico', image: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},  
                    {   name: 'Zoe', image: 'https://i.pravatar.cc/47?img=40',
                        visible: true,
                        messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]},
                    {   name: 'Francesco', image: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},
                    {   name: 'Alessandro', image: 'img/avatar_5.jpg',
                        visible: true,
                        messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]},                    
                    {   name: 'Annet Amante🥰', image: 'https://i.pravatar.cc/49?img=49',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},
                    {   name: 'Susan', image: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},
                    {   name: 'Mike', image: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},
                    {   name: 'Saber', image: 'img/avatar_8.jpg',
                        visible: true,
                        messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]},
                    {   name: 'Katerin', image: 'https://i.pravatar.cc/150?img=43',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},                    
                    {   name: 'Adele', image: 'https://i.pravatar.cc/43?img=29',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                    ]},
                ],
  
             }   
    },
    methods: {

        addNewMessage(newElement){

            this.NewMessage = '';
            // Values to push
            const objectMessage = {};
            objectMessage.message = newElement;
            objectMessage.status = 'sent';
            // Filter Task
            this.contacts[this.indexChat ].messages.push(objectMessage);
            // console.log(newTask)
            // console.log(newElement);
            // console.log( this.contacts[0].messages);
        },

        addNewAnswer(newElement){
            const objectMessage = {};
            objectMessage.message = 'cazzo';
            objectMessage.status = 'received';
            setTimeout(() => this.contacts[this.indexChat ].messages.push(objectMessage),3000)
            
        },

        updateChat(actualChatId){
            this.indexChat = actualChatId;
        }
        
    

    },
}).mount('#app');



