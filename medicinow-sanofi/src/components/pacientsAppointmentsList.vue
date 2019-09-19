<template>
  <section>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item >
              <p style="font-weight: bold; color: #4287f5; font-size: 25px;">MediciNOW</p>
          </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/new_appointment">
          <a
          class="navbar-item"
          role="button">
            <span>Nova Consulta</span>
          </a>
        </b-navbar-item>

        <b-navbar-item>
          <b-dropdown hoverable aria-role="list">
            <a
            class="navbar-item"
            slot="trigger"
            role="button">
              <span>Listar consultas</span>
            </a>

            <b-dropdown-item aria-role="listitem"  href="/#/pacients_appointments">Consultas de hoje</b-dropdown-item>
            <b-dropdown-item aria-role="listitem"  href="/#/pacients_next_appointments">Próximas consultas</b-dropdown-item>
            <b-dropdown-item aria-role="listitem"  href="/#/pacients_historic">Histórico</b-dropdown-item>
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
            <p style="fontWeight: bold; color:#4287f5;">Paciente,</p>
            </b-navbar-item>
        <b-navbar-item  style="width:auto;">
            <p> {{submitedName}}</p>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div v-if="zeroAppointments === 0" style ="fontWeight: bold; text-align: center; fontSize: 40px; padding: 100px;">
      <p >Você não possui consultas marcadas para hoje.</p>
    </div>
    <div  v-for="appointment in appointments" class="modal-card" role="button" style=" margin-top: 40px; width: auto; border-style: solid; border-width: 1px; border-radius: 10px; border-color: blue; height: auto; margin-left: 15px; margin-right: 15px;" aria-controls="contentIdForA11y1" slot="trigger">
      <div style="padding: 20px;">
        <p style="fontWeight: bold;">Data</p>
          {{appointment_day}}
        <p style="fontWeight: bold;">Hora</p>
          {{appointment.appointment_hour}}
        <p style="fontWeight: bold;">Paciente</p>
          {{appointment.pacient_first_name}}  {{appointment.pacient_last_name}}
        <p style="fontWeight: bold;">Convênio</p>
          {{appointment.brand}} {{appointment.plan}}
        <p style="fontWeight: bold;">Consultório</p>
          {{appointment.street_address}}

      </div>
      <b-field grouped position="is-right" style="margin: 20px; ">
        <b-button size="is-medium" type="is-danger" v-on:click="cancelAppointment(appointment.appointment_id)">Cancelar Consulta</b-button>
      </b-field>

      <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep" >
        <div class="card" style="border-radius: 10px; ">
            <div class="card-content">
              <div class="media">
                  <div class="media-content" style="text-align: center;">
                    <img src="../assets/green_check.png" alt="Image" style="height:100px;">
                    <p class="title is-4">A consulta foi cancelada com sucesso!</p>
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
import moment from 'moment'

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
      appointment_day: `${moment(this.date).format('YYYY-MM-DD')}`,
      appointment_hour: `${moment(this.hour).format('HH:MM')}`,
      appointment: null,
      appointments: null,
      pacient_id: null,
      pacient_name: [],
      street_address: [],
      office_id: null,
      zeroAppointments: null,
      pacient_id: this.$session.get('pacient_id'),
      token: this.$session.get('token')
    }
  },

  mounted() {

    this.submitedName = this.$session.get('userName'),
    this.getPacientDayAppointments()
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

    getPacientDayAppointments: function () {
      axios.get( proxyurl+`https://mednow.herokuapp.com/api/v1/appointments/pacient_day_list/${this.appointment_day}/${this.pacient_id}`, {
         headers: {
           'Access-Control-Allow-Credentials' : true,
           'Access-Control-Allow-Methods':'*',
           'Access-Control-Allow-Headers':'*',
           'Authorization': `Bearer ${this.token}`,
         }
       })
       .then((response) =>{
         console.log(response);

         const loadingComponent = this.$buefy.loading.open({})
         setTimeout(() => loadingComponent.close(), 3 * 1000)

         this.appointments = response.data.data
        })
       .catch((error) => {
         console.log(error.response);
         if (error.response.data.error.received === 0) {
           this.zeroAppointments = 0
         }
       });
    },

    cancelAppointment: function(appointment_id) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.put( proxyurl+`https://mednow.herokuapp.com/api/v1/appointments/${appointment_id}`, {} ,{
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*',
          'Authorization': `Bearer ${this.token}`,
        }
      })
      .then((response) =>{
        console.log(response);
        this.isCardModalActive = true
        setTimeout(() => { this.$router.push('/pacients_appointments')}, 2000)
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
