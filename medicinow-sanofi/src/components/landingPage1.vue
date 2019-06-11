<template>
  <div class="home">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light" fixed="top ">
        <b-navbar-brand href="#">
          <b-img height="35" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
          MediciNow
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" >
            <b-nav-item  href="#"> Sobre nós</b-nav-item>
            <b-nav-item  href="#plataform">Plataforma</b-nav-item>
            <b-nav-item  href="#contact">Contato</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="presentation">
      <h1 class="presentation-text">A melhor solução do mercado para agendamento de consultas.</h1>
      <div class='buttons-container'>
        <b-row >
          <b-col lg="4" class="pb-2">
            <b-button href="/#/register " variant="outline-dark" size="lg">Registre-se</b-button>
          </b-col>
          <b-col lg="4" class="pb-2">
            <b-button class="ml-auto" href="/#/login" variant="outline-primary" size="lg">Acesse</b-button>
          </b-col>
          <b-col lg="4" class="pb-2">
            <b-button variant="outline-dark" size="lg">Baixe o aplicativo</b-button>
          </b-col>
        </b-row>
      </div>
  </div>

  <div class="plataform-explanation">
    <b-row  >
      <b-col bg-variant="primary">
        <b-img width="400px"height="300px" id="plataform" :src="require('../assets/plataform-img.png')"  alt="Responsive image" />
      </b-col>
      <b-col>
        <p class="plataform-text">A MediciNow integra mobilidade, praticidade e organização em uma plataforma web e mobile. Marque suas consultas, envie seus exames, veja seu calendário tudo em um único lugar!</p>
      </b-col>
    </b-row>
  </div>

  <div class="contact" id="contact">
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
    </b-card>
    <b-card title="Contatos">
      <b-card-text>
        Endereço: Avenida Lins de Vasconcelos, 356, Cambuci, São Paulo.<br/>
        Telefone: (11) 99843-6963
      </b-card-text>
      <b-row align="center" >
      <b-col lg="4">
      <a href="https://www.linkedin.com"><b-img height="35":src="require('../assets/square-linkedin-128.png')"  alt="Responsive image" /></a>
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
  margin: 100px;
  font-size:4em;
}
.presentation{
  height: 400px;
  margin-bottom: 200px;
}
.buttons-container{
  text-align: center;
  margin: 0 300px 300px 300px;
}
.plataform-explanation{
  margin: 0px 20px 0px 20px;
  align-items: center;
}
.contact{
  margin: 300px 200px 100px 200px;
}
.plataform-text{
  margin-top: 50px;
  font-size: 2em;
  text-align:center;
}
</style>
