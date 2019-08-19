<template>
  <section class="backgroundPainting">
    <p class="header">MediciNOW</p>
    <div class="container ">
      <div class="notification">
        <form >

          <b-field
            label="Nome"
            :type="{'is-danger': errors.has('firstname')}"
            :message="{'Por favor insira um Nome válido' : errors.firstByRule('firstname', 'required')}">
              <b-input
                v-model="firstname"
                name="firstname"
                v-validate="'required'"
                size="is-medium"
                placeholder="Insira o seu nome aqui">
              </b-input>
          </b-field>

          <b-field
            label="Sobrenome"
            :type="{'is-danger': errors.has('lastname')}"
            :message="{'Por favor insira um Sobrenome válido' : errors.firstByRule('lastname', 'required')}">
              <b-input
                v-model="lastname"
                name="lastname"
                v-validate="'required'"
                size="is-medium"
                placeholder="Insira o seu sobrenome aqui">
              </b-input>
          </b-field>

          <b-field
            label="Telefone"
            :type="{'is-danger': errors.has('telephone')}"
            :message="{'Telefone inválido' : errors.firstByRule('telephone', 'required')}">
              <b-input
               v-model="telephone"
               name="telephone"
               v-validate="'required|max:12'"
               size="is-medium"
               maxlength="12"
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
                size="is-medium"
                placeholder="Insira o seu CRM"></b-input>
              </b-field>
            </b-collapse>
          </div>

          <b-field
            label=""
            :type="{'is-danger': errors.has('flag-terms')}"
            :message="{'Por favor marque a opção para prosseguir' : errors.firstByRule('flag-terms', 'required')}">
              <b-checkbox v-model="flagTerms" name="flag-terms" v-validate="'required:false'"  type="is-info">
                Eu concordo com os termos e condições de uso
              </b-checkbox>
          </b-field>


        </form>
      </div>
      <b-field grouped position="is-centered">
        <b-button  v-on:click="validateBeforeSubmit"  size="is-medium" type="is-info"  rounded >Finalizar Cadastro</b-button>
      </b-field>
      <div>
        <p>{{pacient}}</p>
      </div>
  </div>

  </section>




</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';

Vue.use(VeeValidate, {
    events: ''
})

export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      flagTerms: false,
      pacient:{}
    }
  },
  /*
  data() {
    return {
      medicalAgreements: {},
    }
  },
  */
  methods: {
  /*  mounted() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) =>{
        console.log(response.data);
        this.medicalAgreements = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
 */
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$buefy.toast.open({
            message: 'Cadastro realizado com sucesso!',
            type: 'is-success',
            position: 'is-bottom'
          })

          axios.post('https://obscure-woodland-55617.herokuapp.com/api/v1/pacients')
            .then((response) =>{
            console.log(response.data);
            this.pacient = response.data;
          })
          .catch((error) => {
            console.log(error);
          });

          return;
        }
        this.$buefy.toast.open({
          message: 'O formulário não é válido!Por favor verifique os campos.',
          type: 'is-danger',
          position: 'is-bottom'
        })
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
.backgroundPainting {
  background-color: #7ea2d9;
  height:950px;
}
</style>
