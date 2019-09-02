<template>
  <section>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item href="/">
              <p style="font-weight: bold; color: #4287f5; font-size: 25px;">MediciNOW</p>
          </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
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
            <p style="fontWeight: bold; color:#4287f5;">Paciente,</p>
            </b-navbar-item>
        <b-navbar-item  style="width:auto;">
            <p> {{submitedName}}</p>
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-steps v-model="activeStep" :animated="isAnimated" type="is-info" :has-navigation="false">
      <b-step-item label="Especialidade" :clickable="isStepsClickable">
        <b-field grouped style="padding-top: 40px; padding-bottom: 40px;" >
          <b-autocomplete
           style="padding-left: 10px;"
           v-model="name"
           :data="filteredDataArray"
           placeholder="Pesquisar especialidade..."
           expanded
           @select="option => selected = option"
           >
           <template slot="empty">Especialidade não encontrada</template>
          </b-autocomplete>
          <button class="button is-info" style="padding-right:10px;" v-on:click="validateFields">Buscar</button>
        </b-field>

        <b-field grouped v-if = "selected != null">
          <b-field expanded style="padding-left: 10px;">
            <b-datepicker
              name="date"
              v-model="date"
              :show-week-number="showWeekNumber"
              placeholder="Clique para selecionar a data"
              >
            </b-datepicker>
          </b-field>

          <b-field style="padding-right: 10px;" expanded>
            <b-timepicker
                name="hour"
                v-model="hour"
                placeholder="Clique para selecionar a hora"
                :enable-seconds="enableSeconds"
                :hour-format="format" >
            </b-timepicker>
          </b-field>
        </b-field>
      </b-step-item>

      <b-step-item label="Médico"  :clickable="isStepsClickable" type="is-info" v-if="visible===true">

        <div v-for="doctor in doctors" class="modal-card" style=" margin-top: 40px; width: auto; border-style: solid; border-width: 2px; border-radius: 10px; border-color: blue; ">
          <b-button v-on:click="setFields(doctor)">
          <!-- <section class="modal-card-body" role="button"> -->
            <p >{{doctor.first_name}} {{doctor.last_name}}<br>
                <!-- {{doctor.speciality}} <br> -->
            </p>


          <!-- </section> -->
        </b-button>

        </div>


      </b-step-item>

      <b-step-item label="Revisão" :clickable="isStepsClickable" v-if="visible===true" >
        <div class="container ">
          <div class="notification" style="padding: 20px">
            <p v-if="this.chosenDoctor != null">
              <p style="fontWeight: bold;">Doutor Escolhido:</p>
              {{chosenDoctor.first_name}} {{chosenDoctor.last_name}}
            </p>
          </div>
          <b-field grouped position="is-centered">
          <b-button size="is-medium" type="is-info" v-on:click="postAppointment">Marcar Consulta</b-button>
          <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep" >
            <div class="card" style="border-radius: 10px; ">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content" style="text-align: center;">
                          <img src="../assets/green_check.png" alt="Image" style="height:100px;">
                            <p class="title is-4">Sua consulta foi marcada com sucesso!</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        </b-field>
          </div>
      </b-step-item>
    </b-steps>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueSession from 'vue-session';

Vue.use(VeeValidate, {
  events: ''
})
let dateFormatter = new Date()
 Vue.use(VueSession)

export default {
  data() {
   return {
     data: [
       'Endócrinologia',
       'Pediatria',
       'Ortopedia',
       'Urologia',
       'Nutrição',
       'Oftalmologia',
       'Dermatologia',
       'Mastologia',
       'Nefrologia',
       'Hematologia',
      ],
      name: '',
      selected: null,
      showWeekNumber: false,
      formatAmPm: false,
      enableSeconds: false,
      activeStep: 0,
      isAnimated: true,
      isStepsClickable: false,
      doctors: null,
      submitedName: null ,
      date: null,
      hour: null,
      visible: false,
      isFullPage:true,
      chosenDoctor: 'Você não selecionou a sua consulta.Por gentileza, volte para a etapa anterior.',
      isCardModalActive: false,
      appointment_day: `${dateFormatter.getDate(this.date)}-${dateFormatter.getMonth(this.date)}-${dateFormatter.getFullYear(this.date)}`,
      appointment_hour:  `${dateFormatter.getHours(this.hour)}:${dateFormatter.getMinutes(this.hour)}`
    }
  },

  computed: {
   filteredDataArray() {
     return this.data.filter((option) => {
       return option
           .toString()
           .toLowerCase()
           .indexOf(this.name.toLowerCase()) >= 0
     })
   },
   format() {
            return this.formatAmPm ? '12' : '24'
    }
  },

  mounted() {
    this.scroll();
    this.submitedName = this.$session.get('userName')
  },

  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },

  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    },

    postAppointment: function() {

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/appointments', {
        pacient_id: this.pacient_id,
        doctor_id: this.doctor_id,
        medical_agreement: this.medical_agreement,
        appointment_day: this.date,
        appointment_hour: this.hour
      },{
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*',
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

    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
        };
      }
    },

    open() {
        const loadingComponent = this.$buefy.loading.open({
            container: this.isFullPage ? null : this.$refs.element.$el
        })
        setTimeout(() => loadingComponent.close(), 3 * 1000)
    },

    setFields: function(item) {
      console.log(item)
      this.chosenDoctor = item
    },

    validateFields: function () {
      if(this.date != null && this.hour != null){
       this.isStepsClickable = true

       const proxyurl = "https://cors-anywhere.herokuapp.com/";
       axios.get( proxyurl+`https://mednow.herokuapp.com/api/v1/doctors/${this.appointment_day}/${this.appointment_hour}`, {

       },{
         headers: {
           'Access-Control-Allow-Credentials' : true,
           'Access-Control-Allow-Methods':'*',
           'Access-Control-Allow-Headers':'*',
         }
       })
       .then((response) =>{
         console.log(response);
         this.doctors = response.data.data


        })
       .catch((error) => {
         console.log(error.response);
       });
       return this.visible = true
      }
    }
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
