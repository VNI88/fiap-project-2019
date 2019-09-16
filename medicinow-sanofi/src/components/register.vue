<template>
  <section class="backgroundRegisterImage">
    <p class="header">MediciNOW</p>
    <div class="container ">
      <div class="notification">
        <form>

          <b-field
            label="Nome"
            :type="{'is-danger': errors.has('first_name')}"
            :message="{'Por favor insira um Nome válido' : errors.firstByRule('first_name', 'required')}">
              <b-input
                v-model="first_name"
                name="first_name"
                v-validate="'required'"
                size="is-medium"
                placeholder="Insira o seu nome aqui">
              </b-input>
          </b-field>

          <b-field
            label="Sobrenome"
            :type="{'is-danger': errors.has('last_name')}"
            :message="{'Por favor insira um Sobrenome válido' : errors.firstByRule('last_name', 'required')}">
              <b-input
                v-model="last_name"
                name="last_name"
                v-validate="'required'"
                size="is-medium"
                placeholder="Insira o seu sobrenome aqui">
              </b-input>
          </b-field>

          <b-field
            :addons="false"
            label="Telefone"
            :type="{'is-danger': errors.has('telephone')}"
            :message="{'Telefone inválido' : errors.firstByRule('telephone', 'required')}">
              <b-input
               v-model="telephone"
               name="telephone"
               v-validate="'required|min:10|max:13'"
               size="is-medium"
               v-cleave="masks.custom"
               @input.native="onInput"
               placeholder="Insira um telefone para contato aqui - Exemplo: (11)984676554"></b-input>
          </b-field>

          <b-field
           label="Email"
           :type="{'is-danger': errors.has('email')}"
           :message="{'Email inválido' : errors.firstByRule('email', 'required')}">
              <b-input
                v-model="email"
                name="email"
                v-validate="'required'"
                type="email"
                size="is-medium"
                maxlength="30"
                placeholder="Insira o seu email aqui">
              </b-input>
          </b-field>

          <b-field
            label="Senha"
            :type="{'is-danger': errors.has('password')}"
            :message="{'Senha inválida' : errors.firstByRule('password', 'required')}">
              <b-input
                v-model="password"
                name="password"
                v-validate="'required|min:8'"
                type="password"
                size="is-medium"
                maxlength="8"
                password-reveal
                placeholder="Insira o sua senha aqui">
              </b-input>
          </b-field>

          <div class="field">
            <b-collapse
              :open="false"
              aria-id="contentIdForA11y1">

              <b-switch
              :value="false"
              type="is-info"
              aria-controls="contentIdForA11y1" slot="trigger">
                Você é médico?
              </b-switch>

              <b-field label="CRM">
                <b-input
                v-model="crm"
                name="crm"

                size="is-medium"
                placeholder="Insira o seu CRM"></b-input>
              </b-field>

              <b-field label="Especialidade">
                <b-input
                v-model="speciality"
                name="speciality"

                size="is-medium"
                placeholder="Insira a sua Especialidade"></b-input>
              </b-field>

              <b-field label="Endereço">
                <b-input
                v-model="street_address"
                name="street_address"

                size="is-medium"
                placeholder="Insira o endereço de seu escritório"></b-input>
              </b-field>
            </b-collapse>
          </div>

          <b-field
            label=""
            :type="{'is-danger': errors.has('flag-terms')}"
            :message="{'Por favor marque a opção para prosseguir' : errors.firstByRule('flag-terms', 'required')}">
              <b-checkbox v-model="flagTerms" name="flag-terms" v-validate="'required:false'"  type="is-info">
                Li e concordo com os <a @click="isCardModalActive = true">termos e condições de uso</a>
              </b-checkbox>
              <b-modal :active.sync="isCardModalActive"  >
                <div style="width: auto">
                  <iframe  style="width:1000px; height: 500px" src="https://docs.google.com/document/d/e/2PACX-1vT-87XP8cRwMGRkXB2eyFpkNMTnuPw03mRlgVuzCTARTX-hF3j6ihEouZcOO04IgleVzym4vU3-tHiL/pub?embedded=true"></iframe>
                </div>
              </b-modal>
          </b-field>
        </form>
      </div>
      <b-field grouped position="is-centered">
        <b-button  v-on:click="validateBeforeSubmit"  size="is-medium" type="is-info"  rounded >Finalizar Cadastro</b-button>
      </b-field>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueSession from 'vue-session';
import Cleave from 'cleave.js';

