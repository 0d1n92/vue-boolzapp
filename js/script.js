// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)




var app= new Vue({
el: '#app',
data: {
    indexChat:0,
    Newtext:"",
    searchName:"",
    NewResult:"",
    user:{
        name: 'Enrico',
        surname: 'Rombaldoni',
      },
    contacts: [
      {
        name: "Lapo",
        avatar: 'img/icons/avatars/lapo_avatar.png',
        visible: true,

        log: "ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(20,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Bendetta',
        avatar: 'img/icons/avatars/benedetta_avatar.png',
        visible: false,
        log: "ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(126,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Putin',
        avatar: 'img/icons/avatars/putin_avatar.png',
        visible: false,
        log:"ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(10,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
      },
      {
        name: 'Yagami',
        avatar: 'img/icons/avatars/yagami_avatar.png',
        visible: false,
        log: "ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(142,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],

  },

  methods: {
  // Click sul contatto mostra la conversazione del contatto cliccato
    activeChat: function (index) {


      this.contacts.forEach((element) => {
        element.visible=false;
      });

      this.contacts[index].visible=true;
      this.indexChat=index;

    },
    //nuovo messaggio ricevuto
    submit: function (text,date,status) {
        text=this.Newtext,
        date=dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
        status='received';
        this.contacts[this.indexChat].messages.push(
          {
            text,
            date,
            status,
          }
        );
        this.newSentMesseage();

    },
    //nuovo messaggio inviato dopo un secondo dal ricevuto
    newSentMesseage: function (text,date,status) {
        var adresses=this.contacts[this.indexChat].messages;
        setTimeout(function(){
        text="OK";
        date=dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
        status='sent';
        adresses.push(
          {
            text,
            date,
            status,
          }
        )
        }, 1000);

      },

      search:function () {
      
      },
    },
    //methods CLOSE


})
