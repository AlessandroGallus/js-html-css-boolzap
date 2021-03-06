const app = new Vue({

  el: '#app',

  

  data:{
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
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
        name: 'Fabio',
        avatar: '_2',
        visible: true,
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
        name: 'Samuele',
        avatar: '_3',
        visible: true,
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
        name: 'Luisa',
        avatar: '_4',
        visible: true,
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
    active_index:0,
    str_new_msg :'',
    search_user:'',
    show_info_box: false,
    active_message: 0
  },
  methods:{
    generateMessage(){
      this.contacts[this.active_index].messages.push({
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.str_new_msg,
        status: 'sent'
      });
      this.str_new_msg = '';
      setTimeout(()=>{
        this.contacts[this.active_index].messages.push({
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: "ok",
          status: 'received'
        });
      },1000);
    },
    clickMessage(message_index){
      this.show_info_box = !this.show_info_box
      this.active_message = message_index
    },
    cancellaMessaggio(indice_utente, indice_messaggio){

      this.contacts[indice_utente].messages.splice(indice_messaggio, 1)
      this.show_info_box = false;

    }
  }
} )