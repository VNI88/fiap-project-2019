<template>
  <div class="loginpage">

    <div >
      <b-row >
        <b-column>
          <b-card  class="size">
            <h1 class="logo-text">
              <b-img class="logo"  height="100" :src="require('../assets/bandaids.png')"  alt="Responsive image" />MediciNow</h1>
            </b-card>
          </b-column>
          <b-column>
            <b-card class="size">
              <b-form>
                <b-form-group
                id="input-group-5"
                label="Email:"
                label-for="input-5"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                >
                <b-form-input
                id="input-5"
                v-model="form.email"
                type="email"
                required
                placeholder="Insira o email"
                ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-6"
                  label="Senha:"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  label-for="input-6"
                >
                <b-form-input
                  id="input-6"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Insira a senha"
                  aria-describedby="password-help-block"
                ></b-form-input>
                <b-form-text id="password-help-block">
                  Sua senha deve conter de 8-20 caracteres, com letras e números.
                </b-form-text>
                </b-form-group>
              </b-form>
            </b-card>
          </b-column>
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
.logo {
  margin:10px;
}
.logo-text {
  font-weight:bold;
  text-align: center;
}
.size {
  height: 500px;
  width:500px;
  margin: 200px 0px 200px 0px;
}
</style>
