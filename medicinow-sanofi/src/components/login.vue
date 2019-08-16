<template>
<section>
  <div class="container">
    <div class="notification">
  <b-field label="Nome">
        <b-input size="is-medium"
        placeholder="Insira o seu nome aqui"></b-input>
    </b-field>

    <b-field label="Sobrenome">
        <b-input size="is-medium"
        placeholder="Insira o seu nome aqui">
      </b-input>
    </b-field>

    <b-field label="Telefone"
        type="number">
        <b-input size="is-medium" maxlength="30"></b-input>
    </b-field>

    <b-field label="Email">
        <b-input
            type="email"
            size="is-medium"
            maxlength="30">
        </b-input>
    </b-field>

    <b-field label="Password">
        <b-input
        type="password"
        maxlength="8"
        password-reveal
        ></b-input>
    </b-field>
  </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          labelPosition: 'on-border'
      }
  }
}
</script>


<style>
</style>
