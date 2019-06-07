<template>
  <div class="home">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <b-img height="35" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
          MediciNow
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" >
            <b-nav-item  href="#"> Sobre nós</b-nav-item>
            <b-nav-item  href="#plataform">Plataforma</b-nav-item>
            <b-nav-item  href="#">Contato</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="presentation">
      <h1 class="presentation-text">A melhor solução do mercado para agendamento de consultas.</h1>
      <div class='buttons-container'>
        <b-row>
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
      <div class="plataform-explanation" id="plataform">
        <b-row>
          <b-col>
            <b-img width="500px"height="350px" :src="require('../assets/plataform_diagram.png')"  alt="Responsive image" />
          </b-col>
          <b-col>
            <p class="plataform-text">A MediciNow integra mobilidade, praticidade e organização em uma plataforma web e mobile. Marque suas consultas, envie seus exames, veja seu calendário tudo em um único lugar!</p>
          </b-col>
        </b-row>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
  }

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

}
.buttons-container{
  text-align: center;
  margin: 0 300px 300px 300px;
}
.plataform-explanation{
  margin: 0px 50px 100px 0px;
}
.plataform-text{
  margin-top: 50px;
  font-size: 2em;
  text-align:center;
}
</style>
