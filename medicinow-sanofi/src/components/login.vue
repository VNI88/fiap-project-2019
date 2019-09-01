<template>
  <section class="backgroundPainting">
    <div style="align-items: center">
      <p class="header">MediciNOW</p>
      <form >
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field
            label="Email"
            :type="{'is-danger': errors.has('email')}"
            :message="{'Email inválido' : errors.firstByRule('email', 'required')}">
              <b-input
              v-model="email"
              name="email"
              v-validate="'required'"
              type="email"
              placeholder="Seu email"
              required>
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
              password-reveal
              placeholder="Sua senha"
              required>
              </b-input>
            </b-field>

            <b-checkbox>Lembrar senha</b-checkbox>
            <p>Não possui cadastro?<a href="#/register" type="is-info"> Clique aqui</a></p>
          </section>
          <footer class="modal-card-foot">
            <div class="buttonPosition">
              <b-button  v-on:click="validateBeforeSubmit"  size="is-medium" type="is-info"  rounded >Login</b-button>
            </div>
          </footer>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueSession from 'vue-session'
Vue.use(VeeValidate, {
  events: ''
})
 Vue.use(VueSession)
export default {
  data() {
    return {
      email: null,
      password: null,
      userToken:null,
    }
  },
methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          axios.post( proxyurl+'https://mednow.herokuapp.com/api/v1/sign_in', {
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
            if (response.data.status === 'success' && response.data.token) {
              this.$session.start()
              this.$session.set('jwt', response.data.token)
              response.headers.Authorization = 'Bearer ' + response.data.token
              window.location.href = "http://localhost:8080/#/homepage"
              this.$router.push('/homepage')
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }
        else{
          this.$buefy.toast.open({
            message: 'Por gentileza, preencha os campos corretamente.',
            type: 'is-danger',
            position: 'is-bottom'
          })

          return
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
.backgroundPainting {
  background-color: #7ea2d9;
  height:950px;
}
.buttonPosition {
  padding-left: 80px;
}
</style>
