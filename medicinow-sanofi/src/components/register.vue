<template>
  <section class="backgroundPainting">
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
                v-model="crm"
                name="crm"

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
      last_name: null,
      first_name: null,
      telephone: null,
      email: null,
      password: null,
      flagTerms: false,
      pacient: null,
      crm: null
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$buefy.toast.open({
            message: 'Cadastro realizado com sucesso!',
            type: 'is-success',
            position: 'is-bottom'
          })
          if (this.crm){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/doctors', {
              first_name: this.first_name,
              last_name: this.last_name,
              telephone: this.telephone,
              email: this.email,
              password: this.password,
              crm: this.crm
          },{
            headers: {
              'Access-Control-Allow-Credentials' : true,
              'Access-Control-Allow-Methods':'*',
              'Access-Control-Allow-Headers':'*',
              }
          })
              .then((response) =>{
              console.log(response);
              return this.pacient = response.data
            })
            .catch((error) => {
              console.log(error);
            });
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
              return this.pacient = response.data
            })
            .catch((error) => {
              console.log(error);
            });
          }

        }
        else {
          this.$buefy.toast.open({
            message: 'O formulário não é válido!Por favor verifique os campos.',
            type: 'is-danger',
            position: 'is-bottom'
          })
        }
      });
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
</style>
