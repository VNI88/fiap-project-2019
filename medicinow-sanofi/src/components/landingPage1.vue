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
            <b-nav-item   href="/#/register"><b-button  variant="outline-primary" size="sm">Registre-se</b-button></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="bg-img">
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
      <b-row>
        <b-col>
          <b-card v-b-toggle.collapse-1 align="center" >
            <b-card-text class="plataform-card-title">
              Web
            </b-card-text>
            <b-img   :src="require('../assets/www-logo.png')"  alt="Responsive image" />
            <b-collapse id="collapse-1" class="mt-2">
              <b-card-text>
                Acesse ao sistema de qualquer navegador. Veja dashboards customizadas, atualize suas informações e muito mais.
              </b-card-text>
            </b-collapse>
          </b-card>
        </b-col>
        <b-col>
          <b-card  v-b-toggle.collapse-2 align="center">
            <b-card-text class="plataform-card-title" >
              Mobile
            </b-card-text>
            <b-img   :src="require('../assets/mobile.png')"  alt="Responsive image" />
            <b-collapse id="collapse-2" class="mt-2">
              <b-card-text>
                Carregue toda a informação que precisa na palma de suas mãos!
              </b-card-text>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div class="contact" id="contact-1">
      <b-card-group >
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
        id="textarea"
        v-model="text"
        placeholder="Digite aqui sua mensagem"
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-form>
      <div class="contact-button">
        <b-button  variant="outline-dark" size="sm">Enviar</b-button>
      </div>
    </b-card>
    <b-card title="Contatos">
      <b-card-text>
        Endereço: Avenida Lins de Vasconcelos, 356, Cambuci, São Paulo.<br/>
        Telefone: (11) 99843-6963
      </b-card-text>
      <b-row align="center" >
        <b-col lg="4">
          <a href="https://www.linkedin.com"><b-img height="35" :src="require('../assets/square-linkedin-128.png')"  alt="Responsive image" /></a>
        </b-col>
        <b-col lg="4">
          <b-img height="35" :src="require('../assets/social-facebook-square2-128.png')"  alt="Responsive image" />
        </b-col>
        <b-col lg="4">
          <b-img height="35" :src="require('../assets/instagram-square-128.png')"  alt="Responsive image" />
        </b-col>
      </b-row>
    </b-card>
    </b-card-group>
  </div>
  <div class="copyright-area">
    <p> Copyright (c) 2019 MediciNow<br/>
      All Rights Reserved</p>
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
}
.bg-img {
  position: relative;
  width: 100%;
  height: 100%;
  background:
    url("../assets/triangular-back.jpg")
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

</style>
