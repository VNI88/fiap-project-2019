<template>
  <div class="loginpage">


  <div class="size">
  <b-row background-color="black">
    <div class="mod">
    <b-col height="100%" align="center" >
      <b-img  :src="require('../assets/bandaids.png')"  alt="Responsive image" />
    <h1 class='txt'>MediciNow</h1>

  </b-col>
</div>
  <b-col height="100%" >
    <b-form >
      <b-form-group
        id="input-group-5"
        label="E-mail:"
        label-for="input-5"
        label-size="lg"
        label-class="font-weight-bold pt-0"
      >
      <b-form-input
        id="input-5"
        v-model="form.email"
        type="email"
        required
        placeholder="Insira o e-mail"
        size="lg"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="Senha:"
        label-for="input-6"
        label-size="lg"
        label-class="font-weight-bold pt-0"
      >
      <b-form-input
        id="input-6"
        v-model="form.password"
        size="lg"
        type="password"
        required
        placeholder="Insira a senha"
      ></b-form-input>
      </b-form-group>
    </b-form >
    <div class="text-center">
     <b-button variant="outline-dark" size="lg">Login</b-button>
     <p class="note">Esqueceu sua senha?
       <a href=" ">Clique aqui</a>
     </p>
   </div>

  </b-col>
  </b-row>
    </div>
    </div>
  </template>

<script>
  export default {
    name: 'loginpage',
    data() {
    return {
      form: {
        name: '',
        email: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  }
</script>

<style>
.note {
   margin-top: 20px;
}
.txt {
  font-weight:bold;
  text-align: center;
}
.size {
  margin: 200px 0px 0px 0px;
  height:  100%;
}
.mod{
   width: 500px;
}
</style>
