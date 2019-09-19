<template>
  <section class="backgroundLoginImage">
    <div style="">
      <p class="header">MediciNOW</p>
      <form >
        <div style="display: flex; margin: 0 auto;" class="phone">
        <div class="modal-card" style="width:auto;">
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
            if (response.data.status === 'success' && response.data.token && response.data.flag === 'pacient') {
              this.$session.start()
              this.$session.set('token', response.data.token)
              this.$session.set('userName', response.data.name)
              this.$session.set('pacient_id', response.data.id)
              response.headers.Authorization = 'Bearer ' + response.data.token
              this.$router.push('/new_appointment')
            }
            else if  (response.data.status === 'success' && response.data.token && response.data.flag === 'doctor') {
              console.log(response.data)
              this.$session.start()
              this.$session.set('token', response.data.token)
              this.$session.set('userName', response.data.name)
              this.$session.set('doctor_id', response.data.id)
              response.headers.Authorization = 'Bearer ' + response.data.token
              this.$router.push('/doctor_appointments')
            }
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
  color:#f0f2f5 !important;
}
.backgroundLoginImage {
  background-image: url("../assets/med_now_back.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  /* position: absolute; */
  height:100vh;
  width: 100vw;
  overflow: auto;
  align-items: center
}
.buttonPosition {
  padding-left:100px;
  align-self: center;
}
@media (min-width: 320px) and (max-width: 424px) {
  .phone {
    background-image: url("../assets/med_now_back.jpeg");
    background-repeat: no-repeat;
    margin: 0 auto !important;
    justify-content: center;
  }
 }
</style>
