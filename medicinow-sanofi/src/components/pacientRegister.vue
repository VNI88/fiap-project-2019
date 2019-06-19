<template>
  <div class="pacient_register">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <b-img height="35" :src="require('../assets/bandaids.png')"  alt="Responsive image" />
          MediciNow
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" >
            <b-nav-item  href="#"> Sobre nós</b-nav-item>
            <b-nav-item  href="#">Plataforma</b-nav-item>
            <b-nav-item  href="#">Contato</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <h1 class="text" >Cadastro</h1>

    <div class="form">
      <b-card>
        <b-form >
          <b-form-group
            id="input-group-1"
            label="Nome:"
            label-for="input-1"
          >
          <b-form-input
           id="input-1"
           v-model="form.name"
           required
           placeholder="Primeiro nome"
          ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Sobrenome:"
            label-for="input-2"
          >
          <b-form-input
           id="input-2"
           v-model="form.last_name"
           required
           placeholder="Último nome"
          ></b-form-input>
          </b-form-group>

          <b-row>
            <b-col lg="1" class="pb-2">
              <b-form-group
                id="input-group-3"
                label="Sexo:"
                label-align-sm="left"
              >
              </b-form-group>
            </b-col>
            <b-col lg="4">
              <b-form-radio-group
                id="input-3"
                :options="['Masculino', 'Feminino']"
              ></b-form-radio-group>
            </b-col >
            <b-col lg="3" class="pb-2">
              <b-form-group
                id="input-group-4"
                label="Data de nascimento:"
                label-align-sm="left" class="mb-0"
              >
              </b-form-group>
            </b-col>
            <b-col lg="3" class="pb-2">
              <b-form-input type="date"></b-form-input>
            </b-col>
          </b-row>

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

          <b-row>
            <b-col>
              <b-form-group
                id="input-group-6"
                label="Senha:"
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
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-7"
                label="Confirmação de senha:"
                label-for="input-7"
              >
              <b-form-input
                id="input-7"
                v-model="form.confirmpassword"
                type="password"
                required
                placeholder="Insira a senha mesma senha digitada anteriormente"
                aria-describedby="password-help-block"
              ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col lg="7" class="pb-2">
              <b-form-group
                id="input-group-8"
                label="Endereço:"
                label-for="input-8"
              >
              <b-form-input
                id="input-9"
                v-model="form.address"
                required
                placeholder="Insira o endereço"
              ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="5" class="pb-2">
              <b-form-group
                id="input-group-10"
                label="Número:"
                label-align-sm="left" class="mb-0"
                label-for="input-10"
              >
              <b-form-input
                id="input-10"
                v-model="form.number"
                required
                placeholder="Insira o número de sua residência"
              ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group
                id="input-group-city"
                label="Cidade:"
                label-for="input-city"
              >
              <b-form-input
                id="input-city"
                v-model="form.city"
                required
                placeholder="Insira a sua Cidade"
              ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-state"
                label="Estado:"
                label-align-sm="left" class="mb-0"
                label-for="input-state"
              >
              <b-form-input
                id="input-state"
                v-model="form.state"
                required
                placeholder="Insira o seu Estado"
              ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="documents">
            <b-col >
              <b-form-group
                id="input-group-doc-rg"
                label="RG:"
                label-for="input-rg"
              >
              <b-form-input
                id="input-rg"
                v-model="form.rg"
                required
                placeholder="Insira o seu RG"
              ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col >
              <b-form-group
                id="input-group-doc-cpf"
                label="CPF:"
                label-align-sm="left" class="mb-0"
                label-for="input-cpf"
              >
              <b-form-input
                id="input-cpf"
                v-model="form.cpf"
                required
                placeholder="Insira o seu CPF"
              ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>


          <b-form-group
            id="input-group-12"
            label="Convênio:"
            label-for="input-12"
          >
          <b-form-select v-model="selected"
          :options="['Nenhum','Amil', 'Porto Seguro', 'Transmontano','Unimed']"
          ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-card-number"
            label="Número da carteirinha:"
            label-for="input-card-number"
          >
          <b-form-input
           id="input-card-number"
           v-model="form.cardnumber"
           required
           placeholder="Digite o número da cartão de seu convênio - caso a opção anterior tenha sido nenhum, deixe em branco"
          ></b-form-input>
          </b-form-group>
        </b-form>
      </b-card>

    </div>
    <div class="buttons-container">
      <b-button href="/#/login"  variant="outline-dark" size="lg">Finalizar Cadastro</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pacient_register',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  text-align: justify;
  margin: 50px 200px 20px 200px;

}
.text {
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
}
.buttons-container{
  text-align: center;
  margin:0px 0px 20px 0px;
}
.documents{
  padding: 0px 0px 0px 0px;
}

</style>
