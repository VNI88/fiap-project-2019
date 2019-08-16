<template>
  <div class="loginpage bg-img" >
  <div class="size">

    <b-card  border-variant="light" >


      <h1 class='txt'>
        <b-img   height="100px" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
        MediciNow
      </h1>
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
    <b-img   height="70px" center :src="require('../assets/circle-arrow-down.png')"  alt="Responsive image" />
    <p class="note">Esqueceu sua senha?
      <a href=" ">Clique aqui</a>
    </p>
  </div>

  <div >
    <p align="center">Baixe nosso app!</p>
    <a href="https://play.google.com/store/apps?hl=pt_BR"> <b-img   height="70px" center :src="require('../assets/google-play-badge.png')"  alt="Responsive image" /> </a>
    <a href="https://www.apple.com/br/ios/app-store/"><b-img   height="46px" center :src="require('../assets/baixar-na-app-store-botao.png')"  alt="Responsive image" /> </a>
  </div>
</b-card>
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
  padding-top: 20px;
}
.txt {
  font-weight:bold;
  text-align: center;
  padding-bottom: 10px;
}
.bg-img {
  position: relative;
  width: 100%;
  height: 100%;
  background:
  url("../assets/care-connection-device-1282308.jpg")
  center center no-repeat;
  background-size: cover;
}

.bg-img:before {
  content: "";
  position: absolute;
  top: 80%;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
  pointer-events: none;
}
.size {
  padding: 25px 300px 25px 300px ;
}
</style>
