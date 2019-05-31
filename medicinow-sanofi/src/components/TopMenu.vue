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
      <div class="buttons-container">
        <b-button class="ml-auto" variant="outline-primary">Acesse</b-button>
        <b-button margin= 10px variant="outline-primary">Registre-se</b-button>
        <b-button variant="outline-primary">Baixe o a</b-button>
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
  margin: 10px;
}
</style>