Vue.use(VeeValidate, {
    events: ''
})

 Vue.use(VueSession)

 const cleave = {
    name: 'cleave',
    bind(el, binding) {
        const input = el.querySelector('input')
        input._vCleave = new Cleave(input, binding.value)
    },
    unbind(el) {
        const input = el.querySelector('input')
        input._vCleave.destroy()
    }
  }
export default {
  directives: { cleave },
  data() {
    return {
      last_name: null,
      first_name: null,
      telephone: null,
      email: null,
      password: null,
      flagTerms: false,
      pacient: null,
      crm: null,
      speciality: null,
      doctor: null,
      street_address: null,
      isCardModalActive: false,
      appointment_price: null,
      office: null,
      counter: 0,
      masks: {
        custom: {
          delimiters: ['(', ')'],
          blocks:[0, 2, 9],
          numericOnly: true
        }
      }
    }
  },

  methods: {
    onInput(event) {
      this.telephone = event.target._vCleave.getRawValue()
    },

   postOffice(proxyurl) {
     axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/offices', {
       street_address: this.street_address,
   },{
     headers: {
       'Access-Control-Allow-Credentials' : true,
       'Access-Control-Allow-Methods':'*',
       'Access-Control-Allow-Headers':'*',
       }
   })
       .then((response) =>{
       console.log(response);
       this.counter = this.counter +1
       return response.data.office_id
     })
     .catch((error) => {
       console.log(error.response);

       this.$buefy.toast.open({
         message: 'Por gentileza, tente novamente.',
         type: 'is-danger',
         position: 'is-bottom'
       })
     })
   },

    postDoctors(proxyurl) {
       axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/doctors', {
        last_name: this.last_name,
        first_name: this.first_name,
        telephone:  this.telephone,
        email: this.email,
        password: this.password,
        crm: this.crm,
        //appointment_price: this.appointment_price,
        speciality: this.speciality
      },{
      headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers':'*',
        }
      })
        .then((response) =>{
        console.log(response);
        this.counter = this.counter +1
        return response.data

      })
      .catch((error) => {
        console.log(error.response);

        this.$buefy.toast.open({
          message: 'Por gentileza, tente novamente.',
          type: 'is-danger',
          position: 'is-bottom'
        })
      })
   },
    async postDoctorData (proxyurl) {

      await axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/doctors_data', {

            doctor: this.doctor,
            office_id: this.office
       },{
         headers: {
           'Access-Control-Allow-Credentials' : true,
           'Access-Control-Allow-Methods':'*',
           'Access-Control-Allow-Headers':'*',
           }
       })
       .then((response) =>{
         console.log(response)

          this.$buefy.toast.open({
            message: 'Cadastro realizado com sucesso!',
            type: 'is-success',
            position: 'is-bottom'
          })

          return this.$router.push('/')
        })
        .catch((error) => {
            console.log(error.response);

            this.$buefy.toast.open({
              message: 'Por gentileza, tente novamente.',
              type: 'is-danger',
              position: 'is-bottom'
            })
          })

    },

      validateBeforeSubmit() {
       this.$validator.validateAll().then((result) => {
         if (result) {
           if (this.crm){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            this.office =    this.postOffice(proxyurl);
            this.doctor =    this.postDoctors(proxyurl);

            while(this.counter < 2){
              console.log(this.counter)
            }

            this.postDoctor(proxyurl)
          }
          else{
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/pacients', {
              first_name: this.first_name,
              last_name: this.last_name,
              telephone: this.telephone,
              email: this.email,
              password: this.password

          },{
            headers: {
              'Access-Control-Allow-Credentials' : true,
              'Access-Control-Allow-Methods':'*',
              'Access-Control-Allow-Headers':'*',
              }
          })
              .then((response) =>{
              console.log(response);
               this.pacient = response.data
               // window.location.href = "/login";

               this.$buefy.toast.open({
                 message: 'Cadastro realizado com sucesso!',
                 type: 'is-success',
                 position: 'is-bottom'
               })
              return this.$router.push('/')
            })
            .catch((error) => {
              console.log(error.response);

              this.$buefy.toast.open({
                message: 'Por gentileza, tente novamente.',
                type: 'is-danger',
                position: 'is-bottom'
              })
            });
          }
        }
        else {
          this.$buefy.toast.open({
            message: 'O formulário não é válido! Por favor verifique os campos.',
            type: 'is-danger',
            position: 'is-bottom'
          })
        }
      });
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
.backgroundRegisterImage {
  background-image: url("../assets/register_background.jpeg");
  height: 850px;
}
</style>
