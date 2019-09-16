<template>
  <section>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item >
              <p style="font-weight: bold; color: #4287f5; font-size: 25px;">MediciNOW</p>
          </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/new_appointments">
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
           v-model="speciality"
           :data="filteredSpecialityDataArray"
           placeholder="Pesquisar especialidade..."
           expanded
           @select="option => selectedSpeciality = option"
           >
           <template slot="empty">Especialidade não encontrada</template>
          </b-autocomplete>
          <button class="button is-info" style="padding-right:10px;" v-on:click="validateFields">Buscar</button>
        </b-field>

        <b-field grouped style="padding-top: 5px; padding-bottom: 40px;" >
          <b-field expanded style="padding-left: 10px;" >
            <b-autocomplete
             v-model="medicalAgreementBrand"
             :data="filteredMedicalAgreementBrandDataArray"
             placeholder="Clique aqui para selecionar o convênio..."
             expanded
             @select="option => selectedMedicalAgreementBrand = option"
             >
             <template slot="empty">Convênio não encontrado</template>
            </b-autocomplete>
          </b-field>

          <b-field expanded >
            <b-autocomplete

             v-model="medicalAgreementPlan"
             :data="filteredMedicalAgreementPlanDataArray"
             placeholder="Clique aqui para selecionar o convênio..."
             expanded
             @select="option => selectedMedicalAgreementPlan = option"
             >
             <template slot="empty">Plano não encontrado</template>
           </b-autocomplete>
          </b-field>
        </b-field>

        <b-field grouped v-if = "selectedMedicalAgreementPlan != null">
          <b-field expanded style="padding-left: 10px;">
            <b-datepicker
              name="date"
              v-model="date"
              :show-week-number="showWeekNumber"
              placeholder="Clique para selecionar a data"
              :min-date="minDate"
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
            <p style="text-align:left;">{{doctor.first_name}} {{doctor.last_name}}<br>
                <!-- {{doctor.speciality}} <br> -->
            </p>


          <!-- </section> -->
        </b-button>

        </div>


      </b-step-item>

      <b-step-item label="Revisão" :clickable="isStepsClickable" v-if="visible===true" >
        <div class="container ">
          <div class="notification" style="padding: 20px">
            <div v-if="this.chosenDoctor.first_name !=null">
              <p >
                <p style="fontWeight: bold;" >Doutor Escolhido:</p>
                {{chosenDoctor.first_name}} {{chosenDoctor.last_name}}
                  <p style="fontWeight: bold;" >Especialidade:</p>
                {{this.speciality}}
                <p style="fontWeight: bold;" >Data:</p>
                {{this.appointment_day}}
                <p style="fontWeight: bold;" >Hora:</p>
                {{this.appointment_hour}}
                <p style="fontWeight: bold;" >Endereço:</p>
                {{this.streetAddress}}
              </p>
            </div>
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

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
  data() {
   return {
     speciality_data: [
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

     medicalAgreementBrandData: [
        'Porto Seguro'
      ],

     medicalAgreementPlanData: [
       'Ouro I',
       'Ouro II',
       'Prata I',
       'Prata II',
       'Bronze I',
       'Bronze II',
      ],

      speciality: '',
      medicalAgreementBrand: '',
      medicalAgreementPlan: '',
      selectedMedicalAgreementBrand: null,
      selectedMedicalAgreementPlan: null,
      selectedSpeciality: null,
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
      appointment_hour:  `${dateFormatter.getHours(this.hour)}:${dateFormatter.getMinutes(this.hour)}`,
      minDate: new Date(dateFormatter.getFullYear(), dateFormatter.getMonth(), dateFormatter.getDate()),
      token: this.$session.get('token'),
      pacient_id: null,
      doctor_id: null,
      ma: null,
      office_id: null,
      streetAddress: null
    }
  },

  computed: {
   filteredSpecialityDataArray() {
     return this.speciality_data.filter((option) => {
       return option
           .toString()
           .toLowerCase()
           .indexOf(this.speciality.toLowerCase()) >= 0
     })
   },

   filteredMedicalAgreementPlanDataArray() {
     return this.medicalAgreementPlanData.filter((option) => {
       return option
           .toString()
           .toLowerCase()
           .indexOf(this.medicalAgreementPlan.toLowerCase()) >= 0
     })
   },

   filteredMedicalAgreementBrandDataArray() {
     return this.medicalAgreementBrandData.filter((option) => {
       return option
           .toString()
           .toLowerCase()
           .indexOf(this.medicalAgreementBrand.toLowerCase()) >= 0
     })
   },

   format() {
            return this.formatAmPm ? '12' : '24'
    }
  },

  mounted() {
    this.scroll();
    this.submitedName = this.$session.get('userName')
    this.pacient_id = this.$session.get('pacient_id')

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

    postAppointment: function() {


      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/appointments', {
        pacient_id: this.pacient_id,
        doctor_id: this.doctor_id,
        medical_agreement: this.ma.id,
        appointment_day: this.date,
        appointment_hour: this.appointment_hour,
        office_id: this.office_id
      },{
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*',
          'Authorization': "Bearer " + this.token,
        }
      })
      .then((response) =>{
        console.log(response);

        this.isCardModalActive = true
         this.$router.push('/new_appointment')
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

      this.chosenDoctor = item
      axios.get( proxyurl+`https://mednow.herokuapp.com/api/v1/offices/${this.chosenDoctor.office_id}`, {
          headers: {
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Methods':'*',
            'Access-Control-Allow-Headers':'*',
            'Authorization': "Bearer " + this.token
          }
        })

        .then((response) =>{
          console.log(response);
          this.streetAddress = response.data.data.street_address
       })

       .catch((error) => {
         console.log(error.response);
       });

      return this.doctor_id = item.doctor_id
    },

    validateFields: function () {
      if(this.date != null && this.hour != null){
       this.isStepsClickable = true


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
      }

      if(this.selectedMedicalAgreementBrand != null && this.selectedMedicalAgreementPlan != null){
        axios.get( proxyurl+`https://mednow.herokuapp.com/api/v1/medical_agreements/${this.selectedMedicalAgreementBrand}/${this.selectedMedicalAgreementPlan}`, {
         },{
           headers: {
             'Access-Control-Allow-Credentials' : true,
             'Access-Control-Allow-Methods':'*',
             'Access-Control-Allow-Headers':'*',
           }
         })
         .then((response) =>{
           console.log(response);
           this.ma = response.data.data.id
           this.visible = true
         })
         .catch((error) => {
           console.log(error.response);
         });
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
