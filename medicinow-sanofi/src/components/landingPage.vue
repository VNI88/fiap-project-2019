<template>
  <div class="home">
    <div margim-bottom="0px">
      <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <b-img height="35" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
          MediciNow
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" >
            <b-nav-item  href="#about_us"> Sobre nós</b-nav-item>
            <b-nav-item  href="#plataform">Plataforma</b-nav-item>
            <b-nav-item  href="#contact-1">Contato</b-nav-item>
            <b-dropdown size="sm" variant="outline-primary" text="Registre-se" class="m-2">
              <b-dropdown-item href="/#/pacient_register" >Paciente</b-dropdown-item>
              <b-dropdown-item href="/#/doctor_register" >Médico</b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="bg-img-landing text-focus-in">
      <div class="presentation">
        <h1 class="presentation-text">A melhor solução do mercado para agendamento de consultas.
          <div class='buttons-container'>
            <b-button class="ml-auto" href="/#/login" variant="outline-primary" size="lg">Acesse</b-button>
          </div>
        </h1>
      </div>
    </div>
    <div id="about_us" >
      <b-card align="center">
        <b-img :src="require('../assets/About-us.png')"  alt="Responsive image" />
      </b-card>
      <p class="about-us-text">Fundada em 2019, a MediciNow veio com a missão de desburocratizar o agendamento e organização de consultas médicas, com foco em uma solução Web e Mobile.</p>
    </div>

    <div class="plataform-explanation" id="plataform">
      <h1 class="plataform-title">Plataforma</h1>
      <b-row >
        <b-col >
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters class="card-padding">
              <b-col md="6">
                <b-card-img :src="require('../assets/www-logo.png')" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Web">
                  <b-card-text>
                    Acesse ao sistema de qualquer navegador. Veja dashboards customizadas, atualize suas informações e muito mais.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>

          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters class="card-padding">
              <b-col>
                <b-card-img class="mobile-card"  :src="require('../assets/mobile.png')" ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Mobile">
                  <b-card-text>
                    Carregue toda a informação que precisa na palma de suas mãos!
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div class="contact" id="contact-1">
      <b-card-group deck>
        <b-card title="Dúvidas?" sub-title="Deixe sua mensagem abaixo, lhe responderemos o mais rápido possível.">
          <b-form>
            <b-form-group
            id="input-group-1"
            label="Nome:"
            label-for="input-1"
            >
            <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Digite aqui seu nome"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="input-group-5"
          label="Email:"
          label-for="input-5"
          >
          <b-form-input
          id="input-5"
          v-model="form.email"
          type="email"
          required
          placeholder="Insira o email"
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
        id="textarea-no-resize"
        placeholder="Digite aqui sua mensagem"
        rows="4"
        no-resize
        ></b-form-textarea>
      </b-form>
      <div class="contact-button">
        <b-button block variant="outline-dark">Enviar</b-button>
      </div>
    </b-card>
    <b-card title="Contatos">
      <b-card-text>
        Endereço: R. Líbero Badaró, 101 - Centro Histórico de São Paulo, São Paulo - SP, <br/>
        CEP: 01009-000<br/>
        Telefone: (11) 99843-6963
      </b-card-text>
      <a href="https://www.google.com/maps/dir//Soma+Escrit%C3%B3rios+Virtuais+-+R.+L%C3%ADbero+Badar%C3%B3,+101+-+Centro+Hist%C3%B3rico+de+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+01009-000/@-23.5475414,-46.6388483,17.55z/data=!4m16!1m6!3m5!1s0x94ce58534f0e35c5:0xe53badeb628ac709!2sSoma+Escrit%C3%B3rios+Virtuais!8m2!3d-23.5484331!4d-46.6375632!4m8!1m0!1m5!1m1!1s0x94ce58534f0e35c5:0xe53badeb628ac709!2m2!1d-46.6375632!2d-23.5484331!3e2"> <b-img align="center" height="200px" round center :src="require('../assets/Maps.png')"  alt="Responsive image" /> </a>
    </b-card>
  </b-card-group>
</div>
<div class="copyright-area" >
  <a href="https://www.linkedin.com"><b-img class="social-media"  :src="require('../assets/square-linkedin-128.png')"  alt="Responsive image" /></a>
  <b-img  class="social-media" :src="require('../assets/social-facebook-square2-128.png')"  alt="Responsive image" />
  <b-img  class="social-media" :src="require('../assets/instagram-square-128.png')"  alt="Responsive image" />
  <p>
    Copyright (c) 2019 MediciNow
    All Rights Reserved
  </p>
</div>
</div>
</template>

<script>

export default {
  name: 'home',
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
.presentation-text {
  text-align: center;
  padding: 200px 20px 200px 20px;
  font-size:4em;
}
.about-us-text {
  text-align: center;
  padding: 100px 100px 100px 100px;
  font-size:2em;
}
.plataform-title{
  font-size: 3em;
  text-align: center;
  padding-bottom: 10px;
}
.about-us-title{
  font-size: 2em;
  text-align: center;
  padding-bottom: 2px;
}
.plataform-card-title{
  font-weight: bold;
  text-align: center;
  font-size: 1.5em;
  padding-top: 10px;
}
.buttons-container{
  text-align: center;
  margin: 30px 0 0 0
}
.plataform-explanation{
  padding: 50px 40px 100px 40px;
  align-items: center;
  background-color: aliceblue;
}
.contact{
  padding: 100px 200px 100px 200px;
}
.card-padding{
  padding: 20px;
}
.plataform-text{
  margin-top: 50px;
  font-size: 2em;
  text-align:center;
}
.arrow-container{
  align-content: center;
}
.contact-button{
  text-align: center;
  padding-top: 10px;
}
.copyright-area{
  text-align: center;
  background-color: #f8f9fa;
  padding-bottom: 10px;
}
.social-media{
  height: 50px;
  padding:10px;
  align: center;
}
.bg-img-landing {
  position: relative;
  width: 100%;
  height: 100%;
  background:
  url("../assets/triangular-back.jpg")
  center center no-repeat;
  background-size: cover;
}

.bg-img-landing:before {
  content: "";
  position: absolute;
  top: 80%;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
  pointer-events: none;
}
.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
.mobile-card{
  height: 249px;
  width: 80%;
}
</style>
