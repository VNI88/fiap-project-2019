<template>
  <section class="backgroundPainting">
    <p class="header">MediciNOW</p>
    <div class="container ">
        <form action="">
           <div class="modal-card" style="width:300px;">
               <section class="modal-card-body">
                   <b-field label="Email">
                       <b-input
                           type="email"
                           placeholder="Seu email"
                           required>
                       </b-input>
                   </b-field>

                   <b-field label="Senha">
                       <b-input
                           type="password"
                           password-reveal
                           placeholder="Sua senha"
                           required>
                       </b-input>
                   </b-field>

                   <b-checkbox>Remember me</b-checkbox>
               </section>
               <footer class="modal-card-foot">
                   <button class="button is-primary">Login</button>
               </footer>
           </div>
         </form>
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

  methods: {

    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {


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
</style>
