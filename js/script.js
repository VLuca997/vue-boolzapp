// INIZIALIZZO VUE
    const {createApp } = Vue;
    const app = createApp({
        data(){
            return {
                searchQuery: '', // ricerca contatti 
                activeContact: {}, // contatto attivo
                contacts: [//ARRAY OGGETTI CHAT
                        {
                            name: 'Michele',
                            avatar: './img/avatar_1.jpg',
                            visible: true,
                            messages: [{
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
                            }],
                            
                        },
                        {
                            name: 'Francesco Totti',
                            avatar: './img/avatar_2.jpg',
                            visible: true,
                            messages: [{

                                    date: '20/03/2020 16:30:00',
                                    message: 'Ao o si visto che colpo de Karatè? i gol cosi manco Messi',
                                    status: 'received'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Selfie deeeeeeeerrrr pupoooooooneeeeeeeeeeeeee',
                                    status: 'received'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro a Fadellì tacci tua, 2 go' uno appresso all'altro a Fadellì tacci tua, 2 go' uno appresso all'altro a Fadellì tacci tua, 2 go' uno appresso all'altro a Fadellì tacci tua, 2 go' uno appresso all'altro a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: "a Fadellì tacci tua, 2 go' uno appresso all'altro ",
                                    status: 'sent'
                                },
                                
                            ],
                                
                        },
                        {
                            name: 'Fabio',
                            avatar: './img/avatar_2.jpg',
                            visible: true,
                            messages: [{

                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                                },
                                {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'sent'
                                }],
                                
                        },
                        {
                            name: 'Samuele',
                            avatar: './img/avatar_3.jpg',
                            visible: true,
                            messages: [{
                                
                                    date: '28/03/2020 10:10:40',
                                    message: 'La Marianna va in campagna',
                                    status: 'received'
                                },
                                {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent'
                                },
                                {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received'
                                }],
                                
                        },
                        {
                            name: 'Alessandro B.',
                            avatar: './img/avatar_4.jpg',
                            visible: true,
                            messages: [{
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received'
                                } ],
                            
                        },
                        {
                            name: 'Alessandro L.',
                            avatar: './img/avatar_5.jpg',
                            visible: true,
                            messages: [{
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ricordati di chiamare la nonna',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Va bene, stasera la sento',
                                    status: 'received'
                                }],
                                
                        },
                        {
                            name: 'Claudia',
                            avatar: './img/avatar_5.jpg',
                            visible: true,
                            messages: [{
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao Claudia, hai novità?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Non ancora',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'Nessuna nuova, buona nuova',
                                    status: 'sent'
                                }],
                                
                        },
                        {
                            name: 'Federico',
                            avatar: './img/avatar_7.jpg',
                            visible: true,
                            messages: [{
                                    date: '10/01/2020 15:30:55',
                                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                    status: 'received'
                                }],
                                
                        },
                        {
                            name: 'Davide',
                            avatar: './img/avatar_8.jpg',
                            visible: true,
                            messages: [{
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'OK!!',
                                    status: 'received'
                                }],
                                
                        }
                    ],
                    
                }
            },
            methods: {
                selectContact(contact) {
                    this.activeContact = contact;
                },
                addMessage() {
                    if (this.newMessage.trim() === '') {
                         return; // Ignora l'aggiunta di un messaggio vuoto
                    }
                
                    const newMessageObj = {
                        date: new Date().toLocaleString(), // Utilizza la data corrente per il nuovo messaggio
                        message: this.newMessage,
                        status: 'sent',
                    };
                
                    this.activeContact.messages.push(newMessageObj);
                    this.newMessage = ''; // Puliso l'input del messaggio
                    
                    setTimeout(() => {
                        const responseMessageObj = {
                            date: new Date().toLocaleString(),
                            message: 'Ok!',
                            status: 'received',
                        };

                        this.activeContact.messages.push(responseMessageObj);
                      }, 3000); // Aggiungo il messaggio di risposta dopo 1 secondo
                    },
                    filteredContacts() {
                        if (!this.searchQuery) {
                            return this.contacts;
                        }
                
                        const search = this.searchQuery.toLowerCase();
                        return this.contacts.filter(contact =>
                            contact.name.toLowerCase().includes(search)
                        );
                    },
                },
    });app.mount('#app');