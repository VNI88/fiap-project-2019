<template>
  <section>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item >
              <p style="font-weight: bold; color: #4287f5; font-size: 25px;">MediciNOW</p>
          </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item>
          <b-dropdown hoverable aria-role="list">
            <a
            class="navbar-item"
            slot="trigger"
            role="button">
              <span>Listar consultas</span>
            </a>

            <b-dropdown-item aria-role="listitem">Visualização Geral</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Confirmadas</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Canceladas</b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>

        <b-navbar-item>
          <b-dropdown hoverable aria-role="list">
            <a
            class="navbar-item"
            slot="trigger"
            role="button">
              <span>Configurações</span>
            </a>

            <b-dropdown-item aria-role="listitem">Dados Pessoais</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Dados de pagamento</b-dropdown-item>

            <hr class="dropdown-divider">

            <b-dropdown-item aria-role="listitem" v-on:click="logout">Sair</b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>
      </template>
      <template slot="end">
          <b-navbar-item >
            <p style="fontWeight: bold; color:#4287f5;">Doutor,</p>
            </b-navbar-item>
        <b-navbar-item  style="width:auto;">
            <p> {{submitedName}}</p>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div v-for="appointment in appointments" class="modal-card" style=" margin-top: 40px; width: auto; border-style: solid; border-width: 2px; border-radius: 10px; border-color: blue; ">
      <p >{{appointment.first_name}} {{doctor.last_name}}<br>
          <!-- {{doctor.speciality}} <br> -->
      </p>

      <b-button size="is-medium" type="is-danger" v-on:click="cancelAppointment(appointment)">Cancelar Consulta</b-button>
      <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep" >
        <div class="card" style="border-radius: 10px; ">
            <div class="card-content">
              <div class="media">
                  <div class="media-content" style="text-align: center;">
                    <img src="../assets/green_check.png" alt="Image" style="height:100px;">
                    <p class="title is-4">Sua consulta foi cancelada com sucesso!</p>
                  </div>
              </div>
            </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueSession from 'vue-session';

let date = new Date();
Vue.use(VeeValidate, {
  events: ''
})
let dateFormatter = new Date()
Vue.use(VueSession)

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
  data() {
   return {
      name: '',
      doctors: null,
      submitedName: null ,
      date: null,
      hour: null,
      visible: false,
      isFullPage:true,
      isCardModalActive: false,
      appointment_day: `${date.getDate(this.date)}-${date.getMonth(this.date)}-${date.getFullYear(this.date)}`,
      appointment_hour:  `${dateFormatter.getHours(this.hour)}:${dateFormatter.getMinutes(this.hour)}`,
      appointment: null,
      appointments: null,
      pacient_id: null,
      pacient_name: [],
      street_address: [],
      office_id: null,
      doctor_id: this.$session.get('doctor_id'),
      token: this.$session.get('token')
    }
  },


  mounted() {
    
    this.submitedName = this.$session.get('userName'),
    console.log(this.token)
    console.log(this.doctor_id)
    axios.get( proxyurl+`https://mednow.herokuapp.com/api/v1/appointments/${this.appointment_day}/${this.doctor_id}`, {
       headers: {
         'Access-Control-Allow-Credentials' : true,
         'Access-Control-Allow-Methods':'*',
         'Access-Control-Allow-Headers':'*',
         'Authorization': `Bearer ${this.token}`,
       }
     })
     .then((response) =>{
       console.log(response);

       const loadingComponent = this.$buefy.loading.open({
           container: this.isFullPage ? null : this.$refs.element.$el
       })
       setTimeout(() => loadingComponent.close(), 3 * 1000)

       this.appointments = response.data.data
      })
     .catch((error) => {
       console.log(error.response);
     });

  },

  beforeCreate: function () {
    if (!this.$session.exists()) {
        return this.$router.push('/')
    }
  },

  methods: {
    logout: function () {
      this.$session.destroy()
      return this.$router.push('/')
    },

    cancelAppointment: function(appointment) {
      this.appointment = appointment;
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.delete( proxyurl+`https://mednow.herokuapp.com/api/v1/appointments/${this.appointment.id}`, {
      },{
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*',
          'Authorization': "Bearer " + this.token
        }
      })
      .then((response) =>{
        console.log(response);
         return this.isCardModalActive = true
        }
      )
      .catch((error) => {
        console.log(error.response);
      });
    },

    open() {
        const loadingComponent = this.$buefy.loading.open({
            container: this.isFullPage ? null : this.$refs.element.$el
        })
        setTimeout(() => loadingComponent.close(), 3 * 1000)
    },

  }
}
</script>


    <style>
    .header {
      text-align: center;
      font-size: 50px;
      font-family: "Courier";
      font-weight: bold;
      color:#f0f2f5;
    }
    .backgroundPainting {
      background-color: #7ea2d9;
      height:950px;
    }
    .buttonPosition {
      padding-left: 80px;
    }
    </style>
