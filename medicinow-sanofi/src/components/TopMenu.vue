<template>
<div>
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <b-img height="35" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
          MediciNow
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto" >
              <b-nav-item  href="#">Sobre nós</b-nav-item>
              <b-nav-item  href="#">Plataforma</b-nav-item>
              <b-nav-item  href="#">Contato</b-nav-item>
            </b-navbar-nav>
          
      
        </b-collapse>
      </b-navbar>
    </div>
    <div>
      <h1 class="presentation-text">A melhor solução do mercado para agendamento de consultas.</h1>
        <div class='buttons-container'>
          <b-row>
            <b-col lg="4" class="pb-2">
            <b-button variant="outline-dark" size="lg">Registre-se</b-button>
            </b-col>
            <b-col lg="4" class="pb-2">
            <b-button class="ml-auto" variant="outline-primary" size="lg">Acesse</b-button>
            </b-col>
            <b-col lg="4" class="pb-2">
            <b-button variant="outline-dark" size="lg">Baixe o aplicativo</b-button>
            </b-col>
          </b-row>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
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
.buttons-container{
  text-align: center;
  margin: 0 300px;
}
</style>


