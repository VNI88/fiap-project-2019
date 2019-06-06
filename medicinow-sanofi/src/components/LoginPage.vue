<template>
  <div class="loginpage">
  <b-row  >
    <b-col height="100%" align="center">
      <b-img height="200em"  :src="require('../assets/bandaids.png')"  alt="Responsive image" />
    <h1 class='txt'>MediciNow</h1>
  </b-col>
  <b-col height="100%">
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Nome:"
        label-for="input-1"
        label-size="lg"
        label-class="font-weight-bold pt-0"
      >
      <b-form-input
       id="input-1"
       v-model="form.name"
       required
       placeholder="Primeiro nome"
       size="lg"
      ></b-form-input>
      </b-form-group>

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
    </b-form >
    <div text-align="center">
     <b-button variant="outline-dark" size="lg" >Login</b-button>
   </div>

  </b-col>
  </b-row>
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
.logo {
  margin:10px;
}
.txt {
  font-weight:bold;
  text-align: center;
}
.size {
  display: block;
     width: 100%;
}

</style>
